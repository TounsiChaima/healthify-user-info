import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
        <nav id="template-navbar" className="navbar navbar-default custom-navbar-default navbar-fixed-top">
            <div className="container">
            
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#Food-fair-toggle">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">
                        <img id="logo" src="images/Logo_main.png" className="logo img-responsive"/>
                    </a>
                </div>

               
                <div className="collapse navbar-collapse" id="Food-fair-toggle">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#about">about</a></li>
                        <li><a href="#pricing">pricing</a></li>
                        <li><a href="#great-place-to-enjoy">beer</a></li>
                        <li><a href="#breakfast">bread</a></li>
                        <li><a href="#featured-dish">featured</a></li>
                        <li><a href="#reserve">reservation</a></li>
                        <li><a href="#contact">contact</a></li>
                    </ul>
                </div>
            </div>
            
        </nav>
           </div>
            </React.Fragment>
        );
    }
}

export default Navbar;