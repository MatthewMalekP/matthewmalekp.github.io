/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _parts_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/_options */ \"./src/js/parts/_options.js\");\n/* harmony import */ var _parts_initAnchors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/initAnchors */ \"./src/js/parts/initAnchors.js\");\n/* harmony import */ var _parts_initNavbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/initNavbar */ \"./src/js/parts/initNavbar.js\");\n/* harmony import */ var _parts_initObjectFitImages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/initObjectFitImages */ \"./src/js/parts/initObjectFitImages.js\");\n/* harmony import */ var _parts_initFlickity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parts/initFlickity */ \"./src/js/parts/initFlickity.js\");\n/* harmony import */ var _parts_initOwlCarousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parts/initOwlCarousel */ \"./src/js/parts/initOwlCarousel.js\");\n/* harmony import */ var _parts_initMagnificPopup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parts/initMagnificPopup */ \"./src/js/parts/initMagnificPopup.js\");\n/* harmony import */ var _parts_initSliderRevolution__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parts/initSliderRevolution */ \"./src/js/parts/initSliderRevolution.js\");\n/* harmony import */ var _parts_initIsotope__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parts/initIsotope */ \"./src/js/parts/initIsotope.js\");\n/* harmony import */ var _parts_initJarallax__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parts/initJarallax */ \"./src/js/parts/initJarallax.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\n\n\n\n\n\n\n\n\n\nvar Main = /*#__PURE__*/function () {\n  function Main(newOptions) {\n    _classCallCheck(this, Main);\n\n    var self = this;\n    self.options = newOptions;\n    self.$window = $(window);\n    self.$document = $(document); // check if mobile\n\n    self.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/g.test(navigator.userAgent || navigator.vendor || window.opera); // navbar\n\n    self.navbarSmall = false;\n    self.navbarMaxTop = 100;\n  }\n\n  _createClass(Main, [{\n    key: \"init\",\n    value: function init(newOptions) {\n      // prt:sc:dm\n      var self = this; // init options\n\n      self.options = $.extend({}, this.options, newOptions);\n\n      function initPlugins() {\n        // navbar set to small\n        if (!self.options.navbarSmall) {\n          self.options.navbarSmall = $('.navbar').hasClass('navbar-small');\n        }\n\n        self.initAnchors();\n        self.initNavbar(); // Plugins\n\n        self.initObjectFitImages();\n        self.initFlickity();\n        self.initOwlCarousel();\n        self.initMagnificPopup();\n        self.initSliderRevolution();\n        self.initIsotope(); // accordions\n\n        $('.accordion, .panel-group').find('.collapse').on('shown.bs.collapse', function () {\n          $(this).parent().find('.icon-plus').removeClass('icon-plus').addClass('icon-minus');\n          self.refresh();\n        }).on('hidden.bs.collapse', function () {\n          $(this).parent().find('.icon-minus').removeClass('icon-minus').addClass('icon-plus');\n          self.refresh();\n        }); // jarallax init after all plugins\n\n        self.initJarallax();\n      }\n\n      if ($('.page-preloader').length) {\n        // after page load\n        $(window).on('load', function () {\n          initPlugins(); // some timeout after plugins init\n\n          setTimeout(function () {\n            // hide preloader\n            $('.page-preloader').fadeOut(function () {\n              $(this).find('> *').remove();\n            });\n          }, 200);\n        }) // fix safari back button\n        // thanks http://stackoverflow.com/questions/8788802/prevent-safari-loading-from-cache-when-back-button-is-clicked\n        .on('pageshow', function (e) {\n          if (e.originalEvent.persisted) {\n            $('.page-preloader').hide();\n          }\n        });\n      } else {\n        initPlugins();\n        $(window).on('load', function () {\n          self.refresh();\n        });\n      }\n    } // eslint-disable-next-line\n\n  }, {\n    key: \"refresh\",\n    value: function refresh() {\n      window.dispatchEvent(new Event('resize'));\n    }\n  }, {\n    key: \"initAnchors\",\n    value: function initAnchors() {\n      return _parts_initAnchors__WEBPACK_IMPORTED_MODULE_1__[\"initAnchors\"].call(this);\n    }\n  }, {\n    key: \"initNavbar\",\n    value: function initNavbar() {\n      return _parts_initNavbar__WEBPACK_IMPORTED_MODULE_2__[\"initNavbar\"].call(this);\n    }\n  }, {\n    key: \"initObjectFitImages\",\n    value: function initObjectFitImages() {\n      return _parts_initObjectFitImages__WEBPACK_IMPORTED_MODULE_3__[\"initObjectFitImages\"].call(this);\n    }\n  }, {\n    key: \"initFlickity\",\n    value: function initFlickity() {\n      return _parts_initFlickity__WEBPACK_IMPORTED_MODULE_4__[\"initFlickity\"].call(this);\n    }\n  }, {\n    key: \"initOwlCarousel\",\n    value: function initOwlCarousel() {\n      return _parts_initOwlCarousel__WEBPACK_IMPORTED_MODULE_5__[\"initOwlCarousel\"].call(this);\n    }\n  }, {\n    key: \"initMagnificPopup\",\n    value: function initMagnificPopup() {\n      return _parts_initMagnificPopup__WEBPACK_IMPORTED_MODULE_6__[\"initMagnificPopup\"].call(this);\n    }\n  }, {\n    key: \"initSliderRevolution\",\n    value: function initSliderRevolution() {\n      return _parts_initSliderRevolution__WEBPACK_IMPORTED_MODULE_7__[\"initSliderRevolution\"].call(this);\n    }\n  }, {\n    key: \"initIsotope\",\n    value: function initIsotope() {\n      return _parts_initIsotope__WEBPACK_IMPORTED_MODULE_8__[\"initIsotope\"].call(this);\n    }\n  }, {\n    key: \"initJarallax\",\n    value: function initJarallax() {\n      return _parts_initJarallax__WEBPACK_IMPORTED_MODULE_9__[\"initJarallax\"].call(this);\n    }\n  }]);\n\n  return Main;\n}();\n\nwindow.main = new Main(_parts_options__WEBPACK_IMPORTED_MODULE_0__[\"options\"]);\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/parts/_options.js":
/*!**********************************!*\
  !*** ./src/js/parts/_options.js ***!
  \**********************************/
