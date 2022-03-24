import React from "react";
import './Questions.css'

const Questions = ()=>{
    return(
        <>
        <div className="questions">
            <div className="container">
                <h1 className="text-center">Frequently Asked Questions</h1>
                <div className="row">
                   <div className="col-lg-6 col-md-12">
                       <div className="content">
                           <h3><span>~</span>Is Foodera Bread really baked fresh each day?</h3>
                           <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </div>
                    </div> 
                   <div className="col-lg-6 col-md-12">
                       <div className="content">
                           <h3><span>~</span>Do you bake breads containing animal fats or products?</h3>
                           <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </div>
                    </div> 
                   <div className="col-lg-6 col-md-12">
                       <div className="content">
                           <h3><span>~</span>Can I order your products online?</h3>
                           <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </div>
                    </div> 
                   <div className="col-lg-6 col-md-12">
                       <div className="content">
                           <h3><span>~</span>When are you opening a shop near me?</h3>
                           <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </div>
                    </div> 
                  
                </div>
            </div>
        </div>
        <div className="passion">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h4>
                           Baked fresh daily by bakers with passion.</h4>
                    </div>
                    <div className="col-md-4">
                        <a href="#" className="btn btu">Learn more</a>
                    </div>
                </div>
           
           
            </div>
           
          
        </div>
        </>
    )
}
export default Questions