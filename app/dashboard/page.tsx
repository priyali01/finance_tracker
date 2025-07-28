"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import {
  Wallet,
  TrendingUp,
  TrendingDown,
  Target,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  CreditCard,
  PiggyBank,
  Bell,
  Settings,
  LogOut,
  Menu,
  X,
  Sparkles,
  BarChart3, // Add this import
} from "lucide-react"
import Link from "next/link"

const monthlyData = [
  { month: "Jan", income: 45000, expenses: 32000 },
  { month: "Feb", income: 48000, expenses: 35000 },
  { month: "Mar", income: 52000, expenses: 38000 },
  { month: "Apr", income: 47000, expenses: 33000 },
  { month: "May", income: 55000, expenses: 42000 },
  { month: "Jun", income: 58000, expenses: 45000 },
]

const expenseData = [
  { name: "Food & Dining", value: 15000, color: "#8B5CF6" },
  { name: "Transportation", value: 8000, color: "#06B6D4" },
  { name: "Shopping", value: 12000, color: "#10B981" },
  { name: "Bills & Utilities", value: 18000, color: "#F59E0B" },
  { name: "Entertainment", value: 6000, color: "#EF4444" },
  { name: "Others", value: 4000, color: "#6B7280" },
]

const recentTransactions = [
  { id: 1, description: "Grocery Store", amount: -2500, category: "Food", date: "Today", type: "expense" },
  { id: 2, description: "Salary Credit", amount: 55000, category: "Income", date: "Yesterday", type: "income" },
  { id: 3, description: "Electric Bill", amount: -3200, category: "Bills", date: "2 days ago", type: "expense" },
  { id: 4, description: "Coffee Shop", amount: -450, category: "Food", date: "3 days ago", type: "expense" },
  { id: 5, description: "Freelance Payment", amount: 8000, category: "Income", date: "4 days ago", type: "income" },
]

const goals = [
  { id: 1, name: "Emergency Fund", current: 45000, target: 100000, color: "#8B5CF6" },
  { id: 2, name: "Vacation", current: 25000, target: 50000, color: "#06B6D4" },
  { id: 3, name: "New Laptop", current: 35000, target: 80000, color: "#10B981" },
]

