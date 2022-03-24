import React from 'react'
import './Home.css';
import { numbers } from '../../data';

function Home() {
    const numberlist  = numbers.map((number , index)=>{
        return (
        <div className='col-md-3' key={index}>
             <div className='number-content'>
                <h1>{number.number}</h1>
                <p>{number.title}</p>
            </div>
        </div>
           
        )
    })
  return (
      <>
    <div className='header'>
        <div className= 'container'>
            <div className='row '>
                <div className='col-lg-5 col-md-7 col-sm-10 '>
                    <div className='header-desc'>
                        <h3>Good food choices are good investments.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
                        <a href="#" className='btn btu'>order now</a>
                        <a  href="#" className='btn btu-s'>learn more</a>
                    </div>
                </div>
                <div className='col-lg-7'></div>
            </div>
        </div>
        
    </div>
    <div className='numbers'>
    <div className='container'>
        <div className='row'>
           {numberlist}
        </div>
    </div>
    </div>
    </>
  )
}

export default Home