import axios from "axios"
import Navbar from "../../components /navbar/navbar"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import useAxios from "../../components /customHooks/useAxios"
import { PRODUCT_LISTING } from "../../components /customHooks/endPoints"




const HomeScreen = () => {
   
    const [data,error]= useAxios(PRODUCT_LISTING)
       
    return (
        <>
            <Navbar/>


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