import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'



export const apiSlice = createApi({
    reducerPath : 'api',
    baseQuery : fetchBaseQuery({
        baseUrl : 'https://server-check-yira.onrender.com',
       prepareHeaders : async(headers,{getState,endpoint}) => {
            const token = await getState?.auth?.accessToken
            if (token) {
                headers.set('Authorziation', `Bearer ${token}`)
            }
            return headers
        }
    }),
    tagTypes : [],
    endpoints : (builder) => ({})
})
