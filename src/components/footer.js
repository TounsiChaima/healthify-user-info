import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="copyright text-center">
                            <p>
                                &copy; Copyright, 2020 <a 
                                style={{color:'white'}}
                                href="#">Healthify Tounsi.</a> 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        );
    }
}

export default Footer;