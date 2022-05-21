"use strict";
(() => {
var exports = {};
exports.id = 7221;
exports.ids = [7221];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 4722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7891);
/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7581);


const handler = async (req, res)=>{
    await (0,_utils_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    const userdb = await _models_Product__WEBPACK_IMPORTED_MODULE_1__/* ["default"].find */ .Z.find({});
    res.json(userdb);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5900], () => (__webpack_exec__(4722)));
module.exports = __webpack_exports__;

})();