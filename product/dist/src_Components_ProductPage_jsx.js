"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkproduct"] = self["webpackChunkproduct"] || []).push([["src_Components_ProductPage_jsx"],{

/***/ "./src/Components/Breadcrumbs.jsx":
/*!****************************************!*\
  !*** ./src/Components/Breadcrumbs.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ \"webpack/sharing/consume/default/react-router-dom/react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {\n  var options = _ref.options;\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n    className: \"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\",\n    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n      className: \"flex items-center space-x-2 text-gray-400 text-sm\",\n      children: options.map(function (option, index) {\n        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Link, {\n            to: \"/\",\n            className: \"hover:underline hover:text-gray-600\",\n            children: option\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"span\", {\n            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"svg\", {\n              className: \"h-5 w-5 leading-none text-gray-300\",\n              xmlns: \"http://www.w3.org/2000/svg\",\n              fill: \"none\",\n              viewBox: \"0 0 24 24\",\n              stroke: \"currentColor\",\n              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"path\", {\n                \"stroke-linecap\": \"round\",\n                \"stroke-linejoin\": \"round\",\n                \"stroke-width\": \"2\",\n                d: \"M9 5l7 7-7 7\"\n              })\n            })\n          }), \" \"]\n        });\n      })\n    })\n  });\n});\n\n//# sourceURL=webpack://product/./src/Components/Breadcrumbs.jsx?");

/***/ }),

/***/ "./src/Components/ProductPage.jsx":
/*!****************************************!*\
  !*** ./src/Components/ProductPage.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"webpack/sharing/consume/default/react-router-dom/react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Breadcrumbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Breadcrumbs */ \"./src/Components/Breadcrumbs.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"webpack/sharing/consume/default/axios/axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\n\n\n\n// import Loader from \"./Loader\";\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {\n  var loading = _ref.loading,\n    setLoading = _ref.setLoading;\n  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useParams)(),\n    productId = _useParams.productId;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({}),\n    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState, 2),\n    product = _useState2[0],\n    setProduct = _useState2[1];\n  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {\n    if (!Object.keys(product).length) {\n      fetechProducts();\n    }\n  }, [product]);\n  function fetechProducts() {\n    return _fetechProducts.apply(this, arguments);\n  }\n  function _fetechProducts() {\n    _fetechProducts = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n      var _yield$axios$get, data;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_6___default().get(\"https://fakestoreapi.com/products/\" + productId);\n          case 2:\n            _yield$axios$get = _context.sent;\n            data = _yield$axios$get.data;\n            setProduct(data);\n            // setLoading(false)\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }, _callee);\n    }));\n    return _fetechProducts.apply(this, arguments);\n  }\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"div\", {\n    className: \"antialiased\",\n    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(\"div\", {\n      className: \"py-6\",\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Breadcrumbs__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        options: [\"Home\"]\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"div\", {\n        className: \"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6\",\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(\"div\", {\n          className: \"flex flex-col md:flex-row -mx-4\",\n          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"div\", {\n            className: \"md:flex-1 px-4\",\n            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(\"div\", {\n              \"x-data\": \"{ image: 1 }\",\n              \"x-cloak\": true,\n              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"div\", {\n                className: \"h-64 md:h-80 rounded-lg bg-gray-100 mb-4\",\n                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"div\", {\n                  \"x-show\": \"image === 1\",\n                  className: \"h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center\",\n                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"img\", {\n                    src: product.image,\n                    alt: \"Product\",\n                    className: \"h-72 w-full object-contain object-center\"\n                  })\n                })\n              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"div\", {\n                className: \"flex -mx-2 mb-4\"\n              })]\n            })\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(\"div\", {\n            className: \"md:flex-1 px-4\",\n            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"h2\", {\n              className: \"mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl\",\n              children: product === null || product === void 0 ? void 0 : product.title\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(\"p\", {\n              className: \"text-gray-500 text-sm\",\n              children: [\"By \", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"a\", {\n                href: \"#\",\n                className: \"text-indigo-600 hover:underline\",\n                children: product === null || product === void 0 ? void 0 : product.category\n              })]\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(\"div\", {\n              className: \"flex items-center space-x-4 my-4\",\n              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"div\", {\n                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(\"div\", {\n                  className: \"rounded-lg bg-gray-100 flex py-2 px-3\",\n                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"span\", {\n                    className: \"text-indigo-400 mr-1 mt-1\",\n                    children: \"$\"\n                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"span\", {\n                    className: \"font-bold text-indigo-600 text-3xl\",\n                    children: product === null || product === void 0 ? void 0 : product.price\n                  })]\n                })\n              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(\"div\", {\n                className: \"flex-1\",\n                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"p\", {\n                  className: \"text-green-500 text-xl font-semibold\",\n                  children: \"Save 12%\"\n                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"p\", {\n                  className: \"text-gray-400 text-sm\",\n                  children: \"Inclusive of all Taxes.\"\n                })]\n              })]\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(\"p\", {\n              className: \"text-gray-500\",\n              children: [product === null || product === void 0 ? void 0 : product.description, \".\"]\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(\"div\", {\n              className: \"flex py-4 space-x-4\",\n              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(\"div\", {\n                className: \"relative\",\n                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"div\", {\n                  className: \"text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold\",\n                  children: \"Qty\"\n                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(\"select\", {\n                  className: \"cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1\",\n                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"option\", {\n                    children: \"1\"\n                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"option\", {\n                    children: \"2\"\n                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"option\", {\n                    children: \"3\"\n                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"option\", {\n                    children: \"4\"\n                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"option\", {\n                    children: \"5\"\n                  })]\n                })]\n              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                to: \"/orders/checkout/\".concat(productId),\n                state: {\n                  product: product\n                },\n                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"button\", {\n                  type: \"button\",\n                  className: \"h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white\",\n                  children: \"Buy Now\"\n                })\n              })]\n            })]\n          })]\n        })\n      })]\n    })\n  });\n});\n\n//# sourceURL=webpack://product/./src/Components/ProductPage.jsx?");

/***/ })

}]);