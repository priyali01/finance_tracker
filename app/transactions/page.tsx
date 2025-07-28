"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import {
  ArrowUpRight,
  ArrowDownRight,
  Search,
  Filter,
  Plus,
  Calendar,
  Tag,
  Menu,
  X,
  Sparkles,
  Settings,
  LogOut,
  TrendingUp,
  CreditCard,
  Wallet,
  Target,
  BarChart,
} from "lucide-react"
import Link from "next/link"

interface Transaction {
  id: number
  amount: number
  category: string
  description: string
  date: string
  type: "income" | "expense"
  account: string
}

const transactions = [
  {
    id: 1,
    description: "Salary Credit",
    amount: 55000,
    category: "Income",
    date: "2024-01-15",
    type: "income",
    account: "Savings Account",
  },
  {
    id: 2,
    description: "Grocery Store",
    amount: -2500,
    category: "Food & Dining",
    date: "2024-01-14",
    type: "expense",
    account: "Credit Card",
  },
  {
    id: 3,
    description: "Electric Bill",
    amount: -3200,
    category: "Bills & Utilities",
    date: "2024-01-13",
    type: "expense",
    account: "Checking Account",
  },
  {
    id: 4,
    description: "Coffee Shop",
    amount: -450,
    category: "Food & Dining",
    date: "2024-01-12",
    type: "expense",
    account: "Credit Card",
  },
  {
    id: 5,
    description: "Freelance Payment",
    amount: 8000,
    category: "Income",
    date: "2024-01-11",
    type: "income",
    account: "Savings Account",
  },
  {
    id: 6,
    description: "Gas Station",
    amount: -1200,
    category: "Transportation",
    date: "2024-01-10",
    type: "expense",
    account: "Credit Card",
  },
  {
    id: 7,
    description: "Online Shopping",
    amount: -4500,
    category: "Shopping",
    date: "2024-01-09",
    type: "expense",
    account: "Credit Card",
  },
  {
    id: 8,
    description: "Investment Dividend",
    amount: 1200,
    category: "Investment",
    date: "2024-01-08",
    type: "income",
    account: "Investment Account",
  },
]

const categories = [
  "All Categories",
  "Income",
  "Food & Dining",
  "Bills & Utilities",
  "Transportation",
  "Shopping",
  "Entertainment",
  "Investment",
  "Others",
]

export default function TransactionsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [sortBy, setSortBy] = useState("date")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [newTransaction, setNewTransaction] = useState({
    description: "",
    amount: "",
    category: "",
    type: "expense",
    date: new Date().toISOString().split("T")[0],
  })

  const filteredTransactions = transactions
    .filter((transaction) => {
      const matchesSearch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "All Categories" || transaction.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      if (sortBy === "date") return new Date(b.date).getTime() - new Date(a.date).getTime()
      if (sortBy === "amount") return Math.abs(b.amount) - Math.abs(a.amount)
      return a.description.localeCompare(b.description)
    })

  const handleAddTransaction = () => {
    // Add transaction logic here
    console.log("Adding transaction:", newTransaction)
    setIsAddDialogOpen(false)
    setNewTransaction({
      description: "",
      amount: "",
      category: "",
      type: "expense",
      date: new Date().toISOString().split("T")[0],
    })
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
            className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-purple-600/20 text-purple-300 border border-purple-500/30"
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
            className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
          >
            <BarChart className="h-5 w-5" />
            <span>Reports</span>
          </Link>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
          <div className="space-y-2">
            <Button variant="ghost" className="w-full justify-start text-gray-300 hover:bg-white/10 hover:text-white">
              <LogOut className="h-4 w-4 mr-3" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64">
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
                <h1 className="text-2xl font-light text-white">Transactions</h1>
                <p className="text-gray-400">Manage and track all your financial transactions</p>
              </div>
            </div>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Transaction
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-black/90 backdrop-blur-xl border-white/10 text-white">
                <DialogHeader>
                  <DialogTitle>Add New Transaction</DialogTitle>
                  <DialogDescription className="text-gray-400">
                    Enter the details of your transaction below.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Input
                      id="description"
                      placeholder="Enter transaction description"
                      value={newTransaction.description}
                      onChange={(e) => setNewTransaction({ ...newTransaction, description: e.target.value })}
                      className="bg-gray-800/50 border-gray-700 text-white"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="amount">Amount</Label>
                      <Input
                        id="amount"
                        type="number"
                        placeholder="0.00"
                        value={newTransaction.amount}
                        onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })}
                        className="bg-gray-800/50 border-gray-700 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="type">Type</Label>
                      <Select
                        value={newTransaction.type}
                        onValueChange={(value) => setNewTransaction({ ...newTransaction, type: value })}
                      >
                        <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="income">Income</SelectItem>
                          <SelectItem value="expense">Expense</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select
                        value={newTransaction.category}
                        onValueChange={(value) => setNewTransaction({ ...newTransaction, category: value })}
                      >
                        <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          {categories.slice(1).map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date">Date</Label>
                      <Input
                        id="date"
                        type="date"
                        value={newTransaction.date}
                        onChange={(e) => setNewTransaction({ ...newTransaction, date: e.target.value })}
                        className="bg-gray-800/50 border-gray-700 text-white"
                      />
                    </div>
                  </div>
                  <Button
                    onClick={handleAddTransaction}
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                  >
                    Add Transaction
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </header>

        {/* Filters */}
        <div className="p-6 bg-black/10 border-b border-white/10">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search transactions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48 bg-gray-800/50 border-gray-700 text-white">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48 bg-gray-800/50 border-gray-700 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="date">Sort by Date</SelectItem>
                <SelectItem value="amount">Sort by Amount</SelectItem>
                <SelectItem value="description">Sort by Description</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

{/* Transactions List */}
        <main className="p-6">
          <Card className="bg-black/40 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle>All Transactions</CardTitle>
              <CardDescription className="text-gray-400">
                {filteredTransactions.length > 0
                  ? `${filteredTransactions.length} transactions found.`
                  : "No transactions yet. Click 'Add Transaction' to get started!"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredTransactions.map((transaction, index) => (
                  <motion.div
                    key={transaction.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`p-3 rounded-lg ${
                          transaction.type === "income" ? "bg-green-500/20" : "bg-red-500/20"
                        }`}
                      >
                        {transaction.type === "income" ? (
                          <ArrowUpRight className="h-5 w-5 text-green-400" />
                        ) : (
                          <ArrowDownRight className="h-5 w-5 text-red-400" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-medium">{transaction.description}</h3>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-400 mt-1">
                          <span className="flex items-center">
                            <Tag className="w-3 h-3 mr-1" />
                            {transaction.category}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {new Date(transaction.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                          <span className="flex items-center">
                            <CreditCard className="w-3 h-3 mr-1" />
                            {transaction.account}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0 ml-4">
                      <span
                        className={`text-lg font-medium ${
                          transaction.type === "income" ? "text-green-400" : "text-red-400"
                        }`}
                      >
                        {transaction.type === "income" ? "+" : ""}₹{Math.abs(transaction.amount).toLocaleString("en-IN")}
                      </span>
                      <Badge
                        variant="outline"
                        className={`block mt-1 text-xs capitalize ${
                          transaction.type === "income"
                            ? "border-green-500/30 text-green-400"
                            : "border-red-500/30 text-red-400"
                        }`}
                      >
                        {transaction.type}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
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