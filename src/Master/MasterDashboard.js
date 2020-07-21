import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "../Global Components/header";
import SideBar from "./Master Components/MasDrawer";
import MainPage from "./Master Components/MainMaster";
import { withStyles } from '@material-ui/core/styles'


class Dashboard extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div>
				<CssBaseline />
				<Header />
				<SideBar />
				<MainPage />
			</div>
		);
	}
}

export default Dashboard;
