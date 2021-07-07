'use strict';

var React = require('react');
var core = require('@material-ui/core');
var reactRedux = require('react-redux');
var redux = require('redux');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var _extends$1 = require('@babel/runtime/helpers/extends');
var _objectWithoutProperties = require('@babel/runtime/helpers/objectWithoutProperties');
var _typeof = require('@babel/runtime/helpers/typeof');
var _defineProperty$1 = require('@babel/runtime/helpers/defineProperty');
var SaveOutlinedIcon = require('@material-ui/icons/SaveOutlined');
var styles = require('@material-ui/core/styles');
var FolderOpenOutlinedIcon = require('@material-ui/icons/FolderOpenOutlined');
var SaveTwoToneIcon = require('@material-ui/icons/SaveTwoTone');
var ClickAwayListener = require('@material-ui/core/ClickAwayListener');
var Grow = require('@material-ui/core/Grow');
var Paper = require('@material-ui/core/Paper');
var Popper = require('@material-ui/core/Popper');
var MenuList = require('@material-ui/core/MenuList');
var ComputerOutlinedIcon = require('@material-ui/icons/ComputerOutlined');
var MenuItem = require('@material-ui/core/MenuItem');
var ListItemIcon = require('@material-ui/core/ListItemIcon');
var CloudOutlinedIcon = require('@material-ui/icons/CloudOutlined');
var Dialog = require('@material-ui/core/Dialog');
var DialogActions = require('@material-ui/core/DialogActions');
var DialogContent = require('@material-ui/core/DialogContent');
var DialogContentText = require('@material-ui/core/DialogContentText');
var DialogTitle = require('@material-ui/core/DialogTitle');
require('@material-ui/lab/AlertTitle');
var MuiAlert = require('@material-ui/lab/Alert');
var Snackbar = require('@material-ui/core/Snackbar');
var UndoRoundedIcon = require('@material-ui/icons/UndoRounded');
var undoable = require('redux-undo');
var RedoRoundedIcon = require('@material-ui/icons/RedoRounded');
var PowerOffSharpIcon = require('@material-ui/icons/PowerOffSharp');
var SettingsOutlinedIcon = require('@material-ui/icons/SettingsOutlined');
var Grid = require('@material-ui/core/Grid');
var FormatAlignLeftOutlinedIcon = require('@material-ui/icons/FormatAlignLeftOutlined');
var IconButton = require('@material-ui/core/IconButton');
var CancelRoundedIcon = require('@material-ui/icons/CancelRounded');
var AssignmentTurnedInOutlinedIcon = require('@material-ui/icons/AssignmentTurnedInOutlined');
var Button = require('@material-ui/core/Button');
var CloudUploadIcon = require('@material-ui/icons/CloudUpload');
var DeleteIcon = require('@material-ui/icons/Delete');
var JsonSchema = require('jsonschema');
var simplifr = require('simplifr');
var CloseIcon = require('@material-ui/icons/Close');
var ArrowRightIcon = require('@material-ui/icons/ArrowRight');
var ArrowDropDownIcon = require('@material-ui/icons/ArrowDropDown');
var AddCircleOutlineRoundedIcon = require('@material-ui/icons/AddCircleOutlineRounded');
var EditTwoToneIcon = require('@material-ui/icons/EditTwoTone');
var CancelTwoToneIcon = require('@material-ui/icons/CancelTwoTone');
var Accordion = require('@material-ui/core/Accordion');
var AccordionDetails = require('@material-ui/core/AccordionDetails');
var AccordionSummary = require('@material-ui/core/AccordionSummary');
var Typography = require('@material-ui/core/Typography');
var ExpandMoreIcon = require('@material-ui/icons/ExpandMore');
var ExpandMoreRoundedIcon = require('@material-ui/icons/ExpandMoreRounded');
var ExpandLessRoundedIcon = require('@material-ui/icons/ExpandLessRounded');
var SortRoundedIcon = require('@material-ui/icons/SortRounded');
var InputBase = require('@material-ui/core/InputBase');
var SearchIcon = require('@material-ui/icons/Search');
var ClearRoundedIcon = require('@material-ui/icons/ClearRounded');
var InputAdornment = require('@material-ui/core/InputAdornment');
var Card = require('@material-ui/core/Card');
require('@material-ui/core/CardActions');
var CardContent = require('@material-ui/core/CardContent');
var _extends = require('@babel/runtime/helpers/esm/extends');
var _defineProperty = require('@babel/runtime/helpers/esm/defineProperty');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var _extends__default$1 = /*#__PURE__*/_interopDefaultLegacy(_extends$1);
var _objectWithoutProperties__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutProperties);
var _typeof__default = /*#__PURE__*/_interopDefaultLegacy(_typeof);
var _defineProperty__default$1 = /*#__PURE__*/_interopDefaultLegacy(_defineProperty$1);
var SaveOutlinedIcon__default = /*#__PURE__*/_interopDefaultLegacy(SaveOutlinedIcon);
var FolderOpenOutlinedIcon__default = /*#__PURE__*/_interopDefaultLegacy(FolderOpenOutlinedIcon);
var SaveTwoToneIcon__default = /*#__PURE__*/_interopDefaultLegacy(SaveTwoToneIcon);
var ClickAwayListener__default = /*#__PURE__*/_interopDefaultLegacy(ClickAwayListener);
var Grow__default = /*#__PURE__*/_interopDefaultLegacy(Grow);
var Paper__default = /*#__PURE__*/_interopDefaultLegacy(Paper);
var Popper__default = /*#__PURE__*/_interopDefaultLegacy(Popper);
var MenuList__default = /*#__PURE__*/_interopDefaultLegacy(MenuList);
var ComputerOutlinedIcon__default = /*#__PURE__*/_interopDefaultLegacy(ComputerOutlinedIcon);
var MenuItem__default = /*#__PURE__*/_interopDefaultLegacy(MenuItem);
var ListItemIcon__default = /*#__PURE__*/_interopDefaultLegacy(ListItemIcon);
var CloudOutlinedIcon__default = /*#__PURE__*/_interopDefaultLegacy(CloudOutlinedIcon);
var Dialog__default = /*#__PURE__*/_interopDefaultLegacy(Dialog);
var DialogActions__default = /*#__PURE__*/_interopDefaultLegacy(DialogActions);
var DialogContent__default = /*#__PURE__*/_interopDefaultLegacy(DialogContent);
var DialogContentText__default = /*#__PURE__*/_interopDefaultLegacy(DialogContentText);
var DialogTitle__default = /*#__PURE__*/_interopDefaultLegacy(DialogTitle);
var MuiAlert__default = /*#__PURE__*/_interopDefaultLegacy(MuiAlert);
var Snackbar__default = /*#__PURE__*/_interopDefaultLegacy(Snackbar);
var UndoRoundedIcon__default = /*#__PURE__*/_interopDefaultLegacy(UndoRoundedIcon);
var undoable__default = /*#__PURE__*/_interopDefaultLegacy(undoable);
var RedoRoundedIcon__default = /*#__PURE__*/_interopDefaultLegacy(RedoRoundedIcon);
var PowerOffSharpIcon__default = /*#__PURE__*/_interopDefaultLegacy(PowerOffSharpIcon);
var SettingsOutlinedIcon__default = /*#__PURE__*/_interopDefaultLegacy(SettingsOutlinedIcon);
var Grid__default = /*#__PURE__*/_interopDefaultLegacy(Grid);
var FormatAlignLeftOutlinedIcon__default = /*#__PURE__*/_interopDefaultLegacy(FormatAlignLeftOutlinedIcon);
var IconButton__default = /*#__PURE__*/_interopDefaultLegacy(IconButton);
var CancelRoundedIcon__default = /*#__PURE__*/_interopDefaultLegacy(CancelRoundedIcon);
var AssignmentTurnedInOutlinedIcon__default = /*#__PURE__*/_interopDefaultLegacy(AssignmentTurnedInOutlinedIcon);
var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button);
var CloudUploadIcon__default = /*#__PURE__*/_interopDefaultLegacy(CloudUploadIcon);
var DeleteIcon__default = /*#__PURE__*/_interopDefaultLegacy(DeleteIcon);
var JsonSchema__default = /*#__PURE__*/_interopDefaultLegacy(JsonSchema);
var CloseIcon__default = /*#__PURE__*/_interopDefaultLegacy(CloseIcon);
var ArrowRightIcon__default = /*#__PURE__*/_interopDefaultLegacy(ArrowRightIcon);
var ArrowDropDownIcon__default = /*#__PURE__*/_interopDefaultLegacy(ArrowDropDownIcon);
var AddCircleOutlineRoundedIcon__default = /*#__PURE__*/_interopDefaultLegacy(AddCircleOutlineRoundedIcon);
var EditTwoToneIcon__default = /*#__PURE__*/_interopDefaultLegacy(EditTwoToneIcon);
var CancelTwoToneIcon__default = /*#__PURE__*/_interopDefaultLegacy(CancelTwoToneIcon);
var Accordion__default = /*#__PURE__*/_interopDefaultLegacy(Accordion);
var AccordionDetails__default = /*#__PURE__*/_interopDefaultLegacy(AccordionDetails);
var AccordionSummary__default = /*#__PURE__*/_interopDefaultLegacy(AccordionSummary);
var Typography__default = /*#__PURE__*/_interopDefaultLegacy(Typography);
var ExpandMoreIcon__default = /*#__PURE__*/_interopDefaultLegacy(ExpandMoreIcon);
var ExpandMoreRoundedIcon__default = /*#__PURE__*/_interopDefaultLegacy(ExpandMoreRoundedIcon);
var ExpandLessRoundedIcon__default = /*#__PURE__*/_interopDefaultLegacy(ExpandLessRoundedIcon);
var SortRoundedIcon__default = /*#__PURE__*/_interopDefaultLegacy(SortRoundedIcon);
var InputBase__default = /*#__PURE__*/_interopDefaultLegacy(InputBase);
var SearchIcon__default = /*#__PURE__*/_interopDefaultLegacy(SearchIcon);
var ClearRoundedIcon__default = /*#__PURE__*/_interopDefaultLegacy(ClearRoundedIcon);
var InputAdornment__default = /*#__PURE__*/_interopDefaultLegacy(InputAdornment);
var Card__default = /*#__PURE__*/_interopDefaultLegacy(Card);
var CardContent__default = /*#__PURE__*/_interopDefaultLegacy(CardContent);
var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

var propTypes = {exports: {}};

var reactIs = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

reactIs_development.AsyncMode = AsyncMode;
reactIs_development.ConcurrentMode = ConcurrentMode;
reactIs_development.ContextConsumer = ContextConsumer;
reactIs_development.ContextProvider = ContextProvider;
reactIs_development.Element = Element;
reactIs_development.ForwardRef = ForwardRef;
reactIs_development.Fragment = Fragment;
reactIs_development.Lazy = Lazy;
reactIs_development.Memo = Memo;
reactIs_development.Portal = Portal;
reactIs_development.Profiler = Profiler;
reactIs_development.StrictMode = StrictMode;
reactIs_development.Suspense = Suspense;
reactIs_development.isAsyncMode = isAsyncMode;
reactIs_development.isConcurrentMode = isConcurrentMode;
reactIs_development.isContextConsumer = isContextConsumer;
reactIs_development.isContextProvider = isContextProvider;
reactIs_development.isElement = isElement;
reactIs_development.isForwardRef = isForwardRef;
reactIs_development.isFragment = isFragment;
reactIs_development.isLazy = isLazy;
reactIs_development.isMemo = isMemo;
reactIs_development.isPortal = isPortal;
reactIs_development.isProfiler = isProfiler;
reactIs_development.isStrictMode = isStrictMode;
reactIs_development.isSuspense = isSuspense;
reactIs_development.isValidElementType = isValidElementType;
reactIs_development.typeOf = typeOf;
  })();
}

if (process.env.NODE_ENV === 'production') {
  reactIs.exports = reactIs_production_min;
} else {
  reactIs.exports = reactIs_development;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$3 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$3;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$2 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes$1(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has$1(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$2);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$1(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning$1(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes$1.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes$1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactIs$1 = reactIs.exports;
var assign = objectAssign;

var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
var checkPropTypes = checkPropTypes_1;

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret$1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret$1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs$1.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret$1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = ReactPropTypesSecret_1;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs.exports;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = factoryWithThrowingShims();
}

var PropTypes = propTypes.exports;

// This module is based on https://github.com/airbnb/prop-types-exact repository.
// However, in order to reduce the number of dependencies and to remove some extra safe checks
// the module was forked.
// Only exported for test purposes.
var specialProperty = "exact-prop: \u200B";
function exactProp(propTypes) {
  if (process.env.NODE_ENV === 'production') {
    return propTypes;
  }

  return _extends__default['default']({}, propTypes, _defineProperty__default['default']({}, specialProperty, function (props) {
    var unsupportedProps = Object.keys(props).filter(function (prop) {
      return !propTypes.hasOwnProperty(prop);
    });

    if (unsupportedProps.length > 0) {
      return new Error("The following props are not supported: ".concat(unsupportedProps.map(function (prop) {
        return "`".concat(prop, "`");
      }).join(', '), ". Please remove them."));
    }

    return null;
  }));
}

var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var nested = hasSymbol ? Symbol.for('mui.nested') : '__THEME_NESTED__';

var ThemeContext = React__default['default'].createContext(null);

if (process.env.NODE_ENV !== 'production') {
  ThemeContext.displayName = 'ThemeContext';
}

function useTheme() {
  var theme = React__default['default'].useContext(ThemeContext);

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React__default['default'].useDebugValue(theme);
  }

  return theme;
}

function mergeOuterLocalTheme(outerTheme, localTheme) {
  if (typeof localTheme === 'function') {
    var mergedTheme = localTheme(outerTheme);

    if (process.env.NODE_ENV !== 'production') {
      if (!mergedTheme) {
        console.error(['Material-UI: You should return an object from your theme function, i.e.', '<ThemeProvider theme={() => ({})} />'].join('\n'));
      }
    }

    return mergedTheme;
  }

  return _extends__default['default']({}, outerTheme, localTheme);
}
/**
 * This component takes a `theme` prop.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */


function ThemeProvider(props) {
  var children = props.children,
      localTheme = props.theme;
  var outerTheme = useTheme();

  if (process.env.NODE_ENV !== 'production') {
    if (outerTheme === null && typeof localTheme === 'function') {
      console.error(['Material-UI: You are providing a theme function prop to the ThemeProvider component:', '<ThemeProvider theme={outerTheme => outerTheme} />', '', 'However, no outer theme is present.', 'Make sure a theme is already injected higher in the React tree ' + 'or provide a theme object.'].join('\n'));
    }
  }

  var theme = React__default['default'].useMemo(function () {
    var output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);

    if (output != null) {
      output[nested] = outerTheme !== null;
    }

    return output;
  }, [localTheme, outerTheme]);
  return /*#__PURE__*/React__default['default'].createElement(ThemeContext.Provider, {
    value: theme
  }, children);
}

process.env.NODE_ENV !== "production" ? ThemeProvider.propTypes = {
  /**
   * Your component tree.
   */
  children: PropTypes.node.isRequired,

  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired
} : void 0;

if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_ENV !== "production" ? ThemeProvider.propTypes = exactProp(ThemeProvider.propTypes) : void 0;
}

var colorCode = {
  appBackground: '#f4f5fd',
  headerToolbar: '#545A61',
  sectionBackgound: '#B7BEBB',
  paperBackground: '#0000008a',
  errorMessage: '#E2231A',
  pageContent: '#B7BEBB',
  editorPaper: '#f5f6fa',

  /*********Property Tree */
  textboxPropertyTreeColor: '#fafbff',
  propertyTreeRoot: '#57a3eb',

  /**********node update tree */
  paperBorderNodeUpdateTree: '#E7EFEB',
  paperBackgroundNodeUpdateTree: 'transparent',
  searchedValueNodeUpdateTree: '#e4eb31',
  searchedTextNodeUpdateTree: 'red',
  listIconNodeUpdateTree: '#ff6464'
};
var jsonBuilderTheme = core.createMuiTheme({
  palette: {
    primary: {
      main: colorCode.appBackground
    },
    secondary: {
      main: colorCode.headerToolbar
    },
    error: {
      main: colorCode.errorMessage
    },

    /**********************Text Color */
    contentColor: {
      white: '#fff',
      black: '#000',
      grey: '#808080'
    },

    /*********header */
    header: {
      main: colorCode.headerToolbar,
      contrastText: '#fff'
    },
    pageContent: {
      main: colorCode.pageContent,
      contrastText: '#000'
    },

    /****************View Section */
    tabBgViewSection: {
      main: '#585b5f'
    },

    /*******editor */
    editorPaper: {
      main: colorCode.editorPaper
    },

    /**********property tree */
    textboxPropertyTree: {
      main: colorCode.textboxPropertyTreeColor
    },
    propertyTreeRoot: {
      main: colorCode.propertyTreeRoot
    },
    searchInputPropertyTree: {
      main: 'd3d3d3'
    },

    /***************property update */
    accordionSectionPropertyUpdate: {
      main: 'linear-gradient(182deg, #e1e6e6, #fffffff5)'
    },

    /********************* node update tree */
    paperBorderNodeUpdateTree: {
      main: '#E7EFEB'
    },
    paperBackgroundNodeUpdateTree: {
      main: 'transparent'
    },
    searchedValueNodeUpdateTree: {
      main: '#e4eb31'
    },
    searchedTextNodeUpdateTree: {
      main: 'red'
    },
    listIconNodeUpdateTree: {
      main: '#ff6464'
    },

    /***************JSON Schema window */
    buttonStyleJsonSchemaWindow: {
      main: 'linear-gradient(45deg, #545A61 30%, #545A61 100%)'
    },
    tabBottomJsonSchemaWindow: {
      main: '#e8e8e8'
    },

    /*******************View Section */
    viewSectiontab: {
      main: '#818284',
      border: '#19f5f5',
      boxshadow: '#484747'
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(',')
  },
  shape: {
    borderRadius: '12px'
  },
  props: {
    // Name of the component
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true // No more ripple, on the whole application!

    }
  },
  overrides: {
    MuiApiBar: {
      root: {
        transform: 'translateZ(0)'
      }
    },
    MuiCssBaseline: {
      '@global': {
        '*': {
          'scrollbar-width': 'thin'
        },
        '*::-webkit-scrollbar': {
          width: '6px',
          height: '6px'
        },

        /* Track */
        '::-webkit-scrollbar-track': {
          background: '#f1f1f1'
        },

        /* Handle */
        '::-webkit-scrollbar-thumb': {
          background: '#57a3eb'
        },

        /* Handle on hover */
        '::-webkit-scrollbar-thumb:hover': {
          background: '#555'
        }
      }
    }
  }
});

