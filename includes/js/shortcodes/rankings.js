/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/html-entities/build-module/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/html-entities/build-module/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"decodeEntities\": () => (/* binding */ decodeEntities)\n/* harmony export */ });\n/** @type {HTMLTextAreaElement} */\nlet _decodeTextArea;\n/**\n * Decodes the HTML entities from a given string.\n *\n * @param {string} html String that contain HTML entities.\n *\n * @example\n * ```js\n * const result = decodeEntities( '&aacute;' );\n * console.log( result ); // result will be \"á\"\n * ```\n *\n * @return {string} The decoded string.\n */\n\n\nfunction decodeEntities(html) {\n  // Not a string, or no entities to decode.\n  if ('string' !== typeof html || -1 === html.indexOf('&')) {\n    return html;\n  } // Create a textarea for decoding entities, that we can reuse.\n\n\n  if (undefined === _decodeTextArea) {\n    if (document.implementation && document.implementation.createHTMLDocument) {\n      _decodeTextArea = document.implementation.createHTMLDocument('').createElement('textarea');\n    } else {\n      _decodeTextArea = document.createElement('textarea');\n    }\n  }\n\n  _decodeTextArea.innerHTML = html;\n  const decoded = _decodeTextArea.textContent;\n  _decodeTextArea.innerHTML = '';\n  /**\n   * Cast to string, HTMLTextAreaElement should always have `string` textContent.\n   *\n   * > The `textContent` property of the `Node` interface represents the text content of the\n   * > node and its descendants.\n   * >\n   * > Value: A string or `null`\n   * >\n   * > * If the node is a `document` or a Doctype, `textContent` returns `null`.\n   * > * If the node is a CDATA section, comment, processing instruction, or text node,\n   * >   textContent returns the text inside the node, i.e., the `Node.nodeValue`.\n   * > * For other node types, `textContent returns the concatenation of the textContent of\n   * >   every child node, excluding comments and processing instructions. (This is an empty\n   * >   string if the node has no children.)\n   *\n   * @see https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent\n   */\n\n  return (\n    /** @type {string} */\n    decoded\n  );\n}\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://yet-another-stars-rating/./node_modules/@wordpress/html-entities/build-module/index.js?");

/***/ }),

/***/ "./includes/js/src/react-components/invokeRater.js":
/*!*********************************************************!*\
  !*** ./includes/js/src/react-components/invokeRater.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InvokeRater\": () => (/* binding */ InvokeRater)\n/* harmony export */ });\n/**\n * Call window function yasrSetRaterValue\n *\n * @author Dario Curvino <@dudo>\n * @since  3.0.8\n *\n * @param props\n * @returns {JSX.Element}\n * @constructor\n */\nvar InvokeRater = function InvokeRater(props) {\n  var size = props.size,\n      htmlId = props.htmlId,\n      element = props.element,\n      step = props.step,\n      readonly = props.readonly,\n      rating = props.rating;\n  return /*#__PURE__*/React.createElement(\"div\", {\n    id: htmlId,\n    ref: function ref() {\n      return yasrSetRaterValue(size, htmlId, element, step, readonly, rating);\n    }\n  });\n};\n\n\n\n//# sourceURL=webpack://yet-another-stars-rating/./includes/js/src/react-components/invokeRater.js?");

/***/ }),

