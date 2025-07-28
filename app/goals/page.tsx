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
  Target,
  TrendingUp,
  Calendar,
  Plus,
  Edit,
  Trash2,
  CheckCircle,
  Menu,
  X,
  Sparkles,
  Settings,
  LogOut,
  CreditCard,
  Wallet,
  BarChart,
} from "lucide-react"
import Link from "next/link"

interface Goal {
  id: number
  name: string
  description: string
  targetAmount: number
  currentAmount: number
  targetDate: string
  category: string
  color: string
  icon: any
  priority: "high" | "medium" | "low"
}

const initialGoals: Goal[] = [
  {
    id: 1,
    name: "Emergency Fund",
    description: "6 months of expenses for financial security",
    targetAmount: 300000,
    currentAmount: 180000,
    targetDate: "2024-12-31",
    category: "Emergency",
    color: "#EF4444",
    icon: "🛡️",
    priority: "high",
  },
  {
    id: 2,
    name: "Dream Vacation",
    description: "Trip to Europe with family",
    targetAmount: 150000,
    currentAmount: 85000,
    targetDate: "2024-08-15",
    category: "Travel",
    color: "#06B6D4",
    icon: "✈️",
    priority: "medium",
  },
  {
    id: 3,
    name: "New Car",
    description: "Down payment for a new car",
    targetAmount: 200000,
    currentAmount: 120000,
    targetDate: "2024-10-01",
    category: "Vehicle",
    color: "#10B981",
    icon: "🚗",
    priority: "medium",
  },
  {
    id: 4,
    name: "Home Down Payment",
    description: "20% down payment for dream home",
    targetAmount: 1000000,
    currentAmount: 450000,
    targetDate: "2025-06-01",
    category: "Real Estate",
    color: "#8B5CF6",
    icon: "🏠",
    priority: "high",
  },
]

