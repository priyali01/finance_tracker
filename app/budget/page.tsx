"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
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
  Wallet,
  TrendingUp,
  TrendingDown,
  Target,
  Plus,
  Edit,
  Trash2,
  AlertTriangle,
  CheckCircle,
  Menu,
  X,
  Sparkles,
  Settings,
  LogOut,
  CreditCard,
  BarChart,
} from "lucide-react"
import Link from "next/link"

interface BudgetCategory {
  id: number
  name: string
  budgeted: number
  spent: number
  color: string
  icon: any
}

const initialBudgets: BudgetCategory[] = [
  { id: 1, name: "Food & Dining", budgeted: 15000, spent: 12500, color: "#8B5CF6", icon: "🍽️" },
  { id: 2, name: "Transportation", budgeted: 8000, spent: 9200, color: "#06B6D4", icon: "🚗" },
  { id: 3, name: "Shopping", budgeted: 10000, spent: 8500, color: "#10B981", icon: "🛍️" },
  { id: 4, name: "Bills & Utilities", budgeted: 18000, spent: 17800, color: "#F59E0B", icon: "⚡" },
  { id: 5, name: "Entertainment", budgeted: 5000, spent: 3200, color: "#EF4444", icon: "🎬" },
  { id: 6, name: "Healthcare", budgeted: 7000, spent: 4500, color: "#8B5CF6", icon: "🏥" },
]

export default function BudgetPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [budgets, setBudgets] = useState<BudgetCategory[]>(initialBudgets)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [editingBudget, setEditingBudget] = useState<BudgetCategory | null>(null)
  const [newBudget, setNewBudget] = useState({
    name: "",
    budgeted: "",
    color: "#8B5CF6",
    icon: "💰",
  })

  const totalBudgeted = budgets.reduce((sum, budget) => sum + budget.budgeted, 0)
  const totalSpent = budgets.reduce((sum, budget) => sum + budget.spent, 0)
  const remainingBudget = totalBudgeted - totalSpent

  const handleAddBudget = () => {
    const budget: BudgetCategory = {
      id: Date.now(),
      name: newBudget.name,
      budgeted: Number.parseInt(newBudget.budgeted),
      spent: 0,
      color: newBudget.color,
      icon: newBudget.icon,
    }
    setBudgets([...budgets, budget])
    setNewBudget({ name: "", budgeted: "", color: "#8B5CF6", icon: "💰" })
    setIsAddDialogOpen(false)
  }

  const handleEditBudget = (budget: BudgetCategory) => {
    setEditingBudget(budget)
    setNewBudget({
      name: budget.name,
      budgeted: budget.budgeted.toString(),
      color: budget.color,
      icon: budget.icon,
    })
    setIsAddDialogOpen(true)
  }

  const handleUpdateBudget = () => {
    if (editingBudget) {
      setBudgets(
        budgets.map((budget) =>
          budget.id === editingBudget.id
            ? {
                ...budget,
                name: newBudget.name,
                budgeted: Number.parseInt(newBudget.budgeted),
                color: newBudget.color,
                icon: newBudget.icon,
              }
            : budget,
        ),
      )
      setEditingBudget(null)
      setNewBudget({ name: "", budgeted: "", color: "#8B5CF6", icon: "💰" })
      setIsAddDialogOpen(false)
    }
  }

  const handleDeleteBudget = (id: number) => {
    setBudgets(budgets.filter((budget) => budget.id !== id))
  }

  const getBudgetStatus = (spent: number, budgeted: number) => {
    const percentage = (spent / budgeted) * 100
    if (percentage >= 100) return { status: "over", color: "text-red-400", icon: AlertTriangle }
    if (percentage >= 80) return { status: "warning", color: "text-yellow-400", icon: AlertTriangle }
    return { status: "good", color: "text-green-400", icon: CheckCircle }
  }

