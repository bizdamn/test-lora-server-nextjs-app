"use strict";
(() => {
var exports = {};
exports.id = 357;
exports.ids = [357];
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

/***/ 2786:
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
handler.post(async (req, res)=>{
    // console.log(req.body.deviceEUI)
    // console.log(req.body.start_date)
    // console.log(req.body.end_date)
    await _utils_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"].connect */ .Z.connect();
    const filteredEntries = await _models_Entries__WEBPACK_IMPORTED_MODULE_1__/* ["default"].find */ .Z.find({
        timestamp: {
            $gt: new Date(req.body.start_date),
            $lt: new Date(req.body.end_date)
        },
        devEUI: req.body.deviceEUI
    });
    await _utils_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"].disconnect */ .Z.disconnect();
    // console.log(filteredEntries)
    res.send(filteredEntries);
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
var __webpack_exports__ = __webpack_require__.X(0, [323], () => (__webpack_exec__(2786)));
module.exports = __webpack_exports__;

})();