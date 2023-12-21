import { createContext, useEffect, useState } from 'react';
import './App.css';
import Controlled from './components /forms/controlled /controlled';
import Todos from './components /forms/todo/todo';
import Uncontrolled from './components /forms/uncontrolled /uncontrolled';
import UseState1 from './components /hooks/useState1';
import NavigationStack from './navigationStack/navigationStack';




export const UserName=createContext()

function App() {

  const[name,setName]=useState("kiran")

  return (
    <>
    <UserName.Provider value={name}  >

    <NavigationStack/>


    </UserName.Provider>






    </>
   
  );

}

export default App;


// 08-dec-2023
// hooks :
// hooks let you use of state and other react features(life cycle methods ) in functional based components  without writing class 


// examples :
// 1. useState 
// 2. useEffect 
// 80%
// 3. useRef
// 4. useReducer 
// 5. useContext 
// 6. useMemo 
// 7. useCallback

// 8. custom hooks 
// 20%


// rules of hooks 

// 1. hooks must be used in functional based components 
// 2. hooks must be defined at the top of the function body (we must import from react )
// 3. hooks cannot be kept in loops, conditions,nested functions 


// * 🔴 Do not call Hooks inside conditions or loops.
// * 🔴 Do not call Hooks after a conditional return statement.
// * 🔴 Do not call Hooks in event handlers.
// * 🔴 Do not call Hooks in class components.
// * 🔴 Do not call Hooks inside functions passed to useMemo, useReducer, or useEffect.




// useState : 
// It is hook in react functional component which let you create and manage the state 


// useState will accept one argument , we called argument as state variable (initializer)(any data types)


// useState will return an array , which having 2 elements 

// element1---> current state 
// element2---> updater function

// counter --> 0

// const data =useState(0) ----> 

// const [currentState,updaterFunction]=useState(0)




// 11-Dec-2023

// forms :

// 2 ways to deal with forms 

// 1. uncontrolled components 

// dom 
// dis-advantage 
// 1. field validation not possible , we can validate only once with submit the entire form 

// 2. controlled components 

// react 

// advantage 

// 1. field validations were possible 






// routing : navigation or switching between the pages --> readability ,maintanence


// react : ---> for routing we will dependent on 3rd party library called react-router-dom

// pre login routes or pages 

// navigation stack before login

// 1. registration 
// 2. login 
// 3. forgot password 

// navigation stack after login
// post login routes or pages 

// 1. Home screen 
// 2. about screen 
// 3. setting screen 
// etc





// useEffect 


// It is a hook in functional based component which primarily used to cause or perform side effects 


// side effects 
// 1. http req 
// 2. dom manipulation 
// 4. event listeners 
// 3. timers handling 


// useEffect can be considered as the replacement of 3 life cycle methods in class components 


// 1.component did mount (once in a life cycle)
// 2. component did update (when state or prop changes)
// 3. component will unmount (to prevent the memory leakage of the component(cleanup tasks))


// syntax :   useEffect(callbackFunction,array)

// array ---> [] --> dependency array 

// case 1: 
// [] --> empty array  ---> component did mount
// [stateVariable] ----->component did update


// syntax : useEffect(()=>{},[])




// Context api : way to manage the data globally by avoiding prop driling 


// steps 
// 1. create a context 
// 2. wrap the context with the provider and pass value prop(data to be shared)
// 3. use the context data (using useContext hook)



// useReducer : it is a hook in functional based components which is used to create and manage the state but for the complex custom logic

// use reducer syntax : 

// it will accept 2 args 

// 1. reducer funtion 
// 2. initial state 


// it will return array with 2 elements 

// 1. current state 
// 2.  dispatch function 




// optimization ? to increase the performance by reducing load time


// 1 sec ---> 11% 


// Memorization 


// milk  50 rupee 

// day 1   2 milk   100
// day 2   2 milk   100 
// day 3   2 milk   100




// use memo --->   value Memorization



// use Callback ---> function Memorization







// Custom hooks : to share the common functuality btw the components we prefer custom hooks 
// hook simple functions 
// custom hooks were designed using existing hooks 
// custom hook will start with use Keyword and followed  by name 

// ex: useAxios 

// Common functuality : axios , counter 






























































