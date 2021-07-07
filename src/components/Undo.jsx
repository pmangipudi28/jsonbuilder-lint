import React from 'react';
import { Grid, Tooltip, Badge, IconButton } from '@material-ui/core';
import UndoRoundedIcon from '@material-ui/icons/UndoRounded';
import { ActionCreators } from 'redux-undo';
import {useDispatch} from 'react-redux';

const Undo = () => {

	const dispatch = useDispatch();

	const undoAction = () => {
		dispatch(ActionCreators.undo());
	};

	return (
		<>
			<Grid item>
				<Tooltip title='Undo'>
					<IconButton onClick={undoAction}>
						<Badge>
							<UndoRoundedIcon style={{ color: 'white' }} fontSize='default'/>
						</Badge>
					</IconButton>
				</Tooltip>
			</Grid>
		</>
	);
};

export default Undo;
