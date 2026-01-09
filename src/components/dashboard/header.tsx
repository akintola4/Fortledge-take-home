"use client"

import { Search, Bell, ChevronDown } from "lucide-react"
import { Input } from "@/components/ui/input"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  return (
    <header className="flex h-20 items-center justify-between px-4 md:px-8 border-b border-gray-100 bg-white shadow-sm sticky top-0 z-50">
      <div className="flex items-center gap-2 md:gap-4 flex-1 max-w-xl">
        <SidebarTrigger className=" shrink-0" />
        <div className="relative w-full block">
          <Search className="absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search"
            className="w-full h-11 bg-[#f8f9fc] pr-12 border-none rounded-sm focus-visible:ring-1 focus-visible:ring-[#5D5FEF] text-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-8 ml-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-2 md:gap-3 cursor-pointer group hover:bg-gray-50 p-1 md:p-2 rounded-full transition-all outline-none">
              <div className="flex items-center justify-center h-8 w-8 md:h-10 md:w-10 rounded-full bg-[#FFE8D1] overflow-hidden shadow-sm shrink-0">
                <span className="text-lg md:text-xl">🍔</span>
              </div>
              <div className="hidden lg:flex items-center gap-2">
                <span className="text-sm font-bold text-[#1A1D1F] whitespace-nowrap">Delicious Burger</span>
                <ChevronDown className="h-4 w-4 text-gray-400 transition-transform group-data-[state=open]:rotate-180" />
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 mt-2 rounded-xl">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer text-red-500 focus:text-red-500">Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="relative cursor-pointer hover:scale-105 transition-transform shrink-0 outline-none">
              <div className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-sm bg-white border border-gray-50 shadow-sm">
                <Bell className="h-5 w-5 text-gray-400" />
              </div>
              <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-sm border-2 border-white bg-[#FF5B5B]"></span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-64 mt-2 rounded-xl">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="p-4 text-center">
              <p className="text-xs text-gray-500">You have no new notifications.</p>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
