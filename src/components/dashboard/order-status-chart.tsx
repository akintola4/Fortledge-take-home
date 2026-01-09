"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts"
import { ArrowDown, ArrowDownRight } from "lucide-react"

interface OrderStatusData {
  name: string;
  current: number;
  last: number;
}

const data: OrderStatusData[] = [
  { name: "01", current: 30, last: 20 },
  { name: "02", current: 25, last: 35 },
  { name: "03", current: 45, last: 25 },
  { name: "04", current: 35, last: 40 },
  { name: "05", current: 30, last: 25 },
  { name: "06", current: 55, last: 35 },
]

export function OrderStatusChart() {
  return (
    <Card className="border-t-0 border-l-0 lg:border-l border-r-0 border-b-0 rounded-none border-gray-200 shadow-none bg-white  p-6  h-full">
      <CardHeader className="flex  flex-row items-center justify-between p-0 mb-4">
        <div className="">
          <CardTitle className="text-sm font-semibold text-[#1A1D1F]">Order</CardTitle>
          <div className="flex flex-col gap-2 mt-2">
            <span className="text-xl font-bold text-[#1A1D1F]">2.568</span>
            <div className="flex items-center gap-1 text-[11px] font-bold text-[#FF5B5B]">
              <span className="text-sm"><ArrowDown size={10} /></span>
              <span>2.1% <span className="text-gray-400 font-normal ml-1">vs last week</span></span>
            </div>
          </div>
          <p className="text-[12px] text-gray-400 mt-2">Sales from 1-6 Dec, 2020</p>
        </div>
        <button className="text-[12px] font-bold text-[#5D5FEF] bg-[#F3F4FF] px-6 py-2.5 rounded-sm transition-colors border border-[#DDE4F0] cursor-pointer hover:bg-[#E8E9FF] self-start">
          View Report
        </button>
      </CardHeader>
      <CardContent className="p-0 mt-6">
        <div className="h-[150px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: "#B2B2B2", fontSize: 11, fontWeight: 500 }}
                dy={10}
              />
              <Tooltip 
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-[#1A1D1F] text-white px-3 py-2 rounded-xl text-[11px] font-bold shadow-lg">
                        {payload[0].value} orders
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Line 
                type="monotone" 
                dataKey="current" 
                stroke="#5D5FEF" 
                strokeWidth={4} 
                dot={false}
              />
              <Line 
                type="monotone" 
                dataKey="last" 
                stroke="#E8E9FF" 
                strokeWidth={4} 
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-start gap-8 mt-10">
          <div className="flex items-center gap-2.5">
            <div className="h-2.5 w-2.5 rounded-full bg-[#5D5FEF]"></div>
            <span className="text-[12px] font-semibold text-gray-400">Last 6 days</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="h-2.5 w-2.5 rounded-full bg-[#E8E9FF]"></div>
            <span className="text-[12px] font-semibold text-gray-400">Last Week</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