/***/ "./includes/js/src/react-components/returnRankingTable.js":
/*!****************************************************************!*\
  !*** ./includes/js/src/react-components/returnRankingTable.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"YasrRankingTable\": () => (/* binding */ YasrRankingTable)\n/* harmony export */ });\n/* harmony import */ var _returnTableTbody__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./returnTableTbody */ \"./includes/js/src/react-components/returnTableTbody.js\");\n/* harmony import */ var _returnTableHead__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./returnTableHead */ \"./includes/js/src/react-components/returnTableHead.js\");\n\n\n\nvar YasrRankingTable = function YasrRankingTable(_ref) {\n  var error = _ref.error,\n      isLoaded = _ref.isLoaded,\n      data = _ref.data,\n      source = _ref.source,\n      rankingParams = _ref.rankingParams,\n      tableId = _ref.tableId;\n\n  if (error) {\n    return /*#__PURE__*/React.createElement(\"tbody\", null, /*#__PURE__*/React.createElement(\"tr\", null, /*#__PURE__*/React.createElement(\"td\", null, console.log(error), \"Error\")));\n  }\n\n  if (isLoaded === false) {\n    return /*#__PURE__*/React.createElement(\"tbody\", null, /*#__PURE__*/React.createElement(\"tr\", null, /*#__PURE__*/React.createElement(\"td\", null, JSON.parse(yasrWindowVar.textLoadRanking))));\n  }\n\n  if (source === 'overall_rating' || source === 'author_multi') {\n    return /*#__PURE__*/React.createElement(_returnTableTbody__WEBPACK_IMPORTED_MODULE_0__.ReturnTableTbody, {\n      data: data,\n      tableId: tableId,\n      tBodyId: 'overall_' + tableId,\n      rankingParams: rankingParams,\n      show: 'table-row-group',\n      source: source\n    });\n  }\n\n  var vvMost = data.most;\n  var vvHighest = data.highest;\n  var display = 'table-row-group';\n  var hide = 'none';\n  var defaultView = 'most';\n  var styleMost = display;\n  var styleHighest = hide;\n  var params = new URLSearchParams(rankingParams);\n\n  if (params.get('view') !== null) {\n    defaultView = params.get('view');\n  }\n\n  if (defaultView === 'highest') {\n    styleMost = hide;\n    styleHighest = display;\n  }\n\n  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_returnTableHead__WEBPACK_IMPORTED_MODULE_1__.ReturnTableHead, {\n    tableId: tableId,\n    source: source,\n    defaultView: defaultView\n  }), /*#__PURE__*/React.createElement(_returnTableTbody__WEBPACK_IMPORTED_MODULE_0__.ReturnTableTbody, {\n    data: vvMost,\n    tableId: tableId,\n    tBodyId: 'most-rated-posts-' + tableId,\n    rankingParams: rankingParams,\n    show: styleMost,\n    source: source\n  }), /*#__PURE__*/React.createElement(_returnTableTbody__WEBPACK_IMPORTED_MODULE_0__.ReturnTableTbody, {\n    data: vvHighest,\n    tableId: tableId,\n    tBodyId: 'highest-rated-posts-' + tableId,\n    rankingParams: rankingParams,\n    show: styleHighest,\n    source: source\n  }));\n};\n\n\n\n//# sourceURL=webpack://yet-another-stars-rating/./includes/js/src/react-components/returnRankingTable.js?");

/***/ }),

/***/ "./includes/js/src/react-components/returnTableColumnLeft.js":
/*!*******************************************************************!*\
  !*** ./includes/js/src/react-components/returnTableColumnLeft.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ReturnTableColumnLeft\": () => (/* binding */ ReturnTableColumnLeft)\n/* harmony export */ });\n/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/html-entities */ \"./node_modules/@wordpress/html-entities/build-module/index.js\");\n\n/**\n * Left column for a table, with post link and title\n *\n * @author Dario Curvino <@dudo>\n * @since  3.0.8\n *\n * @param {string} colClass - Column class name*\n * @param link              - post link\n * @param title             - post title\n *\n * @return {JSX.Element} - html <td> element\n */\n\nvar ReturnTableColumnLeft = function ReturnTableColumnLeft(_ref) {\n  var colClass = _ref.colClass,\n      _ref$post = _ref.post,\n      link = _ref$post.link,\n      title = _ref$post.title;\n  return /*#__PURE__*/React.createElement(\"td\", {\n    className: colClass\n  }, /*#__PURE__*/React.createElement(\"a\", {\n    href: link\n  }, (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_0__.decodeEntities)(title)));\n};\n\n\n\n//# sourceURL=webpack://yet-another-stars-rating/./includes/js/src/react-components/returnTableColumnLeft.js?");

/***/ }),

/***/ "./includes/js/src/react-components/returnTableColumnRight.js":
/*!********************************************************************!*\
  !*** ./includes/js/src/react-components/returnTableColumnRight.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ReturnTableColumnRight\": () => (/* binding */ ReturnTableColumnRight)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _textAfterStars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textAfterStars */ \"./includes/js/src/react-components/textAfterStars.js\");\n/* harmony import */ var _invokeRater__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invokeRater */ \"./includes/js/src/react-components/invokeRater.js\");\n\n\n\n/**\n * @author Dario Curvino <@dudo>\n * @since  3.0.8\n *\n * @param rankingParams\n * @param tableId\n * @param colClass\n * @param post\n * @returns {JSX.Element}\n * @constructor\n */\n\nvar ReturnTableColumnRight = function ReturnTableColumnRight(_ref) {\n  var rankingParams = _ref.rankingParams,\n      tableId = _ref.tableId,\n      colClass = _ref.colClass,\n      post = _ref.post;\n  var txtPosition = 'after';\n  var cstText = JSON.parse(yasrWindowVar.textRating);\n  var params = new URLSearchParams(rankingParams);\n\n  if (params.get('text_position') !== null) {\n    txtPosition = params.get('text_position');\n  }\n\n  if (params.get('custom_txt') !== null) {\n    cstText = params.get('custom_txt');\n  }\n\n  var starsAttributes = {\n    rating: post.rating,\n    htmlId: 'yasr-ranking-element-' + (0,uuid__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n    size: document.getElementById(tableId).dataset.rankingSize\n  };\n\n  if (txtPosition === 'before') {\n    return /*#__PURE__*/React.createElement(\"td\", {\n      className: colClass\n    }, /*#__PURE__*/React.createElement(_textAfterStars__WEBPACK_IMPORTED_MODULE_0__.TextAfterStars, {\n      post: post,\n      text: cstText\n    }), /*#__PURE__*/React.createElement(_invokeRater__WEBPACK_IMPORTED_MODULE_1__.InvokeRater, starsAttributes));\n  }\n\n  return /*#__PURE__*/React.createElement(\"td\", {\n    className: colClass\n  }, /*#__PURE__*/React.createElement(_invokeRater__WEBPACK_IMPORTED_MODULE_1__.InvokeRater, starsAttributes), /*#__PURE__*/React.createElement(_textAfterStars__WEBPACK_IMPORTED_MODULE_0__.TextAfterStars, {\n    post: post,\n    text: cstText\n  }));\n};\n\n\n\n//# sourceURL=webpack://yet-another-stars-rating/./includes/js/src/react-components/returnTableColumnRight.js?");

