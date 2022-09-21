import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import  Services from '../components/Services';
import FeaturedBanquets from '../components/FeaturedBanquets';

function Home() {
  return (
   <>
     <Hero>
      <Banner title="Luxurious Banquet" subtitle="Deluxe banquets starting at $299 ">
         <Link to='/banquet' className='btn-primary'>Our Banquets</Link>
      </Banner>
     </Hero>
   <Services/>
   <FeaturedBanquets/>

     </>
  )
}


export default Home