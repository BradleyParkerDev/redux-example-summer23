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
        ],
        totalAges: 0
    },
    reducers: {
        addUser: (state, action) => {
            console.log(action.payload)
            state.usersArray.push(action.payload)
        },
        totalAgesAcc: (state) => {
            state.totalAges = state.usersArray.reduce(((accumulator, element) => accumulator + element.age), 0)
        }
    }
})

export const {addUser, totalAgesAcc} = usersSlice.actions

export default usersSlice.reducer