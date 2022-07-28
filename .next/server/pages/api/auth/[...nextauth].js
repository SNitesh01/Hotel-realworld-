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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "js-sha256":
/*!****************************!*\
  !*** external "js-sha256" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("js-sha256");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-sha256 */ \"js-sha256\");\n/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_sha256__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET,\n            authorizationUrl: \"https://accounts.google.com/o/outh2/v2/auth?prompt=consent&access_type=offline&response_tye=code\"\n        })\n    ],\n    callbacks: {\n        async signIn ({ user  }) {\n            const request = axios__WEBPACK_IMPORTED_MODULE_0___default().post(\"http://localhost:8001/api/auth/user/signup\", {\n                ...user,\n                password: (0,js_sha256__WEBPACK_IMPORTED_MODULE_2__.sha256)(user.email)\n            });\n            window.localStorage.setItem(\"user_invalid_useless_ref\", JSON.stringify(user));\n            return (await request).data?.status;\n        }\n    },\n    pages: {\n        signIn: \"/account/signin\",\n        signOut: \"/account/signout\",\n        error: \"/error/404\",\n        verifyRequest: \"/error/404\",\n        newUser: \"/error/404\" // New users will be directed here on first sign in (leave the property out if not of interest)\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNPO0FBQ0U7QUFDcUI7QUFFeEQsaUVBQWVDLGdEQUFRLENBQUM7SUFDckJHLFNBQVMsRUFBRTtRQUNSRCxpRUFBYyxDQUFDO1lBQ1pFLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGdCQUFnQjtZQUN0Q0MsWUFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csb0JBQW9CO1lBQzlDQyxnQkFBZ0IsRUFBRSxrR0FBa0c7U0FDdEgsQ0FBQztLQUNKO0lBQ0RDLFNBQVMsRUFBRTtRQUNSLE1BQU1DLE1BQU0sRUFBQyxFQUFFQyxJQUFJLEdBQUUsRUFBRTtZQUNwQixNQUFNQyxPQUFPLEdBQUdmLGlEQUFVLENBQUMsNENBQTRDLEVBQUU7Z0JBQ3RFLEdBQUdjLElBQUk7Z0JBQ1BHLFFBQVEsRUFBRWYsaURBQU0sQ0FBQ1ksSUFBSSxDQUFDSSxLQUFLLENBQUM7YUFDOUIsQ0FBQztZQUVGQyxNQUFNLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLDBCQUEwQixFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1QsSUFBSSxDQUFDLENBQUM7WUFFN0UsT0FBTyxDQUFDLE1BQU1DLE9BQU8sQ0FBQyxDQUFDUyxJQUFJLEVBQUVDLE1BQU0sQ0FBQztTQUN0QztLQUNIO0lBQ0RDLEtBQUssRUFBRTtRQUNKYixNQUFNLEVBQUUsaUJBQWlCO1FBQ3pCYyxPQUFPLEVBQUUsa0JBQWtCO1FBQzNCQyxLQUFLLEVBQUUsWUFBWTtRQUNuQkMsYUFBYSxFQUFFLFlBQVk7UUFDM0JDLE9BQU8sRUFBRSxZQUFZLENBQUMsK0ZBQStGO0tBQ3ZIO0NBQ0gsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJztcbmltcG9ydCB7IHNoYTI1NiB9IGZyb20gJ2pzLXNoYTI1Nic7XG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGUnO1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gICBwcm92aWRlcnM6IFtcbiAgICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lELFxuICAgICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcbiAgICAgICAgIGF1dGhvcml6YXRpb25Vcmw6ICdodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vby9vdXRoMi92Mi9hdXRoP3Byb21wdD1jb25zZW50JmFjY2Vzc190eXBlPW9mZmxpbmUmcmVzcG9uc2VfdHllPWNvZGUnXG4gICAgICB9KVxuICAgXSxcbiAgIGNhbGxiYWNrczoge1xuICAgICAgYXN5bmMgc2lnbkluKHsgdXNlciB9KSB7XG4gICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4MDAxL2FwaS9hdXRoL3VzZXIvc2lnbnVwJywge1xuICAgICAgICAgICAgLi4udXNlcixcbiAgICAgICAgICAgIHBhc3N3b3JkOiBzaGEyNTYodXNlci5lbWFpbClcbiAgICAgICAgIH0pO1xuXG4gICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJfaW52YWxpZF91c2VsZXNzX3JlZicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKVxuXG4gICAgICAgICByZXR1cm4gKGF3YWl0IHJlcXVlc3QpLmRhdGE/LnN0YXR1cztcbiAgICAgIH1cbiAgIH0sXG4gICBwYWdlczoge1xuICAgICAgc2lnbkluOiAnL2FjY291bnQvc2lnbmluJyxcbiAgICAgIHNpZ25PdXQ6ICcvYWNjb3VudC9zaWdub3V0JyxcbiAgICAgIGVycm9yOiAnL2Vycm9yLzQwNCcsIC8vIEVycm9yIGNvZGUgcGFzc2VkIGluIHF1ZXJ5IHN0cmluZyBhcyA/ZXJyb3I9XG4gICAgICB2ZXJpZnlSZXF1ZXN0OiAnL2Vycm9yLzQwNCcsIC8vICh1c2VkIGZvciBjaGVjayBlbWFpbCBtZXNzYWdlKVxuICAgICAgbmV3VXNlcjogJy9lcnJvci80MDQnIC8vIE5ldyB1c2VycyB3aWxsIGJlIGRpcmVjdGVkIGhlcmUgb24gZmlyc3Qgc2lnbiBpbiAobGVhdmUgdGhlIHByb3BlcnR5IG91dCBpZiBub3Qgb2YgaW50ZXJlc3QpXG4gICB9XG59KTsiXSwibmFtZXMiOlsiYXhpb3MiLCJOZXh0QXV0aCIsInNoYTI1NiIsIkdvb2dsZVByb3ZpZGVyIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiYXV0aG9yaXphdGlvblVybCIsImNhbGxiYWNrcyIsInNpZ25JbiIsInVzZXIiLCJyZXF1ZXN0IiwicG9zdCIsInBhc3N3b3JkIiwiZW1haWwiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzdGF0dXMiLCJwYWdlcyIsInNpZ25PdXQiLCJlcnJvciIsInZlcmlmeVJlcXVlc3QiLCJuZXdVc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();