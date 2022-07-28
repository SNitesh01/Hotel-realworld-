"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/account/signup";
exports.ids = ["pages/account/signup"];
exports.modules = {

/***/ "./pages/account/signup.tsx":
/*!**********************************!*\
  !*** ./pages/account/signup.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction signin(props) {\n    const providers = props.providers;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: Object.values(providers).map((provider)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(provider.id)\n                    ,\n                    children: [\n                        \"Sign in with \",\n                        provider.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\anura\\\\Downloads\\\\hotel-realword-main\\\\client\\\\pages\\\\account\\\\signup.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 13\n                }, this)\n            }, provider.name, false, {\n                fileName: \"C:\\\\Users\\\\anura\\\\Downloads\\\\hotel-realword-main\\\\client\\\\pages\\\\account\\\\signup.tsx\",\n                lineNumber: 19,\n                columnNumber: 11\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\anura\\\\Downloads\\\\hotel-realword-main\\\\client\\\\pages\\\\account\\\\signup.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (signin);\nasync function getServerSideProps(context) {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)(context);\n    if (session) return {\n        redirect: {\n            permanent: false,\n            destination: \"/profile\"\n        }\n    };\n    return {\n        props: {\n            providers: await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getProviders)()\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hY2NvdW50L3NpZ251cC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBbUU7QUFXbkUsU0FBU0csTUFBTSxDQUFDQyxLQUFrQixFQUFFO0lBQ2xDLE1BQU1DLFNBQVMsR0FBb0JELEtBQUssQ0FBQ0MsU0FBUztJQUVsRCxxQkFDRSw4REFBQ0MsS0FBRztrQkFDREMsTUFBTSxDQUFDQyxNQUFNLENBQUNILFNBQVMsQ0FBQyxDQUFDSSxHQUFHLENBQUMsQ0FBQ0MsUUFBUSxHQUFLO1lBQzFDLHFCQUNFLDhEQUFDSixLQUFHOzBCQUNGLDRFQUFDSyxRQUFNO29CQUFDQyxPQUFPLEVBQUUsSUFBTVgsdURBQU0sQ0FBQ1MsUUFBUSxDQUFDRyxFQUFFLENBQUM7b0JBQUE7O3dCQUFFLGVBQzdCO3dCQUFDSCxRQUFRLENBQUNJLElBQUk7Ozs7Ozt3QkFDcEI7ZUFIREosUUFBUSxDQUFDSSxJQUFJOzs7O29CQUlqQixDQUNOO1NBQ0gsQ0FBQzs7Ozs7WUFDRSxDQUNOO0NBQ0g7QUFFRCxpRUFBZVgsTUFBTSxFQUFDO0FBRWYsZUFBZVksa0JBQWtCLENBQUNDLE9BQVksRUFBRTtJQUNyRCxNQUFNQyxPQUFPLEdBQUcsTUFBTWYsMkRBQVUsQ0FBQ2MsT0FBTyxDQUFDO0lBRXpDLElBQUlDLE9BQU8sRUFBRSxPQUFPO1FBQ2xCQyxRQUFRLEVBQUU7WUFDUkMsU0FBUyxFQUFFLEtBQUs7WUFDaEJDLFdBQVcsRUFBRSxVQUFVO1NBQ3hCO0tBQ0Y7SUFFRCxPQUFPO1FBQ0xoQixLQUFLLEVBQUU7WUFDTEMsU0FBUyxFQUFFLE1BQU1MLDZEQUFZLEVBQUU7U0FDaEM7S0FDRixDQUFDO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9hY2NvdW50L3NpZ251cC50c3g/ODczOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRQcm92aWRlcnMsIHNpZ25JbiwgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcblxudHlwZSBQcm92aWRlciA9IHtcbiAgbmFtZTogc3RyaW5nLFxuICBpZDogc3RyaW5nXG59XG5cbnR5cGUgc2lnbkluUHJvcHMgPSB7XG4gIHByb3ZpZGVyczogQXJyYXk8UHJvdmlkZXI+XG59XG5cbmZ1bmN0aW9uIHNpZ25pbihwcm9wczogc2lnbkluUHJvcHMpIHtcbiAgY29uc3QgcHJvdmlkZXJzOiBBcnJheTxQcm92aWRlcj4gPSBwcm9wcy5wcm92aWRlcnM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge09iamVjdC52YWx1ZXMocHJvdmlkZXJzKS5tYXAoKHByb3ZpZGVyKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e3Byb3ZpZGVyLm5hbWV9PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduSW4ocHJvdmlkZXIuaWQpfT5cbiAgICAgICAgICAgICAgU2lnbiBpbiB3aXRoIHtwcm92aWRlci5uYW1lfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2lnbmluO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQ6IGFueSkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihjb250ZXh0KTtcblxuICBpZiAoc2Vzc2lvbikgcmV0dXJuIHtcbiAgICByZWRpcmVjdDoge1xuICAgICAgcGVybWFuZW50OiBmYWxzZSxcbiAgICAgIGRlc3RpbmF0aW9uOiAnL3Byb2ZpbGUnXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcHJvdmlkZXJzOiBhd2FpdCBnZXRQcm92aWRlcnMoKSxcbiAgICB9LFxuICB9O1xufSJdLCJuYW1lcyI6WyJnZXRQcm92aWRlcnMiLCJzaWduSW4iLCJnZXRTZXNzaW9uIiwic2lnbmluIiwicHJvcHMiLCJwcm92aWRlcnMiLCJkaXYiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJwcm92aWRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpZCIsIm5hbWUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0Iiwic2Vzc2lvbiIsInJlZGlyZWN0IiwicGVybWFuZW50IiwiZGVzdGluYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/account/signup.tsx\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/account/signup.tsx"));
module.exports = __webpack_exports__;

})();