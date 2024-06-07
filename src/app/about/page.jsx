import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Form from '../components/Form'
import About from '../components/About'

const page = () => {
    return (
        <div>
            <Navbar />
            <About
                text1={"About Us"}
                para1={
                    "A company that is ready to lead you to the top in Online Marketing"
                } />

            <Form />
            <Footer />
        </div>
    )
}

export default page