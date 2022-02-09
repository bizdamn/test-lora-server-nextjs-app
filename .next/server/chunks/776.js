"use strict";
exports.id = 776;
exports.ids = [776];
exports.modules = {

/***/ 1776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "@material-ui/styles"
var styles_ = __webpack_require__(3349);
;// CONCATENATED MODULE: ./Layout/styles.js

/* harmony default export */ const styles = ((0,styles_.makeStyles)((theme)=>({
        root: {
            display: "flex",
            maxWidth: "100vw",
            overflowX: "hidden"
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            width: `calc(100vw - 240px)`,
            minHeight: "100vh"
        },
        contentShift: {
            width: `calc(100vw - ${240 + theme.spacing(6)}px)`,
            transition: theme.transitions.create([
                "width",
                "margin"
            ], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
            })
        },
        fakeToolbar: {
            ...theme.mixins.toolbar
        },
        link: {
            '&:not(:first-child)': {
                paddingLeft: 15
            }
        }
    })
));

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__(2105);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6734);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var core_styles_ = __webpack_require__(8308);
// EXTERNAL MODULE: external "@material-ui/core/styles/colorManipulator"
var colorManipulator_ = __webpack_require__(4628);
;// CONCATENATED MODULE: ./components/ui/Header/styles.js


/* harmony default export */ const Header_styles = ((0,core_styles_.makeStyles)((theme)=>({
        logotype: {
            color: "white",
            marginLeft: theme.spacing(2.5),
            marginRight: theme.spacing(2.5),
            fontWeight: 500,
            fontSize: 18,
            whiteSpace: "nowrap",
            [theme.breakpoints.down("xs")]: {
                display: "none"
            }
        },
        appBar: {
            width: "100vw",
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create([
                "margin"
            ], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            })
        },
        toolbar: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2)
        },
        hide: {
            display: "none"
        },
        grow: {
            flexGrow: 1
        },
        search: {
            position: "relative",
            borderRadius: 25,
            paddingLeft: theme.spacing(2.5),
            width: 36,
            backgroundColor: (0,colorManipulator_.alpha)(theme.palette.common.black, 0),
            transition: theme.transitions.create([
                "background-color",
                "width"
            ]),
            "&:hover": {
                cursor: "pointer",
                backgroundColor: (0,colorManipulator_.alpha)(theme.palette.common.black, 0.08)
            }
        },
        searchFocused: {
            backgroundColor: (0,colorManipulator_.alpha)(theme.palette.common.black, 0.08),
            width: "100%",
            [theme.breakpoints.up("md")]: {
                width: 250
            }
        },
        searchIcon: {
            width: 36,
            right: 0,
            height: "100%",
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: theme.transitions.create("right"),
            "&:hover": {
                cursor: "pointer"
            }
        },
        searchIconOpened: {
            right: theme.spacing(1.25)
        },
        inputRoot: {
            color: "inherit",
            width: "100%"
        },
        inputInput: {
            height: 36,
            padding: 0,
            paddingRight: 36 + theme.spacing(1.25),
            width: "100%"
        },
        messageContent: {
            display: "flex",
            flexDirection: "column"
        },
        headerMenu: {
            marginTop: theme.spacing(7)
        },
        headerMenuList: {
            display: "flex",
            flexDirection: "column"
        },
        headerMenuItem: {
            "&:hover, &:focus": {
                backgroundColor: theme.palette.background.light
            }
        },
        headerMenuButton: {
            marginLeft: theme.spacing(2),
            padding: theme.spacing(0.5)
        },
        headerMenuButtonSandwich: {
            marginLeft: 9,
            [theme.breakpoints.down("sm")]: {
                marginLeft: 0
            },
            padding: theme.spacing(0.5)
        },
        headerMenuButtonCollapse: {
            marginRight: theme.spacing(2)
        },
        headerIcon: {
            fontSize: 28,
            color: "rgba(255, 255, 255, 0.35)"
        },
        headerIconCollapse: {
            color: "white"
        },
        profileMenu: {
            minWidth: 265
        },
        profileMenuUser: {
            display: "flex",
            flexDirection: "column",
            padding: theme.spacing(2)
        },
        profileMenuItem: {
            color: theme.palette.text.hint
        },
        profileMenuIcon: {
            marginRight: theme.spacing(2),
            color: theme.palette.text.hint,
            '&:hover': {
                color: theme.palette.primary.main
            }
        },
        profileMenuLink: {
            fontSize: 16,
            textDecoration: "none",
            "&:hover": {
                cursor: "pointer"
            }
        },
        messageNotification: {
            height: "auto",
            display: "flex",
            alignItems: "center",
            "&:hover, &:focus": {
                backgroundColor: theme.palette.background.light
            }
        },
        messageNotificationSide: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginRight: theme.spacing(2)
        },
        messageNotificationBodySide: {
            alignItems: "flex-start",
            marginRight: 0
        },
        sendMessageButton: {
            margin: theme.spacing(4),
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
            textTransform: "none"
        },
        sendButtonIcon: {
            marginLeft: theme.spacing(2)
        },
        purchaseBtn: {
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            },
            marginRight: theme.spacing(3)
        }
    })
));

