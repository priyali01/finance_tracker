"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, ArrowLeft, Users, Target, Shield, Heart, Zap, Globe, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"



const values = [
  {
    icon: Shield,
    title: "Security First",
    description: "Your financial data is protected with bank-level security and encryption.",
  },
  {
    icon: Heart,
    title: "User-Centric",
    description: "Every feature is designed with our users' needs and feedback in mind.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We constantly push boundaries to bring you cutting-edge financial tools.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description: "Making financial management accessible to everyone, everywhere.",
  },
]


export default function AboutPage() {
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
              <Users className="w-4 h-4 mr-2" />
              About FinaylzeIt
            </Badge>
            <h1 className="text-5xl md:text-6xl font-light tracking-tight text-white mb-6 leading-tight">
              Empowering Financial{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Freedom
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed opacity-90">
              We're on a mission to make personal finance simple, accessible, and empowering for everyone. Our platform
              combines cutting-edge technology with intuitive design to help you take control of your financial future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-black/40 backdrop-blur-xl border-white/10 h-full">
                <CardContent className="p-8">
                  <Target className="h-12 w-12 text-purple-400 mb-6" />
                  <h2 className="text-3xl font-light text-white mb-4">Our Mission</h2>
                  <p className="text-gray-300 leading-relaxed">
                    To democratize financial management by providing powerful, user-friendly tools that help individuals
                    and families make informed financial decisions. We believe everyone deserves access to the insights
                    and tools needed to build a secure financial future.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-black/40 backdrop-blur-xl border-white/10 h-full">
                <CardContent className="p-8">
                  <TrendingUp className="h-12 w-12 text-indigo-400 mb-6" />
                  <h2 className="text-3xl font-light text-white mb-4">Our Vision</h2>
                  <p className="text-gray-300 leading-relaxed">
                    To become the world's most trusted and comprehensive personal finance platform, where millions of
                    users can confidently manage their money, achieve their goals, and build lasting wealth through
                    smart financial decisions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light tracking-tight text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-300 opacity-80">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="bg-black/40 backdrop-blur-xl border-white/10 h-full hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="bg-purple-900/50 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-3">{value.title}</h3>
                    <p className="text-gray-300 opacity-80">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl font-light tracking-tight mb-8 text-white">Join Our Mission</h2>
            <p className="text-xl font-light leading-relaxed opacity-90 text-white mb-8">
              Ready to take control of your financial future? Join thousands of users who trust FinaylzeIt to manage
              their money smarter.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/register">
                <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Started Today
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg rounded-full bg-transparent"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 text-white py-16 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Sparkles className="h-8 w-8 text-purple-400" />
            <span className="text-2xl font-light tracking-tight">FinaylzeIt</span>
          </div>
          <p className="text-gray-400 opacity-80">© 2024 FinaylzeIt. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
