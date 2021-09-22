"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkproject_catwalk"] = self["webpackChunkproject_catwalk"] || []).push([["client_src_components_product-details_ProductDetail_jsx"],{

/***/ "./client/src/components/product-details/AddToCart.jsx":
/*!*************************************************************!*\
  !*** ./client/src/components/product-details/AddToCart.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n //AddToCart module\n//  size selector\n//  quantity selector\n//  add to cart button\n\nvar AddToCart = function AddToCart(props) {\n  var quantities = [];\n\n  if (_typeof(props.selectedsize) === 'object') {\n    for (var i = 1; i <= props.selectedsize.quantity && i <= 15; i++) {\n      quantities.push(i);\n    }\n\n    ;\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"form\", {\n    id: \"add-to-cart-form\",\n    onSubmit: props.handlecartsubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"cart-selectors\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, \"Size:\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"select\", {\n    className: \"selector\",\n    id: \"size-selector\",\n    name: \"sizesku\",\n    onChange: props.handlesizeselect\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n    value: \"\"\n  }, \"Select Size:\"), props.selectedstyle.skus ? Object.keys(props.selectedstyle.skus).map(function (sku, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      key: index,\n      value: sku\n    }, props.selectedstyle.skus[sku].size);\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", null, \"OUT OF STOCK\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, \"Quantity:\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"select\", {\n    className: \"selector\",\n    id: \"quantity-selector\",\n    name: \"quantity\",\n    value: props.selectedquantity,\n    onChange: props.handlequantityselect\n  }, props.selectedsize ? quantities.map(function (quantity, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: quantity,\n      key: index\n    }, quantity);\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", null, \"-\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"cart-buttons\"\n  }, props.selectedsize ? props.selectedsize.quantity === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"em\", null, \"Item out of stock in this style and size.\")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    id: \"add-to-cart-button\",\n    type: \"submit\",\n    value: \"Add to Cart\"\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    id: \"add-to-cart-button\",\n    value: \"Add to Cart\",\n    onClick: props.opensizeselect\n  }, \"Add to Cart\")));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddToCart); // {props.selectedsize\n//   ? props.selectedsize.quantity === 0\n//     ? <span><em>Item out of stock in this style and size.</em></span>\n//     : <input id=\"add-to-cart-button\" type=\"submit\" value=\"Add to Cart\"></input>\n//   : <button id=\"add-to-cart-button\" value=\"Add to Cart\" onClick={props.opensizeselect}>Add to Cart</button>\n// }\n// {props.selectedsize.quantity === 0\n//   ? <span><em>Item out of stock in this style and size.</em></span>\n//   : <input id=\"add-to-cart-button\" type=\"submit\" value=\"Add to Cart\"></input>\n// }\n\n//# sourceURL=webpack://project-catwalk/./client/src/components/product-details/AddToCart.jsx?");

/***/ }),

/***/ "./client/src/components/product-details/ImageGallery.jsx":
/*!****************************************************************!*\
  !*** ./client/src/components/product-details/ImageGallery.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _ThumbnailList_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThumbnailList.jsx */ \"./client/src/components/product-details/ThumbnailList.jsx\");\n/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ \"./node_modules/@fortawesome/fontawesome-svg-core/index.es.js\");\n\n\n\n\n\n //ImageGallery module\n//img urls in props.selectedstyle\n//  Default View\n//    single main image overlaid by thumbnails\n//    first image in array is default main image\n//    clicking on any image updates the main image\n//    up to 7 thumbnails, scrollable if more\n//      also forward & backward arrows on main image\n//      thumbnails must scroll with these when hits edge of   list\n//  hovering over main image gives magnifying glass to zoom to expanded view\n//  Expanded View\n//    overlays rest of item detail page (whole window)\n//    right and left arrows to choose other images\n//    no thumbnails, but icons to represent each other image\n//    on hover, mouse becomes \"+\"\n//    clicking zooms 2.5x, mouse becomes \"-\"\n//      no arows or thumbnails\n//      image moves according to mouse position\n//      clicking again zooms out to standard expanded view\n\nvar ImageGallery = function ImageGallery(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"image-gallery\",\n    width: \"60%\",\n    height: \"700px\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"thumbnail-list\"\n  }, props.photos ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ThumbnailList_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    topThumbnail: props.topThumbnail,\n    photos: props.photos,\n    selectedphotoindex: props.selectedphotoindex,\n    handleThumbnailClick: props.handleThumbnailClick,\n    handleUpArrowClick: props.handleUpArrowClick,\n    handleDownArrowClick: props.handleDownArrowClick\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"em\", null, \"No photos to display.\"))), props.photos.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    id: \"main-image\",\n    src: props.photos[props.selectedphotoindex].url,\n    width: \"750\" // style={{\n    //   backgroundImage: `url(${props.photos[props.selectedphotoindex].url})`,\n    //   backgroundSize: 'cover',\n    //   backgroundRepeat: 'no-repeat',\n    //   zIndex: '10',\n    //   maxHeight: '100%',\n    //   maxWidth: '100%'\n    // }}\n\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"em\", null, \"No photo to display.\")));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageGallery); // <i class=\"fas fa-chevron-circle-up\"></i>\n// <i class=\"fas fa-chevron-circle-down\"></i>\n// <i class=\"fas fa-chevron-circle-left\"></i>\n// <i class=\"fas fa-chevron-circle-right\"></i>\n\n//# sourceURL=webpack://project-catwalk/./client/src/components/product-details/ImageGallery.jsx?");

