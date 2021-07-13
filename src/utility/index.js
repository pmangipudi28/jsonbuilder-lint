import React from 'react';
import JsonSchema from 'jsonschema';
import { simplify } from 'simplifr';
import { validateJson } from '../components/helper/helper';
/**
 * check the json with schema
 * @param {object} store
 * @returns
 */

export const ValidateJsonSchema = (store) => {
	const jsonReducer = store.getState().jsonReducer.present;
	const [status] = validateJson(jsonReducer.jsonSchemaData);
	const returnData = [];
	if(status){
		if (Object.keys(jsonReducer.jsonSchemaData).length && Object.keys(jsonReducer.jsonData).length > 2 ) {

			const JsonSchemaData = JSON.parse(jsonReducer.jsonSchemaData);
			const JSONStringData = jsonReducer.jsonData;
			returnData['hasMessage'] = true;
			returnData['message'] = collectAllErrors(JsonSchema.validate(JSONStringData, JsonSchemaData));

		} else {
			returnData['hasMessage'] = false;
			returnData['message'] = '';
		}
	} else {
		returnData['hasMessage'] = false;
		returnData['message'] = '';
	}
	return returnData;
};
/**
 * collect validation error
 * @param {Object} getJSONSchemaData
 * @returns string
 */

const collectAllErrors = (getJSONSchemaData) => {
	if (Object.entries(getJSONSchemaData).length) {
		if (Object.entries(getJSONSchemaData.errors).length) {

			const listItems = getJSONSchemaData.errors.map((ValidationError, i) =>
				<li key={i} style={{ listStyle: 'none', textTransform: 'capitalize' }}>
					<span style={{ fontSize: 16 + 'px', fontWeight: '900' }}>
						{removeNumberAndString(ValidationError.path.toString()).replace(/,/g,'-')}
					</span>
					{' '}
					{ValidationError.message}
				</li>
			);

			const notificationComponent = (
				<ul>{listItems}</ul>
			);
			return notificationComponent;

		} else {
			return '';
		}
	} else {
		return '';
	}

};

/*export const GetReadOnlyProperties = (JSONObject = {}, finalObject = {}, extraKey = '') => {
    for(let key in JSONObject){
       if(typeof JSONObject[key] !== 'object'){
          if(key==="readOnly" && JSONObject[key] === 'true'){
             extraKey = extraKey.replace(new RegExp("[0-9]."),"");
             console.log("extraKey", extraKey);
             finalObject[extraKey] = JSONObject[key];
          }
       }else{
        GetReadOnlyProperties(JSONObject[key], finalObject, `${extraKey}${key}.`);
       };
    };
    return finalObject;
 };*/

/**
 * create readonly properties from json schema
 * @param {object} store
 * @returns array
 */
export const StoreJsonSchemaReadonlyInRedux = (store) => {
	const jsonReducer = store.getState().jsonReducer.present;
	const readOnlyPropertyArray = [];
	const JsonSchemaData = jsonReducer.jsonSchemaData;
	const [status] = validateJson(jsonReducer.jsonSchemaData);
	if(status){
		const jsonSchemaDataData = flatJsonData(JSON.parse(JsonSchemaData));
		for (const key in jsonSchemaDataData) {
			if (jsonSchemaDataData[key] === true && key.search('readOnly') !== -1) {

				const extraKey = removeNumberAndString(key);
				readOnlyPropertyArray.push(extraKey);

			}
		}
	}
	return readOnlyPropertyArray;
};
/**
 * check the string getting from json data with readonly array
 * @param {string} nodePath
 * @param {object} store
 * @returns boolen
 */

export const getReadOnlyStatus = (nodePath, store) => {
	const jsonReducer = store.getState().jsonReducer.present;
	if (Object.entries(jsonReducer.jsonSchemaReadOnlyData).length) {
		const jsonSchemaReadOnlyData = jsonReducer.jsonSchemaReadOnlyData;
		nodePath = removeNumberAndString(nodePath);
		if (jsonSchemaReadOnlyData.indexOf(nodePath) !== -1) {
			return true;
		} else {
			return false;
		}
	}

};

/*export const GetReadOnlyProperties = () => {


   let readOnlyPropertyArray = [];
   let JsonPropertyReadonlyArray = [];

   let jsonSchemaDataTest = flatJsonData(jsonSchemaData);
   //console.log("jsonData", jsonSchemaDataTest);
   for (let key in jsonSchemaDataTest) {
     if (jsonSchemaDataTest[key] === true && key.search('readOnly') !== -1) {

       let extraKey = removeNumberAndString(key)
       readOnlyPropertyArray.push(extraKey);

     }
   }

   console.log("readOnlyPropertyArray", readOnlyPropertyArray);
   // check the readOnly property from Json data
   let JSONDemoDataTest = flatJsonData(JSONDemoData);


    // let extraKey = removeNumberAndString(key)
    // if (readOnlyPropertyArray.indexOf(extraKey) !== -1) {
    //   JsonPropertyReadonlyArray.push(extraKey);
    // }
     // console.log("jsonData[key]", extraKey);


   console.log("JsonPropertyReadonlyArray", JsonPropertyReadonlyArray);
 }*/
// create flaten json data
/**
 * flaton the json schema
 * @param {JSON} JSONData
 * @returns object
 */
const flatJsonData = (JSONData) => {
	const jsonData = simplify(JSONData);
	return jsonData;
};
/**
 *  remove number and string from flaten json data
 * @param {string} key
 * @returns string
 */
//
const removeNumberAndString = (key) => {
	return key.replace(/[0-9].|properties.|root.|.readOnly|items./g, '');
};