;// CONCATENATED MODULE: ./components/ui/Wrappers/Wrappers.js





// styles
var useStyles = (0,core_styles_.makeStyles)((theme)=>({
        badge: {
            fontWeight: 600,
            height: 16,
            minWidth: 16
        }
    })
);
function Badge({ children , colorBrightness , color , ...props }) {
    var classes = useStyles();
    var theme = useTheme();
    var Styled = createStyled({
        badge: {
            backgroundColor: getColor(color, theme, colorBrightness)
        }
    });
    return(/*#__PURE__*/ _jsx(Styled, {
        children: (styledProps)=>/*#__PURE__*/ _jsx(BadgeBase, {
                classes: {
                    badge: classnames(classes.badge, styledProps.classes.badge)
                },
                ...props,
                children: children
            })
    }));
}
function Typography({ children , weight , size , colorBrightness , color , ...props }) {
    var theme = (0,core_styles_.useTheme)();
    return(/*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
        style: {
            color: getColor(color, theme, colorBrightness),
            fontWeight: getFontWeight(weight),
            fontSize: getFontSize(size, props.variant, theme)
        },
        ...props,
        children: children
    }));
}
function Button({ children , color , className , ...props }) {
    var theme = useTheme();
    var Styled = createStyled({
        root: {
            color: getColor(color, theme)
        },
        contained: {
            backgroundColor: getColor(color, theme),
            boxShadow: theme.widget,
            color: `${color ? "white" : theme.palette.text.primary} !important`,
            "&:hover": {
                backgroundColor: getColor(color, theme, "light"),
                boxShadow: theme.widgetWide
            },
            "&:active": {
                boxShadow: theme.widgetWide
            }
        },
        outlined: {
            color: getColor(color, theme),
            borderColor: getColor(color, theme)
        },
        select: {
            backgroundColor: theme.palette.primary.main,
            color: "#fff"
        }
    });
    return(/*#__PURE__*/ _jsx(Styled, {
        children: ({ classes  })=>/*#__PURE__*/ _jsx(ButtonBase, {
                classes: {
                    contained: classes.contained,
                    root: classes.root,
                    outlined: classes.outlined
                },
                ...props,
                className: classnames({
                    [classes.select]: props.select
                }, className),
                children: children
            })
    }));
}

// ########################################################################
function getColor(color, theme, brigtness = "main") {
    if (color && theme.palette[color] && theme.palette[color][brigtness]) {
        return theme.palette[color][brigtness];
    }
}
function getFontWeight(style) {
    switch(style){
        case "light":
            return 300;
        case "medium":
            return 500;
        case "bold":
            return 600;
        default:
            return 400;
    }
}
function getFontSize(size, variant = "", theme) {
    var multiplier;
    switch(size){
        case "sm":
            multiplier = 0.8;
            break;
        case "md":
            multiplier = 1.5;
            break;
        case "xl":
            multiplier = 2;
            break;
        case "xxl":
            multiplier = 3;
            break;
        default:
            multiplier = 1;
            break;
    }
    var defaultSize = variant && theme.typography[variant] ? theme.typography[variant].fontSize : theme.typography.fontSize + "px";
    return `calc(${defaultSize} * ${multiplier})`;
}
function createStyled(styles, options) {
    var Styled = function(props) {
        const { children , ...other } = props;
        return children(other);
    };
    return withStyles(styles, options)(Styled);
}

// EXTERNAL MODULE: ./utils/DataStore.js
var DataStore = __webpack_require__(7820);
// EXTERNAL MODULE: ./utils/LayoutContext.js
var LayoutContext = __webpack_require__(2009);
;// CONCATENATED MODULE: ./components/ui/Header/Header.js









// styles

// components


// context

