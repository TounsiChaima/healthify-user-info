import { createContext, createRef } from "react";

import React, { Component } from 'react';

class Recipe extends Component {
    render()
    
    {
        return (
            <div>
                <h1>Welcome to {this.props.name}</h1>
                
            </div>
        );
    }
}

export default Recipe;