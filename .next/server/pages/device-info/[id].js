"use strict";
(() => {
var exports = {};
exports.id = 212;
exports.ids = [212];
exports.modules = {

/***/ 640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DevicePage),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
;// CONCATENATED MODULE: external "danfojs"
const external_danfojs_namespaceObject = require("danfojs");
// EXTERNAL MODULE: ./models/Entries.js
var Entries = __webpack_require__(1052);
// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./models/DeviceCalibration.js

const deviceCalibrationSchema = new (external_mongoose_default()).Schema({
    devEUI: {
        type: String,
        required: true,
        unique: true
    },
    temprature_calibration: {
        type: Number,
        required: true
    },
    humidity_calibration: {
        type: Number,
        required: true
    }
});
const DeviceCalibration = (external_mongoose_default()).models.DeviceCalibration || external_mongoose_default().model('DeviceCalibration', deviceCalibrationSchema, 'device-calibration');
/* harmony default export */ const models_DeviceCalibration = (DeviceCalibration);

// EXTERNAL MODULE: ./utils/db.js
var db = __webpack_require__(9972);
// EXTERNAL MODULE: ./utils/styles.js
var styles = __webpack_require__(9629);
// EXTERNAL MODULE: external "recharts"
var external_recharts_ = __webpack_require__(3655);
// EXTERNAL MODULE: external "@mui/material/TextField"
var TextField_ = __webpack_require__(6042);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
;// CONCATENATED MODULE: external "@mui/material/ListItem"
const ListItem_namespaceObject = require("@mui/material/ListItem");
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Stack"
const Stack_namespaceObject = require("@mui/material/Stack");
var Stack_default = /*#__PURE__*/__webpack_require__.n(Stack_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/ListItemText"
const ListItemText_namespaceObject = require("@mui/material/ListItemText");
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1598);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: external "@mui/icons-material/NetworkCheck"
const NetworkCheck_namespaceObject = require("@mui/icons-material/NetworkCheck");
var NetworkCheck_default = /*#__PURE__*/__webpack_require__.n(NetworkCheck_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/ArrowDownward"
const ArrowDownward_namespaceObject = require("@mui/icons-material/ArrowDownward");
var ArrowDownward_default = /*#__PURE__*/__webpack_require__.n(ArrowDownward_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Outbound"
const Outbound_namespaceObject = require("@mui/icons-material/Outbound");
var Outbound_default = /*#__PURE__*/__webpack_require__.n(Outbound_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/ListItemAvatar"
const ListItemAvatar_namespaceObject = require("@mui/material/ListItemAvatar");
var ListItemAvatar_default = /*#__PURE__*/__webpack_require__.n(ListItemAvatar_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Avatar"
const Avatar_namespaceObject = require("@mui/material/Avatar");
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_namespaceObject);
// EXTERNAL MODULE: external "react-chartjs-2"
var external_react_chartjs_2_ = __webpack_require__(7051);
// EXTERNAL MODULE: ./Layout/Layout.js + 9 modules
var Layout = __webpack_require__(1776);
// EXTERNAL MODULE: ./utils/DataStore.js
var DataStore = __webpack_require__(7820);
// EXTERNAL MODULE: external "notistack"
var external_notistack_ = __webpack_require__(3142);
;// CONCATENATED MODULE: ./components/Data/DeviceInfo.jsx




function DeviceInfo(props) {
    const { 0: DeviceInfo1 , 1: setDeviceInfo  } = (0,external_react_.useState)({
        devEUI: null,
        applicationID: null,
        variables: null,
        tags: null,
        description: null,
        deviceProfileID: null,
        isDisabled: null,
        referenceAltitude: null,
        name: null,
        skipFCntCheck: null,
        lastSeenAt: null,
        location: null,
        deviceStatusMargin: null,
        deviceStatusBattery: null
    });
    (0,external_react_.useEffect)(()=>{
        const requestOptions = {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Grpc-Metadata-Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5X2lkIjoiNTUyNzc0ZWEtMjJlNS00YzY1LWFhMjAtN2Y4NzU0Y2E5NjFkIiwiYXVkIjoiYXMiLCJpc3MiOiJhcyIsIm5iZiI6MTYzNzY1MTgwNSwic3ViIjoiYXBpX2tleSJ9._2OFZ7tfw6GYSbYk94M5RM17BwUGQB3IoGRZdqoGd_4"
            }
        };
        fetch(`https://chirpstack.igscsi4server.com/api/devices/${props.deviceEUI}`, requestOptions).then((response)=>response.json()
        ).then((data)=>setDeviceInfo({
                devEUI: data.device.devEUI,
                tags: data.device.tags,
                variables: data.device.variables,
                skipFCntCheck: data.device.skipFCntCheck,
                referenceAltitude: data.device.referenceAltitude,
                name: data.device.name,
                deviceProfileID: data.device.deviceProfileID,
                description: data.device.description,
                applicationID: data.device.applicationID,
                deviceStatusMargin: data.deviceStatusMargin,
                deviceStatusBattery: data.deviceStatusBattery,
                location: data.location,
                lastSeenAt: data.lastSeenAt
            })
        ).catch(function(error) {
            alert('Please Check your internet connection. Either their is no internet connection or the signals are weak');
        });
    }, [
        props.deviceEUI
    ]);
    var date = new Date(DeviceInfo1.lastSeenAt);
    var formattted_last_seen = date.toLocaleString();
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
            container: true,
            spacing: 0,
            direction: "column",
            alignItems: "center",
            justifyContent: "center",
            children: /*#__PURE__*/ jsx_runtime_.jsx((Paper_default()), {
                sx: {
                    padding: 3
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                    className: "table table-striped table-hover",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                        children: "Parameter"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                        children: "Value"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tbody", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                            children: "Device EUI"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                            children: DeviceInfo1.devEUI
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                            children: "Device Name"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                            children: DeviceInfo1.name
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                            children: "Last Seen"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                            children: formattted_last_seen
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                            children: "Device Description"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                            children: DeviceInfo1.description
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                            children: "Device Status Margin"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                            children: DeviceInfo1.deviceStatusMargin
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                            children: "Device Status Battery"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                            children: DeviceInfo1.deviceStatusBattery
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                            children: "Device SkipFCntCheck"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                            children: DeviceInfo1.skipFCntCheck
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                            children: "Device Refrence Altitude"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                            children: DeviceInfo1.referenceAltitude
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                            children: "Device Location"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                            children: DeviceInfo1.location
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        })
    }));
};

;// CONCATENATED MODULE: external "@mui/lab/AdapterDateFns"
const AdapterDateFns_namespaceObject = require("@mui/lab/AdapterDateFns");
var AdapterDateFns_default = /*#__PURE__*/__webpack_require__.n(AdapterDateFns_namespaceObject);
;// CONCATENATED MODULE: external "@mui/lab/LocalizationProvider"
const LocalizationProvider_namespaceObject = require("@mui/lab/LocalizationProvider");
var LocalizationProvider_default = /*#__PURE__*/__webpack_require__.n(LocalizationProvider_namespaceObject);
;// CONCATENATED MODULE: external "@mui/lab/DatePicker"
const DatePicker_namespaceObject = require("@mui/lab/DatePicker");
var DatePicker_default = /*#__PURE__*/__webpack_require__.n(DatePicker_namespaceObject);
;// CONCATENATED MODULE: external "moment"
const external_moment_namespaceObject = require("moment");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_namespaceObject);
;// CONCATENATED MODULE: ./components/DatePickerComponent/DatePickerComponent.jsx








function DatePickerComponent({ startDate , SetStartDate , endDate , SetEndDate  }) {
    function setValue(value) {
        SetStartDate(value);
        SetEndDate(external_moment_default()(value, "YYYY-MM-DD").add(1, 'days').format("YYYY-MM-DD"));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx((LocalizationProvider_default()), {
        dateAdapter: (AdapterDateFns_default()),
        children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
            m: 2,
            children: /*#__PURE__*/ jsx_runtime_.jsx((DatePicker_default()), {
                label: "Choose a date",
                views: [
                    "year",
                    "month",
                    "day"
                ],
                format: "DD-MM-YYYY",
                value: startDate,
                onChange: (newValue)=>{
                    setValue(external_moment_default()(newValue).format("YYYY-MM-DD"));
                },
                renderInput: (params)=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                        ...params
                    })
            })
        })
    }));
};