function OpenFromDisk() {
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(core.Tooltip, {
    title: "Open a JSON file from disk"
  }, /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("label", {
    htmlFor: "json-file"
  }, /*#__PURE__*/React__default['default'].createElement(MenuItem__default['default'], null, /*#__PURE__*/React__default['default'].createElement(ListItemIcon__default['default'], null, /*#__PURE__*/React__default['default'].createElement(ComputerOutlinedIcon__default['default'], {
    fontSize: "small"
  })), /*#__PURE__*/React__default['default'].createElement(core.Typography, {
    variant: "inherit"
  }, "Open from Disk"))))));
}

var FETCH_JSON_REQUEST$1 = 'FETCH_JSON_REQUEST';
var FETCH_JSON_SUCCESS$1 = 'FETCH_JSON_SUCCESS';
var UPDATE_JSON$1 = 'UPDATE_JSON';
var SAVE_JSON_SCHEMA$1 = 'SAVE_JSON_SCHEMA';
var SAVE_JSON_SCHEMA_STATUS$1 = 'SAVE_JSON_SCHEMA_STATUS';
var SAVE_TEMP_JSON$1 = "SAVE_TEMP_JSON"; // Temporary JSON for Validation

var SAVE_CODE_JSON$1 = "SAVE_CODE_JSON"; // Temporary JSON for Validation

var NOT_PROPER_JSON$1 = "NOT_PROPER_JSON";
var SELECTED_NODE_JSON$1 = 'SELECTED_NODE_JSON';
var SET_TEMP_JSON_VALUE$1 = 'SET_TEMP_JSON_VALUE';
var SAVE_JSON_SCHEMA_READONLY$1 = 'SAVE_JSON_SCHEMA_READONLY';
var REMOVE_OBJECT_JSON$1 = 'REMOVE_OBJECT_JSON';
var REMOVE_NODE_JSON$1 = 'REMOVE_NODE_JSON';
var ADD_NODE_JSON$1 = 'ADD_NODE_JSON';
var ADD_OBJECT_JSON$1 = 'ADD_OBJECT_JSON';
var fetch_json_request = function fetch_json_request() {
  return {
    type: FETCH_JSON_REQUEST$1
  };
};
var fetch_json_success = function fetch_json_success(data) {
  return {
    type: FETCH_JSON_SUCCESS$1,
    payload: data
  };
};
var set_temp_json = function set_temp_json() {
  return {
    type: SET_TEMP_JSON_VALUE$1
  };
};
var update_json = function update_json(data, path, key, json) {
  return {
    type: UPDATE_JSON$1,
    payload: data,
    path: path,
    key: key,
    json: json
  };
};
var add_object_json = function add_object_json(data, path, jsonToAdd, typeOfObject) {
  return {
    type: ADD_OBJECT_JSON$1,
    payload: data,
    path: path,
    jsonToAdd: jsonToAdd,
    typeOfObject: typeOfObject
  };
};
var add_node_json = function add_node_json(data, path, jsonToAdd) {
  return {
    type: ADD_NODE_JSON$1,
    payload: data,
    path: path,
    jsonToAdd: jsonToAdd
  };
};
var remove_object_json = function remove_object_json(data, path) {
  return {
    type: REMOVE_OBJECT_JSON$1,
    payload: data,
    path: path
  };
};
var remove_node_json = function remove_node_json(data, path) {
  return {
    type: REMOVE_NODE_JSON$1,
    payload: data,
    path: path
  };
};
var selected_node_json = function selected_node_json(selectedNodeData, updated) {
  return {
    type: SELECTED_NODE_JSON$1,
    selectedNodeData: selectedNodeData,
    updated: updated
  };
};
var save_json_schema = function save_json_schema(data) {
  return {
    type: SAVE_JSON_SCHEMA$1,
    payload: data
  };
};
var save_json_schema_status = function save_json_schema_status(data) {
  return {
    type: SAVE_JSON_SCHEMA_STATUS$1,
    payload: data
  };
};
var save_code_json = function save_code_json(data) {
  return {
    type: SAVE_CODE_JSON$1,
    payload: data
  };
};
var save_temp_json = function save_temp_json(data) {
  return {
    type: SAVE_TEMP_JSON$1,
    payload: data
  };
};
var not_proper_json = function not_proper_json() {
  return {
    type: NOT_PROPER_JSON$1,
    properJSON: false
  };
};
var save_json_schema_readonly = function save_json_schema_readonly(data) {
  return {
    type: SAVE_JSON_SCHEMA_READONLY$1,
    payload: data
  };
};

var handleFileValidation = function handleFileValidation(inputFile) {
  var result;
  var inputFileName = inputFile.target.files[0].name;
  result = checkInputFileExtension(inputFileName);
  return result;
};
var handleCloudFileValidation = function handleCloudFileValidation(fileUrl) {
  var result;
  var inputFileName = fileUrl.substring(fileUrl.lastIndexOf('/') + 1);
  result = checkInputFileExtension(inputFileName);
  return result;
};

var checkInputFileExtension = function checkInputFileExtension(fileName) {
  if (!fileName.match(/\.(json)$/)) {
    return false;
  } else {
    return true;
  }
};

var FileErrorComponent = function FileErrorComponent(props) {
  var isValid = props.isValid,
      errorMessage = props.errorMessage,
      handleClose = props.handleClose;
  console.log(isValid);
  return /*#__PURE__*/React__default['default'].createElement(Snackbar__default['default'], {
    open: isValid,
    autoHideDuration: 6000,
    onClose: function onClose() {
      return handleClose();
    },
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'center'
    }
  }, /*#__PURE__*/React__default['default'].createElement(MuiAlert__default['default'], {
    variant: "filled",
    severity: "error",
    onClose: function onClose() {
      return handleClose();
    }
  }, /*#__PURE__*/React__default['default'].createElement("strong", null, errorMessage)));
};

function validURL(str) {
  var pattern = new RegExp("^(https?:\\/\\/)?" + // protocol
  "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
  "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
  "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
  "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
  "(\\#[-a-z\\d_]*)?$", "i"); // fragment locator

  return !!pattern.test(str);
}

function OpenFromCloud() {
  var dispatch = reactRedux.useDispatch();

  var _useState = React.useState(false),
      _useState2 = _slicedToArray__default['default'](_useState, 2),
      openDialog = _useState2[0],
      setOpenDialog = _useState2[1];

  var _useState3 = React.useState(null),
      _useState4 = _slicedToArray__default['default'](_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray__default['default'](_useState5, 2);
      _useState6[0];
      var setLoading = _useState6[1];

  var _useState7 = React.useState(0),
      _useState8 = _slicedToArray__default['default'](_useState7, 2);
      _useState8[0];
      var setLength = _useState8[1]; // Error State


  var _useState9 = React.useState(false),
      _useState10 = _slicedToArray__default['default'](_useState9, 2),
      isValid = _useState10[0],
      setIsValid = _useState10[1];

  var _useState11 = React.useState(""),
      _useState12 = _slicedToArray__default['default'](_useState11, 2),
      errorMessage = _useState12[0],
      setErrorMessage = _useState12[1];

  reactRedux.useSelector(function (state) {
    return state.jsonReducer.present;
  }); // Handle Error 
  // Handle Error 

  var handleError = function handleError(status, errorMsg) {
    setIsValid(status);
    setErrorMessage(errorMsg);
  };

  var handleClose = function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setIsValid(false);
  };

  var getJsonData = React__default['default'].useCallback(function (value) {
    if (validURL(value)) {
      setLoading(true);

      var _isValid = handleCloudFileValidation(value);

      try {
        if (_isValid) {
          fetch(value).then(function (res) {
            return res.json();
          }).then(function (data) {
            setLoading(false);
            setLength(Object.keys(data).length);
            setOpenDialog(false);
            return dispatch(fetch_json_success(eval(data)));
          });
        } else {
          throw new Error("Please Enter a valid JSON file URL");
        }
      } catch (error) {
        var Message = error.message;
        handleError(true, Message);
        console.error("Unable to fetch JSON:", error);
      }
    } else {
      var _Message = "Unable to fetch JSON";
      handleError(true, _Message);
      console.log("Not a valid URL");
    }
  }, [value]);

  var handleClickOpen = function handleClickOpen() {
    setOpenDialog(true);
  };

  var handleDialogClose = function handleDialogClose() {
    setOpenDialog(false);
  };

  var handleDialogGo = function handleDialogGo() {
    getJsonData(value); // setOpenDialog(false);
  };

  var handleChange = function handleChange(e) {
    setValue(e.target.value); // getJsonData(e.target.value);
  };

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(core.Tooltip, {
    title: "Open a JSON file from Cloud"
  }, /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(MenuItem__default['default'], {
    onClick: handleClickOpen
  }, /*#__PURE__*/React__default['default'].createElement(ListItemIcon__default['default'], null, /*#__PURE__*/React__default['default'].createElement(CloudOutlinedIcon__default['default'], {
    fontSize: "small"
  })), /*#__PURE__*/React__default['default'].createElement(core.Typography, {
    variant: "inherit"
  }, "Open from URL")), openDialog ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(Dialog__default['default'], {
    fullWidth: true,
    maxWidth: "sm",
    disableBackdropClick: true,
    id: "dialogURL",
    open: openDialog,
    onClose: handleDialogClose,
    "aria-labelledby": "form-dialog-title"
  }, /*#__PURE__*/React__default['default'].createElement(DialogTitle__default['default'], {
    id: "form-dialog-title"
  }, "Open url"), /*#__PURE__*/React__default['default'].createElement(DialogContent__default['default'], null, /*#__PURE__*/React__default['default'].createElement(DialogContentText__default['default'], null, "Enter a public url."), /*#__PURE__*/React__default['default'].createElement(core.TextField, {
    autoFocus: true,
    margin: "dense",
    id: "url",
    label: "URL",
    fullWidth: true,
    onChange: handleChange
  })), /*#__PURE__*/React__default['default'].createElement(FileErrorComponent, {
    isValid: isValid,
    handleClose: handleClose,
    errorMessage: errorMessage
  }), /*#__PURE__*/React__default['default'].createElement(DialogActions__default['default'], null, /*#__PURE__*/React__default['default'].createElement(core.Button, {
    onClick: handleDialogClose
  }, "Cancel"), /*#__PURE__*/React__default['default'].createElement(core.Button, {
    onClick: handleDialogGo
  }, "GO")))) : null)));
}

function Undo() {
  var dispatch = reactRedux.useDispatch();

  var undoAction = function undoAction() {
    dispatch(undoable.ActionCreators.undo());
  };

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default['default'].createElement(core.Tooltip, {
    title: "Undo"
  }, /*#__PURE__*/React__default['default'].createElement(core.IconButton, {
    onClick: undoAction
  }, /*#__PURE__*/React__default['default'].createElement(core.Badge, null, /*#__PURE__*/React__default['default'].createElement(UndoRoundedIcon__default['default'], {
    style: {
      color: "white"
    },
    fontSize: "medium"
  }))))));
}

function Redo() {
  var dispatch = reactRedux.useDispatch();

  var redoAction = function redoAction() {
    dispatch(undoable.ActionCreators.redo());
  };

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default['default'].createElement(core.Tooltip, {
    title: "Redo"
  }, /*#__PURE__*/React__default['default'].createElement(core.IconButton, {
    onClick: redoAction
  }, /*#__PURE__*/React__default['default'].createElement(core.Badge, null, /*#__PURE__*/React__default['default'].createElement(RedoRoundedIcon__default['default'], {
    style: {
      color: "white"
    },
    fontSize: "medium"
  }))))));
}

var closeWindow = function closeWindow() {
  window.open("", "_self");
  window.close();
};

function PowerOff() {
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default['default'].createElement(core.Tooltip, {
    title: "Close the application"
  }, /*#__PURE__*/React__default['default'].createElement(core.IconButton, {
    onClick: closeWindow
  }, /*#__PURE__*/React__default['default'].createElement(core.Badge, null, /*#__PURE__*/React__default['default'].createElement(PowerOffSharpIcon__default['default'], {
    style: {
      color: "white"
    },
    fontSize: "medium"
  }))))));
}

var validateJson = function validateJson(jsonData) {
  var message = "";

  try {
    JSON.parse(jsonData);
    return [true, message];
  } catch (error) {
    message = error.message;
    return [false, message];
  }
};
var convertToJson = function convertToJson(obj) {
  // Generate a random value structured as a GUID
  var guid = function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }; // Check if a value is an object


  var isObject = function isObject(value) {
    return _typeof__default['default'](value) === 'object';
  }; // Check if an object is an array


  var isArray = function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  };

  var setParent = function setParent(o, key, parentid) {
    o["$ID"] = guid();

    if (!parentid) {
      parentid = o["$ID"];
    }

    o["$PID"] = parentid;
    parentid = o["$ID"];

    for (var n in o) {
      if (isObject(o[n]) && !isArray(o)) {
        setParent(o[n], key, parentid);
      }

      if (isObject(o[n]) && isArray(o[n])) {
        var objchild = o[n];

        for (var i = 0; i < objchild.length; i++) {
          var obj = objchild[i];
          setParent(obj, key, parentid);
        }
      }
    }

    return o;
  };

  return setParent(obj, "$ID", "ROOT");
}; // Check if a value is an object

var RemoveParentId = function RemoveParentId(o, id, pid) {
  // Check if a value is an object
  var isObject = function isObject(value) {
    return _typeof__default['default'](value) === 'object';
  }; // Check if an object is an array


  var isArray = function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  };

  delete o[id];
  delete o[pid];

  for (var n in o) {
    if (isObject(o[n]) && !isArray(o)) {
      RemoveParentId(o[n], id, pid);
    }

    if (isObject(o[n]) && isArray(o[n])) {
      var objchild = o[n];

      for (var i = 0; i < objchild.length; i++) {
        var obj = objchild[i];
        RemoveParentId(obj, id, pid);
      }
    }
  }

  return o;
};
var searchObject = function searchObject(object, matchCallback, currentPath, result, searched) {
  currentPath = currentPath || '';
  result = result || [];
  searched = searched || [];

  if (searched.indexOf(object) !== -1 && object === Object(object)) {
    return;
  }

  searched.push(object);

  if (matchCallback(object)) {
    result.push({
      path: currentPath,
      value: object
    });
  }

  try {
    if (object === Object(object)) {
      for (var property in object) {
        if (property.indexOf("$") !== 0) {
          searchObject(object[property], matchCallback, currentPath + "." + property, result, searched);
        }
      }
    }
  } catch (e) {
    throw e;
  }

  return result;
};
var uuidv4 = function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
    return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
  });
};
var handleSaveToPC = function handleSaveToPC(jsonData) {
  var newDate = new Date();
  jsonData.version = '1.0.0';
  var fileData = JSON.stringify(jsonData, null, 2);
  var blob = new Blob([fileData], {
    type: "application/json"
  });
  var url = URL.createObjectURL(blob);
  var link = document.createElement('a');
  link.download = "json- " + newDate.toLocaleString() + ".json";
  link.href = url;
  link.click();
};

function SaveToDisk() {
  var currentState = reactRedux.useSelector(function (state) {
    return state.jsonReducer.present;
  });

  var handleSave = function handleSave() {
    handleSaveToPC(RemoveParentId(currentState.jsonData, "$ID", "$PID"));
  };

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(core.Tooltip, {
    title: "Save JSON File"
  }, /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(MenuItem__default['default'], {
    onClick: handleSave
  }, /*#__PURE__*/React__default['default'].createElement(ListItemIcon__default['default'], null, /*#__PURE__*/React__default['default'].createElement(SaveOutlinedIcon__default['default'], {
    fontSize: "small"
  })), /*#__PURE__*/React__default['default'].createElement(core.Typography, {
    variant: "inherit"
  }, "Save to Disk")))));
}

function SaveToURL() {
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(core.Tooltip, {
    title: "Open a JSON file from Cloud"
  }, /*#__PURE__*/React__default['default'].createElement(MenuItem__default['default'], null, /*#__PURE__*/React__default['default'].createElement(ListItemIcon__default['default'], null, /*#__PURE__*/React__default['default'].createElement(CloudOutlinedIcon__default['default'], {
    fontSize: "small"
  })), /*#__PURE__*/React__default['default'].createElement(core.Typography, {
    variant: "inherit"
  }, "Save to URL"))));
}

styles.makeStyles(function (theme) {
  return {
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2)
      }
    },
    alertRadius: {
      borderRadius: 0,
      backgroundColor: '#f23f2e',
      color: '#ffffff',
      "& .MuiAlert-icon": {
        color: '#ffffff'
      }
    }
  };
});

function Alert$1(props) {
  return /*#__PURE__*/React__default['default'].createElement(MuiAlert__default['default'], _extends__default$1['default']({
    elevation: 6,
    variant: "filled"
  }, props));
}

var SuccessMessage = function SuccessMessage(_ref2) {
  var openAlertbar = _ref2.openAlertbar,
      successMessage = _ref2.successMessage,
      vertical = _ref2.vertical,
      horizontal = _ref2.horizontal,
      handleCloseSuccess = _ref2.handleCloseSuccess;
  return /*#__PURE__*/React__default['default'].createElement(Snackbar__default['default'], {
    anchorOrigin: {
      vertical: vertical,
      horizontal: horizontal
    },
    open: openAlertbar,
    autoHideDuration: 1000,
    key: vertical + horizontal,
    onClose: function onClose() {
      return handleCloseSuccess();
    }
  }, /*#__PURE__*/React__default['default'].createElement(Alert$1, {
    severity: "info",
    onClose: function onClose() {
      return handleCloseSuccess();
    }
  }, successMessage));
};

