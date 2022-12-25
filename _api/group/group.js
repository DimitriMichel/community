import { api} from "../api";

export const groupAPI = api.injectEndpoints({
  endpoints: (build) => ({
    getGroup: build.query({
      query: (groupID) => {
        return {
          url: `groups/${groupID}`
        };
      }
    }),
    createGroup: build.mutation({
      query: createGroupRequest => ({
        url: "/groups",
        method: "POST",
        body: createGroupRequest
      })
    }),
    updateGroup: build.mutation({
      query: (updateGroupRequest, groupID) => ({
        url: `groups/${groupID}`,
        method: "PUT",
        body: updateGroupRequest
      })
    }),
    deleteGroup: build.mutation({
      query: (deleteGroupRequest, groupID) => ({
        url: `groups/${groupID}`,
        method: "DELETE"
      })
    })
  })
});

export const {
  useGetGroupQuery,
  useCreateGroupQuery,
  useUpdateGroupQuery,
  userDeleteGroupQuery
} = groupAPI;