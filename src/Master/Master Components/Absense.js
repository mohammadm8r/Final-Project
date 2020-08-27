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
      rows: [],
      requestsNum: 0,
    }

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

  createData(id, name, gheibatha, requests, kolRequests) {
    return { id, name, gheibatha, requests, kolRequests };
  }

  preventDefault(event) {
    event.preventDefault();
  }

  componentDidMount() {
    console.log(localStorage.getItem('student_id'))
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ "student_id": localStorage.getItem('student_id') }),
		};
		fetch('http://localhost:3030/requestsCount', requestOptions)
			.then(async response => {
				const data = await response.json();
				if (!response.ok) {
					const error = (data && data.message) || response.status;
					return Promise.reject(error);
        }
        console.log(data)
        // const maghadir = data.map(l => Object.assign({}, l))
        // console.log(maghadir)
        this.setState({requestsNum: data.count})
			})
			.catch(error => {
				this.setState({ errorMessage: error.toString() });
				console.error('There was an error!', error);
			});
  }

  render() {
    console.log(localStorage.getItem('student_id'))
    const { classes } = this.props;
    var i;
    const rows = []
    for(i = 0; i < this.props.data.names.length; i++){
      rows.push(
        this.createData(i, this.props.data.names[i].student_name +" "+ this.props.data.names[i].student_family, this.state.requestsNum, '-', '2'),
      );
    }
    return (
      <React.Fragment>
        <Title style={{ textAlign: 'center', alignItems: 'center' }}>تعداد جلسات برگزار شده: ۱۸</Title>
        <Table style={{ height: "200px", maxHeight: "300px"}}>
          <TableHead>
            <TableRow style={{ alignItems: 'center' }}>
              <TableCell className={classes.font} style={{ textAlign: 'center', fontWeight: 'bold' }}>ردیف</TableCell>
              <TableCell className={classes.font} style={{ textAlign: 'center', fontWeight: 'bold' }}>نام دانشجو</TableCell>
              <TableCell className={classes.font} style={{ textAlign: 'center', fontWeight: 'bold' }}>تعداد غیبت</TableCell>
              <TableCell className={classes.font} style={{ textAlign: 'center', fontWeight: 'bold' }}>تعداد درخواست‌های بی‌پاسخ</TableCell>
              <TableCell className={classes.font} style={{ textAlign: 'center', fontWeight: 'bold' }}>تعداد کل درخواست‌ها</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell className={classes.NumberFont} style={{ textAlign: 'center' }}>{row.id + 1}</TableCell>
                <TableCell className={classes.font} style={{ textAlign: 'center' }}>
                  <Link style={{textDecoration: 'none', cursor:'pointer'}} to={{pathname:"/StudentDetails" , data: row.name}}>
                    {row.name}
                  </Link>
                </TableCell>
                <TableCell className={classes.NumberFont} style={{ textAlign: 'center' }}>{row.gheibatha}</TableCell>
                <TableCell className={classes.NumberFont} style={{ textAlign: 'center' }}>{row.requests}</TableCell>
                <TableCell className={classes.NumberFont} style={{ textAlign: 'center' }}>{row.kolRequests}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(Absense);