/*! exports provided: options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"options\", function() { return options; });\n/*------------------------------------------------------------------\n\n  Theme Options\n\n-------------------------------------------------------------------*/\nvar options = {\n  // enable parallax\n  parallax: true,\n  // set small navbar on load\n  navbarSmall: false,\n  // enable fade effect between pages\n  fadeBetweenPages: false\n};\n\n\n//# sourceURL=webpack:///./src/js/parts/_options.js?");

/***/ }),

/***/ "./src/js/parts/initAnchors.js":
/*!*************************************!*\
  !*** ./src/js/parts/initAnchors.js ***!
  \*************************************/
/*! exports provided: initAnchors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initAnchors\", function() { return initAnchors; });\n/*------------------------------------------------------------------\n\n  Anchors\n\n-------------------------------------------------------------------*/\nfunction initAnchors() {\n  this.$document.on('click', '.navbar a:not(.search-toggle), a.btn', function (e) {\n    var isHash = this.hash;\n    var isURIsame = this.baseURI === window.location.href;\n\n    if (isHash && isHash !== '#' && isHash !== '#!' && isURIsame) {\n      var $hashBlock = $(isHash);\n      var hash = isHash.replace(/^#/, '');\n\n      if ($hashBlock.length) {\n        // add hash to address bar\n        $hashBlock.attr('id', '');\n        document.location.hash = hash;\n        $hashBlock.attr('id', hash); // scroll to block\n\n        $('html, body').stop().animate({\n          scrollTop: $hashBlock.offset().top - 80\n        }, 700);\n        e.preventDefault();\n      }\n    }\n  });\n}\n\n\n\n//# sourceURL=webpack:///./src/js/parts/initAnchors.js?");

/***/ }),

/***/ "./src/js/parts/initFlickity.js":
/*!**************************************!*\
  !*** ./src/js/parts/initFlickity.js ***!
  \**************************************/
/*! exports provided: initFlickity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initFlickity\", function() { return initFlickity; });\n/*------------------------------------------------------------------\n\n  Flickity\n\n-------------------------------------------------------------------*/\nfunction initFlickity() {\n  if (typeof window.Flickity === 'undefined') {\n    return;\n  }\n  /*\n   * Hack to add imagesLoaded event\n   * https://github.com/metafizzy/flickity/issues/328\n   */\n\n\n  Flickity.prototype.imagesLoaded = function () {\n    if (!this.options.imagesLoaded) {\n      return;\n    }\n\n    var _this = this;\n\n    var timeout = false;\n    imagesLoaded(this.slider).on('progress', function (instance, image) {\n      var cell = _this.getParentCell(image.img);\n\n      _this.cellSizeChange(cell && cell.element);\n\n      if (!_this.options.freeScroll) {\n        _this.positionSliderAtSelected();\n      }\n\n      clearTimeout(timeout);\n      timeout = setTimeout(function () {\n        _this.dispatchEvent('imagesLoadedTimeout', null, [image.img, cell.element]);\n      }, 100);\n    });\n  }; // prevent click event fire when drag carousel\n\n\n  function noClickEventOnDrag($carousel) {\n    $carousel.on('dragStart.flickity', function () {\n      $(this).find('.flickity-viewport').addClass('is-dragging');\n    });\n    $carousel.on('dragEnd.flickity', function () {\n      $(this).find('.flickity-viewport').removeClass('is-dragging');\n    });\n  }\n\n  var id = 0;\n  $('.carousel').each(function () {\n    // wrap all childs\n    $(this).children().wrap('<div>');\n    var className = \"carousel-\".concat(id++);\n    var autoplay = parseInt($(this).attr('data-autoplay'), 10) || false;\n    var dots = $(this).attr('data-dots') === 'true' || false;\n    var arrows = $(this).attr('data-arrows') !== 'false' || false;\n    var loop = $(this).attr('data-loop') !== 'false';\n    var stagePadding = parseFloat($(this).attr('data-stage-padding') || 70);\n    var itemPadding = parseFloat($(this).attr('data-item-padding') || 0);\n    var styles = '';\n\n    if (itemPadding) {\n      styles += \".\".concat(className, \" .flickity-slider > * { padding: 0 \").concat(itemPadding, \"px; }\");\n    }\n\n    if (stagePadding) {\n      styles += \".\".concat(className, \" .flickity-slider { margin-left: \").concat(stagePadding, \"px; }\"); // Size 4\n\n      styles += \".\".concat(className, \".flickity-enabled .flickity-slider > * { width: calc(25% - \").concat(stagePadding * 2 / 4, \"px); }\");\n      styles += '@media (min-width: 767px) and (max-width: 991px) {';\n      styles += \".\".concat(className, \".flickity-enabled .flickity-slider > * { width: calc(33.3334% - \").concat(stagePadding * 2 / 3, \"px); }\");\n      styles += '}';\n      styles += '@media (max-width: 767px) {';\n      styles += \".\".concat(className, \".flickity-enabled .flickity-slider > * { width: calc(50% - \").concat(stagePadding * 2 / 2, \"px); }\");\n      styles += '}';\n      styles += '@media (max-width: 532px) {';\n      styles += \".\".concat(className, \".flickity-enabled .flickity-slider > * { width: calc(100% - \").concat(stagePadding * 2, \"px); }\");\n      styles += '}'; // Size 1\n\n      styles += \".\".concat(className, \".flickity-enabled.carousel-size-1 .flickity-slider > * { width: calc(100% - \").concat(stagePadding * 2, \"px); }\"); // Size 2\n\n      styles += \".\".concat(className, \".flickity-enabled.carousel-size-2 .flickity-slider > * { width: calc(50% - \").concat(stagePadding * 2 / 2, \"px); }\");\n      styles += '@media (max-width: 767px) {';\n      styles += \".\".concat(className, \".flickity-enabled.carousel-size-2 .flickity-slider > * { width: calc(100% - \").concat(stagePadding * 2, \"px); }\");\n      styles += '}'; // Size 3\n\n      styles += \".\".concat(className, \".flickity-enabled.carousel-size-3 .flickity-slider > * { width: calc(33.3334% - \").concat(stagePadding * 2 / 3, \"px); }\");\n      styles += '@media (min-width: 767px) and (max-width: 991px) {';\n      styles += \".\".concat(className, \".flickity-enabled.carousel-size-3 .flickity-slider > * { width: calc(50% - \").concat(stagePadding * 2 / 2, \"px); }\");\n      styles += '}';\n      styles += '@media (max-width: 767px) {';\n      styles += \".\".concat(className, \".flickity-enabled.carousel-size-3 .flickity-slider > * { width: calc(100% - \").concat(stagePadding * 2, \"px); }\");\n      styles += '}'; // Size 5\n\n      styles += \".\".concat(className, \".flickity-enabled.carousel-size-5 .flickity-slider > * { width: calc(20% - \").concat(stagePadding * 2 / 5, \"px); }\");\n      styles += '@media (min-width: 767px) and (max-width: 991px) {';\n      styles += \".\".concat(className, \".flickity-enabled.carousel-size-5 .flickity-slider > * { width: calc(25% - \").concat(stagePadding * 2 / 4, \"px); }\");\n      styles += '}';\n      styles += '@media (max-width: 767px) {';\n      styles += \".\".concat(className, \".flickity-enabled.carousel-size-5 .flickity-slider > * { width: calc(33.3334% - \").concat(stagePadding * 2 / 3, \"px); }\");\n      styles += '}';\n      styles += '@media (max-width: 532px) {';\n      styles += \".\".concat(className, \".flickity-enabled.carousel-size-5 .flickity-slider > * { width: calc(50% - \").concat(stagePadding * 2 / 2, \"px); }\");\n      styles += '}'; // Size 6\n\n      styles += \".\".concat(className, \".flickity-enabled.carousel-size-6 .flickity-slider > * { width: calc(16.666% - \").concat(stagePadding * 2 / 6, \"px); }\");\n      styles += '@media (min-width: 767px) and (max-width: 991px) {';\n      styles += \".\".concat(className, \".flickity-enabled.carousel-size-6 .flickity-slider > * { width: calc(20% - \").concat(stagePadding * 2 / 5, \"px); }\");\n      styles += '}';\n      styles += '@media (max-width: 767px) {';\n      styles += \".\".concat(className, \".flickity-enabled.carousel-size-6 .flickity-slider > * { width: calc(25% - \").concat(stagePadding * 2 / 4, \"px); }\");\n      styles += '}';\n      styles += '@media (max-width: 532px) {';\n      styles += \".\".concat(className, \".flickity-enabled.carousel-size-6 .flickity-slider > * { width: calc(33.3334% - \").concat(stagePadding * 2 / 3, \"px); }\");\n      styles += '}';\n    }\n\n    if (styles) {\n      $(\"<style>\".concat(styles, \"</style>\")).appendTo('head');\n    }\n\n    $(this).addClass(className).flickity({\n      cellAlign: 'left',\n      wrapAround: loop,\n      contain: true,\n      prevNextButtons: arrows,\n      pageDots: dots,\n      autoPlay: autoplay,\n      pauseAutoPlayOnHover: true,\n      selectedAttraction: 0.1,\n      friction: 0.6,\n      imagesLoaded: true\n    });\n    noClickEventOnDrag($(this));\n  }); // social horizontal navigation\n\n  $('.user-navigation > ul, .user-navigation > div > ul').each(function () {\n    $(this).flickity({\n      cellAlign: 'left',\n      wrapAround: false,\n      contain: true,\n      prevNextButtons: false,\n      pageDots: false,\n      selectedAttraction: 0.1,\n      friction: 0.6,\n      freeScroll: true\n    });\n    noClickEventOnDrag($(this));\n  });\n}\n\n\n\n//# sourceURL=webpack:///./src/js/parts/initFlickity.js?");

/***/ }),

/***/ "./src/js/parts/initIsotope.js":
/*!*************************************!*\
  !*** ./src/js/parts/initIsotope.js ***!
  \*************************************/
/*! exports provided: initIsotope */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initIsotope\", function() { return initIsotope; });\n/*------------------------------------------------------------------\n\n  Isotope\n\n-------------------------------------------------------------------*/\nfunction initIsotope() {\n  if (typeof $.fn.isotope === 'undefined') {\n    return;\n  }\n\n  var self = this;\n  $('.isotope').each(function () {\n    var curIsotopeOptions = $(this).find('.isotope-options'); // init items\n\n    var $grid = $(this).find('.isotope-list').isotope({\n      itemSelector: '.item'\n    }); // refresh for parallax images and isotope images position\n\n    if ($grid.imagesLoaded) {\n      $grid.imagesLoaded().progress(function () {\n        $grid.isotope('layout');\n      });\n    }\n\n    $grid.on('arrangeComplete', function () {\n      self.refresh();\n    }); // click on filter button\n\n    curIsotopeOptions.on('click', '> :not(.active)', function (e) {\n      $(this).addClass('active').siblings().removeClass('active');\n      var curFilter = $(this).attr('data-filter');\n      e.preventDefault();\n      $grid.isotope({\n        filter: function filter() {\n          if (curFilter === 'all') {\n            return true;\n          }\n\n          var itemFilters = $(this).attr('data-filters');\n\n          if (itemFilters) {\n            itemFilters = itemFilters.split(','); // eslint-disable-next-line\n\n            for (var k in itemFilters) {\n              if (itemFilters[k].replace(/\\s/g, '') === curFilter) {\n                return true;\n              }\n            }\n          }\n\n          return false;\n        }\n      });\n    });\n  });\n}\n\n\n\n//# sourceURL=webpack:///./src/js/parts/initIsotope.js?");

/***/ }),

