import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "./components/header";
import SideBar from "./components/Drawer";
import MainPage from "./components/MainStu";


export default function Dashboard() {
	return (
		<div>
			<CssBaseline />
			<Header />
			<SideBar />
			<MainPage />
		</div>
	);
}
