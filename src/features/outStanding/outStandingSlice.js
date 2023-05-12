import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id : 1
}

const OutStandingSlice = createSlice({
    name : 'outStanding',
    initialState,
    reducers : {
        changeId : (state,action) => {
            state.id = action.payload
        }
    }
})

export default OutStandingSlice.reducer
export const {changeId} = OutStandingSlice.actions