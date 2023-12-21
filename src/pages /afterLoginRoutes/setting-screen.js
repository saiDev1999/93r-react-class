

import React from 'react'
import Navbar from '../../components /navbar/navbar'
import UseReducer from '../../components /useReducer/useReducer'
import UseReducer2 from '../../components /useReducer/useReducer2'
import UseMemo from '../../components /useMemo/useMemo'
import UseCallback from '../../components /useCallback /useCallback'
import useCounter from '../../components /customHooks/useCounter'

function SettingScreen() {
    
   const[count,handleIncrement,handleDecrement,handleReset]=useCounter(1,10)
    
  return (
    <div>

        <Navbar/>
        <h1>Hai , i am setting screen</h1>
        <h2>{count}</h2>
        <button  onClick={handleIncrement} >Increment</button>
        <button  onClick={handleDecrement} >Decrement</button>

        <CounterEx/>
      

       </div>
  )
}

export default SettingScreen

const CounterEx=()=>{
  const[count,handleIncrement,handleDecrement,handleReset]=useCounter(1,100)


  return(
    <div>
       <h1>Hai , scale by 10</h1>
        <h2>{count}</h2>
        <button  onClick={handleIncrement} >Increment</button>
        <button  onClick={handleDecrement} >Decrement</button>
      

       </div>
  )
}