import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/services/Auth";

type Role = keyof typeof roleBasedPrivateRoutes;

const authRoutes = ["/login", "/register"];

const roleBasedPrivateRoutes = {
    user: [/^\/dashboard\/user/],
    admin: [/^\/dashboard\/admin/],
    // dashboard: [/^\/dashboard/],
};

export const middleware = async (request: NextRequest) => {
    const { pathname } = request.nextUrl;

    const userInfo = await getCurrentUser();

    if (!userInfo) {
        if (authRoutes.includes(pathname)) {
            return NextResponse.next();
        } else {
            return NextResponse.redirect(
                new URL(
                    `${process.env.NEXT_CLIENT_URL}/login?redirectPath=${pathname}`,
                    request.url
                )
            );
        }
    }

    if (userInfo?.role && roleBasedPrivateRoutes[userInfo?.role as Role]) {
        const routes = roleBasedPrivateRoutes[userInfo?.role as Role];
        if (routes.some((route) => pathname.match(route))) {
            return NextResponse.next();
        }
    }

    return NextResponse.redirect(new URL("/", request.url));
};

export const config = {
    matcher: [
        "/login",
        "/dashboard", 
        "/dashboard/:page",
        "/dashboard/:page/:page"
    ],
};
