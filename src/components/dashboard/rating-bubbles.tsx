"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


//anyone reading this the reason i moved the whole ui logic into here is to make sure they match up with the design
//with better data i can make them responsive to the percentage data, so the higher the percentage the bigger the bubble
const LAYOUT_CONFIGS = [
  {
    size: "h-[130px] w-[130px]",
    position: "top-4 left-8",
    zIndex: "z-20",
    fontSize: "text-3xl",
    labelSize: "text-sm",
    svgSize: "h-[150px] w-[150px]",
    svgInset: "-inset-2.5",
    svgRotate: "-rotate-120",
    opacity: "opacity-95"
  },
  {
    size: "h-[200px] w-[200px]",
    position: "top-16 right-4",
    zIndex: "z-10",
    fontSize: "text-6xl",
    labelSize: "text-xl",
    svgSize: "h-[224px] w-[224px]",
    svgInset: "-inset-3",
    svgRotate: "rotate-210",
    opacity: "opacity-100"
  },
  {
    size: "h-[140px] w-[140px]",
    position: "bottom-4 left-0",
    zIndex: "z-10",
    fontSize: "text-4xl",
    labelSize: "text-base",
    svgSize: "h-[160px] w-[160px]",
    svgInset: "-inset-2.5",
    svgRotate: "-rotate-120",
    opacity: "opacity-100"
  }
]

export function RatingBubbles() {
  const data = [
    { title: "Hygiene", percentage: 85, color: "#8280E1" },
    { title: "Food Taste", percentage: 85, color: "#FCAE4F" },
    { title: "Packaging", percentage: 92, color: "#46C7E0" }
  ]

  return (
    <Card className="border-none shadow-none bg-white p-6 h-full">
      <CardHeader className="p-0 mb-4">
        <CardTitle className="text-sm font-semibold text-[#1A1D1F]">Your Rating</CardTitle>
        <p className="text-[12px] text-gray-400 mt-1">Lorem ipsum dolor sit amet, consectetur</p>
      </CardHeader>
      <CardContent className="p-0 relative h-[320px] w-full flex items-center justify-center overflow-visible">
        <div className="relative h-full w-full max-w-[340px]">
          {data.map((item, index) => {
            const config = LAYOUT_CONFIGS[index] || LAYOUT_CONFIGS[0]
            return (
              <div key={index} className={`absolute ${config.position} ${config.zIndex}`}>
                <div 
                  className={`relative flex items-center justify-center ${config.size} rounded-full text-white ${config.opacity} shadow-sm`}
                  style={{ backgroundColor: item.color }}
                >
                  <div className="flex flex-col items-center">
                    <span className={`${config.fontSize} font-bold tracking-tight`}>{item.percentage}%</span>
                    <span className={`${config.labelSize} font-semibold mt-1`}>{item.title}</span>
                  </div>
                </div>
                {/* Outer Ring SVG */}
                <svg 
                  className={`absolute ${config.svgInset} ${config.svgSize} ${config.svgRotate} z-0 opacity-60`} 
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="48"
                    fill="none"
                    stroke={item.color}
                    strokeWidth="2"
                    strokeDasharray="260 40"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
