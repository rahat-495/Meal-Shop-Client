import { baseApi } from "@/redux/api/baseApi";

const productsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addProducts: builder.mutation({
            query: (data) => ({
                url: "/meals/create-meal",
                method: "POST",
                body: data
            })
        }),
    })
})


export const {
    useAddProductsMutation
} = productsApi;