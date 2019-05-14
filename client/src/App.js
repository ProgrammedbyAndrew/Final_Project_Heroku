import React, { Component } from 'react';
import './App.css';
import PatientDrawer from './patient/Drawer';
import DoctorDrawer from './doctor/Drawer';
import Login  from './patient/Login';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

class App extends Component {

  /*componentWillMount(){

    if(this.state.IsLoggedInPatient===true){
      this.setState({
        onDisplay:<PatientDrawer/>
      })
    }
    else if(this.state.IsLoggedInDoctor===true){
        this.setState({
          onDisplay:<div>Head Office</div>
        })
    }
    else if(this.state.IsLoggedinShop===true){
      this.setState({
        onDisplay:<div>Shop</div>
      })
    }
    else {
      this.setState({
        onDisplay:<Login updateDoctor={this.updateDoctorDisplay} updatePatient={this.updatePatientDisplay} updateShop={this.updateShopDisplay}/>
      })
    }
    }
    */

    constructor(props){
      super(props);
      this.state={
        /*
          IsLoggedInPatient:false,
          IsLoggedInDoctor:false,
          IsLoggedinShop:false,
        */
       open:false,
        onDisplay:<Login updateDoctor={this.updateDoctorDisplay} updatePatient={this.updatePatientDisplay} handleOpen={this.handleClickOpen}/>
      }
      this.updatePatientDisplay.bind(this);
      this.updateDoctorDisplay.bind(this);
      this.logoutFunction.bind(this);
      this.handleClickOpen.bind(this);
      this.handleClose.bind(this);
    }

    handleClickOpen = () => {
      this.setState({ open: true });
    };
  
    handleClose = () => {
      this.setState({ open: false });
    };

  
  updatePatientDisplay = (token, email) => {
    console.log(token);
    //now send token to the required component
    this.setState({
      IsLoggedInPatient:true,
      onDisplay:<PatientDrawer email ={email} token={token} logoutScreen={this.logoutFunction}/>
    })
  }


  updateDoctorDisplay = (token, email) => {
    console.log(token)
    this.setState({
      IsLoggedInDoctor:true,
      onDisplay:<DoctorDrawer token={token} email ={email}  logoutScreen={this.logoutFunction}/>
    })
  }

  logoutFunction = () => {
    console.log('logging out')
    this.setState({
      onDisplay: <Login  updateDoctor={this.updateDoctorDisplay} updatePatient={this.updatePatientDisplay} updateShop={this.updateShopDisplay}  handleOpen={this.handleClickOpen}/>
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.onDisplay}
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Error"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Invalid Username or Password
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default App; 