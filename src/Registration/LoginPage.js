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
import { withStyles } from '@material-ui/core/styles'

import {Link} from 'react-router-dom';

// import { Link as RouterLink } from 'react-router-dom';
// import Link from '@material-ui/core/Link';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const useStyles = theme => ({
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
});

class SignIn extends React.Component {

    userData;

    constructor (props) {
        super(props);
        this.state={
            username: '',
            password: ''
        }
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }
    
    handleUserNameChange(event) {
        console.log(this.state)
        this.setState({username: event.target.value})
    }
    handlePasswordChange(event) {
        this.setState({password: event.target.value})
        console.log(this.state)
    }
    

    render() {
        const { classes } = this.props
        return (
            <div>
                <TopHeader />
                <StylesProvider jss={jss}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" className={classes.font}>
                        ورود
                    </Typography>

                    <Card className={classes.card}>
                        <CardContent className={classes.cardCont}>
                            <Typography component="h1" variant="h6" className={classes.font} style={{paddingTop: '12px', fontSize: '18px', fontWeight: 'bold'}}>
                                این سامانه در راستای کمک به فرآیند حضور و غیاب دانشجویان طراحی گردیده و با استفاده از امکاناتی که در آن وجود دارد دانشجو می‌تواند وضعیت حضور و غیاب خود را مشاهده و درصورت نیازاصلاح نماید. 
                                همچنین اساتید گرامی می‌توانند وضعیت حضور و غیاب دانشجویان در هرجلسه و درخواست‌های ایشان مبنی بر اصلاح وضعیت حضورشان را مشاهده نمایند. 
                            </Typography>
                        </CardContent>
                    </Card>

                    <form className={classes.form} noValidate>
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
                        onChange={this.handleUserNameChange}
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
                        onChange={this.handlePasswordChange}
                        />
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <Link to={{
                                    pathname:"/StuDashboard",
                                    data: localStorage.setItem('username', this.state.username)
                                    }}
                                style={{textDecoration: 'none'}}>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit && classes.font}
                                    >
                                        ورود دانشجویان
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid item xs={6}>
                            <Link to={{
                                    pathname:"/MasDashboard",
                                    data: localStorage.setItem('username', this.state.username),
                                    }}
                                style={{textDecoration: 'none'}}>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit && classes.font}
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

export default withStyles(useStyles)(SignIn);