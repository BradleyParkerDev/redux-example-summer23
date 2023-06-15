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
    },
    reducers: {
        addUser: (state, action) => {
            console.log(action.payload)
            state.usersArray.push(action.payload)
        }
    }
})

export const {addUser} = usersSlice.actions

export default usersSlice.reducer