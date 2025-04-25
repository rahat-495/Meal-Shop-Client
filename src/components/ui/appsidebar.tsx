import { Calendar, Home, Search, Settings } from "lucide-react";
import logoSquare from "@/assets/logos/logo-icon.png";

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
import SectionHeading from "../shared/sectionheading";
import Image from "next/image";

// general items
const items = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
    {
        title: "Calendar",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Search",
        url: "#",
        icon: Search,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
];


// product group
const productMenuItems = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <div className="flex items-center justify-center gap-2 p-2">
                    <Image
                        src={logoSquare}
                        width={36}
                        height={36}
                        alt="Meal Moja Logo"
                    />
                    <SectionHeading title="Meal Moja" className="!mb-0"/>
                </div>
            </SidebarHeader>
            <SidebarContent>
                {/* Sidebar Group  */}
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                {/* Product Management  */}
                <SidebarGroup>
                    <SidebarGroupLabel>Product Management</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {productMenuItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
