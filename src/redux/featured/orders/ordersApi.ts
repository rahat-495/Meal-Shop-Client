
import { baseApi } from "@/redux/api/baseApi";

const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getMyOrders: builder.query({
            query: () => ({
                url: "/orders/my-orders",
                method: "GET",
            })
        }),
    })
})


export const {useGetMyOrdersQuery} = orderApi;
