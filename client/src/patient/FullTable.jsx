import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import DeleteIcon from '@material-ui/icons/CheckBox';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog/Dialog';
import DialogActions from 'material-ui/Dialog/DialogActions';
import DialogContent from 'material-ui/Dialog/DialogContent';
import DialogContentText from 'material-ui/Dialog/DialogContentText';
import DialogTitle from 'material-ui/Dialog/DialogTitle';

import Radio from 'material-ui/Radio/Radio';
import RadioGroup from 'material-ui/Radio/RadioGroup';
import FormHelperText from 'material-ui/Form/FormHelperText';
import FormControlLabel from 'material-ui/Form/FormControlLabel';
import FormControl from 'material-ui/Form/FormControl';
import FormLabel from 'material-ui/Form/FormLabel';
import Divider from 'material-ui/Divider';
import _ from 'lodash';
import { Grid } from 'material-ui';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#3F51B5',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  button: {
    margin: theme.spacing.unit,
  },
  table: {
    minWidth: 700,
  },
  tablehead : {
    align:'center',
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});


class CustomizedTable extends React.Component {
  componentDidMount(){
    var details = {
     'token':this.state.t
 };
 

 var formBody = [];
 for (var property in details) {
   var encodedKey = encodeURIComponent(property);
   var encodedValue = encodeURIComponent(details[property]);
   formBody.push(encodedKey + "=" + encodedValue);
 }
 formBody = formBody.join("&");
 
 
 fetch('/patient/ViewEnrolledStudies', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' 
   },
   body: formBody
 })
 .then(res=>res.json())
 .then(res=>{

   if(res){
     console.log('My email', this.props.email)
     console.log('My email', res)
    this.setState({
      data:res
    })
   };
 }
 );   
}

  deleteClick = (index) => {
    console.log({index})
    console.log(this.state.data[index])
      var details = {
        'token':this.state.t,
        'id':this.state.data[index].item_id,
      };
  }



  //SURVEY
  handleClickOpen = (name,by) => {
    this.setState({ open: true });
    this.setState({
      studySelected:name,
      studyBy:by
    });
  };

 changeTopFive = (e) => {
  this.setState({ top5: e.target.value });

  };


  handleClose = () => {


    //API CALL HERE
    var details = {
      'token':this.state.t,
      'study':this.state.studySelected,
      'filledBy':this.props.email,
      'value1':this.state.value1,      
      'value2':this.state.value2,      
      'value3':this.state.value3,
      'value4':this.state.value4,      
      'value5':this.state.value5,      
      'value6':this.state.value6,      
      'value7':this.state.value7,      
      'value8':this.state.value8,      
      'value9':this.state.value9,      
      'value10':this.state.value10,      
      'value11':this.state.value11,      
      'value12':this.state.value12,      
      'value13':this.state.value13,      
      'value14':this.state.value14,      
      'value15':this.state.value15,      
      'value16':this.state.value16,      
      'value17':this.state.value17,      
      'value18':this.state.value18,      
      'value19':this.state.value19,      
      'value20':this.state.value20,      
      'value21':this.state.value21,      
      'value22':this.state.value22,
      'top5':this.state.top5,
      'studyBy':this.state.studyBy,
      'studyName':this.state.studySelected
  };
  
 
  var formBody = [];
  for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  
  
  fetch('/patient/submitResponse', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' 
    },
    body: formBody
  })
  .then(res=>res.json())
  .then(res=>{
 
    if(res){
      console.log('My email', this.props.email)
      console.log('Response', res)
     
    };
  }
  );

    this.setState({ open: false });
  }

  handleRadioChange1 = event => {
    this.setState({ value1: event.target.value });
  };
  handleRadioChange2 = event => {
    this.setState({ value2: event.target.value });
  };
  handleRadioChange3 = event => {
    this.setState({ value3: event.target.value });
  };
  handleRadioChange4 = event => {
    this.setState({ value4: event.target.value });
  };
  handleRadioChange5 = event => {
    this.setState({ value5: event.target.value });
  };
  handleRadioChange6 = event => {
    this.setState({ value6: event.target.value });
  };
  handleRadioChange7 = event => {
    this.setState({ value7: event.target.value });
  };
  handleRadioChange8 = event => {
    this.setState({ value8: event.target.value });
  };
  handleRadioChange9 = event => {
    this.setState({ value9: event.target.value });
  };
  handleRadioChange10 = event => {
    this.setState({ value10: event.target.value });
  };
  handleRadioChange11 = event => {
    this.setState({ value11: event.target.value });
  };
  handleRadioChange12 = event => {
    this.setState({ value12: event.target.value });
  };
  handleRadioChange13 = event => {
    this.setState({ value13: event.target.value });
  };
  handleRadioChange14 = event => {
    this.setState({ value14: event.target.value });
  };
  handleRadioChange15 = event => {
    this.setState({ value15: event.target.value });
  };
  handleRadioChange16 = event => {
    this.setState({ value16: event.target.value });
  };
  handleRadioChange17 = event => {
    this.setState({ value17: event.target.value });
  };
  handleRadioChange18 = event => {
    this.setState({ value18: event.target.value });
  };
  handleRadioChange19 = event => {
    this.setState({ value19: event.target.value });
  };
  handleRadioChange20 = event => {
    this.setState({ value20: event.target.value });
  };
  handleRadioChange21 = event => {
    this.setState({ value21: event.target.value });
  };
  handleRadioChange22 = event => {
    this.setState({ value22: event.target.value });
  };













  deleteClickHandler = () => {
    this.setState({
      isDisabled:false,
      buttonisDisabled:false,
    })
  }

  constructor(props){
    super(props);
    
    this.state = {
      t:this.props.token,
      data:{},
      id:'',
      studySelected:'',
      open:false,
      value1:0,      
      value2:0,      
      value3:0,      
      value4:0,      
      value5:0,      
      value6:0,      
      value7:0,      
      value8:0,      
      value9:0,      
      value10:0,      
      value11:0,      
      value12:0,      
      value13:0,      
      value14:0,      
      value15:0,      
      value16:0,      
      value17:0,      
      value18:0,      
      value19:0,      
      value20:0,      
      value21:0,      
      value22:0,
      top5:'',
      studyBy:''
    }

   this.deleteClick =  this.deleteClick.bind(this);
  }


  exists=(arr,value)=>{
    for (let i = 0; i< arr.lenght;i++){
      if(arr[i]===value)
        return true;
      }
    return false;
  }


  render() {
    const { classes } = this.props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead className={classes.tablehead}>
          <TableRow>
          <CustomTableCell>Sr No.</CustomTableCell>
            <CustomTableCell>Title</CustomTableCell>
            <CustomTableCell >Date</CustomTableCell>
            <CustomTableCell >By</CustomTableCell>
            <CustomTableCell >Info</CustomTableCell>
            <CustomTableCell >Take Survey</CustomTableCell> 
          </TableRow>
        </TableHead>
        <TableBody>
          {/*data to be replaced with json pacakage from api*/}
          {Object.values(this.state.data).map((type,index) => {
            //now use this to display stuff
            
              
            if(_.find(type.patientsAdded, (n) => n === this.props.email)){
              if(_.find(type.patientsSubmitted, (n) => n === this.props.email)){
                  
                return (
                  <TableRow className={classes.row} key={type._id} selectable={true}>
                    <CustomTableCell>{index+1}</CustomTableCell>
                    <CustomTableCell>{type.name}</CustomTableCell>
                    <CustomTableCell >{type.date}</CustomTableCell>
                    <CustomTableCell >{type.studyBy}</CustomTableCell>
                    <CustomTableCell >{type.studyInfo}</CustomTableCell>
                    <CustomTableCell >
                      Submitted
                     </CustomTableCell>
                  </TableRow>
                );
            
                } else {
                  return (
                    <TableRow className={classes.row} key={type._id} selectable={true}>
                      <CustomTableCell>{index+1}</CustomTableCell>
                      <CustomTableCell>{type.name}</CustomTableCell>
                      <CustomTableCell >{type.date}</CustomTableCell>
                      <CustomTableCell >{type.studyBy}</CustomTableCell>
                      <CustomTableCell >{type.studyInfo}</CustomTableCell>
                      <CustomTableCell >
                      <Button  aria-label="delete" onClick={()=>{this.handleClickOpen(type.name,type.studyBy)}} className={classes.button}>
                      <DeleteIcon />
                      </Button>
                      </CustomTableCell>
                    </TableRow>
                  );
                }
              }          
          })}
        </TableBody>
      </Table>
      <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Survey</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <small>
              Below you will find a list of symptoms and social/emotional consequences of your rhinosinusitis. We would like to know more about
              these problems and would appreciate your answering the following questions to the best of your ability. There are no right or wrong
              answers, and only you can provide us with this information. Please rate your problems as they have been over the past two weeks.
              Thank you for your participation
              </small>
            </DialogContentText>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>1. Need to blow nose</b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q1"
                    value={this.state.value1}
                    onChange={this.handleRadioChange1}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <Divider/>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>2. Nasal Blockage</b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q2"
                    value={this.state.value2}
                    onChange={this.handleRadioChange2}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <Divider/>
                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>3. Sneezing </b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q3"
                    value={this.state.value3}
                    onChange={this.handleRadioChange3}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <Divider/>
                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>4. Runny nose </b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q4"
                    value={this.state.value4}
                    onChange={this.handleRadioChange4}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <Divider/>
                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>5. Cough </b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q5"
                    value={this.state.value5}
                    onChange={this.handleRadioChange5}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <Divider/>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>6. Post-nasal discharge </b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q6"
                    value={this.state.value6}
                    onChange={this.handleRadioChange6}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <Divider/>
                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>7. Thick nasal discharge </b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q7"
                    value={this.state.value7}
                    onChange={this.handleRadioChange7}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <Divider/>
                                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>8. Ear fullness </b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q8"
                    value={this.state.value8}
                    onChange={this.handleRadioChange8}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <Divider/>
                                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>9. Dizziness</b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q9"
                    value={this.state.value9}
                    onChange={this.handleRadioChange9}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <Divider/>
                                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>10. Ear pain </b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q10"
                    value={this.state.value10}
                    onChange={this.handleRadioChange10}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <Divider/>
                                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>11. Facial pain/pressure  </b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q11"
                    value={this.state.value11}
                    onChange={this.handleRadioChange11}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <Divider/>
                                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>12. Decreased Sense of Smell/Taste </b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q12"
                    value={this.state.value12}
                    onChange={this.handleRadioChange12}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <Divider/>
                          
                                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>13. Difficulty falling asleep </b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q13"
                    value={this.state.value13}
                    onChange={this.handleRadioChange13}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <Divider/>
                                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>14. Wake up at night </b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q14"
                    value={this.state.value14}
                    onChange={this.handleRadioChange14}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <Divider/>
                                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>15. Lack of a good night’s sleep</b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q15"
                    value={this.state.value15}
                    onChange={this.handleRadioChange15}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <Divider/>
                                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>16. Wake up tired </b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q2"
                    value={this.state.value16}
                    onChange={this.handleRadioChange16}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <Divider/>
                                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>17. Fatigue</b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q2"
                    value={this.state.value17}
                    onChange={this.handleRadioChange17}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <Divider/>
                                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>18. Reduced productivity  </b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q18"
                    value={this.state.value18}
                    onChange={this.handleRadioChange18}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <Divider/>
                                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>19. Reduced concentration  </b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q19"
                    value={this.state.value19}
                    onChange={this.handleRadioChange19}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <Divider/>
                                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>20. Frustrated/restless/irritable</b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q20"
                    value={this.state.value20}
                    onChange={this.handleRadioChange20}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <Divider/>
                                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>21. Sad </b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q2"
                    value={this.state.value21}
                    onChange={this.handleRadioChange21}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <Divider/>
                                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel><b>22. Embarrassed</b> </FormLabel>
                  <RadioGroup
                    aria-label="My question here"
                    name="q22"
                    value={this.state.value22}
                    onChange={this.handleRadioChange22}
                  >

                      <FormControlLabel value="0" control={<Radio />} label="No Problem" />                
                      <FormControlLabel value="1" control={<Radio />} label="Very Mild Problem" />                
                      <FormControlLabel value="2" control={<Radio />} label="Mild or slight Problem " />                
                      <FormControlLabel value="3" control={<Radio />} label="Moderate Problem" />                
                      <FormControlLabel value="4" control={<Radio />} label="Severe Problem" />                
                      <FormControlLabel value="5" control={<Radio />} label="Problem as bad as it can be" />                
                  </RadioGroup>
                </FormControl>
                <TextField
              margin="dense"
              id="top5"
              label="5 Major Items, seprate by commas E.G : 1,2,11,23"
              type="text"
              onChange={e => this.changeTopFive(e)}
              value={this.state.top5}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
  );
}
  }
  

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);
