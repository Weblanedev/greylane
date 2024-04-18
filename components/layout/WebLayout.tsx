import React from 'react'
import Footer from '../molecules/Footer'
import Navbar from '../molecules/Navbar'

type ChildrenProps = {
    children: React.ReactNode
}

const WebLayout = ({ children }: ChildrenProps) => {
    return (
        <>
            <Navbar></Navbar>
            <div>{children}</div>
            <Footer></Footer>
        </>
    )
}

export default WebLayout