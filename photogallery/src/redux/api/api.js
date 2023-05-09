import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const photoApi=createApi({
    reducerPath:'photoApi',
    baseQuery:fetchBaseQuery({baseUrl:"https://picsum.photos/v2/"}),
    tagTypes:["Photo"],
    endpoints:(builder)=>({
        getPhoto:builder.query({
            query:(num)=>`list?page=3&limit=${num}`,
        })
    })
})

export const {useGetPhotoQuery}=photoApi;

