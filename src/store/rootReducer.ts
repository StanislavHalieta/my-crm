import { combineReducers } from "@reduxjs/toolkit"
import  homeSlice  from "./home/homeSlice"
import  leadSlice from "./leads/leadsStore"

 const RootReducer = combineReducers({
    home: homeSlice,
    leads: leadSlice
})
export default RootReducer