/***/ }),

/***/ "./client/src/components/product-details/ProductDetail.jsx":
/*!*****************************************************************!*\
  !*** ./client/src/components/product-details/ProductDetail.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ImageGallery_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageGallery.jsx */ \"./client/src/components/product-details/ImageGallery.jsx\");\n/* harmony import */ var _ProductInfo_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductInfo.jsx */ \"./client/src/components/product-details/ProductInfo.jsx\");\n/* harmony import */ var _StyleSelector_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StyleSelector.jsx */ \"./client/src/components/product-details/StyleSelector.jsx\");\n/* harmony import */ var _AddToCart_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AddToCart.jsx */ \"./client/src/components/product-details/AddToCart.jsx\");\n/* harmony import */ var _data_dummy_data_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data/dummy-data.js */ \"./client/src/components/product-details/data/dummy-data.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n//ProductDetail extends React.Component\n\n\n\n\n\n\n\n\nvar ProductDetail = /*#__PURE__*/function (_React$Component) {\n  _inherits(ProductDetail, _React$Component);\n\n  var _super = _createSuper(ProductDetail);\n\n  function ProductDetail(props) {\n    var _this;\n\n    _classCallCheck(this, ProductDetail);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      currentProductId: _this.props.productID,\n      prodInfo: _this.props.productInfo,\n      reviews: [],\n      selectedSize: \"\",\n      selectedQuantity: 1,\n      selectedPhotoIndex: 0,\n      cart: null,\n      topThumbnail: 0\n    };\n    return _this;\n  }\n\n  _createClass(ProductDetail, [{\n    key: \"getCart\",\n    value: function getCart() {\n      var _this2 = this;\n\n      axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"/cart\").then(function (res) {\n        _this2.setState({\n          cart: res.data\n        });\n      })[\"catch\"](function (err) {\n        console.error(err);\n      });\n    }\n  }, {\n    key: \"postToCart\",\n    value: function postToCart(cartData) {\n      axios__WEBPACK_IMPORTED_MODULE_1___default().post(\"/cart\", cartData).then(function (res) {// console.log('styles recd:', res.data.results);\n        // console.log('cart data recd:', res.data);\n      })[\"catch\"](function (err) {\n        console.error(err);\n      });\n    }\n  }, {\n    key: \"handleCartSubmit\",\n    value: function handleCartSubmit(event) {\n      event.preventDefault(); // console.log('event.target.sizesku.value:', event.target.sizesku.value);\n      // console.log('event.target.quantity.value:', event.target.quantity.value);\n      // console.log('what type?', typeof event.target.quantity.value);\n\n      var count = parseInt(event.target.quantity.value);\n\n      for (var i = 1; i <= count; i++) {\n        this.postToCart({\n          sku_id: event.target.sizesku.value\n        });\n      } // this.postToCart({ sku_id: event.target.sizesku.value, count: event.target.quantity.value});\n\n    }\n  }, {\n    key: \"handleSizeSelect\",\n    value: function handleSizeSelect(event) {\n      event.preventDefault(); // console.log('size select entry:', event.target.value);\n\n      this.setState({\n        selectedSize: this.props.selectedStyle.skus[event.target.value]\n      });\n      event.target.size = '1'; // document.getElementById('size-selector').size = '1';\n    }\n  }, {\n    key: \"handleQuantitySelect\",\n    value: function handleQuantitySelect(event) {\n      event.preventDefault();\n      this.setState({\n        selectedQuantity: event.target.value\n      });\n    }\n  }, {\n    key: \"handleThumbnailClick\",\n    value: function handleThumbnailClick(event) {\n      event.preventDefault();\n      console.log('event.target.dataset.index:', event.target.dataset.index);\n      this.setState({\n        selectedPhotoIndex: event.target.dataset.index\n      });\n      document.getElementById('selected-image').id = '';\n      event.target.id = 'selected-image'; // event.target.classList.toggle('selected');\n    }\n  }, {\n    key: \"handleUpArrowClick\",\n    value: function handleUpArrowClick(event) {\n      event.preventDefault();\n      this.setState({\n        topThumbnail: this.state.topThumbnail - 1\n      });\n    }\n  }, {\n    key: \"handleDownArrowClick\",\n    value: function handleDownArrowClick(event) {\n      event.preventDefault();\n      this.setState({\n        topThumbnail: this.state.topThumbnail + 1\n      });\n    }\n  }, {\n    key: \"openSizeSelect\",\n    value: function openSizeSelect() {\n      // document.getElementById('size-selector').size = `${Object.keys(this.state.selectedStyle.skus.length)}`;\n      document.getElementById('size-selector').size = '12';\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {// this.getProductInfo();\n      // this.getStyles();\n      // this.getRelated();\n      // this.setState({\n      //   selectedStyle: this.state.styles[0]\n      // });\n      // console.log('styles:', this.state.styles);\n      // console.log('selected style:', this.state.selectedStyle);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        id: \"overview-box\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ImageGallery_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        photos: this.props.selectedStyle.photos,\n        selectedphotoindex: this.state.selectedPhotoIndex,\n        handleThumbnailClick: this.handleThumbnailClick.bind(this),\n        topThumbnail: this.state.topThumbnail,\n        handleUpArrowClick: this.handleUpArrowClick.bind(this),\n        handleDownArrowClick: this.handleDownArrowClick.bind(this)\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        id: \"next-to-image\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ProductInfo_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        productinfo: this.props.productInfo,\n        selectedstyle: this.props.selectedStyle\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_StyleSelector_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        styles: this.props.styles,\n        selectedstyle: this.props.selectedStyle,\n        handleStyleSelect: this.props.handleStyleSelect\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AddToCart_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        selectedsize: this.state.selectedSize,\n        selectedstyle: this.props.selectedStyle,\n        selectedquantity: this.state.selectedQuantity,\n        handlesizeselect: this.handleSizeSelect.bind(this),\n        handlequantityselect: this.handleQuantitySelect.bind(this),\n        handlecartsubmit: this.handleCartSubmit.bind(this),\n        opensizeselect: this.openSizeSelect.bind(this)\n      })));\n    }\n  }]);\n\n  return ProductDetail;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductDetail);\n\n//# sourceURL=webpack://project-catwalk/./client/src/components/product-details/ProductDetail.jsx?");

