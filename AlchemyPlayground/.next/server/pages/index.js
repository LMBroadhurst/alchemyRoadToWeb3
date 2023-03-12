/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"footer\": \"Home_footer____T7K\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"code\": \"Home_code__suPER\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"logo\": \"Home_logo__27_tb\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BsYXlncm91bmQvLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzPzJmZDIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfX2JDT2hZXCIsXG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fbkxqaVFcIixcblx0XCJmb290ZXJcIjogXCJIb21lX2Zvb3Rlcl9fX19UN0tcIixcblx0XCJ0aXRsZVwiOiBcIkhvbWVfdGl0bGVfX1QwOWhEXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJIb21lX2Rlc2NyaXB0aW9uX180MU93a1wiLFxuXHRcImNvZGVcIjogXCJIb21lX2NvZGVfX3N1UEVSXCIsXG5cdFwiZ3JpZFwiOiBcIkhvbWVfZ3JpZF9fR3hRODVcIixcblx0XCJjYXJkXCI6IFwiSG9tZV9jYXJkX19fTHBMMVwiLFxuXHRcImxvZ29cIjogXCJIb21lX2xvZ29fXzI3X3RiXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var alchemy_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! alchemy-sdk */ \"alchemy-sdk\");\n/* harmony import */ var alchemy_sdk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(alchemy_sdk__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst settings = {\n    apiKey: \"HYuiJqJRX3-OborhfQ24eV-KXbMNomvC\",\n    network: alchemy_sdk__WEBPACK_IMPORTED_MODULE_3__.Network.ETH_SEPOLIA\n};\nconst alchemy = new alchemy_sdk__WEBPACK_IMPORTED_MODULE_3__.Alchemy(settings);\nfunction Home() {\n    // const [latestBlock, setLatestBlock] = useState(0)\n    async function getLatestBlock() {\n        const latestBlock = await alchemy.core.getBlockNumber();\n        console.log(\"The latest block number is\", latestBlock.toString());\n    // setLatestBlock(latestBlock)\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getLatestBlock();\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lewis\\\\Documents\\\\Web3\\\\alchemyRoadToWeb3\\\\AlchemyPlayground\\\\pages\\\\index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lewis\\\\Documents\\\\Web3\\\\alchemyRoadToWeb3\\\\AlchemyPlayground\\\\pages\\\\index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lewis\\\\Documents\\\\Web3\\\\alchemyRoadToWeb3\\\\AlchemyPlayground\\\\pages\\\\index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lewis\\\\Documents\\\\Web3\\\\alchemyRoadToWeb3\\\\AlchemyPlayground\\\\pages\\\\index.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Lewis\\\\Documents\\\\Web3\\\\alchemyRoadToWeb3\\\\AlchemyPlayground\\\\pages\\\\index.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lewis\\\\Documents\\\\Web3\\\\alchemyRoadToWeb3\\\\AlchemyPlayground\\\\pages\\\\index.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lewis\\\\Documents\\\\Web3\\\\alchemyRoadToWeb3\\\\AlchemyPlayground\\\\pages\\\\index.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBRXRCO0FBQ2tCO0FBQ0E7QUFFOUMsTUFBTU0sV0FBVztJQUNmQyxRQUFRQyxrQ0FBMkI7SUFDbkNHLFNBQVNQLDREQUFtQjtBQUM5QjtBQUVBLE1BQU1TLFVBQVUsSUFBSVIsZ0RBQU9BLENBQUNDO0FBRWIsU0FBU1EsT0FBTztJQUU3QixvREFBb0Q7SUFFcEQsZUFBZUMsaUJBQWlCO1FBQzlCLE1BQU1DLGNBQWMsTUFBTUgsUUFBUUksSUFBSSxDQUFDQyxjQUFjO1FBQ3JEQyxRQUFRQyxHQUFHLENBQUMsOEJBQThCSixZQUFZSyxRQUFRO0lBRTlELDhCQUE4QjtJQUNoQztJQUVBcEIsZ0RBQVNBLENBQUUsSUFBTTtRQUNmYztJQUNGO0lBRUEscUJBQ0UsOERBQUNPO1FBQUlDLFdBQVdwQiwwRUFBZ0I7OzBCQUM5Qiw4REFBQ0Qsa0RBQUlBOztrQ0FDSCw4REFBQ3VCO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUd4Qiw4REFBQ0M7Z0JBQUtULFdBQVdwQixxRUFBVzswQkFDMUIsNEVBQUNtQjs7Ozs7Ozs7Ozs7Ozs7OztBQU1ULENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgTmV0d29yaywgQWxjaGVteSB9IGZyb20gXCJhbGNoZW15LXNka1wiXG5cbmNvbnN0IHNldHRpbmdzID0ge1xuICBhcGlLZXk6IHByb2Nlc3MuZW52LkFMQ0hFTVlfQVBJX0tFWSxcbiAgbmV0d29yazogTmV0d29yay5FVEhfU0VQT0xJQSxcbn07XG5cbmNvbnN0IGFsY2hlbXkgPSBuZXcgQWxjaGVteShzZXR0aW5ncylcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICAvLyBjb25zdCBbbGF0ZXN0QmxvY2ssIHNldExhdGVzdEJsb2NrXSA9IHVzZVN0YXRlKDApXG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0TGF0ZXN0QmxvY2soKSB7XG4gICAgY29uc3QgbGF0ZXN0QmxvY2sgPSBhd2FpdCBhbGNoZW15LmNvcmUuZ2V0QmxvY2tOdW1iZXIoKVxuICAgIGNvbnNvbGUubG9nKFwiVGhlIGxhdGVzdCBibG9jayBudW1iZXIgaXNcIiwgbGF0ZXN0QmxvY2sudG9TdHJpbmcoKSlcblxuICAgIC8vIHNldExhdGVzdEJsb2NrKGxhdGVzdEJsb2NrKVxuICB9XG5cbiAgdXNlRWZmZWN0KCAoKSA9PiB7XG4gICAgZ2V0TGF0ZXN0QmxvY2soKVxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgey8qIDxzcGFuPkxhdGVzdCBFVEggQmxvY2s6IHtsYXRlc3RCbG9jayA/IGxhdGVzdEJsb2NrIDogJy4uLid9PC9zcGFuPiAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIkhlYWQiLCJzdHlsZXMiLCJOZXR3b3JrIiwiQWxjaGVteSIsInNldHRpbmdzIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIkFMQ0hFTVlfQVBJX0tFWSIsIm5ldHdvcmsiLCJFVEhfU0VQT0xJQSIsImFsY2hlbXkiLCJIb21lIiwiZ2V0TGF0ZXN0QmxvY2siLCJsYXRlc3RCbG9jayIsImNvcmUiLCJnZXRCbG9ja051bWJlciIsImNvbnNvbGUiLCJsb2ciLCJ0b1N0cmluZyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "alchemy-sdk":
/*!******************************!*\
  !*** external "alchemy-sdk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("alchemy-sdk");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();