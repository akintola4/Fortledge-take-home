"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  ShoppingBag,
  ShoppingCart,
  ClipboardList,
  MessageCircleMore,
  Settings,
  Wallet,
  User,
  HelpCircle,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

const data = {
  menu: [
    {
      title: "Dashboard",
      url: "/",
      icon: BarChart3,
    },
    {
      title: "Food Order",
      url: "/dashboard/food-order",
      icon: ShoppingCart,
    },
    {
      title: "Manage Menu",
      url: "/dashboard/manage-menu",
      icon: ClipboardList,
    },
    {
      title: "Customer Review",
      url: "/dashboard/customer-review",
      icon: MessageCircleMore,
    },
  ],
  others: [
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings,
    },
    {
      title: "Payment",
      url: "/dashboard/payment",
      icon: Wallet,
    },
    {
      title: "Accounts",
      url: "/dashboard/accounts",
      icon: User,
    },
    {
      title: "Help",
      url: "/dashboard/help",
      icon: HelpCircle,
    },
  ],
};

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="border-r border-gray-100 bg-[#F1F2F7]">
      <SidebarHeader className="p-8">
        <div className="flex items-center gap-3 font-bold text-[#1A1D1F]">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5A67BA] text-white shadow-lg shadow-indigo-100">
            <span className="text-lg font-black">G</span>
          </div>
          <span className="text-md font-black tracking-tight text-[#5A67BA] items-center flex">
            GOODFOOD
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-3">
        <SidebarGroup>
          <SidebarGroupLabel className="px-4 text-[11px] font-normal tracking-widest text-[#273240] uppercase">
            Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-2">
              {data.menu.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={`group/item flex h-14 w-full items-center gap-5 rounded-sm px-4 text-[#273240] transition-all hover:bg-[#E8E9FF] hover:text-[#5D5FEF] ${
                        isActive ? "bg-[#E8E9FF] text-[#5D5FEF]" : "text-[#273240]"
                      }`}
                    >
                      <Link href={item.url}>
                        <div
                          className={`flex h-10 w-10 min-w-10 items-center justify-center rounded-xl transition-all ${
                            isActive
                              ? "bg-[#707FDD] text-white shadow-lg shadow-indigo-100"
                              : "bg-transparent text-[#A6ABC8] group-hover/item:bg-[#707FDD] group-hover/item:text-white"
                          }`}
                        >
                          <item.icon className="h-5 w-5 transition-colors" />
                        </div>
                        <span
                          className={`text-sm font-normal transition-colors ${
                            isActive ? "text-[#5D5FEF]" : "text-[#273240] group-hover/item:text-[#5D5FEF]"
                          }`}
                        >
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="">
          <SidebarGroupLabel className="px-4 mb-2 text-[11px] font-normal tracking-widest text-[#082431] uppercase">
            Others
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-2">
              {data.others.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={`group/item flex h-14 w-full items-center gap-5 rounded-sm px-4 text-[#273240] transition-all hover:bg-[#E8E9FF] hover:text-[#5D5FEF] ${
                        isActive ? "bg-[#E8E9FF] text-[#5D5FEF]" : "text-[#273240]"
                      }`}
                    >
                      <Link href={item.url}>
                        <div
                          className={`flex h-10 w-10 min-w-10 items-center justify-center rounded-xl transition-all ${
                            isActive
                              ? "bg-[#707FDD] text-white shadow-lg shadow-indigo-100"
                              : "bg-transparent text-[#A6ABC8] group-hover/item:bg-[#707FDD] group-hover/item:text-white"
                          }`}
                        >
                          <item.icon className="h-5 w-5 transition-colors" />
                        </div>
                        <span
                          className={`text-sm font-normal transition-colors ${
                            isActive ? "text-[#5D5FEF]" : "text-[#273240] group-hover/item:text-[#5D5FEF]"
                          }`}
                        >
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
