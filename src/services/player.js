/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const DATA_TAG = { type: 'Tracks', id: 'LIST' }

export const tracksApi = createApi({
  reducerPath: 'tracksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech',
  }),
  endpoints: (builder) => ({
    // all tracks
    getAllTracks: builder.query({
      query: () => ({
        url: '/catalog/track/all/',
      }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: DATA_TAG.type, id })),
        DATA_TAG,
      ],
    }),
    // track by id
    getTracksByID: builder.query({
      query: (id) => ({
        url: `/catalog/track/all/${id}`,
      }),
      providesTags: (result = []) => [
        ...(Array.isArray(result)
          ? result.map(({ id }) => ({ type: DATA_TAG.type, id }))
          : []),
        DATA_TAG,
      ],
    }),

    // selection
    getSelection: builder.query({
      query: () => ({
        url: '//catalog/selection/',
      }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: DATA_TAG.type, id })),
        DATA_TAG,
      ],
    }),

    // selection by id
    getSelectionById: builder.query({
      query: (id) => ({
        url: `/catalog/selection/${id}`,
      }),
      providesTags: (result = []) => [
        ...(Array.isArray(result)
          ? result.map(({ id }) => ({ type: DATA_TAG.type, id }))
          : []),
        DATA_TAG,
      ],
    }),

    getFavoriteTracks: builder.query({
        query: () => ({
          url: '/catalog/track/favorite/all/',
        }),
        providesTags: (result = []) => [
          ...result.map(({ id }) => ({ type: DATA_TAG.type, id })),
          DATA_TAG,
        ],
      }),


    likeTrack: builder.mutation({
        query(data) {
          const { id } = data;
          return {
            url: `/catalog/track/${id}/favorite/`,
            method: "POST",
          };
        },
        invalidatesTags: (trackId) => [
          { type: DATA_TAG.type, id: trackId?.id },
        ],
      }),
  
      dislikeTrack: builder.mutation({
        query(data) {
          const { id } = data;
          return {
            url: `/catalog/track/${id}/favorite/`,
            method: "DELETE",
          };
        },
        invalidatesTags: (trackId) => [
          { type: DATA_TAG.type, id: trackId?.id },
        ],
      }),
  }),
})

export const {useGetAllTracksQuery, useGetTracksByIDQuery, useGetSelectionQuery, useGetSelectionByIdQuery, useDislikeTrackMutation, useLikeTrackMutation } = tracksApi
