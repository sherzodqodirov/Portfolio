import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const token=localStorage.getItem('user')
export const texnikApi = createApi({
    reducerPath: "texnikApi",
    baseQuery: fetchBaseQuery({
            prepareHeaders: (headers) => {
                headers.set('Access-Control-Allow-Origin', '*')
                headers.set("Authorization",`Bearer ${token}`)
                return headers;
            },
            baseUrl: "http://161.35.220.245:8081/api/",}),

    tagTypes: ["Category,Product,"],
    endpoints:(builder) =>({
        loginAdmin: builder.mutation({
            query: (data) =>({
                url:`auth/login`,
                method:'POST',
                body:data
            }),
        }),
        getAllCategory: builder.query({
            prepareHeaders: (headers) => {
                headers.set('Access-Control-Allow-Origin', '*')
                headers.set("Authorization",`Bearer ${token}`)
                console.log(headers)
                return headers;
            },
            query: () => `auth/category`,
            providesTags: (result) =>
                result?.data
                    ? [
                        ...result?.data.map(({ id }) => ({ type: 'Category', id })),
                        { type: 'Category', id: 'LIST' },
                    ]
                    : [{ type: 'Category', id: 'LIST' }],
        }),

        addCategory: builder.mutation({
            query: (data) =>({
                url:`admin/category`,
                method:'POST',
                headers:{
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body:data,
            }),
            invalidatesTags:[{ type: 'Category', id: 'LIST'}]
        }),

        getProductId: builder.query({
            query: (categoryId) => `auth/product/${categoryId}`,
        }),
    }),

})
export const {
    useGetAllCategoryQuery,
    useLoginAdminMutation,
    useAddCategoryMutation,
    useGetProductIdQuery,
} = texnikApi;