function Header(props) {
    const { state , dispatch  } = (0,external_react_.useContext)(DataStore/* DataStore */.K);
    const { userInfo  } = state;
    var classes = Header_styles();
    const router = (0,router_.useRouter)();
    // global
    var layoutState = (0,LayoutContext/* useLayoutState */.Vn)();
    var layoutDispatch = (0,LayoutContext/* useLayoutDispatch */.BQ)();
    // local
    var { 0: profileMenu , 1: setProfileMenu  } = (0,external_react_.useState)(null);
    const logoutClickHandler = ()=>{
        dispatch({
            type: 'USER_LOGOUT'
        });
        external_js_cookie_default().remove('userInfo');
        router.push('/login');
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(core_.AppBar, {
        style: {
            background: '#B8DCEA'
        },
        position: "fixed",
        className: classes.appBar,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Toolbar, {
            className: classes.toolbar,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(core_.IconButton, {
                    color: "inherit",
                    onClick: ()=>(0,LayoutContext/* toggleSidebar */.GB)(layoutDispatch)
                    ,
                    className: external_classnames_default()(classes.headerMenuButtonSandwich, classes.headerMenuButtonCollapse),
                    children: layoutState.isSidebarOpened ? /*#__PURE__*/ jsx_runtime_.jsx(icons_.ArrowBack, {
                        classes: {
                            root: external_classnames_default()(classes.headerIcon, classes.headerIconCollapse)
                        }
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(icons_.Menu, {
                        classes: {
                            root: external_classnames_default()(classes.headerIcon, classes.headerIconCollapse)
                        }
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                    justifyContent: "center",
                    alignItems: "center",
                    container: true,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                            item: true,
                            xs: 2,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                        width: 100,
                                        height: 60,
                                        src: "/logo.svg",
                                        alt: "IGSCS Logo"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                            item: true,
                            xs: 8,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                                sx: {
                                    display: {
                                        xs: 'none',
                                        sm: 'none',
                                        lg: 'block'
                                    }
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Typography, {
                                    variant: "h4",
                                    align: "center",
                                    className: "appbar-title",
                                    style: {
                                        color: '#214181'
                                    },
                                    children: "SMART  TEMPERATURE  & HUMIDITY MONITORING SYSTEM"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                            sx: {
                                p: 0
                            },
                            item: true,
                            xs: 2,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                                    sx: {
                                        display: {
                                            xs: 'none',
                                            sm: 'none',
                                            md: 'block',
                                            lg: 'block'
                                        },
                                        padding: 0,
                                        margin: 0
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.IconButton, {
                                        "aria-haspopup": "true",
                                        color: "inherit",
                                        className: classes.headerMenuButton,
                                        "aria-controls": "profile-menu",
                                        onClick: (e)=>setProfileMenu(e.currentTarget)
                                        ,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            width: 125,
                                            height: 70,
                                            src: "/client-logo.png",
                                            alt: "Client Logo"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                                    sx: {
                                        display: {
                                            xs: 'block',
                                            sm: 'block',
                                            md: 'none',
                                            lg: 'none'
                                        },
                                        padding: 0,
                                        margin: 0
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.IconButton, {
                                        "aria-haspopup": "true",
                                        color: "inherit",
                                        className: classes.headerMenuButton,
                                        "aria-controls": "profile-menu",
                                        onClick: (e)=>setProfileMenu(e.currentTarget)
                                        ,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            width: '100rem',
                                            height: '70rem',
                                            src: "/client-logo.png",
                                            alt: "Client Logo"
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Menu, {
                    id: "profile-menu",
                    open: Boolean(profileMenu),
                    anchorEl: profileMenu,
                    onClose: ()=>setProfileMenu(null)
                    ,
                    className: classes.headerMenu,
                    classes: {
                        paper: classes.profileMenu
                    },
                    disableAutoFocusItem: true,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: classes.profileMenuUser,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Typography, {
                                    variant: "p",
                                    weight: "medium",
                                    children: userInfo ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                        children: [
                                            "Name: \xa0\xa0  ",
                                            userInfo.name
                                        ]
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Typography, {
                                    variant: "p",
                                    weight: "medium",
                                    children: userInfo ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                        children: [
                                            "Role: \xa0\xa0  ",
                                            userInfo.isAdmin ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                children: "Admin"
                                            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                children: "User"
                                            })
                                        ]
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.profileMenuUser,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/profile",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Typography, {
                                        children: "Profile"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.profileMenuUser,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Typography, {
                                className: classes.profileMenuLink,
                                color: "primary",
                                onClick: ()=>logoutClickHandler()
                                ,
                                children: "Sign Out"
                            })
                        })
                    ]
                })
            ]
        })
    }));
};

// EXTERNAL MODULE: external "@mui/icons-material/StorageSharp"
var StorageSharp_ = __webpack_require__(4428);
var StorageSharp_default = /*#__PURE__*/__webpack_require__.n(StorageSharp_);
// EXTERNAL MODULE: external "@mui/icons-material/TouchAppSharp"
var TouchAppSharp_ = __webpack_require__(752);
var TouchAppSharp_default = /*#__PURE__*/__webpack_require__.n(TouchAppSharp_);
// EXTERNAL MODULE: external "@mui/icons-material/SensorsSharp"
var SensorsSharp_ = __webpack_require__(5711);
var SensorsSharp_default = /*#__PURE__*/__webpack_require__.n(SensorsSharp_);
// EXTERNAL MODULE: external "@mui/icons-material/CellTowerSharp"
var CellTowerSharp_ = __webpack_require__(1709);
var CellTowerSharp_default = /*#__PURE__*/__webpack_require__.n(CellTowerSharp_);
// EXTERNAL MODULE: external "@mui/icons-material/DataObject"
var DataObject_ = __webpack_require__(1050);
var DataObject_default = /*#__PURE__*/__webpack_require__.n(DataObject_);
;// CONCATENATED MODULE: ./components/ui/Sidebar/styles.js

const drawerWidth = 240;
/* harmony default export */ const Sidebar_styles = ((0,core_styles_.makeStyles)((theme)=>({
        menuButton: {
            marginLeft: 12,
            marginRight: 36
        },
        hide: {
            display: "none"
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: "nowrap"
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
            })
        },
        drawerClose: {
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            }),
            overflowX: "hidden",
            width: theme.spacing(7) + 40,
            [theme.breakpoints.down("sm")]: {
                width: drawerWidth
            }
        },
        toolbar: {
            ...theme.mixins.toolbar,
            [theme.breakpoints.down("sm")]: {
                display: "none"
            }
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3)
        },
        /* sidebarList: {
    marginTop: theme.spacing(6),
  }, */ mobileBackButton: {
            marginTop: theme.spacing(0.5),
            marginLeft: 18,
            [theme.breakpoints.only("sm")]: {
                marginTop: theme.spacing(0.625)
            },
            [theme.breakpoints.up("md")]: {
                display: "none"
            }
        }
    })
));

