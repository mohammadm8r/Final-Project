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
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import Image from 'material-ui-image'
import ClassPhoto from "../../students-in-classroom.jpg";
import Avatar from "@material-ui/core/Avatar";
import Profile from "../../Profile.jpg";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';  
import Moment from 'react-moment';
import 'moment-timezone';
import Demo from '../../Global Components/calendar'
import ShowRequests from './ShowRequests'
import ShowSessionPhoto from './ShowSessionPhoto'
import ShowStudentPhoto from './showStudentPhoto'

// Generate Order Data

const useStyles = theme => ({
  NumberFont: {
    fontFamily: 'IranSansFaNum',
  },
  font: {
    fontFamily: 'Shabnam',
  },
  tableExcel: {
    fontFamily: 'Shabnam',
    width: '55px',
    alignItems: "center",
    
  },
});

class StudentAbsenseInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openReq: false,
      openPhoto: false,
      openAvatar: false,
      rows: [],
      selected_row: {},
      showOnClickTicked: false,
      showOnClickCrossed: false,
      selectedTick: {},
      selectedCross: {},
      numOfRequests: Array(this.props.data.names.length),
    }

    

    this.handleClickOpenReq = this.handleClickOpenReq.bind(this);
    this.handleClickOpenPhoto = this.handleClickOpenPhoto.bind(this);
    this.handleClickOpenAvatar = this.handleClickOpenAvatar.bind(this);
    this.handleCloseReq = this.handleCloseReq.bind(this);
    this.handleClosePhoto = this.handleClosePhoto.bind(this);
    this.handleCloseAvatar = this.handleCloseAvatar.bind(this);
    this.handleClickChangeStatusOnTick = this.handleClickChangeStatusOnTick.bind(this);
    this.handleClickChangeStatusOnCross = this.handleClickChangeStatusOnCross.bind(this);
  }

  createData(id, date, status, requests, classPhoto, StuPhoto, attendance_id, session_id) {
    return { id, date, status, requests, classPhoto, StuPhoto, attendance_id, session_id };
  }
  createRequestsData(id, reqDate, reqTitle, reqStatus) {
    return { id, reqDate, reqTitle, reqStatus };
  }
  
  handleClickOpenReq(selected_row) {
    function selectRow(){
      this.setState({ openReq: true, selected_row: selected_row})
    };
    selectRow = selectRow.bind(this);
    return selectRow
  }

  handleClickChangeStatusOnTick(attendance_id, attendance_status) {
    let attendance_new_status = 0
    switch(attendance_status){
      case 'حاضر':
        attendance_new_status = 2
        break;
      case 'غایب':
        attendance_new_status = 5
        break;
      default:
        attendance_new_status = 0
    }
    return () => {
      console.log({attendance_id})
      this.setState({selectedTick: {attendance_id: attendance_id, showOnClickTicked: !this.state.showOnClickTicked}})
      this.props.handleChange(attendance_id, attendance_new_status)
    }
  }

  handleClickChangeStatusOnCross(attendance_id, attendance_status) {
    let attendance_new_status = 0
    switch(attendance_status){
      case 'حاضر':
        attendance_new_status = 6
        break;
      case 'غایب':
        attendance_new_status = 3
        break;
      default:
        attendance_new_status = 0
    }
    return () => {
      console.log({attendance_id})
      this.setState({selectedCross: {attendance_id: attendance_id, showOnClickCrossed: !this.state.showOnClickCrossed}})
      this.props.handleChange(attendance_id, attendance_new_status)
    }
  }

  handleClickOpenPhoto(selected_row) {
    function selectRow(){
      this.setState({ openPhoto: true, selected_row: selected_row})
    };
    selectRow = selectRow.bind(this);
    return selectRow
  }

  handleClickOpenAvatar(selected_row) {
    function selectRow(){
      this.setState({ openAvatar: true, selected_row: selected_row})
    };
    selectRow = selectRow.bind(this);
    return selectRow
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

  preventDefault(event) {
    event.preventDefault();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.data.names.length == this.props.data.names.length)
      return
    for(let i = 0; i < this.props.data.names.length; i++){
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "attendance_id": this.props.data.names[i].attendance_id }),
      };
        fetch('http://localhost:3030/eachSessionRequestUnread', requestOptions)
        .then(async response => {
          const data = await response.json();
          if (!response.ok) {
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
          }
          console.log(data.count)
          this.setState(
            (prevState) => {
              prevState.numOfRequests[i] = data.count
              return {numOfRequests: [...prevState.numOfRequests]}
            }
          )
        })
        .catch(error => {
          this.setState({ errorMessage: error.toString() });
          console.error('There was an error!', error);
        });
    }
  }
  render() {
    const { classes } = this.props;
    const rows = [];
    const requestsRows = [];
    console.log(this.props.data.names)

    for(var i = 0 ; i < this.props.data.names.length; i++){
      rows.push(
        this.createData(i, this.props.data.names[i].session_date, this.props.data.names[i].attendance_matn, this.state.numOfRequests[i]+' '+'درخواست بی‌پاسخ', 'مشاهده عکس کلاس', 'مشاهده عکس دانشجو', this.props.data.names[i].attendance_id, this.props.data.names[i].session_id),
      );
    }

    return (
      <React.Fragment>
        <Title style={{ textAlign: 'center', alignItems: 'center' }}>{localStorage.getItem('student_name')}</Title>
        <Table size='small' id="emp">
          <TableHead>
            <TableRow style={{ alignItems: 'center' }}>
              <TableCell className={classes.font} style={{ textAlign: 'center', fontWeight: 'bold' }}>ردیف</TableCell>
              <TableCell className={classes.font} style={{ textAlign: 'center', fontWeight: 'bold' }}>تاریخ</TableCell>
              <TableCell className={classes.font} style={{ textAlign: 'center', fontWeight: 'bold' }}>وضعیت حضور</TableCell>
              <TableCell className={classes.font} style={{ textAlign: 'center', fontWeight: 'bold' }}>درخواست‌ها</TableCell>
              <TableCell className={classes.font} style={{ textAlign: 'center', fontWeight: 'bold' }}>عکس کلاس</TableCell>
              <TableCell className={classes.font} style={{ textAlign: 'center', fontWeight: 'bold' }}>عکس دانشجو</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell className={classes.NumberFont} style={{ textAlign: 'center' }}>{row.id + 1}</TableCell>

                <TableCell className={classes.NumberFont} style={{ textAlign: 'center' }}>
                  <Moment format="YYYY/MM/DD">
                    {row.date}
                  </Moment>
                </TableCell>

                <TableCell className={classes.font} style={{ textAlign: 'center' }}>
                  <div style={{ display: "flex", flexDirection:"row", alignItems: "center", justifyContent: "center"}}>
                    {row.status}
                    <btn onClick={this.handleClickChangeStatusOnTick(row.attendance_id, row.status)}>
                      {
                        (this.state.selectedTick.attendance_id == row.attendance_id && this.state.selectedTick.showOnClickTicked)
                        ? <CheckCircleIcon color="action" fontSize="small" style={{ marginLeft: "10px", marginRight:"10px", cursor:"pointer" }} />
                        : <CheckCircleOutlineOutlinedIcon color="action" fontSize="small" style={{ marginLeft: "10px", marginRight:"10px", cursor:"pointer" }}/>
                      }
                    </btn>
                    <btn id="cancleButton" onClick={this.handleClickChangeStatusOnCross(row.attendance_id, row.status)}>
                      {
                        (this.state.selectedCross.attendance_id == row.attendance_id && this.state.selectedCross.showOnClickCrossed)
                        ? <CancelIcon color="action" fontSize="small" style={{ marginLeft: "10px", marginRight:"10px", cursor:"pointer" }} />
                        : <CancelOutlinedIcon color="disabled" fontSize="small" style={{ marginLeft: "10px", marginRight:"4px", cursor:"pointer" }} />
                      }
                    </btn>
                  </div>
                </TableCell>

                <TableCell className={classes.NumberFont} style={{ textAlign: 'center'}}>
                    <Button style={{ cursor: 'pointer', fontFamily: 'Shabnam' }} onClick={this.handleClickOpenReq({attendance_id: row.attendance_id, attendance_status: row.status})}>{row.requests}</Button>
                </TableCell>

                <TableCell className={classes.font} style={{ textAlign: 'center' }}>
                  <Image src={ClassPhoto} onClick={this.handleClickOpenPhoto({session_id: row.session_id})} style={{ cursor: 'pointer'}}/>
                </TableCell>

                <TableCell className={classes.font} style={{ textAlign: 'center', justifyContent: 'center'}}>
                  <Avatar
                    alt="Mohammad Rezaei"
                    src={Profile}
                    className={classes.large}
                    onClick={this.handleClickOpenAvatar({session_id: row.session_id, student_id: row.student_id})}
                    style={{ cursor: 'pointer', alignSelf: 'center', justifyContent: 'center', marginRight: '35%'}}
								  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <ReactHTMLTableToExcel 
          className = {classes.tableExcel}
          table = "emp"
          filename = "ReportExcel"
          sheet = "Sheet"
          buttonText = "خروجی"
        />
        <ShowRequests
          attendance_id={this.state.selected_row.attendance_id}
          attendance_status={this.state.selected_row.attendance_status}
          openReq={this.state.openReq}
          onClose={this.handleCloseReq}
          changeRequestFunc={this.props.changeRequestFunc}
        />
        <ShowSessionPhoto
          session_id={this.state.selected_row.session_id}
          openPhoto={this.state.openPhoto}
          onClose={this.handleClosePhoto}
        />
        <ShowStudentPhoto
          session_id={this.state.selected_row.session_id}
          student_id={this.state.selected_row.student_id}
          openAvatar={this.state.openAvatar}
          onClose={this.handleCloseAvatar}
        />
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(StudentAbsenseInfo);