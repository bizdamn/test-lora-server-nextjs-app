"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "notistack"
var external_notistack_ = __webpack_require__(3142);
// EXTERNAL MODULE: external "@material-ui/styles"
var styles_ = __webpack_require__(3349);
// EXTERNAL MODULE: ./utils/LayoutContext.js
var LayoutContext = __webpack_require__(2009);
;// CONCATENATED MODULE: external "tinycolor2"
const external_tinycolor2_namespaceObject = require("tinycolor2");
var external_tinycolor2_default = /*#__PURE__*/__webpack_require__.n(external_tinycolor2_namespaceObject);
;// CONCATENATED MODULE: ./themes/default.js

const primary = "#38B6FF";
const secondary = "#FF5C93";
const warning = "#FFC260";
const success = "#3CD4A0";
const info = "#9013FE";
const lightenRate = 7.5;
const darkenRate = 15;
const defaultTheme = {
    palette: {
        primary: {
            main: primary,
            light: external_tinycolor2_default()(primary).lighten(lightenRate).toHexString(),
            dark: external_tinycolor2_default()(primary).darken(darkenRate).toHexString()
        },
        secondary: {
            main: secondary,
            light: external_tinycolor2_default()(secondary).lighten(lightenRate).toHexString(),
            dark: external_tinycolor2_default()(secondary).darken(darkenRate).toHexString(),
            contrastText: "#FFFFFF"
        },
        warning: {
            main: warning,
            light: external_tinycolor2_default()(warning).lighten(lightenRate).toHexString(),
            dark: external_tinycolor2_default()(warning).darken(darkenRate).toHexString()
        },
        success: {
            main: success,
            light: external_tinycolor2_default()(success).lighten(lightenRate).toHexString(),
            dark: external_tinycolor2_default()(success).darken(darkenRate).toHexString()
        },
        info: {
            main: info,
            light: external_tinycolor2_default()(info).lighten(lightenRate).toHexString(),
            dark: external_tinycolor2_default()(info).darken(darkenRate).toHexString()
        },
        text: {
            primary: "#4A4A4A",
            secondary: "#6E6E6E",
            hint: "#B9B9B9"
        },
        background: {
            default: "#F6F7FF",
            light: "#F3F5FF"
        }
    },
    customShadows: {
        widget: "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
        widgetDark: "0px 3px 18px 0px #4558A3B3, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
        widgetWide: "0px 12px 33px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A"
    },
    overrides: {
        MuiBackdrop: {
            root: {
                backgroundColor: "#4A4A4A1A"
            }
        },
        MuiMenu: {
            paper: {
                boxShadow: "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A"
            }
        },
        MuiSelect: {
            icon: {
                color: "#B9B9B9"
            }
        },
        MuiListItem: {
            root: {
                "&$selected": {
                    backgroundColor: "#F3F5FF !important",
                    "&:focus": {
                        backgroundColor: "#F3F5FF"
                    }
                }
            },
            button: {
                "&:hover, &:focus": {
                    backgroundColor: "#F3F5FF"
                }
            }
        },
        MuiTouchRipple: {
            child: {
                backgroundColor: "white"
            }
        },
        MuiTableRow: {
            root: {
                height: 56
            }
        },
        MuiTableCell: {
            root: {
                borderBottom: "1px solid rgba(224, 224, 224, .5)",
                paddingLeft: 24
            },
            head: {
                fontSize: "0.95rem"
            },
            body: {
                fontSize: "0.95rem"
            }
        },
        PrivateSwitchBase: {
            root: {
                marginLeft: 10
            }
        }
    }
};
/* harmony default export */ const themes_default = (defaultTheme);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var core_styles_ = __webpack_require__(8308);
;// CONCATENATED MODULE: ./themes/index.js


const overrides = {
    typography: {
        h1: {
            fontSize: "3rem"
        },
        h2: {
            fontSize: "2rem"
        },
        h3: {
            fontSize: "1.64rem"
        },
        h4: {
            fontSize: "1.5rem"
        },
        h5: {
            fontSize: "1.285rem"
        },
        h6: {
            fontSize: "1.142rem"
        }
    }
};
const themes = {
    default: (0,core_styles_.createTheme)({
        ...themes_default,
        ...overrides
    })
};
/* harmony default export */ const themes_0 = (themes);

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./utils/DataStore.js
var DataStore = __webpack_require__(7820);
;// CONCATENATED MODULE: ./pages/_app.js









function MyApp({ Component , pageProps  }) {
    (0,external_react_.useEffect)(()=>{
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.6.0/mdb.min.css",
                        rel: "stylesheet"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(DataStore/* DataStoreProvider */.P, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(LayoutContext/* LayoutProvider */.aM, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(styles_.ThemeProvider, {
                        theme: themes_0["default"],
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_notistack_.SnackbarProvider, {
                            anchorOrigin: {
                                vertical: "top",
                                horizontal: "center"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                                ...pageProps
                            })
                        })
                    })
                })
            })
        ]
    }));
};


/***/ }),

/***/ 8308:
/***/ ((module) => {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 3349:
/***/ ((module) => {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ 6734:
/***/ ((module) => {

module.exports = require("js-cookie");

/***/ }),

/***/ 3142:
/***/ ((module) => {

module.exports = require("notistack");

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
var __webpack_exports__ = __webpack_require__.X(0, [257,9], () => (__webpack_exec__(1300)));
module.exports = __webpack_exports__;

})();