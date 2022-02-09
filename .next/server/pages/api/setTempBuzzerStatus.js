"use strict";
(() => {
var exports = {};
exports.id = 16;
exports.ids = [16];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 5616:
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ 5645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const organisationSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    name: {
        type: String,
        required: true
    },
    tagline: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    FF01_I05_status: {
        type: Boolean,
        required: true
    },
    FF01_I04_status: {
        type: Boolean,
        required: true
    }
});
const Organisation = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Organisation) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Organisation', organisationSchema, 'organisation');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Organisation);


/***/ }),

/***/ 8028:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5616);
/* harmony import */ var _models_Organisation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5645);
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4323);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);
next_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



const handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__["default"])();
handler.post(async (req, res)=>{
    await _utils_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"].connect */ .Z.connect();
    const org = await _models_Organisation__WEBPACK_IMPORTED_MODULE_1__/* ["default"].updateOne */ .Z.updateOne({
        name: 'Marelli India',
        $set: {
            FF01_I04_status: req.body.buzzerStatus
        }
    });
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
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [323], () => (__webpack_exec__(8028)));
module.exports = __webpack_exports__;

})();