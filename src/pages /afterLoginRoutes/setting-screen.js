

import React from 'react'
import Navbar from '../../components /navbar/navbar'
import UseReducer from '../../components /useReducer/useReducer'
import UseReducer2 from '../../components /useReducer/useReducer2'
import UseMemo from '../../components /useMemo/useMemo'
import UseCallback from '../../components /useCallback /useCallback'

function SettingScreen() {
  return (
    <div>

        <Navbar/>
        <h1>Hai , i am setting screen</h1>
        <UseCallback/>

       </div>
  )
}

export default SettingScreen