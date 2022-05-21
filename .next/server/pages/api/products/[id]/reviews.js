"use strict";
(() => {
var exports = {};
exports.id = 8873;
exports.ids = [8873];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 5616:
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ 7558:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5616);
/* harmony import */ var _utils_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4554);
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7891);
/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7581);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9535);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);
next_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__["default"])({
    onError: _utils_error__WEBPACK_IMPORTED_MODULE_4__/* .onError */ .q
});
handler.get(async (req, res)=>{
    (0,_utils_db__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    const product = await _models_Product__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findById */ .Z.findById(req.query.id);
    if (product) {
        res.send(product.reviews);
    } else {
        res.status(404).send({
            message: 'Product not found'
        });
    }
});
handler.use(_utils_auth__WEBPACK_IMPORTED_MODULE_3__/* .isAuth */ .$D).post(async (req, res)=>{
    const product = await _models_Product__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findById */ .Z.findById(req.query.id);
    if (product) {
        const existReview = product.reviews.find((x)=>x.user == req.user._id
        );
        if (existReview) {
            await _models_Product__WEBPACK_IMPORTED_MODULE_2__/* ["default"].updateOne */ .Z.updateOne({
                _id: req.query.id,
                'reviews._id': existReview._id
            }, {
                $set: {
                    'reviews.$.comment': req.body.comment,
                    'reviews.$.rating': Number(req.body.rating)
                }
            });
            const updatedProduct = await _models_Product__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findById */ .Z.findById(req.query.id);
            updatedProduct.numReviews = updatedProduct.reviews.length;
            updatedProduct.rating = updatedProduct.reviews.reduce((a, c)=>c.rating + a
            , 0) / updatedProduct.reviews.length;
            await updatedProduct.save();
            return res.send({
                message: 'Review updated'
            });
        } else {
            const review = {
                user: req.user._id,
                name: req.user.name,
                rating: Number(req.body.rating),
                comment: req.body.comment
            };
            product.reviews.push(review);
            product.numReviews = product.reviews.length;
            product.rating = product.reviews.reduce((a, c)=>c.rating + a
            , 0) / product.reviews.length;
            await product.save();
            res.status(201).send({
                message: 'Review submitted'
            });
        }
    } else {
        res.status(404).send({
            message: 'Product Not Found'
        });
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ onError)
/* harmony export */ });
/* unused harmony export getError */
const getError = (err)=>err.response && err.response.data && err.response.data.message ? err.response.data.message : err.message
;
const onError = async (err, req, res, next)=>{
    res.status(500).send({
        message: err.toString()
    });
};



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9535,5900], () => (__webpack_exec__(7558)));
module.exports = __webpack_exports__;

})();