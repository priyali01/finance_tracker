"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Wallet,
  Target,
  TrendingUp,
  Bell,
  Folder,
  FolderSyncIcon as Sync,
  Sparkles,
  ArrowRight,
  Plus,
  Menu,
  X,
  Play,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

const fadeInUp = {
  initial: { opacity: 0, y: 60, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.8, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const navOpacity = useTransform(scrollYProgress, [0, 0.1], [0.8, 0.95])

  const features = [
    {
      icon: Sync,
      title: "Live Expense Tracking",
      description: "See your spending update instantly and stay on top of your finances in real time.",
    },
    {
      icon: Folder,
      title: "Smart Categorization",
      description: "Effortlessly organize your expenses into clear, meaningful categories for better tracking.",
    },
    {
      icon: Target,
      title: "Goal Setting",
      description: "Set and track your financial milestones",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Get alerts before you overspend",
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


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 font-light text-white">
      {/* Navigation */}
      <motion.nav
        style={{ opacity: navOpacity }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-light tracking-tight text-white">FinaylzeIt</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-purple-400 transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-300 hover:text-purple-400 transition-colors">
                How It Works
              </a>
              <Link href="/about" className="text-gray-300 hover:text-purple-400 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-purple-400 transition-colors">
                Contact
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Link href="/login">
                <Button variant="ghost" className="text-gray-300 hover:text-purple-400 hover:bg-white/10">
                  Sign In
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setIsMenuOpen(true)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          className="fixed inset-0 z-50 md:hidden"
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-xl p-6 shadow-2xl border-l border-white/10">
            <div className="flex items-center justify-between mb-8">
              <span className="text-xl font-light tracking-tight text-white">Menu</span>
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)} className="text-white">
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="space-y-6">
              <a href="#features" className="block text-lg text-gray-300 hover:text-purple-400">
                Features
              </a>
              <a href="#how-it-works" className="block text-lg text-gray-300 hover:text-purple-400">
                How It Works
              </a>
              <Link href="/about" className="block text-lg text-gray-300 hover:text-purple-400">
                About
              </Link>
              <Link href="/contact" className="block text-lg text-gray-300 hover:text-purple-400">
                Contact
              </Link>
              <div className="pt-6 border-t border-gray-700">
                <Link href="/login" className="block mb-4">
                  <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/10">
                    Sign In
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
<section className="pt-32 pb-20 px-6">
  <div className="max-w-7xl mx-auto text-center">
    <motion.div
      initial="initial"
      animate="animate"
      variants={fadeInUp}
    >
      <h1 className="text-6xl md:text-7xl font-light tracking-tight text-white mb-6 leading-tight">
        Your Wealth,{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          Visualized
        </span>
      </h1>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed opacity-90">
        Take full control of your finances — track expenses, set smart goals, and build lasting wealth with confidence and clarity.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <Link href="/register">
          <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Track Your Wealth
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </Link>
        <Button
          variant="outline"
          className="border-gray-600 text-gray-300 hover:bg-white/10 px-8 py-4 text-lg rounded-full bg-transparent"
        >
          <Play className="w-5 h-5 mr-2" />
          Watch Demo
        </Button>
      </div>
    </motion.div>
  </div>
</section>

      {/* Dashboard Preview */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 100, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />
            <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 p-8">
              <Image
                src="/Image.png"
                alt="FinaylzeIt Dashboard"
                width={1200}
                height={800}
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
<section id="how-it-works" className="py-20 px-6 bg-gradient-to-r from-purple-900/20 to-indigo-900/20">
  <div className="max-w-7xl mx-auto">
    {/* Section Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-light tracking-tight text-white mb-4">How It Works</h2>
      <p className="text-xl text-gray-300 opacity-80">Get started in three simple steps</p>
    </div>

    {/* Steps Grid */}
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          icon: Wallet,
          title: "Own your finance",
          description: "Track spending, set goals, and grow your wealth with confidence",
        },
        {
          icon: Target,
          title: "Set Budgets & Goals",
          description: "Define your financial objectives and create personalized budgets that work for you.",
        },
        {
          icon: TrendingUp,
          title: "Track & Grow Wealth",
          description: "Monitor your progress with beautiful visualizations and AI-powered insights.",
        },
      ].map((step, index) => (
        <div key={index} className="text-center">
          <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/10 hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="bg-purple-900/50 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <step.icon className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-medium text-white mb-4">{step.title}</h3>
            <p className="text-gray-300 opacity-80">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Features */}
<section id="features" className="py-20 px-6">
  <div className="max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-light tracking-tight text-white mb-4">Powerful Features</h2>
      <p className="text-xl text-gray-300 opacity-80">Everything you need to master your finances</p>
    </motion.div>

    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="grid md:grid-cols-2 gap-8"
    >
      {features.map(
        (feature, index) => (
        <motion.div
          key={index}
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="relative group bg-black/40 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/10 transition-all duration-300 hover:scale-105"
        >
          {/* Glow border */}
          <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-purple-500 group-hover:shadow-[0_0_30px_5px_rgba(168,85,247,0.5)] transition-all duration-300 pointer-events-none"></div>

          <div className="relative z-10">
            <div className="bg-purple-900/50 rounded-xl w-12 h-12 flex items-center justify-center mb-6 group-hover:bg-purple-800/50 transition-colors">
              <feature.icon className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-medium text-white mb-3">{feature.title}</h3>
            <p className="text-gray-300 opacity-80">{feature.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>


      {/* Mission Statement */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-light tracking-tight mb-8 text-white">Our Mission</h2>
            <p className="text-2xl font-light leading-relaxed opacity-90 text-white">
              "We built FinaylzeIt to help people take control of their financial lives without stress, confusion, or
              spreadsheets. Everyone deserves clarity and confidence when it comes to money."
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light tracking-tight text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 opacity-80">Everything you need to know</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 text-white py-16 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center space-x-2 mb-6">
                <Sparkles className="h-8 w-8 text-purple-400" />
                <span className="text-2xl font-light tracking-tight">FinaylzeIt</span>
              </div>
              <p className="text-gray-400 opacity-80 leading-relaxed text-center md:text-left">
                Take complete control of your financial life with our intuitive platform.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h4 className="font-medium mb-4 text-white">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/" className="block text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
                <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
                <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <h4 className="font-medium mb-4 text-white text-center w-full">Product</h4>
              <div className="space-y-2 w-full flex flex-col items-center">
                <Link href="/dashboard" className="block text-gray-400 hover:text-white transition-colors text-center w-full">
                  Dashboard
                </Link>
                <Link href="/transactions" className="block text-gray-400 hover:text-white transition-colors text-center w-full">
                  Transactions
                </Link>
                <Link href="/budget" className="block text-gray-400 hover:text-white transition-colors text-center w-full">
                  Budget Planner
                </Link>
                <Link href="/goals" className="block text-gray-400 hover:text-white transition-colors text-center w-full">
                  Goals
                </Link>
                <Link href="/reports" className="block text-gray-400 hover:text-white transition-colors text-center w-full">
                  Reports
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col items-center">
            <p className="text-gray-400 opacity-80 text-center">© 2025 FinaylzeIt. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div initial={false} className="bg-black/40 backdrop-blur-xl rounded-2xl shadow-lg border border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors rounded-2xl"
      >
        <span className="font-medium text-white">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }}>
          <Plus className="w-5 h-5 text-gray-400" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.2, delay: isOpen ? 0.1 : 0 }}
          className="px-8 pb-6"
        >
          <p className="text-gray-300 opacity-80 leading-relaxed">{answer}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
