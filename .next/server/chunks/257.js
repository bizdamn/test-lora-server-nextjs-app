"use strict";
exports.id = 257;
exports.ids = [257];
exports.modules = {

/***/ 7820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ DataStore),
/* harmony export */   "P": () => (/* binding */ DataStoreProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6734);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const DataStore = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();
const initialState = {
    user: {
        username: 'apoo',
        name: '',
        bio: '',
        pic: '',
        email: '',
        phone: '',
        country: ''
    },
    product: {
        accessType: 'download',
        title: '',
        slug: '',
        status: false,
        isFeatured: false,
        isDeleted: false,
        sku: '',
        barcode: '',
        type: '',
        description: '',
        categories: [],
        features: [],
        images: {},
        pricing: {},
        options: {},
        size: {},
        rating: 0,
        numReviews: 0,
        inventory: 0
    },
    darkMode: js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get('darkMode') === 'ON' ? true : false,
    cart: {
        cartItems: js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get('cartItems') ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get('cartItems')) : [],
        shippingAddress: js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get('shippingAddress') ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get('shippingAddress')) : {},
        paymentMethod: js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get('paymentMethod') ? js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get('paymentMethod') : ''
    },
    userInfo: js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get('userInfo') ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get('userInfo')) : null
};
function reducer(state, action) {
    switch(action.type){
        case 'DARK_MODE_ON':
            return {
                ...state,
                darkMode: true
            };
        case 'DARK_MODE_OFF':
            return {
                ...state,
                darkMode: false
            };
        case 'CART_ADD_ITEM':
            {
                const newItem = action.payload;
                const existItem = state.cart.cartItems.find((item)=>item._id === newItem._id
                );
                const cartItems = existItem ? state.cart.cartItems.map((item)=>item.name === existItem.name ? newItem : item
                ) : [
                    ...state.cart.cartItems,
                    newItem
                ];
                js_cookie__WEBPACK_IMPORTED_MODULE_1___default().set('cartItems', JSON.stringify(cartItems));
                return {
                    ...state,
                    cart: {
                        ...state.cart,
                        cartItems
                    }
                };
            }
        case 'CART_REMOVE_ITEM':
            {
                const cartItems = state.cart.cartItems.filter((item)=>item._id !== action.payload._id
                );
                js_cookie__WEBPACK_IMPORTED_MODULE_1___default().set('cartItems', JSON.stringify(cartItems));
                return {
                    ...state,
                    cart: {
                        ...state.cart,
                        cartItems
                    }
                };
            }
        case 'SAVE_SHIPPING_ADDRESS':
            return {
                ...state,
                cart: {
                    ...state.cart,
                    shippingAddress: action.payload
                }
            };
        case 'SAVE_PAYMENT_METHOD':
            return {
                ...state,
                cart: {
                    ...state.cart,
                    paymentMethod: action.payload
                }
            };
        case 'CART_CLEAR':
            return {
                ...state,
                cart: {
                    ...state.cart,
                    cartItems: []
                }
            };
        case 'USER_LOGIN':
            return {
                ...state,
                userInfo: action.payload
            };
        case 'USER_LOGOUT':
            return {
                ...state,
                userInfo: null
            };
        case 'UPDATE_PRODUCT':
            return {
                ...state,
                product: action.payload
            };
        default:
            return state;
    }
}
function DataStoreProvider(props) {
    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(reducer, initialState);
    const value = {
        state,
        dispatch
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DataStore.Provider, {
        value: value,
        children: props.children
    }));
}


/***/ })

};
;