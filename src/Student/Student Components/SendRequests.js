import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import Image from 'material-ui-image'
import ClassPhoto from "../../students-in-classroom.jpg";
import { DialogTitle } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


const useStyles = theme => ({
  NumberFont: {
    fontFamily: 'IranSansFaNum',
  },
  font: {
    fontFamily: 'Shabnam',
  },
  text: {
    '&::placeholder' : {
      fontFamily: 'Shabnam',
    } 
  }
});

class SendRequests extends React.Component {
    constructor (props) {
        super(props);
        this.state={
            comment: '',
        }
        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.sendHozoorRequest = this.sendHozoorRequest.bind(this);
        this.sendGheibatRequest = this.sendGheibatRequest.bind(this);
    }
    
    handleCommentChange(event) {
        console.log(this.state)
        this.setState({comment: event.target.value})
    }
    
    sendHozoorRequest(){
      console.log(this.props.attendance_id)
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"attendance_id": this.props.attendance_id, "request_type": 1, "request_comment": this.state.comment}),
      };
      fetch('http://localhost:3030/insertRequest', requestOptions)
        .then(async response => {
          const data = await response.json();
          if (!response.ok) {
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
          }
        })
        .catch(error => {
          this.setState({ errorMessage: error.toString() });
          console.error('There was an error!', error);
        });
    }

    sendGheibatRequest(){
      console.log(this.props.attendance_id)
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"attendance_id": this.props.attendance_id, "request_type": 2, "request_comment": this.state.comment}),
      };
      fetch('http://localhost:3030/insertRequest', requestOptions)
        .then(async response => {
          const data = await response.json();
          if (!response.ok) {
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
          }
        })
        .catch(error => {
          this.setState({ errorMessage: error.toString() });
          console.error('There was an error!', error);
        });
    }

  render() {
    const { classes } = this.props;
    console.log(this.props.open)
    return (
      <React.Fragment>
         <Dialog 
            open={this.props.open}
            onClose={this.props.onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth='true'
            maxWidth='sm'
        >
            <DialogContent>
            <Image src={ClassPhoto} maxWidth='md'/>
            </DialogContent>
            <DialogTitle>
                <TextField
                    disableTypography
                    margin="normal"
                    fullWidth
                    name="comment"
                    // label={<Typography type="body2" style={{ fontFamily: 'Shabnam', textAlign: 'right', alignItems: 'right'}}>توضیحات درخواست</Typography>}
                    type="comment"
                    id="standard-basic"
                    onChange={this.handleCommentChange}
                    placeholder="توضیحات درخواست" 
                    InputProps={{classes: { input: classes.text }}} 
                />
            </DialogTitle>
            <DialogContent>
            <DialogContentText>
                <Button
                    type="submit"
                    // fullWidth
                    variant="contained"
                    color="primary"
                    // className={classes.submit && classes.font}
                    style={{fontFamily: 'Shabnam'}}
                    // onClick={this.sendRequest}
                    onClick={this.sendHozoorRequest}
                >
                    درخواست ثبت حضور
                </Button>
            </DialogContentText>
            <DialogContentText>
                <Button
                        type="submit"
                        // fullWidth
                        variant="contained"
                        color="primary"
                        // className={classes.submit && classes.font}
                        style={{fontFamily: 'Shabnam'}}
                        onClick={this.sendGheibatRequest}
                    >
                        درخواست ثبت غیبت
                </Button>
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={this.props.onClose} color="primary" autoFocus style={{ fontFamily: "Shabnam" }}>
                بستن
            </Button>
            </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}
export default withStyles(useStyles)(SendRequests);



