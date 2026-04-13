// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import type { RootState } from "../store";

// export const apiSlice = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({
//     baseUrl: process.env.NEXT_PUBLIC_API_URL,
//     prepareHeaders: (headers, { getState }) => {
//       const token = (getState() as RootState).auth.token;

//       if (token) {
//         headers.set("Authorization", `Bearer ${token}`);
//       }

//       return headers;
//     },
//   }),
//   tagTypes: ["listno"],
//   endpoints: () => ({

//   }),
// });

// export default apiSlice;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../store";
import { getDeviceId } from "@/src/libs/deviceInfo";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,

    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      const deviceId = getDeviceId();

      // ✅ Common headers
      headers.set("X-Device-Id", deviceId);
      headers.set("X-App-Version", "1.0.3");
      headers.set("X-Language", "en");
      headers.set("X-Platform-Type", "WEB");
      headers.set("Content-Type", "application/json");

      // ✅ Authorization (if exists)
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),

  tagTypes: ["listno"],
  endpoints: () => ({}),
});

export default apiSlice;