/***/ }),

/***/ "./includes/js/src/react-components/returnTableHead.js":
/*!*************************************************************!*\
  !*** ./includes/js/src/react-components/returnTableHead.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ReturnTableHead\": () => (/* binding */ ReturnTableHead)\n/* harmony export */ });\n/**\n * Change style attribute for assigned tbody\n *\n * @author Dario Curvino <@dudo>\n * @since  2.5.7\n *\n */\nvar switchTBody = function switchTBody(props) {\n  return function (event) {\n    event.preventDefault();\n    var linkId = event.target.id;\n    var tableId = props.tableId;\n    var idLinkMost = 'link-most-rated-posts-' + tableId;\n    var idLinkHighest = 'link-highest-rated-posts-' + tableId;\n    var bodyIdMost = 'most-rated-posts-' + tableId;\n    var bodyIdHighest = 'highest-rated-posts-' + tableId; //change html from a to span and vice versa\n    //https://stackoverflow.com/a/13071899/3472877\n\n    var anchor = document.getElementById(linkId);\n    var span = document.createElement(\"span\"); //Copy innerhtml and id into span element\n\n    span.innerHTML = anchor.innerHTML;\n    span.id = anchor.id; //replace <a> with <span>\n\n    anchor.parentNode.replaceChild(span, anchor);\n\n    if (linkId === idLinkMost) {\n      //Dispaly body for Most\n      document.getElementById(bodyIdHighest).style.display = 'none';\n      document.getElementById(bodyIdMost).style.display = ''; //Here I've to replace <span> with <a>\n\n      span = document.getElementById(idLinkHighest);\n      anchor.innerHTML = span.innerHTML;\n      anchor.id = span.id;\n      span.parentNode.replaceChild(anchor, span);\n    }\n\n    if (linkId === idLinkHighest) {\n      //Dispaly body for Highest\n      document.getElementById(bodyIdMost).style.display = 'none';\n      document.getElementById(bodyIdHighest).style.display = ''; //Here I've to replace <span> with <a>\n\n      span = document.getElementById(idLinkMost);\n      anchor.innerHTML = span.innerHTML;\n      anchor.id = span.id;\n      span.parentNode.replaceChild(anchor, span);\n    }\n  };\n};\n/**\n * Print Thead Ranking Table Head\n *\n * @author Dario Curvino <@dudo>\n * @since  2.5.7\n *\n * @return {JSX.Element} - html <thead> element\n */\n\n\nvar ReturnTableHead = function ReturnTableHead(props) {\n  var tableId = props.tableId,\n      source = props.source,\n      defaultView = props.defaultView;\n  var idLinkMost = 'link-most-rated-posts-' + tableId;\n  var idLinkHighest = 'link-highest-rated-posts-' + tableId;\n\n  if (source !== 'author_ranking') {\n    var containerLink = /*#__PURE__*/React.createElement(\"span\", null, /*#__PURE__*/React.createElement(\"span\", {\n      id: idLinkMost\n    }, JSON.parse(yasrWindowVar.textMostRated)), \"\\xA0|\\xA0\", /*#__PURE__*/React.createElement(\"a\", {\n      href: \"#\",\n      id: idLinkHighest,\n      onClick: switchTBody(props)\n    }, JSON.parse(yasrWindowVar.textHighestRated)));\n\n    if (defaultView === 'highest') {\n      containerLink = /*#__PURE__*/React.createElement(\"span\", null, /*#__PURE__*/React.createElement(\"span\", {\n        id: idLinkHighest\n      }, JSON.parse(yasrWindowVar.textHighestRated)), \"\\xA0|\\xA0\", /*#__PURE__*/React.createElement(\"a\", {\n        href: \"#\",\n        id: idLinkMost,\n        onClick: switchTBody(props)\n      }, JSON.parse(yasrWindowVar.textMostRated)));\n    }\n\n    return /*#__PURE__*/React.createElement(\"thead\", null, /*#__PURE__*/React.createElement(\"tr\", {\n      className: \"yasr-rankings-td-colored yasr-rankings-heading\"\n    }, /*#__PURE__*/React.createElement(\"th\", null, JSON.parse(yasrWindowVar.textLeftColumnHeader)), /*#__PURE__*/React.createElement(\"th\", null, JSON.parse(yasrWindowVar.textOrderBy), \":\\xA0\\xA0\", containerLink)));\n  }\n\n  return /*#__PURE__*/React.createElement(React.Fragment, null);\n};\n\n\n\n//# sourceURL=webpack://yet-another-stars-rating/./includes/js/src/react-components/returnTableHead.js?");

/***/ }),