/**
 * check the json with schema
 * @param {object} store 
 * @returns 
 */

var ValidateJsonSchema = function ValidateJsonSchema(store) {
  var returnData = [];

  if (Object.keys(store.getState().jsonReducer.present.jsonSchemaData).length && Object.keys(store.getState().jsonReducer.present.jsonData).length > 2) {
    var JsonSchemaData = store.getState().jsonReducer.present.jsonSchemaData;
    var JSONStringData = store.getState().jsonReducer.present.jsonData;
    returnData["hasMessage"] = true;
    returnData["message"] = collectAllErrors(JsonSchema__default['default'].validate(JSONStringData, JsonSchemaData));
  } else {
    returnData["hasMessage"] = false;
    returnData["message"] = "";
  }

  return returnData;
};
/**
 * collect validation error
 * @param {Object} getJSONSchemaData 
 * @returns string
 */

var collectAllErrors = function collectAllErrors(getJSONSchemaData) {
  if (Object.entries(getJSONSchemaData).length) {
    if (Object.entries(getJSONSchemaData.errors).length) {
      var listItems = getJSONSchemaData.errors.map(function (ValidationError) {
        return /*#__PURE__*/React__default['default'].createElement("li", {
          style: {
            listStyle: "none",
            textTransform: "capitalize"
          }
        }, /*#__PURE__*/React__default['default'].createElement("span", {
          style: {
            fontSize: 16 + "px",
            fontWeight: "900"
          }
        }, removeNumberAndString(ValidationError.path.toString()).replace(/,/g, '-')), " ", ValidationError.message);
      });
      var notificationComponent = /*#__PURE__*/React__default['default'].createElement("ul", null, listItems);
      return notificationComponent;
    } else {
      return "";
    }
  } else {
    return "";
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


var StoreJsonSchemaReadonlyInRedux = function StoreJsonSchemaReadonlyInRedux(store) {
  var readOnlyPropertyArray = [];
  var JsonSchemaData = store.getState().jsonReducer.present.jsonSchemaData;
  var jsonSchemaDataData = flatJsonData(JsonSchemaData);

  for (var key in jsonSchemaDataData) {
    if (jsonSchemaDataData[key] === true && key.search('readOnly') !== -1) {
      var extraKey = removeNumberAndString(key);
      readOnlyPropertyArray.push(extraKey);
    }
  }

  console.log("readOnlyPropertyArray", readOnlyPropertyArray);
  return readOnlyPropertyArray;
};
/**
 * check the string getting from json data with readonly array
 * @param {string} nodePath 
 * @param {object} store 
 * @returns boolen
 */

var getReadOnlyStatus = function getReadOnlyStatus(nodePath, store) {
  if (Object.entries(store.getState().jsonReducer.present.jsonSchemaReadOnlyData).length) {
    var jsonSchemaReadOnlyData = store.getState().jsonReducer.present.jsonSchemaReadOnlyData; // console.log("jsonSchemaReadOnlyData", jsonSchemaReadOnlyData);

    nodePath = removeNumberAndString(nodePath);

    if (jsonSchemaReadOnlyData.indexOf(nodePath) !== -1) {
      // console.log("nodePath", nodePath);
      return true;
    } else {
      //console.log("nodePath", nodePath);
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

var flatJsonData = function flatJsonData(JSONData) {
  var jsonData = simplifr.simplify(JSONData);
  return jsonData;
};
/**
 *  remove number and string from flaten json data
 * @param {string} key 
 * @returns string
 */
//


var removeNumberAndString = function removeNumberAndString(key) {
  return key.replace(/[0-9].|properties.|root.|.readOnly|items./g, "");
};

var useStyles$a = core.makeStyles({
  root: {
    flexGrow: 1
  },
  pageContent: {
    margin: jsonBuilderTheme.spacing(0),
    padding: jsonBuilderTheme.spacing(0),
    backgroundColor: 'transparent',
    borderRadius: '0px',
    height: 'calc(100vh - 0px)',
    minHeight: '80px',
    overflow: 'clip',
    '& .MuiBackdrop-root': {
      backgroundColor: 'transparent'
    }
  },
  paper: {
    padding: jsonBuilderTheme.spacing(0),
    textAlign: 'center',
    color: jsonBuilderTheme.palette.text.secondary,
    overflow: 'hidden',
    height: 'calc(100vh - 155px)',
    minHeight: '64px',
    elevation: 1,
    backgroundColor: jsonBuilderTheme.palette.editorPaper.main,
    borderRadius: '0px'
  },
  paper2: {
    overflowY: 'clip'
  },
  dialog: {
    overflow: 'clip'
  },
  paperHeight: {
    height: '100vh'
  },
  resizeTextArea: {
    width: '100%',
    border: 'none',
    height: 'calc(100vh - 180px)',
    minHeight: '27px',
    overflow: 'unset'
  },
  toolbar: {
    textAlign: 'left',
    padding: '4px 8px',
    background: '#545454',
    color: '#fff',
    marginBottom: '0px'
  },
  tooltip: {
    marginRight: jsonBuilderTheme.spacing(1),
    cursor: 'pointer'
  },
  customizedButton: {
    position: 'absolute',
    left: '96%',
    top: '2%',
    backgroundColor: 'lightgray',
    color: 'gray'
  },
  button: {
    margin: jsonBuilderTheme.spacing(1)
  }
});

var SchemaView = function SchemaView() {
  var classes = useStyles$a();
  var dispatch = reactRedux.useDispatch();

  var _React$useState = React__default['default'].useState(false),
      _React$useState2 = _slicedToArray__default['default'](_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var uploadInputRef = React.useRef(null); //JSON validation code

  var store = reactRedux.useStore();

  var _useState = React.useState(false),
      _useState2 = _slicedToArray__default['default'](_useState, 2);
      _useState2[0];
      _useState2[1];

  var currentStateJsonData = reactRedux.useSelector(function (state) {
    return state.jsonReducer.present.jsonSchemaData;
  });

  var handleClickOpen = function handleClickOpen() {
    setOpen(true);
  };

  var handleClose = function handleClose() {
    setOpen(false);
  };

  var handleNoSchema = function handleNoSchema() {
    dispatch(save_json_schema([]), 0);
  };

  var handleCapture = function handleCapture(e) {
    var isValid = handleFileValidation(e);

    if (!isValid) ; else {
      var fileReader = new FileReader();
      fileReader.readAsText(e.target.files[0], "UTF-8");

      fileReader.onload = function (e) {
        try {
          dispatch(save_json_schema(JSON.parse(e.target.result)), 1);
          var readOnlyJsonSchemaArray = StoreJsonSchemaReadonlyInRedux(store);
          dispatch(save_json_schema_readonly(readOnlyJsonSchemaArray), 1);
        } catch (_unused) {}
      };
    }
  };

  var showAlert = function showAlert() {
    var getJSONSchemaData = ValidateJsonSchema(store);

    if (getJSONSchemaData['hasMessage']) {
      if (_typeof__default['default'](getJSONSchemaData['message']) === "object") {
        dispatch(save_json_schema_status(1), 1);
      }
    }
  };

  React.useEffect(function () {
    showAlert();
  }, [currentStateJsonData]);
  var currentState = reactRedux.useSelector(function (state) {
    return state.jsonReducer.present;
  });
  var schemaData = currentState.jsonSchemaData;
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(MenuItem__default['default'], {
    onClick: handleClickOpen
  }, /*#__PURE__*/React__default['default'].createElement(ListItemIcon__default['default'], null, /*#__PURE__*/React__default['default'].createElement(AssignmentTurnedInOutlinedIcon__default['default'], {
    fontSize: "small"
  })), /*#__PURE__*/React__default['default'].createElement(core.Typography, {
    component: "span",
    variant: "inherit"
  }, "Configure Schema")), /*#__PURE__*/React__default['default'].createElement(Dialog__default['default'], {
    open: open,
    fullWidth: true,
    disableBackdropClick: true,
    maxWidth: "lg",
    className: classes.pageContent
  }, /*#__PURE__*/React__default['default'].createElement(DialogContent__default['default'], {
    className: classes.dialog
  }, /*#__PURE__*/React__default['default'].createElement("input", _defineProperty__default$1['default']({
    ref: uploadInputRef,
    type: "file",
    accept: "application/json",
    style: {
      display: "none"
    },
    onChange: handleCapture
  }, "type", "file")), /*#__PURE__*/React__default['default'].createElement(Button__default['default'], {
    onClick: function onClick() {
      return uploadInputRef.current && uploadInputRef.current.click();
    },
    variant: "contained",
    component: "span",
    startIcon: /*#__PURE__*/React__default['default'].createElement(CloudUploadIcon__default['default'], null)
  }, "Upload Schema"), /*#__PURE__*/React__default['default'].createElement(Button__default['default'], {
    variant: "contained",
    color: "secondary",
    className: classes.button,
    onClick: handleNoSchema,
    startIcon: /*#__PURE__*/React__default['default'].createElement(DeleteIcon__default['default'], null)
  }, "Set No Schema"), /*#__PURE__*/React__default['default'].createElement(DialogContentText__default['default'], null, /*#__PURE__*/React__default['default'].createElement(Grid__default['default'], {
    container: true
  }, /*#__PURE__*/React__default['default'].createElement(Grid__default['default'], {
    item: true,
    xs: 12
  }, /*#__PURE__*/React__default['default'].createElement(Paper__default['default'], {
    variant: "elevation",
    className: classes.paper
  }, schemaData && Object.keys(schemaData).length > 0 ? /*#__PURE__*/React__default['default'].createElement(CodeView$1, {
    schemaData: schemaData
  }) : null))))), /*#__PURE__*/React__default['default'].createElement(DialogActions__default['default'], null, /*#__PURE__*/React__default['default'].createElement(IconButton__default['default'], {
    onClick: handleClose,
    color: "primary",
    className: classes.customizedButton
  }, /*#__PURE__*/React__default['default'].createElement(CancelRoundedIcon__default['default'], null)))));
};
var CodeView$1 = function CodeView(_ref) {
  var schemaData = _ref.schemaData,
      _ref$replacer = _ref.replacer,
      replacer = _ref$replacer === void 0 ? null : _ref$replacer,
      _ref$space = _ref.space,
      space = _ref$space === void 0 ? 2 : _ref$space;
  var classes = useStyles$a();
  var dispatch = reactRedux.useDispatch();

  var _useState3 = React.useState({}),
      _useState4 = _slicedToArray__default['default'](_useState3, 2),
      codeView = _useState4[0],
      setCodeView = _useState4[1];

  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray__default['default'](_useState5, 2);
      _useState6[0];
      var setIsValid = _useState6[1];

  var _useState7 = React.useState(''),
      _useState8 = _slicedToArray__default['default'](_useState7, 2),
      errorMessage = _useState8[0],
      setErrorMessage = _useState8[1];

  var _useState9 = React.useState(''),
      _useState10 = _slicedToArray__default['default'](_useState9, 2),
      successMessage = _useState10[0],
      setSuccessMessage = _useState10[1];

  var _React$useState3 = React__default['default'].useState({
    openSnackbar: false,
    vertical: 'top',
    horizontal: 'center'
  }),
      _React$useState4 = _slicedToArray__default['default'](_React$useState3, 2),
      state = _React$useState4[0],
      setState = _React$useState4[1];

  var vertical = state.vertical,
      horizontal = state.horizontal,
      openSnackbar = state.openSnackbar;

  var handleCloseSuccess = function handleCloseSuccess() {
    setState({
      openSnackbar: false,
      vertical: 'top',
      horizontal: 'center'
    });
  };

  var currentStateJsonData = reactRedux.useSelector(function (state) {
    return state.jsonReducer.present.jsonSchemaData;
  });
  var store = reactRedux.useStore();

  var prettyJson = function prettyJson(e) {
    var status, message;

    var _validateJson = validateJson(e.target.value);

    var _validateJson2 = _slicedToArray__default['default'](_validateJson, 2);

    status = _validateJson2[0];
    message = _validateJson2[1];
    setCodeView(e.target.value);

    if (status) {
      isValidJson(e.target.value);
    } else {
      isInValidJson(message);
    }
  };

  var isValidJson = function isValidJson(jsonData) {
    setIsValid(true);
    setErrorMessage("");
  };

  var isInValidJson = function isInValidJson(message) {
    setErrorMessage(message);
    setIsValid(false);
  };

  var getJsonData = function getJsonData() {
    return setCodeView(JSON.stringify(JSON.parse(codeView), replacer, space));
  };

  var saveJSON = function saveJSON() {
    Promise.resolve(dispatch(save_json_schema(JSON.parse(codeView)))).then(function () {
      dispatch(save_json_schema_status(1));
      var readOnlyJsonSchemaArray = StoreJsonSchemaReadonlyInRedux(store);
      dispatch(save_json_schema_readonly(readOnlyJsonSchemaArray), 1);
      setState({
        openSnackbar: true,
        vertical: 'top',
        horizontal: 'center'
      });
      setSuccessMessage("Schema is saved");
    });
  };

  var showAlert = function showAlert() {
    var getJSONSchemaData = ValidateJsonSchema(store);

    if (getJSONSchemaData['hasMessage']) {
      if (_typeof__default['default'](getJSONSchemaData['message']) === "object") {
        dispatch(save_json_schema_status(1), 1);
      }

      isInValidJson(getJSONSchemaData['message']);
    }
  };

  React.useEffect(function () {
    var codeView = "";

    var _validateJson3 = validateJson(schemaData),
        _validateJson4 = _slicedToArray__default['default'](_validateJson3, 2);
        _validateJson4[0];
        _validateJson4[1];

    codeView = JSON.stringify(schemaData, null, space);
    setCodeView(codeView);
  }, [schemaData]);

  var handleClose = function handleClose() {
    setIsValid(false);
  };

  React.useEffect(function () {
    showAlert();
  }, [currentStateJsonData]);
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("div", {
    className: classes.toolbar
  }, /*#__PURE__*/React__default['default'].createElement(core.Tooltip, {
    className: classes.tooltip,
    title: "Save JSON"
  }, /*#__PURE__*/React__default['default'].createElement(SaveOutlinedIcon__default['default'], {
    fontSize: "small",
    onClick: function onClick() {
      saveJSON();
      getJsonData();
    }
  })), /*#__PURE__*/React__default['default'].createElement(core.Tooltip, {
    className: classes.tooltip,
    title: "Format JSON"
  }, /*#__PURE__*/React__default['default'].createElement(FormatAlignLeftOutlinedIcon__default['default'], {
    fontSize: "small",
    onClick: getJsonData
  }))), codeView !== "" && /*#__PURE__*/React__default['default'].createElement("textarea", {
    value: codeView,
    onChange: prettyJson,
    className: classes.resizeTextArea,
    placeholder: "Schema File"
  }), errorMessage && /*#__PURE__*/React__default['default'].createElement(FileErrorComponent, {
    handleClose: handleClose,
    isValid: true,
    errorMessage: errorMessage
  }), successMessage && /*#__PURE__*/React__default['default'].createElement(SuccessMessage, {
    successMessage: successMessage,
    openAlertbar: openSnackbar,
    vertical: vertical,
    horizontal: horizontal,
    handleCloseSuccess: handleCloseSuccess
  }));
};

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty__default$1['default'](target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var useStyles$9 = core.makeStyles({
  root: {
    transform: 'translateZ(0)',
    background: jsonBuilderTheme.palette.header.main,
    color: jsonBuilderTheme.palette.header.contrastText // 454749    // 325C05

  },
  toolbar: {
    minHeight: '40px'
  },
  paper: {
    marginRight: jsonBuilderTheme.spacing(2)
  },
  file: {
    display: 'none'
  },
  iconButtonHeader: {
    padding: '5px 12px',
    borderRadius: 0
  },
  fontSizeHeader: {
    fontSize: '18px'
  },
  searchInput: {
    opacity: '0.6',
    padding: '0px 8px',
    fontSize: '0.8rem',
    '&:hover': {
      backgroundColor: 'lightgrey'
    },
    '& .MuiSvgIcon-root': {
      marginLeft: '5px'
    }
  },
  disableSave: {
    cursor: 'not-allowed',
    pointerEvents: 'none'
  },
  SnackbarDiv: {
    maxWidth: "600px"
  }
});
function Header() {
  var classes = useStyles$9();
  var dispatch = reactRedux.useDispatch();
  var currentState = reactRedux.useSelector(function (state) {
    return state.jsonReducer.present;
  });
  var currentStateJsonData = reactRedux.useSelector(function (state) {
    return state.jsonReducer.present.jsonData;
  });
  var fileInput = React.useRef(null);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray__default['default'](_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1]; // Error State


  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray__default['default'](_useState3, 2),
      isValid = _useState4[0],
      setIsValid = _useState4[1];

  var _useState5 = React.useState(""),
      _useState6 = _slicedToArray__default['default'](_useState5, 2),
      errorMessage = _useState6[0],
      setErrorMessage = _useState6[1];

  var anchorRefOfOpen = React.useRef(null); //JSON validation code

  var store = reactRedux.useStore();

  var _React$useState = React__default['default'].useState({
    snachOpen: false,
    vertical: 'top',
    horizontal: 'center'
  }),
      _React$useState2 = _slicedToArray__default['default'](_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var vertical = state.vertical,
      horizontal = state.horizontal,
      snachOpen = state.snachOpen;

  var _React$useState3 = React__default['default'].useState(""),
      _React$useState4 = _slicedToArray__default['default'](_React$useState3, 2),
      notification = _React$useState4[0];
      _React$useState4[1];

  var handleToggleOfOpen = function handleToggleOfOpen() {
    setOpen(function (prevOpen) {
      return !prevOpen;
    });
  };

  var handleCloseOfOpen = function handleCloseOfOpen(_ref) {
    var target = _ref.target;

    if (anchorRefOfOpen.current && anchorRefOfOpen.current.contains(target)) {
      return;
    }

    setOpen(false);
  }; // Handle Error 


  var handleError = function handleError(status, errorMsg) {
    setIsValid(status);
    setErrorMessage(errorMsg);
  };

  var handleClose = function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setIsValid(false);
  };

  var handleChange = function handleChange(e) {
    var isValid = handleFileValidation(e);

    if (!isValid) {
      var message = "Please upload a proper JSON file";
      handleError(true, message);
    } else {
      var fileReader = new FileReader();
      fileReader.readAsText(e.target.files[0], "UTF-8");

      fileReader.onload = function (e) {
        var jsonData = ""; //JSON validation code

        try {
          try {
            jsonData = eval(JSON.parse(JSON.stringify(e.target.result)));
          } catch (_unused) {
            jsonData = JSON.parse(eval(JSON.stringify(unescape(e.target.result))));
          }

          dispatch(fetch_json_success(jsonData));
        } catch (_unused2) {
          // Save to Code View
          dispatch(save_temp_json(e.target.result));
        }
      };
    }
  }; // Handle Error


  function handleListKeyDownOfOpen(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  } // return focus to the button when we transitioned from !open -> open


  var prevOpen = React.useRef(open);
  React.useEffect(function () {
    if (prevOpen.current === true && open === false) {
      anchorRefOfOpen.current.focus();
    }

    prevOpen.current = open;
  }, [open]); //////////////////////////////////////////////////////////////////////

  var _useState7 = React.useState(false),
      _useState8 = _slicedToArray__default['default'](_useState7, 2),
      save = _useState8[0],
      setSave = _useState8[1];

  var anchorRefOfSave = React.useRef(null);

  var handleToggleOfSave = function handleToggleOfSave() {
    setSave(function (prevSave) {
      return !prevSave;
    });
  };

  var handleCloseOfSave = function handleCloseOfSave(event) {
    if (anchorRefOfSave.current && anchorRefOfSave.current.contains(event.target)) {
      return;
    }

    setSave(false);
  };

  function handleListKeyDownOfSave(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setSave(false);
    }
  } // return focus to the button when we transitioned from !save -> save


  var prevSave = React.useRef(save);
  React.useEffect(function () {
    if (prevSave.current === true && save === false) {
      anchorRefOfSave.current.focus();
    }

    prevSave.current = save;
  }, [save]); /// Setting icon and functionality///////////////////////////////////////

  var _useState9 = React.useState(false),
      _useState10 = _slicedToArray__default['default'](_useState9, 2),
      setting = _useState10[0],
      setSetting = _useState10[1];

  var anchorRefOfSetting = React.useRef(null);

  var handleToggleOfSetting = function handleToggleOfSetting() {
    setSetting(function (prevSetting) {
      return !prevSetting;
    });
  };

  var handleCloseOfSetting = function handleCloseOfSetting(event) {
    if (anchorRefOfSetting.current && anchorRefOfSetting.current.contains(event.target)) {
      return;
    }

    setSetting(false);
  };

  function handleListKeyDownOfSetting(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setSetting(false);
    }
  } // JSON VAlidation code


  var showAlert = function showAlert() {
    setState(_objectSpread$2(_objectSpread$2({}, state), {}, {
      snachOpen: false
    }));
    var getJSONSchemaData = ValidateJsonSchema(store);

    if (getJSONSchemaData['hasMessage']) {
      if (_typeof__default['default'](getJSONSchemaData['message']) === "object") {
        dispatch(save_json_schema_status(1), 1);
        handleError(true, getJSONSchemaData['message']);
      }
    }
  };

  React.useEffect(function () {
    showAlert();
  }, [currentStateJsonData]);

  var snackbarHandleClose = function snackbarHandleClose() {
    setState(_objectSpread$2(_objectSpread$2({}, state), {}, {
      snachOpen: false
    }));
  };

  return /*#__PURE__*/React__default['default'].createElement(core.AppBar, {
    position: "static",
    className: classes.root
  }, /*#__PURE__*/React__default['default'].createElement(Snackbar__default['default'], {
    anchorOrigin: {
      vertical: vertical,
      horizontal: horizontal
    },
    open: snachOpen,
    onClose: snackbarHandleClose,
    color: "primary",
    message: notification,
    key: vertical + horizontal,
    bodyStyle: {
      width: '600px'
    },
    action: /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(Button__default['default'], {
      color: "secondary",
      size: "small",
      onClick: snackbarHandleClose
    }, "UNDO"), /*#__PURE__*/React__default['default'].createElement(core.IconButton, {
      size: "small",
      "aria-label": "close",
      color: "inherit",
      onClick: snackbarHandleClose
    }, /*#__PURE__*/React__default['default'].createElement(CloseIcon__default['default'], {
      fontSize: "small"
    })))
  }), /*#__PURE__*/React__default['default'].createElement(core.Toolbar, {
    className: classes.toolbar
  }, /*#__PURE__*/React__default['default'].createElement(core.Grid, {
    container: true,
    alignItems: "center"
  }, /*#__PURE__*/React__default['default'].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default['default'].createElement(core.Typography, {
    className: classes.fontSizeHeader,
    variant: "h4",
    component: "h2"
  }, "JSON Builder")), /*#__PURE__*/React__default['default'].createElement(core.Grid, {
    item: true,
    sm: true
  }), /*#__PURE__*/React__default['default'].createElement(styles.ThemeProvider, {
    theme: jsonBuilderTheme
  }, /*#__PURE__*/React__default['default'].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default['default'].createElement(core.IconButton, {
    ref: anchorRefOfOpen,
    "aria-controls": open ? 'menu-list-grow' : undefined,
    "aria-haspopup": "true",
    onClick: handleToggleOfOpen,
    className: classes.iconButtonHeader
  }, /*#__PURE__*/React__default['default'].createElement(core.Badge, null, /*#__PURE__*/React__default['default'].createElement(FolderOpenOutlinedIcon__default['default'], {
    style: {
      color: "white"
    },
    fontSize: "medium"
  }))), /*#__PURE__*/React__default['default'].createElement(Popper__default['default'], {
    open: open,
    anchorEl: anchorRefOfOpen.current,
    role: undefined,
    transition: true,
    disablePortal: true
  }, function (_ref2) {
    var TransitionProps = _ref2.TransitionProps,
        placement = _ref2.placement;
    return /*#__PURE__*/React__default['default'].createElement(Grow__default['default'], _extends__default$1['default']({}, TransitionProps, {
      style: {
        transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
      }
    }), /*#__PURE__*/React__default['default'].createElement(Paper__default['default'], null, /*#__PURE__*/React__default['default'].createElement(ClickAwayListener__default['default'], {
      onClickAway: handleCloseOfOpen
    }, /*#__PURE__*/React__default['default'].createElement(MenuList__default['default'], {
      autoFocusItem: open,
      id: "menu-list-grow",
      onKeyDown: handleListKeyDownOfOpen
    }, /*#__PURE__*/React__default['default'].createElement("input", {
      accept: "application/json",
      className: classes.file,
      id: "json-file",
      ref: fileInput,
      onChange: handleChange,
      type: "file"
    }), /*#__PURE__*/React__default['default'].createElement(OpenFromDisk, null), /*#__PURE__*/React__default['default'].createElement(OpenFromCloud, null)))));
  }))), /*#__PURE__*/React__default['default'].createElement(styles.ThemeProvider, {
    theme: jsonBuilderTheme
  }, /*#__PURE__*/React__default['default'].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default['default'].createElement(core.IconButton, {
    ref: anchorRefOfSave,
    "aria-controls": save ? 'menu-list-grow' : undefined,
    "aria-haspopup": "true",
    onClick: handleToggleOfSave,
    className: currentState.updated ? null : classes.disableSave
  }, /*#__PURE__*/React__default['default'].createElement(core.Badge, null, currentState.updated ? /*#__PURE__*/React__default['default'].createElement(SaveOutlinedIcon__default['default'], {
    style: {
      color: "white"
    },
    fontSize: "medium"
  }) : /*#__PURE__*/React__default['default'].createElement(SaveTwoToneIcon__default['default'], {
    fontSize: "medium"
  }))), /*#__PURE__*/React__default['default'].createElement(Popper__default['default'], {
    open: save,
    anchorEl: anchorRefOfSave.current,
    role: undefined,
    transition: true,
    disablePortal: true
  }, function (_ref3) {
    var TransitionProps = _ref3.TransitionProps,
        placement = _ref3.placement;
    return /*#__PURE__*/React__default['default'].createElement(Grow__default['default'], _extends__default$1['default']({}, TransitionProps, {
      style: {
        transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
      }
    }), /*#__PURE__*/React__default['default'].createElement(Paper__default['default'], null, /*#__PURE__*/React__default['default'].createElement(ClickAwayListener__default['default'], {
      onClickAway: handleCloseOfSave
    }, /*#__PURE__*/React__default['default'].createElement(MenuList__default['default'], {
      autoFocusItem: save,
      id: "menu-list-grow",
      onKeyDown: handleListKeyDownOfSave
    }, /*#__PURE__*/React__default['default'].createElement(SaveToDisk, null), /*#__PURE__*/React__default['default'].createElement(SaveToURL, null)))));
  }))), /*#__PURE__*/React__default['default'].createElement(styles.ThemeProvider, {
    theme: jsonBuilderTheme
  }, /*#__PURE__*/React__default['default'].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default['default'].createElement(core.IconButton, {
    ref: anchorRefOfSetting,
    "aria-controls": setting ? 'menu-list-grow' : undefined,
    "aria-haspopup": "true",
    onClick: handleToggleOfSetting
  }, /*#__PURE__*/React__default['default'].createElement(core.Badge, null, /*#__PURE__*/React__default['default'].createElement(SettingsOutlinedIcon__default['default'], {
    style: {
      color: "white"
    },
    fontSize: "medium"
  }))), /*#__PURE__*/React__default['default'].createElement(Popper__default['default'], {
    open: setting,
    anchorEl: anchorRefOfSetting.current,
    role: undefined,
    transition: true,
    disablePortal: true
  }, function (_ref4) {
    var TransitionProps = _ref4.TransitionProps,
        placement = _ref4.placement;
    return /*#__PURE__*/React__default['default'].createElement(Grow__default['default'], _extends__default$1['default']({}, TransitionProps, {
      style: {
        transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
      }
    }), /*#__PURE__*/React__default['default'].createElement(Paper__default['default'], null, /*#__PURE__*/React__default['default'].createElement(ClickAwayListener__default['default'], {
      onClickAway: handleCloseOfSetting
    }, /*#__PURE__*/React__default['default'].createElement(MenuList__default['default'], {
      autoFocusItem: setting,
      id: "menu-list-grow",
      onKeyDown: handleListKeyDownOfSetting
    }, /*#__PURE__*/React__default['default'].createElement(SchemaView, null)))));
  }))), /*#__PURE__*/React__default['default'].createElement(Undo, null), /*#__PURE__*/React__default['default'].createElement(Redo, null), /*#__PURE__*/React__default['default'].createElement(PowerOff, null)), errorMessage && /*#__PURE__*/React__default['default'].createElement(FileErrorComponent, {
    isValid: isValid,
    handleClose: handleClose,
    errorMessage: errorMessage
  })));
}

