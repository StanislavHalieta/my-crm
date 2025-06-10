import { combineReducers } from "@reduxjs/toolkit"
import  homeSlice  from "./home/homeSlice"

 const RootReducer = combineReducers({
    home: homeSlice
})
export default RootReducer