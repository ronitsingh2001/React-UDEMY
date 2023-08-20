import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();

    function handler(){
        navigate('/products')
    }

  return (
    <>
    <h1>Home</h1>
    <p>Go to <Link to="/products">list of products</Link></p>
    <button onClick={handler}>Navigate</button>
    </>
  )
}

export default Home