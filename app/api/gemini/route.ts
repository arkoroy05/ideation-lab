import { NextRequest, NextResponse } from "next/server"

// Using the official Google Generative AI SDK
// npm i @google/generative-ai
import { GoogleGenerativeAI } from "@google/generative-ai"

const MODEL_NAME = process.env.GEMINI_MODEL_NAME || "gemini-1.5-flash"

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY is not set on the server. Please add it to your environment." },
        { status: 500 }
      )
    }

    const { textCombined, fileName, prompt } = (await req.json()) as {
      textCombined?: string
      fileName?: string
      prompt?: string
    }

    if (!textCombined || !textCombined.trim()) {
      return NextResponse.json({ error: "Missing textCombined" }, { status: 400 })
    }

    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({ model: MODEL_NAME })

    const defaultPrompt =
      prompt?.trim() ||
      "You are an assistant that receives the full text extracted from a PowerPoint deck. Summarize the content slide-by-slide, extract key topics, and propose 5 quiz questions that test comprehension. Keep the output concise and well-structured."

    const systemPreamble = fileName ? `File: ${fileName}` : undefined

    const input = [
      systemPreamble ? `${systemPreamble}\n` : "",
      defaultPrompt,
      "\n---\n",
      "Presentation Text:\n",
      textCombined,
    ].join("")

    const result = await model.generateContent({ contents: [{ role: "user", parts: [{ text: input }] }] })
    const responseText = result.response?.text?.() || ""

    return NextResponse.json({ output: responseText, model: MODEL_NAME })
  } catch (err: any) {
    console.error("/api/gemini error", err)
    return NextResponse.json({ error: err?.message || "Unknown error" }, { status: 500 })
  }
}