/***/ "./includes/js/src/react-components/returnTableRow.js":
/*!************************************************************!*\
  !*** ./includes/js/src/react-components/returnTableRow.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ReturnTableRow\": () => (/* binding */ ReturnTableRow)\n/* harmony export */ });\n/* harmony import */ var _returnTableColumnLeft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./returnTableColumnLeft */ \"./includes/js/src/react-components/returnTableColumnLeft.js\");\n/* harmony import */ var _returnTableColumnRight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./returnTableColumnRight */ \"./includes/js/src/react-components/returnTableColumnRight.js\");\n\n\n/**\n * Print row for Ranking Table\n *\n * @author Dario Curvino <@dudo>\n * @since  3.0.8\n *\n * @param props\n * @param {string} props.source   - Source of data\n * @param {Object} props.post     - Object with post attributes\n *\n * @return {JSX.Element} - html <tr> element\n */\n\nvar ReturnTableRow = function ReturnTableRow(props) {\n  return /*#__PURE__*/React.createElement(\"tr\", {\n    className: props.trClass\n  }, /*#__PURE__*/React.createElement(_returnTableColumnLeft__WEBPACK_IMPORTED_MODULE_0__.ReturnTableColumnLeft, {\n    colClass: props.leftClass,\n    post: props.post\n  }), /*#__PURE__*/React.createElement(_returnTableColumnRight__WEBPACK_IMPORTED_MODULE_1__.ReturnTableColumnRight, props));\n};\n\n\n\n//# sourceURL=webpack://yet-another-stars-rating/./includes/js/src/react-components/returnTableRow.js?");

/***/ }),

/***/ "./includes/js/src/react-components/returnTableTbody.js":
/*!**************************************************************!*\
  !*** ./includes/js/src/react-components/returnTableTbody.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ReturnTableTbody\": () => (/* binding */ ReturnTableTbody)\n/* harmony export */ });\n/* harmony import */ var _returnTableRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./returnTableRow */ \"./includes/js/src/react-components/returnTableRow.js\");\n\n\nvar ReturnTableTbody = function ReturnTableTbody(_ref) {\n  var tBodyId = _ref.tBodyId,\n      show = _ref.show,\n      data = _ref.data,\n      source = _ref.source,\n      rankingParams = _ref.rankingParams,\n      tableId = _ref.tableId;\n  return /*#__PURE__*/React.createElement(\"tbody\", {\n    id: tBodyId,\n    style: {\n      display: show\n    }\n  }, data.map(function (post, i) {\n    var trClass = 'yasr-rankings-td-colored';\n    var leftClass = 'yasr-top-10-most-highest-left';\n    var rightClass = 'yasr-top-10-most-highest-right';\n\n    if (source === 'author_ranking') {\n      trClass = 'yasr-rankings-td-white';\n      leftClass = 'yasr-top-10-overall-left';\n      rightClass = 'yasr-top-10-overall-right';\n    }\n\n    if (i % 2 === 0) {\n      trClass = 'yasr-rankings-td-white';\n\n      if (source === 'author_ranking') {\n        trClass = 'yasr-rankings-td-colored';\n      }\n    }\n\n    return /*#__PURE__*/React.createElement(_returnTableRow__WEBPACK_IMPORTED_MODULE_0__.ReturnTableRow, {\n      key: post.post_id,\n      source: source,\n      tableId: tableId,\n      rankingParams: rankingParams,\n      post: post,\n      trClass: trClass,\n      leftClass: leftClass,\n      rightClass: rightClass\n    });\n  }));\n};\n\n\n\n//# sourceURL=webpack://yet-another-stars-rating/./includes/js/src/react-components/returnTableTbody.js?");

