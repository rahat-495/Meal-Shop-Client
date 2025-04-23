import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (data) => ({
                url: "/auth/register",
                method: "POST",
                body: data
            })
        }),
        login: builder.mutation({
            query: (data) => ({
                url: "/auth/login",
                method: "POST",
                body: data
            })
        }),
    })
})


export const {
    useRegisterUserMutation,
    useLoginMutation
} = authApi;