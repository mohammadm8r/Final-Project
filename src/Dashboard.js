import React , { useState } from "react";
import clsx from "clsx";
import { fade, makeStyles } from '@material-ui/core/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import PrimarySearchAppBar from "./AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { pink , blue } from '@material-ui/core/colors';
import Profile from './Profile.jpg'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
// import Calendar from "react-material-ui-calendar";
import Info from './Info.js';
// import { useStaticState, ClockView, Calendar } from "@material-ui/pickers";
import Calendar from 'rc-calendar';

import InsertChartIcon from "@material-ui/icons/InsertChart";
import ScheduleIcon from "@material-ui/icons/Schedule";


const drawerWidth = 240;

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
    card: {
        margin:'10px',
        minWidth: 150,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: blue[100],
    },
    infoCard: {
        margin:'10px',
        minWidth: 150,
        width: "500px",
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '20px',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      fontFamily: "Shabnam",
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    sidebar: {
        alignItems: 'center',
      justifyContent: 'center',
    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        color: theme.palette.getContrastText(pink[500]),
        backgroundColor: pink[500],
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      pos: {
        fontFamily: "Shabnam",
        alignItems: 'center', 
        justifyContent: 'center',
      },
      cardCont: {
          display: 'flex',
          flexDirection: 'row',
          paddingBottom: '1px',

      },
      details: {
          fontFamily: "Shabnam",
          fontSize: 15,
          paddingLeft: '5%',
          fontWeight: 'Bold',
      },
      paper: {
        padding: theme.spacing(2),
        display: "flex",
        overflow: "auto",
        flexDirection: "column",
      },
      fixedHeight: {
        height: 240
      },
    contentt: {
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        paddingRight: theme.spacing(30),
        // paddingLeft: theme.spacing(30),
    },
  }));

export default function Dashboard() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


//   const [value, handleDateChange] = useState(new Date());
//   const { pickerProps, wrapperProps } = useStaticState({
//     value,
//     onChange: handleDateChange,
//   });

  return (
    <div className={classes.root}>
      <CssBaseline />
        <PrimarySearchAppBar />
        <StylesProvider jss={jss}>
            <Drawer
                anchor='right'
                className={classes.drawer}
                variant="permanent"
                classes={{
                paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                <List>
                    <ListItem className={classes.sidebar}>
                        <ListItemIcon><Avatar alt="Mohammad Rezaei" src={Profile} className={classes.large} /></ListItemIcon>
                    </ListItem>
                </List>
                </div>
                <Divider />
                <Card className={classes.card}>
                    <CardContent className={classes.cardCont}>
                        <Typography variant="h5" component="h2" className={classes.details}>
                        شماره دانشجویی:
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        ۹۴۳۱۰۴۰
                        </Typography>
                    </CardContent>
                    <CardContent className={classes.cardCont}>
                        <Typography variant="h5" component="h2" className={classes.details}>
                        نیمسال:
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        دوم-۹۸
                        </Typography>
                    </CardContent>
                    <CardContent className={classes.cardCont}>
                        <Typography variant="h5" component="h2" className={classes.details}>
                        تعداد واحد این ترم:
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        ۱۸
                        </Typography>
                    </CardContent>
                    <CardActions dir="ltr">
                        <Button size="small" className={classes.pos}>...اطلاعات بیشتر</Button>
                    </CardActions>
                </Card>
            </Drawer>
        </StylesProvider>
        
      <main className={classes.contentt}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
                <Card className={classes.infoCard}>
                    <Paper className={classes.paper}>
                        <Info />
                    </Paper>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card className={classes.infoCard}>

                    {/* <Paper style={{ overflow: "hidden" }}>
                        <Calendar {...pickerProps} />
                    </Paper> */}
                </Card>
            </Grid>
            {/* <Calendar 
            generalStyle={{
                maxWidth: "100%",
                margin: "0 auto",
                backgroundColor: "rgba(0,0,0,1)",
                height: "100%",
                overflow: "auto"
              }}
              /> */}
          </Grid>
        </Container>
      </main>
    </div>
  );
}
