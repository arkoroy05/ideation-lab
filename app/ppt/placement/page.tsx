"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"

type PlacementSuggestion = {
  slide: number
  type: "quiz" | "flashcard"
  position: "before" | "after" | "during"
  reason: string
  notes?: string
}

type PlacementStructured = {
  suggestions: PlacementSuggestion[]
}

export default function PlacementPage() {
  const [fileName, setFileName] = useState<string | null>(null)
  const [pending, setPending] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  const [model, setModel] = useState<string>("")
  const [structured, setStructured] = useState<PlacementStructured | null>(null)
  const [suggestions, setSuggestions] = useState<PlacementSuggestion[]>([])
  const [newRow, setNewRow] = useState<PlacementSuggestion>({ slide: 1, type: "quiz", position: "after", reason: "" })

  useEffect(() => {
    if (typeof window === "undefined") return
    const name = sessionStorage.getItem("pptParsedFileName")
    setFileName(name)

    const existing = sessionStorage.getItem("geminiPlacementStructured")
    const existingErr = sessionStorage.getItem("geminiPlacementError") || ""
    const existingModel = sessionStorage.getItem("geminiPlacementModel") || ""
    const isPending = !!sessionStorage.getItem("geminiPlacementPending")

    if (existing) setStructured(JSON.parse(existing))
    setError(existingErr)
    setModel(existingModel)
    setPending(isPending)

    if (!existing && !isPending) {
      const combined = sessionStorage.getItem("pptTextCombined") || ""
      if (!combined.trim()) return
      // Pass topics from summary (if available)
      let topics: string[] | undefined = undefined
      try {
        const s = sessionStorage.getItem("geminiSummaryStructured")
        if (s) {
          const parsed = JSON.parse(s)
          if (Array.isArray(parsed?.topics)) topics = parsed.topics
        }
      } catch {}

      ;(async () => {
        try {
          setPending(true)
          sessionStorage.setItem("geminiPlacementPending", "1")
          sessionStorage.removeItem("geminiPlacementStructured")
          sessionStorage.removeItem("geminiPlacementError")
          sessionStorage.removeItem("geminiPlacementModel")

          const res = await fetch("/api/gemini", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ textCombined: combined, fileName: name || undefined, mode: "placement", topics }),
          })
          const json = await res.json()
          if (res.ok) {
            if (json.structured) {
              sessionStorage.setItem("geminiPlacementStructured", JSON.stringify(json.structured))
              setStructured(json.structured)
            }
            sessionStorage.setItem("geminiPlacementModel", json.model || "")
            setModel(json.model || "")
            sessionStorage.removeItem("geminiPlacementError")
            setError("")
          } else {
            const msg = json?.error || "Gemini placement call failed"
            sessionStorage.setItem("geminiPlacementError", msg)
            setError(msg)
          }
        } catch (e: any) {
          const msg = e?.message || "Gemini placement call failed"
          sessionStorage.setItem("geminiPlacementError", msg)
          setError(msg)
        } finally {
          sessionStorage.removeItem("geminiPlacementPending")
          setPending(false)
        }
      })()
    }
  }, [])

  // sync editable list when structured changes
  useEffect(() => {
    setSuggestions(structured?.suggestions || [])
  }, [structured])

  const hasUnsaved = useMemo(() => {
    try {
      const saved = JSON.stringify(structured?.suggestions || [])
      const curr = JSON.stringify(suggestions)
      return saved !== curr
    } catch {
      return false
    }
  }, [structured, suggestions])

  function saveChanges() {
    const payload: PlacementStructured = { suggestions }
    setStructured(payload)
    sessionStorage.setItem("geminiPlacementStructured", JSON.stringify(payload))
  }

  function resetChanges() {
    try {
      const s = sessionStorage.getItem("geminiPlacementStructured")
      if (s) setStructured(JSON.parse(s))
    } catch {}
  }

  function updateSuggestion(index: number, patch: Partial<PlacementSuggestion>) {
    setSuggestions((prev) => prev.map((s, i) => (i === index ? { ...s, ...patch } : s)))
  }

  function deleteSuggestion(index: number) {
    setSuggestions((prev) => prev.filter((_, i) => i !== index))
  }

  function addSuggestion() {
    if (!newRow.reason.trim()) return
    setSuggestions((prev) => [...prev, { ...newRow }])
    setNewRow({ slide: 1, type: "quiz", position: "after", reason: "" })
  }

  const groupedBySlide = useMemo(() => {
    const map = new Map<number, Array<PlacementSuggestion & { _idx: number }>>()
    ;(suggestions || []).forEach((s, idx) => {
      const arr = map.get(s.slide) || []
      arr.push({ ...s, _idx: idx })
      map.set(s.slide, arr)
    })
    // Sort slides ascending and within-slide order quiz before flashcard and before->during->after
    const orderPosition: Record<PlacementSuggestion["position"], number> = { before: 0, during: 1, after: 2 }
    const orderType: Record<PlacementSuggestion["type"], number> = { quiz: 0, flashcard: 1 }
    for (const [k, arr] of map) {
      arr.sort((a, b) => orderPosition[a.position] - orderPosition[b.position] || orderType[a.type] - orderType[b.type])
      map.set(k, arr)
    }
    return Array.from(map.entries()).sort((a, b) => a[0] - b[0])
  }, [suggestions])

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50">
      {/* Sticky header */}
      <div className="sticky top-0 z-10 border-b border-gray-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
          <div>
            <h1 className="text-xl md:text-2xl font-semibold tracking-tight text-gray-900">Suggested Insertions</h1>
            <div className="text-xs md:text-sm text-gray-600 mt-0.5">
              {fileName || "Untitled presentation"}
              {model && <span className="ml-2 text-gray-400">• Model: {model}</span>}
              {hasUnsaved && <span className="ml-2 text-amber-700 bg-amber-100 border border-amber-200 rounded px-1.5 py-0.5">Unsaved</span>}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={saveChanges}
              disabled={!hasUnsaved}
              className="rounded-md bg-indigo-600 px-3 py-1.5 text-xs md:text-sm font-medium text-white shadow-sm hover:bg-indigo-700 disabled:opacity-50"
            >
              Save
            </button>
            <button
              onClick={resetChanges}
              disabled={!hasUnsaved}
              className="rounded-md bg-white px-3 py-1.5 text-xs md:text-sm font-medium text-gray-800 border hover:bg-gray-50 disabled:opacity-50"
            >
              Reset
            </button>
            <Link href="/ppt/study" className="rounded-md bg-white px-3 py-1.5 text-xs md:text-sm font-medium text-gray-800 border hover:bg-gray-50">
              Back
            </Link>
            <Link href="/ppt" className="rounded-md bg-gray-900 px-3 py-1.5 text-xs md:text-sm font-medium text-white hover:bg-black">
              New File
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-6 space-y-6">

        {pending && (
          <div className="rounded-xl border border-gray-200 bg-white p-6 animate-pulse shadow-sm">
            <div className="h-4 bg-gray-200 rounded w-1/3 mb-3" />
            <div className="h-3 bg-gray-200 rounded w-11/12 mb-2" />
            <div className="h-3 bg-gray-200 rounded w-10/12" />
            <p className="text-xs text-gray-500 mt-2">Analyzing attention span and placement opportunities…</p>
          </div>
        )}

        {!pending && error && (
          <div className="rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-700">{error}</div>
        )}

        {!pending && !error && (!structured || (structured?.suggestions || []).length === 0) && (
          <div className="rounded-xl border border-amber-300 bg-amber-50 p-5 text-sm text-amber-900">
            No placement suggestions found. You can still insert study items after dense slides or topic transitions.
          </div>
        )}

        {!pending && !error && structured && (
          <section className="space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Timeline by Slide</h2>
            </div>
            {/* Add row */}
            <div className="rounded-xl border border-dashed border-gray-300 p-4 bg-white shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                <div className="md:col-span-2">
                  <label className="block text-xs text-gray-600 mb-1">Slide</label>
                  <input
                    type="number"
                    min={1}
                    value={newRow.slide}
                    onChange={(e) => setNewRow((r) => ({ ...r, slide: Number(e.target.value) }))}
                    className="w-full rounded-md border px-2 py-2 text-sm"
                  />
                </div>
                <div className="md:col-span-3">
                  <label className="block text-xs text-gray-600 mb-1">Type</label>
                  <div className="inline-flex overflow-hidden rounded-lg border bg-gray-50">
                    {(["quiz", "flashcard"] as const).map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setNewRow((r) => ({ ...r, type: opt }))}
                        className={`px-3 py-2 text-xs font-medium ${
                          newRow.type === opt ? "bg-purple-600 text-white" : "text-gray-700 hover:bg-gray-100"
                        }`}
                        aria-pressed={newRow.type === opt}
                      >
                        {opt === "quiz" ? "❓ Quiz" : "🗂️ Flashcard"}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-3">
                  <label className="block text-xs text-gray-600 mb-1">Position</label>
                  <div className="inline-flex overflow-hidden rounded-lg border bg-gray-50">
                    {(["before", "during", "after"] as const).map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setNewRow((r) => ({ ...r, position: opt }))}
                        className={`px-3 py-2 text-xs font-medium ${
                          newRow.position === opt ? "bg-green-600 text-white" : "text-gray-700 hover:bg-gray-100"
                        }`}
                        aria-pressed={newRow.position === opt}
                      >
                        {opt === "before" ? "⬅️ Before" : opt === "during" ? "⏯️ During" : "➡️ After"}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-4">
                  <label className="block text-xs text-gray-600 mb-1">Reason</label>
                  <input
                    value={newRow.reason}
                    onChange={(e) => setNewRow((r) => ({ ...r, reason: e.target.value }))}
                    placeholder="Why here? (attention, density, transition)"
                    className="w-full rounded-md border px-3 py-2 text-sm"
                  />
                </div>
                <div className="md:col-span-10">
                  <label className="block text-xs text-gray-600 mb-1">Notes (optional)</label>
                  <input
                    value={newRow.notes || ""}
                    onChange={(e) => setNewRow((r) => ({ ...r, notes: e.target.value }))}
                    placeholder="Any extra guidance"
                    className="w-full rounded-md border px-3 py-2 text-sm"
                  />
                </div>
                <div className="md:col-span-2 flex items-end">
                  <button
                    onClick={addSuggestion}
                    disabled={!newRow.reason.trim()}
                    className="w-full rounded-md bg-emerald-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 disabled:opacity-50"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              {groupedBySlide.map(([slideNo, items]) => (
                <div key={slideNo} className="rounded-xl border border-gray-200 p-4 bg-white shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-semibold text-gray-900">Slide {slideNo}</div>
                    <div className="text-xs text-gray-500">{items.length} suggestion{items.length !== 1 ? "s" : ""}</div>
                  </div>
                  <div className="space-y-3">
                    {items.map((s) => (
                      <div key={s._idx} className="grid grid-cols-1 md:grid-cols-12 gap-3 border rounded-lg p-3">
                        <div className="md:col-span-3">
                          <label className="block text-[10px] text-gray-600 mb-1">Type</label>
                          <div className="inline-flex overflow-hidden rounded-md border bg-gray-50">
                            {(["quiz", "flashcard"] as const).map((opt) => (
                              <button
                                key={opt}
                                type="button"
                                onClick={() => updateSuggestion(s._idx, { type: opt })}
                                className={`px-3 py-1.5 text-xs font-medium ${
                                  s.type === opt ? "bg-purple-600 text-white" : "text-gray-700 hover:bg-gray-100"
                                }`}
                                aria-pressed={s.type === opt}
                              >
                                {opt === "quiz" ? "❓ Quiz" : "🗂️ Flashcard"}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className="md:col-span-3">
                          <label className="block text-[10px] text-gray-600 mb-1">Position</label>
                          <div className="inline-flex overflow-hidden rounded-md border bg-gray-50">
                            {(["before", "during", "after"] as const).map((opt) => (
                              <button
                                key={opt}
                                type="button"
                                onClick={() => updateSuggestion(s._idx, { position: opt })}
                                className={`px-3 py-1.5 text-xs font-medium ${
                                  s.position === opt ? "bg-green-600 text-white" : "text-gray-700 hover:bg-gray-100"
                                }`}
                                aria-pressed={s.position === opt}
                              >
                                {opt === "before" ? "⬅️ Before" : opt === "during" ? "⏯️ During" : "➡️ After"}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className="md:col-span-5">
                          <label className="block text-[10px] text-gray-600 mb-1">Reason</label>
                          <input
                            value={s.reason}
                            onChange={(e) => updateSuggestion(s._idx, { reason: e.target.value })}
                            className="w-full rounded-md border px-3 py-2 text-xs"
                          />
                        </div>
                        <div className="md:col-span-11">
                          <label className="block text-[10px] text-gray-600 mb-1">Notes</label>
                          <input
                            value={s.notes || ""}
                            onChange={(e) => updateSuggestion(s._idx, { notes: e.target.value })}
                            className="w-full rounded-md border px-3 py-2 text-xs"
                          />
                        </div>
                        <div className="md:col-span-1 flex items-end">
                          <button
                            onClick={() => deleteSuggestion(s._idx)}
                            className="w-full rounded-md bg-rose-600 px-2 py-2 text-xs font-medium text-white hover:bg-rose-700"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
