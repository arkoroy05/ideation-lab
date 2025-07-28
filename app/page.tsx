import {
  ArrowRight,
  QrCode,
  Zap,
  Users,
  Smartphone,
  Shield,
  Star,
  Check,
  Home,
  BookOpen,
  DollarSign,
  Phone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects"
import { NavBar } from "@/components/ui/tubelight-navbar"
import { TestimonialSlider } from "@/components/ui/testimonial-slider"

export default function LandingPage() {
  const navItems = [
    { name: "Home", url: "#", icon: Home },
    { name: "Features", url: "#features", icon: BookOpen },
    { name: "Pricing", url: "#pricing", icon: DollarSign },
    { name: "Contact", url: "#contact", icon: Phone },
  ]

  const testimonials = [
    {
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote:
        "ClassroomAI transformed my lectures completely. Students are now actively participating and I can see their understanding in real-time!",
      name: "Dr. Sarah Chen",
      role: "Professor, Stanford University",
    },
    {
      img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      quote:
        "The AI-powered quiz timing is incredible. It knows exactly when students need a break or when to reinforce concepts.",
      name: "Prof. Maria Rodriguez",
      role: "Education Technology Lead, MIT",
    },
    {
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote:
        "Setup was effortless and my students love the interactive elements. Engagement scores have never been higher!",
      name: "Dr. James Wilson",
      role: "Computer Science, UC Berkeley",
    },
    {
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote: "Finally, a tool that makes large lecture halls feel intimate. Every student feels heard and engaged.",
      name: "Dr. Emily Johnson",
      role: "Psychology Department, Harvard",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* New Tubelight Navigation */}
      <NavBar items={navItems} />

      {/* Hero Section */}
      <section className="bg-[#f8f9fa] py-20 px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="space-y-2">
                <h1 className="text-5xl lg:text-6xl font-[800] text-[#1a1a1a] leading-tight tracking-tight">
                  Transform boring lectures into
                </h1>
                <h1 className="text-5xl lg:text-6xl font-[800] text-[#1a1a1a] leading-tight tracking-tight">
                  interactive learning sessions
                </h1>
              </div>

              {/* Email Signup Form */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
                <input
                  type="email"
                  placeholder="Enter your school email"
                  className="flex-1 px-4 py-3 bg-gray-100 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
                <Button className="bg-[#1a1a1a] hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2">
                  Get demo access
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center gap-2 text-[#6b7280] text-sm">
                <Shield className="w-4 h-4" />
                <span>No app install required • Zero setup for students</span>
              </div>
            </div>

            {/* Interactive Demo Section - Card Stack */}
            <div className="relative h-[500px] lg:h-[600px]">
              {/* Card 1: Live Quiz Interface (Bottom Left) */}
              <div className="absolute bottom-0 left-0 w-80 bg-white/95 backdrop-blur-sm rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.1),0_1px_4px_rgba(0,0,0,0.05)] p-6 z-10 hover:shadow-[0_8px_30px_rgba(0,0,0,0.15),0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-200 hover:-translate-y-1">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm font-semibold text-gray-800">Live Quiz • Biology 101</span>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <div className="w-4 h-4 border border-current"></div>
                  </button>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                    <QrCode className="w-5 h-5 text-gray-600" />
                  </div>
                  <span className="text-xs text-gray-600">Scan to join</span>
                </div>

                <div className="space-y-3">
                  <div className="text-sm text-gray-600">Question 3 of 8</div>
                  <div className="font-semibold text-gray-900 mb-3">Which organelle produces ATP?</div>

                  <div className="space-y-2">
                    {["A) Nucleus", "B) Mitochondria", "C) Ribosome", "D) Golgi apparatus"].map((option, i) => (
                      <div
                        key={i}
                        className="p-2 bg-gray-50 rounded-lg text-sm hover:bg-gray-100 cursor-pointer transition-colors"
                      >
                        {option}
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xs text-gray-600">23/25 students responded</span>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 border-2 border-blue-500 rounded-full relative">
                        <div
                          className="absolute inset-1 bg-blue-500 rounded-full"
                          style={{ clipPath: "polygon(0 0, 75% 0, 75% 100%, 0 100%)" }}
                        ></div>
                      </div>
                      <Button size="sm" className="bg-[#10b981] hover:bg-green-600 text-white text-xs px-3 py-1">
                        Next Question
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: AI Engagement Insights (Center) */}
              <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-gradient-to-br from-[#e1f5fe] to-[#b3e5fc] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.1),0_1px_4px_rgba(0,0,0,0.05)] p-6 z-20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.15),0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-200 hover:-translate-y-1">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-semibold">AI</div>
                </div>

                <div className="text-center mb-4">
                  <div className="text-5xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
                    89%
                    <div className="w-6 h-6 text-green-500">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 14l3-3 3 3 5-5v4h4V7h-6l5 5-3 3-3-3-3 3z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Class engagement increased with AI-powered quiz timing
                  </p>
                </div>

                {/* Mini Chart */}
                <div className="h-16 bg-white/50 rounded-lg p-2 flex items-end justify-between">
                  {[40, 60, 45, 80, 75, 90, 85].map((height, i) => (
                    <div key={i} className="bg-blue-500 rounded-sm w-3" style={{ height: `${height}%` }}></div>
                  ))}
                </div>
              </div>

              {/* Card 3: Teacher Dashboard Preview (Bottom Center) */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-x-8 w-96 bg-white/95 backdrop-blur-sm rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.1),0_1px_4px_rgba(0,0,0,0.05)] p-6 z-15 hover:shadow-[0_8px_30px_rgba(0,0,0,0.15),0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-200 hover:-translate-y-1">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Real-time Insights</h3>
                  <p className="text-sm text-gray-600">Monitor understanding as you teach</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm text-gray-600 mb-1">Attention Score</div>
                    <div className="text-2xl font-bold text-gray-900">92%</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm text-gray-600 mb-1">Comprehension</div>
                    <div className="text-lg font-semibold text-green-600">High</div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="text-xs px-3 py-1 bg-transparent">
                    Add Quiz
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs px-3 py-1 bg-transparent">
                    Recap
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs px-3 py-1 bg-transparent">
                    Flashcards
                  </Button>
                </div>
              </div>

              {/* Card 4: PowerPoint Integration (Top Right) */}
              <div className="absolute top-0 right-0 w-80 bg-gradient-to-br from-[#fff3e0] to-[#ffe0b2] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.1),0_1px_4px_rgba(0,0,0,0.05)] p-6 z-25 hover:shadow-[0_8px_30px_rgba(0,0,0,0.15),0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-200 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white font-bold text-sm">
                    P
                  </div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>

                <div className="bg-white/70 rounded-lg p-3 mb-4">
                  <div className="w-full h-16 bg-gray-200 rounded mb-2 flex items-center justify-center text-xs text-gray-500">
                    Slide Preview
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-800">Slide 12: Add quiz here</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-800">Complexity: Medium</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-800">Predicted drop-off: 15%</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-orange-200">
                  <div className="text-xs text-gray-600 mb-1">Tuesday, 14 Mar • Prof. Johnson</div>
                  <div className="flex items-center gap-2 text-xs">
                    <Check className="w-3 h-3 text-green-600" />
                    <span className="text-green-600 font-medium">AI analysis complete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Slider Section - Replacing "Designed For the Way You Teach" */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Designed For the Way You Teach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from educators who have transformed their classrooms with AI-powered engagement
            </p>
          </div>
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* Features Section with Hover Effects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Everything You Need</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive features designed to transform your classroom experience
            </p>
          </div>
          <FeaturesSectionWithHoverEffects />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center text-white">
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-4">10x</div>
              <div className="text-xl opacity-90">More Feedback Collected</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-4">10K+</div>
              <div className="text-xl opacity-90">Real-Time Assessments Delivered</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-4">95%</div>
              <div className="text-xl opacity-90">Student Engagement Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Your Mentors */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Meet Your Mentors</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Sarah Chen",
                title: "Education Technology Expert",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Prof. Michael Rodriguez",
                title: "AI Learning Specialist",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Dr. Emily Johnson",
                title: "Classroom Innovation Lead",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Dr. James Wilson",
                title: "Student Engagement Expert",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((mentor, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white rounded-2xl overflow-hidden"
              >
                <CardContent className="p-0">
                  <img
                    src={mentor.image || "/placeholder.svg"}
                    alt={mentor.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{mentor.name}</h3>
                    <p className="text-gray-600">{mentor.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features by User Type */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Find the Right Fit for You</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">For Teachers</h3>
                <p className="text-lg text-gray-600 mb-6">Plug & Play</p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Easy PowerPoint integration
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Pre-built quiz templates
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Real-time student feedback
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-lime-500 to-lime-600 rounded-2xl flex items-center justify-center mb-6">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">For Students</h3>
                <p className="text-lg text-gray-600 mb-6">No App, Just Scan</p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    QR code access
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Works on any device
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Anonymous participation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">For Admins</h3>
                <p className="text-lg text-gray-600 mb-6">Analytics Dashboard</p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Institution-wide insights
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Performance tracking
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Custom reporting
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Success Stories</h2>
          </div>
          <Card className="border-0 shadow-2xl bg-white rounded-3xl overflow-hidden">
            <CardContent className="p-12">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-2xl md:text-3xl text-gray-900 font-medium leading-relaxed mb-8">
                "I've never seen my classmates this active during lectures. The AI quizzes pop up at exactly the right
                moments, and everyone actually participates!"
              </blockquote>
              <div className="flex items-center">
                <img
                  src="/placeholder.svg?height=60&width=60"
                  alt="Student testimonial"
                  className="w-15 h-15 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">Alex Thompson</div>
                  <div className="text-gray-600">Computer Science Student, MIT</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Flexible Plans for Every Learner</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <Card className="border-0 shadow-lg bg-white rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Starter</h3>
                <div className="text-4xl font-bold text-gray-900 mb-6">
                  $29<span className="text-lg text-gray-600 font-normal">/mo</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-600">Up to 50 quizzes/month</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-600">1 classroom</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-600">Basic analytics</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-600">Email support</span>
                  </li>
                </ul>
                <Button className="w-full bg-transparent" variant="outline">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="border-0 shadow-xl bg-white rounded-2xl overflow-hidden relative">
              <Badge className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black font-semibold px-4 py-1">
                Most Popular
              </Badge>
              <CardContent className="p-8 pt-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Pro</h3>
                <div className="text-4xl font-bold text-gray-900 mb-6">
                  $59<span className="text-lg text-gray-600 font-normal">/mo</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-600">Unlimited quizzes</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-600">Unlimited classrooms</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-600">AI quiz engine</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-600">Advanced analytics</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-600">Priority support</span>
                  </li>
                </ul>
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            {/* Institution Plan */}
            <Card className="border-0 shadow-lg bg-white rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Institution</h3>
                <div className="text-4xl font-bold text-gray-900 mb-6">Custom</div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-600">Everything in Pro</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-600">Admin dashboard</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-600">Custom onboarding</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-600">Dedicated support</span>
                  </li>
                </ul>
                <Button className="w-full bg-transparent" variant="outline">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Take the First Step Toward{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-lime-400 bg-clip-text text-transparent">
              Smarter Classrooms
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Join thousands of educators transforming their teaching experience
          </p>
          <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-12 py-6 text-xl">
            Start Free Trial
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-black" />
                </div>
                <span className="text-xl font-bold">ClassroomAI</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Transforming education through AI-powered classroom engagement.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Pricing</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Plans
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Enterprise
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Education Discount
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ClassroomAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
