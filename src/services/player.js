/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const DATA_TAG = { type: "Tracks", id: "LIST" };

export const tracksApi = createApi({
    reducerPath: "tracksApi",
    baseQuery: fetchBaseQuery({
      baseUrl: "https://skypro-music-api.skyeng.tech",
    }),
    endpoints: (builder) => ({
      getAllTracks: builder.query({
        query: () => ({
            url: '/catalog/track/all/',
          }),
        providesTags: (result = []) => [
          ...result.map(({ id }) => ({ type: DATA_TAG.type, id })),
          DATA_TAG,
        ],
      }),
  
    //   addTodo: builder.mutation({
    //     query: (body) => ({
    //       url: "todos",
    //       method: "POST",
    //       body,
    //     }),
    //     invalidatesTags: [DATA_TAG],
    //   }),
  
    //   updateTodo: builder.mutation({
    //     query(data) {
    //       const { id, ...body } = data;
    //       return {
    //         url: `todos/${id}`,
    //         method: "PUT",
    //         body,
    //       };
    //     },
    //     invalidatesTags: (post) => [{ type: DATA_TAG.type, id: post?.id }],
    //   }),
    }),
  });
  