/***/ "./src/js/parts/initJarallax.js":
/*!**************************************!*\
  !*** ./src/js/parts/initJarallax.js ***!
  \**************************************/
/*! exports provided: initJarallax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initJarallax\", function() { return initJarallax; });\n/*------------------------------------------------------------------\n\n  Jarallax\n\n-------------------------------------------------------------------*/\nfunction initJarallax() {\n  if (!this.options.parallax || this.isMobile) {\n    return;\n  } // in older versions used skrollr for parallax\n\n\n  if (typeof window.skrollr !== 'undefined' && typeof this.skrollr === 'undefined') {\n    this.skrollr = window.skrollr.init({\n      smoothScrolling: false,\n      forceHeight: false\n    });\n  } // in newest versions used Jarallax plugin\n\n\n  if (typeof $.fn.jarallax === 'undefined') {\n    return;\n  } // banners\n\n\n  $('.banner-parallax .image').each(function () {\n    var speed = parseFloat($(this).attr('data-speed'));\n    var $banner = $(this).closest('.banner-parallax');\n    var $info = $banner.children('.info');\n    var isTopBanner = $banner.hasClass('banner-top');\n    $(this).jarallax({\n      speed: Number.isNaN(speed) ? 0.4 : speed,\n      onScroll: function onScroll(calc) {\n        if (!isTopBanner) {\n          return;\n        }\n\n        var pos = calc.beforeTop !== 0 ? -1 : 1;\n        var scrollInfo = pos * Math.min(150, 150 * (1 - calc.visiblePercent));\n        $info.css({\n          opacity: calc.visiblePercent < 0 ? 1 : calc.visiblePercent,\n          transform: \"translate3d(0, \".concat(scrollInfo, \"px, 0)\")\n        });\n      }\n    });\n  }); // footer parallax\n\n  $('.footer-parallax').each(function () {\n    var $this = $(this);\n    var $img = $this.children('.image');\n    var $wrapper = $this.children('.wrapper');\n    var $social = $this.find('.social > .container');\n    var opts = {\n      onScroll: function onScroll(calc) {\n        var scroll = Math.max(-50, -50 * (1 - calc.visiblePercent));\n        $wrapper.css({\n          transform: \"translate3d(0, \".concat(scroll.toFixed(1), \"%, 0)\")\n        });\n        $social.css({\n          transform: 'translate3d(0, 0, 0)',\n          opacity: calc.visiblePercent < 0 ? 1 : calc.visiblePercent\n        });\n      }\n    };\n\n    if (!$img.length) {\n      opts.type = 'custom';\n      opts.imgSrc = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';\n      opts.imgWidth = 1;\n      opts.imgHeight = 1;\n      $this.jarallax(opts);\n    } else {\n      $img.jarallax(opts);\n    }\n  });\n}\n\n\n\n//# sourceURL=webpack:///./src/js/parts/initJarallax.js?");

/***/ }),

