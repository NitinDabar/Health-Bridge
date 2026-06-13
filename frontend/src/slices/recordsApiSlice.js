import { apiSlice } from "./apiSlice";
import { RECORDS_URL } from "../constants";

export const recordsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMyRecords: builder.query({
      query: () => ({
        url: RECORDS_URL,
      }),
      providesTags: ["Record"],
      keepUnusedDataFor: 5,
    }),
    createRecord: builder.mutation({
      query: (data) => ({
        url: RECORDS_URL,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Record"],
    }),
    deleteRecord: builder.mutation({
      query: (id) => ({
        url: `${RECORDS_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Record"],
    }),
  }),
});

export const {
  useGetMyRecordsQuery,
  useCreateRecordMutation,
  useDeleteRecordMutation,
} = recordsApiSlice;
