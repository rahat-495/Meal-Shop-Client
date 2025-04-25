
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
        updateDietaryPreference: builder.mutation({
            query: (data) => ({
                url: "/preferences/update-dietary-preference",
                method: "PATCH",
                body: data
            })
        }),
        getMyDietaryPreference: builder.query({
            query: () => ({
                url: "/preferences/my-dietary-preferences",
                method: "GET",
            })
        }),
    })
})


export const {useCreateDietaryPreferenceMutation , useGetMyDietaryPreferenceQuery , useUpdateDietaryPreferenceMutation} = dietaryPreferenceApi;
