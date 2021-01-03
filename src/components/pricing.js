import React, { Component } from 'react';
import meals from '../data/meals'
import {Link, BrowserRouter} from 'react-router-dom';

class Pricing extends Component {
    render() {
        console.log(meals)
        return (

            <div>
                <section id="pricing" className="pricing">
            <div id="w">
                <div className="pricing-filter">
                    <div className="pricing-filter-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10 col-md-offset-1">
                                    <div className="section-header">
                                        <h2 className="pricing-title">Choose a Meal</h2>
                                        <ul id="filter-list" className="clearfix">
                                            <li className="filter" data-filter="all">All</li>
                                            <li className="filter" data-filter=".breakfast">Breakfast</li>
                                            <li className="filter" data-filter=".special">Special</li>
                                            <li className="filter" data-filter=".desert">Desert</li>
                                            <li className="filter" data-filter=".dinner">Dinner</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">  
                        <div className="col-md-10 col-md-offset-1">
                            <ul id="menu-pricing" className="menu-price">
                            {meals.map(function(current){
                        
                        return(
                          
                          <li className={current.type}>
                                            <Link  to={"/"+current.name} >
            
           
                            <a href="#">
                                        <img src={current.image} 
                                        className="img-responsive" alt="Food" />
                                        <div className="menu-desc text-center">
                                            <span>
                                                <h3>{current.name}</h3>
                                              {current.dsc}</span>
                                        </div>
                                    </a></Link>
                                        <h2 className="white">{current.name}</h2>
                                        
                                </li>
                        )})}

                            </ul>

                             <div className="text-center">
                                    <a id="loadPricingContent" className="btn btn-middle hidden-sm hidden-xs">Load More <span className="caret"></span></a>
                            </div> 

                        </div>   
                    </div>
                </div>

            </div> 
        </section>
            </div>
        );
    }
}

export default Pricing;