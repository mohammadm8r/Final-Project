import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "../Global Components/header";
import SideBar from "./Student Components/Drawer";
import MainPage from "./Student Components/MainStu";


class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user_id: '',
			user_name:'',
			user_family:'',
			email:'',
			password:'',
			college:'',
		};
	}

	componentDidMount() {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ "username": localStorage.username }),
		};
		fetch('http://localhost:3030/student/info', requestOptions)
			.then(async response => {
				const data = await response.json();
				// check for error response
				if (!response.ok) {
					// get error message from body or default to response status
					const error = (data && data.message) || response.status;
					return Promise.reject(error);
				}
				console.log(data)
				this.setState({
					user_id: data.student_id,
					user_name: data.student_name,
					user_family: data.student_family,
					email: data.student_username,
					password: data.student_password,
					college: data.college
				 })
			})
			.catch(error => {
				this.setState({ errorMessage: error.toString() });
				console.error('There was an error!', error);
			});
	}

	render() {
		console.log(this.state)
		return (
			<div>
				<CssBaseline />
				<Header data={this.state} />
				<SideBar />
				<MainPage />
			</div>
		);
	}
}

export default Dashboard;