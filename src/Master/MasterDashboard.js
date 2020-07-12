import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "../Global Components/header";
import SideBar from "./Master Components/MasDrawer";
import MainPage from "./Master Components/MainMaster";


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
