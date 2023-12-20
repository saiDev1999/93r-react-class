









import React, { useCallback, useState } from 'react'
import Title from './title'
import Button from './button'
import Heading from './heading'

function UseCallback() {
    const[age,setAge]=useState(10)
    const [salary,setsalary]=useState(10000)



    const handleAge=useCallback(()=>{
        setAge(age+1)
    },[age])

    

    const handleSalary= useCallback(()=>{
        setsalary(salary+1000)
    },[salary])


    

 


  return (
    <div>

   <Title/>

   <Heading   value={age} text="age"  />
   <Button  click={handleAge} >Increment age</Button>

<h3>--------------------------------------------</h3>

   <Heading   value={salary} text="salary"  />
   <Button  click={handleSalary}  >Increment Salary</Button>


    </div>
  )
}

export default UseCallback




// age, salary 

// 1. title   ---> Good morning 
// 2. button  ---> 
// 3. heading ---> age, salary 









// useCallback is also a memorization techniques which cache the function 

// useCallback 2 args 
// 1. callback function 
// 2. dependency array 