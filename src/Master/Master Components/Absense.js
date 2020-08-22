import React from 'react';
// import Link from '@material-ui/core/Link';
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
// import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
// import { withStyles } from '@material-ui/core/styles'
import '../../App.css';
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

class Absense extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openReq: false,
      openCal: false,
      rows: []
    }

    this.state.rows.push(
      this.createData(0, 'محمد رضائی', '۲', '-', 'مشاهده تقویم'),
      this.createData(1, 'رضا قیداری', '۴', '۲', 'مشاهده تقویم'),
      this.createData(2, 'علی جعفری', '-', '-', 'مشاهده تقویم'),
    );

    this.handleClickOpenReq = this.handleClickOpenReq.bind(this);
    this.handleClickOpenCal = this.handleClickOpenCal.bind(this);
    this.handleCloseReq = this.handleCloseReq.bind(this);
    this.handleCloseCal = this.handleCloseCal.bind(this);
  }

  handleClickOpenReq(event) {
    this.setState({ openReq: true })
  }

  handleClickOpenCal(event) {
    this.setState({ openCal: true })
  }

  handleCloseReq(event) {
    this.setState({ openReq: false })
  };

  handleCloseCal(event) {
    this.setState({ openCal: false })
  };

  createData(id, name, gheibatha, requests, taghvim) {
    return { id, name, gheibatha, requests, taghvim };
  }

  preventDefault(event) {
    event.preventDefault();
  }

  render() {
    const { classes } = this.props;
    var i;
    for(i = 0; i < Object.values(this.props.data.names).length; i++){
      this.state.rows.push(
        this.createData(i, this.props.data.names[i], this.props.data.familyes[i], '2', '-', 'مشاهده تقویم'),
      );
    }
    return (
      <React.Fragment>
        <Title style={{ textAlign: 'center', alignItems: 'center' }}>تعداد جلسات برگزار شده: ۱۸</Title>
        <Table size="small">
          <TableHead>
            <TableRow style={{ alignItems: 'center' }}>
              <TableCell className={classes.font} style={{ textAlign: 'center', fontWeight: 'bold' }}>ردیف</TableCell>
              <TableCell className={classes.font} style={{ textAlign: 'center', fontWeight: 'bold' }}>نام دانشجو</TableCell>
              <TableCell className={classes.font} style={{ textAlign: 'center', fontWeight: 'bold' }}>تعداد غیبت</TableCell>
              <TableCell className={classes.font} style={{ textAlign: 'center', fontWeight: 'bold' }}>تعداد درخواست‌های بی‌پاسخ</TableCell>
              <TableCell className={classes.font} style={{ textAlign: 'center', fontWeight: 'bold' }}>مشاهده غیبت‌ها روی تقویم</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.rows.map(row => (
              <TableRow key={row.id}>
                <TableCell className={classes.NumberFont} style={{ textAlign: 'center' }}>{row.id + 1}</TableCell>
                <TableCell className={classes.font} style={{ textAlign: 'center' }}>
                  <Link style={{textDecoration: 'none', cursor:'pointer'}} to={{pathname:"/StudentDetails" , data: row.name}}>
                    {row.name}
                  </Link>
                </TableCell>
                <TableCell className={classes.font} style={{ textAlign: 'center' }}>{row.gheibatha}</TableCell>
                {/* <TableCell className={classes.font} style={{ textAlign: 'center' }}>
                  <Button style={{ cursor: 'pointer', fontFamily: 'Shabnam' }} onClick={this.handleClickOpenReq}>{row.status}</Button>
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
                </TableCell> */}
                <TableCell className={classes.font} style={{ textAlign: 'center' }}>{row.requests}</TableCell>
                <TableCell className={classes.font} style={{ textAlign: 'center' }}>
                  <Button style={{ cursor: 'pointer', fontFamily: 'Shabnam' }} onClick={this.handleClickOpenCal}>{row.taghvim}</Button>
                  <Dialog
                    open={this.state.openCal}
                    onClose={this.handleCloseCal}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description" style={{ fontFamily: "Shabnam" }}>
                        <Demo />
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={this.handleCloseCal} color="primary" autoFocus style={{ fontFamily: "Shabnam" }}>
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

export default withStyles(useStyles)(Absense);