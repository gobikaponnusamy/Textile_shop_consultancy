import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactInfo from '../components/homeComponents/ContactInfo'
import Contactform from '../components/Contactform'

const Contact = () => {
  return (
    <div>
        <Header />
        <Contactform />
        <ContactInfo />
        <Footer />
    </div>
  )
}

export default Contact