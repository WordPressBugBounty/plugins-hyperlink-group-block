/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./block.json":
/*!********************!*\
  !*** ./block.json ***!
  \********************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":3,"name":"tiptip/hyperlink-group-block","title":"Hyperlink Group","category":"design","supports":{"html":true,"anchor":true,"align":true,"spacing":{"margin":true,"padding":true},"interactivity":{"clientNavigation":true}},"usesContext":["postId","postType","queryId"],"attributes":{"colorText":{"type":"string"},"colorBkg":{"type":"string"},"colorBkgHover":{"type":"string"},"url":{"type":"string"},"title":{"type":"string"},"linkTarget":{"type":"string"},"ariaLabel":{"type":"string"},"rel":{"type":"string"},"backgroundColor":{"type":"string"},"textColor":{"type":"string"},"gradient":{"type":"string"},"queryLoopLink":{"type":"boolean","default":false}},"textdomain":"hyperlink-group-block","editorScript":"file:./build/index.js","editorStyle":"file:./build/style-index.css","style":"file:./build/style-index.css"}');

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/link-off.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/link-off.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const linkOff = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M17.031 4.703 15.576 4l-1.56 3H14v.03l-2.324 4.47H9.5V13h1.396l-1.502 2.889h-.95a3.694 3.694 0 0 1 0-7.389H10V7H8.444a5.194 5.194 0 1 0 0 10.389h.17L7.5 19.53l1.416.719L15.049 8.5h.507a3.694 3.694 0 0 1 0 7.39H14v1.5h1.556a5.194 5.194 0 0 0 .273-10.383l1.202-2.304Z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (linkOff);
//# sourceMappingURL=link-off.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/link.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/link.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const link = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (link);
//# sourceMappingURL=link.js.map

/***/ }),

/***/ "./node_modules/clsx/dist/clsx.mjs":
/*!*****************************************!*\
  !*** ./node_modules/clsx/dist/clsx.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clsx: () => (/* binding */ clsx),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ }),

/***/ "./src/deprecated.js":
/*!***************************!*\
  !*** ./src/deprecated.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../block.json */ "./block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const v1 = {
  ..._block_json__WEBPACK_IMPORTED_MODULE_3__,
  save({
    attributes,
    className
  }) {
    const {
      linkTarget,
      rel,
      title,
      url
    } = attributes;
    const buttonClasses = (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('wp-block-hyperlink-group');
    const wrapperClasses = (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(className);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
        className: wrapperClasses
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
        className: buttonClasses,
        href: url,
        title: title,
        target: linkTarget,
        rel: rel,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, {})
      })
    });
  }
};
const v2 = {
  ..._block_json__WEBPACK_IMPORTED_MODULE_3__,
  save({
    attributes
  }) {
    const {
      linkTarget,
      rel,
      title,
      url,
      className
    } = attributes;
    const buttonClasses = (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('wp-block-hyperlink-group');
    const wrapperClasses = (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(className);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
      className: buttonClasses,
      href: url,
      title: title,
      target: linkTarget,
      rel: rel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
          className: wrapperClasses
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, {})
      })
    });
  }
};

/**
 * New deprecations need to be placed first
 * for them to have higher priority.
 *
 * Old deprecations may need to be updated as well.
 *
 * See block-deprecation.md
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([v2, v1]);

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinkControl: () => (/* binding */ LinkControl),
/* harmony export */   "default": () => (/* binding */ Edit),
/* harmony export */   useInnerBlocksProps: () => (/* binding */ useInnerBlocksProps)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/link.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/link-off.js");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);










const useInnerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.__experimentalUseInnerBlocksProps || _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useInnerBlocksProps; // WP +5.9
const LinkControl = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.__experimentalLinkControl || _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.LinkControl; // WP +5.9

