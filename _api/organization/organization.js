import { api } from "../api";

export const organizationAPI = api.injectEndpoints({
  endpoints: (build) => ({
    getOrganization: build.query({
      query: (organizationID) => {
        return {
          url: `organizations/${organizationID}`,
        };
      },
    }),
    createOrganization: build.mutation({
      query: createOrganizationRequest => ({
        url: '/organizations',
        method: 'POST',
        body: createOrganizationRequest
      })
    }),
    updateOrganization: build.mutation({
      query: (updateOrganizationRequest, organizationID) => ({
        url: `organizations/${organizationID}`,
        method: 'PUT',
        body: updateOrganizationRequest
      })
    }),
    deleteOrganization: build.mutation({
      query: (deleteOrganizationRequest, organizationID) => ({
        url: `organizations/${organizationID}`,
        method: 'DELETE',
      })
    }),
  }),
});

export const {
  useGetOrganizationQuery,
  useCreateOrganizationQuery,
  useUpdateOrganizationQuery,
  userDeleteOrganizationQuery
} = organizationAPI;