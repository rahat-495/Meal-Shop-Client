import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseURL = "http://localhost:5555/api/v1";


const baseQuery = fetchBaseQuery({
    baseUrl: baseURL,
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).combinedPersist.auth.token;

        if (token) {
            headers.set('authorization', `${token}`)
        }
        return headers;
    }
})


export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery,
    endpoints: () => ({}),
    tagTypes: ['Products', 'Users', 'Orders']
});