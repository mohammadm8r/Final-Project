/* eslint react/no-multi-comp:0, no-console:0 */

import "rc-calendar/assets/index.css";
import React from "react";
import FullCalendar from "rc-calendar/lib/FullCalendar";

import "rc-select/assets/index.less";
import Select from "rc-select";

import zhCN from "rc-calendar/lib/locale/zh_CN";
import enUS from "rc-calendar/lib/locale/en_US";

import moment from "moment";
import "moment/locale/zh-cn";
import "moment/locale/en-gb";

const format = "YYYY-MM-DD";

const now = moment();
now.locale("en-gb").utcOffset(0);

const defaultCalendarValue = now.clone();
defaultCalendarValue.add(-1, "month");

function onSelect(value) {
	console.log("select", value.format(format));
}

class CustomCalendar extends React.Component {
	state = {
		type: "month",
	};

	onTypeChange = (type) => {
		this.setState({
			type,
		});
	};

	render() {
		return (
			<div style={{ zIndex: 1000, position: "relative" }}>
				<FullCalendar
					style={{ margin: 10 }}
					Select={Select}
					fullscreen={false}
					onSelect={onSelect}
					defaultValue={now}
					locale={enUS}
				/>
				<FullCalendar
					style={{ margin: 10 }}
					Select={Select}
					fullscreen
					defaultValue={now}
					onSelect={onSelect}
					type={this.state.type}
					onTypeChange={this.onTypeChange}
					locale={enUS}
				/>
			</div>
		);
	}
}

export default CustomCalendar;
