import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { pink, blue } from "@material-ui/core/colors";
import Profile from "../Profile.jpg";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const drawerWidth = 240;


const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const useStyles = makeStyles((theme) => ({
	card: {
		margin: "10px",
		minWidth: 150,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: blue[100],
	},
	infoCard: {
		margin: "10px",
		minWidth: 150,
		width: "500px",
		alignItems: "center",
		justifyContent: "center",
		marginLeft: "20px",
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
		overflow: "auto",
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
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block",
		},
	},
	search: {
		fontFamily: "Shabnam",
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(3),
			width: "auto",
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	inputRoot: {
		fontFamily: "Shabnam",
		color: "inherit",
	},
	sidebar: {
		alignItems: "center",
		justifyContent: "center",
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "20ch",
		},
	},
	sectionDesktop: {
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex",
		},
	},
	large: {
		width: theme.spacing(20),
		height: theme.spacing(20),
		color: theme.palette.getContrastText(pink[500]),
		backgroundColor: pink[500],
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	pos: {
		fontFamily: "Shabnam",
		alignItems: "center",
		justifyContent: "center",
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
	paper: {
		padding: theme.spacing(2),
		display: "flex",
		overflow: "auto",
		flexDirection: "column",
	},
	fixedHeight: {
		height: 240,
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
		paddingRight: theme.spacing(30),
		// paddingLeft: theme.spacing(30),
	},
}));

export default function SideBar(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


	return (
		<StylesProvider jss={jss}>
        <Drawer
            anchor="right"
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
                        <ListItemIcon>
                            <Avatar
                                alt="Mohammad Rezaei"
                                src={Profile}
                                className={classes.large}
                            />
                        </ListItemIcon>
                    </ListItem>
                </List>
            </div>
            <Divider />
            <Card className={classes.card}>
                <CardContent className={classes.cardCont}>
                    <Typography
                        variant="h5"
                        component="h2"
                        className={classes.details}
                    >
                        شماره دانشجویی:
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        ۹۴۳۱۰۴۰
                    </Typography>
                </CardContent>
                <CardContent className={classes.cardCont}>
                    <Typography
                        variant="h5"
                        component="h2"
                        className={classes.details}
                    >
                        نیمسال:
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        دوم-۹۸
                    </Typography>
                </CardContent>
                <CardContent className={classes.cardCont}>
                    <Typography
                        variant="h5"
                        component="h2"
                        className={classes.details}
                    >
                        تعداد واحد این ترم:
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        ۱۸
                    </Typography>
                </CardContent>
                <CardActions dir="ltr">
                    <Button size="small" className={classes.pos} variant="outlined" color="primary" onClick={handleClickOpen}>
                        ...اطلاعات بیشتر
                    </Button>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        {/* <DialogTitle id="alert-dialog-title">{"اطلاعات تکمیلی"}</DialogTitle> */}
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description" style={{fontFamily: "Shabnam"}}>
                                شما محمد رضایی دانشجوی ترم ۵ هستید، گفتم در جریان باشی
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClose} color="primary" autoFocus style={{fontFamily: "Shabnam"}}>
                            بستن
                        </Button>
                        </DialogActions>
                    </Dialog>
                </CardActions>
            </Card>
        </Drawer>
    </StylesProvider>
	);
}

