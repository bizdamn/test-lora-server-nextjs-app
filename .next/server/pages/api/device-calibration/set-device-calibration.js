"use strict";
(() => {
var exports = {};
exports.id = 420;
exports.ids = [420];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 5616:
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ 8613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const deviceCalibrationSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    devEUI: {
        type: String,
        required: true,
        unique: true
    },
    temprature_calibration: {
        type: Number,
        required: true
    },
    humidity_calibration: {
        type: Number,
        required: true
    }
});
const DeviceCalibration = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.DeviceCalibration) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('DeviceCalibration', deviceCalibrationSchema, 'device-calibration');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeviceCalibration);


/***/ }),

/***/ 2393:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5616);
/* harmony import */ var _models_DeviceCalibration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8613);
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4323);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);
next_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



const handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__["default"])();
handler.put(async (req, res)=>{
    await _utils_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"].connect */ .Z.connect();
    const findResult = await _models_DeviceCalibration__WEBPACK_IMPORTED_MODULE_1__/* ["default"].find */ .Z.find({
        devEUI: req.body.devEUI
    });
    findResult[0].temprature_calibration = req.body.tempratureCalibration;
    findResult[0].humidity_calibration = req.body.humidityCalibration;
    await findResult[0].save();
    await _utils_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"].disconnect */ .Z.disconnect();
    res.send({
        message: 'User Updated Successfully'
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

});

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [323], () => (__webpack_exec__(2393)));
module.exports = __webpack_exports__;

})();