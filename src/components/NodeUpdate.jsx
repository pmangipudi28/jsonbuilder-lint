/* eslint-disable react/prop-types */
/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux';
import { simplify, desimplify } from 'simplifr';

import {
	Typography,
	Grid,
	TextField,
	Collapse,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Tooltip,
	Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import CancelTwoToneIcon from '@material-ui/icons/CancelTwoTone';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import InputAdornment from '@material-ui/core/InputAdornment';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import { searchObject } from '../components/helper/helper';
import {
	fetch_json_request,
	fetch_json_success,
	update_json,
	remove_node_json,
	selected_node_json,
	add_node_json
} from '../actions';
import { getReadOnlyStatus } from '../utility/index';

import { jsonBuilderTheme } from '../themes/JsonBuilderTheme';

const Alert = (props) => {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const useStyles = makeStyles({
	root: {
		width: '100%',
		backgroundColor: jsonBuilderTheme.palette.background.paper
	},
	nested: {
		'padding': '0px 8px 2px',
		'margin': '0px 0px 2px',
		'&:hover': {
			backgroundColor: 'rgb(134 128 128 / 20%)',
			boxShadow: '0px 2px 4px 0px #00000059'
		}
	},
	hoverIcon: {
		'fontSize': '1.56rem',
		'color': '#353434',
		'margin': '0 2px',
		'background': '#615b5b8a',
		'borderRadius': '6px',
		'padding': '3px',
		'transition': 'background 500ms linear',
		'cursor': 'pointer',
		'&:hover': {
			background: '#5d5a5a',
			color: '#dedddd96',
			transition: 'background 500ms linear'
		},
		[jsonBuilderTheme.breakpoints.down(780)]: {
			fontSize: '16px'
		},
		[jsonBuilderTheme.breakpoints.down(1025)]: {
			fontSize: '26px'
		}
	},
	hoverIconGrid: {
		display: 'flex',
		marginRight: '8px'
	},
	listItem: {
		padding: 0
	},
	listItemText: {
		flex: '0 1 auto',
		color: 'black',
		[jsonBuilderTheme.breakpoints.down(1150)]: {
			marginLeft: '19%'
		}
	},
	body1: {
		fontWeight: 'bold'
	},
	listIcon: {
		minWidth: 'unset',
		color: jsonBuilderTheme.palette.listIconNodeUpdateTree.main
	},
	paper: {
		borderColor: jsonBuilderTheme.palette.paperBorderNodeUpdateTree.main,
		backgroundColor:
      jsonBuilderTheme.palette.paperBackgroundNodeUpdateTree.main
	},
	paper2: {
		textAlign: 'center',
		backgroundColor:
      jsonBuilderTheme.palette.paperBackgroundNodeUpdateTree.main
	},
	bold: {
		fontWeight: 600
	},
	searchedValue: {
		fontWeight: '200',
		backgroundColor: jsonBuilderTheme.palette.searchedValueNodeUpdateTree.main
	},
	searchedText: {
		color: jsonBuilderTheme.palette.searchedTextNodeUpdateTree.main,
		fontWeight: '200'
	},
	buttonsSection: {
		textAlign: 'right'
	},
	addSection: {
		margin: '2px 0 2px',
		background: '#ccc',
		padding: '4px 0',
		width: '100%',
		boxShadow: '1px 2px 3px #9c9898'
	},
	addForm: {
		display: 'flex'
	},
	addButtonsSection: {
		display: 'flex',
		maxWidth: 'fit-content'
	},
	addButtonsSectionButtons: {
		'minWidth': 'auto',
		'background': 'rgb(123 119 119 / 76%)',
		'margin': '1px',
		'padding': '0px 5px',
		'minHeight': 'auto',
		'height': '27px',
		'borderRadius': '5px',
		'&:hover': {
			textDecoration: 'none',
			backgroundColor: 'rgb(0 0 0 / 63%)',
			color: '#fff'
		},
		'& span:hover': {
			backgroundColor: 'transparent'
		},
		'& svg': {
			backgroundColor: 'transparent',
			fontSize: '18px'
		}
	},
	addkeyValue: {
		[jsonBuilderTheme.breakpoints.down(800)]: {
			maxWidth: '43%'
		}
	},
	collapseNodeUpdate: {
		paddingLeft: '30px',
		[jsonBuilderTheme.breakpoints.down(1000)]: {
			paddingLeft: '0px'
		}
	},
	readOnly: {
		color: '#7c7979'
	}
});

export default function NodeUpdate({
	data,
	expand,
	searchTerm,
	sortDirection,
	parentName = ' '
}) {
	const classes = useStyles();
	const store = useStore();

	const [open, setOpen] = React.useState(false);
	const [appear, setAppear] = useState(false);
	const [addNewValue, setAddNewValue] = useState(false);
	const [appearMain, setAppearMain] = useState(false);
	const [checkkey, setCheckKey] = useState();
	const [checkIndex, setCheckIndex] = useState();
	const [checkKeyOfNode, setCheckKeyOfNode] = useState();
	const [checkIndexOfNode, setCheckIndexOfNode] = useState();
	const [searchKey, setSearchKey] = React.useState();
	const [json, setJson] = React.useState({});
	const [newKey, setNewKey] = useState('');
	const [newValue, setNewValue] = useState('');
	const [keyChanged, setKeyChanged] = useState('');
	const [state, setState] = React.useState({
		openSnackbar: false,
		vertical: 'top',
		horizontal: 'center'
	});

	const { vertical, horizontal, openSnackbar } = state;

	const handleSnackbar = () => {
		setState({ openSnackbar: true, vertical: 'top', horizontal: 'center' });
	};

	const currentState = useSelector((state) => state.jsonReducer.present);
	const dispatch = useDispatch();

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;

		setJson((prevState) => ({
			...prevState,
			[name]: value
		}));

		// setJsonChanged(true);
		setKeyChanged(name);
	};

	const setChangedKey = () => {
		// setJsonChanged(false);
		setKeyChanged('');
	};

	const handleUpdate = (keyChanged) => {
		confirmChange(keyChanged);
		setChangedKey();
	};

	const confirmChange = (keyChanged) => {
		const jsonData = simplify(currentState.jsonData);
		const getPathResult = searchObject(currentState.jsonData, function (value) {
			return value !== null && value !== undefined && value.$ID === data.$ID;
		});
		if (getPathResult && Object.keys(getPathResult).length > 0) {
			updateJSON(jsonData, getPathResult[0].path, keyChanged, json);
		}
	};

	const cancelChange = () => {
		const jsonData = simplify(currentState.jsonData);
		const getPathResult = searchObject(jsonData, function (value) {
			return value !== null && value !== undefined && value.$ID === data.$ID;
		});
		if (getPathResult && Object.keys(getPathResult).length > 0) {
			setJson(getPathResult[0].value);
			//setJsonChanged(false);
			setKeyChanged('');
		}
	};

	const updateJSON = (jsonData, path, name, json) => {
		let getCurrentNodeResult = '';
		const jsonUpdatedData = dispatch(update_json(jsonData, path, name, json));
		const updatedJSONData = dispatch(
			fetch_json_success(desimplify(jsonUpdatedData.payload))
		);

		if (Object.keys(updatedJSONData).length > 0) {
			getCurrentNodeResult = searchObject(updatedJSONData, function (value) {
				return (
					value !== null && value !== undefined && value.name === json.name
				);
			});

			if (Object.keys(getCurrentNodeResult).length > 0) {
				dispatch(
					selected_node_json(
						eval(JSON.parse(JSON.stringify(getCurrentNodeResult[0].value))),
						true
					)
				);
			}
		}

		setState({ openSnackbar: true, vertical: 'top', horizontal: 'center' });
	};

	const handleClick = () => {
		setUpdatedJSON(desimplify(currentState.jsonData));
		setOpen(!open);
	};

	const searchData = () => {
		Object.keys(json).map((k) => {
			if (
				k === searchTerm ||
        (json[k].toString() !== '' && json[k].toString().includes(searchTerm))
			) {
				setSearchKey(k);
				//setSearchClass('searchedValue');
			} else {
				//setSearchClass('listItemText');
			}
		});
	};

	const cancelAdd = () => {
		setAddNewValue(false);
	};

	// Check if a value is an object
	const isObject = function (value) {
		return typeof value === 'object';
	};

	// Check if an object is an array
	const isArray = function (obj) {
		return Object.prototype.toString.call(obj) === '[object Array]';
	};

	// This function helps in adding a Node
	const addNode = () => {
		let getPathResult = '';
		let objectPath = '';

		// Form a JSON Object with new Key, new Value
		const jsonNodeToAdd = { newJSON: { jsonKey: newKey, jsonValue: newValue } };
		// Check if json is an array
		if (isObject(json) && isArray(json)) {
			getPathResult = searchObject(currentState.jsonData, function (value) {
				return (
					value !== null && value !== undefined && value.$ID === json[0].$ID
				);
			});

			if (getPathResult !== null && getPathResult.length > 0) {
				// Get the Node Path by checking the first node of an Object
				objectPath = getPathResult[0].path.substr(
					0,
					getPathResult[0].path.lastIndexOf('.')
				);
			}
		} else {
			// Get the Node Path
			getPathResult = searchObject(currentState.jsonData, function (value) {
				return value !== null && value !== undefined && value.$ID === json.$ID;
			});

			if (getPathResult !== null && getPathResult.length > 0) {
				objectPath = getPathResult[0].path;
			}
		}

		// Simplify the current state's jsonData
		const jsonData = simplify(currentState.jsonData);

		if (objectPath !== null && objectPath.length > 0) {
			// run dispatch method in jsonReducer to add the node
			addJSON(jsonData, objectPath, jsonNodeToAdd);
		}

		handleSnackbar();
		setAddNewValue(false);
		setAppear(false);
	};

	const addJSON = (jsonData, path, jsonNodeToAdd) => {
		dispatch(add_node_json(jsonData, path, jsonNodeToAdd));
		dispatch(fetch_json_request());
		// Pass to setUpdatedJSON to set the json state
		setUpdatedJSON(desimplify(currentState.jsonData)); //jsonUpdatedData.payload
		setNewKey('');
		setNewValue('');
	};

	// This function helps in removing an Object
	const removeObject = () => {
		let getPathResult = '';
		let objectPath = '';

		// Check if json is an array
		if (Array.isArray(json)) {
			getPathResult = searchObject(currentState.jsonData, function (value) {
				return (
					value !== null && value !== undefined && value.$ID === json[0].$ID
				);
			});

			if (getPathResult !== null && getPathResult.length > 0) {
				// Get the Node Path by checking the first node of an Object
				objectPath = getPathResult[0].path.substr(
					0,
					getPathResult[0].path.lastIndexOf('.')
				);
			}
		} else {
			// Get the Node Path
			getPathResult = searchObject(currentState.jsonData, function (value) {
				return value !== null && value !== undefined && value.$ID === json.$ID;
			});

			if (getPathResult !== null && getPathResult.length > 0) {
				objectPath = getPathResult[0].path;
			}
		}

		// Simplify the current state's jsonData
		const jsonData = simplify(currentState.jsonData);

		if (objectPath !== null && objectPath.length > 0) {
			// run dispatch method in jsonReducer to remove the object
			removeJSON(jsonData, objectPath);
		}
	};

	// This function helps in removing a json node
	const removeNode = (key) => {
		let jsonData = '';
		let getPathResult = '';
		// Get the path of the selected node
		getPathResult = searchObject(currentState.jsonData, function (value) {
			return value !== null && value !== undefined && value.$ID === json.$ID;
		});

		jsonData = simplify(currentState.jsonData);
		if (getPathResult !== null && getPathResult.length > 0) {
			// run dispatch method in jsonReducer to remove the node
			removeJSON(jsonData, getPathResult[0].path + '.' + key);
		}
	};

	// Runs dispatch method of jsonReducer
	const removeJSON = (jsonData, path) => {
		let jsonUpdatedData = '';

		// Run dispatch method and get the updated JSON (of all objects)
		jsonUpdatedData = dispatch(remove_node_json(jsonData, path));

		// Pass to setUpdatedJSON to set the json state
		setUpdatedJSON(desimplify(jsonUpdatedData.payload));
	};

	// Set the json State
	const setUpdatedJSON = (jsonData) => {
		let getPathResult = '';

		// get updated JSON from the current State of updated JSON (of all objects)
		getPathResult = searchObject(jsonData, function (value) {
			return value !== null && value !== undefined && value.$ID === json.$ID;
		});
		if (getPathResult !== null && getPathResult.length > 0) {
			// Invoke setJson React Hook
			setJson(getPathResult[0].value);
		}
	};

	const handleObjectAddition = (key, index) => {
		Object.keys(json).map((k, i) => {
			if (k === key && i === index) {
				setAddNewValue(true);
				setCheckIndexOfNode(index);
				setCheckKeyOfNode(key);
				setAppear(true);
			}
		});
	};

	const handleNodeAddition = (key, index) => {
		Object.keys(json).map((k, i) => {
			if (k === key && i === index) {
				setAddNewValue(true);
				setCheckIndexOfNode(index);
				setCheckKeyOfNode(key);
				setAppear(true);
			}
		});
	};

	const handleMouseEnter = (key, index) => {
		Object.keys(json).map((k, i) => {
			if (k === key && i === index) {
				setAppear(true);
				setCheckIndex(index);
				setCheckKey(key);
			}
		});
	};

	const handleMouseLeave = () => {
		setAppear(false);
		setCheckIndex(null);
	};

	const checkReadOnlyNodes = (jsonKey) => {
		let getPathResult = '';
		let objectPath = '';

		// get updated JSON from the current State of updated JSON (of all objects)
		getPathResult = searchObject(currentState.jsonData, function (value) {
			return value !== null && value !== undefined && value.$ID === data.$ID;
		});

		if (getPathResult !== null && getPathResult.length > 0) {
			objectPath = getPathResult[0].path;
		}

		let nodeKey = 'root' + objectPath + '.' + jsonKey;

		nodeKey = getReadOnlyStatus(nodeKey, store);

		if (nodeKey === true) {
			return true;
		} else {
			return false;
		}
	};

	const sortByKey = () => {
		const sorted = {};

		if (sortDirection === 'Ascending') {
			Object.keys(json)
				.sort()
				.map((key) => {
					sorted[key] = json[key];
				});
			setJson(sorted);
		} else if (sortDirection === 'Descending') {
			Object.keys(json)
				.sort()
				.reverse()
				.map((key) => {
					sorted[key] = json[key];
				});
			setJson(sorted);
		}
	};

	useEffect(() => {
		setUpdatedJSON(currentState.jsonData);
	}, [currentState.jsonData]);

	// Initial Loading
	useEffect(() => {
		setJson(data);
		setSearchKey('');
		//setSearchClass('listItemText');
		searchData();
		setOpen(expand);
	}, [expand, searchTerm, data]);

	// This is for Sorting....
	useEffect(() => {
		sortByKey();
	}, [sortDirection]);

	return (
		<>
			{json && (
				<ListItem
					button
					onClick={handleClick}
					classes={{ root: classes.listItem }}
					key={Math.random() * 10}
				>
					<ListItemIcon
						key={Math.random() * 10}
						classes={{ root: classes.listIcon }}
					>
						{open ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
					</ListItemIcon>
					<ListItemText
						key={Math.random() * 10}
						onMouseOver={() => setAppearMain(true)}
						onMouseLeave={() => setAppearMain(false)}
					>
						<b>{parentName}</b>
					</ListItemText>
					{appearMain && (
						<>
							<Tooltip title="Add an Object">
								<AddCircleOutlineRoundedIcon
									onClick={() => handleObjectAddition()}
									fontSize="small"
								/>
							</Tooltip>
							<Tooltip title="Remove an Object">
								<CancelTwoToneIcon
									onClick={() => removeObject(parentName, json)}
									fontSize="small"
								/>
							</Tooltip>
						</>
					)}
				</ListItem>
			)}
			<Collapse
				in={open}
				timeout="auto"
				unmountOnExit
				style={{ paddingLeft: '30px' }}
			>
				<List
					component={'div'}
					style={{ padding: 0 }}
					onMouseOver={() => setAppear(true)}
					onMouseLeave={() => setAppear(false)}
				>
					{json &&
            Object.keys(json).map((k, i) => {
            	return json[k] !== null && typeof json[k] === 'object' ? (
            		<NodeUpdate
            			key={Math.random()}
            			data={json[k]}
            			parentName={Array.isArray(json) ? '' : k}
            			length={Object.keys(json[k]).length}
            		/>
            	) : (
            		<>
            			<Grid container spacing={2}>
            				<ListItem
            					key={Math.random() * 10}
            					button
            					className={classes.nested}
            					onMouseOver={() => handleMouseEnter(k, i)}
            					onMouseLeave={() => handleMouseLeave()}
            				>
            					<Grid item xs={1} className={classes.hoverIconGrid}>
            						<>
            							{appear && checkIndex === i && checkkey === k && (
            								<>
            									<Tooltip title="Add a Node">
            										<AddCircleOutlineRoundedIcon
            											className={classes.hoverIcon}
            											onClick={() => handleNodeAddition(k, i)}
            											fontSize="small"
            										/>
            									</Tooltip>
            									{checkReadOnlyNodes(k) ? null : (
            										<Tooltip title="Remove a Node">
            											<CancelTwoToneIcon
            												className={classes.hoverIcon}
            												onClick={() => removeNode(k, json)}
            												fontSize="small"
            											/>
            										</Tooltip>
            									)}
            								</>
            							)}
            						</>
            					</Grid>
            					{!Array.isArray(json) ? (
            						<>
            							<Grid item xs={5}>
            								<ListItemText
            									className={
            										k === searchKey
            											? classes.searchedValue
            											: classes.listItemText
            									}
            								>
            									{k !== '$ID' && k !== '$PID' ? (
            										checkReadOnlyNodes(k) ? (
            											<Typography className={classes.readOnly}>
            												{k}
            											</Typography>
            										) : (
            											k
            										)
            									) : null}
            								</ListItemText>
            							</Grid>
            						</>
            					) : (
            						''
            					)}
            					<Grid item xs={7}>
            						<ListItemText
            							className={
            								k === searchKey
            									? classes.searchedValue
            									: classes.listItemText
            							}
            						>
            							{k !== '$ID' && k !== '$PID' ? (
            								checkReadOnlyNodes(k) ? (
            									<Typography className={classes.readOnly}>
            										{json[k].toString()}
            									</Typography>
            								) : (
            									<>
            										<TextField
            											name={k}
            											fullWidth
            											value={json[k].toString()}
            											onChange={handleChange}
            											InputProps={{
            												endAdornment: (
            													<InputAdornment position="start">
            														{k === keyChanged ? (
            															<>
            																<Tooltip title="Cancel the Change">
            																	<ClearRoundedIcon
            																		className={classes.hoverIcon}
            																		onClick={() =>
            																			cancelChange(keyChanged)
            																		}
            																		fontSize="small"
            																	/>
            																</Tooltip>
            																<Tooltip title="Confirm the Change">
            																	<SaveOutlinedIcon
            																		className={classes.hoverIcon}
            																		onClick={() =>
            																			handleUpdate(keyChanged)
            																		}
            																		fontSize="small"
            																	/>
            																</Tooltip>
            															</>
            														) : null}
            													</InputAdornment>
            												)
            											}}
            										/>
            									</>
            								)
            							) : null}
            						</ListItemText>
            					</Grid>
            					<Grid item xs={1} className={classes.buttonsSection}>
            						<ListItemText
            							className={
            								k === searchKey
            									? classes.searchedValue
            									: classes.listItemText
            							}
            						></ListItemText>
            					</Grid>
            				</ListItem>
            			</Grid>
            			{addNewValue &&
                    checkIndexOfNode === i &&
                    checkKeyOfNode === k && (
            				<>
            					<Grid
            						container
            						spacing={1}
            						className={classes.addSection}
            					>
            						<Grid
            							item
            							xs={1}
            							className={classes.addButtonsSection}
            						>
            							<Button
            								onClick={cancelAdd}
            								className={classes.addButtonsSectionButtons}
            							>
            								<Tooltip title="Cancel Add a Node">
            									<ClearRoundedIcon fontSize="small" />
            								</Tooltip>
            							</Button>
            							<Button
            								onClick={addNode}
            								className={classes.addButtonsSectionButtons}
            							>
            								<Tooltip title="Confirm to add a Node">
            									<SaveOutlinedIcon fontSize="small" />
            								</Tooltip>
            							</Button>
            						</Grid>
            						<Grid item xs={4}>
            							<TextField
            								name="newKey"
            								value={newKey}
            								onChange={(e) => setNewKey(e.target.value)}
            								required
            								className={classes.addForm}
            								placeholder="Enter Key"
            							/>
            						</Grid>
            						<Grid item xs={6}>
            							<TextField
            								name="newValue"
            								value={newValue}
            								onChange={(e) => setNewValue(e.target.value)}
            								required
            								className={classes.addForm}
            								placeholder="Enter Value"
            							/>
            						</Grid>
            					</Grid>
            				</>
            			)}
            		</>
            	);
            })}
				</List>
			</Collapse>

			<Snackbar
				anchorOrigin={{ vertical, horizontal }}
				open={openSnackbar}
				autoHideDuration={1000}
				key={vertical + horizontal}
				onClose={() =>
					setState({ openSnackbar: false }, () =>
						setKeyChanged({ keyChanged: '' })
					)
				}
			>
				<Alert
					severity="info"
					onClose={() => setState({ openSnackbar: false })}
				>
          JSON is saved
				</Alert>
			</Snackbar>
			<br />
		</>
	);
}
