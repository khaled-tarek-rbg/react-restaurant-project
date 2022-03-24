import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <div className ='footer'>
        <div className='container'>
                <div className='row'>
                    <div className='col-md-12 text-center'>
                        <a href="#">Register</a>
                        <a href="#">Forum</a>
                        <a href="#">Affiliate</a>
                        <a href="#">FAQ</a>
                    </div>
                    <div className='col-md-12 text-center py-4'>
                        <div className='social'>
                        <a href="#"><i className='fab fa-facebook'></i></a>
                        <a href="#"><i className='fab fa-linkedin'></i></a>
                        <a href="#"><i className='fab fa-instagram'></i></a>
                        <a href="#"><i className='fab fa-youtube'></i></a>
                        <a href="#"><i className='fab fa-dribbble'></i></a>
                        <a href="#"><i className='fab fa-twitter'></i></a>
                        
                        </div>
                       
                    </div>
                <div className='col-md-12 text-center'>
                    <div className='footer-copy'>
                      ©2022 Foodera. All rights reserved.
                    </div>
                </div>
               
            
                </div>
        </div>
     
        
    </div>
  )
}
