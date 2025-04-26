"use client"
import { Calendar, FilePlus, Home, ListOrdered, Search, Settings, ShieldPlus, Users , TruckElectric , Kanban } from "lucide-react";
import logoSquare from "@/assets/logos/logo-icon.png";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
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
import Link from "next/link";
import { Button } from "./button";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";


// order / invoice
const items = [
    {
        title: "Order List",
        url: "/",
        icon: ListOrdered,
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
// user links
const userManagementItems = [
    {
        title: "User List",
        url: "/",
        icon: Users,
    },
    {
        title: "Add Admin",
        url: "#",
        icon: ShieldPlus,
    }
];

// product group
const productMenuItems = [
    {
        title: "Add New Menu",
        url: "/add-product",
        icon: FilePlus,
    },
    {
        title: "Meal List",
        url: "/manage-products",
        icon: Home,
    },
]

// for user -------
const orderManagementItems = [
    {
        title: "Track Orders",
        url: "/track-orders",
        icon: TruckElectric,
    },
    {
        title: "Manage Orders",
        url: "/manage-orders",
        icon: Kanban,
    }
];

export function AppSidebar() {
    
    const user = useSelector((state : RootState) => state.combinedPersist.auth.user) ;

    const handleLogout  = ()=>{
        console.log("handle Logout");
    }

    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                    <Link href='/'>
                        <div className="items-center hidden md:flex justify-center">
                            <Image
                                src={logoSquare}
                                width={36}
                                height={36}
                                alt="Meal Moja Logo"
                                className="lucid"
                                
                            />
                            <span className="overflow-hidden">
                            <SectionHeading title="Meal Moja" className="!mb-0"/>
                            </span>
                        </div>
                    </Link>
            </SidebarHeader>

            {
                user?.role === 'admin' ? 
                <SidebarContent>

                    {/* Sidebar Group  */}
                    <SidebarGroup>
                        <SidebarGroupLabel>User Management</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {userManagementItems.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                        <Link href={'/dashboard/admin'.concat(item.url)}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>

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
                                        <Link href={'/dashboard/admin'.concat(item.url)}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>

                </SidebarContent> : 
                <SidebarContent>

                    {/* Sidebar Group  */}
                    <SidebarGroup>
                        <SidebarGroupLabel>Order Management</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {orderManagementItems.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                        <Link href={`/dashboard/user${item?.url}`}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>

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
                                        <Link href={'/dashboard/admin'.concat(item.url)}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>

                </SidebarContent> 
            }

            <SidebarFooter>
                <Button className="bg-emerald-500" onClick={()=>handleLogout()}>
                    Logout Now
                </Button>
            </SidebarFooter>

        </Sidebar>
    );
}
