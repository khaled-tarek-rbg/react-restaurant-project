import React from 'react'
import './Products.css'
import {products} from "../../data"





function Products() {
    
let all_products = products.map((item ,index)=>{
    return(
        <div className='col-md-4' key={index}>
                    <div className='product-img'>
                        <img src={item.product_img}/>
                    </div>
                    <div className='product-desc'>
                    <h2>{item.product_title}</h2>
                    <p>{item.product_desc}</p>
                    <small>{item.product_new_offer} </small>
                    <small>{item.product_old_offer}</small>
                    </div>
                    <hr/>
                    <a href="#" className='btn btu'>order now</a>
                  
                </div>
    )
});
  return (
    <div className='products'>

        <h2 className='text-center explore'>Explore Our Foods</h2>
        <p className='products-title' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
        <div className='container'>
            <div className='row'>
                {all_products}
            </div>
        </div>
    </div>
  )
}

export default Products;