const NEW_TAB_REL = 'noreferrer noopener';
function Edit({
  attributes,
  setAttributes,
  isSelected,
  clientId,
  context: {
    postType,
    postId,
    queryId
  }
}) {
  const {
    linkTarget,
    ariaLabel,
    rel,
    title,
    url,
    queryLoopLink,
    colorText,
    colorBkg,
    colorBkgHover
  } = attributes;
  const [queryLoopUrl] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_9__.useEntityProp)('postType', postType, 'link', postId);
  const {
    hasInnerBlocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    const {
      getBlock,
      getSettings
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.store);
    const block = getBlock(clientId);
    return {
      hasInnerBlocks: !!(block && block.innerBlocks.length),
      themeSupportsLayout: getSettings()?.supportsLayout
    };
  }, [clientId]);
  const ref = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)({
    ref
  });
  const innerBlocksProps = useInnerBlocksProps(blockProps, {
    renderAppender: hasInnerBlocks ? undefined : _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InnerBlocks.ButtonBlockAppender
  });
  const onQueryLoopLink = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(value => {
    setAttributes({
      queryLoopLink: value
    });
  }, [setAttributes]);
  const onSetAriaLabel = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(value => {
    setAttributes({
      ariaLabel: value
    });
  }, [setAttributes]);
  const onSetTabName = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(value => {
    setAttributes({
      linkTarget: value
    });
  }, [setAttributes]);
  const onSetLinkRel = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(value => {
    setAttributes({
      rel: value
    });
  }, [setAttributes]);
  const onSetLinkTitle = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(value => {
    setAttributes({
      title: value
    });
  }, [setAttributes]);
  const onToggleOpenInNewTab = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(value => {
    const newLinkTarget = value ? '_blank' : undefined;
    let updatedRel = rel;
    if (newLinkTarget && !rel) {
      updatedRel = NEW_TAB_REL;
    } else if (!newLinkTarget && rel === NEW_TAB_REL) {
      updatedRel = undefined;
    }
    setAttributes({
      linkTarget: newLinkTarget,
      rel: updatedRel
    });
  }, [rel, setAttributes]);
  function URLPicker({
    isSelected,
    url,
    setAttributes,
    opensInNewTab,
    onToggleOpenInNewTab,
    anchorRef
  }) {
    url = queryLoopLink ? queryLoopUrl : url;
    const [isURLPickerOpen, setIsURLPickerOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const urlIsSet = !!url;
    const urlIsSetandSelected = urlIsSet && isSelected;
    const openLinkControl = () => {
      setIsURLPickerOpen(true);
      return false; // prevents default behaviour for event
    };
    const unlinkButton = () => {
      setAttributes({
        url: undefined,
        linkTarget: undefined,
        rel: undefined
      });
      setIsURLPickerOpen(false);
    };
    const linkControl = (isURLPickerOpen || urlIsSetandSelected) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Popover, {
      focusOnMount: false,
      position: "bottom center",
      onClose: () => setIsURLPickerOpen(false),
      anchorRef: anchorRef?.current,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(LinkControl, {
        className: "wp-block-navigation-link__inline-link-input",
        value: {
          url,
          opensInNewTab
        },
        onChange: ({
          url: newURL = '',
          opensInNewTab: newOpensInNewTab
        }) => {
          setAttributes({
            url: newURL
          });
          if (opensInNewTab !== newOpensInNewTab) {
            onToggleOpenInNewTab(newOpensInNewTab);
          }
        }
      })
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.BlockControls, {
        group: "block",
        children: [!urlIsSet && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarButton, {
          name: "link",
          icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"],
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Link'),
          shortcut: _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_6__.displayShortcut.primary('k'),
          onClick: openLinkControl
        }), urlIsSetandSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarButton, {
          name: "link",
          icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__["default"],
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Unlink'),
          shortcut: _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_6__.displayShortcut.primaryShift('k'),
          onClick: unlinkButton,
          isActive: true
        })]
      }), isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.KeyboardShortcuts, {
        bindGlobal: true,
        shortcuts: {
          [_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_6__.rawShortcut.primary('k')]: openLinkControl,
          [_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_6__.rawShortcut.primaryShift('k')]: unlinkButton
        }
      }), linkControl]
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      ...blockProps,
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])(blockProps.className),
      style: {
        '--color-text': colorText ? colorText : '',
        '--color-bkg': colorBkg ? colorBkg : '',
        '--color-bkg-hover': colorBkgHover ? colorBkgHover : colorBkg
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(URLPicker, {
        url: url,
        setAttributes: setAttributes,
        isSelected: isSelected,
        opensInNewTab: linkTarget,
        onToggleOpenInNewTab: onToggleOpenInNewTab,
        anchorRef: ref
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Link settings'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
            label: "Use link from Query Loop Block",
            help: 'Link to the current post when using inside a Query Loop Block.',
            checked: queryLoopLink,
            onChange: onQueryLoopLink
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorAdvancedControls, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Use same tabname as targe to open in same tabs'),
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tab name'),
          value: linkTarget || '',
          onChange: onSetTabName
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Link rel'),
          value: rel || '',
          onChange: onSetLinkRel
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Aria-Label'),
          value: ariaLabel || '',
          onChange: onSetAriaLabel
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Link title'),
          value: title || '',
          onChange: onSetLinkTitle
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, {
        group: "styles",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.PanelColorSettings, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color'),
          colorSettings: [{
            value: colorText,
            onChange: colorValue => setAttributes({
              colorText: colorValue
            }),
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text'),
            enableAlpha: true,
            clearable: true
          }, {
            value: colorBkg,
            onChange: colorValue => setAttributes({
              colorBkg: colorValue
            }),
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background'),
            enableAlpha: true,
            clearable: true
          }, {
            value: colorBkgHover,
            onChange: colorValue => setAttributes({
              colorBkgHover: colorValue
            }),
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background hover'),
            enableAlpha: true,
            clearable: true
          }]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("a", {
        ...innerBlocksProps
      })]
    })
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/link.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deprecated */ "./src/deprecated.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../block.json */ "./block.json");









const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_7__;
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(name, {
  ..._block_json__WEBPACK_IMPORTED_MODULE_7__,
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__["default"],
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Combine blocks into a group wrapped with an hyperlink.', 'hyperlink-group-block'),
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('container'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('wrapper'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('anchor'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('a'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('hyperlink'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('link'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('tiptoppress')],
  example: {
    attributes: {
      style: {
        color: {
          text: '#000000',
          background: '#ffffff'
        }
      }
    },
    innerBlocks: [{
      name: 'core/paragraph',
      attributes: {
        customTextColor: '#cf2e2e',
        fontSize: 'large',
        content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('One.')
      }
    }, {
      name: 'core/paragraph',
      attributes: {
        customTextColor: '#ff6900',
        fontSize: 'large',
        content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Two.')
      }
    }, {
      name: 'core/paragraph',
      attributes: {
        customTextColor: '#fcb900',
        fontSize: 'large',
        content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Three.')
      }
    }, {
      name: 'core/paragraph',
      attributes: {
        customTextColor: '#00d084',
        fontSize: 'large',
        content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Four.')
      }
    }, {
      name: 'core/paragraph',
      attributes: {
        customTextColor: '#0693e3',
        fontSize: 'large',
        content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Five.')
      }
    }, {
      name: 'core/paragraph',
      attributes: {
        customTextColor: '#9b51e0',
        fontSize: 'large',
        content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Six.')
      }
    }]
  },
  transforms: {
    from: [{
      type: 'block',
      isMultiBlock: true,
      blocks: ['*'],
      __experimentalConvert(blocks) {
        // Avoid transforming a single `core/group` Block
        if (blocks.length === 1 && blocks[0].name === 'tiptip/hyperlink-group-block') {
          return;
        }

        // Clone the Blocks to be Grouped
        // Failing to create new block references causes the original blocks
        // to be replaced in the switchToBlockType call thereby meaning they
        // are removed both from their original location and within the
        // new group block.
        const groupInnerBlocks = blocks.map(block => {
          return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)(block.name, block.attributes, block.innerBlocks);
        });
        return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('tiptip/hyperlink-group-block', {}, groupInnerBlocks);
      }
    }]
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"],
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_6__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



// Leave save.js for deprecated.js

function save({
  attributes
}) {
  const {
    linkTarget,
    rel,
    title,
    url,
    className
  } = attributes;
  const buttonClasses = (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])('wp-block-hyperlink-group');
  const wrapperClasses = (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])(className);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
    className: buttonClasses,
    href: url,
    title: title,
    target: linkTarget,
    rel: rel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
        className: wrapperClasses
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, {})
    })
  });
}

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/keycodes":
/*!**********************************!*\
  !*** external ["wp","keycodes"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["keycodes"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkhyperlink_group"] = globalThis["webpackChunkhyperlink_group"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map