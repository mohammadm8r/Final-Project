import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
// import { mainListItems } from './listItems';
import Absense from './Absense';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { withStyles } from '@material-ui/core/styles'
// import Header from "./components/header";
import SideBar from "./MasDrawer";
import ClassesHeader from './ClassesHeader'
import StudentAbsenseInfo from './StudentAbsenseInfo'


import Demo from '../../Global Components/calendar'
const drawerWidth = 240;

// Generate Order Data

const useStyles = theme => ({
    font: {
      fontFamily: 'Shabnam',
    },
    mainList: {
      fontFamily: 'Shabnam',
      marginTop: '4rem',
    },
    root: {
      display: 'flex',
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      fontFamily: 'Shabnam',
      flexGrow: 1,
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
    depositContext: {
      flex: 1,
    },
    size: {
      width:'25%',
      height: 'auto',
    },
  });

class StudentDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          names: [],
          showOnClickTicked: false,
        }
        if(this.props.location.data){
          localStorage.setItem('student_name', this.props.location.data)
        }
        this.changeStatus = this.changeStatus.bind(this);
        this.changeRequest = this.changeRequest.bind(this);
      }

      componentDidMount() {
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ "username": localStorage.getItem('student_name'), "course_title": localStorage.getItem('course_title'), "course_group": localStorage.getItem('course_group')}),
        };
        fetch('http://localhost:3030/studentSessions', requestOptions)
          .then(async response => {
            const data = await response.json();
            console.log(data)
            if (!response.ok) {
              const error = (data && data.message) || response.status;
              return Promise.reject(error);
            }
            const maghadir = data.map(l => Object.assign({}, l))
            this.setState({names: maghadir})
          })
          .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
          });
      }

      changeStatus(attendance_id, attendance_new_status){
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ "attendance_id": attendance_id, "attendance_new_status": attendance_new_status}),
        };
        fetch('http://localhost:3030/updateAttendance/change', requestOptions)
          .then(async response => {
            const data = await response.json();
            console.log({data})
            if (!response.ok) {
              const error = (data && data.message) || response.status;
              return Promise.reject(error);
            }
          })
          .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
          });
          
          const updateOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "username": localStorage.getItem('student_name'), "course_title": localStorage.getItem('course_title'), "course_group": localStorage.getItem('course_group')}),
          };
          fetch('http://localhost:3030/studentSessions', updateOptions)
          .then(async response => {
            const data = await response.json();
            console.log(data)
            if (!response.ok) {
              const error = (data && data.message) || response.status;
              return Promise.reject(error);
            }
            const maghadir = data.map(l => Object.assign({}, l))
            this.setState({names: maghadir})
          })
          .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
          });
      }

      changeRequest(attendance_id, attendance_new_status, request_new_status){
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ "attendance_id": attendance_id, "attendance_new_status": attendance_new_status, "request_status": request_new_status}),
        };
        fetch('http://localhost:3030/updateRequest/change', requestOptions)
          .then(async response => {
            const data = await response.json();
            console.log({data})
            if (!response.ok) {
              const error = (data && data.message) || response.status;
              return Promise.reject(error);
            }
          })
          .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
          });
          
          const updateOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "username": localStorage.getItem('student_name'), "course_title": localStorage.getItem('course_title'), "course_group": localStorage.getItem('course_group')}),
          };
          fetch('http://localhost:3030/studentSessions', updateOptions)
          .then(async response => {
            const data = await response.json();
            console.log(data)
            if (!response.ok) {
              const error = (data && data.message) || response.status;
              return Promise.reject(error);
            }
            const maghadir = data.map(l => Object.assign({}, l))
            this.setState({names: maghadir})
          })
          .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
          });
      }

      render(){
        console.log(this.props.location)
        const {classes} = this.props;
        const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
      
        return (
          <div className={classes.root}>
            <CssBaseline />
            <ClassesHeader />
            {/* <SideBar /> */}
            <main className={classes.content}>
              <div className={classes.appBarSpacer} />
              <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      <StudentAbsenseInfo showOnClickTicked={this.state.showOnClickTicked} handleChange={this.changeStatus} changeRequestFunc={this.changeRequest} data={this.state}/>
                    </Paper>
                  </Grid>
                </Grid>
              </Container>
            </main>
          </div>
        );
  }
}

export default withStyles(useStyles)(StudentDetails);