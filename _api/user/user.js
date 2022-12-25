import { api } from "../api";

export const userAPI = api.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query({
      query: userID => `/users/${userID}`
    }),
    createUser: build.mutation({
      query: createUserRequest => ({
        url: "/users",
        method: "POST",
        body: createUserRequest
      })
    }),
    updateUser: build.mutation({
      query: (updateUserRequest, userID) => ({
        url: `users/${userID}`,
        method: "PUT",
        body: updateUserRequest
      })
    }),
    deleteUser: build.mutation({
      query: (deleteUserRequest, userID) => ({
        url: `users/${userID}`,
        method: "DELETE"
      })
    })
  })
});

export const {
  useGetUserQuery,
  useCreateUserQuery,
  useUpdateUserQuery,
  userDeleteUserQuery
} = userAPI;