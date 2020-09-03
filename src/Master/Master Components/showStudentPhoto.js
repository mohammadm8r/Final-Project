import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../../Global Components/Title';
import { withStyles } from '@material-ui/core/styles'
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import TextField from '@material-ui/core/TextField';
import Image from 'material-ui-image'
import ClassPhoto from "../../students-in-classroom.jpg";
import Avatar from "@material-ui/core/Avatar";
import Profile from "../../Profile.jpg";
import { Resizable, ResizableBox } from 'react-resizable';
import Demo from '../../Global Components/calendar'
import { DialogTitle } from '@material-ui/core';
import Moment from 'react-moment';
import 'moment-timezone';
// Generate Order Data

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

class ShowStudentPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openPhoto: false,
      rows: [],
    }
    this.handleClickOpenPhoto = this.handleClickOpenPhoto.bind(this);
    this.handleClosePhoto = this.handleClosePhoto.bind(this);
  }

  handleClickOpenPhoto(event) {
    this.setState({ openPhoto: true })
  }

  handleClosePhoto(event) {
    this.setState({ openPhoto: false })
  };

  
  render() {
    const { classes } = this.props;
    const requestsRows = []
    console.log(this.state.rows)
    return (
      <React.Fragment>
        <Dialog
            open={this.props.openAvatar}
            onClose={this.props.onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            <DialogContent style={{width: '500px'}}>
                <Image src={`http://localhost:3030/StudentsPhotos?course_title=${localStorage.getItem('course_title')}&course_group=${localStorage.getItem('course_group')}&session_id=${this.props.session_id}`} />
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

export default withStyles(useStyles)(ShowStudentPhoto);



