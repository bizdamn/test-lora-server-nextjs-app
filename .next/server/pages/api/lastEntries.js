"use strict";
(() => {
var exports = {};
exports.id = 622;
exports.ids = [622];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 5616:
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ 1376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const entriesSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    deviceName: {
        type: String,
        required: true
    },
    devEUI: {
        type: String,
        required: true
    },
    temprature: {
        type: String,
        required: true
    },
    humidity: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        required: true
    }
});
const Entries = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Entries) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Entries', entriesSchema, 'entries');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Entries);


/***/ }),

/***/ 1042:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5616);
/* harmony import */ var _models_Entries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1376);
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4323);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);
next_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



const handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__["default"])();
handler.get(async (req, res)=>{
    await _utils_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"].connect */ .Z.connect();
    const lastEntry79f9 = await _models_Entries__WEBPACK_IMPORTED_MODULE_1__/* ["default"].find */ .Z.find({
        devEUI: 'a8404151518379f9'
    }).sort({
        _id: -1
    }).limit(1);
    await _utils_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"].disconnect */ .Z.disconnect();
    await _utils_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"].connect */ .Z.connect();
    const lastEntry79fd = await _models_Entries__WEBPACK_IMPORTED_MODULE_1__/* ["default"].find */ .Z.find({
        devEUI: 'a8404181e18379fd'
    }).sort({
        _id: -1
    }).limit(1);
    await _utils_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"].disconnect */ .Z.disconnect();
    await _utils_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"].connect */ .Z.connect();
    const lastEntry7a0e = await _models_Entries__WEBPACK_IMPORTED_MODULE_1__/* ["default"].find */ .Z.find({
        devEUI: 'a8404152a1837a0e'
    }).sort({
        _id: -1
    }).limit(1);
    await _utils_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"].disconnect */ .Z.disconnect();
    await _utils_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"].connect */ .Z.connect();
    const lastEntry7a01 = await _models_Entries__WEBPACK_IMPORTED_MODULE_1__/* ["default"].find */ .Z.find({
        devEUI: 'a840417eb1837a01'
    }).sort({
        _id: -1
    }).limit(1);
    await _utils_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"].disconnect */ .Z.disconnect();
    await _utils_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"].connect */ .Z.connect();
    const lastEntry79fe = await _models_Entries__WEBPACK_IMPORTED_MODULE_1__/* ["default"].find */ .Z.find({
        devEUI: 'a84041c2718379fe'
    }).sort({
        _id: -1
    }).limit(1);
    await _utils_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"].disconnect */ .Z.disconnect();
    await _utils_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"].connect */ .Z.connect();
    const lastEntry7a0a = await _models_Entries__WEBPACK_IMPORTED_MODULE_1__/* ["default"].find */ .Z.find({
        devEUI: 'a84041b931837a0a'
    }).sort({
        _id: -1
    }).limit(1);
    await _utils_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"].disconnect */ .Z.disconnect();
    console.log('Latest Entries Fetched');
    res.send({
        lastEntry79f9: lastEntry79f9,
        lastEntry79fd: lastEntry79fd,
        lastEntry7a0e: lastEntry7a0e,
        lastEntry7a01: lastEntry7a01,
        lastEntry79fe: lastEntry79fe,
        lastEntry7a0a: lastEntry7a0a
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

});

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [323], () => (__webpack_exec__(1042)));
module.exports = __webpack_exports__;

})();