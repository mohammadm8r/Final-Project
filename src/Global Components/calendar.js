/* eslint react/no-multi-comp:0, no-console:0 */

import "rc-calendar/assets/index.css";
import React from "react";
import FullCalendar from "rc-calendar/lib/FullCalendar";

import "rc-select/assets/index.less";
import Select from "rc-select";

import enUS from "rc-calendar/lib/locale/en_US";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from "@material-ui/core/Button";
import ClearIcon from '@material-ui/icons/Clear';
import moment from "moment";
import "moment/locale/zh-cn";
import "moment/locale/en-gb";
import { red } from "@material-ui/core/colors";


const format = "YYYY-MM-DD";

const now = moment();
now.locale("en-gb").utcOffset(0);

const defaultCalendarValue = now.clone();
defaultCalendarValue.add(-1, "month");

class CustomCalendar extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   	open: false
  };
  this.handleClose = this.handleClose.bind(this);
  this.onSelect = this.onSelect.bind(this);
  this.dateCellRender = this.dateCellRender.bind(this);
 }

 onSelect(value) {
  // console.log("select" + value.date())
  if (value.date() === 2 || value.date() === 4)
	this.setState({
	open: true
	})
 }

 handleClose() {
  this.setState({
   open: false
  })
 }

 dateCellRender(value) {
  // console.log(value.date())
  if (value.date() === 2 || value.date() === 4)
   return (
    <span>
     <ClearIcon style={{ color: red[500], fontSize: "10pt" }} />{value.date()}
    </span>
   )
  else {
   return value.date()
  }
 }

 render() {
  return (
   <div style={{ zIndex: 1000, position: "relative" }}>
    <FullCalendar
     style={{ margin: 10 }}
     Select={Select}
     fullscreen={false}
     onSelect={this.onSelect}
     defaultValue={now}
     dateCellContentRender={this.dateCellRender}
     locale={enUS}
    />
   </div>
  );
 }
}

export default CustomCalendar;