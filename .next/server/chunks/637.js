"use strict";
exports.id = 637;
exports.ids = [637];
exports.modules = {

/***/ 678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    isSuperAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
});
const User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.User) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('User', userSchema, 'users');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);


/***/ }),

/***/ 9407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ signToken),
/* harmony export */   "$": () => (/* binding */ isAuth)
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);

const signToken = (user)=>{
    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        isSuperAdmin: user.isSuperAdmin
    }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });
};
const isAuth = async (req, res, next)=>{
    const { authorization  } = req.headers;
    if (authorization) {
        // Bearer xxx => xxx
        const token = authorization.slice(7, authorization.length);
        jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, process.env.JWT_SECRET, (err, decode)=>{
            if (err) {
                res.status(401).send({
                    message: 'Token is not valid'
                });
            } else {
                req.user = decode;
                next();
            }
        });
    } else {
        res.status(401).send({
            message: 'Token is not suppiled'
        });
    }
};



/***/ })

};
;