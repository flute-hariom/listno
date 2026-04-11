import apiSlice from "./apiSlice";

export const cmsBuzzListApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createRegisterDevice: builder.mutation({
      query: (body) => ({
        url: `/experience/session/auth/register-devices`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["listno"],
    }),

    //  google login for coaches

    createGoogleLogin: builder.mutation({
      query: (body) => ({
        url: `/experience/session/auth/login`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["listno"],
    }),
  }),
});

export const { useCreateRegisterDeviceMutation, useCreateGoogleLoginMutation } =
  cmsBuzzListApiSlice;
