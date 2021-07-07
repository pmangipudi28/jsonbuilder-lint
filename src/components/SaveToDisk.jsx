import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Tooltip, Typography } from '@material-ui/core';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { RemoveParentId, handleSaveToPC, searchObject } from '../components/helper/helper';
import { fetch_json_success, selected_node_json } from '../actions';

const SaveToDisk = () => {

	const dispatch = useDispatch();
	const currentState = useSelector(state => state.jsonReducer.present);
	const jsonData = currentState.jsonData;

	let updatedJSONData = '';
	let getCurrentNodeResult = '';

	const handleSave = () =>
	{
		handleSaveToPC(RemoveParentId(jsonData, '$ID', '$PID'));
		updatedJSONData = dispatch(fetch_json_success(jsonData));

		console.log('Data 123456 ..... ' + JSON.stringify(currentState.selectedNodeData));

		if (Object.keys(updatedJSONData).length > 0)
		{
			getCurrentNodeResult = searchObject(updatedJSONData,
				function (value) { return value !== null && value !== undefined && value.name === currentState.selectedNodeData.name; });

			if (Object.keys(getCurrentNodeResult).length > 0)
			{
				dispatch(selected_node_json(eval(JSON.parse(JSON.stringify(getCurrentNodeResult[0].value))), true));
			}
		}
	};

	return (
		<>
			<Tooltip title='Save JSON File'>
				<>
					<MenuItem onClick={handleSave}>
						<ListItemIcon>
							<SaveOutlinedIcon fontSize='small' />
						</ListItemIcon>
						<Typography variant='inherit'>Save to Disk</Typography>
					</MenuItem>
				</>
			</Tooltip>
		</>
	);
};

export default SaveToDisk;
