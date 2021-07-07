import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Grid, makeStyles, AppBar, Tabs, Tab, Box, Typography } from '@material-ui/core';
import Header from './Header';
import PropTypes from 'prop-types';
import Editor from './Editor';
import { JsonView } from './JsonView/';
import { jsonBuilderTheme } from '../themes/JsonBuilderTheme';

import { RemoveParentId } from '../components/helper/helper';

const useStyles = makeStyles({
	root: {
		flexGrow: 0,
		flex: 0
	},
	paper: {
		borderRadius: 0
	},
	tab: {
		'backgroundColor': jsonBuilderTheme.palette.viewSectiontab.main,
		'minHeight': '20px',
		'color': jsonBuilderTheme.palette.contentColor.white,
		'& div.MuiTabs-scroller': {
			position: 'inherit'
		},
		'& .MuiTabs-indicator': {
			display: 'none'
		},
		'& .Mui-selected ': {
			borderBottom: '2px solid' + jsonBuilderTheme.palette.viewSectiontab.border,
			borderRadius: '1px',
			boxShadow: '1px 2px 3px ' + jsonBuilderTheme.palette.viewSectiontab.boxshadow
		}
	},
	tabButton: {
		minHeight: '34px',
		fontSize: '12px',
		fontFamily: ['Open Sans', 'sans-serif'].join(',')
	}
});

/***************Tab view *************** */
const TabPanel = (props) => {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={0}>
					<Typography component={'div'}>{children}</Typography>
				</Box>
			)}
		</div>
	);
};

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired
};

const a11yProps = (index) => {
	return {
		'id': `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`
	};
};


/************************************** */
const ViewSection = () => {
	const classes = useStyles();

	const [value, setValue] = useState(0);
	const handleChange = (newValue) => {

		if (newValue.value === 0)
		{
			setValue(1);
		}
		else if (newValue.value === 1)
		{
			setValue(0);
		}
	};

	const currentState = useSelector(state => state.jsonReducer.present);
	const tempJson = useSelector(state => state.jsonReducer.present.tempJson);
	const jsonSchemaStatus = useSelector(state => state.jsonReducer.present.jsonSchemaStatus);

	useEffect(() => {

		// This if works when a form is loaded for the first time.
		if (currentState.jsonData && Object.keys(currentState.jsonData).length === 0 && tempJson.length === 0)
		{
			// Land in TreeView
			setValue(0);
		}
		else if (currentState.jsonData && Object.keys(currentState.jsonData).length > 0 && tempJson.length > 0)
		{
			// If JSON is having issues, this will take the user to JSON View
			setValue(1);
		}
		else if (currentState.jsonData && Object.keys(currentState.jsonData).length > 0)
		{
			// If there are no errors in json, this if part, should allow user to switch between
			// Tree View, JSON View

			// setValue(1);
			// setValue(0);
		}
	});

	useEffect(() => {
		setValue(1);
	}, [jsonSchemaStatus]);

	return (
		<>
			<form>
				<Grid container spacing={0}>
					<Grid item xs={12}>
						<Header />
					</Grid>
					<Grid item xs={12}>
						<AppBar position='static' className={classes.root}>
							<Tabs className={classes.tab} value={value} onChange={() => handleChange({value})} >
								<Tab className={classes.tabButton} label='Tree View' {...a11yProps(0)} />
								<Tab className={classes.tabButton} label='JSON View' {...a11yProps(1)} />
							</Tabs>
						</AppBar>
						<TabPanel className={classes.tabpanel} value={value} index={0}>
							<Editor />
						</TabPanel>
						<TabPanel value={value} index={1}>
							<JsonView JsonData={currentState.properJSON === false ? tempJson : (value === 0 ? currentState.jsonData : RemoveParentId(currentState.jsonData, '$ID', '$PID'))} />
						</TabPanel>
					</Grid>
				</Grid>
			</form>
		</>
	);
};

export default ViewSection;
