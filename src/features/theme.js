import {createSlice} from "@reduxjs/toolkit"
const initialValue =true;


export const themeSlice = createSlice({
    name:"theme",
    initialState:{value:initialValue},
    reducers:{
        setDarkGlobal: (state)=>{
            state.value = true
        },
        setLightGlobal: (state)=>{
            state.value = false
        },
             
    },
    
})

export const { setDarkGlobal , setLightGlobal} = themeSlice.actions

export default themeSlice.reducer

