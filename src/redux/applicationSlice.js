import Applicants from "@/components/admin/Applicants";
import { createSlice } from "@reduxjs/toolkit";
const applictionSlice=createSlice({
    name:'application',
    initialState:{
        applicants:[],
    },
    reducers:{
        setAllApplicants:(state,action)=>{
            state.applicants=action.payload;
        }
    }

});
export const {setAllApplicants}=applictionSlice.actions;
export default applictionSlice.reducer;