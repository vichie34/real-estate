import { Card } from "@/components/ui/card"

const budgets = [
  {
    name: "Coffee Afternoon",
    amount: "$150 USD",
    change: "+$34.00",
    status: "Average volume",
  },
  {
    name: "Starbucks",
    amount: "$250 USD",
    change: "+$174.00",
    status: "Average volume",
  },
  {
    name: "Uber",
    amount: "$350 USD",
    change: "+$134.00",
    status: "Average volume",
  },
]

export function BudgetTable() {
  return (
    <Card className="p-4">
      <h3 className="mb-4 font-medium">Manage Budgets</h3>
      <div className="space-y-4">
        {budgets.map((budget) => (
          <div key={budget.name} className="flex items-center justify-between border-b pb-4">
            <div>
              <div className="font-medium">{budget.name}</div>
              <div className="text-sm text-muted-foreground">{budget.amount}</div>
            </div>
            <div className="text-right">
              <div className="font-medium text-green-600">{budget.change}</div>
              <div className="text-sm text-muted-foreground">{budget.status}</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

