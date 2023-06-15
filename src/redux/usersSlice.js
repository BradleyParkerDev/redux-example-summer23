import {createSlice} from '@reduxjs/toolkit'

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        usersArray: [
            {
                name: "Grumpy",
                age: 60
            },
            {
                name: "Sleepy",
                age: 50
            },
            {
                name: "Happy",
                age: 40
            }
        ]
        //add variable for storing total
    },
    reducers: {
        addUser: (state, action) => {
            console.log(action.payload)
            state.usersArray.push(action.payload)
        }
        // adding ages (hint method)
    }
})

export const {addUser} = usersSlice.actions

export default usersSlice.reducer