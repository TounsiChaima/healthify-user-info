import React, { Component } from 'react';

class Slider extends Component {
    render() {
        return (
            <div>
                 <div className="flexslider-container row">
                                <div className="flexslider">
                                    <ul className="slides">
                                        <li className="container">
                                            <img src="../images/11.png" />
                                        </li>
                                        <li>
                                            <img src="../images/21.png" />
                                        </li>
                                        <li>
                                            <img src="../images/31.png" />
                                        </li>
                                    
                                    </ul>
                                </div>
                            </div>
            </div>
        );
    }
}

export default Slider;