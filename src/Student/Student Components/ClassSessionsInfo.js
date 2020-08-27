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
import Image from 'material-ui-image'
import ClassPhoto from "../../students-in-classroom.jpg";
import Avatar from "@material-ui/core/Avatar";
import Profile from "../../Profile.jpg";

import Demo from '../../Global Components/calendar'

// Generate Order Data

const useStyles = theme => ({
  NumberFont: {
    fontFamily: 'IranSansFaNum',
  },
  font: {
    fontFamily: 'Shabnam',
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
      meghdar: "2",
      status: 'حاضر',
    }

    this.state.rows.push(
      this.createData(0, '۲۲/۴/۱۳۹۹', this.state.status, this.state.meghdar+ " "+"درخواست بی‌پاسخ ", 'مشاهده عکس کلاس', 'مشاهده عکس دانشجو '),
      this.createData(1, '۲۵/۴/۱۳۹۹', 'حاضر', 'یک درخواست‌ بی‌پاسخ', 'مشاهده عکس کلاس', 'مشاهده عکس دانشجو'),
      this.createData(2, '۲۹/۴/۱۳۹۹', 'غایب', 'دو درخواست بی‌پاسخ‌', 'مشاهده عکس کلاس', 'مشاهده عکس دانشجو'),
    );

    this.handleClickOpenReq = this.handleClickOpenReq.bind(this);
    this.handleClickOpenPhoto = this.handleClickOpenPhoto.bind(this);
    this.handleClickOpenAvatar = this.handleClickOpenAvatar.bind(this);
    this.handleCloseReq = this.handleCloseReq.bind(this);
    this.handleClosePhoto = this.handleClosePhoto.bind(this);
    this.handleCloseAvatar = this.handleCloseAvatar.bind(this);
  }

  createData(id, date, status, requests, classPhoto, StuPhoto) {
    return { id, date, status, requests, classPhoto, StuPhoto };
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

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Title style={{ textAlign: 'center', alignItems: 'center' }}>{this.props.data}</Title>
        <Table size="small">
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
            {this.state.rows.map(row => (
              <TableRow key={row.id}>
                <TableCell className={classes.NumberFont} style={{ textAlign: 'center' }}>{row.id + 1}</TableCell>

                <TableCell className={classes.font} style={{ textAlign: 'center' }}>{row.date}</TableCell>

                <TableCell className={classes.font} style={{ textAlign: 'center' }}>
                  <div style={{ display: "flex", flexDirection:"row", alignItems: "center", justifyContent: "center"}}>
                    {row.status}
                    <CheckCircleOutlineOutlinedIcon color="action" fontSize="small" 
                      style={{ marginLeft: "10px", marginRight:"10px", cursor:"pointer" }}
                    />
                    <CancelOutlinedIcon color="disabled" fontSize="small"
                     style={{ marginLeft: "10px", marginRight:"4px", cursor:"pointer" }}
                     onClick={this.handleClickOpenReq}
                    />
                    <Dialog
                      open={this.state.openReq}
                      onClose={this.handleCloseReq}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description" style={{ fontFamily: "Shabnam" }}>
                          "هیچ درخواستی ثبت نشده"
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={this.handleCloseReq} color="primary" autoFocus style={{ fontFamily: "Shabnam" }}>
                          بستن
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </div>
                </TableCell>

                <TableCell className={classes.font} style={{ textAlign: 'center'}}>
                  <div style={{ display: "flex", flexDirection:"row", alignItems: "center", justifyContent: "center"}}>
                    <Button style={{ cursor: 'pointer', fontFamily: 'Shabnam' }} onClick={this.handleClickOpenReq}>{row.requests}</Button>
                    <Dialog
                      open={this.state.openReq}
                      onClose={this.handleCloseReq}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description" style={{ fontFamily: "Shabnam" }}>
                          "هیچ درخواستی ثبت نشده"
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={this.handleCloseReq} color="primary" autoFocus style={{ fontFamily: "Shabnam" }}>
                          بستن
                        </Button>
                      </DialogActions>
                    </Dialog>
                    <CheckCircleOutlineOutlinedIcon color="action" fontSize="small" 
                      style={{ marginLeft: "10px", marginRight:"4px", cursor:"pointer" }}
                    />
                    <CancelOutlinedIcon color="disabled" fontSize="small" 
                      style={{ marginLeft: "10px", marginRight:"4px", cursor:"pointer" }}
                    />
                  </div>
                  </TableCell>

                <TableCell className={classes.font} style={{ textAlign: 'center' }}>
                  <Image src={ClassPhoto} onClick={this.handleClickOpenPhoto} style={{ cursor: 'pointer'}}/>
                  <Dialog
                    open={this.state.openPhoto}
                    onClose={this.handleClosePhoto}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogContent style={{width: '500px'}}>
                      <Image src={ClassPhoto} />
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={this.handleClosePhoto} color="primary" autoFocus style={{ fontFamily: "Shabnam" }}>
                        بستن
                      </Button>
                    </DialogActions>
                  </Dialog>
                </TableCell>

                <TableCell className={classes.font} style={{ textAlign: 'center', justifyContent: 'center'}}>
                  <Avatar
                    alt="Mohammad Rezaei"
                    src={Profile}
                    className={classes.large}
                    onClick={this.handleClickOpenAvatar}
                    style={{ cursor: 'pointer', alignSelf: 'center', justifyContent: 'center', marginRight: '35%'}}
								  />
                  <Dialog
                    open={this.state.openAvatar}
                    onClose={this.handleCloseAvatar}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogContent style={{width: '500px'}}>
                      <Image src={Profile} />
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={this.handleCloseAvatar} color="primary" autoFocus style={{ fontFamily: "Shabnam" }}>
                        بستن
                      </Button>
                    </DialogActions>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(StudentAbsenseInfo);