;// CONCATENATED MODULE: ./components/DatePickerComponent/MonthPickerComponent.jsx







function MonthPickerComponent({ startDate , SetStartDate , endDate , SetEndDate  }) {
    function ISTtoDate(date) {
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        return `${year}-${month}-${day}`;
    }
    function setValue(value) {
        var month = value.getMonth();
        var year = value.getFullYear();
        // GET THE FIRST AND LAST DATE OF THE MONTH.
        var FirstDay = ISTtoDate(new Date(year, month, 1));
        var LastDay = ISTtoDate(new Date(year, month + 1, 0));
        SetStartDate(FirstDay);
        SetEndDate(LastDay);
        console.log(startDate);
        console.log(endDate);
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx((LocalizationProvider_default()), {
        dateAdapter: (AdapterDateFns_default()),
        children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
            m: 2,
            children: /*#__PURE__*/ jsx_runtime_.jsx((DatePicker_default()), {
                inputFormat: "yyyy-MM",
                views: [
                    "year",
                    "month"
                ],
                format: "MM-YYYY",
                label: "Choose a Month",
                minDate: new Date('2012-03-01'),
                maxDate: new Date('2023-06-01'),
                value: startDate,
                onChange: setValue,
                renderInput: (params)=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                        ...params,
                        helperText: null
                    })
            })
        })
    }));
};

// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./pages/device-info/[id].js


























// components





function DevicePage({ tempArray , humArray , deviceCalibration  }) {
    const router = (0,router_.useRouter)();
    const classes = (0,styles/* default */.Z)();
    const { id  } = router.query;
    const { state  } = (0,external_react_.useContext)(DataStore/* DataStore */.K);
    const { userInfo  } = state;
    (0,external_react_.useEffect)(()=>{
        if (!userInfo) {
            router.push('/login');
        }
    }, [
        userInfo,
        router
    ]);
    const { enqueueSnackbar , closeSnackbar  } = (0,external_notistack_.useSnackbar)();
    const { 0: startDate , 1: SetStartDate  } = (0,external_react_.useState)(null);
    const { 0: endDate , 1: SetEndDate  } = (0,external_react_.useState)(null);
    const { 0: temprature , 1: setTemprature  } = (0,external_react_.useState)(tempArray);
    const { 0: humidity , 1: setHumidity  } = (0,external_react_.useState)(humArray);
    const { 0: current_humidity_calibration , 1: setCurrent_humidity_calibration  } = (0,external_react_.useState)(deviceCalibration[0].humidity_calibration);
    const { 0: current_temprature_calibration , 1: setCurrent_temprature_calibration  } = (0,external_react_.useState)(deviceCalibration[0].temprature_calibration);
    async function tempratureFilter() {
        closeSnackbar();
        try {
            const { data  } = await external_axios_default().post(`/api/filter`, {
                start_date: startDate,
                end_date: endDate,
                deviceEUI: id
            });
            console.log(startDate);
            console.log(endDate);
            console.log(id);
            console.log(data);
            if (data.length > 0) {
                const df = new external_danfojs_namespaceObject.DataFrame(data);
                const tempraturedf = df.column("temprature");
                const humiditydf = df.column("humidity");
                setTemprature(tempraturedf.$data);
                setHumidity(humiditydf.$data);
            } else {
                setTemprature(data);
                setHumidity(data);
            }
            enqueueSnackbar('Filtered', {
                variant: 'success'
            });
        } catch (e) {
            console.log(e);
        }
    }
    async function updateCallibration() {
        closeSnackbar();
        try {
            const { data  } = await external_axios_default().put('/api/device-calibration/set-device-calibration', {
                tempratureCalibration: current_temprature_calibration,
                humidityCalibration: current_humidity_calibration,
                devEUI: id
            });
            enqueueSnackbar('Updated Successfully', {
                variant: 'success'
            });
        } catch (err) {
            enqueueSnackbar(err, {
                variant: 'error'
            });
        }
    }
    // TABLE DATA
    const Humiditydata = {
        labels: [
            "9 AM",
            "12 PM",
            "3 PM",
            "6 PM",
            "9 PM",
            "12 AM",
            "3 AM",
            "6 AM"
        ],
        datasets: [
            {
                label: "Humidity",
                data: humidity,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)", 
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)", 
                ],
                borderWidth: 1
            }, 
        ]
    };
    const Humidityoptions = {
        scales: {}
    };
    const Tempraturedata = {
        labels: [
            "9 AM",
            "12 PM",
            "3 PM",
            "6 PM",
            "9 PM",
            "12 AM",
            "3 AM",
            "6 AM"
        ],
        datasets: [
            {
                label: "Temprature",
                data: temprature,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)", 
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)", 
                ],
                borderWidth: 1
            }, 
        ]
    };
    const Tempratureoptions = {
        scales: {}
    };
    const date = new Date();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                style: {
                    backgroundColor: '#9d2eff',
                    color: 'white'
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    sx: {
                        mb: 3
                    },
                    variant: "h3",
                    align: "center",
                    children: "Zone Name"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                sx: {
                    my: 3
                },
                container: true,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        lg: 6,
                        xs: 12,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(DeviceInfo, {
                            deviceEUI: id
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                        item: true,
                        lg: 6,
                        xs: 12,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Stack_default()), {
                                direction: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(MonthPickerComponent, {
                                        startDate: startDate,
                                        SetStartDate: SetStartDate,
                                        endDate: endDate,
                                        SetEndDate: SetEndDate
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(DatePickerComponent, {
                                        startDate: startDate,
                                        SetStartDate: SetStartDate,
                                        endDate: endDate,
                                        SetEndDate: SetEndDate
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                            onClick: ()=>tempratureFilter(date.toString(), date.toString())
                                            ,
                                            variant: "outlined",
                                            children: "Filter"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Stack_default()), {
                                spacing: 2,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            style: {
                                                border: "2px solid #9013FE",
                                                borderRadius: "1rem"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.ResponsiveContainer, {
                                                className: "p-0",
                                                width: "100%",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "p-1",
                                                            style: {
                                                                backgroundColor: "#9013FE",
                                                                borderRadius: "1rem",
                                                                color: "#fff",
                                                                textAlign: "center"
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                children: "Temprature Trend"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            style: {
                                                                padding: "3px"
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_chartjs_2_.Line, {
                                                                height: 150,
                                                                data: Tempraturedata,
                                                                options: Tempratureoptions
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            style: {
                                                border: "2px solid #9013FE",
                                                borderRadius: "1rem"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.ResponsiveContainer, {
                                                className: "p-0",
                                                width: "100%",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "p-1",
                                                            style: {
                                                                backgroundColor: "#9013FE",
                                                                borderRadius: "1rem",
                                                                color: "#fff",
                                                                textAlign: "center"
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                children: "Humidity Trend"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            style: {
                                                                padding: "3px"
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_chartjs_2_.Line, {
                                                                height: 150,
                                                                data: Humiditydata,
                                                                options: Humidityoptions
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            userInfo && userInfo.isAdmin == true ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                style: {
                    marginTop: "5rem"
                },
                container: true,
                spacing: 4,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                        component: (Paper_default()),
                        item: true,
                        sx: {
                            p: 3
                        },
                        lg: 6,
                        xs: 12,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                sx: {
                                    my: 3
                                },
                                container: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                    item: true,
                                    xs: 12,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                        container: true,
                                        spacing: 2,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                item: true,
                                                xs: 4,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    variant: "p",
                                                    sx: {
                                                        fontWeight: 700
                                                    },
                                                    children: "Temprature"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                                item: true,
                                                xs: 8,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItem_default()), {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItemAvatar_default()), {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((ArrowDownward_default()), {})
                                                                })
                                                            }),
                                                            temprature[temprature.length - 1] ? /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                                primary: "Input",
                                                                secondary: (parseFloat(temprature[temprature.length - 1]) - parseFloat(current_temprature_calibration)).toFixed(2)
                                                            }) : /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                                primary: "Input",
                                                                secondary: "--"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItem_default()), {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItemAvatar_default()), {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((NetworkCheck_default()), {})
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                                placeholder: current_temprature_calibration,
                                                                onChange: (e)=>{
                                                                    setCurrent_temprature_calibration(e.target.value);
                                                                },
                                                                type: "number",
                                                                fullWidth: true,
                                                                id: "outlined-basic",
                                                                label: "Temprature Calibration",
                                                                variant: "outlined"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItem_default()), {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItemAvatar_default()), {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Outbound_default()), {})
                                                                })
                                                            }),
                                                            temprature[temprature.length - 1] ? /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                                primary: "Output",
                                                                secondary: parseFloat(temprature[temprature.length - 1]).toFixed(2)
                                                            }) : /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                                primary: "Output",
                                                                secondary: "--"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                    container: true,
                                    spacing: 2,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                            item: true,
                                            xs: 4,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                variant: "p",
                                                sx: {
                                                    fontWeight: 700
                                                },
                                                children: "Humidity"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                            item: true,
                                            xs: 8,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItem_default()), {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemAvatar_default()), {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((ArrowDownward_default()), {})
                                                            })
                                                        }),
                                                        humidity[humidity.length - 1] ? /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                            primary: "Input",
                                                            secondary: (parseFloat(humidity[humidity.length - 1]) - parseFloat(current_humidity_calibration)).toFixed(2)
                                                        }) : /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                            primary: "Input",
                                                            secondary: "--"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItem_default()), {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemAvatar_default()), {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((NetworkCheck_default()), {})
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                            placeholder: current_humidity_calibration,
                                                            onChange: (e)=>{
                                                                setCurrent_humidity_calibration(e.target.value);
                                                            },
                                                            type: "number",
                                                            fullWidth: true,
                                                            label: "Humidity Calibration",
                                                            variant: "outlined"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItem_default()), {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemAvatar_default()), {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Outbound_default()), {})
                                                            })
                                                        }),
                                                        humidity[humidity.length - 1] ? /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                            primary: "Output",
                                                            secondary: parseFloat(humidity[humidity.length - 1]).toFixed(2)
                                                        }) : /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                            primary: "Output",
                                                            secondary: "--"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                    sx: {
                                                        backgroundColor: "#38B6FF",
                                                        p: 1
                                                    },
                                                    onClick: ()=>updateCallibration()
                                                    ,
                                                    variant: "contained",
                                                    children: "  Save"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        lg: 6,
                        md: 6,
                        sm: 6,
                        xs: 12
                    })
                ]
            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
        ]
    }));
};
async function getServerSideProps(ctx) {
    const { id  } = ctx.query;
    await db/* default.connect */.Z.connect();
    const result = await Entries/* default.find */.Z.find({
        devEUI: id
    }).lean();
    const deviceCalibration = await models_DeviceCalibration.find({
        devEUI: id
    }).lean();
    await db/* default.disconnect */.Z.disconnect();
    if (result.length > 0) {
        const df = new external_danfojs_namespaceObject.DataFrame(result);
        const tempraturedf = df.column("temprature");
        const humiditydf = df.column("humidity");
        return {
            props: {
                tempArray: tempraturedf.$data,
                humArray: humiditydf.$data,
                deviceCalibration: deviceCalibration.map(db/* default.convertDocToObj */.Z.convertDocToObj)
            }
        };
    } else {
        return {
            props: {
                tempArray: [],
                humArray: [],
                deviceCalibration: deviceCalibration.map(db/* default.convertDocToObj */.Z.convertDocToObj)
            }
        };
    }
}


/***/ }),

/***/ 9629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);

const useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.makeStyles)({
    textField: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500
    },
    error: {
        color: '#f04040'
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyles);


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

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 5612:
/***/ ((module) => {

module.exports = require("@mui/material/Grid");

/***/ }),

/***/ 1598:
/***/ ((module) => {

module.exports = require("@mui/material/Paper");

/***/ }),

/***/ 6042:
/***/ ((module) => {

module.exports = require("@mui/material/TextField");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

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

/***/ 3142:
/***/ ((module) => {

module.exports = require("notistack");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 7051:
/***/ ((module) => {

module.exports = require("react-chartjs-2");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3655:
/***/ ((module) => {

module.exports = require("recharts");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,676,664,257,9,776,105], () => (__webpack_exec__(640)));
module.exports = __webpack_exports__;

})();