var useStyles$8 = styles.makeStyles({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: jsonBuilderTheme.palette.background.paper
  },
  nested: {
    padding: "0px ".concat(jsonBuilderTheme.spacing(3), "px")
  },
  listItem: {
    padding: 0
  },
  listItemText: {
    flex: "0 1 auto"
  },
  body1: {
    fontWeight: "bold"
  },
  listIcon: {
    minWidth: "unset",
    color: "#ff6464"
  },
  paper: {
    borderColor: "E7EFEB !important",
    backgroundColor: 'transparent'
  },
  paper2: {
    textAlign: 'center',
    backgroundColor: 'transparent'
  },
  bold: {
    fontWeight: 600
  },
  selectedNode: _defineProperty__default$1['default']({
    color: 'blue'
  }, jsonBuilderTheme.breakpoints.down(1000), {
    fontSize: '11px'
  }),
  treeList: _defineProperty__default$1['default']({}, jsonBuilderTheme.breakpoints.down(1000), {
    '& span': {
      fontSize: '15px'
    }
  }),
  treeIcon: _defineProperty__default$1['default']({}, jsonBuilderTheme.breakpoints.down(1000), {
    fontSize: '20px'
  }),
  treeCollapse: _defineProperty__default$1['default']({
    paddingLeft: "30px"
  }, jsonBuilderTheme.breakpoints.down(1000), {
    paddingLeft: "15px"
  }),
  editedNode: {
    color: 'red'
  }
});

var ShowNodes = function ShowNodes(_ref) {
  var data = _ref.data,
      parentName = _ref.parentName;
  return /*#__PURE__*/React__default['default'].createElement(Tree, {
    key: Math.random(),
    data: data,
    parentName: parentName
  });
};

function Tree(_ref2) {
  var data = _ref2.data;
      _ref2.length;
      var _ref2$parentName = _ref2.parentName,
      parentName = _ref2$parentName === void 0 ? "Root: []" : _ref2$parentName;
  var classes = useStyles$8();
  var dispatch = reactRedux.useDispatch();

  var _useState = React.useState(false),
      _useState2 = _slicedToArray__default['default'](_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = React.useState({}),
      _useState4 = _slicedToArray__default['default'](_useState3, 2);
      _useState4[0];
      var setJson = _useState4[1];

  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray__default['default'](_useState5, 2),
      appear = _useState6[0],
      setAppear = _useState6[1];

  var _useState7 = React.useState({}),
      _useState8 = _slicedToArray__default['default'](_useState7, 2);
      _useState8[0];
      var setJsonData = _useState8[1];

  var _useState9 = React.useState(""),
      _useState10 = _slicedToArray__default['default'](_useState9, 2);
      _useState10[0];
      var setSelectedID = _useState10[1];

  var currentState = reactRedux.useSelector(function (state) {
    return state.jsonReducer.present;
  });

  var handleClick = function handleClick() {
    // if (parentName.includes(data.name))
    // {
    //   setOpen(true)
    //   setAppear(!appear)
    // }
    // else
    // {
    //   setOpen(false)
    //   setAppear(!appear)
    // }
    setOpen(!open);
    setAppear(!appear);
  };

  var editNode = function editNode() {
    setSelectedID(data.$ID);
    dispatch(selected_node_json(eval(JSON.parse(JSON.stringify(data))), false));
  }; // Check if a value is an object


  var isObject = function isObject(value) {
    return _typeof__default['default'](value) === 'object';
  }; // Check if an object is an array


  var isArray = function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  };

  var addNode = function addNode() {
    var getPathResult = "";
    var objectPath = "";
    var jsonNodeToAdd = "";
    var breakMap = {};
    var foundChildObjects = false;

    for (var node in data) {
      if (isObject(data[node]) && isArray(data[node])) {
        if (data[node][0] && Object.keys(data[node][0]).length > 0) {
          jsonNodeToAdd = data[node][0];
          getPathResult = searchObject(currentState.jsonData, function (value) {
            return value !== null && value !== undefined && value.$ID === jsonNodeToAdd.$ID;
          });

          if (getPathResult != null && getPathResult.length > 0) {
            objectPath = getPathResult[0].path.substr(0, getPathResult[0].path.lastIndexOf("."));
            getPath(objectPath, jsonNodeToAdd, "ArrayObject");
            foundChildObjects = true;
            break;
          }
        } else {
          var jsonNode = {
            "name": "New Field",
            "id": uuidv4().toString()
          };
          getPathResult = searchObject(currentState.jsonData, function (value) {
            return value !== null && value !== undefined && value.$ID === data.$ID;
          });

          if (getPathResult != null && getPathResult.length > 0) {
            objectPath = getPathResult[0].path;
            getPath(objectPath + "." + node, jsonNode, "ArrayObject");
            throw breakMap;
          }

          break;
        }
      }
    }

    if (foundChildObjects === false) {
      jsonNodeToAdd = data;
      getPathResult = searchObject(currentState.jsonData, function (value) {
        return value !== null && value !== undefined && value.$ID === data.$ID;
      });

      if (getPathResult != null && getPathResult.length > 0) {
        objectPath = getPathResult[0].path;
        getPath(objectPath, getPathResult[0].value, "Object");
        throw breakMap;
      }
    }
  };

  var getPath = function getPath(jsonPath, nodeData, typeOfObject) {
    var jsonData = simplifr.simplify(currentState.jsonData);

    if (jsonPath != null && jsonPath.length > 0) {
      nodeData["name"] = "New Object - " + uuidv4().toString(); // run dispatch method in jsonReducer to add the node

      addJSON(jsonData, jsonPath, nodeData, typeOfObject);
    }
  };

  var addJSON = function addJSON(jsonData, path, jsonNodeToAdd, typeOfObject) {
    var jsonUpdatedData = "";
    var getCurrentNodeResult = ""; // Run dispatch method and get the updated JSON (of all objects)

    var jsonNode = RemoveParentId(jsonNodeToAdd, "$ID", "$PID");
    jsonUpdatedData = dispatch(add_object_json(jsonData, path, jsonNode, typeOfObject));
    var updatedJSONData = simplifr.desimplify(jsonUpdatedData.payload);
    updatedJSONData = dispatch(fetch_json_success(updatedJSONData));

    if (Object.keys(updatedJSONData).length > 0) {
      getCurrentNodeResult = searchObject(updatedJSONData, function (value) {
        return value !== null && value !== undefined && value.name === jsonNode.name;
      });

      if (Object.keys(getCurrentNodeResult).length > 0) {
        dispatch(selected_node_json(eval(JSON.parse(JSON.stringify(getCurrentNodeResult[0].value))), true));
      }
    }
  };

  var removeNode = function removeNode() {
    var getPathResult = searchObject(currentState.jsonData, function (value) {
      return value !== null && value !== undefined && value.$ID === data.$ID;
    });
    var jsonData = simplifr.simplify(currentState.jsonData);

    if (getPathResult != null && getPathResult.length > 0) {
      removeJSON(jsonData, getPathResult[0].path);
    }
  };

  var removeJSON = function removeJSON(jsonData, path) {
    dispatch(remove_object_json(jsonData, path));
  };

  React.useEffect(function () {
    setJson(currentState.jsonData);
    setJsonData(currentState.jsonData);
  }, [currentState.jsonData]);
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, data && /*#__PURE__*/React__default['default'].createElement(core.ListItem, {
    button: true,
    onClick: handleClick,
    classes: {
      root: classes.listItem
    },
    onMouseOver: function onMouseOver() {
      return setAppear(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setAppear(false);
    }
  }, /*#__PURE__*/React__default['default'].createElement(core.ListItemIcon, {
    key: Math.random() * 10,
    classes: {
      root: classes.listIcon
    }
  }, open ? /*#__PURE__*/React__default['default'].createElement(ArrowDropDownIcon__default['default'], null) : /*#__PURE__*/React__default['default'].createElement(ArrowRightIcon__default['default'], null)), /*#__PURE__*/React__default['default'].createElement(core.ListItemText, {
    key: Math.random() * 10,
    className: appear ? classes.selectedNode : null
  }, /*#__PURE__*/React__default['default'].createElement("b", null, parentName)), /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, appear ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, parentName === "Root: []" ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(core.Tooltip, {
    title: "Add child node"
  }, /*#__PURE__*/React__default['default'].createElement(AddCircleOutlineRoundedIcon__default['default'], {
    onClick: addNode,
    fontSize: "small"
  }))) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(core.Tooltip, {
    title: "Edit node"
  }, /*#__PURE__*/React__default['default'].createElement(EditTwoToneIcon__default['default'], {
    onClick: editNode,
    fontSize: "small"
  })), /*#__PURE__*/React__default['default'].createElement(core.Tooltip, {
    title: "Add child node"
  }, /*#__PURE__*/React__default['default'].createElement(AddCircleOutlineRoundedIcon__default['default'], {
    onClick: addNode,
    fontSize: "small"
  })), /*#__PURE__*/React__default['default'].createElement(core.Tooltip, {
    title: "Remove node"
  }, /*#__PURE__*/React__default['default'].createElement(CancelTwoToneIcon__default['default'], {
    onClick: removeNode,
    fontSize: "small"
  })))) : "")), /*#__PURE__*/React__default['default'].createElement(core.Collapse, {
    in: true,
    timeout: "auto",
    unmountOnExit: true,
    style: {
      paddingLeft: "30px"
    }
  }, /*#__PURE__*/React__default['default'].createElement(core.List, {
    component: "div",
    style: {
      padding: 0
    }
  }, Object.keys(data).map(function (k, i) {
    return data[k] != null && _typeof__default['default']([k]) === "object" ? Array.isArray(data[k]) ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, Array.from(data[k]).map(function (item, index) {
      return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, data[k][index]["id"] && /*#__PURE__*/React__default['default'].createElement(ShowNodes, {
        data: data[k][index],
        parentName: data[k][index]["id"] ? data[k][index]["name"] + " - " + data[k][index]["id"] : " "
      }));
    })) : "" : "";
  }))));
}

