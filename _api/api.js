import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// initialize an empty api service to inject endpoints into needed
export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:80",
    credentials: "include",
    mode: 'no-cors',
    prepareHeaders: (headers, { getState }) => {
      headers.set('Access-Control-Allow-Origin', '*')
      return headers
    }
  }),
  endpoints: () => ({})
})

