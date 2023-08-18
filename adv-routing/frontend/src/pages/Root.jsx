import React from 'react'
import MainNavigation from '../components/MainNavigation'
import { Outlet, useNavigation } from 'react-router-dom'

function Root() {
  const navigation = useNavigation();
  
  return (
    <>
    <MainNavigation />
    <main>
      
    <Outlet />
    </main>
    </>
  )
}

export default Root

