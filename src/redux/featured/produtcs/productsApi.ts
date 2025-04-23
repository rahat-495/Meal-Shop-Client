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
        updateProducts: builder.mutation({
            query: ({id,data}) => ({
                url: `/meals/update-meal/${id}`,
                method: "PATCH",
                body: data
            })
        }),
        getProducts: builder.query({
            query: ()=> "/meals"
        }),
        getProductById: builder.query({
            query: (id)=> `/meals/${id}`
        })
    })
})


export const {
    useAddProductsMutation,
    useGetProductsQuery,
    useGetProductByIdQuery,
    useUpdateProductsMutation
} = productsApi;