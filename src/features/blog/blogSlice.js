
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    blogs : []
}

const blogSlice = createSlice({
    name : 'videoSlice',
    initialState,
    reducers : {
        addBlogs : (state,actions) => {
            state.blogs = actions.payload
        }
    }
  
})

export default blogSlice.reducer
export const {addBlogs} = blogSlice.actions