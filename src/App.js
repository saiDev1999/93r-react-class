import './App.css';
import Controlled from './components /forms/controlled /controlled';
import Todos from './components /forms/todo/todo';
import Uncontrolled from './components /forms/uncontrolled /uncontrolled';
import UseState1 from './components /hooks/useState1';
import NavigationStack from './navigationStack/navigationStack';

function App() {

  return (
    <>
<NavigationStack/>
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




























