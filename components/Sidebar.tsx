"use client";

import { Button } from "@/components/ui/button";
import {
  BarChart3,
  CreditCard,
  FileText,
  Receipt,
  Settings,
  Users,
} from "lucide-react";

export function Sidebar() {
  return (
    <aside className="hidden lg:flex w-64 flex-col fixed inset-y-0 z-50 border-r bg-card">
      <div className="p-6">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">
          Lunaris
        </h2>
      </div>
      <nav className="flex-1 p-4">
        <div className="space-y-1">
          {[
            { icon: BarChart3, label: "Dashboard", active: true },
            { icon: FileText, label: "Invoices" },
            { icon: Receipt, label: "Expenses" },
            { icon: Users, label: "Clients" },
            { icon: CreditCard, label: "Payments" },
            { icon: Settings, label: "Settings" },
          ].map((item, index) => (
            <Button
              key={index}
              variant={item.active ? "secondary" : "ghost"}
              className="w-full justify-start"
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
            </Button>
          ))}
        </div>
      </nav>
    </aside>
  );
}
