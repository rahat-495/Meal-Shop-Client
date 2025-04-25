
/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

// get all products
export const getAllProducts = async (
    page?: string,
    limit?: string,
    query?: { [key: string]: string | string[] | undefined }
) => {
    const params = new URLSearchParams();


    if (query?.dietary) {
        params.append("dietary", query?.dietary.toString());
    }
    if (query?.availability) {
        params.append("availability", query?.availability.toString());
    }

    console.log(`${process.env.NEXT_PUBLIC_BASE_API}/meals?limit=${limit}&page=${page}&${params}`);
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/meals?limit=${limit}&page=${page}&${params}`,
            {
                next: {
                    tags: ["MEALS"],
                },
            }
        );
        const data = await res.json();
        return data;
    } catch (error: any) {
        return Error(error.message);
    }
};

// get all products
export const getProductById = async (id: string) => {

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/meals/${id}`);

        const data = await res.json();
        return data;
    } catch (error: any) {
        return Error(error.message);
    }
};
