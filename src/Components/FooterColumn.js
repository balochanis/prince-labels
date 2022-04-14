import React, { useState } from 'react';
import { useSelector } from 'react-redux';


function FooterColumn() {
  // const [fotCol,setfotCol ]= useState("anis");
  let state = useSelector(state => state);
  return (
    <div className='footer-column'>

        <h5 className='footer-heading'><a href="/about">{state.users[1].email}</a></h5>
        <a href="/about" >Sports</a>
        <a href="/about" >Sports</a>
        <a href="/about" >Sports</a>
        <a href="/about" >Sports</a>
    </div>
  )
}

export default FooterColumn