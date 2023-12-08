import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          login done 
        </a>
      </header>
    </div>
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