/***/ "./src/js/parts/initMagnificPopup.js":
/*!*******************************************!*\
  !*** ./src/js/parts/initMagnificPopup.js ***!
  \*******************************************/
/*! exports provided: initMagnificPopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initMagnificPopup\", function() { return initMagnificPopup; });\n/*------------------------------------------------------------------\n\n  Magnific Popup\n\n-------------------------------------------------------------------*/\nfunction initMagnificPopup() {\n  if (typeof $.fn.magnificPopup === 'undefined') {\n    return;\n  }\n\n  var mpOptions = {\n    closeOnContentClick: true,\n    closeBtnInside: false,\n    fixedContentPos: false,\n    mainClass: 'mfp-no-margins mfp-img-mobile mfp-with-fade',\n    tLoading: '<div class=\"preloader\"></div>',\n    removalDelay: 300,\n    image: {\n      verticalFit: true,\n      tError: '<a href=\"%url%\">The image #%curr%</a> could not be loaded.'\n    }\n  }; // image popup\n\n  $('.image-popup').magnificPopup($.extend({\n    type: 'image'\n  }, mpOptions)); // video popup\n\n  $('.video-popup').magnificPopup($.extend({\n    type: 'iframe'\n  }, mpOptions)); // gallery popup\n\n  $('.gallery-popup').each(function () {\n    $(this).magnificPopup($.extend({\n      delegate: '.owl-item:not(.cloned) a, .flickity-slider > div a',\n      type: 'image',\n      gallery: {\n        enabled: true,\n        navigateByImgClick: true,\n        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image\n\n      },\n      callbacks: {\n        elementParse: function elementParse(item) {\n          // Function will fire for each target element\n          // \"item.el\" is a target DOM element (if present)\n          // \"item.src\" is a source that you may modify\n          var video = /youtube.com|youtu.be|vimeo.com/g.test(item.src);\n\n          if (video) {\n            item.type = 'iframe';\n          } else {\n            item.type = 'image';\n          }\n        }\n      }\n    }, mpOptions));\n  });\n}\n\n\n\n//# sourceURL=webpack:///./src/js/parts/initMagnificPopup.js?");

/***/ }),

