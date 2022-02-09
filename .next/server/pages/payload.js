"use strict";
(() => {
var exports = {};
exports.id = 986;
exports.ids = [986];
exports.modules = {

/***/ 8532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Payload),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1776);
/* harmony import */ var _models_Entries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1052);
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9972);
/* harmony import */ var _utils_DataStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7820);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);








function Payload({ entries  }) {
    const { state  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_utils_DataStore__WEBPACK_IMPORTED_MODULE_6__/* .DataStore */ .K);
    const { userInfo  } = state;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!userInfo) {
            router.push('/login');
        }
    }, [
        userInfo,
        router
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
            style: {
                overflowX: 'scroll'
            },
            sx: {
                width: '100%',
                typography: 'body1'
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                className: "table table-hover table-striped",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    children: "Device Name"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    children: "Device EUI Number"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    children: "Humidity % RH"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    children: "Temperature \xb0C"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    children: "Date-Time"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                        children: entries.map((element)=>{
                            var date = new Date(element.timestamp);
                            var formattted_time = date.toLocaleString();
                            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: element.deviceName
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: element.devEUI
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: element.humidity
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: element.temprature
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: formattted_time
                                    })
                                ]
                            }, element.deviceName));
                        })
                    })
                ]
            })
        })
    }));
};
async function getServerSideProps() {
    await _utils_db__WEBPACK_IMPORTED_MODULE_5__/* ["default"].connect */ .Z.connect();
    const entries = await _models_Entries__WEBPACK_IMPORTED_MODULE_4__/* ["default"].find */ .Z.find({}).sort({
        'timestamp': -1
    }).limit(300).lean();
    await _utils_db__WEBPACK_IMPORTED_MODULE_5__/* ["default"].disconnect */ .Z.disconnect();
    return {
        props: {
            entries: entries.map(_utils_db__WEBPACK_IMPORTED_MODULE_5__/* ["default"].convertDocToObj */ .Z.convertDocToObj)
        }
    };
}


/***/ }),

/***/ 8130:
/***/ ((module) => {

module.exports = require("@material-ui/core");

/***/ }),

/***/ 8308:
/***/ ((module) => {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 4628:
/***/ ((module) => {

module.exports = require("@material-ui/core/styles/colorManipulator");

/***/ }),

/***/ 2105:
/***/ ((module) => {

module.exports = require("@material-ui/icons");

/***/ }),

/***/ 3349:
/***/ ((module) => {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ 1709:
/***/ ((module) => {

module.exports = require("@mui/icons-material/CellTowerSharp");

/***/ }),

/***/ 1050:
/***/ ((module) => {

module.exports = require("@mui/icons-material/DataObject");

/***/ }),

/***/ 5711:
/***/ ((module) => {

module.exports = require("@mui/icons-material/SensorsSharp");

/***/ }),

/***/ 4428:
/***/ ((module) => {

module.exports = require("@mui/icons-material/StorageSharp");

/***/ }),

/***/ 752:
/***/ ((module) => {

module.exports = require("@mui/icons-material/TouchAppSharp");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 6734:
/***/ ((module) => {

module.exports = require("js-cookie");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 6410:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,676,664,257,9,776,105], () => (__webpack_exec__(8532)));
module.exports = __webpack_exports__;

})();