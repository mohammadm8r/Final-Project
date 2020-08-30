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
      rows: [],
    }

    this.createData = this.createData.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    
  }

  createData(id, name_of_class, class_group, class_time) {
    return { id, name_of_class, class_group, class_time };
  }

  preventDefault(event) {
    event.preventDefault();
  }

  handleClickOpen(event) {
    this.setState({ open: true })
  }

  handleClose(event) {
    this.setState({ open: false })
  };

  render() {
    const { classes } = this.props;
    const rows = []
    for(var i = 0; i < Object.values(this.props.data.course_titles).length; i++){
      rows.push(
        this.createData(i, this.props.data.course_titles[i], this.props.data.course_groups[i], this.props.data.course_days[i]),
      );
    }
    const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
    return (
      <React.Fragment>
        <Title style={{ textAlign: 'center' }}>کلاس‌های ترم جاری</Title>
        <Table style={{ height: "300px", maxHeight: "300px"}}> 
          <TableHead>
            <TableRow>
              <TableCell className={classes.font} style={{ textAlign: 'center' }}>ردیف</TableCell>
              <TableCell className={classes.font} style={{ textAlign: 'center' }}>نام کلاس</TableCell>
              <TableCell className={classes.font} style={{ textAlign: 'center' }}>گروه</TableCell>
              <TableCell className={classes.font} style={{ textAlign: 'center' }}>روز</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
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