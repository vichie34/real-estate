// import Sidebar from "@/components/sidebar"
import Sidebar from "./sidebar"
// import SidePanel from "./components/side-panel"
import { SidePanel } from "./side-panel"

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-auto bg-gray-50">{children}</main>
      <SidePanel />
    </div>
  )
}

