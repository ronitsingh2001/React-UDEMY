import React from 'react'
import MainNav from '../components/MainNav'

function Error() {
  return (
    <>
        <MainNav />
        <main>
            <h1>
                An Error Occured!
            </h1>
            <p>Could not found this page!</p>
        </main>
    </>
  )
}

export default Error