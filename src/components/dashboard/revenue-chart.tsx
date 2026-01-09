"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Cell } from "recharts"
import { ArrowUp, ArrowUpRight } from "lucide-react"

const data = [
  { name: "01", current: 65, last: 45 },
  { name: "02", current: 55, last: 35 },
  { name: "03", current: 80, last: 60 },
  { name: "04", current: 50, last: 40 },
  { name: "05", current: 85, last: 65 },
  { name: "06", current: 95, last: 75 },
  { name: "07", current: 60, last: 50 },
  { name: "08", current: 75, last: 55 },
  { name: "09", current: 65, last: 55 },
  { name: "10", current: 55, last: 45 },
  { name: "11", current: 90, last: 70 },
  { name: "12", current: 100, last: 80 },
]

export function RevenueChart() {
  return (
    <Card className="border-t-0 border-l-0 border-r-0 border-b-0 rounded-none border-gray-200  shadow-none bg-white  p-6  h-full">
      <CardHeader className="flex flex-row items-center justify-between p-0 mb-6">
        <div>
          <CardTitle className="text-sm font-semibold text-[#1A1D1F]">Revenue</CardTitle>
          <div className="flex flex-col  gap-2 mt-2">
            <span className="text-2xl font-bold text-[#1A1D1F]">IDR 7.852.000</span>
            <div className="flex items-center gap-1 text-[12px] font-bold text-green-500">
              <span className="text-sm"><ArrowUp size={16} /></span>
              <span>2.1% <span className="text-gray-400 font-normal ml-1">vs last week</span></span>
            </div>
          </div>
          <p className="text-[12px] text-gray-400 mt-2">Sales from 1-12 Dec, 2020</p>
        </div>
        <button className="text-[12px] font-bold text-[#5D5FEF] bg-[#F3F4FF] px-6 py-2.5 rounded-sm transition-colors border border-[#DDE4F0] cursor-pointer hover:bg-[#E8E9FF]">
          View Report
        </button>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-[230px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }} barGap={6}>
              <XAxis 

                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: "#B2B2B2", fontSize: 12, fontWeight: 500 }}
                dy={10}
              />
              <Tooltip 
                cursor={{ fill: "transparent" }}
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
              <Bar dataKey="last" fill="#E8E9FF" radius={[1,1,1,1]} barSize={8} />
              <Bar dataKey="current" fill="#5D5FEF" radius={[1,1,1,1]} barSize={8} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-start gap-8 mt-6">
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
