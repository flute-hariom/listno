import apiSlice from "./apiSlice";

export const cmsBuzzListApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCmsBuzzList: builder.query({
      query: ({ page, pageSize }) => {
        const params = new URLSearchParams();
        if (page) params.append("page", page);
        if (pageSize) params.append("limit", pageSize);

        return `/api/v1/content-management/admin/flute-buzz?${params}`;
      },
    //   headers: {
    //     Authorization: "Bearer admin_token",
    //   },

      providesTags: ["listno"],
    }),

    createCmsBuzzList: builder.mutation({
      query: (body) => ({
        url: `/api/v1/content-management/admin/create-flute-buzz`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["listno"],
    }),

    updateCmsBuzzList: builder.mutation({
      query: ({ id, body }) => ({
        url: `/api/v1/content-management/admin/flute-buzz/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["listno"],
    }),

    deleteCmsBuzzList: builder.mutation({
      query: (id) => ({
        url: `/api/v1/content-management/admin/flute-buzz/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["listno"],
    }),
  }),
});

export const {
  useGetCmsBuzzListQuery,
  useCreateCmsBuzzListMutation,
  useUpdateCmsBuzzListMutation,
  useDeleteCmsBuzzListMutation,
} = cmsBuzzListApiSlice;
