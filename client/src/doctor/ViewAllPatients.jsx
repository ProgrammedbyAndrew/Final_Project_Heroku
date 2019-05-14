import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
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
  table: {
    minWidth: 700,
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
    
    fetch('/doctor/viewStudies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' 
      },
      body: formBody
    })
    .then(res=>res.json())
    .then(res=>{
      if(res){
       console.log(res);
       this.setState({
         data:res
       })
      };
    }
    );

  };





  constructor(props){
    super(props)
    console.log(this.props.email);
    this.state={
      data:{},
      t:this.props.token,
    }
  };


  existInArray=(arr,ele)=>{
    let exist = false;
    for(let i = 0;i<arr.length;i++){
      if(arr[i]===ele){
        exist=true;
      }
    }
    return exist;
  }


  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="display2"> All Patients Enrolled</Typography>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <CustomTableCell>Patient Email</CustomTableCell>
                <CustomTableCell>Study Name</CustomTableCell>
                <CustomTableCell>Submitted</CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {
                Object.values(this.state.data).map((type,index) => {
                  if(type.studyBy===this.props.email){
                    let JSX = [];
                    for(let i=0; i<type.patientsAdded.length; i++){
                        if(this.existInArray(type.patientsSubmitted,type.patientsAdded[i])===true){
                            JSX.push(<TableRow>
                              <CustomTableCell> {type.patientsAdded[i]} </CustomTableCell>
                              <CustomTableCell> {type.name} </CustomTableCell>
                              <CustomTableCell> Submitted </CustomTableCell>
                            </TableRow>)
                          ;
                        } else {
                          JSX.push(<TableRow>
                              <CustomTableCell> {type.patientsAdded[i]} </CustomTableCell>
                              <CustomTableCell> {type.name} </CustomTableCell>
                              <CustomTableCell> Not Submitted </CustomTableCell>
                            </TableRow>)
                          ;
                      }
                    }
                    return JSX;
                  }
                })
              }
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}


CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);
