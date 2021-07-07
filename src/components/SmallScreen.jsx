import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		minWidth: 275,
		margin: '8% auto 0',
		width: 275
	},
	title: {
		fontSize: 14,
		textAlign: 'center'
	}
});

const SmallScreen = () => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography className={classes.title} color="textSecondary">
            View in large screen
				</Typography>
			</CardContent>
		</Card>
	);
};

export default SmallScreen;