/***/ }),

/***/ "./includes/js/src/react-components/setInnerHtml.js":
/*!**********************************************************!*\
  !*** ./includes/js/src/react-components/setInnerHtml.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SetInnerHtml\": () => (/* binding */ SetInnerHtml)\n/* harmony export */ });\n/* harmony import */ var striptags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! striptags */ \"./node_modules/striptags/src/striptags.js\");\n/* harmony import */ var striptags__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(striptags__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n * Strip a string to only allow <strong> and <p> tag (no XSS possible), and return it inside a div\n *\n * @returns {JSX.Element}\n * @param   html //destructured props\n */\n\nvar SetInnerHtml = function SetInnerHtml(_ref) {\n  var html = _ref.html;\n  return /*#__PURE__*/React.createElement(\"div\", {\n    dangerouslySetInnerHTML: {\n      __html: striptags__WEBPACK_IMPORTED_MODULE_0___default()(html, '<strong><p>')\n    }\n  });\n};\n\n\n\n//# sourceURL=webpack://yet-another-stars-rating/./includes/js/src/react-components/setInnerHtml.js?");

/***/ }),

/***/ "./includes/js/src/react-components/textAfterStars.js":
/*!************************************************************!*\
  !*** ./includes/js/src/react-components/textAfterStars.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TextAfterStars\": () => (/* binding */ TextAfterStars)\n/* harmony export */ });\n/* harmony import */ var _setInnerHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setInnerHtml */ \"./includes/js/src/react-components/setInnerHtml.js\");\n\n/**\n * @author Dario Curvino <@dudo>\n * @since  3.0.8\n *\n * @param number_of_votes\n * @param rating\n * @param text\n * @returns {JSX.Element}\n * @constructor\n */\n\nvar TextAfterStars = function TextAfterStars(_ref) {\n  var _ref$post = _ref.post,\n      number_of_votes = _ref$post.number_of_votes,\n      rating = _ref$post.rating,\n      text = _ref.text;\n\n  //If number_of_votes exists\n  if (typeof number_of_votes !== \"undefined\") {\n    var _text = JSON.parse(yasrWindowVar.textAfterVr);\n\n    _text = _text.replace('%total_count%', number_of_votes);\n    _text = _text.replace('%average%', rating);\n    return /*#__PURE__*/React.createElement(\"div\", {\n      className: \"yasr-most-rated-text\"\n    }, /*#__PURE__*/React.createElement(_setInnerHtml__WEBPACK_IMPORTED_MODULE_0__.SetInnerHtml, {\n      html: _text\n    }));\n  }\n\n  return /*#__PURE__*/React.createElement(React.Fragment, null, text, \" \", rating);\n};\n\n\n\n//# sourceURL=webpack://yet-another-stars-rating/./includes/js/src/react-components/textAfterStars.js?");

/***/ }),

