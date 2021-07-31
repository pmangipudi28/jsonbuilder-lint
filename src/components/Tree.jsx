/* eslint-disable react/prop-types */
import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { simplify, desimplify } from 'simplifr';

import { Tooltip, Collapse, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import CancelTwoToneIcon from '@material-ui/icons/CancelTwoTone';
import DoneAllRoundedIcon from '@material-ui/icons/DoneAllRounded';

import { RemoveParentId, searchObject, uuidv4 } from '../components/helper/helper';
import { fetch_json_success, selected_node_json, remove_object_json, add_object_json } from '../actions';

import { jsonBuilderTheme } from '../themes/JsonBuilderTheme';

const useStyles = makeStyles({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: jsonBuilderTheme.palette.background.paper
	},
	nested: {
		padding: `0px ${jsonBuilderTheme.spacing(3)}px`
	},
	listItem: {
		padding: 0
	},
	listItemText: {
		flex: '0 1 auto'
	},
	body1: {
		fontWeight: 'bold'
	},
	listIcon: {
		minWidth: 'unset',
		color: '#ff6464'
	},
	paper: {
		borderColor: 'E7EFEB !important',
		backgroundColor: 'transparent'
	},
	paper2: {
		textAlign: 'center',
		backgroundColor: 'transparent'
	},
	bold: {
		fontWeight: 600
	},
	selectedNode: {
		color: 'blue',
		[jsonBuilderTheme.breakpoints.down(1000)]: {
			fontSize: '11px'
		}
	},
	treeList:{
		[jsonBuilderTheme.breakpoints.down(1000)]: {
			'& span': { fontSize: '15px'}
		}
	},
	treeIcon:{
		[jsonBuilderTheme.breakpoints.down(1000)]: {
			fontSize: '20px'
		}
	},
	treeCollapse: {
		paddingLeft: '30px',
		[jsonBuilderTheme.breakpoints.down(1000)]: {
			paddingLeft: '15px'
		}
	},
	editedNode: {
		color: 'red'
	}
});

const ShowNodes = ({ data, parentName, selectedId }) => {
	return (
		<Tree
			key={Math.random()}
			data={data}
			parentName={parentName}
			selectedId={selectedId}
		/>
	);
};

