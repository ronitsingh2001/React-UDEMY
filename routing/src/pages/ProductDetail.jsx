import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {
    const prodId =  useParams().id;
  return (
    <h1>ProductDetail {prodId}</h1>
  )
}

export default ProductDetail