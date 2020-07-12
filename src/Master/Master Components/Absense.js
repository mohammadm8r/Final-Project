import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../../Global Components/Title';

import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import Demo from '../../Global Components/calendar'

// Generate Order Data
function createData(id, date, status, eslah) {
  return { id, date, status, eslah};
}

const rows = [
  createData(0, 'رضا قیداری', '۲/۳۲', 'مشاهده تقویم'),
  createData(1, 'مرتضی کامرانی‌فرد', '۵/۳۲', 'مشاهده تقویم'),
  createData(2, 'حمید عسکری', '۳/۳۲', 'مشاهده تقویم'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
    font: {
        fontFamily: 'Shabnam',
      },
}));

export default function Absense() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
  return (
    <React.Fragment>
      <Title style={{ textAlign: 'center' , alignItems: 'center'}}>لیست دانشجویان</Title>
      <Table size="small">
        <TableHead>
          <TableRow style={{alignItems: 'center'}}>
            <TableCell className={classes.font} style={{ textAlign: 'center', fontWeight:'bold'}}>نام دانشجو</TableCell>
            <TableCell className={classes.font} style={{ textAlign: 'center', fontWeight:'bold' }}>تعداد غیبت</TableCell>
            <TableCell className={classes.font} style={{ textAlign: 'center', fontWeight:'bold' }}>مشاهده غیبت‌های روی تقویم</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
                <TableCell className={classes.font} style={{ textAlign: 'center' }}>{row.date}</TableCell>
                <TableCell className={classes.font} style={{ textAlign: 'center' }}>{row.status}</TableCell>
                <TableCell className={classes.font} style={{ textAlign: 'center' }}>
                    <Button style={{cursor:'pointer', fontFamily: 'Shabnam'}} onClick={handleClickOpen}>{row.eslah}</Button>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description" style={{fontFamily: "Shabnam"}}>
                                <Demo />
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClose} color="primary" autoFocus style={{fontFamily: "Shabnam"}}>
                            بستن
                        </Button>
                        </DialogActions>
                    </Dialog>
                </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}