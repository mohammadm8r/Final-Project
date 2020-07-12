import React from "react";
import AppBar from "@material-ui/core/AppBar";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import NotificationsIcon from "@material-ui/icons/Notifications";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MailIcon from "@material-ui/icons/Mail";
import { fade, makeStyles } from "@material-ui/core/styles";
import { pink, blue } from "@material-ui/core/colors";
const drawerWidth = 240;

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

export default function Header(props) {
	const classes = useStyles();

	return (
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
						inputProps={{ "aria-label": "search" }}
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
	);
}
