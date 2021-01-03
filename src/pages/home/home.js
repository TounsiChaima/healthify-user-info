import React, { Component } from 'react';
import Navbar from '../../components/navbar';
import '../../main.css'
import About from "../../components/about"
import Pricing from '../../components/pricing';
import Dishes from '../../components/dishes';
import Reservation from '../../components/reservation';
import ContactUs from '../../components/contactUs';
import WorkingHours from '../../components/workingHours';
import Footer from '../../components/footer'
import Slider from '../../components/slider';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const StyledButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, #7CFC00 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 100,
      padding: '0 550px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      justifyContent: 'center'

    },
    label: {
      textTransform: 'capitalize',
      fontSize:30
    },
  })(Button);
class Home extends Component {
  
    render() { 
        return (
            <React.Fragment>
            <Navbar/>
            <Slider/>
          
    <StyledButton component={Link} to="/bilan"  >Start your diet now !</StyledButton>

            <About/>
            <Dishes/>
            <Pricing/>
            <WorkingHours/>
            <ContactUs/>
            <Footer/>
            </React.Fragment>
            );
    }
}
 
export default Home;