useEffect(() => {
  localStorage.setItem("budgets", JSON.stringify(budgets))
}, [budgets])


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
            className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-purple-600/20 text-purple-300 border border-purple-500/30"
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
                <h1 className="text-2xl font-light text-white">Budget Planner</h1>
                <p className="text-gray-400">Plan and track your monthly spending</p>
              </div>
            </div>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Budget
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-black/90 backdrop-blur-xl border-white/10 text-white">
                <DialogHeader>
                  <DialogTitle>{editingBudget ? "Edit Budget" : "Add New Budget"}</DialogTitle>
                  <DialogDescription className="text-gray-400">
                    {editingBudget ? "Update your budget category" : "Create a new budget category"}
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Category Name</Label>
                    <Input
                      id="name"
                      placeholder="e.g., Groceries"
                      value={newBudget.name}
                      onChange={(e) => setNewBudget({ ...newBudget, name: e.target.value })}
                      className="bg-gray-800/50 border-gray-700 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="amount">Monthly Budget</Label>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="0"
                      value={newBudget.budgeted}
                      onChange={(e) => setNewBudget({ ...newBudget, budgeted: e.target.value })}
                      className="bg-gray-800/50 border-gray-700 text-white"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="color">Color</Label>
                      <Select
                        value={newBudget.color}
                        onValueChange={(value) => setNewBudget({ ...newBudget, color: value })}
                      >
                        <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="#8B5CF6">Purple</SelectItem>
                          <SelectItem value="#06B6D4">Cyan</SelectItem>
                          <SelectItem value="#10B981">Green</SelectItem>
                          <SelectItem value="#F59E0B">Yellow</SelectItem>
                          <SelectItem value="#EF4444">Red</SelectItem>
                          <SelectItem value="#8B5CF6">Blue</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="icon">Icon</Label>
                      <Select
                        value={newBudget.icon}
                        onValueChange={(value) => setNewBudget({ ...newBudget, icon: value })}
                      >
                        <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="🍽️">🍽️ Food</SelectItem>
                          <SelectItem value="🚗">🚗 Transport</SelectItem>
                          <SelectItem value="🛍️">🛍️ Shopping</SelectItem>
                          <SelectItem value="⚡">⚡ Utilities</SelectItem>
                          <SelectItem value="🎬">🎬 Entertainment</SelectItem>
                          <SelectItem value="🏥">🏥 Healthcare</SelectItem>
                          <SelectItem value="💰">💰 Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button
                    onClick={editingBudget ? handleUpdateBudget : handleAddBudget}
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                  >
                    {editingBudget ? "Update Budget" : "Add Budget"}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </header>

        {/* Budget Overview */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <Card className="bg-black/40 backdrop-blur-xl border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Total Budgeted</p>
                      <p className="text-2xl font-light text-white">₹{totalBudgeted.toLocaleString()}</p>
                    </div>
                    <div className="bg-blue-500/20 p-3 rounded-xl">
                      <Wallet className="h-6 w-6 text-blue-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <Card className="bg-black/40 backdrop-blur-xl border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Total Spent</p>
                      <p className="text-2xl font-light text-white">₹{totalSpent.toLocaleString()}</p>
                    </div>
                    <div className="bg-red-500/20 p-3 rounded-xl">
                      <TrendingDown className="h-6 w-6 text-red-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <Card className="bg-black/40 backdrop-blur-xl border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Remaining</p>
                      <p className={`text-2xl font-light ${remainingBudget >= 0 ? "text-green-400" : "text-red-400"}`}>
                        ₹{Math.abs(remainingBudget).toLocaleString()}
                      </p>
                    </div>
                    <div className={`p-3 rounded-xl ${remainingBudget >= 0 ? "bg-green-500/20" : "bg-red-500/20"}`}>
                      {remainingBudget >= 0 ? (
                        <TrendingUp className="h-6 w-6 text-green-400" />
                      ) : (
                        <TrendingDown className="h-6 w-6 text-red-400" />
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Budget Categories */}
          <Card className="bg-black/40 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Budget Categories</CardTitle>
              <CardDescription className="text-gray-400">
                Track your spending across different categories
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {budgets.map((budget, index) => {
                  const percentage = (budget.spent / budget.budgeted) * 100
                  const status = getBudgetStatus(budget.spent, budget.budgeted)
                  const StatusIcon = status.icon

                  return (
                    <motion.div
                      key={budget.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl">{budget.icon}</div>
                          <div>
                            <h3 className="text-white font-medium">{budget.name}</h3>
                            <p className="text-gray-400 text-sm">
                              ₹{budget.spent.toLocaleString()} of ₹{budget.budgeted.toLocaleString()}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <StatusIcon className={`h-5 w-5 ${status.color}`} />
                          <Badge
                            variant="outline"
                            className={`${
                              percentage >= 100
                                ? "border-red-500/30 text-red-400"
                                : percentage >= 80
                                  ? "border-yellow-500/30 text-yellow-400"
                                  : "border-green-500/30 text-green-400"
                            }`}
                          >
                            {percentage.toFixed(0)}%
                          </Badge>
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleEditBudget(budget)}
                              className="text-gray-400 hover:text-white h-8 w-8"
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleDeleteBudget(budget.id)}
                              className="text-gray-400 hover:text-red-400 h-8 w-8"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                      <Progress value={Math.min(percentage, 100)} className="h-2" />
                    </motion.div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>
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
