"use client";
import {
    Calendar,
    FilePlus,
    Home,
    ListOrdered,
    Search,
    Settings,
    ShieldPlus,
    Users,
} from "lucide-react";
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
import { useAppDispatch } from "@/redux/hooks";
import { logoutUser } from "@/redux/featured/auth/authSlice";
import { logout } from "@/services/Auth";
import { protectedRoutes } from "@/constants";
import { usePathname, useRouter } from "next/navigation";

// order / invoice
const orderItems = [
    {
        title: "Order List",
        url: "/dashboard/admin/manage-orders",
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
];

export function AppSidebar() {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const pathname = usePathname();

    const handleLogout = () => {
        dispatch(logoutUser());
        logout();
        if (protectedRoutes.some((route) => pathname.match(route))) {
            router.push("/");
        }
    };
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <Link href="/">
                    <div className="items-center hidden md:flex justify-center">
                        <Image
                            src={logoSquare}
                            width={36}
                            height={36}
                            alt="Meal Moja Logo"
                            className="lucid"
                        />
                        <span className="overflow-hidden">
                            <SectionHeading
                                title="Meal Moja"
                                className="!mb-0"
                            />
                        </span>
                    </div>
                </Link>
            </SidebarHeader>
            <SidebarContent>
                {/* Sidebar Group  */}
                <SidebarGroup>
                    <SidebarGroupLabel>User Management</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {userManagementItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link
                                            href={"/dashboard/admin".concat(
                                                item.url
                                            )}>
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
                            {orderItems.map((item) => (
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
                                        <Link
                                            href={"/dashboard/admin".concat(
                                                item.url
                                            )}>
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
            <SidebarFooter>
                <Button
                    className="bg-emerald-500"
                    onClick={() => handleLogout()}>
                    Logout Now
                </Button>
            </SidebarFooter>
        </Sidebar>
    );
}