var _hoverIcon;

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty__default$1['default'](target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Alert(props) {
  return /*#__PURE__*/React__default['default'].createElement(MuiAlert__default['default'], _extends__default$1['default']({
    elevation: 6,
    variant: "filled"
  }, props));
}

var useStyles$7 = styles.makeStyles({
  root: {
    width: "100%",
    backgroundColor: jsonBuilderTheme.palette.background.paper
  },
  nested: {
    padding: '0px 8px 2px',
    margin: '0px 0px 2px',
    '&:hover': {
      backgroundColor: 'rgb(134 128 128 / 20%)',
      boxShadow: '0px 2px 4px 0px #00000059'
    }
  },
  hoverIcon: (_hoverIcon = {
    fontSize: '1.56rem',
    color: '#353434',
    margin: '0 2px',
    background: '#615b5b8a',
    borderRadius: '6px',
    padding: '3px',
    transition: 'background 500ms linear',
    cursor: 'pointer',
    '&:hover': {
      background: '#5d5a5a',
      color: '#dedddd96',

      /* -webkitTransition: 'background 500ms linear',
       -msTransition:'background 1000ms linear',*/
      transition: 'background 500ms linear'
    }
  }, _defineProperty__default$1['default'](_hoverIcon, jsonBuilderTheme.breakpoints.down(780), {
    fontSize: '16px'
  }), _defineProperty__default$1['default'](_hoverIcon, jsonBuilderTheme.breakpoints.down(1025), {
    fontSize: '26px'
  }), _hoverIcon),
  hoverIconGrid: {
    display: 'flex',
    marginRight: '8px'
  },
  listItem: {
    padding: 0
  },
  listItemText: _defineProperty__default$1['default']({
    flex: "0 1 auto",
    color: 'black'
  }, jsonBuilderTheme.breakpoints.down(1150), {
    marginLeft: '19%'
  }),
  body1: {
    fontWeight: "bold"
  },
  listIcon: {
    minWidth: "unset",
    color: jsonBuilderTheme.palette.listIconNodeUpdateTree.main
  },
  paper: {
    borderColor: jsonBuilderTheme.palette.paperBorderNodeUpdateTree.main,
    backgroundColor: jsonBuilderTheme.palette.paperBackgroundNodeUpdateTree.main
  },
  paper2: {
    textAlign: 'center',
    backgroundColor: jsonBuilderTheme.palette.paperBackgroundNodeUpdateTree.main
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
    minWidth: 'auto',
    background: 'rgb(123 119 119 / 76%)',
    margin: '1px',
    padding: '0px 5px',
    minHeight: 'auto',
    height: '27px',
    borderRadius: '5px',
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
  addkeyValue: _defineProperty__default$1['default']({}, jsonBuilderTheme.breakpoints.down(800), {
    maxWidth: '43%'
  }),
  collapseNodeUpdate: _defineProperty__default$1['default']({
    paddingLeft: "30px"
  }, jsonBuilderTheme.breakpoints.down(1000), {
    paddingLeft: "0px"
  }),
  readOnly: {
    color: "#7c7979"
  }
});
function NodeUpdate(_ref) {
  var data = _ref.data;
      _ref.length;
      var expand = _ref.expand,
      searchTerm = _ref.searchTerm,
      sortDirection = _ref.sortDirection,
      _ref$parentName = _ref.parentName,
      parentName = _ref$parentName === void 0 ? " " : _ref$parentName;
  var classes = useStyles$7();
  var store = reactRedux.useStore();

  var _React$useState = React__default['default'].useState(false),
      _React$useState2 = _slicedToArray__default['default'](_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var _useState = React.useState(false),
      _useState2 = _slicedToArray__default['default'](_useState, 2),
      appear = _useState2[0],
      setAppear = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray__default['default'](_useState3, 2),
      addNewValue = _useState4[0],
      setAddNewValue = _useState4[1];

  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray__default['default'](_useState5, 2),
      appearMain = _useState6[0],
      setAppearMain = _useState6[1];

  var _useState7 = React.useState(),
      _useState8 = _slicedToArray__default['default'](_useState7, 2),
      checkkey = _useState8[0],
      setCheckKey = _useState8[1];

  var _useState9 = React.useState(),
      _useState10 = _slicedToArray__default['default'](_useState9, 2),
      checkIndex = _useState10[0],
      setCheckIndex = _useState10[1];

  var _useState11 = React.useState(),
      _useState12 = _slicedToArray__default['default'](_useState11, 2),
      checkKeyOfNode = _useState12[0],
      setCheckKeyOfNode = _useState12[1];

  var _useState13 = React.useState(),
      _useState14 = _slicedToArray__default['default'](_useState13, 2),
      checkIndexOfNode = _useState14[0],
      setCheckIndexOfNode = _useState14[1];

  var _React$useState3 = React__default['default'].useState(),
      _React$useState4 = _slicedToArray__default['default'](_React$useState3, 2),
      searchKey = _React$useState4[0],
      setSearchKey = _React$useState4[1];

  var _React$useState5 = React__default['default'].useState(""),
      _React$useState6 = _slicedToArray__default['default'](_React$useState5, 2);
      _React$useState6[0];
      var setSearchClass = _React$useState6[1];

  var _React$useState7 = React__default['default'].useState({}),
      _React$useState8 = _slicedToArray__default['default'](_React$useState7, 2),
      json = _React$useState8[0],
      setJson = _React$useState8[1];

  var _useState15 = React.useState(''),
      _useState16 = _slicedToArray__default['default'](_useState15, 2),
      newKey = _useState16[0],
      setNewKey = _useState16[1];

  var _useState17 = React.useState(''),
      _useState18 = _slicedToArray__default['default'](_useState17, 2),
      newValue = _useState18[0],
      setNewValue = _useState18[1];

  var _useState19 = React.useState(""),
      _useState20 = _slicedToArray__default['default'](_useState19, 2),
      keyChanged = _useState20[0],
      setKeyChanged = _useState20[1];

  var _useState21 = React.useState(""),
      _useState22 = _slicedToArray__default['default'](_useState21, 2);
      _useState22[0];
      var setJsonChanged = _useState22[1];

  var _React$useState9 = React__default['default'].useState({
    openSnackbar: false,
    vertical: 'top',
    horizontal: 'center'
  }),
      _React$useState10 = _slicedToArray__default['default'](_React$useState9, 2),
      state = _React$useState10[0],
      setState = _React$useState10[1];

  var vertical = state.vertical,
      horizontal = state.horizontal,
      openSnackbar = state.openSnackbar;

  var handleSnackbar = function handleSnackbar() {
    setState({
      openSnackbar: true,
      vertical: 'top',
      horizontal: 'center'
    });
  }; // This for Schema file


  var _useState23 = React.useState({}),
      _useState24 = _slicedToArray__default['default'](_useState23, 2);
      _useState24[0];
      var setSchema = _useState24[1];

  var currentState = reactRedux.useSelector(function (state) {
    return state.jsonReducer.present;
  });
  var dispatch = reactRedux.useDispatch();

  var handleChange = function handleChange(event) {
    var name = event.target.name;
    var value = event.target.value;
    setJson(function (prevState) {
      return _objectSpread$1(_objectSpread$1({}, prevState), {}, _defineProperty__default$1['default']({}, name, value));
    });
    setJsonChanged(true);
    setKeyChanged(name);
  };

  var setChangedKey = function setChangedKey() {
    setJsonChanged(false);
    setKeyChanged("");
  };

  var handleUpdate = function handleUpdate(keyChanged) {
    confirmChange(keyChanged);
    setChangedKey();
  };

  var confirmChange = function confirmChange(keyChanged) {
    var jsonData = simplifr.simplify(currentState.jsonData);
    var getPathResult = searchObject(currentState.jsonData, function (value) {
      return value !== null && value !== undefined && value.$ID === data.$ID;
    });

    if (getPathResult && Object.keys(getPathResult).length > 0) {
      updateJSON(jsonData, getPathResult[0].path, keyChanged, json);
    }
  };

  var cancelChange = function cancelChange(keyChanged) {
    simplifr.simplify(currentState.jsonData);
    var getPathResult = searchObject(currentState.jsonData, function (value) {
      return value !== null && value !== undefined && value.$ID === data.$ID;
    });

    if (getPathResult && Object.keys(getPathResult).length > 0) {
      setJson(getPathResult[0].value);
      setJsonChanged(false);
      setKeyChanged("");
    }
  };

  var updateJSON = function updateJSON(jsonData, path, name, json) {
    var getCurrentNodeResult = "";
    var jsonUpdatedData = dispatch(update_json(jsonData, path, name, json));
    var updatedJSONData = dispatch(fetch_json_success(simplifr.desimplify(jsonUpdatedData.payload)));

    if (Object.keys(updatedJSONData).length > 0) {
      getCurrentNodeResult = searchObject(updatedJSONData, function (value) {
        return value !== null && value !== undefined && value.name === json.name;
      });

      if (Object.keys(getCurrentNodeResult).length > 0) {
        dispatch(selected_node_json(eval(JSON.parse(JSON.stringify(getCurrentNodeResult[0].value))), true));
      }
    }

    setState({
      openSnackbar: true,
      vertical: 'top',
      horizontal: 'center'
    });
  };

  var handleClick = function handleClick() {
    setUpdatedJSON(simplifr.desimplify(currentState.jsonData));
    setOpen(!open);
  };

  var searchData = function searchData() {
    Object.keys(json).map(function (k, i) {
      if (k === searchTerm || json[k].toString() !== "" && json[k].toString().includes(searchTerm)) {
        setSearchKey(k);
        setSearchClass("searchedValue");
      } else {
        setSearchClass("listItemText");
      }
    });
  };

  var cancelAdd = function cancelAdd() {
    setAddNewValue(false);
  }; // Check if a value is an object


  var isObject = function isObject(value) {
    return _typeof__default['default'](value) === 'object';
  }; // Check if an object is an array


  var isArray = function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  }; // This function helps in adding a Node


  var addNode = function addNode() {
    var getPathResult = "";
    var objectPath = ""; // Form a JSON Object with new Key, new Value

    var jsonNodeToAdd = {
      "newJSON": {
        "jsonKey": newKey,
        "jsonValue": newValue
      }
    }; // Check if json is an array

    if (isObject(json) && isArray(json)) {
      getPathResult = searchObject(currentState.jsonData, function (value) {
        return value !== null && value !== undefined && value.$ID === json[0].$ID;
      });

      if (getPathResult != null && getPathResult.length > 0) {
        // Get the Node Path by checking the first node of an Object
        objectPath = getPathResult[0].path.substr(0, getPathResult[0].path.lastIndexOf("."));
      }
    } else {
      // Get the Node Path
      getPathResult = searchObject(currentState.jsonData, function (value) {
        return value !== null && value !== undefined && value.$ID === json.$ID;
      });

      if (getPathResult != null && getPathResult.length > 0) {
        objectPath = getPathResult[0].path;
      }
    } // Simplify the current state's jsonData


    var jsonData = simplifr.simplify(currentState.jsonData);

    if (objectPath != null && objectPath.length > 0) {
      // run dispatch method in jsonReducer to add the node
      addJSON(jsonData, objectPath, jsonNodeToAdd);
    }

    handleSnackbar();
    setAddNewValue(false);
    setAppear(false);
  };

  var addJSON = function addJSON(jsonData, path, jsonNodeToAdd) {
    dispatch(add_node_json(jsonData, path, jsonNodeToAdd));
    dispatch(fetch_json_request()); // Pass to setUpdatedJSON to set the json state

    setUpdatedJSON(simplifr.desimplify(currentState.jsonData)); //jsonUpdatedData.payload

    setNewKey("");
    setNewValue("");
  }; // This function helps in removing an Object


  var removeObject = function removeObject(key) {
    var getPathResult = "";
    var objectPath = ""; // Check if json is an array

    if (Array.isArray(json)) {
      getPathResult = searchObject(currentState.jsonData, function (value) {
        return value !== null && value !== undefined && value.$ID === json[0].$ID;
      });

      if (getPathResult != null && getPathResult.length > 0) {
        // Get the Node Path by checking the first node of an Object
        objectPath = getPathResult[0].path.substr(0, getPathResult[0].path.lastIndexOf("."));
      }
    } else {
      // Get the Node Path
      getPathResult = searchObject(currentState.jsonData, function (value) {
        return value !== null && value !== undefined && value.$ID === json.$ID;
      });

      if (getPathResult != null && getPathResult.length > 0) {
        objectPath = getPathResult[0].path;
      }
    } // Simplify the current state's jsonData


    var jsonData = simplifr.simplify(currentState.jsonData);

    if (objectPath != null && objectPath.length > 0) {
      // run dispatch method in jsonReducer to remove the object
      removeJSON(jsonData, objectPath);
    }
  }; // This function helps in removing a json node


  var removeNode = function removeNode(key) {
    var jsonData = "";
    var getPathResult = ""; // Get the path of the selected node

    getPathResult = searchObject(currentState.jsonData, function (value) {
      return value !== null && value !== undefined && value.$ID === json.$ID;
    });
    jsonData = simplifr.simplify(currentState.jsonData);

    if (getPathResult != null && getPathResult.length > 0) {
      // run dispatch method in jsonReducer to remove the node
      removeJSON(jsonData, getPathResult[0].path + "." + key);
    }
  }; // Runs dispatch method of jsonReducer


  var removeJSON = function removeJSON(jsonData, path) {
    var jsonUpdatedData = ""; // Run dispatch method and get the updated JSON (of all objects)

    jsonUpdatedData = dispatch(remove_node_json(jsonData, path)); // Pass to setUpdatedJSON to set the json state

    setUpdatedJSON(simplifr.desimplify(jsonUpdatedData.payload));
  }; // Set the json State


  var setUpdatedJSON = function setUpdatedJSON(jsonData) {
    var getPathResult = ""; // get updated JSON from the current State of updated JSON (of all objects)

    getPathResult = searchObject(jsonData, function (value) {
      return value !== null && value !== undefined && value.$ID === json.$ID;
    });

    if (getPathResult != null && getPathResult.length > 0) {
      // Invoke setJson React Hook
      setJson(getPathResult[0].value);
    }
  };

  var handleObjectAddition = function handleObjectAddition(key, index) {
    Object.keys(json).map(function (k, i) {
      if (k === key && i === index) {
        setAddNewValue(true);
        setCheckIndexOfNode(index);
        setCheckKeyOfNode(key);
        setAppear(true);
      }
    });
  };

  var handleNodeAddition = function handleNodeAddition(key, index) {
    Object.keys(json).map(function (k, i) {
      if (k === key && i === index) {
        setAddNewValue(true);
        setCheckIndexOfNode(index);
        setCheckKeyOfNode(key);
        setAppear(true);
      }
    });
  };

  var handleMouseEnter = function handleMouseEnter(key, index) {
    Object.keys(json).map(function (k, i) {
      if (k === key && i === index) {
        setAppear(true);
        setCheckIndex(index);
        setCheckKey(key);
      }
    });
  };

  var handleMouseLeave = function handleMouseLeave() {
    setAppear(false);
    setCheckIndex(null);
  };

  var checkReadOnlyNodes = function checkReadOnlyNodes(jsonKey) {
    var getPathResult = "";
    var objectPath = "";

    getPathResult = searchObject(currentState.jsonData, function (value) {
      return value !== null && value !== undefined && value.$ID === data.$ID;
    });

    if (getPathResult != null && getPathResult.length > 0) {
      objectPath = getPathResult[0].path;
    }

    var nodeKey = "root" + objectPath + "." + jsonKey;
    nodeKey = getReadOnlyStatus(nodeKey, store);

    if (nodeKey === true) {
      return true;
    } else {
      return false;
    }
  };

  var sortByKey = function sortByKey() {
    var sorted = {};

    if (sortDirection === "Ascending") {
      Object.keys(json).sort().map(function (k, i) {
        sorted[k] = json[k];
      });
      setJson(sorted); // confirmChange("");
    } else if (sortDirection === "Descending") {
      Object.keys(json).sort().reverse().map(function (k, i) {
        sorted[k] = json[k];
      });
      setJson(sorted); // confirmChange("");
    }
  };

  React.useEffect(function () {
    setUpdatedJSON(currentState.jsonData);
  }, [currentState.jsonData]); // Initial Loading

  React.useEffect(function () {
    setJson(data);
    setSearchKey("");
    setSearchClass("listItemText");
    searchData();
    setOpen(expand);
  }, [expand, searchTerm, data]); // This is for Sorting....

  React.useEffect(function () {
    sortByKey();
  }, [sortDirection]); // This is for Schema....

  React.useEffect(function () {
    setSchema(currentState.jsonSchemaData);
  }, [currentState.jsonSchemaData]);
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, json && /*#__PURE__*/React__default['default'].createElement(core.ListItem, {
    button: true,
    onClick: handleClick,
    classes: {
      root: classes.listItem
    }
  }, /*#__PURE__*/React__default['default'].createElement(core.ListItemIcon, {
    key: Math.random() * 10,
    classes: {
      root: classes.listIcon
    }
  }, open ? /*#__PURE__*/React__default['default'].createElement(ArrowDropDownIcon__default['default'], null) : /*#__PURE__*/React__default['default'].createElement(ArrowRightIcon__default['default'], null)), /*#__PURE__*/React__default['default'].createElement(core.ListItemText, {
    key: Math.random() * 10,
    onMouseOver: function onMouseOver() {
      return setAppearMain(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setAppearMain(false);
    }
  }, /*#__PURE__*/React__default['default'].createElement("b", null, parentName)), appearMain && /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(core.Tooltip, {
    title: "Add an Object"
  }, /*#__PURE__*/React__default['default'].createElement(AddCircleOutlineRoundedIcon__default['default'], {
    onClick: function onClick() {
      return handleObjectAddition();
    },
    fontSize: "small"
  })), /*#__PURE__*/React__default['default'].createElement(core.Tooltip, {
    title: "Remove an Object"
  }, /*#__PURE__*/React__default['default'].createElement(CancelTwoToneIcon__default['default'], {
    onClick: function onClick() {
      return removeObject();
    },
    fontSize: "small"
  })))), /*#__PURE__*/React__default['default'].createElement(core.Collapse, {
    in: open,
    timeout: "auto",
    unmountOnExit: true,
    style: {
      paddingLeft: "30px"
    }
  }, /*#__PURE__*/React__default['default'].createElement(core.List, {
    component: "div",
    style: {
      padding: 0
    },
    onMouseOver: function onMouseOver() {
      return setAppear(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setAppear(false);
    }
  }, json && Object.keys(json).map(function (k, i) {
    return json[k] != null && _typeof__default['default'](json[k]) === "object" ? /*#__PURE__*/React__default['default'].createElement(NodeUpdate, {
      key: Math.random(),
      data: json[k],
      parentName: Array.isArray(json) ? "" : k,
      length: Object.keys(json[k]).length
    }) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(core.Grid, {
      spacing: 2
    }, /*#__PURE__*/React__default['default'].createElement(core.ListItem, {
      button: true,
      className: classes.nested,
      onMouseOver: function onMouseOver() {
        return handleMouseEnter(k, i);
      },
      onMouseLeave: function onMouseLeave() {
        return handleMouseLeave();
      }
    }, /*#__PURE__*/React__default['default'].createElement(core.Grid, {
      item: true,
      xs: 1,
      className: classes.hoverIconGrid
    }, /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, appear && checkIndex === i && checkkey === k && /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(core.Tooltip, {
      title: "Add a Node"
    }, /*#__PURE__*/React__default['default'].createElement(AddCircleOutlineRoundedIcon__default['default'], {
      className: classes.hoverIcon,
      onClick: function onClick() {
        return handleNodeAddition(k, i);
      },
      fontSize: "small"
    })), checkReadOnlyNodes(k) ? null : /*#__PURE__*/React__default['default'].createElement(core.Tooltip, {
      title: "Remove a Node"
    }, /*#__PURE__*/React__default['default'].createElement(CancelTwoToneIcon__default['default'], {
      className: classes.hoverIcon,
      onClick: function onClick() {
        return removeNode(k);
      },
      fontSize: "small"
    }))))), !Array.isArray(json) ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(core.Grid, {
      item: true,
      xs: 5
    }, /*#__PURE__*/React__default['default'].createElement(core.ListItemText, {
      className: k === searchKey ? classes.searchedValue : classes.listItemText
    }, k !== '$ID' && k !== '$PID' ? checkReadOnlyNodes(k) ? /*#__PURE__*/React__default['default'].createElement(core.Typography, {
      className: classes.readOnly
    }, k) : k : null))) : "", /*#__PURE__*/React__default['default'].createElement(core.Grid, {
      item: true,
      xs: 7
    }, /*#__PURE__*/React__default['default'].createElement(core.ListItemText, {
      className: k === searchKey ? classes.searchedValue : classes.listItemText
    }, k !== '$ID' && k !== '$PID' ? checkReadOnlyNodes(k) ? /*#__PURE__*/React__default['default'].createElement(core.Typography, {
      className: classes.readOnly
    }, json[k].toString()) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(core.TextField, {
      name: k,
      fullWidth: true,
      value: json[k].toString(),
      onChange: handleChange,
      InputProps: {
        endAdornment: /*#__PURE__*/React__default['default'].createElement(InputAdornment__default['default'], {
          position: "start"
        }, k === keyChanged ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(core.Tooltip, {
          title: "Cancel the Change"
        }, /*#__PURE__*/React__default['default'].createElement(ClearRoundedIcon__default['default'], {
          className: classes.hoverIcon,
          onClick: function onClick() {
            return cancelChange();
          },
          fontSize: "small"
        })), /*#__PURE__*/React__default['default'].createElement(core.Tooltip, {
          title: "Confirm the Change"
        }, /*#__PURE__*/React__default['default'].createElement(SaveOutlinedIcon__default['default'], {
          className: classes.hoverIcon,
          onClick: function onClick() {
            return handleUpdate(keyChanged);
          },
          fontSize: "small"
        }))) : null)
      }
    })) : null)), /*#__PURE__*/React__default['default'].createElement(core.Grid, {
      item: true,
      xs: 1,
      className: classes.buttonsSection
    }, /*#__PURE__*/React__default['default'].createElement(core.ListItemText, {
      className: k === searchKey ? classes.searchedValue : classes.listItemText
    })))), addNewValue && checkIndexOfNode === i && checkKeyOfNode === k && /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(core.Grid, {
      container: true,
      spacing: 1,
      className: classes.addSection
    }, /*#__PURE__*/React__default['default'].createElement(core.Grid, {
      item: true,
      xs: 1,
      className: classes.addButtonsSection
    }, /*#__PURE__*/React__default['default'].createElement(core.Button, {
      onClick: cancelAdd,
      className: classes.addButtonsSectionButtons
    }, /*#__PURE__*/React__default['default'].createElement(core.Tooltip, {
      title: "Cancel Add a Node"
    }, /*#__PURE__*/React__default['default'].createElement(ClearRoundedIcon__default['default'], {
      fontSize: "small"
    }))), /*#__PURE__*/React__default['default'].createElement(core.Button, {
      onClick: addNode,
      className: classes.addButtonsSectionButtons
    }, /*#__PURE__*/React__default['default'].createElement(core.Tooltip, {
      title: "Confirm to add a Node"
    }, /*#__PURE__*/React__default['default'].createElement(SaveOutlinedIcon__default['default'], {
      fontSize: "small"
    })))), /*#__PURE__*/React__default['default'].createElement(core.Grid, {
      item: true,
      xs: 4
    }, /*#__PURE__*/React__default['default'].createElement(core.TextField, {
      name: "newKey",
      value: newKey,
      onChange: function onChange(e) {
        return setNewKey(e.target.value);
      },
      required: true,
      className: classes.addForm,
      placeholder: "Enter Key"
    })), /*#__PURE__*/React__default['default'].createElement(core.Grid, {
      item: true,
      xs: 6
    }, /*#__PURE__*/React__default['default'].createElement(core.TextField, {
      name: "newValue",
      value: newValue,
      onChange: function onChange(e) {
        return setNewValue(e.target.value);
      },
      required: true,
      className: classes.addForm,
      placeholder: "Enter Value"
    })))));
  }))), /*#__PURE__*/React__default['default'].createElement(Snackbar__default['default'], {
    anchorOrigin: {
      vertical: vertical,
      horizontal: horizontal
    },
    open: openSnackbar,
    autoHideDuration: 1000,
    key: vertical + horizontal,
    onClose: function onClose() {
      return setState({
        openSnackbar: false
      }, function () {
        return setKeyChanged({
          keyChanged: ""
        });
      });
    }
  }, /*#__PURE__*/React__default['default'].createElement(Alert, {
    severity: "info",
    onClose: function onClose() {
      return setState({
        openSnackbar: false
      });
    }
  }, "JSON is saved")), /*#__PURE__*/React__default['default'].createElement("br", null));
}