export default function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [totalBalance, setTotalBalance] = useState(0)
  const [monthlyIncome, setMonthlyIncome] = useState(0)
  const [monthlyExpenses, setMonthlyExpenses] = useState(0)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  useEffect(() => {
    // Simulate loading data
    setTotalBalance(125000)
    setMonthlyIncome(58000)
    setMonthlyExpenses(45000)
  }, [])

  const savings = monthlyIncome - monthlyExpenses

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 ${
          isSidebarCollapsed ? "w-16" : "w-64"
        } bg-black/40 backdrop-blur-xl border-r border-white/10 transform transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <Link href="/" className={`flex items-center space-x-2 ${isSidebarCollapsed ? "justify-center" : ""}`}>
            <Sparkles className="h-8 w-8 text-purple-400" />
            {!isSidebarCollapsed && <span className="text-xl font-light tracking-tight text-white">FinaylzeIt</span>}
          </Link>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              className="hidden lg:flex text-white hover:bg-white/10"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden text-white"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <nav className="p-6 space-y-2">
          <Link
            href="/dashboard"
            className={`flex items-center ${isSidebarCollapsed ? "justify-center px-2" : "space-x-3 px-4"} py-3 rounded-xl bg-purple-600/20 text-purple-300 border border-purple-500/30`}
          >
            <TrendingUp className="h-5 w-5" />
            {!isSidebarCollapsed && <span>Dashboard</span>}
          </Link>
          <Link
            href="/transactions"
            className={`flex items-center ${isSidebarCollapsed ? "justify-center px-2" : "space-x-3 px-4"} py-3 rounded-xl text-gray-300 hover:bg-white/10 hover:text-white transition-colors`}
          >
            <CreditCard className="h-5 w-5" />
            {!isSidebarCollapsed && <span>Transactions</span>}
          </Link>
          <Link
            href="/budget"
            className={`flex items-center ${isSidebarCollapsed ? "justify-center px-2" : "space-x-3 px-4"} py-3 rounded-xl text-gray-300 hover:bg-white/10 hover:text-white transition-colors`}
          >
            <Wallet className="h-5 w-5" />
            {!isSidebarCollapsed && <span>Budget</span>}
          </Link>
          <Link
            href="/goals"
            className={`flex items-center ${isSidebarCollapsed ? "justify-center px-2" : "space-x-3 px-4"} py-3 rounded-xl text-gray-300 hover:bg-white/10 hover:text-white transition-colors`}
          >
            <Target className="h-5 w-5" />
            {!isSidebarCollapsed && <span>Goals</span>}
          </Link>
          <Link
            href="/reports"
            className={`flex items-center ${isSidebarCollapsed ? "justify-center px-2" : "space-x-3 px-4"} py-3 rounded-xl text-gray-300 hover:bg-white/10 hover:text-white transition-colors`}
          >
            <BarChart3 className="h-5 w-5" />
            {/* Always show the icon, never hide it */}
            {!isSidebarCollapsed && <span>Reports</span>}
          </Link>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
          <div className="space-y-2">
            <Link href="/">
              <Button
                variant="ghost"
                className={`w-full ${isSidebarCollapsed ? "justify-center px-2" : "justify-start"} text-gray-300 hover:bg-white/10 hover:text-white`}
              >
                <LogOut className="h-4 w-4 mr-3" />
                {!isSidebarCollapsed && "Sign Out"}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`${isSidebarCollapsed ? "lg:ml-16" : "lg:ml-64"} transition-all duration-300`}>
        {/* Header */}
        <header className="bg-black/20 backdrop-blur-sm border-b border-white/10 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden text-white"
              >
                <Menu className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-light text-white">Dashboard</h1>
                <p className="text-gray-400">Welcome back! Here's your financial overview.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 ml-auto">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full p-0 border-2 border-purple-500 hover:border-indigo-500">
                <img src="/placeholder-user.jpg" alt="Profile" className="w-9 h-9 rounded-full object-cover" />
              </Button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <Card className="bg-black/40 backdrop-blur-xl border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Total Balance</p>
                      <p className="text-2xl font-light text-white">₹{totalBalance.toLocaleString()}</p>
                    </div>
                    <div className="bg-green-500/20 p-3 rounded-xl">
                      <DollarSign className="h-6 w-6 text-green-400" />
                    </div>
                  </div>
                  <div className="flex items-center mt-4 text-green-400">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    <span className="text-sm">+12.5% from last month</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <Card className="bg-black/40 backdrop-blur-xl border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Monthly Income</p>
                      <p className="text-2xl font-light text-white">₹{monthlyIncome.toLocaleString()}</p>
                    </div>
                    <div className="bg-blue-500/20 p-3 rounded-xl">
                      <TrendingUp className="h-6 w-6 text-blue-400" />
                    </div>
                  </div>
                  <div className="flex items-center mt-4 text-blue-400">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    <span className="text-sm">+8.2% from last month</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <Card className="bg-black/40 backdrop-blur-xl border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Monthly Expenses</p>
                      <p className="text-2xl font-light text-white">₹{monthlyExpenses.toLocaleString()}</p>
                    </div>
                    <div className="bg-red-500/20 p-3 rounded-xl">
                      <TrendingDown className="h-6 w-6 text-red-400" />
                    </div>
                  </div>
                  <div className="flex items-center mt-4 text-red-400">
                    <ArrowDownRight className="h-4 w-4 mr-1" />
                    <span className="text-sm">-3.1% from last month</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <Card className="bg-black/40 backdrop-blur-xl border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Monthly Savings</p>
                      <p className="text-2xl font-light text-white">₹{savings.toLocaleString()}</p>
                    </div>
                    <div className="bg-purple-500/20 p-3 rounded-xl">
                      <PiggyBank className="h-6 w-6 text-purple-400" />
                    </div>
                  </div>
                  <div className="flex items-center mt-4 text-purple-400">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    <span className="text-sm">+15.3% from last month</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Income vs Expenses Chart */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <Card className="bg-black/40 backdrop-blur-xl border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Income vs Expenses</CardTitle>
                  <CardDescription className="text-gray-400">Monthly comparison over the last 6 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="month" stroke="#9CA3AF" />
                      <YAxis stroke="#9CA3AF" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "rgba(0, 0, 0, 0.8)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          borderRadius: "8px",
                          color: "#fff",
                        }}
                      />
                      <Bar dataKey="income" fill="#8B5CF6" name="Income" />
                      <Bar dataKey="expenses" fill="#EF4444" name="Expenses" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>

            {/* Expense Breakdown */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
              <Card className="bg-black/40 backdrop-blur-xl border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Expense Breakdown</CardTitle>
                  <CardDescription className="text-gray-400">Current month spending by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={expenseData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={120}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {expenseData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "rgba(0, 0, 0, 0.8)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          borderRadius: "8px",
                          color: "#fff",
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {expenseData.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="text-sm text-gray-300">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Recent Transactions and Goals */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Transactions */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
              <Card className="bg-black/40 backdrop-blur-xl border-white/10">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-white">Recent Transactions</CardTitle>
                    <CardDescription className="text-gray-400">Your latest financial activity</CardDescription>
                  </div>
                  <Link href="/transactions">
                    <Button variant="ghost" className="text-purple-400 hover:text-purple-300">
                      View All
                    </Button>
                  </Link>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentTransactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`p-2 rounded-lg ${
                            transaction.type === "income" ? "bg-green-500/20" : "bg-red-500/20"
                          }`}
                        >
                          {transaction.type === "income" ? (
                            <ArrowUpRight className="h-4 w-4 text-green-400" />
                          ) : (
                            <ArrowDownRight className="h-4 w-4 text-red-400" />
                          )}
                        </div>
                        <div>
                          <p className="text-white font-medium">{transaction.description}</p>
                          <p className="text-gray-400 text-sm">
                            {transaction.category} • {transaction.date}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`font-medium ${transaction.type === "income" ? "text-green-400" : "text-red-400"}`}
                      >
                        {transaction.type === "income" ? "+" : ""}₹{Math.abs(transaction.amount).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Goals Progress */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
              <Card className="bg-black/40 backdrop-blur-xl border-white/10">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-white">Financial Goals</CardTitle>
                    <CardDescription className="text-gray-400">Track your progress towards your goals</CardDescription>
                  </div>
                  <Link href="/goals">
                    <Button variant="ghost" className="text-purple-400 hover:text-purple-300">
                      View All
                    </Button>
                  </Link>
                </CardHeader>
                <CardContent className="space-y-6">
                  {goals.map((goal) => {
                    const progress = (goal.current / goal.target) * 100
                    return (
                      <div key={goal.id} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-white font-medium">{goal.name}</span>
                          <Badge variant="outline" className="border-gray-600 text-gray-300">
                            {progress.toFixed(0)}%
                          </Badge>
                        </div>
                        <Progress value={progress} className="h-2" />
                        <div className="flex items-center justify-between text-sm text-gray-400">
                          <span>₹{goal.current.toLocaleString()}</span>
                          <span>₹{goal.target.toLocaleString()}</span>
                        </div>
                      </div>
                    )
                  })}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  )
}
