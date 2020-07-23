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

  createData(id, name_of_class, code_of_class) {
    return { id, name_of_class, code_of_class};
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
      this.createData(0, 'مبانی برنامه نویسی', '3102110'),
      this.createData(1, 'اندیشه ۱', '1200110'),
      this.createData(3, 'فیزیک ۲', '1203212'),
      this.createData(4, 'فیزیک ۲', '1203212'),
      this.createData(5, 'فیزیک ۲', '1203212'),
    );
    return (
      <React.Fragment>
        <Title style={{ textAlign: 'center' }}>کلاس‌های ترم جاری</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell className={classes.font} style={{ textAlign: 'center' }}>کد درس</TableCell>
              <TableCell className={classes.font} style={{ textAlign: 'center' }}>نام کلاس</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.rows.map(row => (
              <TableRow key={row.id}>
                <TableCell className={classes.font} style={{ textAlign: 'center' }}>{row.code_of_class}</TableCell>
                <TableCell className={classes.font} style={{ textAlign: 'center' }} onClick={this.changeClass}><Link style={{textDecoration: 'none', cursor:'pointer'}} to={{pathname:"/MasClasses" , data: this.state.nameClass}}>{row.name_of_class}</Link></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(Info);