/***/ }),

/***/ "./client/src/components/product-details/ProductInfo.jsx":
/*!***************************************************************!*\
  !*** ./client/src/components/product-details/ProductInfo.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n //ProductInfo module\n\nvar ProductInfo = function ProductInfo(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"selected-product-info\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    id: \"category\"\n  }, props.productinfo.category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    id: \"name\"\n  }, props.productinfo.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    id: \"price\"\n  }, \"$\", props.selectedstyle.sale_price ? props.selectedstyle.sale_price : props.selectedstyle.original_price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h2\", null, props.productinfo.slogan), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, props.productinfo.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, \"Share:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", null, \"F\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", null, \"T\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", null, \"P\")));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductInfo);\n\n//# sourceURL=webpack://project-catwalk/./client/src/components/product-details/ProductInfo.jsx?");

/***/ }),

/***/ "./client/src/components/product-details/StyleSelector.jsx":
/*!*****************************************************************!*\
  !*** ./client/src/components/product-details/StyleSelector.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n //StyleSelector\n\nvar StyleSelector = function StyleSelector(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"style-selector\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, \"Available Styles:\"), props.styles.length ? props.styles.map(function (style, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n      className: \"style thumbnail\",\n      id: props.styles.indexOf(props.selectedstyle) === index ? \"selected-style\" : \"\",\n      key: index,\n      \"data-index\": index,\n      src: style.photos[0].thumbnail_url,\n      onClick: props.handleStyleSelect\n    });\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"em\", null, \"No styles to display.\")));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyleSelector);\n\n//# sourceURL=webpack://project-catwalk/./client/src/components/product-details/StyleSelector.jsx?");

/***/ }),

