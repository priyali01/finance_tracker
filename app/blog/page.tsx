"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Sparkles, Calendar, Clock, User, Search, TrendingUp, PiggyBank, Target, Brain, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      title: "The Ultimate Guide to Budgeting: Transform Your Financial Life in 30 Days",
      excerpt:
        "Master the art of budgeting with our comprehensive guide. Learn proven strategies that have helped thousands achieve financial freedom.",
      content: `
        <h2>Why Budgeting is Your Financial Superpower</h2>
        <p>Budgeting isn't about restricting your life—it's about giving every rupee a purpose and taking control of your financial destiny. In this comprehensive guide, we'll walk you through creating a budget that actually works.</p>
        
        <h3>The 50/30/20 Rule: Your Starting Point</h3>
        <p>This simple framework allocates your after-tax income into three categories:</p>
        <ul>
          <li><strong>50% for Needs:</strong> Rent, groceries, utilities, minimum debt payments</li>
          <li><strong>30% for Wants:</strong> Dining out, entertainment, hobbies, shopping</li>
          <li><strong>20% for Savings & Debt Repayment:</strong> Emergency fund, investments, extra debt payments</li>
        </ul>
        
        <h3>Step-by-Step Budget Creation</h3>
        <p><strong>Week 1: Track Everything</strong><br>
        Before you can budget, you need to know where your money goes. Use FinaylzeIt's expense tracking to monitor every transaction for a full week.</p>
        
        <p><strong>Week 2: Categorize and Analyze</strong><br>
        Group your expenses into categories. Look for patterns and identify areas where you're overspending.</p>
        
        <p><strong>Week 3: Set Realistic Limits</strong><br>
        Based on your tracking data, set spending limits for each category. Be realistic—overly restrictive budgets often fail.</p>
        
        <p><strong>Week 4: Implement and Adjust</strong><br>
        Start living by your budget. Track your progress daily and make adjustments as needed.</p>
        
        <h3>Common Budgeting Mistakes to Avoid</h3>
        <ul>
          <li>Setting unrealistic expectations</li>
          <li>Forgetting irregular expenses (insurance, car maintenance)</li>
          <li>Not having an emergency buffer</li>
          <li>Giving up after one bad month</li>
        </ul>
        
        <h3>Advanced Budgeting Strategies</h3>
        <p><strong>Zero-Based Budgeting:</strong> Every rupee gets assigned a job before the month begins.</p>
        <p><strong>Envelope Method:</strong> Use cash for discretionary spending to avoid overspending.</p>
        <p><strong>Pay Yourself First:</strong> Automate savings before you have a chance to spend.</p>
        
        <p>Remember, the best budget is the one you'll actually stick to. Start simple, be consistent, and adjust as you learn what works for your lifestyle.</p>
      `,
      author: "Priya Sharma",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Budgeting",
      image: "/placeholder.svg?height=400&width=600",
      icon: PiggyBank,
    },
    {
      id: 2,
      title: "Smart Saving Strategies: Build Wealth While You Sleep",
      excerpt:
        "Discover automated saving techniques and high-yield strategies that make growing your wealth effortless and sustainable.",
      content: `
        <h2>The Power of Automated Savings</h2>
        <p>The secret to successful saving isn't willpower—it's automation. When you remove the decision-making from saving, you remove the opportunity to spend that money elsewhere.</p>
        
        <h3>The 1% Rule: Start Small, Think Big</h3>
        <p>If saving feels overwhelming, start with just 1% of your income. That's ₹500 on a ₹50,000 salary. Once this becomes automatic, increase by 1% every three months until you reach your target savings rate.</p>
        
        <h3>High-Yield Savings Strategies</h3>
        <p><strong>Digital Banks:</strong> Online banks often offer 2-3x higher interest rates than traditional banks.</p>
        <p><strong>Fixed Deposits Laddering:</strong> Stagger multiple FDs with different maturity dates for liquidity and higher returns.</p>
        <p><strong>Liquid Funds:</strong> Better than savings accounts for emergency funds, offering 4-6% returns with same-day withdrawal.</p>
        
        <h3>The Emergency Fund Formula</h3>
        <p>Your emergency fund should cover 6-12 months of expenses. Build it in this order:</p>
        <ol>
          <li>₹1,000 starter emergency fund</li>
          <li>One month of expenses</li>
          <li>Three months of expenses</li>
          <li>Six months of expenses</li>
          <li>Twelve months of expenses (for irregular income)</li>
        </ol>
        
        <h3>Savings Challenges That Work</h3>
        <p><strong>52-Week Challenge:</strong> Save ₹100 in week 1, ₹200 in week 2, and so on. You'll save ₹137,800 by year-end.</p>
        <p><strong>Round-Up Savings:</strong> Round up every purchase to the nearest ₹10 and save the difference.</p>
        <p><strong>No-Spend Days:</strong> Designate certain days as no-spend days and save what you would have spent.</p>
        
        <h3>Tax-Advantaged Savings</h3>
        <p>Maximize these tax-saving instruments:</p>
        <ul>
          <li>PPF (Public Provident Fund) - 15-year lock-in, tax-free returns</li>
          <li>ELSS Mutual Funds - 3-year lock-in, potential for higher returns</li>
          <li>NPS (National Pension System) - Additional ₹50,000 deduction</li>
        </ul>
        
        <p>Remember: The best time to start saving was yesterday. The second-best time is today. Start with whatever amount you can, and let compound interest work its magic.</p>
      `,
      author: "Arjun Patel",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Saving",
      image: "/placeholder.svg?height=400&width=600",
      icon: TrendingUp,
    },
    {
      id: 3,
      title: "Investment Basics: Your First Steps to Building Wealth",
      excerpt:
        "A beginner-friendly guide to investing in India. Learn about mutual funds, SIPs, and building a diversified portfolio.",
      content: `
        <h2>Why Investing is Non-Negotiable</h2>
        <p>With inflation averaging 6% annually in India, money sitting in a savings account (earning 3-4%) is actually losing purchasing power. Investing isn't just about growing wealth—it's about preserving it.</p>
        
        <h3>Investment Basics: The Foundation</h3>
        <p><strong>Risk and Return:</strong> Higher potential returns come with higher risk. Your age and goals determine your risk tolerance.</p>
        <p><strong>Diversification:</strong> Don't put all eggs in one basket. Spread investments across asset classes.</p>
        <p><strong>Time Horizon:</strong> Longer investment periods allow you to take more risk for potentially higher returns.</p>
        
        <h3>Asset Classes Explained</h3>
        <p><strong>Equity (Stocks):</strong> Ownership in companies. Highest potential returns but most volatile.</p>
        <p><strong>Debt (Bonds/FDs):</strong> Lending money for fixed returns. Lower risk, lower returns.</p>
        <p><strong>Gold:</strong> Hedge against inflation and currency devaluation.</p>
        <p><strong>Real Estate:</strong> Property investments for rental income and appreciation.</p>
        
        <h3>Mutual Funds: Your Best Friend</h3>
        <p>For beginners, mutual funds offer professional management and instant diversification:</p>
        <ul>
          <li><strong>Large Cap Funds:</strong> Invest in established companies (lower risk)</li>
          <li><strong>Mid Cap Funds:</strong> Growing companies (moderate risk)</li>
          <li><strong>Small Cap Funds:</strong> Emerging companies (higher risk)</li>
          <li><strong>Index Funds:</strong> Track market indices (low cost, market returns)</li>
        </ul>
        
        <h3>SIP: The Magic of Systematic Investing</h3>
        <p>Systematic Investment Plans (SIPs) are your secret weapon:</p>
        <ul>
          <li>Start with as little as ₹500/month</li>
          <li>Rupee cost averaging reduces volatility impact</li>
          <li>Builds discipline and consistency</li>
          <li>Power of compounding over time</li>
        </ul>
        
        <h3>Sample Portfolio Allocation by Age</h3>
        <p><strong>20s-30s (Aggressive):</strong> 80% Equity, 15% Debt, 5% Gold</p>
        <p><strong>30s-40s (Moderate):</strong> 70% Equity, 25% Debt, 5% Gold</p>
        <p><strong>40s-50s (Conservative):</strong> 50% Equity, 40% Debt, 10% Gold</p>
        <p><strong>50s+ (Very Conservative):</strong> 30% Equity, 60% Debt, 10% Gold</p>
        
        <h3>Common Investment Mistakes</h3>
        <ul>
          <li>Trying to time the market</li>
          <li>Panic selling during market downturns</li>
          <li>Chasing last year's best performers</li>
          <li>Not reviewing and rebalancing portfolio</li>
          <li>Investing without clear goals</li>
        </ul>
        
        <p>Start your investment journey today. Even ₹1,000/month invested in equity mutual funds can grow to over ₹10 lakhs in 15 years at 12% annual returns!</p>
      `,
      author: "Sneha Gupta",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Investment",
      image: "/placeholder.svg?height=400&width=600",
      icon: Target,
    },
    {
      id: 4,
      title: "The Psychology of Money: Understanding Your Financial Behavior",
      excerpt:
        "Explore the emotional and psychological factors that drive spending decisions and learn how to develop healthier money habits.",
      content: `
        <h2>Money is More Than Numbers</h2>
        <p>Personal finance is only 20% math and 80% psychology. Understanding your relationship with money is crucial for long-term financial success.</p>
        
        <h3>Common Money Personalities</h3>
        <p><strong>The Spender:</strong> Finds joy in purchasing, often impulsively. Needs systems to control spending.</p>
        <p><strong>The Saver:</strong> Hoards money, sometimes to a fault. May miss investment opportunities due to over-caution.</p>
        <p><strong>The Avoider:</strong> Ignores financial matters, hoping they'll resolve themselves. Needs simple, automated systems.</p>
        <p><strong>The Worrier:</strong> Constantly anxious about money, even when financially secure. Benefits from education and planning.</p>
        
        <h3>Cognitive Biases That Hurt Your Wallet</h3>
        <p><strong>Present Bias:</strong> Overvaluing immediate rewards vs. future benefits. Combat with automation and visual goals.</p>
        <p><strong>Loss Aversion:</strong> Fear of losing money prevents taking calculated risks. Remember: not investing is also risky.</p>
        <p><strong>Anchoring:</strong> Fixating on the first price you see. Always compare and research before major purchases.</p>
        <p><strong>Lifestyle Inflation:</strong> Spending increases with income. Maintain your savings rate as income grows.</p>
        
        <h3>Emotional Spending Triggers</h3>
        <ul>
          <li><strong>Stress:</strong> Retail therapy provides temporary relief but long-term problems</li>
          <li><strong>Social Pressure:</strong> Keeping up with friends' lifestyles</li>
          <li><strong>Boredom:</strong> Shopping as entertainment</li>
          <li><strong>Celebration:</strong> Rewarding yourself with expensive purchases</li>
          <li><strong>Depression:</strong> Spending to fill emotional voids</li>
        </ul>
        
        <h3>Building Healthy Money Habits</h3>
        <p><strong>The 24-Hour Rule:</strong> Wait a day before non-essential purchases over ₹1,000.</p>
        <p><strong>Values-Based Spending:</strong> Align purchases with your core values and long-term goals.</p>
        <p><strong>Gratitude Practice:</strong> Regularly appreciate what you have to reduce desire for more.</p>
        <p><strong>Mindful Spending:</strong> Ask "Will this purchase add value to my life in 6 months?"</p>
        
        <h3>The Power of Financial Goals</h3>
        <p>Specific, measurable goals provide direction and motivation:</p>
        <ul>
          <li>Emergency fund of ₹3 lakhs by December 2024</li>
          <li>Down payment of ₹10 lakhs for house by 2026</li>
          <li>Retirement corpus of ₹2 crores by age 60</li>
        </ul>
        
        <h3>Overcoming Money Shame and Guilt</h3>
        <p>Many people carry shame about past financial mistakes. Remember:</p>
        <ul>
          <li>Everyone makes financial mistakes—learn and move forward</li>
          <li>Your net worth doesn't determine your self-worth</li>
          <li>Small, consistent actions compound over time</li>
          <li>It's never too late to start improving your finances</li>
        </ul>
        
        <h3>Creating Your Money Mindset Shift</h3>
        <p>Transform limiting beliefs:</p>
        <ul>
          <li>"Money is the root of all evil" → "Money is a tool for good"</li>
          <li>"I'm bad with money" → "I'm learning to manage money better"</li>
          <li>"I can't afford it" → "How can I afford it?"</li>
          <li>"Rich people are greedy" → "Wealth allows me to help others"</li>
        </ul>
        
        <p>Remember: Changing your relationship with money is a journey, not a destination. Be patient with yourself and celebrate small wins along the way.</p>
      `,
      author: "Dr. Rahul Mehta",
      date: "2024-01-01",
      readTime: "7 min read",
      category: "Psychology",
      image: "/placeholder.svg?height=400&width=600",
      icon: Brain,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 font-light">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 backdrop-blur-xl bg-white/80 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-indigo-600" />
              <span className="text-2xl font-light tracking-tight text-gray-900">FinaylzeIt</span>
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-indigo-600 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-indigo-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-indigo-600 transition-colors">
                Contact
              </Link>
              <Link href="/dashboard">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <Badge className="mb-6 bg-indigo-100 text-indigo-700 border-indigo-200 px-4 py-2">
              <Brain className="w-4 h-4 mr-2" />
              Financial Wisdom
            </Badge>
            <h1 className="text-5xl md:text-6xl font-light tracking-tight text-gray-900 mb-6 leading-tight">
              Master Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Money Mindset
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed opacity-80">
              Discover expert insights, practical strategies, and proven techniques to transform your financial life.
              From budgeting basics to investment mastery—we've got you covered.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search articles..."
                className="pl-12 pr-4 py-3 rounded-full border-gray-200 bg-white/80 backdrop-blur-sm"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            className="grid md:grid-cols-2 gap-8"
          >
            {articles.map((article, index) => (
              <motion.div key={article.id} variants={fadeInUp} className="group">
                <Link href={`/blog/${article.id}`}>
                  <Card className="bg-white/80 backdrop-blur-xl border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden h-full">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <Badge className="bg-indigo-100 text-indigo-700 border-indigo-200">
                          <article.icon className="w-4 h-4 mr-2" />
                          {article.category}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-500 space-x-4">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(article.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {article.readTime}
                          </div>
                        </div>
                      </div>
                      <CardTitle className="text-xl font-medium text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 opacity-80 mb-4 leading-relaxed">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-2 text-gray-400" />
                          <span className="text-sm text-gray-600">{article.author}</span>
                        </div>
                        <div className="flex items-center text-indigo-600 group-hover:text-indigo-700 transition-colors">
                          <span className="text-sm font-medium mr-2">Read More</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl font-light tracking-tight mb-6">Stay Updated</h2>
            <p className="text-xl font-light leading-relaxed opacity-90 mb-8">
              Get the latest financial insights and tips delivered to your inbox every week.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded-full"
              />
              <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Sparkles className="h-8 w-8 text-indigo-400" />
                <span className="text-2xl font-light tracking-tight">FinaylzeIt</span>
              </div>
              <p className="text-gray-400 opacity-80 leading-relaxed">
                Take complete control of your financial life with our intuitive platform.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <div className="space-y-2">
                <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
                <Link href="/blog" className="block text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
                <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-4">Product</h4>
              <div className="space-y-2">
                <Link href="/#features" className="block text-gray-400 hover:text-white transition-colors">
                  Features
                </Link>
                <Link href="/#pricing" className="block text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
                <Link href="/dashboard" className="block text-gray-400 hover:text-white transition-colors">
                  Dashboard
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-4">Legal</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 opacity-80">© 2024 FinaylzeIt. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
