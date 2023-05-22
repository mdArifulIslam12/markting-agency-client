import { apiSlice } from "../api/apiSlice";
import { addBlogs } from "./blogSlice";



export const blogApi = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        getBlogs : builder.query({
            query : () => '/api/v1/products/blogs',
            async onQueryStarted (arg,{dispatch,queryFulfilled}){
                try {
                    const blogs = await queryFulfilled
                    if (blogs?.data?.data) {
                        dispatch(addBlogs(blogs.data.data))
                    }
                } catch (error) {
                    
                }
            },
        }
        
        ),
        getSingleBlog : builder.query({
            query : (id) => `/api/v1/products/blog/${id}`,
            // providesTags : (result,error,arg) => [
            //     'blogs',
            //     {type:'blog',id:arg},
            // ] 
        }),
        // addSingleBlog : builder.mutation({
        //     query : ({data}) => ({
        //         url : `/blog`,
        //         method : 'POST',
        //         body : data
        //     }),
        //     // invalidatesTags:['assignmentMark']
        // }),
    })
})

export const{useGetBlogsQuery,useGetSingleBlogQuery} = blogApi