var useStyles$6 = core.makeStyles({
  root: {
    width: '100%',
    backgroundColor: jsonBuilderTheme.palette.propertyTreeRoot.main,
    minHeight: "50px"
  },
  paper: {
    marginRight: jsonBuilderTheme.spacing(0),
    width: 'auto',
    minHeight: "200px",
    backgroundColor: jsonBuilderTheme.palette.editorPaper.main
  },
  textbox: {
    backgroundColor: jsonBuilderTheme.palette.textboxPropertyTree.main,
    disableRipple: true
  },
  file: {
    display: 'none'
  },
  searchInput: {
    opacity: '0.6',
    padding: '0px 8px',
    fontSize: '0.8rem',
    '&:hover': {
      backgroundColor: jsonBuilderTheme.palette.searchInputPropertyTree.main
    },
    '& .MuiSvgIcon-root': {
      marginLeft: '5px'
    }
  },
  disableSave: {
    cursor: 'not-allowed',
    pointerEvents: 'none'
  },
  search: _defineProperty__default$1['default']({
    position: 'relative',
    borderRadius: jsonBuilderTheme.shape.borderRadius,
    backgroundColor: core.fade(jsonBuilderTheme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: core.fade(jsonBuilderTheme.palette.common.white, 0.25)
    },
    marginRight: jsonBuilderTheme.spacing(2),
    marginLeft: 0,
    width: '100%'
  }, jsonBuilderTheme.breakpoints.up('sm'), {
    marginLeft: jsonBuilderTheme.spacing(3),
    width: 'auto'
  }),
  searchIcon: {
    padding: jsonBuilderTheme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: _defineProperty__default$1['default']({
    padding: jsonBuilderTheme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: "calc(1em + ".concat(jsonBuilderTheme.spacing(4), "px)"),
    transition: jsonBuilderTheme.transitions.create('width'),
    width: '100%'
  }, jsonBuilderTheme.breakpoints.up('md'), {
    width: '20ch'
  }),
  customWidth: {
    width: '100%'
  }
});

function PropertyTree(_ref) {
  var selectedJSON = _ref.selectedJSON;
  var classes = useStyles$6();

  var _useState = React.useState(true),
      _useState2 = _slicedToArray__default['default'](_useState, 2),
      expand = _useState2[0],
      setExpand = _useState2[1];

  var _useState3 = React.useState(),
      _useState4 = _slicedToArray__default['default'](_useState3, 2),
      searchTerm = _useState4[0],
      setSearchTerm = _useState4[1]; //for Sort 


  var _useState5 = React.useState(true),
      _useState6 = _slicedToArray__default['default'](_useState5, 2),
      sortJSON = _useState6[0],
      setSortJSON = _useState6[1];

  var _useState7 = React.useState(""),
      _useState8 = _slicedToArray__default['default'](_useState7, 2),
      sortDirection = _useState8[0],
      setSortDirection = _useState8[1];

  var handleExpand = function handleExpand() {
    if (expand === false) {
      setExpand(!expand);
    } else if (expand === true) {
      setExpand(false);
    }
  };

  var sortBykey = function sortBykey(direction) {
    if (sortJSON === true) {
      setSortDirection("Ascending");
      setSortJSON(false);
    } else if (sortJSON === false) {
      setSortJSON(true);
      setSortDirection("Descending");
    }
  };

  var searchData = function searchData(e) {
    setSearchTerm(e.target.value);
  };

  return /*#__PURE__*/React__default['default'].createElement(styles.MuiThemeProvider, {
    theme: jsonBuilderTheme
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: classes.customWidth
  }, /*#__PURE__*/React__default['default'].createElement(core.Paper, {
    variant: "elevation",
    className: classes.paper
  }, /*#__PURE__*/React__default['default'].createElement(core.AppBar, {
    position: "static",
    fontSize: "small",
    className: classes.root
  }, /*#__PURE__*/React__default['default'].createElement(core.Toolbar, null, /*#__PURE__*/React__default['default'].createElement(core.Grid, {
    container: true,
    alignItems: "center"
  }, /*#__PURE__*/React__default['default'].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default['default'].createElement(core.IconButton, {
    className: classes.editorButton,
    onClick: handleExpand
  }, expand ? /*#__PURE__*/React__default['default'].createElement(core.Badge, null, /*#__PURE__*/React__default['default'].createElement(core.Tooltip, {
    title: "Expand All fields"
  }, /*#__PURE__*/React__default['default'].createElement(ExpandLessRoundedIcon__default['default'], {
    style: {
      color: "white"
    },
    fontSize: "small"
  }))) : /*#__PURE__*/React__default['default'].createElement(core.Badge, null, /*#__PURE__*/React__default['default'].createElement(core.Tooltip, {
    title: "Collapse All fields"
  }, /*#__PURE__*/React__default['default'].createElement(ExpandMoreRoundedIcon__default['default'], {
    style: {
      color: "white"
    },
    fontSize: "small"
  }))))), /*#__PURE__*/React__default['default'].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default['default'].createElement(core.Tooltip, {
    title: sortDirection
  }, /*#__PURE__*/React__default['default'].createElement(core.IconButton, {
    onClick: function onClick() {
      return sortBykey();
    }
  }, sortJSON ? /*#__PURE__*/React__default['default'].createElement(core.Badge, null, /*#__PURE__*/React__default['default'].createElement(SortRoundedIcon__default['default'], {
    style: {
      color: "white"
    },
    fontSize: "small"
  })) : /*#__PURE__*/React__default['default'].createElement(core.Badge, null, /*#__PURE__*/React__default['default'].createElement(SortRoundedIcon__default['default'], {
    className: classes.unsortedIcon,
    style: {
      color: "white"
    },
    fontSize: "small"
  }))))), /*#__PURE__*/React__default['default'].createElement(core.Grid, {
    item: true,
    sm: true
  }), /*#__PURE__*/React__default['default'].createElement(core.Grid, {
    item: true,
    sm: true
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: classes.search
  }, /*#__PURE__*/React__default['default'].createElement(core.Tooltip, {
    title: "Search fields and values"
  }, /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("div", {
    className: classes.searchIcon
  }, /*#__PURE__*/React__default['default'].createElement(SearchIcon__default['default'], null)), /*#__PURE__*/React__default['default'].createElement(InputBase__default['default'], {
    placeholder: "Search fields and values",
    classes: {
      root: classes.inputRoot,
      input: classes.inputInput
    },
    inputProps: {
      'aria-label': 'search'
    },
    onChange: searchData
  })))))))), /*#__PURE__*/React__default['default'].createElement(core.Grid, {
    container: true,
    alignItems: "center"
  }, /*#__PURE__*/React__default['default'].createElement(core.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(NodeUpdate, {
    data: selectedJSON,
    length: Object.keys(selectedJSON).length,
    expand: expand,
    searchTerm: searchTerm,
    sortDirection: sortDirection
  })))))));
}

var useStyles$5 = styles.makeStyles({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: jsonBuilderTheme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: jsonBuilderTheme.typography.pxToRem(15),
    color: jsonBuilderTheme.palette.text.secondary
  },
  paper: {
    padding: jsonBuilderTheme.spacing(2),
    textAlign: 'left',
    elevation: 1
  },
  accordionDetailsSection: {// display: 'block'
  },
  accordionSection: {
    background: jsonBuilderTheme.palette.accordionSectionPropertyUpdate.main,
    position: "inherit"
  }
});

