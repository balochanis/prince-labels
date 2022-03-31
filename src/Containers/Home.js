import React from 'react'

import Header from '../Components/Bootstrap/Header';
// import BreadCrumb from '../Components/Bootstrap/BreadCrumb';
import Gallery from '../Components/Gallery';

import Pages from '../Components/Bootstrap/Pages'

function Home() {
  return (
    <div>
<Header></Header>
{/* <BreadCrumb></BreadCrumb> */}
  <Gallery></Gallery>
  <Pages></Pages>






    </div>
  )
}

export default Home