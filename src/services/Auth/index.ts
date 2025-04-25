"use server"

import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";


// setting accessToken Manually
export const setUserCookie = async (accessToken: string) => {
    (await cookies()).set("accessToken", accessToken);
};

// logging in user using server action
export const loginUser = async (userData: FieldValues) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
            credentials: "include"
        });

        const result = await res.json();

        console.log(
            (await cookies()).get("refreshToken")
        );
        if (result?.success) {
            
            (await cookies()).set("accessToken", result?.data?.accessToken);
            // refresh token server theke asbe
            // (await cookies()).set("refreshToken", result?.data?.refreshToken);
        }

        return result;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        return Error(error);
    }
};

// logout user
export const logout = async () => {
    (await cookies()).delete("accessToken");
    (await cookies()).delete("refreshToken");
};

// get current user
export const getCurrentUser = async () => {
    const accessToken = (await cookies()).get("accessToken")?.value;
    let decodedData = null;

    if (accessToken) {
        decodedData = await jwtDecode(accessToken);
        return decodedData;
    } else {
        return null;
    }
};