"use strict";
(() => {
var exports = {};
exports.id = 77;
exports.ids = [77];
exports.modules = {

/***/ 8432:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

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

/***/ 7861:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5616);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8432);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(678);
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4323);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9407);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);
next_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





const handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__["default"])();
handler.use(_utils_auth__WEBPACK_IMPORTED_MODULE_4__/* .isAuth */ .$);
handler.put(async (req, res)=>{
    await _utils_db__WEBPACK_IMPORTED_MODULE_3__/* ["default"].connect */ .Z.connect();
    const user = await _models_User__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findById */ .Z.findById(req.user._id);
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password ? bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().hashSync(req.body.password) : user.password;
    await user.save();
    await _utils_db__WEBPACK_IMPORTED_MODULE_3__/* ["default"].disconnect */ .Z.disconnect();
    console.log(user);
    const token = (0,_utils_auth__WEBPACK_IMPORTED_MODULE_4__/* .signToken */ .f)(user);
    res.send({
        token,
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin
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
var __webpack_exports__ = __webpack_require__.X(0, [323,637], () => (__webpack_exec__(7861)));
module.exports = __webpack_exports__;

})();