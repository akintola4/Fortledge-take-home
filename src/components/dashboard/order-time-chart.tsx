"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"


interface OrderTimeData {
  name: string;
  value: number;
  color: string;
}

const data: OrderTimeData[] = [
  { name: "Afternoon", value: 40, color: "#5D5FEF" },
  { name: "Evening", value: 32, color: "#7F81FF" },
  { name: "Morning", value: 28, color: "#C6C7FF" },
]

export function OrderTimeChart() {
  return (
    <Card className="border-t-0 border-l-0 lg:border-l border-r-0 border-b-0 rounded-none border-gray-200  shadow-none bg-white  p-6 h-full">
      <CardHeader className="flex flex-row items-center justify-between p-0 mb-2">
        <div>
          <CardTitle className="text-sm font-semibold text-[#1A1D1F]">Order Time</CardTitle>
          <p className="text-[12px] text-gray-400 mt-1">From 1-6 Dec, 2020</p>
        </div>
        <button className="text-[12px] font-semibold text-[#5D5FEF] bg-[#F3F4FF] px-4 py-2 rounded-sm transition-colors border border-[#DDE4F0] cursor-pointer hover:bg-[#E8E9FF]">
          View Report
        </button>
      </CardHeader>
      <CardContent className="p-0 flex flex-col items-center">
        <div className="h-[220px] w-full relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={85}
                paddingAngle={0}
                dataKey="value"
                startAngle={90}
                endAngle={450}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                ))}
              </Pie>
              <Tooltip 
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-[#1A1D1F] text-white p-3 rounded-xl text-[12px] shadow-lg">
                        <p className="font-semibold">{payload[0].name}</p>
                        <p className="text-gray-400">1pm - 4pm</p>
                        <p className="font-bold mt-1">1.890 orders</p>
                      </div>
                    )
                  }
                  return null
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-3 gap-4 w-full mt-2">
          {data.map((item) => (
            <div key={item.name} className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-[11px] font-medium text-[#1A1D1F]">{item.name}</span>
              </div>
              <span className="text-[11px] text-gray-400 font-semibold">{item.value}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