;// CONCATENATED MODULE: ./components/ui/Sidebar/components/SidebarLink/styles.js

/* harmony default export */ const SidebarLink_styles = ((0,core_styles_.makeStyles)((theme)=>({
        link: {
            textDecoration: "none",
            "&:hover, &:focus": {
                backgroundColor: theme.palette.background.light
            }
        },
        externalLink: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textDecoration: 'none'
        },
        linkActive: {
            backgroundColor: theme.palette.background.light
        },
        linkNested: {
            paddingLeft: 0,
            "&:hover, &:focus": {
                backgroundColor: "#FFFFFF"
            }
        },
        linkIcon: {
            marginRight: theme.spacing(1),
            color: theme.palette.text.secondary + "99",
            transition: theme.transitions.create("color"),
            width: 24,
            display: "flex",
            justifyContent: "center"
        },
        linkIconActive: {
            color: theme.palette.primary.main
        },
        linkText: {
            padding: 0,
            color: theme.palette.text.secondary + "CC",
            transition: theme.transitions.create([
                "opacity",
                "color"
            ]),
            fontSize: 16
        },
        linkTextActive: {
            color: theme.palette.text.primary
        },
        linkTextHidden: {
            opacity: 0
        },
        nestedList: {
            paddingLeft: theme.spacing(2) + 3
        },
        sectionTitle: {
            marginLeft: theme.spacing(4.5),
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2)
        },
        divider: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(4),
            height: 1,
            backgroundColor: "#D8D8D880"
        }
    })
));

;// CONCATENATED MODULE: ./components/ui/Sidebar/components/Dot.js




// styles
var Dot_useStyles = (0,styles_.makeStyles)((theme)=>({
        dotBase: {
            width: 8,
            height: 8,
            backgroundColor: theme.palette.text.hint,
            borderRadius: "50%",
            transition: theme.transitions.create("background-color")
        },
        dotSmall: {
            width: 5,
            height: 5
        },
        dotLarge: {
            width: 11,
            height: 11
        }
    })
);
function Dot({ size , color  }) {
    var classes = Dot_useStyles();
    var theme = (0,styles_.useTheme)();
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_classnames_default()(classes.dotBase, {
            [classes.dotLarge]: size === "large",
            [classes.dotSmall]: size === "small"
        }),
        style: {
            backgroundColor: color && theme.palette[color] && theme.palette[color].main
        }
    }));
};