/***/ "./client/src/components/product-details/ThumbnailList.jsx":
/*!*****************************************************************!*\
  !*** ./client/src/components/product-details/ThumbnailList.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\n\n\n\nvar ThumbnailList = function ThumbnailList(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"thumbnail-list\"\n  }, props.topThumbnail > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaChevronCircleUp, {\n    onClick: props.handleUpArrowClick\n  }), props.photos.slice(props.topThumbnail, props.topThumbnail + 7).map(function (photo, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n      className: \"thumbnail\",\n      id: props.photos.indexOf(photo) === props.selectedphotoindex ? \"selected-image\" : \"\",\n      key: props.photos.indexOf(photo),\n      \"data-index\": props.photos.indexOf(photo),\n      src: photo.thumbnail_url,\n      width: \"100\",\n      onClick: props.handleThumbnailClick\n    });\n  }), props.topThumbnail < props.photos.length - 7 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaChevronCircleDown, {\n    onClick: props.handleDownArrowClick\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThumbnailList);\n{\n  /* <div id=\"thumbnail-list\">\n  {props.photos\n   ? props.photos.map((photo, index) => (\n     <img className='thumbnail' key={index} data-index={index} src={photo.thumbnail_url} width=\"100\" onClick={props.handleThumbnailClick}></img>\n     ))\n   : <p><em>No photos to display.</em></p>\n  }\n  </div> */\n}\n\n//# sourceURL=webpack://project-catwalk/./client/src/components/product-details/ThumbnailList.jsx?");

/***/ }),

/***/ "./client/src/components/product-details/data/dummy-data.js":
/*!******************************************************************!*\
  !*** ./client/src/components/product-details/data/dummy-data.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar data = {\n  productList: [{\n    \"id\": 1,\n    \"name\": \"Camo Onesie\",\n    \"slogan\": \"Blend in to your crowd\",\n    \"description\": \"The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.\",\n    \"category\": \"Jackets\",\n    \"default_price\": \"140\"\n  }, {\n    \"id\": 2,\n    \"name\": \"Bright Future Sunglasses\",\n    \"slogan\": \"You've got to wear shades\",\n    \"description\": \"Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.\",\n    \"category\": \"Accessories\",\n    \"default_price\": \"69\"\n  }, {\n    \"id\": 3,\n    \"name\": \"Morning Joggers\",\n    \"slogan\": \"Make yourself a morning person\",\n    \"description\": \"Whether you're a morning person or not. Whether you're gym bound or not. Everyone looks good in joggers.\",\n    \"category\": \"Pants\",\n    \"default_price\": \"40\"\n  } // ...\n  ],\n  info: {\n    \"id\": 11,\n    \"name\": \"Air Minis 250\",\n    \"slogan\": \"Full court support\",\n    \"description\": \"This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.\",\n    \"category\": \"Basketball Shoes\",\n    \"default_price\": \"0\",\n    \"features\": [{\n      \"feature\": \"Sole\",\n      \"value\": \"Rubber\"\n    }, {\n      \"feature\": \"Material\",\n      \"value\": \"FullControlSkin\"\n    } // ...\n    ]\n  },\n  styles: {\n    \"product_id\": \"1\",\n    \"results\": [{\n      \"style_id\": 1,\n      \"name\": \"Forest Green & Black\",\n      \"original_price\": \"140\",\n      \"sale_price\": \"0\",\n      \"default?\": true,\n      \"photos\": [{\n        \"thumbnail_url\": \"urlplaceholder/style_1_photo_number_thumbnail.jpg\",\n        \"url\": \"urlplaceholder/style_1_photo_number.jpg\"\n      }, {\n        \"thumbnail_url\": \"urlplaceholder/style_1_photo_number_thumbnail.jpg\",\n        \"url\": \"urlplaceholder/style_1_photo_number.jpg\"\n      } // ...\n      ],\n      \"skus\": {\n        \"37\": {\n          \"quantity\": 8,\n          \"size\": \"XS\"\n        },\n        \"38\": {\n          \"quantity\": 16,\n          \"size\": \"S\"\n        },\n        \"39\": {\n          \"quantity\": 17,\n          \"size\": \"M\"\n        } //...\n\n      }\n    }, {\n      \"style_id\": 2,\n      \"name\": \"Desert Brown & Tan\",\n      \"original_price\": \"140\",\n      \"sale_price\": \"0\",\n      \"default?\": false,\n      \"photos\": [{\n        \"thumbnail_url\": \"urlplaceholder/style_2_photo_number_thumbnail.jpg\",\n        \"url\": \"urlplaceholder/style_2_photo_number.jpg\"\n      } // ...\n      ],\n      \"skus\": {\n        \"37\": {\n          \"quantity\": 8,\n          \"size\": \"XS\"\n        },\n        \"38\": {\n          \"quantity\": 16,\n          \"size\": \"S\"\n        },\n        \"39\": {\n          \"quantity\": 17,\n          \"size\": \"M\"\n        } //...\n\n      }\n    }],\n    related: [2, 3, 8, 7]\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);\n\n//# sourceURL=webpack://project-catwalk/./client/src/components/product-details/data/dummy-data.js?");

/***/ })

}]);