function PropertyUpdate() {
  var classes = useStyles$5();

  var _useState = React.useState(false),
      _useState2 = _slicedToArray__default['default'](_useState, 2),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  var _useState3 = React.useState({}),
      _useState4 = _slicedToArray__default['default'](_useState3, 2),
      jsonGreatGrandParent = _useState4[0],
      setGreatGrandParent = _useState4[1];

  var _useState5 = React.useState({}),
      _useState6 = _slicedToArray__default['default'](_useState5, 2),
      jsonGrandParent = _useState6[0],
      setGrandParent = _useState6[1];

  var _useState7 = React.useState({}),
      _useState8 = _slicedToArray__default['default'](_useState7, 2),
      jsonParent = _useState8[0],
      setParent = _useState8[1];

  var _useState9 = React.useState({}),
      _useState10 = _slicedToArray__default['default'](_useState9, 2),
      jsonChild = _useState10[0],
      setChild = _useState10[1];

  var _useState11 = React.useState({}),
      _useState12 = _slicedToArray__default['default'](_useState11, 2),
      jsonGrandChild = _useState12[0],
      setGrandChild = _useState12[1];

  var currentState = reactRedux.useSelector(function (state) {
    return state.jsonReducer.present;
  });

  var handleChange = function handleChange(panel) {
    return function (event, isExpanded) {
      setExpanded(isExpanded ? panel : false);
    };
  };

  React.useEffect(function () {
    setGreatGrandParent({});
    setGrandParent({});
    setParent({});
    setChild({});
    setGrandChild({});

    if (currentState.selectedNodeData && currentState.selectedNodeData.$PID !== "ROOT") {
      var getCurrentNodeResult = "";
      var getGreatGrandParentResult = "";
      var getGrandParentResult = "";
      var getParentResult = "";
      var getChildResult = "";
      var getGrandChildResult = "";

      if (Object.keys(currentState.selectedNodeData).length > 0) {
        getCurrentNodeResult = searchObject(currentState.jsonData, function (value) {
          return value !== null && value !== undefined && value.$ID === currentState.selectedNodeData.$ID;
        });

        if (Object.keys(getCurrentNodeResult).length > 0) {
          switch (getCurrentNodeResult[0].path.toString().split(".").length) {
            case 3:
              // Setting for only GreatGrandparent
              getGreatGrandParentResult = searchObject(currentState.jsonData, function (value) {
                return value !== null && value !== undefined && value.$ID === getCurrentNodeResult[0].value["$ID"];
              });
              setGreatGrandParent(getGreatGrandParentResult[0].value);
              setGrandParent({});
              setParent({});
              setChild({});
              setGrandChild({});
              break;

            case 5:
              // Setting for Grand Parent
              getGrandParentResult = searchObject(currentState.jsonData, function (value) {
                return value !== null && value !== undefined && value.$ID === getCurrentNodeResult[0].value["$ID"];
              });
              setGrandParent(getGrandParentResult[0].value);

              if (Object.keys(getGrandParentResult).length > 0) {
                // Setting for Great Grand Parent
                getGreatGrandParentResult = searchObject(currentState.jsonData, function (value) {
                  return value !== null && value !== undefined && value.$ID === getGrandParentResult[0].value["$PID"];
                });
                setGreatGrandParent(getGreatGrandParentResult[0].value);
              }

              setParent({});
              setChild({});
              setGrandChild({});
              break;

            case 7:
              // Setting for Parent
              getParentResult = searchObject(currentState.jsonData, function (value) {
                return value !== null && value !== undefined && value.$ID === getCurrentNodeResult[0].value["$ID"];
              });
              setParent(getParentResult[0].value);

              if (Object.keys(getParentResult).length > 0) {
                // Setting for Grand Parent
                getGrandParentResult = searchObject(currentState.jsonData, function (value) {
                  return value !== null && value !== undefined && value.$ID === getParentResult[0].value["$PID"];
                });
                setGrandParent(getGrandParentResult[0].value);

                if (Object.keys(getGrandParentResult).length > 0) {
                  // Setting for Great Grand Parent
                  getGreatGrandParentResult = searchObject(currentState.jsonData, function (value) {
                    return value !== null && value !== undefined && value.$ID === getGrandParentResult[0].value["$PID"];
                  });
                  setGreatGrandParent(getGreatGrandParentResult[0].value);
                }
              }

              setChild({});
              setGrandChild({});
              break;

            case 9:
              // Setting for Child
              getChildResult = searchObject(currentState.jsonData, function (value) {
                return value !== null && value !== undefined && value.$ID === getCurrentNodeResult[0].value["$ID"];
              });
              setChild(getChildResult[0].value);

              if (Object.keys(getChildResult).length > 0) {
                // Setting for Parent
                getParentResult = searchObject(currentState.jsonData, function (value) {
                  return value !== null && value !== undefined && value.$ID === getCurrentNodeResult[0].value["$PID"];
                });
                setParent(getParentResult[0].value);

                if (Object.keys(getParentResult).length > 0) {
                  // Setting for Grand Parent
                  getGrandParentResult = searchObject(currentState.jsonData, function (value) {
                    return value !== null && value !== undefined && value.$ID === getParentResult[0].value["$PID"];
                  });
                  setGrandParent(getGrandParentResult[0].value);

                  if (Object.keys(getGrandParentResult).length > 0) {
                    // Setting for Great Grand Parent
                    getGreatGrandParentResult = searchObject(currentState.jsonData, function (value) {
                      return value !== null && value !== undefined && value.$ID === getGrandParentResult[0].value["$PID"];
                    });
                    setGreatGrandParent(getGreatGrandParentResult[0].value);
                  }
                }
              }

              setGrandChild({});
              break;

            case 11:
              // Setting for Grand Child
              getGrandChildResult = searchObject(currentState.jsonData, function (value) {
                return value !== null && value !== undefined && value.$ID === getCurrentNodeResult[0].value["$ID"];
              });
              setGrandChild(getGrandChildResult[0].value);

              if (Object.keys(getGrandChildResult).length > 0) {
                // Setting for Child
                getChildResult = searchObject(currentState.jsonData, function (value) {
                  return value !== null && value !== undefined && value.$ID === getCurrentNodeResult[0].value["$PID"];
                });
                setChild(getChildResult[0].value);

                if (Object.keys(getChildResult).length > 0) {
                  // Setting for Parent
                  getParentResult = searchObject(currentState.jsonData, function (value) {
                    return value !== null && value !== undefined && value.$ID === getChildResult[0].value["$PID"];
                  });
                  setParent(getParentResult[0].value);

                  if (Object.keys(getParentResult).length > 0) {
                    // Setting for Grand Parent
                    getGrandParentResult = searchObject(currentState.jsonData, function (value) {
                      return value !== null && value !== undefined && value.$ID === getParentResult[0].value["$PID"];
                    });
                    setGrandParent(getGrandParentResult[0].value);

                    if (Object.keys(getGrandParentResult).length > 0) {
                      // Setting for Great Grand Parent
                      getGreatGrandParentResult = searchObject(currentState.jsonData, function (value) {
                        return value !== null && value !== undefined && value.$ID === getGrandParentResult[0].value["$PID"];
                      });
                      setGreatGrandParent(getGreatGrandParentResult[0].value);
                    }
                  }
                }
              }

              break;

            default:
              // Setting for Grand Child
              getGrandChildResult = searchObject(currentState.jsonData, function (value) {
                return value !== null && value !== undefined && value.$ID === getCurrentNodeResult[0].value["$ID"];
              });
              setGrandChild(getGrandChildResult[0].value);

              if (Object.keys(getGrandChildResult).length > 0) {
                // Setting for Child
                getChildResult = searchObject(currentState.jsonData, function (value) {
                  return value !== null && value !== undefined && value.$ID === getCurrentNodeResult[0].value["$PID"];
                });
                setChild(getChildResult[0].value);

                if (Object.keys(getChildResult).length > 0) {
                  // Setting for Parent
                  getParentResult = searchObject(currentState.jsonData, function (value) {
                    return value !== null && value !== undefined && value.$ID === getChildResult[0].value["$PID"];
                  });
                  setParent(getParentResult[0].value);

                  if (Object.keys(getParentResult).length > 0) {
                    // Setting for Grand Parent
                    getGrandParentResult = searchObject(currentState.jsonData, function (value) {
                      return value !== null && value !== undefined && value.$ID === getParentResult[0].value["$PID"];
                    });
                    setGrandParent(getGrandParentResult[0].value);

                    if (Object.keys(getGrandParentResult).length > 0) {
                      // Setting for Great Grand Parent
                      getGreatGrandParentResult = searchObject(currentState.jsonData, function (value) {
                        return value !== null && value !== undefined && value.$ID === getGrandParentResult[0].value["$PID"];
                      });
                      setGreatGrandParent(getGreatGrandParentResult[0].value);
                    }
                  }
                }
              }

              break;
          }
        }
      }
    }
  }, [currentState.selectedNodeData]);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: classes.root
  }, /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, currentState.selectedNodeData && currentState.selectedNodeData.$ID != null ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(Typography__default['default'], {
    color: "textSecondary",
    align: "left"
  }, "View & Update Properties"), /*#__PURE__*/React__default['default'].createElement(Grid__default['default'], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/React__default['default'].createElement(Grid__default['default'], {
    item: true,
    xs: 12
  }), Object.keys(jsonGreatGrandParent).length > 0 ? /*#__PURE__*/React__default['default'].createElement(Grid__default['default'], {
    item: true,
    xs: 12
  }, /*#__PURE__*/React__default['default'].createElement(Accordion__default['default'], {
    expanded: expanded === 'panel1',
    onChange: handleChange('panel1'),
    className: classes.accordionSection
  }, /*#__PURE__*/React__default['default'].createElement(AccordionSummary__default['default'], {
    expandIcon: /*#__PURE__*/React__default['default'].createElement(ExpandMoreIcon__default['default'], null),
    "aria-controls": "panel1bh-content",
    id: "panel1bh-header",
    className: classes.accordionDetailsSection
  }, /*#__PURE__*/React__default['default'].createElement(Typography__default['default'], null, Object.keys(jsonGreatGrandParent).length > 0 ? jsonGreatGrandParent.name : "Field", " Properties")), /*#__PURE__*/React__default['default'].createElement(AccordionDetails__default['default'], null, Object.keys(jsonGreatGrandParent).length > 0 ? /*#__PURE__*/React__default['default'].createElement(PropertyTree, {
    selectedJSON: jsonGreatGrandParent
  }) : null))) : null, Object.keys(jsonGrandParent).length > 0 ? /*#__PURE__*/React__default['default'].createElement(Grid__default['default'], {
    item: true,
    xs: 12
  }, /*#__PURE__*/React__default['default'].createElement(Accordion__default['default'], {
    expanded: expanded === 'panel2',
    onChange: handleChange('panel2'),
    className: classes.accordionSection
  }, /*#__PURE__*/React__default['default'].createElement(AccordionSummary__default['default'], {
    expandIcon: /*#__PURE__*/React__default['default'].createElement(ExpandMoreIcon__default['default'], null),
    "aria-controls": "panel1bh-content",
    id: "panel1bh-header",
    className: classes.accordionDetailsSection
  }, /*#__PURE__*/React__default['default'].createElement(Typography__default['default'], null, Object.keys(jsonGrandParent).length > 0 ? jsonGrandParent.name : "Field", " Properties")), /*#__PURE__*/React__default['default'].createElement(AccordionDetails__default['default'], null, Object.keys(jsonGrandParent).length > 0 ? /*#__PURE__*/React__default['default'].createElement(PropertyTree, {
    selectedJSON: jsonGrandParent
  }) : null))) : null, Object.keys(jsonParent).length > 0 ? /*#__PURE__*/React__default['default'].createElement(Grid__default['default'], {
    item: true,
    xs: 12
  }, /*#__PURE__*/React__default['default'].createElement(Accordion__default['default'], {
    expanded: expanded === 'panel3',
    onChange: handleChange('panel3'),
    className: classes.accordionSection
  }, /*#__PURE__*/React__default['default'].createElement(AccordionSummary__default['default'], {
    expandIcon: /*#__PURE__*/React__default['default'].createElement(ExpandMoreIcon__default['default'], null),
    "aria-controls": "panel1bh-content",
    id: "panel1bh-header",
    className: classes.accordionDetailsSection
  }, /*#__PURE__*/React__default['default'].createElement(Typography__default['default'], null, Object.keys(jsonParent).length > 0 ? jsonParent.name : "Field", " Properties")), /*#__PURE__*/React__default['default'].createElement(AccordionDetails__default['default'], null, Object.keys(jsonParent).length > 0 ? /*#__PURE__*/React__default['default'].createElement(PropertyTree, {
    selectedJSON: jsonParent
  }) : null))) : null, Object.keys(jsonChild).length > 0 ? /*#__PURE__*/React__default['default'].createElement(Grid__default['default'], {
    item: true,
    xs: 12
  }, /*#__PURE__*/React__default['default'].createElement(Accordion__default['default'], {
    expanded: expanded === 'panel4',
    onChange: handleChange('panel4'),
    className: classes.accordionSection
  }, /*#__PURE__*/React__default['default'].createElement(AccordionSummary__default['default'], {
    expandIcon: /*#__PURE__*/React__default['default'].createElement(ExpandMoreIcon__default['default'], null),
    "aria-controls": "panel1bh-content",
    id: "panel1bh-header",
    className: classes.accordionDetailsSection
  }, /*#__PURE__*/React__default['default'].createElement(Typography__default['default'], null, Object.keys(jsonChild).length > 0 ? jsonChild.name : "Field", " Properties")), /*#__PURE__*/React__default['default'].createElement(AccordionDetails__default['default'], null, Object.keys(jsonChild).length > 0 ? /*#__PURE__*/React__default['default'].createElement(PropertyTree, {
    selectedJSON: jsonChild
  }) : null))) : null, Object.keys(jsonGrandChild).length > 0 ? /*#__PURE__*/React__default['default'].createElement(Grid__default['default'], {
    item: true,
    xs: 12
  }, /*#__PURE__*/React__default['default'].createElement(Accordion__default['default'], {
    expanded: expanded === 'panel5',
    onChange: handleChange('panel5'),
    className: classes.accordionSection
  }, /*#__PURE__*/React__default['default'].createElement(AccordionSummary__default['default'], {
    expandIcon: /*#__PURE__*/React__default['default'].createElement(ExpandMoreIcon__default['default'], null),
    "aria-controls": "panel1bh-content",
    id: "panel1bh-header",
    className: classes.accordionDetailsSection
  }, /*#__PURE__*/React__default['default'].createElement(Typography__default['default'], null, Object.keys(jsonGrandChild).length > 0 ? jsonGrandChild.name : "Field", " Properties")), /*#__PURE__*/React__default['default'].createElement(AccordionDetails__default['default'], null, Object.keys(jsonGrandChild).length > 0 ? /*#__PURE__*/React__default['default'].createElement(PropertyTree, {
    selectedJSON: jsonGrandChild
  }) : null))) : null)) : ""));
}

var useStyles$4 = core.makeStyles({
  root: {
    flexGrow: 1
  },
  pageContent: {
    margin: jsonBuilderTheme.spacing(1),
    padding: jsonBuilderTheme.spacing(1),
    backgroundColor: jsonBuilderTheme.palette.pageContent.main,
    borderRadius: '0px',
    height: 'calc(100vh - 100px)'
  },
  paper: {
    padding: jsonBuilderTheme.spacing(2),
    textAlign: 'center',
    color: jsonBuilderTheme.palette.text.secondary,
    height: 'calc(100vh - 115px)',
    overflow: 'auto',
    elevation: 1,
    backgroundColor: jsonBuilderTheme.palette.editorPaper.main,
    borderRadius: '0px'
  }
});

function Editor() {
  var classes = useStyles$4();
  var currentState = reactRedux.useSelector(function (state) {
    return state.jsonReducer.present;
  });
  var dispatch = reactRedux.useDispatch();
  var checkROOT = searchObject(currentState.jsonData, function (value) {
    return value !== null && value !== undefined && value.$ID === "ROOT";
  });
  React.useEffect(function () {
    dispatch(fetch_json_success(currentState.jsonData));
  }, [checkROOT.length === 0]);
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(core.Paper, {
    className: classes.pageContent
  }, /*#__PURE__*/React__default['default'].createElement("form", null, /*#__PURE__*/React__default['default'].createElement(core.Grid, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/React__default['default'].createElement(core.Grid, {
    item: true,
    xs: 4
  }, /*#__PURE__*/React__default['default'].createElement(core.Paper, {
    variant: "elevation",
    className: classes.paper
  }, currentState.jsonData && Object.keys(currentState.jsonData).length > 0 ? /*#__PURE__*/React__default['default'].createElement(Tree, {
    data: currentState.jsonData,
    length: Object.keys(currentState.jsonData).length
  }) : null)), /*#__PURE__*/React__default['default'].createElement(core.Grid, {
    item: true,
    xs: 8
  }, /*#__PURE__*/React__default['default'].createElement(core.Paper, {
    className: classes.paper
  }, /*#__PURE__*/React__default['default'].createElement(PropertyUpdate, null)))))));
}

