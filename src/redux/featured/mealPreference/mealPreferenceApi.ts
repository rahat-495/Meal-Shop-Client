
import { baseApi } from "@/redux/api/baseApi";

export const mealPreferenceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyMealPreference: builder.query({
        query: () => ({
          url: "/meal-preferences/get-my-meal-preferences",
          method: "GET",
        }),
        providesTags : ["MealPreference"],
    }),
    getAllMealPreference: builder.query({
        query: () => ({
          url: "/meal-preferences",
          method: "GET",
        }),
        providesTags : ["MealPreference"],
    }),
    getSingleMealPreference: builder.query({
        query: (id) => ({
          url: `/meal-preferences/${id}`,
          method: "GET",
        }),
    }),
    createMealPreference: builder.mutation({
      query: (data) => ({
        url: "/meal-preferences/create-meal-preference",
        method: "POST",
        body: data,
      }),
      invalidatesTags : ["MealPreference"],
    }),
    updateMealPreference: builder.mutation({
      query: ({id , data}) => ({
        url: `/meal-preferences/update-meal-preference/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags : ["MealPreference"],
    }),
    deleteMealPreference: builder.mutation({
      query: (id) => ({
        url: `/meal-preferences/${id}`,
        method: "DELETE",
      }),
      invalidatesTags : ["MealPreference"],
    }),
    sendReply: builder.mutation({
      query: (payload) => ({
        url: `/meal-preferences/send-reply`,
        method: "PATCH",
        body : payload ,
      }),
      invalidatesTags : ["MealPreference"],
    }),
  }),
});

export const { useCreateMealPreferenceMutation , useGetMyMealPreferenceQuery , useDeleteMealPreferenceMutation , useGetAllMealPreferenceQuery , useGetSingleMealPreferenceQuery , useUpdateMealPreferenceMutation , useSendReplyMutation } = mealPreferenceApi;