/***/ "./includes/js/src/react-components/yasrRanking.js":
/*!*********************************************************!*\
  !*** ./includes/js/src/react-components/yasrRanking.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"YasrRanking\": () => (/* binding */ YasrRanking)\n/* harmony export */ });\n/* harmony import */ var _returnRankingTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./returnRankingTable */ \"./includes/js/src/react-components/returnRankingTable.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nvar _wp$element = wp.element,\n    useState = _wp$element.useState,\n    useEffect = _wp$element.useEffect;\n/**\n * Return a string with query params to append to the url\n *\n * @param queryParams\n * @param dataSource\n * @returns {string}\n */\n\nvar returnQueryParams = function returnQueryParams(queryParams, dataSource) {\n  var cleanedQuery = '';\n\n  if (queryParams !== '' && queryParams !== false) {\n    var params = new URLSearchParams(queryParams);\n\n    if (params.get('order_by') !== null) {\n      cleanedQuery += 'order_by=' + params.get('order_by');\n    }\n\n    if (params.get('limit') !== null) {\n      cleanedQuery += '&limit=' + params.get('limit');\n    }\n\n    if (params.get('start_date') !== null && params.get('start_date') !== '0') {\n      cleanedQuery += '&start_date=' + params.get('start_date');\n    }\n\n    if (params.get('end_date') !== null && params.get('end_date') !== '0') {\n      cleanedQuery += '&end_date=' + params.get('end_date');\n    }\n\n    if (params.get('ctg') !== null) {\n      cleanedQuery += '&ctg=' + params.get('ctg');\n    } else if (params.get('cpt') !== null) {\n      cleanedQuery += '&cpt=' + params.get('cpt');\n    }\n\n    if (cleanedQuery !== '') {\n      cleanedQuery = cleanedQuery.replace(/\\s+/g, '');\n      cleanedQuery = '&' + cleanedQuery;\n    }\n\n    if (dataSource === 'visitor_multi' || dataSource === 'author_multi') {\n      if (params.get('setid') !== null) {\n        cleanedQuery += '&setid=' + params.get('setid');\n      }\n    }\n\n    if (dataSource === 'visitor_votes') {\n      if (params.get('required_votes[most]') !== null) {\n        cleanedQuery = '&required_votes=' + params.get('required_votes[most]');\n      }\n\n      if (params.get('required_votes[highest]') !== null) {\n        cleanedQuery = '&required_votes=' + params.get('required_votes[highest]');\n      }\n    }\n  }\n\n  return cleanedQuery;\n};\n/*\n* Returns an array with the REST API urls\n*\n* @author Dario Curvino <@dudo>\n* @since  2.5.7\n*\n* @return array of urls\n*/\n\n\nvar returnRestUrl = function returnRestUrl(rankingParams, source, nonce) {\n  var dataSource = source;\n  var nonceString = '&nonce_rankings=' + nonce;\n  var queryParams = rankingParams !== '' ? rankingParams : '';\n  var urlYasrRanking;\n  var cleanedQuery = returnQueryParams(queryParams, dataSource);\n\n  if (dataSource === 'author_ranking' || dataSource === 'author_multi' || dataSource === 'overall_rating') {\n    urlYasrRanking = [yasrWindowVar.ajaxurl + '?action=yasr_load_rankings&source=' + dataSource + cleanedQuery + nonceString];\n  } else {\n    urlYasrRanking = [yasrWindowVar.ajaxurl + '?action=yasr_load_rankings&show=most&source=' + dataSource + cleanedQuery + nonceString, yasrWindowVar.ajaxurl + '?action=yasr_load_rankings&show=highest&source=' + dataSource + cleanedQuery + nonceString];\n  }\n\n  return urlYasrRanking;\n};\n/***\n * @param props\n * @returns {JSX.Element}\n */\n\n\nvar YasrRanking = function YasrRanking(_ref) {\n  var tableId = _ref.tableId,\n      source = _ref.source,\n      params = _ref.params,\n      nonce = _ref.nonce;\n  var tBodyParams = {\n    tableId: tableId,\n    source: source,\n    rankingParams: params\n  };\n\n  var _useState = useState(null),\n      _useState2 = _slicedToArray(_useState, 2),\n      error = _useState2[0],\n      setError = _useState2[1];\n\n  var _useState3 = useState(false),\n      _useState4 = _slicedToArray(_useState3, 2),\n      isLoaded = _useState4[0],\n      setIsLoaded = _useState4[1];\n\n  var _useState5 = useState([]),\n      _useState6 = _slicedToArray(_useState5, 2),\n      rankingData = _useState6[0],\n      setRankingData = _useState6[1];\n  /**\n   * Return ranking Data from html, and print console.info if not error\n   *\n   * @param ajaxDisabled\n   * @returns {any}\n   */\n\n\n  var setDataFromHtml = function setDataFromHtml() {\n    var ajaxDisabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n    var rankingData = JSON.parse(document.getElementById(tableId).dataset.rankingData);\n\n    if (ajaxDisabled === true) {\n      console.info('Ajax Disabled, getting data from source');\n    }\n\n    setRankingData(rankingData);\n  };\n  /**\n   * Do the fetch\n   */\n\n\n  var setDataFromFetch = function setDataFromFetch() {\n    var data = []; //get the rest urls\n\n    var urlYasrRankingApi = returnRestUrl(params, source, nonce);\n    Promise.all(urlYasrRankingApi.map(function (url) {\n      return fetch(url).then(function (response) {\n        if (response.ok === true) {\n          return response.json();\n        } else {\n          console.info('Ajax Call Failed. Getting data from source');\n          return 'KO';\n        }\n      })\n      /**\n       * If response is not ok, get data from global var\n       */\n      .then(function (response) {\n        if (response === 'KO') {\n          setDataFromHtml();\n        } else {\n          if (response.source === 'overall_rating' || response.source === 'author_multi') {\n            if (response.source === 'overall_rating') {\n              data = response.data_overall;\n            } else {\n              data = response.data_mv;\n            }\n          } //if data is from visitor votes, create an array like this\n          //data[most]\n          //data[highest]\n          else {\n            data[response.show] = response.data_vv;\n          } //only set ranking data here\n\n\n          setRankingData(data);\n        }\n      })[\"catch\"](function (error) {\n        setDataFromHtml();\n        console.info(error);\n      });\n    })) //At the end of promise all, set isLoaded to true\n    .then(function (r) {\n      setIsLoaded(true);\n    })[\"catch\"](function (error) {\n      setDataFromHtml();\n      console.info(error);\n    });\n  };\n\n  useEffect(function () {\n    //If ajax is disabled, use global value\n    if (yasrWindowVar.ajaxEnabled !== 'yes') {\n      setDataFromHtml(true);\n      setIsLoaded(true);\n    } else {\n      if (source) {\n        setDataFromFetch();\n      } else {\n        setError('Invalid Data Source');\n      }\n    }\n  }, []);\n  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_returnRankingTable__WEBPACK_IMPORTED_MODULE_0__.YasrRankingTable, _extends({\n    error: error,\n    isLoaded: isLoaded,\n    data: rankingData\n  }, tBodyParams)));\n};\n\n\n\n//# sourceURL=webpack://yet-another-stars-rating/./includes/js/src/react-components/yasrRanking.js?");

