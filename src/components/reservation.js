import React, { Component } from 'react';

class Reservation extends Component {
    render() {
        return (
            <div>
                <section id="reserve" className="reserve">
           
            <div className="wrapper">
                <div className="container-fluid">
                    <div className="row dis-table">
                        <div className="col-xs-6 col-sm-6 col-md-6 dis-table-cell color-bg">
                            <h2 className="section-title"> {this.props.name}</h2>
                        </div>
                        <div className="col-xs-6 col-sm-6 dis-table-cell section-recipe"
                        style={{backgroundImage:  `url(${this.props.image})`}}>
                        </div>

                    </div> 
                </div> 
            </div> 
        </section> 
            </div>
        );
    }
}

export default Reservation;