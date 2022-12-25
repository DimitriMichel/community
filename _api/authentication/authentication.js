import { api } from "../api";

export const authAPI = api.injectEndpoints({
  endpoints: (build) => ({
    getToken: build.query({
      query: () => ({
        url: "/sanctum/csrf-cookie",
        method: "POST"
      })
    }),
    login: build.mutation({
      query: ({ loginRequest }) => ({
        url: "/login",
        method: "POST",
        body: loginRequest,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/jason"
        }
      })
    }),
    logout: build.mutation({
      query: logoutRequest => ({
        url: "/auths",
        method: "POST",
        body: logoutRequest
      })
    })
  })
});

export const {
  useGetTokenQuery,
  useLoginMutation,
  useLogoutMutation
} = authAPI;