/***/ "./src/js/parts/initNavbar.js":
/*!************************************!*\
  !*** ./src/js/parts/initNavbar.js ***!
  \************************************/
/*! exports provided: initNavbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initNavbar\", function() { return initNavbar; });\n/*------------------------------------------------------------------\n\n  Navbar\n\n-------------------------------------------------------------------*/\nfunction initNavbar() {\n  var self = this; // navbar size\n\n  self.navbarSize = function (curTop) {\n    if (curTop > this.navbarMaxTop && !this.navbarSmall) {\n      this.navbarSmall = true;\n      $('.navbar').addClass('navbar-small');\n    }\n\n    if (curTop <= this.navbarMaxTop && this.navbarSmall) {\n      this.navbarSmall = false;\n      $('.navbar').removeClass('navbar-small');\n    }\n  }; // navbar collapse\n\n\n  self.navbarCollapse = function () {\n    var _this = this;\n\n    _this.$document.on('click', '.navbar [data-toggle=off-canvas]', function () {\n      var $toggleTarget = $('.navbar').find($(this).attr('data-target'));\n      var collapsed = $toggleTarget.hasClass('collapse');\n      $toggleTarget[\"\".concat(collapsed ? 'remove' : 'add', \"Class\")]('collapse');\n      $('.navbar')[\"\".concat(collapsed ? 'add' : 'remove', \"Class\")]('navbar-collapsed');\n    });\n\n    var resizeTimeout;\n\n    _this.$window.on('resize', function () {\n      $('.navbar').addClass('no-transition');\n      clearTimeout(resizeTimeout);\n      resizeTimeout = setTimeout(function () {\n        $('.navbar').removeClass('no-transition');\n      }, 50);\n    }); // close navbar if clicked on content\n\n\n    _this.$document.on('click', '.navbar-collapsed ~ .content-wrap', function () {\n      $('.navbar').find('[data-toggle=off-canvas]').click();\n    }); // prevent follow link when there is dropdown\n\n\n    if (!_this.options.fadeBetweenPages || !$('.page-preloader').length) {\n      _this.$document.on('click', '.navbar .dropdown-toggle', function () {\n        if ($(this).next('.dropdown-menu').css('visibility') === 'visible' && !$(this).parent().hasClass('open')) {\n          window.location.href = this.href;\n        }\n      });\n    }\n  }; // navbar submenu fix\n\n\n  self.navbarSubmenuFix = function () {\n    var $navbar = $('.navbar'); // don't close submenu if click on child submenu toggle\n\n    $navbar.on('click', '.dropdown-menu .dropdown-toggle', function (e) {\n      $(this).parent('.dropdown').toggleClass('open');\n      e.preventDefault();\n      e.stopPropagation();\n    }); // don't close submenu with form if one of the inputs focused\n\n    $navbar.on('focus', 'input, textarea, button', function () {\n      $(this).parents('.dropdown').addClass('open');\n    });\n  }; // navbar collapse\n\n\n  self.navbarCollapse(); // navbar set to small\n\n  if (!self.options.navbarSmall) {\n    self.$window.on('scroll', function () {\n      self.navbarSize(self.$window.scrollTop());\n    });\n    self.navbarSize(self.$window.scrollTop());\n  } // navbar submenu fix\n  // no close submenu if click on child submenu toggle\n\n\n  self.navbarSubmenuFix();\n}\n\n\n\n//# sourceURL=webpack:///./src/js/parts/initNavbar.js?");

/***/ }),

