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

class ShowRequests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openReq: false,
      openPhoto: false,
      openTrace: false,
      openAvatar: false,
      rows: [],
    }
    

    this.handleClickOpenReq = this.handleClickOpenReq.bind(this);
    this.handleClickOpenTraceRequests = this.handleClickOpenTraceRequests.bind(this);
    this.handleClickOpenPhoto = this.handleClickOpenPhoto.bind(this);
    this.handleClickOpenAvatar = this.handleClickOpenAvatar.bind(this);
    this.handleCloseReq = this.handleCloseReq.bind(this);
    this.handleClosePhoto = this.handleClosePhoto.bind(this);
    this.handleCloseAvatar = this.handleCloseAvatar.bind(this);
    this.handleCloseTrace = this.handleCloseTrace.bind(this);
    this.handleClickChangeStatusOnTick = this.handleClickChangeStatusOnTick.bind(this);
    this.handleClickChangeStatusOnCross = this.handleClickChangeStatusOnCross.bind(this);

  }

  handleClickChangeStatusOnTick(attendance_id, request_type_matn) {
    let attendance_new_status = 0
    switch(request_type_matn){
      case 'درخواست ثبت حضور':
        attendance_new_status = 3
        break;
      case 'درخواست ثبت غیبت':
        attendance_new_status = 6
        break;
      default:
        attendance_new_status = 0
    }
    return () => {
      console.log({attendance_id})
      this.props.changeRequestFunc(attendance_id, attendance_new_status, 1)
    }
  }

  handleClickChangeStatusOnCross(attendance_id, request_type_matn) {
    let attendance_new_status = 0
    switch(request_type_matn){
      case 'درخواست ثبت حضور':
        attendance_new_status = 5
        break;
      case 'درخواست ثبت غیبت':
        attendance_new_status = 2
        break;
      default:
        attendance_new_status = 0
    }
    return () => {
      console.log({attendance_id})
      this.props.changeRequestFunc(attendance_id, attendance_new_status, 2)
    }
  }

  createRequestsData(id, reqDate, reqTitle, reqStatus, reqComment, reqType) {
    return { id, reqDate, reqTitle, reqStatus, reqComment, reqType };
  }

  handleClickOpenReq(event) {
    this.setState({ openReq: true })
  }

  handleClickOpenPhoto(event) {
    this.setState({ openPhoto: true })
  }

  handleClickOpenAvatar(event) {
    this.setState({ openAvatar: true })
  }

  handleClickOpenTraceRequests(event) {
    this.setState({ openTrace: true })
  }

  handleCloseReq(event) {
    this.setState({ openReq: false })
  };

  handleClosePhoto(event) {
    this.setState({ openPhoto: false })
  };

  handleCloseAvatar(event) {
    this.setState({ openAvatar: false })
  };

  handleCloseTrace(event) {
      this.setState({ openTrace: false })
  };

  preventDefault(event) {
    event.preventDefault();
  }

  componentDidUpdate(prevProps){
    if(this.props != prevProps){
      console.log(this.props.attendance_id)
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"attendance_id": this.props.attendance_id}),
      };
      fetch('http://localhost:3030/showRequests', requestOptions)
        .then(async response => {
          const data = await response.json();
          if (!response.ok) {
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
          }
          const maghadir = data.map(l => Object.assign({}, l))
          this.setState({rows: maghadir})
        })
        .catch(error => {
          this.setState({ errorMessage: error.toString() });
          console.error('There was an error!', error);
        });}
  }
  
  render() {
    const { classes } = this.props;
    const requestsRows = []
    console.log(this.state.rows)
    // console.log(this.state.rows[0].request_type_matn)
    for(var j = 0 ; j < this.state.rows.length; j++){
      requestsRows.push(
        this.createRequestsData(j, this.state.rows[j].request_date, this.state.rows[j].request_type_matn, this.state.rows[j].request_status_matn, this.state.rows[j].request_comment, this.state.rows[j].request_type),
      );
    }
    return (
      <React.Fragment>
        <Dialog
          open={this.props.openReq}
          onClose={this.props.onClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <Table size="small">

              <TableHead>
                <TableRow>
                  <TableCell className={classes.font} style={{ textAlign: 'center', fontWeight: 'bold' }}>ردیف</TableCell>
                  <TableCell className={classes.font} style={{ textAlign: 'center', fontWeight: 'bold' }}>تاریخ درخواست</TableCell>
                  <TableCell className={classes.font} style={{ textAlign: 'center', fontWeight: 'bold' }}>عنوان درخواست</TableCell>
                  <TableCell className={classes.font} style={{ textAlign: 'center', fontWeight: 'bold' }}>شرح درخواست</TableCell>
                  <TableCell className={classes.font} style={{ textAlign: 'center', fontWeight: 'bold' }}>تایید / رد</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {requestsRows.map(row => (

                  <TableRow key={row.id}>

                    <TableCell className={classes.NumberFont} style={{ textAlign: 'center' }}>
                      {row.id + 1}
                    </TableCell>
                    <TableCell className={classes.NumberFont} style={{ textAlign: 'center' }}>
                      <Moment format="YYYY/MM/DD">
                        {row.reqDate}
                      </Moment>
                    </TableCell>
                    <TableCell className={classes.font} style={{ textAlign: 'center' }}>
                      {row.reqTitle}
                    </TableCell>
                    <TableCell className={classes.font} style={{ textAlign: 'center' }}>
                      {row.reqComment}
                    </TableCell>
                    <TableCell className={classes.font} style={{ textAlign: 'center' }}>
                        <CheckCircleOutlineOutlinedIcon color="action" fontSize="small" 
                          style={{ marginLeft: "10px", marginRight:"4px", cursor:"pointer" }}
                          onClick={this.handleClickChangeStatusOnTick(this.props.attendance_id, row.reqComment)}
                        />
                        <CancelOutlinedIcon color="disabled" fontSize="small" 
                          style={{ marginLeft: "10px", marginRight:"4px", cursor:"pointer" }}
                          onClick={this.handleClickChangeStatusOnCross(this.props.attendance_id, row.reqComment)}
                        />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>

            </Table>
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

export default withStyles(useStyles)(ShowRequests);



