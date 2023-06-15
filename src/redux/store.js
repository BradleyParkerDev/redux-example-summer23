import { configureStore } from '@reduxjs/toolkit'
//import slices here as reducer
import counterReducer from './counterSlice'
import usersReducer from './usersSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,  //key is name of redux state, value is the exported reducer
        users: usersReducer
    }
})