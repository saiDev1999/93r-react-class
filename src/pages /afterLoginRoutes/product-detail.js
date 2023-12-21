import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useAxios from '../../components /customHooks/useAxios'
import { EACH_PRODUCT } from '../../components /customHooks/endPoints'

function ProductDetails() {
    const urlId =useParams()
    const[productDetail,error]=useAxios(`${EACH_PRODUCT}/${urlId.id}`)

  return (
    <div>

        {/* <button onClick={handleProduct}  >Click to see the product</button> */}
        {
            Object.keys(productDetail).length>0 && <>
            
             <h2>{productDetail.title}</h2>
             <h4>{productDetail.category}</h4>
             <p>{productDetail.description}</p>
             <p>₹{productDetail.price}</p>
             <img src={productDetail.image} width={200} height={200} />



            </>        }

 
    </div>
  )
}

export default ProductDetails