import React from "react";
import clsx from "clsx";
import { fade, makeStyles } from '@material-ui/core/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import SchoolIcon from "@material-ui/icons/School";
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { pink , blue } from '@material-ui/core/colors';
import Profile from './Profile.jpg'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
// import Calendar from "react-material-ui-calendar";
import Info from './Info.js';


import InsertChartIcon from "@material-ui/icons/InsertChart";
import ScheduleIcon from "@material-ui/icons/Schedule";


const drawerWidth = 240;

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
    card: {
        margin:'7%',
        minWidth: 150,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: blue[100],
    },

    appBar: {
        zIndex: theme.zIndex.drawer + 1,
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
    search: {
      fontFamily: "Shabnam",
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      fontFamily: "Shabnam",
      color: 'inherit',
    },
    sidebar: {
        alignItems: 'center',
      justifyContent: 'center',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
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
        flexDirection: "column"
      },
      fixedHeight: {
        height: 240
      },
    appBarSpacer: theme.mixins.toolbar,
    contentt: {
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        paddingRight: theme.spacing(20),
    },
  }));

export default function Dashboard() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              محمد رضائی شریف آبادی
            </Typography>
            <div className={classes.search}>
              {/* <div className={classes.searchIcon}>
                <SearchIcon />
              </div> */}
              <InputBase
                placeholder="جستجو..."
                classes={{
                  fontFamily: "Shabnam",
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <PowerSettingsNewIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
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
          <Grid container spacing={5}>
            <Grid item xs={6}>
                <Card className={classes.card}>
                    <Paper className={classes.paper}>
                        <Info />
                    </Paper>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card className={classes.card}>
                    <Paper className={classes.paper}>
                        تقویم
                    </Paper>
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
