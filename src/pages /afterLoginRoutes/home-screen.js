import axios from "axios"
import Navbar from "../../components /navbar/navbar"
import React, { useState } from "react"
import { Link } from "react-router-dom"




const HomeScreen = () => {

    const [data,setData]=useState([])
    const handleClick=()=>{
        //api 

        axios.get("https://fakestoreapi.com/products")
        .then(response=>setData(response.data))

    }


    return (
        <>
            <Navbar/>
            <button  onClick={handleClick}  >Click to load products</button>


            {
                data.length>0 
                ?
                data.map(element=>{
                    return(
                        <React.Fragment key={element.id} >
                        <p>{element.title}</p>
                        <img src={element.image} alt={element.title} width={100} height={100} />
                        <button>
                            <Link to={`/product/${element.category}/${element.id}`}  >View Details</Link>
                        </button>

                        </React.Fragment>
                    )
                })
                :
                <h2>NO PRODUCTS</h2>
            }
            <h1>Hai , i am home screen</h1>


        </>
    )
}

export default HomeScreen