import { useReducer, useState } from "react"



const reducerFunction=(state,action)=>{

    switch(action.type){

        case "ADD_TODO":

               return {...state,todo:[...state.todo,action.payload]}
        
        default:
            return state

    }

}

const initialState={
    todo:["item1","item2"]
}



const UseReducer2=()=>{

const[input,setInput]=useState("")

    const[currentState,dispatch]=useReducer(reducerFunction,initialState)

    const handleChange=(event)=>{
        setInput(event.target.value)
    }

    const addTodo=()=>{

        dispatch(
            {
                type:"ADD_TODO",
                payload:input
            }
        )




    }



    return(

        <>
         <h1>Use Reducer ex-2</h1>

         <input type="text" value={input}  onChange={handleChange}/>
         <button onClick={addTodo}  >Add todo</button>

         {console.log(currentState)}

         <ol>




         {

            currentState.todo.map(element=>{

                return(
                    <>
                    <li>{element}</li>
         
                    </>
                )
            })
         }
                  </ol>


        
        
        </>
    )
}

export default UseReducer2