import React, { Component } from 'react';
import Reservation from '../../components/reservation'
class Recipe extends Component {
    render() {
        return (
            <div>
                
            <Reservation name = {this.props.name} 
                         image = {this.props.image}/>
            </div>
        );
    }
}

export default Recipe;