/***/ }),

/***/ "./includes/js/src/shortcodes/ranking.js":
/*!***********************************************!*\
  !*** ./includes/js/src/shortcodes/ranking.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"yasrDrawRankings\": () => (/* binding */ yasrDrawRankings)\n/* harmony export */ });\n/* harmony import */ var _react_components_yasrRanking__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../react-components/yasrRanking */ \"./includes/js/src/react-components/yasrRanking.js\");\n\nvar render = wp.element.render;\n\nvar yasrDrawRankings = function yasrDrawRankings() {\n  //check if there is some shortcode with class yasr-table-chart\n  var yasrRankingsInDom = document.getElementsByClassName('yasr-stars-rankings');\n\n  if (yasrRankingsInDom.length > 0) {\n    for (var i = 0; i < yasrRankingsInDom.length; i++) {\n      var tableId = yasrRankingsInDom.item(i).id;\n      var source = JSON.parse(yasrRankingsInDom.item(i).dataset.rankingSource);\n      var params = JSON.parse(yasrRankingsInDom.item(i).dataset.rankingParams);\n      var nonce = JSON.parse(yasrRankingsInDom.item(i).dataset.rankingNonce);\n      var rankingTable = document.getElementById(tableId);\n      render( /*#__PURE__*/React.createElement(_react_components_yasrRanking__WEBPACK_IMPORTED_MODULE_0__.YasrRanking, {\n        source: source,\n        tableId: tableId,\n        params: params,\n        nonce: nonce\n      }), rankingTable);\n    }\n  }\n}; //Drow Rankings\n\n\nyasrDrawRankings();\n\n\n//# sourceURL=webpack://yet-another-stars-rating/./includes/js/src/shortcodes/ranking.js?");

/***/ }),

