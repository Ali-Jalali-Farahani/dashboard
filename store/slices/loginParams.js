import { createSlice } from "@reduxjs/toolkit";

const slice=createSlice({
    name:"loginParams",
    initialState:{
        userName:"",
        password:"",
        errorMessage:""
    },
    reducers:{
        setUserName:(state,action)=>{
            state.userName=action.payload
        },
        setPassword:(state,action)=>{
            state.password=action.payload
        },
        setErrorMessage:(state,action)=>{
            state.errorMessage=action.payload
        }
    },
});

export default slice.reducer

export const {setUserName,setPassword,setErrorMessage}=slice.actions