/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import { 
  // useNavigate 
} from 'react-router-dom';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setAuth } from '../store/slices/auth';

const DATA_TAG = { type: 'Tracks', id: 'LIST' }

// // автоматическая установка заголовка в запрос
// // https://redux-toolkit.js.org/rtk-query/api/fetchBaseQuery#setting-default-headers-on-requests:~:text=%D0%9E%D0%B1%D1%89%D0%B8%D0%B5%20%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD%D1%8B-,%D0%A3%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0,-%D0%B7%D0%B0%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BA%D0%BE%D0%B2%20%D0%BF%D0%BE%20%D1%83%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D1%8E

// const baseQuery = fetchBaseQuery({
//   baseUrl: 'https://skypro-music-api.skyeng.tech',
//   prepareHeaders: (headers, { getState }) => {
//     const token = getState().auth.access

//     if (token) {
//       headers.set('authorization', `Bearer ${token}`)
//     }

//     return headers
//   },
// })

const baseQueryWithReauth = async (args, api, extraOptions) => {
  // const  navigate = useNavigate();
  const baseQuery = fetchBaseQuery({
    baseUrl: "https://skypro-music-api.skyeng.tech",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.access;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });
  const result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status !== 401) {
    return result;
  }
  const goLogout = () => {
    api.dispatch(setAuth(null));
    // // navigate('/Auth');
    // window.location.href = '/Auth'
  };
  
  const { auth } = api.getState();
  if (!auth.refresh) {
    return goLogout();
  }

  const refreshToken = await baseQuery(
    {
      url: "/user/token/refresh/",
      method: "POST",
      body: {
        refresh: auth.refresh,
      },
    },
    api,
    extraOptions,
  );

  if (!refreshToken.data.access) {
    return goLogout();
  }

  api.dispatch(setAuth({ ...auth, access: refreshToken.data.access }));

  const retryResult = await baseQuery(args, api, extraOptions);

  if (retryResult?.error?.status === 401) {
    return goLogout();
  }
  return retryResult;
};

export const tracksApi = createApi({
  reducerPath: 'tracksApi',
  baseQuery: baseQueryWithReauth,
  // fetchBaseQuery({
  //   baseUrl: 'https://skypro-music-api.skyeng.tech',
  // }),

  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.access

    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  },

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
        const { id } = data
        return {
          url: `/catalog/track/${id}/favorite/`,
          method: 'POST',
        }
      },
      invalidatesTags: (trackId) => [{ type: DATA_TAG.type, id: trackId?.id }],
    }),

    dislikeTrack: builder.mutation({
      query(data) {
        const { id } = data
        return {
          url: `/catalog/track/${id}/favorite/`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (trackId) => [{ type: DATA_TAG.type, id: trackId?.id }],
    }),
    // как этто работае
    getAllMyTracks: builder.query({
      query: () => ({
        url: '/catalog/track/favorite/all/',
      }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: DATA_TAG.type, id })),
        DATA_TAG,
      ],
      transformResponse: (response) => {
        const transformedResponse = response.map((item) => ({
          ...item,
          stared_user: [JSON.parse(localStorage.getItem("user"))],
        }));

        return transformedResponse;
      },
    }),
  }),
})

export const {
  useGetAllTracksQuery,
  useGetTracksByIDQuery,
  useGetSelectionQuery,
  useGetSelectionByIdQuery,
  useDislikeTrackMutation,
  useLikeTrackMutation,
  useGetAllMyTracksQuery,
} = tracksApi
