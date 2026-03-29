import React, { useState , useEffect} from 'react'
// import { useEffect } from 'react';

const ResizeComponents = () => {
    const [windowWidth , setWindowWidth]= useState(window.innerWidth);

    useEffect(() => {
      const handleResize = ()=>setWindowWidth(window.innerWidth);
        console.log(`Window event listner added`);
        
      window.addEventListener(`resize` , handleResize);

    
      return () => {
        console.log(`Event listener chal gya bhittar`);
        
        window.removeEventListener(`resize` , handleResize);

      };
    }, []);
    
  return (
    <div>
      <h1>Window width :{windowWidth}px</h1>
    </div>
  )
}

export default ResizeComponents
