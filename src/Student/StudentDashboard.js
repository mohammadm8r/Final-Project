import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "../Global Components/header";
import SideBar from "./Student Components/Drawer";
import MainPage from "./Student Components/MainStu";


class Dashboard extends React.Component {
	constructor (props) {
		super(props);
		console.log(props.location.data);
		this.state = {
			user_id: ''
		  };
	}

	componentDidMount() {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ "username": this.props.location.data }),
		};
		console.log(requestOptions.body);
		fetch('http://localhost:3030/student/info', requestOptions)
			.then(response => response.json())
			.then(data => this.setState({ user_id: data.student_id }));
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