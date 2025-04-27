
import { baseApi } from "@/redux/api/baseApi";

const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getMyOrders: builder.query({
            query: () => ({
                url: "/orders/my-orders",
                method: "GET",
            }),
            providesTags : ["Orders"],
        }),
        getAllOrders: builder.query({
            query: () => ({
                url: "/orders",
                method: "GET",
            }),
            providesTags : ["Orders"],
        }),
        deleteOrder: builder.mutation({
            query: (id) => ({
                url: `/orders/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Orders"],
        }),
        placeOrder: builder.mutation({
            query: (payload) => ({
                url: `/orders/create-order`,
                method: "POST",
                body : payload ,
            }),
            invalidatesTags: ["Orders"],
        }),
        updateOrderStatus: builder.mutation({
            query: (payload) => ({
                url: `/orders/update-order-status`,
                method: "PUT",
                body : payload ,
            }),
            invalidatesTags: ["Orders"],
        }),
    })
})


export const {useGetMyOrdersQuery , useDeleteOrderMutation , usePlaceOrderMutation , useGetAllOrdersQuery , useUpdateOrderStatusMutation} = orderApi;
