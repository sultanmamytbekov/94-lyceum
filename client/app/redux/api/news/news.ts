import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://69b1accaadac80b427c5f205.mockapi.io/"
  }),
  tagTypes: ["News"],
  endpoints: (builder) => ({
    getNewsById: builder.query<any, string>({
      query: (id) => `/news/${id}`,
    }),
    getAllNews: builder.query<any[], void>({
      query: () => "sultanBase",
      providesTags: ["News"]
    }),

    addNews: builder.mutation({
      query: (body) => ({
        url: "sultanBase",
        method: "POST",
        body
      }),
      invalidatesTags: ["News"]
    }),

    editNews: builder.mutation({
      query: ({ id, form }) => ({
        url: `sultanBase/${id}`,
        method: "PUT",
        body: form
      }),
      invalidatesTags: ["News"]
    }),

    deleteNews: builder.mutation({
      query: ({ id }) => ({
        url: `sultanBase/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["News"]
    })

  })
})

export const {
  useGetAllNewsQuery,
  useAddNewsMutation,
  useEditNewsMutation,
  useDeleteNewsMutation,
  useGetNewsByIdQuery 
} = newsApi






// import { api as index } from "..";

// const api = index.injectEndpoints({
//   endpoints: (build) => ({
//     addNews: build.mutation<NEWS.addNewsRes, NEWS.addNewsReq>({
//       query: (newsData) => ({
//         url: "/news/add",
//         method: "POST",
//         body: newsData,
//       }),
//     }),
//     getAllNews: build.query<NEWS.getAllNewsRes[], NEWS.getAllNewsReq>({
//       query: () => ({
//         url: "/news/get-all",
//         method: "GET",
//       }),
//     }),
//     getNewsById: build.query<NEWS.getNewsByIdRes, NEWS.getNewsByIdReq>({
//       query: (id) => ({
//         url: `/news/${id}`,
//         method: "GET",
//       }),
//     }),
//     editNews: build.mutation<
//       NEWS.editNewsRes,
//       { id: string; form: NEWS.editNewsReq }
//     >({
//       query: ({ id, form }) => ({
//         url: `/news/${id}`,
//         method: "PATCH",
//         body: form,
//       }),
//     }),
//     deleteNews: build.mutation<NEWS.delNewsRes, NEWS.delNewsReq>({
//       query: (id) => ({
//         url: "/news/delete",
//         method: "DELETE",
//         body: id,
//       }),
//     }),
//   }),
// });

// export const {
//   useAddNewsMutation,
//   useGetAllNewsQuery,
//   useGetNewsByIdQuery,
//   useEditNewsMutation,
//   useDeleteNewsMutation,
// } = api;