var useStyles$3 = core.makeStyles({
  root: {
    flexGrow: 1
  },
  pageContent: {
    margin: jsonBuilderTheme.spacing(1),
    padding: jsonBuilderTheme.spacing(1),
    backgroundColor: jsonBuilderTheme.palette.pageContent.main,
    borderRadius: '0px',
    height: 'calc(100vh - 100px)',
    minHeight: '80px'
  },
  paper: {
    padding: jsonBuilderTheme.spacing(0),
    textAlign: 'center',
    color: jsonBuilderTheme.palette.text.secondary,
    overflow: 'hidden',
    height: 'calc(100vh - 116px)',
    minHeight: '64px',
    elevation: 1,
    backgroundColor: jsonBuilderTheme.palette.editorPaper.main,
    borderRadius: '0px'
  },
  paperHeight: {
    height: '100vh'
  },
  resizeTextArea: {
    width: '100%',
    border: 'none',
    height: 'calc(100vh - 152px)',
    minHeight: '27px'
  },
  toolbar: {
    textAlign: 'left',
    padding: '4px 8px',
    background: '#545454',
    color: '#fff',
    marginBottom: '0px'
  },
  tooltip: {
    marginRight: jsonBuilderTheme.spacing(1),
    cursor: 'pointer'
  }
});
var JsonView = function JsonView(_ref) {
  var JsonData = _ref.JsonData;
  var classes = useStyles$3();
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(Paper__default['default'], {
    className: classes.pageContent
  }, /*#__PURE__*/React__default['default'].createElement(Grid__default['default'], {
    container: true,
    spacing: 1
  }, /*#__PURE__*/React__default['default'].createElement(Grid__default['default'], {
    item: true,
    xs: 12
  }, /*#__PURE__*/React__default['default'].createElement(Paper__default['default'], {
    variant: "elevation",
    className: classes.paper
  }, /*#__PURE__*/React__default['default'].createElement(CodeView, {
    treeData: JsonData
  }))))));
};
var CodeView = function CodeView(_ref2) {
  var treeData = _ref2.treeData,
      _ref2$replacer = _ref2.replacer,
      replacer = _ref2$replacer === void 0 ? null : _ref2$replacer,
      _ref2$space = _ref2.space,
      space = _ref2$space === void 0 ? 2 : _ref2$space;
  var classes = useStyles$3();
  var currentState = reactRedux.useSelector(function (state) {
    return state.jsonReducer.present;
  });
  var dispatch = reactRedux.useDispatch();

  var _useState = React.useState({}),
      _useState2 = _slicedToArray__default['default'](_useState, 2),
      codeView = _useState2[0],
      setCodeView = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray__default['default'](_useState3, 2),
      isInValid = _useState4[0],
      setIsInValid = _useState4[1];

  var _useState5 = React.useState(''),
      _useState6 = _slicedToArray__default['default'](_useState5, 2),
      errorMessage = _useState6[0],
      setErrorMessage = _useState6[1];

  var _useState7 = React.useState(''),
      _useState8 = _slicedToArray__default['default'](_useState7, 2),
      successMessage = _useState8[0],
      setSuccessMessage = _useState8[1];

  var _React$useState = React__default['default'].useState({
    openSnackbar: false,
    vertical: 'top',
    horizontal: 'center'
  }),
      _React$useState2 = _slicedToArray__default['default'](_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var vertical = state.vertical,
      horizontal = state.horizontal,
      openSnackbar = state.openSnackbar;

  var prettyJson = function prettyJson(e) {
    var status, message;

    var _validateJson = validateJson(e.target.value);

    var _validateJson2 = _slicedToArray__default['default'](_validateJson, 2);

    status = _validateJson2[0];
    message = _validateJson2[1];
    setCodeView(e.target.value);

    if (status) {
      isValidJson(e.target.value);
    } else {
      isInValidJson(message);
    }
  };

  var handleClose = function handleClose() {
    setIsInValid(false);
  };

  var handleCloseSuccess = function handleCloseSuccess() {
    setState({
      openSnackbar: false,
      vertical: 'top',
      horizontal: 'center'
    });
  };

  var isValidJson = function isValidJson(jsonData) {
    setIsInValid(false);
  };

  var isInValidJson = function isInValidJson(message) {
    setErrorMessage(message);
    setIsInValid(true);
  };

  var getJsonData = function getJsonData() {
    return setCodeView(JSON.stringify(JSON.parse(codeView), replacer, space));
  };

  var saveJSON = function saveJSON() {
    var jsonData = "";

    try {
      try {
        jsonData = eval(JSON.parse(JSON.stringify(codeView), replacer, space));
      } catch (_unused) {
        jsonData = JSON.parse(eval(JSON.stringify(unescape(codeView), replacer, space)));
      }

      Promise.resolve(dispatch(save_code_json(jsonData))).then(function () {
        return dispatch(set_temp_json());
      }); //dispatch(fetch_json_success(jsonData));

      setState({
        openSnackbar: true,
        vertical: 'top',
        horizontal: 'center'
      });
      setSuccessMessage("JSON is saved");
    } catch (_unused2) {
      Promise.resolve(dispatch(save_temp_json(codeView))).then(function () {
        return dispatch(not_proper_json());
      }); // dispatch(not_proper_json(false));
    }
  };

  React.useEffect(function () {
    var codeView = "";

    var _validateJson3 = validateJson(treeData),
        _validateJson4 = _slicedToArray__default['default'](_validateJson3, 1),
        message = _validateJson4[0];

    if (currentState.properJSON === true) {
      RemoveParentId(treeData);
      codeView = JSON.stringify(treeData, null, space);
      setCodeView(codeView);
    } else {
      isInValidJson(message);
      setCodeView(treeData);
    }
  }, [treeData]);
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("div", {
    className: classes.toolbar
  }, /*#__PURE__*/React__default['default'].createElement(core.Tooltip, {
    className: classes.tooltip,
    title: "Save JSON"
  }, /*#__PURE__*/React__default['default'].createElement(SaveOutlinedIcon__default['default'], {
    fontSize: "small",
    onClick: function onClick() {
      saveJSON();
      getJsonData();
    }
  })), /*#__PURE__*/React__default['default'].createElement(core.Tooltip, {
    className: classes.tooltip,
    title: "Format JSON"
  }, /*#__PURE__*/React__default['default'].createElement(FormatAlignLeftOutlinedIcon__default['default'], {
    fontSize: "small",
    onClick: getJsonData
  }))), codeView != "" && /*#__PURE__*/React__default['default'].createElement("textarea", {
    value: codeView,
    onChange: prettyJson,
    className: classes.resizeTextArea,
    placeholder: "Upload The File"
  }), errorMessage && isInValid && /*#__PURE__*/React__default['default'].createElement(FileErrorComponent, {
    isValid: isInValid,
    handleClose: handleClose,
    errorMessage: errorMessage
  }), successMessage && /*#__PURE__*/React__default['default'].createElement(SuccessMessage, {
    successMessage: successMessage,
    openAlertbar: openSnackbar,
    vertical: vertical,
    horizontal: horizontal,
    handleCloseSuccess: handleCloseSuccess
  }));
};

var _excluded = ["children", "value", "index"];
var useStyles$2 = core.makeStyles({
  root: {
    flexGrow: 0,
    flex: 0
  },
  paper: {
    borderRadius: 0
  },
  tab: {
    backgroundColor: jsonBuilderTheme.palette.viewSectiontab.main,
    minHeight: '20px',
    color: jsonBuilderTheme.palette.contentColor.white,
    "& div.MuiTabs-scroller": {
      position: 'inherit'
    },
    "& .MuiTabs-indicator": {
      display: 'none'
    },
    "& .Mui-selected ": {
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

function TabPanel(props) {
  var children = props.children,
      value = props.value,
      index = props.index,
      other = _objectWithoutProperties__default['default'](props, _excluded);

  return /*#__PURE__*/React__default['default'].createElement("div", _extends__default$1['default']({
    role: "tabpanel",
    hidden: value !== index,
    id: "simple-tabpanel-".concat(index),
    "aria-labelledby": "simple-tab-".concat(index)
  }, other), value === index && /*#__PURE__*/React__default['default'].createElement(core.Box, {
    p: 0
  }, /*#__PURE__*/React__default['default'].createElement(core.Typography, null, children)));
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: "simple-tab-".concat(index),
    'aria-controls': "simple-tabpanel-".concat(index)
  };
}
/************************************** */


function ViewSection() {
  var classes = useStyles$2();

  var _useState = React.useState(0),
      _useState2 = _slicedToArray__default['default'](_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };
  var currentState = reactRedux.useSelector(function (state) {
    return state.jsonReducer.present;
  });
  var tempJson = reactRedux.useSelector(function (state) {
    return state.jsonReducer.present.tempJson;
  });
  var jsonSchemaStatus = reactRedux.useSelector(function (state) {
    return state.jsonReducer.present.jsonSchemaStatus;
  });
  React.useEffect(function () {
    if (currentState.jsonData && Object.keys(currentState.jsonData).length === 0 && tempJson.length === 0) {
      // Land in TreeView
      setValue(0);
    } else if (currentState.jsonData && Object.keys(currentState.jsonData).length > 0 && tempJson.length > 0) {
      // If JSON is having issues
      setValue(1);
    } else if (currentState.jsonData && Object.keys(currentState.jsonData).length > 0) ;
  });
  React.useEffect(function () {
    setValue(1);
  }, [jsonSchemaStatus]);
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("form", null, /*#__PURE__*/React__default['default'].createElement(core.Grid, {
    container: true,
    spacing: 0
  }, /*#__PURE__*/React__default['default'].createElement(core.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/React__default['default'].createElement(Header, null)), /*#__PURE__*/React__default['default'].createElement(core.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/React__default['default'].createElement(core.AppBar, {
    position: "static",
    className: classes.root
  }, /*#__PURE__*/React__default['default'].createElement(core.Tabs, {
    className: classes.tab,
    value: value,
    onChange: handleChange
  }, /*#__PURE__*/React__default['default'].createElement(core.Tab, _extends__default$1['default']({
    className: classes.tabButton,
    label: "Tree View"
  }, a11yProps(0))), /*#__PURE__*/React__default['default'].createElement(core.Tab, _extends__default$1['default']({
    className: classes.tabButton,
    label: "JSON View"
  }, a11yProps(1))))), /*#__PURE__*/React__default['default'].createElement(TabPanel, {
    className: classes.tabpanel,
    value: value,
    index: 0
  }, /*#__PURE__*/React__default['default'].createElement(Editor, null)), /*#__PURE__*/React__default['default'].createElement(TabPanel, {
    value: value,
    index: 1
  }, /*#__PURE__*/React__default['default'].createElement(JsonView, {
    JsonData: currentState.properJSON === false ? tempJson : value === 0 ? currentState.jsonData : RemoveParentId(currentState.jsonData, "$ID", "$PID")
  }))))));
}

var useStyles$1 = styles.makeStyles({
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

function SmallScreen() {
  var classes = useStyles$1();
  return /*#__PURE__*/React__default['default'].createElement(Card__default['default'], {
    className: classes.root
  }, /*#__PURE__*/React__default['default'].createElement(CardContent__default['default'], null, /*#__PURE__*/React__default['default'].createElement(Typography__default['default'], {
    className: classes.title,
    color: "textSecondary"
  }, "View in large screen")));
}

function Home() {
  var _useState = React.useState(window.innerWidth),
      _useState2 = _slicedToArray__default['default'](_useState, 2),
      width = _useState2[0],
      setWidth = _useState2[1];

  var breakpoint = 700;
  React.useEffect(function () {
    var handleWindowResize = function handleWindowResize() {
      return setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize); // Return a function from the effect that removes the event listener

    return function () {
      return window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return width < breakpoint ? /*#__PURE__*/React__default['default'].createElement(SmallScreen, null) : /*#__PURE__*/React__default['default'].createElement(ViewSection, null);
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty__default$1['default'](target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var FETCH_JSON_REQUEST = 'FETCH_JSON_REQUEST';
var FETCH_JSON_SUCCESS = 'FETCH_JSON_SUCCESS';
var FETCH_JSON_FAILURE = 'FETCH_JSON_FAILURE';
var CLEAR_JSON = 'CLEAR_JSON';
var UPDATE_JSON = 'UPDATE_JSON';
var SAVE_JSON_SCHEMA = 'SAVE_JSON_SCHEMA';
var SAVE_JSON_SCHEMA_STATUS = 'SAVE_JSON_SCHEMA_STATUS';
var SAVE_TEMP_JSON = "SAVE_TEMP_JSON";
var SAVE_CODE_JSON = "SAVE_CODE_JSON";
var NOT_PROPER_JSON = "NOT_PROPER_JSON";
var SELECTED_NODE_JSON = 'SELECTED_NODE_JSON';
var SET_TEMP_JSON_VALUE = 'SET_TEMP_JSON_VALUE';
var SAVE_JSON_SCHEMA_READONLY = 'SAVE_JSON_SCHEMA_READONLY';
var REMOVE_OBJECT_JSON = 'REMOVE_OBJECT_JSON';
var REMOVE_NODE_JSON = 'REMOVE_NODE_JSON';
var ADD_NODE_JSON = 'ADD_NODE_JSON';
var ADD_OBJECT_JSON = 'ADD_OBJECT_JSON';
var FETCH_JSON_RETURN = 'FETCH_JSON_RETURN';
var UPDATE_SELECTED_NODE = 'UPDATE_SELECTED_NODE';
var initialState = {
  loading: false,
  jsonData: [],
  tempJson: [],
  jsonSchemaData: [],
  selectedNodeData: [],
  JsonSchemaStatus: 0,
  jsonSchemaReadOnlyData: [],
  error: '',
  updated: false,
  properJSON: false
};

var jsonReducer = function jsonReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case FETCH_JSON_REQUEST:
      return _objectSpread({}, state);

    case FETCH_JSON_SUCCESS:
      var payload = convertToJson(action.payload);
      var properJSONValue = false;

      if (state.tempJson.length > 0) {
        properJSONValue = false;
      } else {
        properJSONValue = true;
      }

      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        jsonData: payload,
        selectedNodeData: [],
        error: '',
        updated: false,
        properJSON: properJSONValue
      });

    case SET_TEMP_JSON_VALUE:
      return _objectSpread(_objectSpread({}, state), {}, {
        tempJson: [],
        properJSON: true
      });

    case FETCH_JSON_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        jsonData: [],
        error: action.payload,
        updated: false
      });

    case FETCH_JSON_RETURN:
      return _objectSpread({}, state);

    case UPDATE_JSON:
      var updatedJSON = "";
      Object.keys(action.payload).map(function (key, index) {
        if (key === "root" + action.path + "." + action.key) {
          var data = action.payload;
          updatedJSON = simplifr.update(data, "root" + action.path, action.json);
        }
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        jsonData: simplifr.desimplify(updatedJSON),
        updated: true
      });

    case ADD_OBJECT_JSON:
      var jsonUpdatedObjects = "";
      var updatedJsonObjects = "";
      var dataPayload = action.payload;
      var jsonNewObject = "";

      if (action.typeOfObject === "ArrayObject") {
        jsonNewObject = action.jsonToAdd;
      } else if (action.typeOfObject === "Object") {
        jsonNewObject = {
          fields: [action.jsonToAdd]
        };
      }

      jsonUpdatedObjects = simplifr.add(dataPayload, "root" + action.path, jsonNewObject);
      updatedJsonObjects = simplifr.desimplify(jsonUpdatedObjects);
      return _objectSpread(_objectSpread({}, state), {}, {
        jsonData: updatedJsonObjects,
        selectedNodeData: []
      });

    case ADD_NODE_JSON:
      var jsonAfterAddition = "";

      var jsonObject = _defineProperty__default$1['default']({}, action.jsonToAdd.newJSON.jsonKey, action.jsonToAdd.newJSON.jsonValue);

      var dataAdd = action.payload;
      jsonAfterAddition = simplifr.add(dataAdd, "root" + action.path, jsonObject);
      return _objectSpread(_objectSpread({}, state), {}, {
        jsonData: simplifr.desimplify(jsonAfterAddition)
      });

    case REMOVE_OBJECT_JSON:
      var jsonAfterRemoval = "";
      var dataObject = action.payload;
      jsonAfterRemoval = simplifr.remove(dataObject, "root" + action.path);
      return _objectSpread(_objectSpread({}, state), {}, {
        jsonData: simplifr.desimplify(jsonAfterRemoval),
        selectedNodeData: []
      });

    case REMOVE_NODE_JSON:
      var jsonNodesAfterRemoval = "";
      var dataNode = action.payload;
      jsonNodesAfterRemoval = simplifr.remove(dataNode, "root" + action.path);
      return _objectSpread(_objectSpread({}, state), {}, {
        jsonData: simplifr.desimplify(jsonNodesAfterRemoval)
      });

    case SELECTED_NODE_JSON:
      return _objectSpread(_objectSpread({}, state), {}, {
        selectedNodeData: action.selectedNodeData,
        updated: true
      });

    case UPDATE_SELECTED_NODE:
      return _objectSpread(_objectSpread({}, state), {}, {
        selectedNodeData: action.selectedNodeData
      });

    case CLEAR_JSON:
      return {
        loading: false,
        jsonData: [],
        tempJson: [],
        jsonSchemaData: [],
        selectedNodeData: [],
        JsonSchemaStatus: 0,
        jsonSchemaReadOnlyData: [],
        error: '',
        updated: false,
        properJSON: false
      };
    // save json schema in redux 

    case SAVE_JSON_SCHEMA:
      /*return Object.assign({}, state, {
        jsonSchemaData: state.jsonSchemaData.concat(action.payload)
      });*/
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        jsonSchemaData: action.payload,
        error: '',
        updated: false,
        jsonSchemaStatus: action.status
      });

    case SAVE_JSON_SCHEMA_STATUS:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        jsonSchemaStatus: action.payload,
        error: '',
        updated: false
      });

    case SAVE_CODE_JSON:
      var jsonPayload = convertToJson(action.payload);
      var jsonProper = false;

      if (state.tempJson.length > 0) {
        jsonProper = false;
      } else {
        jsonProper = true;
      }

      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        jsonData: jsonPayload,
        selectedNodeData: [],
        error: '',
        updated: true,
        properJSON: jsonProper
      });

    case SAVE_TEMP_JSON:
      return _objectSpread(_objectSpread({}, state), {}, {
        tempJson: action.payload,
        properJSON: false
      });

    case NOT_PROPER_JSON:
      return _objectSpread(_objectSpread({}, state), {}, {
        jsonData: [],
        properJSON: false
      });

    case SAVE_JSON_SCHEMA_READONLY:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        jsonSchemaReadOnlyData: action.payload,
        error: '',
        updated: false
      });

    default:
      return state;
  }
};

var allReducers = redux.combineReducers({
  jsonReducer: undoable__default['default'](jsonReducer, {
    limit: 10
  })
});

var store = redux.createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
var useStyles = core.makeStyles({
  appMain: {
    paddingLeft: '0px',
    width: '100%'
  }
});

function ReactJsonBuilder() {
  var classes = useStyles();
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/React__default['default'].createElement(ThemeProvider, {
    theme: jsonBuilderTheme
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: classes.appMain
  }, /*#__PURE__*/React__default['default'].createElement(Home, null)), /*#__PURE__*/React__default['default'].createElement(core.CssBaseline, null))));
}

module.exports = ReactJsonBuilder;
