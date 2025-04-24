/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

// get all products
export const getAllProducts = async (page?: string, limit?: string) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/meals?limit=${limit}&page=${page}`,
            {
                next: {
                    tags: ["PRODUCT"],
                },
            }
        );
        const data = await res.json();
        return data;
    } catch (error: any) {
        return Error(error.message);
    }
};
