import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div className='text-center text-2xl'>
        <div className='fixed w-full z-50'><Navbar /></div>
        <main className=''>{children}</main>
        <Footer />
    </div>
  )
}

export default Layout