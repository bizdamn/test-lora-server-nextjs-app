"use strict";
exports.id = 9;
exports.ids = [9];
exports.modules = {

/***/ 2009:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aM": () => (/* binding */ LayoutProvider),
/* harmony export */   "Vn": () => (/* binding */ useLayoutState),
/* harmony export */   "BQ": () => (/* binding */ useLayoutDispatch),
/* harmony export */   "GB": () => (/* binding */ toggleSidebar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var LayoutStateContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();
var LayoutDispatchContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();
function layoutReducer(state, action) {
    switch(action.type){
        case "TOGGLE_SIDEBAR":
            return {
                ...state,
                isSidebarOpened: !state.isSidebarOpened
            };
        default:
            {
                throw new Error(`Unhandled action type: ${action.type}`);
            }
    }
}
function LayoutProvider({ children  }) {
    var [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_1___default().useReducer(layoutReducer, {
        isSidebarOpened: true
    });
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LayoutStateContext.Provider, {
        value: state,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LayoutDispatchContext.Provider, {
            value: dispatch,
            children: children
        })
    }));
}
function useLayoutState() {
    var context = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(LayoutStateContext);
    if (context === undefined) {
        throw new Error("useLayoutState must be used within a LayoutProvider");
    }
    return context;
}
function useLayoutDispatch() {
    var context = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(LayoutDispatchContext);
    if (context === undefined) {
        throw new Error("useLayoutDispatch must be used within a LayoutProvider");
    }
    return context;
}

// ###########################################################
function toggleSidebar(dispatch) {
    dispatch({
        type: "TOGGLE_SIDEBAR"
    });
}


/***/ })

};
;