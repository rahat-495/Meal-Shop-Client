
import { baseApi } from "@/redux/api/baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getMyData: builder.query({
            query: () => ({
                url: "/users/get-my-data",
                method: "GET",
            })
        }),
    })
})


export const {useGetMyDataQuery} = userApi;
