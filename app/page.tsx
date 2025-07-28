"use client"

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
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects"
import { NavBar } from "@/components/ui/tubelight-navbar"
import { TestimonialSlider } from "@/components/ui/testimonial-slider"
import { CreativePricingDemo } from "@/components/ui/creative-pricing-demo"
import Testimonials from "@/components/ui/testimonials-columns"
import { WhyChooseUsSection } from "@/components/ui/why-choose-us-section"
import { PluginCard } from "@/components/ui/plugin-card"

export default function LandingPage() {
  const navItems = [
    { name: "Home", url: "#", icon: Home },
    { name: "Features", url: "#features", icon: BookOpen },
    { name: "Pricing", url: "#pricing", icon: DollarSign },
    { name: "Contact", url: "#contact", icon: Phone },
  ]

  const testimonials = [
    {
      img: "/placeholder.svg?height=150&width=150",
      quote:
        "Lectures are now more engaging and interactive. Students are more engaged and I can see their understanding in real-time!",
      name: "Unconvential Learning",
      role: "",
    },
    {
      img: "/placeholder.svg?height=150&width=150",
      quote:
        "The AI-powered timing is incredible. It knows exactly when to ask questions and when to move on to the next topic.",
      name: "Effective Learning",
      role: "",
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

  

      {/* Features by User Type */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Find the Right Fit for You</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 justify-items-center">
            <PluginCard
              title="ClassroomAI Teacher"
              subtitle="PowerPoint Integration"
              description="Transform your existing PowerPoint presentations into interactive learning experiences with AI-powered engagement tools."
              iconBg="#3B82F6"
              iconContent="T"
              buttonText="Get Started"
              statsText="50,000+ teachers using"
              highlightWord="interactive"
              onInstall={() => console.log("Teacher plan selected")}
            />
            
            <PluginCard
              title="ClassroomAI Student"
              subtitle="QR Code Access"
              description="Join classroom sessions instantly with just a QR code scan. No app downloads required, works on any device."
              iconBg="#10B981"
              iconContent="S"
              buttonText="Join Session"
              statsText="500,000+ students engaged"
              highlightWord="instant"
              onInstall={() => console.log("Student access selected")}
            />
            
            <PluginCard
              title="ClassroomAI Admin"
              subtitle="Analytics Dashboard"
              description="Monitor institution-wide engagement metrics and performance analytics with comprehensive reporting tools."
              iconBg="#F59E0B"
              iconContent="A"
              buttonText="View Analytics"
              statsText="1,000+ institutions"
              highlightWord="comprehensive"
              onInstall={() => console.log("Admin dashboard selected")}
            />
          </div>
        </div>
      </section>

      {/* Success Stories - New Testimonials Component */}
      <Testimonials />

      {/* Why Choose Us Section with Glassmorphism Cards */}
      <WhyChooseUsSection />

      {/* Creative Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <CreativePricingDemo />
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How does the AI detect when students might lose interest?</h3>
              <p className="text-gray-600">Our AI analyzes your PowerPoint content, slide complexity, and presentation patterns to identify optimal moments for engagement. It considers factors like slide duration, content density, and topic transitions.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do students need to install any app?</h3>
              <p className="text-gray-600">No! Students simply scan the QR code displayed in your presentation and access quizzes directly through their mobile browser. No downloads or installations required.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What types of assessments can I create?</h3>
              <p className="text-gray-600">You can create multiple-choice quizzes, true/false questions, short answer prompts, and flashcards. Our AI can also auto-generate questions based on your presentation content.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How does the real-time analytics work?</h3>
              <p className="text-gray-600">As students respond to quizzes, you'll see live engagement metrics, comprehension scores, and individual student performance. The dashboard updates in real-time during your lecture.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I integrate with my existing LMS?</h3>
              <p className="text-gray-600">Yes! We offer integrations with popular Learning Management Systems like Moodle, Canvas, and Blackboard. Enterprise plans include custom API access for deeper integrations.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What about data privacy and security?</h3>
              <p className="text-gray-600">We follow strict data protection standards. Student responses are anonymized, and all data is encrypted. We're compliant with educational privacy regulations including FERPA and GDPR.</p>
            </div>
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
