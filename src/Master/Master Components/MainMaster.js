
import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import SchoolIcon from "@material-ui/icons/School";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Avatar from "@material-ui/core/Avatar";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MoreIcon from "@material-ui/icons/MoreVert";
import { pink, blue } from "@material-ui/core/colors";
// import Profile from "../Profile.jpg";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import MasInfo from "./MasInfo.js";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import ScheduleIcon from "@material-ui/icons/Schedule";
import { withStyles } from '@material-ui/core/styles'
import Demo from "../../Global Components/calendar";

const drawerWidth = 240;
const useStyles = theme => ({
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
		// width: "500px",
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
});

class MainPage extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			course_titles: [],
			course_groups: [],
			course_days: [],
		}
	}

	componentDidMount() {
		var i;
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ "username": localStorage.username }),
		};
		fetch('http://localhost:3030/courses/info', requestOptions)
			.then(async response => {
				const data = await response.json();
				// check for error response
				if (!response.ok) {
					// get error message from body or default to response status
					const error = (data && data.message) || response.status;
					return Promise.reject(error);
				}
				for(i in data){
					this.state.course_titles.push(data[i].course_title)
					this.state.course_groups.push(data[i].course_group)
					this.state.course_days.push(data[i].course_days)
				}
				
			})
			.catch(error => {
				this.setState({ errorMessage: error.toString() });
				console.error('There was an error!', error);
			});
	}


	render(){
		const {classes} = this.props;
		const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
		console.log(this.state)
		return (
			<main className={classes.contentt}>
				<div className={classes.appBarSpacer} />
				<Container maxWidth="lg" className={classes.container}>
					<Grid container spacing={5}>
						<Grid item xs={12}>
							<Card className={classes.infoCard}>
								<Paper className={classes.paper}>
									<MasInfo data={this.state} />
								</Paper>
							</Card>
						</Grid>
					</Grid>
				</Container>
			</main>
		);
	}
}


export default withStyles(useStyles)(MainPage);
