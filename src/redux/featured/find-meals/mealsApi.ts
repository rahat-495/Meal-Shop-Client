import { baseApi } from "@/redux/api/baseApi";
import { TSearchState } from "./searchSlice";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMeals: builder.query({
      query: (params: TSearchState) => ({
        url: "/meals",
        method: "GET",
        params,
      }),
    }),
  }),
});

export const { useGetMealsQuery } = authApi;
