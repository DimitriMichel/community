import { api} from "../api";

export const postAPI = api.injectEndpoints({
  endpoints: (build) => ({
    getPost: build.query({
      query: (postID) => {
        return {
          url: `posts/${postID}`,
          providesTags: ['Post']
        };
      },
    }),
    createPost: build.mutation({
      query: createPostRequest => ({
        url: '/posts',
        method: 'POST',
        body: createPostRequest,
        invalidatesTags: ['Post']
      })
    }),
    updatePost: build.mutation({
      query: (updatePostRequest, postID) => ({
        url: `posts/${postID}`,
        method: 'PUT',
        body: updatePostRequest,
        invalidatesTags: ['Post']
      })
    }),
    deletePost: build.mutation({
      query: (deletePostRequest, postID) => ({
        url: `posts/${postID}`,
        method: 'DELETE',
        invalidatesTags: ['Post']
      })
    }),
  }),
});

export const {
  useGetPostQuery,
  useCreatePostQuery,
  useUpdatePostQuery,
  userDeletePostQuery
} = postAPI;