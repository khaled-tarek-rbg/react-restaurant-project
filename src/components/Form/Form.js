import React from 'react'
import './Form.css'

export default function Form() {
  return (
    <div className='form'>
        
        <div className='container'>
            <h3 className='text-center'>
            Hurry up! Subscribe our newsletter
and get 25% Off
            </h3>
            <p className='text-center'>Limited time offer for this month. No credit card required.</p>
                <div className='row'>
                    <div className='col-md-4'>
                        <form>
                            <div className='form-group'>
                                <input type="text" className='form-control' placeholder='Email Address here'/>
                            </div>
                        </form>
                    </div>
                    <div className='col-md-2'>
                       <button className='btn btu' type='submit'>Subscribe</button>
                    </div>

                </div>
        </div>
        
    </div>
  )
}
