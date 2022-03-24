import React from 'react'
import './Bride.css'
import brideImg from '../../assets/1.png'
import smallDescImg from '../../assets/2.png'

function Bride() {
  return (
    <>
    <div className='bride'> 
        <div className='container'>
            <div className='row'>
                <div className='col-lg-7'>
                    <div className='bride-img'>
                        <img src={brideImg}/>
                    </div>
                </div>
                <div className='col-lg-5'>
                    <div className='bride-content'>
                        <h3>
                        We pride ourselves on making real food from the best ingredients.
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>

                        <a href="#" className='btn btu'>learn more</a>
                    </div>
                </div>
                
            </div>
        </div >
    </div>

    <div className='small-desc'>
        <div className='container'>
            <div className='row'>
            <div className='d-block d-md-none'>
                    <div className='small-desc-img'>
                        <img src= {smallDescImg}/>
                    </div>
                </div>
                <div className='col-lg-5'>
                    <div className='small-desc-content'>
                        <h3>We make everything by hand with the best possible ingredients.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <ul>
                            <li>
                                <i className='fa fa-check'></i>
                                Etiam sed dolor ac diam volutpat.
                            </li>
                            <li>
                                <i className='fa fa-check'></i>
                                Etiam sed dolor ac diam volutpat.
                            </li>
                            <li>
                                <i className='fa fa-check'></i>
                                Etiam sed dolor ac diam volutpat.
                            </li>
                        </ul>
                        <a href="#" className='btn btu'>learn more</a>
                    </div>
                </div>
                <div className='col-lg-7 d-none d-md-block'>
                    <div className='small-desc-img'>
                        <img src= {smallDescImg}/>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className='watching-vedio text-center'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-8  ms-auto me-auto'>
                    <div className='watching-vedio-content'>
                        <h2>When a man's stomach is full it makes no
                            difference whether he is rich or poor.</h2>
                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio
                        finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>

                        <a href="#" className='btn btu'>Watch Our Story</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default  Bride