/***/ "./node_modules/striptags/src/striptags.js":
/*!*************************************************!*\
  !*** ./node_modules/striptags/src/striptags.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;\n\n(function (global) {\n\n    // minimal symbol polyfill for IE11 and others\n    if (typeof Symbol !== 'function') {\n        var Symbol = function(name) {\n            return name;\n        }\n\n        Symbol.nonNative = true;\n    }\n\n    const STATE_PLAINTEXT = Symbol('plaintext');\n    const STATE_HTML      = Symbol('html');\n    const STATE_COMMENT   = Symbol('comment');\n\n    const ALLOWED_TAGS_REGEX  = /<(\\w*)>/g;\n    const NORMALIZE_TAG_REGEX = /<\\/?([^\\s\\/>]+)/;\n\n    function striptags(html, allowable_tags, tag_replacement) {\n        html            = html || '';\n        allowable_tags  = allowable_tags || [];\n        tag_replacement = tag_replacement || '';\n\n        let context = init_context(allowable_tags, tag_replacement);\n\n        return striptags_internal(html, context);\n    }\n\n    function init_striptags_stream(allowable_tags, tag_replacement) {\n        allowable_tags  = allowable_tags || [];\n        tag_replacement = tag_replacement || '';\n\n        let context = init_context(allowable_tags, tag_replacement);\n\n        return function striptags_stream(html) {\n            return striptags_internal(html || '', context);\n        };\n    }\n\n    striptags.init_streaming_mode = init_striptags_stream;\n\n    function init_context(allowable_tags, tag_replacement) {\n        allowable_tags = parse_allowable_tags(allowable_tags);\n\n        return {\n            allowable_tags : allowable_tags,\n            tag_replacement: tag_replacement,\n\n            state         : STATE_PLAINTEXT,\n            tag_buffer    : '',\n            depth         : 0,\n            in_quote_char : ''\n        };\n    }\n\n    function striptags_internal(html, context) {\n        if (typeof html != \"string\") {\n            throw new TypeError(\"'html' parameter must be a string\");\n        }\n\n        let allowable_tags  = context.allowable_tags;\n        let tag_replacement = context.tag_replacement;\n\n        let state         = context.state;\n        let tag_buffer    = context.tag_buffer;\n        let depth         = context.depth;\n        let in_quote_char = context.in_quote_char;\n        let output        = '';\n\n        for (let idx = 0, length = html.length; idx < length; idx++) {\n            let char = html[idx];\n\n            if (state === STATE_PLAINTEXT) {\n                switch (char) {\n                    case '<':\n                        state       = STATE_HTML;\n                        tag_buffer += char;\n                        break;\n\n                    default:\n                        output += char;\n                        break;\n                }\n            }\n\n            else if (state === STATE_HTML) {\n                switch (char) {\n                    case '<':\n                        // ignore '<' if inside a quote\n                        if (in_quote_char) {\n                            break;\n                        }\n\n                        // we're seeing a nested '<'\n                        depth++;\n                        break;\n\n                    case '>':\n                        // ignore '>' if inside a quote\n                        if (in_quote_char) {\n                            break;\n                        }\n\n                        // something like this is happening: '<<>>'\n                        if (depth) {\n                            depth--;\n\n                            break;\n                        }\n\n                        // this is closing the tag in tag_buffer\n                        in_quote_char = '';\n                        state         = STATE_PLAINTEXT;\n                        tag_buffer   += '>';\n\n                        if (allowable_tags.has(normalize_tag(tag_buffer))) {\n                            output += tag_buffer;\n                        } else {\n                            output += tag_replacement;\n                        }\n\n                        tag_buffer = '';\n                        break;\n\n                    case '\"':\n                    case '\\'':\n                        // catch both single and double quotes\n\n                        if (char === in_quote_char) {\n                            in_quote_char = '';\n                        } else {\n                            in_quote_char = in_quote_char || char;\n                        }\n\n                        tag_buffer += char;\n                        break;\n\n                    case '-':\n                        if (tag_buffer === '<!-') {\n                            state = STATE_COMMENT;\n                        }\n\n                        tag_buffer += char;\n                        break;\n\n                    case ' ':\n                    case '\\n':\n                        if (tag_buffer === '<') {\n                            state      = STATE_PLAINTEXT;\n                            output    += '< ';\n                            tag_buffer = '';\n\n                            break;\n                        }\n\n                        tag_buffer += char;\n                        break;\n\n                    default:\n                        tag_buffer += char;\n                        break;\n                }\n            }\n\n            else if (state === STATE_COMMENT) {\n                switch (char) {\n                    case '>':\n                        if (tag_buffer.slice(-2) == '--') {\n                            // close the comment\n                            state = STATE_PLAINTEXT;\n                        }\n\n                        tag_buffer = '';\n                        break;\n\n                    default:\n                        tag_buffer += char;\n                        break;\n                }\n            }\n        }\n\n        // save the context for future iterations\n        context.state         = state;\n        context.tag_buffer    = tag_buffer;\n        context.depth         = depth;\n        context.in_quote_char = in_quote_char;\n\n        return output;\n    }\n\n    function parse_allowable_tags(allowable_tags) {\n        let tag_set = new Set();\n\n        if (typeof allowable_tags === 'string') {\n            let match;\n\n            while ((match = ALLOWED_TAGS_REGEX.exec(allowable_tags))) {\n                tag_set.add(match[1]);\n            }\n        }\n\n        else if (!Symbol.nonNative &&\n                 typeof allowable_tags[Symbol.iterator] === 'function') {\n\n            tag_set = new Set(allowable_tags);\n        }\n\n        else if (typeof allowable_tags.forEach === 'function') {\n            // IE11 compatible\n            allowable_tags.forEach(tag_set.add, tag_set);\n        }\n\n        return tag_set;\n    }\n\n    function normalize_tag(tag_buffer) {\n        let match = NORMALIZE_TAG_REGEX.exec(tag_buffer);\n\n        return match ? match[1].toLowerCase() : null;\n    }\n\n    if (true) {\n        // AMD\n        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function module_factory() { return striptags; }).call(exports, __webpack_require__, exports, module),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n    }\n\n    else {}\n}(this));\n\n\n//# sourceURL=webpack://yet-another-stars-rating/./node_modules/striptags/src/striptags.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://yet-another-stars-rating/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nvar getRandomValues;\nvar rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation. Also,\n    // find the complete implementation of crypto (msCrypto) on IE11.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://yet-another-stars-rating/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nvar byteToHex = [];\n\nfor (var i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).substr(1));\n}\n\nfunction stringify(arr) {\n  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://yet-another-stars-rating/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\nfunction v4(options, buf, offset) {\n  options = options || {};\n  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (var i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://yet-another-stars-rating/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://yet-another-stars-rating/./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./includes/js/src/shortcodes/ranking.js");
/******/ 	
/******/ })()
;