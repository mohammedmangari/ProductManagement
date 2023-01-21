import React, { useEffect }  from 'react'
import { useState } from 'react';
import Home from './Home';


const HandelSearch = ({val}) => {
      const [Category ,setCategory]=useState('');
      useEffect(()=>{
        setCategory(val);
      },[val])
      return (
    <>
      <Home category={Category} />  
    </>
      );
  }

export default HandelSearch