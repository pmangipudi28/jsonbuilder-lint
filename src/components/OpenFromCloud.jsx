import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Tooltip, Typography, Button, TextField } from '@material-ui/core';
import CloudOutlinedIcon from '@material-ui/icons/CloudOutlined';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { fetch_json_success } from '../actions';
import { FileErrorComponent, handleCloudFileValidation } from './helper/InputFileValidationHelper';

const validURL = (str) => {
	const pattern = new RegExp(
		'^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$',
		'i'
	); // fragment locator
	return !!pattern.test(str);
};

const OpenFromCloud = () => {

	const dispatch = useDispatch();
	const [openDialog, setOpenDialog] = useState(false);
	const [value, setValue] = useState(null);

	// Error State
	const [isValid, setIsValid] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	// Handle Error
	const handleError = (status, errorMsg) => {
		setIsValid(status);
		setErrorMessage(errorMsg);
	};

	const handleClose = (reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setIsValid(false);
	};
	const getJsonData = React.useCallback((value) => {

		if (validURL(value)) {

			const isValid = handleCloudFileValidation(value);
			try {
				if (isValid) {
					fetch(value)
						.then((res) => {
							return res.json();
						})
						.then((data) => {
							setOpenDialog(false);
							return dispatch(fetch_json_success(eval(data)));
						});
				} else {
					throw new Error('Please Enter a valid JSON file URL');
				}
			} catch (error) {
				const Message = error.message;
				handleError(true, Message);
				console.error('Unable to fetch JSON:', error);
			}
		}
		else {
			const Message = 'Unable to fetch JSON';
			handleError(true, Message);
		}
	}, [value]);

	const handleClickOpen = () => {
		setOpenDialog(true);
	};

	const handleDialogClose = () => {
		setOpenDialog(false);
	};

	const handleDialogGo = () => {
		getJsonData(value);
	};

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<>
			<Tooltip title='Open a JSON file from Cloud'>
				<>
					<MenuItem key={Math.random() * 10} onClick={handleClickOpen} >
						<ListItemIcon>
							<CloudOutlinedIcon fontSize='small' />
						</ListItemIcon>
						<Typography variant='inherit'>Open from URL</Typography>
					</MenuItem>
					{openDialog ?
						<>
							<Dialog fullWidth={true} maxWidth='sm' disableBackdropClick
								id='dialogURL'
								open={openDialog} onClose={handleDialogClose}
								aria-labelledby='form-dialog-title'
							>
								<DialogTitle id='form-dialog-title'>Open url</DialogTitle>
								<DialogContent>
									<DialogContentText>
                      Enter a public url.
									</DialogContentText>
									<TextField
										autofocus='true'
										margin='dense'
										id='url'
										label='URL'
										fullWidth
										onChange={handleChange}
									/>
								</DialogContent>
								<FileErrorComponent isValid={isValid} handleClose={handleClose} errorMessage={errorMessage} />
								<DialogActions>
									<Button onClick={handleDialogClose}>
                    Cancel
									</Button>
									<Button onClick={handleDialogGo}>
                    GO
									</Button>
								</DialogActions>
							</Dialog>

						</>
						: null}
				</>
			</Tooltip>
		</>
	);
};

export default OpenFromCloud;
