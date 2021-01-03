import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const StyledContButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, #7CFC00 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 30,
    padding: '0 10px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    justifyContent: 'center'

  },
  label: {
    textTransform: 'capitalize',
    fontSize:20
  },
})(Button);


const StyledBackButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, #7CFC00 90%, #FF8E53 30%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 30,
    padding: '0 10px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    justifyContent: 'center'

  },
  label: {
    textTransform: 'capitalize',
    fontSize:20
  },
})(Button);

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter Personal Details" />
            <TextField
              placeholder="Enter Your Weight in Kg"
              label="Weight"
              onChange={handleChange('weight')}
              defaultValue={values.weight}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Height in Cm"
              label="Height"
              onChange={handleChange('height')}
              defaultValue={values.height}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="very active, active, rarely active, inactive"
              label="Physical Activity"
              onChange={handleChange('physical_activity')}
              defaultValue={values.physical_activity}
              margin="normal"
              fullWidth
            />
            <br />

            <StyledBackButton
              color="#618833"
              variant="contained"
              onClick={this.back}
            >Back</StyledBackButton>

            <StyledContButton
              color="#76ff03"
              variant="contained"
              onClick={this.continue}
            >Continue</StyledContButton>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