export default function GoalsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [goals, setGoals] = useState<Goal[]>(initialGoals)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [editingGoal, setEditingGoal] = useState<Goal | null>(null)
  const [newGoal, setNewGoal] = useState({
    name: "",
    description: "",
    targetAmount: "",
    currentAmount: "",
    targetDate: "",
    category: "Other",
    color: "#8B5CF6",
    icon: "🎯",
    priority: "medium" as "high" | "medium" | "low",
  })

  const totalTargetAmount = goals.reduce((sum, goal) => sum + goal.targetAmount, 0)
  const totalCurrentAmount = goals.reduce((sum, goal) => sum + goal.currentAmount, 0)
  const overallProgress = (totalCurrentAmount / totalTargetAmount) * 100

  const handleAddGoal = () => {
    const goal: Goal = {
      id: Date.now(),
      name: newGoal.name,
      description: newGoal.description,
      targetAmount: Number.parseInt(newGoal.targetAmount),
      currentAmount: Number.parseInt(newGoal.currentAmount) || 0,
      targetDate: newGoal.targetDate,
      category: newGoal.category,
      color: newGoal.color,
      icon: newGoal.icon,
      priority: newGoal.priority,
    }
    setGoals([...goals, goal])
    resetForm()
    setIsAddDialogOpen(false)
  }

  const handleEditGoal = (goal: Goal) => {
    setEditingGoal(goal)
    setNewGoal({
      name: goal.name,
      description: goal.description,
      targetAmount: goal.targetAmount.toString(),
      currentAmount: goal.currentAmount.toString(),
      targetDate: goal.targetDate,
      category: goal.category,
      color: goal.color,
      icon: goal.icon,
      priority: goal.priority,
    })
    setIsAddDialogOpen(true)
  }

  const handleUpdateGoal = () => {
    if (editingGoal) {
      setGoals(
        goals.map((goal) =>
          goal.id === editingGoal.id
            ? {
                ...goal,
                name: newGoal.name,
                description: newGoal.description,
                targetAmount: Number.parseInt(newGoal.targetAmount),
                currentAmount: Number.parseInt(newGoal.currentAmount),
                targetDate: newGoal.targetDate,
                category: newGoal.category,
                color: newGoal.color,
                icon: newGoal.icon,
                priority: newGoal.priority,
              }
            : goal,
        ),
      )
      setEditingGoal(null)
      resetForm()
      setIsAddDialogOpen(false)
    }
  }

  const handleDeleteGoal = (id: number) => {
    setGoals(goals.filter((goal) => goal.id !== id))
  }

  const resetForm = () => {
    setNewGoal({
      name: "",
      description: "",
      targetAmount: "",
      currentAmount: "",
      targetDate: "",
      category: "Other",
      color: "#8B5CF6",
      icon: "🎯",
      priority: "medium",
    })
  }

  const getDaysRemaining = (targetDate: string) => {
    const today = new Date()
    const target = new Date(targetDate)
    const diffTime = target.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "border-red-500/30 text-red-400"
      case "medium":
        return "border-yellow-500/30 text-yellow-400"
      case "low":
        return "border-green-500/30 text-green-400"
      default:
        return "border-gray-500/30 text-gray-400"
    }
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
            className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-purple-600/20 text-purple-300 border border-purple-500/30"
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
                <h1 className="text-2xl font-light text-white">Financial Goals</h1>
                <p className="text-gray-400">Set and track your financial milestones</p>
              </div>
            </div>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Goal
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-black/90 backdrop-blur-xl border-white/10 text-white max-w-md">
                <DialogHeader>
                  <DialogTitle>{editingGoal ? "Edit Goal" : "Add New Goal"}</DialogTitle>
                  <DialogDescription className="text-gray-400">
                    {editingGoal ? "Update your financial goal" : "Create a new financial goal"}
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  <div className="space-y-2">
                    <Label htmlFor="name">Goal Name</Label>
                    <Input
                      id="name"
                      placeholder="e.g., Emergency Fund"
                      value={newGoal.name}
                      onChange={(e) => setNewGoal({ ...newGoal, name: e.target.value })}
                      className="bg-gray-800/50 border-gray-700 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Input
                      id="description"
                      placeholder="Brief description of your goal"
                      value={newGoal.description}
                      onChange={(e) => setNewGoal({ ...newGoal, description: e.target.value })}
                      className="bg-gray-800/50 border-gray-700 text-white"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="targetAmount">Target Amount</Label>
                      <Input
                        id="targetAmount"
                        type="number"
                        placeholder="0"
                        value={newGoal.targetAmount}
                        onChange={(e) => setNewGoal({ ...newGoal, targetAmount: e.target.value })}
                        className="bg-gray-800/50 border-gray-700 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="currentAmount">Current Amount</Label>
                      <Input
                        id="currentAmount"
                        type="number"
                        placeholder="0"
                        value={newGoal.currentAmount}
                        onChange={(e) => setNewGoal({ ...newGoal, currentAmount: e.target.value })}
                        className="bg-gray-800/50 border-gray-700 text-white"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="targetDate">Target Date</Label>
                    <Input
                      id="targetDate"
                      type="date"
                      value={newGoal.targetDate}
                      onChange={(e) => setNewGoal({ ...newGoal, targetDate: e.target.value })}
                      className="bg-gray-800/50 border-gray-700 text-white"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select
                        value={newGoal.category}
                        onValueChange={(value) => setNewGoal({ ...newGoal, category: value })}
                      >
                        <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="Emergency">Emergency</SelectItem>
                          <SelectItem value="Travel">Travel</SelectItem>
                          <SelectItem value="Vehicle">Vehicle</SelectItem>
                          <SelectItem value="Real Estate">Real Estate</SelectItem>
                          <SelectItem value="Education">Education</SelectItem>
                          <SelectItem value="Investment">Investment</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="priority">Priority</Label>
                      <Select
                        value={newGoal.priority}
                        onValueChange={(value: "high" | "medium" | "low") =>
                          setNewGoal({ ...newGoal, priority: value })
                        }
                      >
                        <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="low">Low</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="icon">Icon</Label>
                    <Select value={newGoal.icon} onValueChange={(value) => setNewGoal({ ...newGoal, icon: value })}>
                      <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        <SelectItem value="🛡️">🛡️ Emergency</SelectItem>
                        <SelectItem value="✈️">✈️ Travel</SelectItem>
                        <SelectItem value="🚗">🚗 Vehicle</SelectItem>
                        <SelectItem value="🏠">🏠 Home</SelectItem>
                        <SelectItem value="🎓">🎓 Education</SelectItem>
                        <SelectItem value="💰">💰 Investment</SelectItem>
                        <SelectItem value="🎯">🎯 Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button
                    onClick={editingGoal ? handleUpdateGoal : handleAddGoal}
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                  >
                    {editingGoal ? "Update Goal" : "Add Goal"}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </header>

        {/* Goals Overview */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <Card className="bg-black/40 backdrop-blur-xl border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Total Goals</p>
                      <p className="text-2xl font-light text-white">{goals.length}</p>
                    </div>
                    <div className="bg-purple-500/20 p-3 rounded-xl">
                      <Target className="h-6 w-6 text-purple-400" />
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
                      <p className="text-gray-400 text-sm">Total Saved</p>
                      <p className="text-2xl font-light text-white">₹{totalCurrentAmount.toLocaleString()}</p>
                    </div>
                    <div className="bg-green-500/20 p-3 rounded-xl">
                      <CheckCircle className="h-6 w-6 text-green-400" />
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
                      <p className="text-gray-400 text-sm">Overall Progress</p>
                      <p className="text-2xl font-light text-white">{overallProgress.toFixed(1)}%</p>
                    </div>
                    <div className="bg-blue-500/20 p-3 rounded-xl">
                      <TrendingUp className="h-6 w-6 text-blue-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Goals List */}
          <Card className="bg-black/40 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Your Goals</CardTitle>
              <CardDescription className="text-gray-400">
                Track progress towards your financial milestones
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {goals.map((goal, index) => {
                  const progress = (goal.currentAmount / goal.targetAmount) * 100
                  const daysRemaining = getDaysRemaining(goal.targetDate)
                  const isOverdue = daysRemaining < 0

                  return (
                    <motion.div
                      key={goal.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl">{goal.icon}</div>
                          <div>
                            <h3 className="text-white font-medium">{goal.name}</h3>
                            <p className="text-gray-400 text-sm">{goal.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className={getPriorityColor(goal.priority)}>
                            {goal.priority}
                          </Badge>
                          <div className="flex items-center space-x-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleEditGoal(goal)}
                              className="text-gray-400 hover:text-white h-8 w-8"
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleDeleteGoal(goal.id)}
                              className="text-gray-400 hover:text-red-400 h-8 w-8"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Progress</span>
                          <span className="text-white">{progress.toFixed(1)}%</span>
                        </div>
                        <Progress value={Math.min(progress, 100)} className="h-2" />
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">
                            ₹{goal.currentAmount.toLocaleString()} of ₹{goal.targetAmount.toLocaleString()}
                          </span>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3 text-gray-400" />
                            <span className={isOverdue ? "text-red-400" : "text-gray-400"}>
                              {isOverdue ? `${Math.abs(daysRemaining)} days overdue` : `${daysRemaining} days left`}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="border-gray-600 text-gray-300">
                            {goal.category}
                          </Badge>
                          <span className="text-gray-400 text-sm">
                            Target: {new Date(goal.targetDate).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
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
