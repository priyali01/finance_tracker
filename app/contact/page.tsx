"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, ArrowLeft, Mail, Phone, MapPin, Clock, Send, MessageCircle, HeadphonesIcon } from "lucide-react"
import Link from "next/link"

const contactMethods = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Get help via email",
    contact: "support@finaylzeit.com",
    availability: "24/7 response within 2 hours",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak with our team",
    contact: "+91 98765 43210",
    availability: "Mon-Fri, 9 AM - 6 PM IST",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Instant messaging support",
    contact: "Available on website",
    availability: "Mon-Fri, 9 AM - 6 PM IST",
  },
  {
    icon: HeadphonesIcon,
    title: "Premium Support",
    description: "Priority support for Pro users",
    contact: "premium@finaylzeit.com",
    availability: "24/7 with 30-min response",
  },
]

const faqs = [
  {
    question: "Is this platform free to use?",
    answer:
      "Yes, the core features are completely free. We’re committed to making financial management accessible for everyone.",
  },
  {
    question: "Do I need to create an account to start?",
    answer:
      "You can explore the platform without signing up, but creating an account lets you save your data, set goals, and track your progress over time.",
  },
  {
    question: "Is my financial data secure?",
    answer:
      "Absolutely. We prioritize your privacy and never store sensitive financial data without your consent.",
  },
  {
    question: "Can I use this on mobile?",
    answer:
      "Yes, the platform is fully responsive and works smoothly on desktops, tablets, and smartphones.",
  },
  {
    question: "What kind of goals can I set?",
    answer:
      "You can set savings goals, debt payoff plans, budgeting targets, and more — all customizable to fit your lifestyle.",
  },
];


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-light tracking-tight text-white">FinaylzeIt</span>
            </Link>
            <Link href="/">
              <Button variant="ghost" className="text-gray-300 hover:text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="mb-6 bg-purple-900/50 text-purple-300 border-purple-700 px-4 py-2">
              <MessageCircle className="w-4 h-4 mr-2" />
              Get in Touch
            </Badge>
            <h1 className="text-5xl md:text-6xl font-light tracking-tight text-white mb-6 leading-tight">
              We're Here to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Help</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed opacity-90">
              Have questions about FinaylzeIt? Need support with your account? Want to share feedback? We'd love to hear
              from you. Our team is here to help you succeed with your financial goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-black/40 backdrop-blur-xl border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Send us a Message</CardTitle>
                  <CardDescription className="text-gray-400">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="bg-green-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Send className="w-8 h-8 text-green-400" />
                      </div>
                      <h3 className="text-xl font-medium text-white mb-2">Message Sent!</h3>
                      <p className="text-gray-400">
                        Thank you for contacting us. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-gray-300">
                            Name
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-gray-300">
                            Email
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-gray-300">
                          Subject
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="What's this about?"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-gray-300">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us how we can help you..."
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 resize-none"
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3 rounded-full"
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Office Info & FAQ */}
            <div className="space-y-8">            

              {/* Quick FAQ */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="bg-black/40 backdrop-blur-xl border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Quick FAQ</CardTitle>
                    <CardDescription className="text-gray-400">Common questions and answers</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-700 last:border-b-0 pb-4 last:pb-0">
                        <h4 className="text-white font-medium mb-2">{faq.question}</h4>
                        <p className="text-gray-400 text-sm">{faq.answer}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 text-white py-16 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Sparkles className="h-8 w-8 text-purple-400" />
            <span className="text-2xl font-light tracking-tight">FinaylzeIt</span>
          </div>
          <p className="text-gray-400 opacity-80">© 2025 FinaylzeIt. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