;// CONCATENATED MODULE: ./components/ui/Sidebar/components/SidebarLink/SidebarLink.js







// styles

// components

function SidebarLink({ link , icon , label , children , location , isSidebarOpened , nested , type ,  }) {
    const router = (0,router_.useRouter)();
    var classes = SidebarLink_styles();
    // local
    var { 0: isOpen , 1: setIsOpen  } = (0,external_react_.useState)(false);
    var isLinkActive = link === router.pathname;
    if (type === "title") return(/*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
        className: external_classnames_default()(classes.linkText, classes.sectionTitle, {
            [classes.linkTextHidden]: !isSidebarOpened
        }),
        children: label
    }));
    if (type === "divider") return(/*#__PURE__*/ jsx_runtime_.jsx(core_.Divider, {
        className: classes.divider
    }));
    if (link && link.includes('http')) {
        return(/*#__PURE__*/ jsx_runtime_.jsx(core_.ListItem, {
            button: true,
            className: classes.link,
            classes: {
                root: external_classnames_default()(classes.linkRoot, {
                    [classes.linkActive]: isLinkActive && !nested,
                    [classes.linkNested]: nested
                })
            },
            disableRipple: true,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                className: classes.externalLink,
                href: link,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.ListItemIcon, {
                        className: external_classnames_default()(classes.linkIcon, {
                            [classes.linkIconActive]: isLinkActive
                        }),
                        children: nested ? /*#__PURE__*/ jsx_runtime_.jsx(Dot, {
                            color: isLinkActive && "primary"
                        }) : icon
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.ListItemText, {
                        classes: {
                            primary: external_classnames_default()(classes.linkText, {
                                [classes.linkTextActive]: isLinkActive,
                                [classes.linkTextHidden]: !isSidebarOpened
                            })
                        },
                        primary: label
                    })
                ]
            })
        }));
    }
    if (!children) return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: link,
        passHref: true,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.ListItem, {
            button: true,
            // component={link && Link}
            // to={link}
            // className={classes.link}
            // classes={{
            //   root: classnames(classes.linkRoot, {
            //     [classes.linkActive]: isLinkActive && !nested,
            //     [classes.linkNested]: nested,
            //   }),
            // }}
            disableRipple: true,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(core_.ListItemIcon, {
                    className: external_classnames_default()(classes.linkIcon, {
                        [classes.linkIconActive]: isLinkActive
                    }),
                    children: nested ? /*#__PURE__*/ jsx_runtime_.jsx(Dot, {
                        color: isLinkActive && "primary"
                    }) : icon
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(core_.ListItemText, {
                    classes: {
                        primary: external_classnames_default()(classes.linkText, {
                            [classes.linkTextActive]: isLinkActive,
                            [classes.linkTextHidden]: !isSidebarOpened
                        })
                    },
                    primary: label
                })
            ]
        })
    }));
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: link,
                passHref: true,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.ListItem, {
                    button: true,
                    // component={link && Link}
                    // to={link}
                    onClick: toggleCollapse,
                    className: classes.link,
                    disableRipple: true,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.ListItemIcon, {
                            className: external_classnames_default()(classes.linkIcon, {
                                [classes.linkIconActive]: isLinkActive
                            }),
                            children: icon ? icon : /*#__PURE__*/ jsx_runtime_.jsx(icons_.Inbox, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.ListItemText, {
                            classes: {
                                primary: external_classnames_default()(classes.linkText, {
                                    [classes.linkTextActive]: isLinkActive,
                                    [classes.linkTextHidden]: !isSidebarOpened
                                })
                            },
                            primary: label
                        })
                    ]
                })
            }),
            children && /*#__PURE__*/ jsx_runtime_.jsx(core_.Collapse, {
                in: isOpen && isSidebarOpened,
                timeout: "auto",
                unmountOnExit: true,
                className: classes.nestedList,
                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.List, {
                    component: "div",
                    disablePadding: true,
                    children: children.map((childrenLink)=>/*#__PURE__*/ jsx_runtime_.jsx(SidebarLink, {
                            location: location,
                            isSidebarOpened: isSidebarOpened,
                            classes: classes,
                            nested: true,
                            ...childrenLink
                        }, childrenLink && childrenLink.link)
                    )
                })
            })
        ]
    }));
    // ###########################################################
    function toggleCollapse(e) {
        if (isSidebarOpened) {
            e.preventDefault();
            setIsOpen(!isOpen);
        }
    }
};

