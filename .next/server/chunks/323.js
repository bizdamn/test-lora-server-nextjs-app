"use strict";
exports.id = 323;
exports.ids = [323];
exports.modules = {

/***/ 4323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const connection = {};
async function connect() {
    if (connection.isConnected) {
        console.log('already connected');
        return;
    }
    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections.length) > 0) {
        connection.isConnected = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState);
        if (connection.isConnected === 1) {
            console.log('use previous connection');
            return;
        }
        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().disconnect();
    }
    const db1 = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
    console.log('new connection');
    connection.isConnected = db1.connections[0].readyState;
}
async function disconnect() {
    if (connection.isConnected) {
        // if (process.env.NODE_ENV === 'production') {
        //   await mongoose.disconnect();
        //   connection.isConnected = false;
        // } else {
        //   console.log('not disconnected');
        // }
        console.log('not disconnected');
    }
}
function convertDocToObj(doc) {
    doc._id = doc._id.toString();
    if (doc.timestamp) {
        doc.timestamp = doc.timestamp.toString();
    }
    return doc;
}
const db = {
    connect,
    disconnect,
    convertDocToObj
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);


/***/ })

};
;