/***/ "./src/js/parts/initObjectFitImages.js":
/*!*********************************************!*\
  !*** ./src/js/parts/initObjectFitImages.js ***!
  \*********************************************/
/*! exports provided: initObjectFitImages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initObjectFitImages\", function() { return initObjectFitImages; });\n/*------------------------------------------------------------------\n\n  Object Fit Images\n\n-------------------------------------------------------------------*/\nfunction initObjectFitImages() {\n  if (typeof objectFitImages !== 'undefined') {\n    objectFitImages();\n  }\n}\n\n\n\n//# sourceURL=webpack:///./src/js/parts/initObjectFitImages.js?");

/***/ }),

/***/ "./src/js/parts/initOwlCarousel.js":
/*!*****************************************!*\
  !*** ./src/js/parts/initOwlCarousel.js ***!
  \*****************************************/
/*! exports provided: initOwlCarousel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initOwlCarousel\", function() { return initOwlCarousel; });\n/*------------------------------------------------------------------\n\n  Owl Carousel\n  DEPRECATED: used only for users who is not added Flickity\n\n-------------------------------------------------------------------*/\nfunction initOwlCarousel() {\n  if (typeof $.fn.owlCarousel === 'undefined') {\n    return;\n  }\n\n  var id = 0;\n  $('.owl-carousel').each(function () {\n    var className = \"carousel-\".concat(id++);\n    var autoplay = $(this).attr('data-autoplay');\n    var loop = $(this).attr('data-loop') !== 'false';\n    var stagePadding = parseFloat($(this).attr('data-stage-padding') || 0);\n    var itemPadding = parseFloat($(this).attr('data-item-padding') || 0);\n    $(this).owlCarousel({\n      loop: loop,\n      stagePadding: stagePadding,\n      dots: true,\n      autoplay: !!autoplay,\n      autoplayTimeout: autoplay,\n      autoplaySpeed: 600,\n      autoplayHoverPause: true,\n      responsive: {\n        0: {\n          items: 3\n        },\n        500: {\n          items: 4\n        },\n        992: {\n          items: 5\n        },\n        1200: {\n          items: 6\n        }\n      }\n    }).addClass(className);\n\n    if (itemPadding) {\n      $(\"<style>.\".concat(className, \" .owl-item { padding-left: \").concat(itemPadding, \"px; padding-right: \").concat(itemPadding, \"px; }</style>\")).appendTo('head');\n    }\n  }); // use Flickity instead\n\n  if (typeof window.Flickity === 'undefined') {\n    return;\n  }\n\n  $('.carousel').each(function () {\n    var className = \"carousel-\".concat(id++);\n    var autoplay = $(this).attr('data-autoplay');\n    var loop = $(this).attr('data-loop') !== 'false';\n    var stagePadding = parseFloat($(this).attr('data-stage-padding') || 70);\n    var itemPadding = parseFloat($(this).attr('data-item-padding') || 0);\n    $(this).addClass('owl-carousel').owlCarousel({\n      loop: loop,\n      stagePadding: stagePadding,\n      nav: true,\n      dots: false,\n      autoplay: !!autoplay,\n      autoplayTimeout: autoplay,\n      autoplaySpeed: 600,\n      autoplayHoverPause: true,\n      navText: ['', ''],\n      responsive: {\n        0: {\n          items: 1\n        },\n        500: {\n          items: 2\n        },\n        992: {\n          items: 3\n        },\n        1200: {\n          items: 4\n        }\n      }\n    }).addClass(className);\n\n    if (itemPadding) {\n      $(\"<style>.\".concat(className, \" .owl-item { padding-left: \").concat(itemPadding, \"px; padding-right: \").concat(itemPadding, \"px; }</style>\")).appendTo('head');\n    }\n  });\n  $('.slider').each(function () {\n    var className = \"carousel-\".concat(id++);\n    var autoplay = $(this).attr('data-autoplay');\n    var loop = $(this).attr('data-loop') !== 'false';\n    $(this).addClass('owl-carousel').owlCarousel({\n      loop: loop,\n      nav: false,\n      autoplay: !!autoplay,\n      autoplayTimeout: autoplay,\n      autoplaySpeed: 600,\n      autoplayHoverPause: true,\n      items: 1\n    }).addClass(className);\n  });\n}\n\n\n\n//# sourceURL=webpack:///./src/js/parts/initOwlCarousel.js?");

/***/ }),

