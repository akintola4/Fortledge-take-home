"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

interface OrderFoodData {
  name: string;
  price: string;
  image: string;
}

const foodItems: OrderFoodData[] = [
  { name: "Fresh Salad Bowl", price: "IDR 45.000", image: "/png/fresh-salad-bowl.png" },
  { name: "Chicken Noodles", price: "IDR 75.000", image: "/png/chicken-noodles.png" },
  { name: "Smoothie Fruits", price: "IDR 45.000", image: "/png/smoothie-fruits.png" },
  { name: "Hot Chicken Wings", price: "IDR 45.000", image: "/png/hot-chicken-wings.png" },
]

export function MostOrderedFood() {
  return (
    <Card className="border-t-0 border-l-0 lg:border-l border-r-0 border-b-0 rounded-none border-gray-200 shadow-none bg-white p-6  h-full">
      <CardHeader className="p-0 mb-6">
        <CardTitle className="text-sm font-semibold text-[#1A1D1F]">Most Ordered Food</CardTitle>
        <p className="text-[12px] text-gray-400 mt-1">Adipiscing elit, sed do eiusmod tempor</p>
      </CardHeader>
      <CardContent className="p-0 mt-6 space-y-6">
        {foodItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-4">

              <Image src={item.image ?? "/globe.svg"} alt={item.name} className="rounded-2xl h-12 w-12" width={100} height={100} />

              <div>
                <span className="text-sm font-bold text-[#1A1D1F] block">{item.name}</span>
                <span className="text-[10px] text-gray-400 font-medium">Top Choice</span>
              </div>
            </div>
            <span className="text-[13px] font-bold text-gray-400">{item.price}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
