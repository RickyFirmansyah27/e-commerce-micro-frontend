"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkorder"] = self["webpackChunkorder"] || []).push([["src_App_jsx"],{

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"webpack/sharing/consume/default/react-router-dom/react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Components_Orders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Orders */ \"./src/Components/Orders.jsx\");\n/* harmony import */ var _Components_Checkout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/Checkout */ \"./src/Components/Checkout.jsx\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\n\n\n\n\nfunction App() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n    loading = _useState2[0],\n    setLoading = _useState2[1];\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Routes, {\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {\n        path: \"/checkout\",\n        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Components_Checkout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          loading: loading,\n          setLoading: setLoading\n        })\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {\n        path: \"/\",\n        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Components_Orders__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          loading: loading,\n          setLoading: setLoading\n        })\n      })]\n    })\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://order/./src/App.jsx?");

/***/ }),

/***/ "./src/Components/Checkout.jsx":
/*!*************************************!*\
  !*** ./src/Components/Checkout.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ \"webpack/sharing/consume/default/react-router-dom/react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var _useLocation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_0__.useLocation)(),\n    product = _useLocation.state.product;\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n      className: \"py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container\",\n      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n        className: \"flex flex-col justify-start items-start w-full space-y-9\",\n        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n          className: \"flex justify-start flex-col items-start space-y-2\",\n          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n            className: \"text-3xl lg:text-4xl leading-7 lg:leading-9  dark:text-gray-50 font-bold text-gray-700 text-2xls\",\n            children: \"Place Your Order\"\n          })\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n          className: \"flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full \",\n          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n            className: \"flex flex-col sm:flex-row xl:flex-col justify-center items-center  dark:bg-gray-800 py-7 sm:py-0 xl:py-10 px-10 xl:w-full \",\n            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n              className: \"flex flex-col justify-start items-start w-full space-y-4\",\n              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n                className: \"text-xl md:text-2xl leading-normal text-gray-800 dark:text-gray-50\",\n                children: product === null || product === void 0 ? void 0 : product.title\n              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n                className: \"text-base font-semibold leading-none text-gray-600 dark:text-white\",\n                children: product === null || product === void 0 ? void 0 : product.price\n              })]\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n              className: \"mt-6 sm:mt-0 xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto transform overflow-hidden rounded-lg bg-white  duration-300 hover:scale-105 hover:shadow-lg\",\n              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"img\", {\n                src: product === null || product === void 0 ? void 0 : product.image,\n                alt: product === null || product === void 0 ? void 0 : product.title\n              })\n            })]\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n            className: \"p-8 0 dark:bg-gray-800 flex flex-col lg:w-full xl:w-3/5\",\n            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n              className: \"flex items-center justify-center md:justify-center\",\n              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n                className: \"font-bold text-gray-700 text-2xl\",\n                children: \"Checkout\"\n              })\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n              className: \"mt-8\",\n              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n                className: \"border bg-gray-100 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600\",\n                type: \"email\",\n                name: \"\",\n                id: \"\",\n                placeholder: \"Email\",\n                value: \"abc@example.com\"\n              })\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"label\", {\n              className: \"mt-8 text-base leading-4 text-gray-800 dark:text-gray-50\",\n              children: \"Card details\"\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n              className: \"mt-2 flex-col\",\n              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n                  className: \"border rounded-tl rounded-tr bg-gray-100 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600\",\n                  type: \"email\",\n                  name: \"\",\n                  id: \"\",\n                  placeholder: \"0000 1234 6549 15151\"\n                })\n              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                className: \"flex-row flex\",\n                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n                  className: \"border rounded-bl bg-gray-100 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600\",\n                  type: \"email\",\n                  name: \"\",\n                  id: \"\",\n                  placeholder: \"MM/YY\",\n                  value: \"02/23\"\n                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n                  className: \"border rounded-br bg-gray-100 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600\",\n                  type: \"email\",\n                  name: \"\",\n                  id: \"\",\n                  placeholder: \"CVC\",\n                  value: \"123\"\n                })]\n              })]\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"label\", {\n              className: \"mt-8 text-base leading-4 text-gray-800 dark:text-gray-50\",\n              children: \"Name on card\"\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n              className: \"mt-2 flex-col\",\n              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n                  className: \"border rounded bg-gray-100 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600\",\n                  type: \"email\",\n                  name: \"\",\n                  id: \"\",\n                  placeholder: \"Name on card\",\n                  value: \"John Doe\"\n                })\n              })\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"label\", {\n              className: \"mt-8 text-base leading-4 text-gray-800 dark:text-gray-50\",\n              children: \"Country or region\"\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n              className: \"mt-2 flex-col\",\n              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                className: \"relative\",\n                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"select\", {\n                  id: \"changetext\",\n                  className: \"text-left border rounded-tr rounded-tl  p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600 bg-white\",\n                  type: \"email\",\n                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"option\", {\n                    selected: true,\n                    children: \"India\"\n                  })\n                })\n              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n                className: \"border rounded-bl rounded-br bg-gray-100 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600\",\n                type: \"text\",\n                name: \"\",\n                id: \"\",\n                placeholder: \"ZIP\",\n                value: \"400043\"\n              })]\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n              className: \"mt-8 bg-green-400 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer\",\n              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Link, {\n                  to: \"/orders\",\n                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n                    className: \"text-base leading-4\",\n                    children: \"Pay \"\n                  })\n                })\n              })\n            })]\n          })]\n        })]\n      })\n    })\n  });\n});\n\n//# sourceURL=webpack://order/./src/Components/Checkout.jsx?");

/***/ }),