;// CONCATENATED MODULE: ./components/ui/Sidebar/Sidebar.js











// styles

// components


// context

const structure = [
    {
        id: 22,
        label: "Live Dashboard",
        link: "/",
        icon: /*#__PURE__*/ jsx_runtime_.jsx((DataObject_default()), {})
    },
    {
        id: 1,
        label: 'Devices',
        link: '/devices',
        icon: /*#__PURE__*/ jsx_runtime_.jsx((SensorsSharp_default()), {})
    },
    {
        id: 2,
        label: 'Gateways',
        link: '/gateways',
        icon: /*#__PURE__*/ jsx_runtime_.jsx((CellTowerSharp_default()), {})
    },
    {
        id: 3,
        type: 'divider'
    },
    {
        id: 4,
        type: "title",
        label: "Details"
    },
    {
        id: 7,
        label: "All Data",
        link: "/payload",
        icon: /*#__PURE__*/ jsx_runtime_.jsx((StorageSharp_default()), {})
    },
    {
        id: 5,
        label: "Give Payload",
        link: "/commands",
        icon: /*#__PURE__*/ jsx_runtime_.jsx((TouchAppSharp_default()), {})
    },
    {
        id: 8,
        type: "divider"
    }, 
];
function Sidebar({ location  }) {
    var classes = Sidebar_styles();
    var theme = (0,styles_.useTheme)();
    // global
    var { isSidebarOpened  } = (0,LayoutContext/* useLayoutState */.Vn)();
    var layoutDispatch = (0,LayoutContext/* useLayoutDispatch */.BQ)();
    // local
    var { 0: isPermanent , 1: setPermanent  } = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(function() {
        window.addEventListener("resize", handleWindowWidthChange);
        handleWindowWidthChange();
        return function cleanup() {
            window.removeEventListener("resize", handleWindowWidthChange);
        };
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Drawer, {
        variant: isPermanent ? "permanent" : "temporary",
        className: external_classnames_default()(classes.drawer, {
            [classes.drawerOpen]: isSidebarOpened,
            [classes.drawerClose]: !isSidebarOpened
        }),
        classes: {
            paper: external_classnames_default()({
                [classes.drawerOpen]: isSidebarOpened,
                [classes.drawerClose]: !isSidebarOpened
            })
        },
        open: isSidebarOpened,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.toolbar
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.mobileBackButton,
                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.IconButton, {
                    onClick: ()=>(0,LayoutContext/* toggleSidebar */.GB)(layoutDispatch)
                    ,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(icons_.ArrowBack, {
                        classes: {
                            root: external_classnames_default()(classes.headerIcon, classes.headerIconCollapse)
                        }
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(core_.List, {
                className: classes.sidebarList,
                children: structure.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx(SidebarLink, {
                        location: location,
                        isSidebarOpened: isSidebarOpened,
                        ...link
                    }, link.id)
                )
            })
        ]
    }));
    // ##################################################################
    function handleWindowWidthChange() {
        var windowWidth = window.innerWidth;
        var breakpointWidth = theme.breakpoints.values.md;
        var isSmallScreen = windowWidth < breakpointWidth;
        if (isSmallScreen && isPermanent) {
            setPermanent(false);
        } else if (!isSmallScreen && !isPermanent) {
            setPermanent(true);
        }
    }
}
/* harmony default export */ const Sidebar_Sidebar = (Sidebar);

;// CONCATENATED MODULE: ./Layout/Layout.js



// styles

// components


// context



function Layout(props) {
    const { state  } = (0,external_react_.useContext)(DataStore/* DataStore */.K);
    const { userInfo  } = state;
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        if (!userInfo) {
            router.push('/login');
        }
    }, []);
    var classes = styles();
    // global
    var layoutState = (0,LayoutContext/* useLayoutState */.Vn)();
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        sx: {
            backgroundColor: '#F6F6F7'
        },
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                    history: props.history
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Sidebar_Sidebar, {}),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: external_classnames_default()(classes.content, {
                        [classes.contentShift]: layoutState.isSidebarOpened
                    }),
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.fakeToolbar
                        }),
                        props.children
                    ]
                })
            ]
        })
    }));
}
/* harmony default export */ const Layout_Layout = (Layout);


/***/ })

};
;