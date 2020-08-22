import React, { Component } from 'react';
// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../../Global Components/Title';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles'
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Demo from '../../Global Components/calendar'
// Generate Order Data


const useStyles = theme => ({
  font: {
    fontFamily: 'Shabnam',
  },
});

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameClass: this.createData.name_of_class,
      rows: [],
      open: false,
      Calendrows: []
    }

    // this.state.rows.push(
    //   this.createData(0, 'برنامه‌نویسی پیشرفته', 2, 'شنبه - دوشنبه'),
    // );

    this.createData = this.createData.bind(this);
    // this.changeClass = this.changeClass.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  createData(id, name_of_class, class_group, class_time) {
    return { id, name_of_class, class_group, class_time };
  }

  preventDefault(event) {
    event.preventDefault();
  }

  // changeClass(evenet) {
  //   console.log(this.state.rows[2])
  // }
  handleClickOpen(event) {
    this.setState({ open: true })
  }

  handleClose(event) {
    this.setState({ open: false })
  };

  render() {
    const { classes } = this.props;
    const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
    var i;
    for(i = 0; i < Object.values(this.props.data.course_titles).length; i++){
      this.state.rows.push(
        this.createData(i, this.props.data.course_titles[i], this.props.data.course_groups[i], this.props.data.course_days[i]),
      );
    }
    return (
      
      <React.Fragment>
        <Title style={{ textAlign: 'center' }}>کلاس‌های ترم جاری</Title>
        <Table size="large"> 
          <TableHead>
            <TableRow>
              <TableCell className={classes.font} style={{ textAlign: 'center' }}>ردیف</TableCell>
              <TableCell className={classes.font} style={{ textAlign: 'center' }}>نام کلاس</TableCell>
              <TableCell className={classes.font} style={{ textAlign: 'center' }}>گروه</TableCell>
              <TableCell className={classes.font} style={{ textAlign: 'center' }}>روز</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.rows.map(row => (
              <TableRow key={row.id}>
                <TableCell className={classes.font} style={{ textAlign: 'center', fontFamily: 'IranSansFaNum'}}>{row.id + 1}</TableCell>
                <TableCell className={classes.font} style={{ textAlign: 'center' }} onClick={this.changeClass}>
                  <Link style={{textDecoration: 'none', cursor:'pointer'}} to={{
                    pathname:"/StudentClasses",
                    data: [row.name_of_class, row.class_group]
                  }}>
                    {row.name_of_class}
                  </Link>
                </TableCell>
                <TableCell className={classes.font} style={{ textAlign: 'center', fontFamily: 'IranSansFaNum'}}>{row.class_group}</TableCell>
                <TableCell className={classes.font} style={{ textAlign: 'center' }}>{row.class_time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(Info);