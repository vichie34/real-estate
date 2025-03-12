import { Bell, X } from "lucide-react"
// import { Card } from "@/components/ui/card"
import Card from "./UI/card"

const notifications = [
  {
    title: "Your call has been confirmed",
    time: "1 hour ago",
    unread: true,
  },
  {
    title: "You have a new message",
    time: "2 hours ago",
    unread: false,
  },
  {
    title: "Your subscription is expiring soon",
    time: "3 hours ago",
    unread: false,
  },
]

export function SidePanel() {
  return (
    <div className="w-80 border-l bg-white">
      <div className="flex h-14 items-center justify-between border-b px-4">
        <div className="flex items-center gap-x-2">
          <Bell className="h-5 w-5" />
          <span className="font-semibold">Notifications</span>
        </div>
        <button>
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="h-[calc(100vh-3.5rem)] overflow-auto">
        <div className="p-4">
          <div className="space-y-4">
            {notifications.map((notification, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-medium">{notification.title}</div>
                    <div className="text-sm text-gray-500">{notification.time}</div>
                  </div>
                  {notification.unread && <div className="h-2 w-2 rounded-full bg-blue-500" />}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

