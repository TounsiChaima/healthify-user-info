import React, { Component } from 'react';

class Dishes extends Component {
    render() {
        return (
            <div>
                <section id="have-a-look" className="have-a-look hidden-xs">
            <img className="img-responsive section-icon hidden-sm hidden-xs" src="../images/icons/food_color.png"/>
            <div className="wrapper">
                <div className="container-fluid">
                    <div className="row dis-table"
                    >
                         <div className="gallery-heading col-xs-6 col-sm-6 col-md-6 dis-table-cell color-bg"
                         >
                            <h2 className="section-title">Have A Look To Our Dishes</h2>
                        </div>

                        <div className="gallery-heading col-xs-6 col-sm-6 dis-table-cell" >
                            <div className="flexslider-container row">
                                <div className="flexslider">
                                    <ul className="slides">
                                        <li>
                                            <img src="../images/menu-gallery/menu1.png" />
                                        </li>
                                        <li>
                                            <img src="../images/menu-gallery/menu2.jpg" />
                                        </li>
                                        <li>
                                            <img src="../images/menu-gallery/menu3.png" />
                                        </li>
                                        <li>
                                            <img src="../images/menu-gallery/menu4.jpg" />
                                        </li>
                                        <li>
                                            <img src="../images/menu-gallery/menu5.jpg" />
                                        </li>
                                        <li>
                                            <img src="../images/menu-gallery/menu6.jpg" />
                                        </li>
                                        <li>
                                            <img src="../images/menu-gallery/menu7.jpg" />
                                        </li>
                                        <li>
                                            <img src="../images/menu-gallery/menu8.jpg" />
                                        </li>
                                        <li>
                                            <img src="../images/menu-gallery/menu9.jpg" />
                                        </li>
                                        <li>
                                            <img src="../images/menu-gallery/menu10.jpg" />
                                        </li>
                                        <li>
                                            <img src="../images/menu-gallery/menu11.jpg" />
                                        </li>
                                    </ul>
                                </div>
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

export default Dishes;