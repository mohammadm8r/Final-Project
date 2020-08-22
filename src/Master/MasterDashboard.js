import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "../Global Components/header";
import SideBar from "./Master Components/MasDrawer";
import MainPage from "./Master Components/MainMaster";
import { withStyles } from '@material-ui/core/styles'


class Dashboard extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			user_id: '',
			user_name:'',
			user_family:'',
			email:'',
			password:'',
			college:'',
			isReady: false,
		};
	}

	componentDidMount() {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ "username": localStorage.getItem('username') }),
		};
		fetch('http://localhost:3030/master/info', requestOptions)
			.then(async response => {
				const data = await response.json();
				if (!response.ok) {
					// get error message from body or default to response status
					const error = (data && data.message) || response.status;
					return Promise.reject(error);
				}
				console.log(data)
				this.setState({
					user_id: data.master_id,
					user_name: data.master_name,
					user_family: data.master_family,
					email: data.master_username,
					password: data.master_password,
					college: data.college,
					isReady: true
				 })
			})
			.catch(error => {
				this.setState({ errorMessage: error.toString() });
				console.error('There was an error!', error);
			});
	}

	render(){
		return (
			<div>
				<CssBaseline />
				<Header data={this.state}/>
				<SideBar />
				<MainPage data={this.state}/>
			</div>
		);
	}
}

export default Dashboard;
