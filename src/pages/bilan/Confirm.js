import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
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

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, sexe, weight, height, physical_activity }
    } = this.props;
    
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText primary="First Name" secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={lastName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Sexe" secondary={sexe} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Weight" secondary={weight} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Height" secondary={height} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Physical Activity" secondary={physical_activity} />
              </ListItem>
            </List>
            <br />

            <StyledBackButton
              
              variant="contained"
              onClick={this.back}
            >Back</StyledBackButton>

            <StyledContButton
              color="#76ff03"
              variant="contained"
              onClick={this.continue}
            >Confirm & Continue</StyledContButton>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
