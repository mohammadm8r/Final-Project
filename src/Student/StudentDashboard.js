import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "../Global Components/header";
import SideBar from "./Student Components/Drawer";
import MainPage from "./Student Components/MainStu";


class Dashboard extends React.Component {
	constructor (props) {
		super(props);
		console.log(props.location)
	}
	render () {
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