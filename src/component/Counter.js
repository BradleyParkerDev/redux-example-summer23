import React, {useState} from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, increaseByAmount } from '../redux/counterSlice'
import { addUser, totalAgesAcc } from '../redux/usersSlice'

const Counter = () => {
    //  useSelector - selects from the redux store (state)
    // takes in the store and selects any reducer that you specify
    const counterState = useSelector(state => state.counter.value)
    //   const users= useSelector( state => state.users)
    const usersArray = useSelector( state => state.users.usersArray)
    const usersTotal = useSelector( state => state.users.totalAges)
    const dispatch = useDispatch()

    

    const [onChange, setOnChange] = useState(0)

  return (
    <div>Counter: {counterState}
    <br />
    <button onClick={() => dispatch(increment())}> +Increment+ </button>
    <button onClick={() => dispatch(decrement())}> -Decrease- </button>
    <br />
    <input type='number' onChange={ e => setOnChange(e.target.value)}/>
    <button onClick={() => dispatch(increaseByAmount(onChange))}>Add {onChange}</button>
    {usersArray.map( e => <p>{e.name}</p>)}

    <button onClick={ () => 
        dispatch(addUser({
            name: 'Dopey',
            age: 30
        })
        )}>Add User</button>

    <h3>Age: {usersTotal}</h3> 
    <button onClick={() => dispatch(totalAgesAcc())}>Add Ages</button>
    </div>


  )
}

export default Counter