import React, {useState} from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, increaseByAmount } from '../redux/counterSlice'
import { addUser } from '../redux/usersSlice'

const Counter = () => {
    //  useSelector - selects from the redux store (state)
    // takes in the store and selects any reducer that you specify
    const counterState = useSelector(state => state.counter.value)
    const users = useSelector( state => state.users.usersArray)
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
    {users.map( e => <p>{e.name}</p>)}

    <button onClick={ () => 
        dispatch(addUser({
            name: 'Dopey',
            age: 30
        })
        )}>Add User</button>
        
    <h3>Age: total ages</h3> 
    <button>Add Ages</button>
    </div>


  )
}

export default Counter