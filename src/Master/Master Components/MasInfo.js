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
import ReactLoading from 'react-loading';
import '../../App.css';
import { blue } from '@material-ui/core/colors';
// import { PersianNumber } from 'react-persian';


// Generate Order Data


const useStyles = theme => ({
    NumberFont: {
        fontFamily: 'IranSansFaNum',
      },
    font: {
      fontFamily: 'Shabnam',
    },
});

class Info extends React.Component {
  constructor (props) {
    super(props);
    this.state={
      rows: [],
      nameOfClass: ''
    }
    
    this.createData = this.createData.bind(this);
    this.changeClass = this.changeClass.bind(this);
  }

  createData(id, name_of_class, group, day) {
    return { id, name_of_class, group, day };
  }

  changeClass(e){
    this.setState({nameOfClass: e.target.value})
  }

  preventDefault(event) {
    event.preventDefault();
  }

  
  render(){
    var i;
    const kooft = []
    for(i = 0; i < Object.values(this.props.data.course_titles).length; i++){
      kooft.push(
        this.createData(i, this.props.data.course_titles[i], this.props.data.course_groups[i], this.props.data.course_days[i]),
      );
    }
    const { classes } = this.props;
    const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
    return (
      <React.Fragment>
        <Title style={{ textAlign: 'center' }}>کلاس‌های ترم جاری</Title>
        <Table style={{ height: "300px", maxHeight: "300px"}}>
          <TableHead>
            <TableRow>
            <TableCell className={classes.font} style={{ textAlign: 'center' }}>ردیف</TableCell>
              <TableCell className={classes.font} style={{ textAlign: 'center' }}>نام درس</TableCell>
              <TableCell className={classes.font} style={{ textAlign: 'center' }}>گروه</TableCell>
              <TableCell className={classes.font} style={{ textAlign: 'center' }}>روز</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {kooft.map(row => (
              <TableRow key={row.id} rowNumber = {row.id}>
                <TableCell className={classes.NumberFont} style={{ textAlign: 'center' }}> {row.id + 1} </TableCell>
                <TableCell className={classes.font} style={{ textAlign: 'center' }} onClick={this.changeClass}>
                  <Link style={{textDecoration: 'none', cursor:'pointer'}} to={{
                    pathname:"/MasClasses",
                    data: [row.name_of_class, row.group]
                  }}>
                    {row.name_of_class}
                  </Link>
                </TableCell>
                <TableCell className={classes.NumberFont} style={{ textAlign: 'center' }}> {row.group} </TableCell>
                <TableCell className={classes.font} style={{ textAlign: 'center' }}>{row.day}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(Info);