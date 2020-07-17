import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { pink, blue } from "@material-ui/core/colors";
import Container from '@material-ui/core/Container';
import { borderRight } from '@material-ui/system';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
// import { createMuiTheme } from '@material-ui/core/styles'
import TopHeader from './Login Components/LoginHeader';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import StuDashboard from "../Student/StudentDashboard.js"


import {Link} from 'react-router-dom';

// import { Link as RouterLink } from 'react-router-dom';
// import Link from '@material-ui/core/Link';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

class SignIn extends React.Component {
    constructor (props) {
        super(props);
        this.classes = makeStyles();
        this.state={
            username: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }
    
    makeStyles(theme) {
        return {
        font: {
          fontFamily: 'Shabnam',
        },
        paper: {
          marginTop: theme.spacing(8),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        avatar: {
          margin: theme.spacing(1),
          backgroundColor: theme.palette.secondary.main,
        },
        form: {
          width: '100%', // Fix IE 11 issue.
          marginTop: theme.spacing(1),
        },
        submit: {
          margin: theme.spacing(3, 0, 2),
        },
        cardCont: {
              display: "flex",
              flexDirection: "row",
              paddingBottom: "1px",
          },
          details: {
              fontFamily: "Shabnam",
              fontSize: 15,
              paddingLeft: "5%",
              fontWeight: "Bold",
          },
          card: {
              margin: "10px",
              minWidth: 150,
              width: '850px',
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: blue[100],
          },
      };
    };
    
    handleChange(event) {
        this.state = {username: event.target.value}
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <TopHeader />
                <StylesProvider jss={jss}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={this.classes.paper}>
                    <Avatar className={this.classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" className={this.classes.font}>
                        ورود
                    </Typography>

                    <Card className={this.classes.card}>
                        <CardContent className={this.classes.cardCont}>
                            <Typography component="h1" variant="h6" className={this.classes.font} style={{paddingTop: '12px', fontSize: '18px', fontWeight: 'bold'}}>
                                این سامانه در راستای کمک به فرآیند حضور و غیاب دانشجویان طراحی گردیده و با استفاده از امکاناتی که در آن وجود دارد دانشجو می‌تواند وضعیت حضور و غیاب خود را مشاهده و درصورت نیازاصلاح نماید. 
                                همچنین اساتید گرامی می‌توانند وضعیت حضور و غیاب دانشجویان در هرجلسه و درخواست‌های ایشان مبنی بر اصلاح وضعیت حضورشان را مشاهده نمایند. 
                            </Typography>
                        </CardContent>
                    </Card>

                    <form className={this.classes.form} noValidate>
                        <TextField
                        disableTypography
                        // variant="outlined"
                        margin="normal"
                        // required
                        fullWidth
                        id="email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        style={{direction: 'rtl'}}
                        anchor='right'
                        label={<Typography type="body2" style={{ fontFamily: 'Shabnam', textAlign: 'right'}}>آدرس ایمیل</Typography>}
                        onChange={this.handleChange}
                        />
                        <TextField
                        disableTypography
                        // variant="outlined"
                        margin="normal"
                        // required
                        fullWidth
                        name="password"
                        label={<Typography type="body2" style={{ fontFamily: 'Shabnam', textAlign: 'right'}}>پسورد</Typography>}
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        />
                        {/* <FormControlLabel
                        disableTypography
                        control={<Checkbox value="remember" color="primary" />}
                        label={<Typography type="body2" style={{ fontFamily: 'Shabnam', textAlign: 'right'}}>مرا به خاطرت نگه دار</Typography>}
                        /> */}
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <Link to={{
                                    pathname:"/StuDashboard",
                                    data: "mohammad"
                                    }} 
                                style={{textDecoration: 'none'}}>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={this.classes.submit && this.classes.font}
                                    >
                                        ورود دانشجویان
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid item xs={6}>
                                <Link to="MasDashboard" style={{textDecoration: 'none'}}>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={this.classes.submit && this.classes.font}
                                        >
                                        ورود اساتید
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                        
                    </form>
                    </div>
                </Container>      
            </StylesProvider>
            </div>
        );
    }
}

export default SignIn;