import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import DeleteIcon from '@material-ui/icons/Search';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog/Dialog';
import DialogActions from 'material-ui/Dialog/DialogActions';
import DialogContent from 'material-ui/Dialog/DialogContent';
import DialogContentText from 'material-ui/Dialog/DialogContentText';
import DialogTitle from 'material-ui/Dialog/DialogTitle';
import LinearProgress from 'material-ui/Progress/LinearProgress';


import _ from 'lodash';

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
     'token':this.props.token,
     'studyBy': this.props.email,
 };
 

 var formBody = [];
 for (var property in details) {
   var encodedKey = encodeURIComponent(property);
   var encodedValue = encodeURIComponent(details[property]);
   formBody.push(encodedKey + "=" + encodedValue);
 }
 formBody = formBody.join("&");
 
 
 fetch('/doctor/viewAllResponses', {
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

    console.log(this.state.data[index])
    var temp =this.state.data[index];

    this.setState({
      open:true,
      selectedData : temp
    });

  }
  handleClose=()=>{
    this.setState({open:false});
  }


  constructor(props){
    super(props);
    
    this.state = {
      t:this.props.token,
      data:{},
      open:false,
      selectedData:{}
    }

   this.deleteClick =  this.deleteClick.bind(this);
  }




  render() {
    const { classes } = this.props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead className={classes.tablehead}>
          <TableRow>
            <CustomTableCell>Sr No.</CustomTableCell>
            <CustomTableCell>Patient</CustomTableCell>
            <CustomTableCell>Study Name</CustomTableCell>
            <CustomTableCell >Doctor</CustomTableCell>
            <CustomTableCell >Check Detail Response</CustomTableCell>
 
          </TableRow>
        </TableHead>
        <TableBody>
          {/*data to be replaced with json pacakage from api*/}
          {Object.values(this.state.data).map((type,index) => {
            if(type.studyBy=== this.props.email){
                  return (
                    <TableRow className={classes.row} key={type._id} selectable={true}>
                      <CustomTableCell>{index+1}</CustomTableCell>
                      <CustomTableCell>{type.patientid}</CustomTableCell>
                      <CustomTableCell>{type.studyName}</CustomTableCell>
                      <CustomTableCell >{type.studyBy}</CustomTableCell>
                      <CustomTableCell >
                      <Button  aria-label="delete" onClick={()=>{this.deleteClick(index)}} className={classes.button}>
                      View Response   <DeleteIcon />
                      </Button>
                      </CustomTableCell>
                    </TableRow>
                  );
            }
          
          })}
        </TableBody>
      </Table>
      <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Detail Survey Result"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Here is the detail result of the survey filled by patient
            </DialogContentText>
            <p> Cough : <b>{this.state.selectedData.cough}</b></p>
            <LinearProgress variant="determinate"  value={this.state.selectedData.cough*16.66} />

            <p> Decreased Smell Sense : <b>{this.state.selectedData.decreased_sense_smellTast}</b></p>
            <LinearProgress variant="determinate"  value={this.state.selectedData.decreased_sense_smellTast*16.66} />

            <p> Difficulty Falling Asleep : <b>{this.state.selectedData.difficulty_fallingAsleep}</b></p>
            <LinearProgress variant="determinate"  value={this.state.selectedData.difficulty_fallingAsleep*16.66} />

            <p> Dizziness : <b>{this.state.selectedData.dizziness}</b></p>
            <LinearProgress variant="determinate"  value={this.state.selectedData.dizziness*16.66} />

            <p> Ear Fulness : <b>{this.state.selectedData.ear_fullness}</b></p>
            <LinearProgress variant="determinate"  value={this.state.selectedData.ear_fullness*16.66} />

            <p> Ear Pain : <b>{this.state.selectedData.ear_pain}</b></p>
            <LinearProgress variant="determinate"  value={this.state.selectedData.ear_pain*16.66} />

            <p> Ear Fulness : <b>{this.state.selectedData.ear_fullness}</b></p>
            <LinearProgress variant="determinate"  value={this.state.selectedData.ear_fullness*16.66} />

            <p> Embarresment : <b>{this.state.selectedData.embarrased}</b></p>
            <LinearProgress variant="determinate"  value={this.state.selectedData.embarrased*16.66} />

            <p> Faical pain pressure : <b>{this.state.selectedData.facial_painPressure}</b></p>
            <LinearProgress variant="determinate"  value={this.state.selectedData.facial_painPressure*16.66} />

            <p> Fatigue : <b>{this.state.selectedData.fatigue}</b></p>
            <LinearProgress variant="determinate"  value={this.state.selectedData.fatigue*16.66} />

            <p> Frustrated, Restless, Irratated : <b>{this.state.selectedData.frustrated_restless_irritable}</b></p>
            <LinearProgress variant="determinate"  value={this.state.selectedData.frustrated_restless_irritable*16.66} />

            <p> Lack of good sleep : <b>{this.state.selectedData.lack_goodSleep}</b></p>
            <LinearProgress variant="determinate"  value={this.state.selectedData.lack_goodSleep*16.66} />

            <p> Nasal Blockage : <b>{this.state.selectedData.nasal_blockage}</b></p>
            <LinearProgress variant="determinate"  value={this.state.selectedData.nasal_blockage*16.66} />

            <p> Need to blow nose : <b>{this.state.selectedData.need_blowNose}</b></p>
            <LinearProgress variant="determinate"  value={this.state.selectedData.need_blowNose*16.66} />

            <p> Post Nasal Discharge : <b>{this.state.selectedData.post_nasalDischarge}</b></p>
            <LinearProgress variant="determinate"  value={this.state.selectedData.post_nasalDischarge*16.66} />

            <p> Reduced Concentration : <b>{this.state.selectedData.reduced_concentration}</b></p>
            <LinearProgress variant="determinate"  value={this.state.selectedData.reduced_concentration*16.66} />

            <p> Reduced Productivity : <b>{this.state.selectedData.reduced_productivity}</b></p>
            <LinearProgress variant="determinate"  value={this.state.selectedData.reduced_productivity*16.66} />

            <p> Runny Nose : <b>{this.state.selectedData.runny_nose}</b></p>
            <LinearProgress variant="determinate"  value={this.state.selectedData.runny_nose*16.66} />

            <p> Sad : <b>{this.state.selectedData.sad}</b></p>
            <LinearProgress variant="determinate"  value={this.state.selectedData.sad*16.66} />

            <p> Sneezing : <b>{this.state.selectedData.sneezing}</b></p>
            <LinearProgress variant="determinate"  value={this.state.selectedData.sneezing*16.66} />

            <p> Thick Nasal Discharge : <b>{this.state.selectedData.thick_nasalDischarge}</b></p>
            <LinearProgress variant="determinate"  value={this.state.selectedData.thick_nasalDischarge*16.66} />

            <p> Awake at Night : <b>{this.state.selectedData.wake_atNight}</b></p>
            <LinearProgress variant="determinate"  value={this.state.selectedData.wake_atNight*16.66} />

            <p> Wakeup Tired : <b>{this.state.selectedData.wakeup_tired}</b></p>
            <LinearProgress variant="determinate"  value={this.state.selectedData.wakeup_tired*16.66} />

            <p>Any 5 Major issues : <b>{this.state.selectedData.importantDiseases}</b></p>

          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Close
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
