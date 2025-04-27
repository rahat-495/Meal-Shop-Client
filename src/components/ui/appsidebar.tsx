"use client"
import { FilePlus, Home, ListOrdered, TruckElectric , Kanban ,User , Pen , MenuIcon } from "lucide-react";
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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { logoutUser } from "@/redux/featured/auth/authSlice";
import { useRouter } from "next/navigation";
import { logout } from "@/services/Auth";


// order / invoice
const items = [
    {
        title: "Order List",
        url: "/orders",
        icon: ListOrdered,
    },
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
    {
        title: "All Meal Preference",
        url: "/all-meal-preference",
        icon: MenuIcon,
    },
    {
        title: "Profile",
        url: "/",
        icon: User,
    }
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

const mealPreference = [
    {
        title: "Create Meal Preference",
        url: "/create-meal-preference",
        icon: Pen,
    },
    {
        title: "All Meal Preference",
        url: "/all-meal-preference",
        icon: MenuIcon,
    },
    {
        title: "Profile",
        url: "/",
        icon: User,
    },
]

export function AppSidebar() {
    
    const router = useRouter() ;
    const user = useSelector((state : RootState) => state.combinedPersist.auth.user) ;
    const dispatch = useDispatch() ;

    const handleLogout  = ()=>{
        dispatch(logoutUser()) ;
        logout() ;
        router.push('/login') ;
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
                        <SidebarGroupLabel>Application</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <Link href={`/dashboard/admin${item.url}`}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </Link>
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
                : 
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
                        <SidebarGroupLabel>Manage Meal Preferences</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {mealPreference.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <Link href={`/dashboard/user${item.url}`}>
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
