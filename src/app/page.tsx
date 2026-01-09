"use client"

import { Header } from "@/components/dashboard/header"
import { RevenueChart } from "@/components/dashboard/revenue-chart"
import { OrderTimeChart } from "@/components/dashboard/order-time-chart"
import { RatingBubbles } from "@/components/dashboard/rating-bubbles"
import { MostOrderedFood } from "@/components/dashboard/most-ordered-food"
import { OrderStatusChart } from "@/components/dashboard/order-status-chart"


//if you confirm most of the dynmaic component are data based so we can convert the static data to dynamic data
export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="p-8 space-y-4">
        <h1 className="text-2xl font-semibold text-[#1A1D1F]">Dashboard</h1>
        
        {/* Top Row */}
        <div className="grid grid-cols-1  m-0  lg:grid-cols-3 gap-2">
          <div className="lg:col-span-2">
            <RevenueChart />
          </div>
          <div className="lg:col-span-1">
            <OrderTimeChart />
          </div>
        </div>
        
        {/* Bottom Row */}
        <div className="grid grid-cols-1 border-t-0 lg:border-t border-l-0 border-r-0 border-b-0 rounded-none lg:grid-cols-2 xl:grid-cols-3 gap-2">
          <div className="lg:col-span-1">
            <RatingBubbles />
          </div>
          <div className="lg:col-span-1">
            <MostOrderedFood />
          </div>
          <div className="lg:col-span-1">
            <OrderStatusChart />
          </div>
        </div>
      </main>
    </div>
  )
}
