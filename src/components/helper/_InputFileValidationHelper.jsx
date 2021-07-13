/* eslint-disable react/prop-types */
import React from 'react';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

export const handleFileValidation = (inputFile) => {
	const inputFileName = inputFile.target.files[0].name;
	const result = checkInputFileExtension(inputFileName);
	return result;
};

export const handleDropFileValidation = (inputFile) => {
	console.log('inputFile ==== ' + JSON.stringify(inputFile));
	const inputFileName = inputFile.path;
	const result = checkInputFileExtension(inputFileName);
	return result;
};

export const handleCloudFileValidation = (fileUrl) => {
	const inputFileName = fileUrl.substring(fileUrl.lastIndexOf('/') + 1);
	const result = checkInputFileExtension(inputFileName);
	return result;
};

const checkInputFileExtension = (fileName) => {
	if (!fileName.match(/\.(json)$/)) {
		return false;
	} else {
		return true;
	}
};

export const FileErrorComponent = (props) => {
	const { isValid, errorMessage, handleClose } = props;
	console.log(isValid);

	return (
		<Snackbar open={isValid} autoHideDuration={6000} onClose={() => handleClose()} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
			<Alert variant='filled' severity='error' onClose={() => handleClose()}>
				<strong>{errorMessage}</strong>
			</Alert>
		</Snackbar>
	);
};
