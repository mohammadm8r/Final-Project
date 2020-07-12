import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "../Global Components/header";
import SideBar from "./Student Components/Drawer";
import MainPage from "./Student Components/MainStu";


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
