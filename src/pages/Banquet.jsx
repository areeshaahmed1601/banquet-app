import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import BanquetsContainer from '../components/BanquetsContainer';

const Banquet = () => {
  return (
    <>
     <Hero hero="roomsHero">
       <Banner title="Our banquets">
        <Link to='/' className='btn-primary'>
           return Home
        </Link>
       </Banner>
     </Hero>
     <BanquetsContainer/>
     </>
  )
}

export default Banquet