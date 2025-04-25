
import { baseApi } from "@/redux/api/baseApi";

const dietaryPreferenceApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createDietaryPreference: builder.mutation({
            query: (data) => ({
                url: "/preferences/create-dietary-preference",
                method: "POST",
                body: data
            })
        }),
    })
})


export const {useCreateDietaryPreferenceMutation} = dietaryPreferenceApi;
