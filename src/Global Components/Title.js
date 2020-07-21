import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles'


const useStyles = theme => ({
    font: {
        fontFamily: 'Shabnam',
      },
});

class Title extends React.Component {
  constructor(props){
		super(props);
	}
  render(){
    const {classes} = this.props;
    return (
      <Typography component="h2" variant="h6" color="primary" gutterBottom className={classes.font}>
         {this.props.children}
     </Typography>
     );
  }
}

Title.propTypes = {
  children: PropTypes.node,
};

export default withStyles(useStyles)(Title);