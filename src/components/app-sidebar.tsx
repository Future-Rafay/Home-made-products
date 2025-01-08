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
  SidebarTrigger,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { FaHome, FaInfoCircle, FaLeaf, FaPhoneAlt } from "react-icons/fa"
import { Separator } from "./ui/separator"
import Image from "next/image"

// Menu items.
const items = [
  {
    title: "Homee",
    url: "/",
    icon: FaHome,
  },
  {
    title: "Products",
    url: "/products",
    icon: FaLeaf,
  },
  {
    title: "About",
    url: "/about",
    icon: FaInfoCircle,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: FaPhoneAlt,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarHeader className="flex gap-3 relative">
          <Image src='/svgs/logo.svg' alt="Logo" height={600} width={2000} className="w-auto h-10 " />
        </SidebarHeader>
        <SidebarGroup >
          <SidebarGroupLabel className="font-bold">Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu >
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} className="text-green-800 hover:text-green-600">
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  <Separator />
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>

  )
}