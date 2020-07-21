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
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles'

// Generate Order Data


const useStyles = theme => ({
    font: {
        fontFamily: 'Shabnam',
      },
});

class Info extends React.Component {
  constructor (props) {
    super(props);
    this.state={
      nameClass: this.createData.name_of_class,
      rows: []
    }
    this.createData = this.createData.bind(this);
    this.changeClass = this.changeClass.bind(this);
  }

  createData(id, num_of_absense, num_of_classes, name_of_class, code_of_class) {
    return { id, num_of_absense, num_of_classes, name_of_class, code_of_class};
  }

  preventDefault(event) {
    event.preventDefault();
  }
  
  changeClass(evenet) {
    console.log(this.state.rows[2])
  }

  render(){
    const { classes } = this.props;
    const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
    this.state.rows.push(
      this.createData(0, '2', '10', 'مبانی برنامه نویسی', '3102110'),
      this.createData(1, '3', '5', 'اندیشه ۱', '1200110'),
      this.createData(3, '2', '10', 'فیزیک ۲', '1203212'),
      this.createData(4, '2', '10', 'فیزیک ۲', '1203212'),
      this.createData(5, '2', '10', 'فیزیک ۲', '1203212'),
    );
    return (
      <React.Fragment>
        <Title style={{ textAlign: 'center' }}>کلاس‌های ترم جاری</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell className={classes.font} style={{ textAlign: 'center' }}>کد درس</TableCell>
              <TableCell className={classes.font} style={{ textAlign: 'center' }}>نام کلاس</TableCell>
              <TableCell className={classes.font} style={{ textAlign: 'center' }}>تعداد جلسات برگزار شده</TableCell>
              <TableCell className={classes.font} style={{ textAlign: 'center' }}>تعداد غیبت</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.rows.map(row => (
              <TableRow key={row.id}>
                <TableCell className={classes.font} style={{ textAlign: 'center' }}>{row.code_of_class}</TableCell>
                <TableCell className={classes.font} style={{ textAlign: 'center' }} onClick={this.changeClass}><Link style={{textDecoration: 'none', cursor:'pointer'}} to={{pathname:"/MasClasses" , data: this.state.nameClass}}>{row.name_of_class}</Link></TableCell>
                <TableCell className={classes.font} style={{ textAlign: 'center' }}>{row.num_of_classes}</TableCell>
                <TableCell className={classes.font} style={{ textAlign: 'center' }}>{row.num_of_absense}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(Info);