/***/ "./src/Components/Orders.jsx":
/*!***********************************!*\
  !*** ./src/Components/Orders.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"webpack/sharing/consume/default/react-router-dom/react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"webpack/sharing/consume/default/axios/axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),\n    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState, 2),\n    orders = _useState2[0],\n    setOrders = _useState2[1];\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    if (!orders.length) {\n      fetechorders();\n    }\n  }, [orders]);\n  function fetechorders() {\n    return _fetechorders.apply(this, arguments);\n  }\n  function _fetechorders() {\n    _fetechorders = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n      var _yield$axios$get, data;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_5___default().get(\"https://fakestoreapi.com/products?limit=3\");\n          case 2:\n            _yield$axios$get = _context.sent;\n            data = _yield$axios$get.data;\n            setOrders(data);\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }, _callee);\n    }));\n    return _fetechorders.apply(this, arguments);\n  }\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(\"div\", {\n    className: \"bg-white p-8 rounded-md w-full\",\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"div\", {\n      className: \"flex items-center justify-center\",\n      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(\"div\", {\n        className: \"text-center p-10\",\n        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"h1\", {\n          className: \"font-bold text-4xl mb-4\",\n          children: \"Search Orders\"\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(\"div\", {\n          className: \"flex w-full justify-center items-center p-6 space-x-6 bg-white rounded-xl hover:shadow-sm transform transition duration-500\",\n          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(\"div\", {\n            className: \"flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg\",\n            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"svg\", {\n              xmlns: \"http://www.w3.org/2000/svg\",\n              className: \"h-6 w-6 opacity-30\",\n              fill: \"none\",\n              viewBox: \"0 0 24 24\",\n              stroke: \"currentColor\",\n              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"path\", {\n                \"stroke-linecap\": \"round\",\n                \"stroke-linejoin\": \"round\",\n                \"stroke-width\": \"2\",\n                d: \"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z\"\n              })\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"input\", {\n              name: \"title\",\n              className: \"bg-gray-100 outline-none\",\n              type: \"text\",\n              placeholder: \"Enter A Product Name...\"\n            })]\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"div\", {\n            className: \"bg-green-400 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer\",\n            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"span\", {\n              children: \"Search\"\n            })\n          })]\n        })]\n      })\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"div\", {\n        className: \"-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto\",\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"div\", {\n          className: \"flex justify-center rounded-lg overflow-hidden\",\n          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(\"table\", {\n            className: \"w-4/5 leading-normal table-fixed\",\n            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"thead\", {\n              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(\"tr\", {\n                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"th\", {\n                  className: \"px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-lg font-semibold text-gray-600 uppercase tracking-wider\",\n                  children: \"orders\"\n                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"th\", {\n                  className: \"px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-lg font-semibold text-gray-600 uppercase tracking-wider\",\n                  children: \"Qauntity\"\n                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"th\", {\n                  className: \"px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-lg font-semibold text-gray-600 uppercase tracking-wider\",\n                  children: \"Status\"\n                })]\n              })\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"tbody\", {\n              children: orders.map(function (order, index) {\n                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(\"tr\", {\n                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"td\", {\n                    className: \"px-5 py-5 border-b border-gray-200 bg-white text-sm\",\n                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(\"div\", {\n                      className: \"flex items-center\",\n                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"div\", {\n                        className: \"flex-shrink-0 w-20 h-20\",\n                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"img\", {\n                          className: \"w-full h-full rounded-full\",\n                          src: order.image,\n                          alt: \"\"\n                        })\n                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"div\", {\n                        className: \"ml-3\",\n                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"p\", {\n                          className: \"text-gray-900 whitespace-no-wrap font-semibold\",\n                          children: order.title\n                        })\n                      })]\n                    })\n                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"td\", {\n                    className: \"px-5 py-5 border-b border-gray-200 bg-white text-sm\",\n                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"p\", {\n                      className: \"text-gray-900 whitespace-no-wrap font-semibold\",\n                      children: index + 1\n                    })\n                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"td\", {\n                    className: \"px-5 py-5 border-b border-gray-200 bg-white text-sm\",\n                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                      to: \"/delivery\",\n                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(\"span\", {\n                        className: \"relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight\",\n                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"span\", {\n                          \"aria-hidden\": true,\n                          className: \"absolute inset-0 bg-green-200 opacity-50 rounded-full\"\n                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"span\", {\n                          className: \"relative\",\n                          children: \"Active\"\n                        })]\n                      })\n                    })\n                  })]\n                });\n              })\n            })]\n          })\n        })\n      })\n    })]\n  });\n});\n\n/*\r\n <div class=\"bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full\">\r\n            <h3 class=\"font-semibold text-lg mb-1\">Package Booked</h3>\r\n            <p class=\"leading-tight text-justify w-full\">\r\n              21 July 2021, 04:30 PM\r\n            </p>\r\n          </div>\r\n           */\n\n//# sourceURL=webpack://order/./src/Components/Orders.jsx?");

/***/ })

}]);