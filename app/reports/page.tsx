"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Area,
  AreaChart,
} from "recharts"
import {
  TrendingUp,
  TrendingDown,
  Calendar,
  Download,
  Filter,
  Menu,
  X,
  Sparkles,
  Settings,
  LogOut,
  CreditCard,
  Wallet,
  Target,
  BarChart3,
  PieChartIcon,
  LineChartIcon,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"
import Link from "next/link"

const monthlyData = [
  { month: "Jan", income: 45000, expenses: 32000, savings: 13000 },
  { month: "Feb", income: 48000, expenses: 35000, savings: 13000 },
  { month: "Mar", income: 52000, expenses: 38000, savings: 14000 },
  { month: "Apr", income: 47000, expenses: 33000, savings: 14000 },
  { month: "May", income: 55000, expenses: 42000, savings: 13000 },
  { month: "Jun", income: 58000, expenses: 45000, savings: 13000 },
  { month: "Jul", income: 60000, expenses: 43000, savings: 17000 },
  { month: "Aug", income: 62000, expenses: 46000, savings: 16000 },
  { month: "Sep", income: 59000, expenses: 44000, savings: 15000 },
  { month: "Oct", income: 61000, expenses: 47000, savings: 14000 },
  { month: "Nov", income: 63000, expenses: 48000, savings: 15000 },
  { month: "Dec", income: 65000, expenses: 50000, savings: 15000 },
]

const expenseCategories = [
  { name: "Food & Dining", value: 180000, color: "#8B5CF6", percentage: 28.5 },
  { name: "Bills & Utilities", value: 144000, color: "#06B6D4", percentage: 22.8 },
  { name: "Transportation", value: 96000, color: "#10B981", percentage: 15.2 },
  { name: "Shopping", value: 84000, color: "#F59E0B", percentage: 13.3 },
  { name: "Entertainment", value: 72000, color: "#EF4444", percentage: 11.4 },
  { name: "Healthcare", value: 36000, color: "#8B5CF6", percentage: 5.7 },
  { name: "Others", value: 20000, color: "#6B7280", percentage: 3.1 },
]

const savingsData = [
  { month: "Jan", amount: 13000 },
  { month: "Feb", amount: 26000 },
  { month: "Mar", amount: 40000 },
  { month: "Apr", amount: 54000 },
  { month: "May", amount: 67000 },
  { month: "Jun", amount: 80000 },
  { month: "Jul", amount: 97000 },
  { month: "Aug", amount: 113000 },
  { month: "Sep", amount: 128000 },
  { month: "Oct", amount: 142000 },
  { month: "Nov", amount: 157000 },
  { month: "Dec", amount: 172000 },
]

const topExpenses = [
  { category: "Rent", amount: 25000, change: 0, trend: "stable" },
  { category: "Groceries", amount: 8500, change: -5.2, trend: "down" },
  { category: "Fuel", amount: 6200, change: 12.3, trend: "up" },
  { category: "Internet", amount: 1500, change: 0, trend: "stable" },
  { category: "Dining Out", amount: 4200, change: -8.1, trend: "down" },
]

export default function ReportsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [selectedPeriod, setSelectedPeriod] = useState("12months")
  const [selectedChart, setSelectedChart] = useState("overview")


  const totalIncome = monthlyData.reduce((sum, month) => sum + month.income, 0)
  const totalExpenses = monthlyData.reduce((sum, month) => sum + month.expenses, 0)
  const totalSavings = monthlyData.reduce((sum, month) => sum + month.savings, 0)
  const savingsRate = ((totalSavings / totalIncome) * 100).toFixed(1)

  const exportReport = (format: string) => {
    // Simulate export functionality
    console.log(`Exporting report in ${format} format`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-black/40 backdrop-blur-xl border-r border-white/10 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <Link href="/" className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-purple-400" />
            <span className="text-xl font-light tracking-tight text-white">FinaylzeIt</span>
          </Link>
          <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-white">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="p-6 space-y-2">
          <Link
            href="/dashboard"
            className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
          >
            <TrendingUp className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
          <Link
            href="/transactions"
            className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
          >
            <CreditCard className="h-5 w-5" />
            <span>Transactions</span>
          </Link>
          <Link
            href="/budget"
            className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
          >
            <Wallet className="h-5 w-5" />
            <span>Budget</span>
          </Link>
          <Link
            href="/goals"
            className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
          >
            <Target className="h-5 w-5" />
            <span>Goals</span>
          </Link>
          <Link
            href="/reports"
            className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-purple-600/20 text-purple-300 border border-purple-500/30"
          >
            <BarChart3 className="h-5 w-5" />
            <span>Reports</span>
          </Link>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
          <div className="space-y-2">
            <Link href="/">
              <Button variant="ghost" className="w-full justify-start text-gray-300 hover:bg-white/10 hover:text-white">
                <LogOut className="h-4 w-4 mr-3" />
                Sign Out
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-black/20 backdrop-blur-sm border-b border-white/10 p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
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
                <h1 className="text-2xl font-light text-white">Financial Reports</h1>
                <p className="text-gray-400">Comprehensive analysis of your financial data</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="w-40 bg-gray-800/50 border-gray-700 text-white">
                  <Calendar className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  <SelectItem value="3months">Last 3 Months</SelectItem>
                  <SelectItem value="6months">Last 6 Months</SelectItem>
                  <SelectItem value="12months">Last 12 Months</SelectItem>
                  <SelectItem value="ytd">Year to Date</SelectItem>
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                onClick={() => exportReport("pdf")}
                className="border-gray-600 text-gray-300 hover:bg-white/10 bg-transparent"
              >
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </header>

        {/* Reports Content */}
        <main className="p-6 space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <Card className="bg-black/40 backdrop-blur-xl border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Total Income</p>
                      <p className="text-2xl font-light text-white">₹{totalIncome.toLocaleString()}</p>
                    </div>
                    <div className="bg-green-500/20 p-3 rounded-xl">
                      <ArrowUpRight className="h-6 w-6 text-green-400" />
                    </div>
                  </div>
                  <div className="flex items-center mt-4 text-green-400">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span className="text-sm">+8.2% from last period</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <Card className="bg-black/40 backdrop-blur-xl border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Total Expenses</p>
                      <p className="text-2xl font-light text-white">₹{totalExpenses.toLocaleString()}</p>
                    </div>
                    <div className="bg-red-500/20 p-3 rounded-xl">
                      <ArrowDownRight className="h-6 w-6 text-red-400" />
                    </div>
                  </div>
                  <div className="flex items-center mt-4 text-red-400">
                    <TrendingDown className="h-4 w-4 mr-1" />
                    <span className="text-sm">-3.1% from last period</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <Card className="bg-black/40 backdrop-blur-xl border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Total Savings</p>
                      <p className="text-2xl font-light text-white">₹{totalSavings.toLocaleString()}</p>
                    </div>
                    <div className="bg-purple-500/20 p-3 rounded-xl">
                      <TrendingUp className="h-6 w-6 text-purple-400" />
                    </div>
                  </div>
                  <div className="flex items-center mt-4 text-purple-400">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span className="text-sm">+15.3% from last period</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <Card className="bg-black/40 backdrop-blur-xl border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Savings Rate</p>
                      <p className="text-2xl font-light text-white">{savingsRate}%</p>
                    </div>
                    <div className="bg-blue-500/20 p-3 rounded-xl">
                      <Target className="h-6 w-6 text-blue-400" />
                    </div>
                  </div>
                  <div className="flex items-center mt-4 text-blue-400">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span className="text-sm">Above 20% target</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Chart Selection */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-400" />
              <span className="text-gray-400 text-sm">View:</span>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant={selectedChart === "overview" ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedChart("overview")}
                className={selectedChart === "overview" ? "bg-purple-600 text-white" : "text-gray-300 hover:text-white"}
              >
                <BarChart3 className="h-4 w-4 mr-2" />
                Overview
              </Button>
              <Button
                variant={selectedChart === "expenses" ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedChart("expenses")}
                className={selectedChart === "expenses" ? "bg-purple-600 text-white" : "text-gray-300 hover:text-white"}
              >
                <PieChartIcon className="h-4 w-4 mr-2" />
                Expenses
              </Button>
              <Button
                variant={selectedChart === "savings" ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedChart("savings")}
                className={selectedChart === "savings" ? "bg-purple-600 text-white" : "text-gray-300 hover:text-white"}
              >
                <LineChartIcon className="h-4 w-4 mr-2" />
                Savings
              </Button>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Main Chart */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <Card className="bg-black/40 backdrop-blur-xl border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">
                    {selectedChart === "overview" && "Income vs Expenses"}
                    {selectedChart === "expenses" && "Expense Categories"}
                    {selectedChart === "savings" && "Savings Growth"}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {selectedChart === "overview" && "Monthly comparison over the selected period"}
                    {selectedChart === "expenses" && "Breakdown by category"}
                    {selectedChart === "savings" && "Cumulative savings over time"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {selectedChart === "overview" && (
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={monthlyData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis dataKey="month" stroke="#9CA3AF" />
                        <YAxis stroke="#9CA3AF" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="income" fill="#10B981" name="Income" />
                        <Bar dataKey="expenses" fill="#EF4444" name="Expenses" />
                      </BarChart>
                    </ResponsiveContainer>
                  )}
                  {selectedChart === "expenses" && (
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={expenseCategories}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={120}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {expenseCategories.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </PieChart>
                    </ResponsiveContainer>
                  )}
                  {selectedChart === "savings" && (
                    <ResponsiveContainer width="100%" height={300}>
                      <AreaChart data={savingsData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis dataKey="month" stroke="#9CA3AF" />
                        <YAxis stroke="#9CA3AF" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Area
                          type="monotone"
                          dataKey="amount"
                          stroke="#8B5CF6"
                          fill="url(#colorSavings)"
                          strokeWidth={2}
                        />
                        <defs>
                          <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                      </AreaChart>
                    </ResponsiveContainer>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Secondary Chart/Info */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
              <Card className="bg-black/40 backdrop-blur-xl border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Top Expenses</CardTitle>
                  <CardDescription className="text-gray-400">Highest spending categories this period</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topExpenses.map((expense, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 rounded-full bg-purple-400" />
                          <span className="text-white font-medium">{expense.category}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="text-white">₹{expense.amount.toLocaleString()}</span>
                          {expense.change !== 0 && (
                            <div className="flex items-center space-x-1">
                              {expense.trend === "up" ? (
                                <TrendingUp className="h-3 w-3 text-red-400" />
                              ) : expense.trend === "down" ? (
                                <TrendingDown className="h-3 w-3 text-green-400" />
                              ) : null}
                              <span
                                className={`text-xs ${
                                  expense.trend === "up"
                                    ? "text-red-400"
                                    : expense.trend === "down"
                                      ? "text-green-400"
                                      : "text-gray-400"
                                }`}
                              >
                                {expense.change > 0 ? "+" : ""}
                                {expense.change}%
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Expense Categories Breakdown */}
          {selectedChart === "expenses" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
              <Card className="bg-black/40 backdrop-blur-xl border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Expense Categories Breakdown</CardTitle>
                  <CardDescription className="text-gray-400">Detailed view of spending by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {expenseCategories.map((category, index) => (
                      <div key={index} className="p-4 rounded-lg bg-white/5 border border-white/10">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white font-medium">{category.name}</span>
                          <Badge variant="outline" className="border-gray-600 text-gray-300">
                            {category.percentage}%
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }} />
                          <span className="text-gray-400">₹{category.value.toLocaleString()}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Monthly Trends */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
            <Card className="bg-black/40 backdrop-blur-xl border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Monthly Trends</CardTitle>
                <CardDescription className="text-gray-400">Income, expenses, and savings over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="income"
                      stroke="#10B981"
                      strokeWidth={3}
                      dot={{ fill: "#10B981", strokeWidth: 2, r: 4 }}
                      name="Income"
                    />
                    <Line
                      type="monotone"
                      dataKey="expenses"
                      stroke="#EF4444"
                      strokeWidth={3}
                      dot={{ fill: "#EF4444", strokeWidth: 2, r: 4 }}
                      name="Expenses"
                    />
                    <Line
                      type="monotone"
                      dataKey="savings"
                      stroke="#8B5CF6"
                      strokeWidth={3}
                      dot={{ fill: "#8B5CF6", strokeWidth: 2, r: 4 }}
                      name="Savings"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
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