/***/ "./src/js/parts/initSliderRevolution.js":
/*!**********************************************!*\
  !*** ./src/js/parts/initSliderRevolution.js ***!
  \**********************************************/
/*! exports provided: initSliderRevolution */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initSliderRevolution\", function() { return initSliderRevolution; });\n/*------------------------------------------------------------------\n\n  Slider Revolution\n\n-------------------------------------------------------------------*/\nfunction initSliderRevolution() {\n  if (typeof $.fn.revolution === 'undefined') {\n    return;\n  }\n\n  var _this = this;\n\n  $('.rs').each(function () {\n    var item = $(this); // options\n\n    var rsOptions = {\n      dottedOverlay: 'none',\n      navigationType: 'bullet',\n      navigationArrows: 'solo',\n      navigationStyle: 'preview4',\n      spinner: 'spinner4',\n      sliderType: 'standard',\n      sliderLayout: item.hasClass('rs-fullscreen') ? 'fullscreen' : 'auto',\n      delay: 9000,\n      navigation: {\n        keyboardNavigation: 'off',\n        keyboard_direction: 'horizontal',\n        mouseScrollNavigation: 'off',\n        mouseScrollReverse: 'default',\n        onHoverStop: 'off',\n        touch: {\n          touchenabled: 'on',\n          swipe_threshold: 75,\n          swipe_min_touches: 1,\n          swipe_direction: 'horizontal',\n          drag_block_vertical: false\n        },\n        arrows: {\n          enable: true,\n          style: 'hermes',\n          tmp: '<div class=\"tp-arr-allwrapper\"><div class=\"tp-arr-imgholder\"></div></div>'\n        },\n        bullets: {\n          enable: true,\n          style: 'hebe',\n          tmp: '<span class=\"tp-bullet-image\"></span>',\n          hide_onmobile: true,\n          hide_under: 600,\n          hide_onleave: true,\n          hide_delay: 200,\n          hide_delay_mobile: 1200,\n          direction: 'horizontal',\n          h_align: 'center',\n          v_align: 'bottom',\n          h_offset: 0,\n          v_offset: 30,\n          space: 5\n        }\n      },\n      viewPort: {\n        enable: true,\n        outof: 'pause',\n        visible_area: '80%',\n        presize: false\n      },\n      responsiveLevels: [1240, 1024, 778, 480],\n      visibilityLevels: [1240, 1024, 778, 480],\n      gridwidth: [1240, 1024, 778, 480],\n      gridheight: [600, 600, 500, 400],\n      lazyType: 'smart',\n      parallax: {\n        type: 'mouse',\n        origo: 'slidercenter',\n        speed: 2000,\n        levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 46, 47, 48, 49, 50, 55]\n      },\n      shadow: 0,\n      stopLoop: 'off',\n      stopAfterLoops: -1,\n      stopAtSlide: -1,\n      shuffle: 'off',\n      autoHeight: 'off',\n      hideThumbsOnMobile: 'off',\n      hideSliderAtLimit: 0,\n      hideCaptionAtLimit: 0,\n      hideAllCaptionAtLilmit: 0,\n      debugMode: false,\n      fallbacks: {\n        simplifyAll: 'off',\n        nextSlideOnWindowFocus: 'off',\n        disableFocusListener: false\n      }\n    }; // init\n\n    $(document).ready(function () {\n      var slider = item.find('.tp-banner, .rev_slider').show().revolution(rsOptions);\n      slider.on('revolution.slide.onloaded', function () {\n        _this.refresh();\n      });\n    });\n  });\n}\n\n\n\n//# sourceURL=webpack:///./src/js/parts/initSliderRevolution.js?");

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/js/main.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! D:\\Downloads\\PortfolioSite\\main\\src\\js\\main.js */\"./src/js/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/main.js?");

/***/ })

/******/ });