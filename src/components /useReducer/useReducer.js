import { useReducer } from "react"
import { INCREMENT_FIVE, initialState, reducerFunction } from "./actionType"


const UseReducer = () => {

    const [currentState, dispatch] = useReducer(reducerFunction, initialState)


    const handleClick = () => {

        dispatch(
            {
                type:INCREMENT_FIVE,
                payload: 1
            }
        )


    }
    return (
        <>

            <p>useReducer</p>
            <h4>{currentState.greeting}</h4>
            <h5>{currentState.count}</h5>
            <button onClick={handleClick} >Increment by 1</button>

        </>
    )


}

export default UseReducer

