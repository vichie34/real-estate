import { Card } from "@/components/ui/card"

export function MetricCards() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <Card className="bg-purple-500 p-4 text-white">
        <div className="mb-2 text-sm opacity-80">Overview</div>
        <div className="text-2xl font-semibold">$14,235</div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm opacity-80">No properties</span>
          <button className="rounded-full bg-white/20 px-2 py-1 text-xs">View all</button>
        </div>
      </Card>
      <Card className="bg-green-500 p-4 text-white">
        <div className="mb-2 text-sm opacity-80">Total Balance</div>
        <div className="text-2xl font-semibold">$5,235</div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm opacity-80">+2.45%</span>
          <button className="rounded-full bg-white/20 px-2 py-1 text-xs">Add funds</button>
        </div>
      </Card>
      <Card className="bg-blue-500 p-4 text-white">
        <div className="mb-2 text-sm opacity-80">Properties</div>
        <div className="text-2xl font-semibold">24</div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm opacity-80">Active now</span>
          <button className="rounded-full bg-white/20 px-2 py-1 text-xs">View all</button>
        </div>
      </Card>
    </div>
  )
}