export default function Tree({
	data,
	parentName = 'Root: []',
	selectedId = null
}) {
	const classes = useStyles();
	const dispatch = useDispatch();

	const [open, setOpen] = useState(false);
	const [appear, setAppear] = useState(false);

	const currentState = useSelector(state => state.jsonReducer.present);

	const handleClick = () => {
			console.log('handle is clicked');
			if(data.$ID === selectedId) {
				setOpen(!open);
			}
	};

	const handleMouseOver = () => {
		console.log('handleMouseOver - Before', open);
		// const openBefore = open;
		setAppear(true);
		// setOpen(openBefore);
		console.log('handleMouseOver - After', open);
	};

	const handleMouseLeave = () => {
		//console.log('handleMouseLeave - Before', open);
		// const openBefore = open;
		//setAppear(false);
		// setOpen(openBefore);
		//console.log('handleMouseLeave - After', open);
	};

	const editNode = () => {
		dispatch(selected_node_json(eval(JSON.parse(JSON.stringify(data))), false));
	};

	const cloneNode = () => {

		let getPathResult = '';
		let objectPath = '';
		const breakMap = {};
		const foundChildObjects = false;

		if (foundChildObjects === false)
		{
			getPathResult = searchObject(currentState.jsonData,
				function (value) { return value !== null && value !== undefined && value.$ID === data.$ID; });

			if (getPathResult !== null && getPathResult.length > 0)
			{
				objectPath = getPathResult[0].path.substr(0, getPathResult[0].path.lastIndexOf('.'));
				getPath(objectPath, getPathResult[0].value, 'ArrayObject');
				throw breakMap;
			}
		}
	};

	const addNode = () => {

		let getPathResult = '';
		let objectPath = '';
		let objectType = '';
		let childrenObjectFound = false;

		const jsonNode = {name: 'New Field', id: uuidv4().toString()};

		getPathResult = searchObject(currentState.jsonData,
			function (value) { return value !== null && value !== undefined && value.$ID === data.$ID; });

		if (getPathResult !== null && getPathResult.length > 0)
		{
			objectPath = getPathResult[0].path;

			Object.keys(getPathResult[0].value).map((key) => {
				if (key === 'children')
				{
					childrenObjectFound = true;

					if (getPathResult[0].value['children'].length === 0)
					{
						objectType = 'ArrayObject';
						objectPath = objectPath + '.children';
						getPath(objectPath, jsonNode, objectType);
					}
					else
					{
						objectType = 'ArrayObject';
						objectPath = objectPath + '.children';
						getPath(objectPath, jsonNode, objectType);
					}
				}
			});

			if (childrenObjectFound === false)
			{
				objectType = 'Object';
				getPath(objectPath, jsonNode, objectType);
			}
		}
	};

	const getPath = (jsonPath, nodeData, typeOfObject) => {
		const jsonData = simplify(currentState.jsonData);
		const newUUID = uuidv4().toString();

		if (jsonPath !== null && jsonPath.length > 0)
		{
			nodeData['name'] = 'New Object';
			nodeData['id'] = newUUID;
			// run dispatch method in jsonReducer to add the node
			addJSON(jsonData, jsonPath, nodeData, typeOfObject);
		}
	};

	const addJSON = (jsonData, path, jsonNodeToAdd, typeOfObject) => {

		let jsonUpdatedData = '';
		let getCurrentNodeResult = '';

		// Run dispatch method and get the updated JSON (of all objects)
		const jsonNode = RemoveParentId(jsonNodeToAdd, '$ID', '$PID');

		jsonUpdatedData = dispatch(add_object_json(jsonData, path, jsonNode, typeOfObject));

		let updatedJSONData = desimplify(jsonUpdatedData.payload);

		updatedJSONData = dispatch(fetch_json_success(updatedJSONData));

		if (Object.keys(updatedJSONData).length > 0)
		{
			getCurrentNodeResult = searchObject(updatedJSONData,
				function (value) { return value !== null && value !== undefined && value.name === jsonNode.name; });

			if (Object.keys(getCurrentNodeResult).length > 0)
			{
				dispatch(selected_node_json(eval(JSON.parse(JSON.stringify(getCurrentNodeResult[0].value))), true));
			}
		}
	};

	const removeNode = () => {
		let deletedObjectPath = '';

		const getPathResult = searchObject(currentState.jsonData,
			function (value) { return value !== null && value !== undefined && value.$ID === data.$ID; });
		const jsonData = simplify(currentState.jsonData);

		if (getPathResult !== null && getPathResult.length > 0)
		{
			deletedObjectPath = getPathResult[0].path;
			removeJSON(jsonData, deletedObjectPath);
		}
	};

	const removeJSON = (jsonData, path) => {
		const jsonUpdatedData = dispatch(remove_object_json(jsonData, path));
		return dispatch(
			fetch_json_success(desimplify(jsonUpdatedData.payload))
		);
	};

	// useEffect(() => {
	// 	console.log('Open....' , open);
	// 	setOpen(!open);
	// }, [parentName !== 'Root: []']);

	return (
		<>
			<React.Fragment key={Math.random() * 10}>
				{data && (
					<ListItem
						button
						onClick={handleClick}
						classes={{ root: classes.listItem }}
						onMouseOver={handleMouseOver}
						onMouseLeave={handleMouseLeave}
					>
						<ListItemIcon
							key={Math.random() * 10}
							classes={{ root: classes.listIcon }}>
							{open ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
						</ListItemIcon>

						<ListItemText key={Math.random() * 10} className={appear ? classes.selectedNode : null}>
							<b>
								{parentName}
							</b>
						</ListItemText>
						<>
							{appear ?
								<>
									{parentName === 'Root: []' ?
										<>
											{/* {(Object.keys(currentState.jsonData).length) > 2 ?
												<Tooltip title="Add child node">
													<AddCircleOutlineRoundedIcon onClick={addNode} fontSize="small" />
												</Tooltip>
												: null
											} */}
										</>
										:
										<>
											<Tooltip title="Edit node">
												<EditTwoToneIcon onClick={editNode} fontSize="small" />
											</Tooltip>
											{/* <Tooltip title="Clone node">
												<DoneAllRoundedIcon onClick={cloneNode} fontSize="small" />
											</Tooltip>
											<Tooltip title="Add child node">
												<AddCircleOutlineRoundedIcon onClick={addNode} fontSize="small" />
											</Tooltip>
											<Tooltip title="Remove node">
												<CancelTwoToneIcon onClick={removeNode} fontSize="small" />
											</Tooltip> */}
										</>
									}

								</>
								: ''
							}
						</>
					</ListItem>
				)
				}
			</React.Fragment>

			<Collapse
				in={parentName === 'Root: []'? true : open}
				style={{ paddingLeft: '30px' }}
			>

				<List key={Math.random() * 10} component={'div'} style={{ padding: 0 }}>
					{
						Object.keys(data).map((k) => {
							return data[k] !== null &&
              typeof [k] === 'object'  ?
								(Array.isArray(data[k]) ?
									<>
										{Array.from(data[k]).map((item, index) => (
											<>
												{data[k][index]['id'] &&
															<ShowNodes key={index} item={item} data={data[k][index]} parentID={data[k][index]['id']} parentName={data[k][index]['id'] ? data[k][index]['name'] +  ' - ' + data[k][index]['id'] : ' '} selectedId={data[k][index]['$ID']} />
												}
											</>
										))}
									</>
									:
									<>
										{k === 'module' ? <ShowNodes data={Array.of(data[k])[0]} parentID ={data[k]['id']} parentName={data[k]['id'] ? data[k]['name'] +  ' - ' + data[k]['id'] : ' '} selectedId={data[k]['$ID']} /> : null }
									</>
								) : '';
						})}
				</List>
			</Collapse>
		</>
	);
}
