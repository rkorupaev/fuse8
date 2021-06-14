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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/vendor/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/lazysizes/lazysizes.js":
/*!**********************************************!*\
  !*** ../node_modules/lazysizes/lazysizes.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function(window, factory) {\n\tvar lazySizes = factory(window, window.document, Date);\n\twindow.lazySizes = lazySizes;\n\tif( true && module.exports){\n\t\tmodule.exports = lazySizes;\n\t}\n}(typeof window != 'undefined' ?\n      window : {}, function l(window, document, Date) { // Pass in the windoe Date function also for SSR because the Date class can be lost\n\t'use strict';\n\t/*jshint eqnull:true */\n\n\tvar lazysizes, lazySizesCfg;\n\n\t(function(){\n\t\tvar prop;\n\n\t\tvar lazySizesDefaults = {\n\t\t\tlazyClass: 'lazyload',\n\t\t\tloadedClass: 'lazyloaded',\n\t\t\tloadingClass: 'lazyloading',\n\t\t\tpreloadClass: 'lazypreload',\n\t\t\terrorClass: 'lazyerror',\n\t\t\t//strictClass: 'lazystrict',\n\t\t\tautosizesClass: 'lazyautosizes',\n\t\t\tsrcAttr: 'data-src',\n\t\t\tsrcsetAttr: 'data-srcset',\n\t\t\tsizesAttr: 'data-sizes',\n\t\t\t//preloadAfterLoad: false,\n\t\t\tminSize: 40,\n\t\t\tcustomMedia: {},\n\t\t\tinit: true,\n\t\t\texpFactor: 1.5,\n\t\t\thFac: 0.8,\n\t\t\tloadMode: 2,\n\t\t\tloadHidden: true,\n\t\t\tricTimeout: 0,\n\t\t\tthrottleDelay: 125,\n\t\t};\n\n\t\tlazySizesCfg = window.lazySizesConfig || window.lazysizesConfig || {};\n\n\t\tfor(prop in lazySizesDefaults){\n\t\t\tif(!(prop in lazySizesCfg)){\n\t\t\t\tlazySizesCfg[prop] = lazySizesDefaults[prop];\n\t\t\t}\n\t\t}\n\t})();\n\n\tif (!document || !document.getElementsByClassName) {\n\t\treturn {\n\t\t\tinit: function () {},\n\t\t\tcfg: lazySizesCfg,\n\t\t\tnoSupport: true,\n\t\t};\n\t}\n\n\tvar docElem = document.documentElement;\n\n\tvar supportPicture = window.HTMLPictureElement;\n\n\tvar _addEventListener = 'addEventListener';\n\n\tvar _getAttribute = 'getAttribute';\n\n\t/**\n\t * Update to bind to window because 'this' becomes null during SSR\n\t * builds.\n\t */\n\tvar addEventListener = window[_addEventListener].bind(window);\n\n\tvar setTimeout = window.setTimeout;\n\n\tvar requestAnimationFrame = window.requestAnimationFrame || setTimeout;\n\n\tvar requestIdleCallback = window.requestIdleCallback;\n\n\tvar regPicture = /^picture$/i;\n\n\tvar loadEvents = ['load', 'error', 'lazyincluded', '_lazyloaded'];\n\n\tvar regClassCache = {};\n\n\tvar forEach = Array.prototype.forEach;\n\n\tvar hasClass = function(ele, cls) {\n\t\tif(!regClassCache[cls]){\n\t\t\tregClassCache[cls] = new RegExp('(\\\\s|^)'+cls+'(\\\\s|$)');\n\t\t}\n\t\treturn regClassCache[cls].test(ele[_getAttribute]('class') || '') && regClassCache[cls];\n\t};\n\n\tvar addClass = function(ele, cls) {\n\t\tif (!hasClass(ele, cls)){\n\t\t\tele.setAttribute('class', (ele[_getAttribute]('class') || '').trim() + ' ' + cls);\n\t\t}\n\t};\n\n\tvar removeClass = function(ele, cls) {\n\t\tvar reg;\n\t\tif ((reg = hasClass(ele,cls))) {\n\t\t\tele.setAttribute('class', (ele[_getAttribute]('class') || '').replace(reg, ' '));\n\t\t}\n\t};\n\n\tvar addRemoveLoadEvents = function(dom, fn, add){\n\t\tvar action = add ? _addEventListener : 'removeEventListener';\n\t\tif(add){\n\t\t\taddRemoveLoadEvents(dom, fn);\n\t\t}\n\t\tloadEvents.forEach(function(evt){\n\t\t\tdom[action](evt, fn);\n\t\t});\n\t};\n\n\tvar triggerEvent = function(elem, name, detail, noBubbles, noCancelable){\n\t\tvar event = document.createEvent('Event');\n\n\t\tif(!detail){\n\t\t\tdetail = {};\n\t\t}\n\n\t\tdetail.instance = lazysizes;\n\n\t\tevent.initEvent(name, !noBubbles, !noCancelable);\n\n\t\tevent.detail = detail;\n\n\t\telem.dispatchEvent(event);\n\t\treturn event;\n\t};\n\n\tvar updatePolyfill = function (el, full){\n\t\tvar polyfill;\n\t\tif( !supportPicture && ( polyfill = (window.picturefill || lazySizesCfg.pf) ) ){\n\t\t\tif(full && full.src && !el[_getAttribute]('srcset')){\n\t\t\t\tel.setAttribute('srcset', full.src);\n\t\t\t}\n\t\t\tpolyfill({reevaluate: true, elements: [el]});\n\t\t} else if(full && full.src){\n\t\t\tel.src = full.src;\n\t\t}\n\t};\n\n\tvar getCSS = function (elem, style){\n\t\treturn (getComputedStyle(elem, null) || {})[style];\n\t};\n\n\tvar getWidth = function(elem, parent, width){\n\t\twidth = width || elem.offsetWidth;\n\n\t\twhile(width < lazySizesCfg.minSize && parent && !elem._lazysizesWidth){\n\t\t\twidth =  parent.offsetWidth;\n\t\t\tparent = parent.parentNode;\n\t\t}\n\n\t\treturn width;\n\t};\n\n\tvar rAF = (function(){\n\t\tvar running, waiting;\n\t\tvar firstFns = [];\n\t\tvar secondFns = [];\n\t\tvar fns = firstFns;\n\n\t\tvar run = function(){\n\t\t\tvar runFns = fns;\n\n\t\t\tfns = firstFns.length ? secondFns : firstFns;\n\n\t\t\trunning = true;\n\t\t\twaiting = false;\n\n\t\t\twhile(runFns.length){\n\t\t\t\trunFns.shift()();\n\t\t\t}\n\n\t\t\trunning = false;\n\t\t};\n\n\t\tvar rafBatch = function(fn, queue){\n\t\t\tif(running && !queue){\n\t\t\t\tfn.apply(this, arguments);\n\t\t\t} else {\n\t\t\t\tfns.push(fn);\n\n\t\t\t\tif(!waiting){\n\t\t\t\t\twaiting = true;\n\t\t\t\t\t(document.hidden ? setTimeout : requestAnimationFrame)(run);\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\n\t\trafBatch._lsFlush = run;\n\n\t\treturn rafBatch;\n\t})();\n\n\tvar rAFIt = function(fn, simple){\n\t\treturn simple ?\n\t\t\tfunction() {\n\t\t\t\trAF(fn);\n\t\t\t} :\n\t\t\tfunction(){\n\t\t\t\tvar that = this;\n\t\t\t\tvar args = arguments;\n\t\t\t\trAF(function(){\n\t\t\t\t\tfn.apply(that, args);\n\t\t\t\t});\n\t\t\t}\n\t\t;\n\t};\n\n\tvar throttle = function(fn){\n\t\tvar running;\n\t\tvar lastTime = 0;\n\t\tvar gDelay = lazySizesCfg.throttleDelay;\n\t\tvar rICTimeout = lazySizesCfg.ricTimeout;\n\t\tvar run = function(){\n\t\t\trunning = false;\n\t\t\tlastTime = Date.now();\n\t\t\tfn();\n\t\t};\n\t\tvar idleCallback = requestIdleCallback && rICTimeout > 49 ?\n\t\t\tfunction(){\n\t\t\t\trequestIdleCallback(run, {timeout: rICTimeout});\n\n\t\t\t\tif(rICTimeout !== lazySizesCfg.ricTimeout){\n\t\t\t\t\trICTimeout = lazySizesCfg.ricTimeout;\n\t\t\t\t}\n\t\t\t} :\n\t\t\trAFIt(function(){\n\t\t\t\tsetTimeout(run);\n\t\t\t}, true)\n\t\t;\n\n\t\treturn function(isPriority){\n\t\t\tvar delay;\n\n\t\t\tif((isPriority = isPriority === true)){\n\t\t\t\trICTimeout = 33;\n\t\t\t}\n\n\t\t\tif(running){\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\trunning =  true;\n\n\t\t\tdelay = gDelay - (Date.now() - lastTime);\n\n\t\t\tif(delay < 0){\n\t\t\t\tdelay = 0;\n\t\t\t}\n\n\t\t\tif(isPriority || delay < 9){\n\t\t\t\tidleCallback();\n\t\t\t} else {\n\t\t\t\tsetTimeout(idleCallback, delay);\n\t\t\t}\n\t\t};\n\t};\n\n\t//based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html\n\tvar debounce = function(func) {\n\t\tvar timeout, timestamp;\n\t\tvar wait = 99;\n\t\tvar run = function(){\n\t\t\ttimeout = null;\n\t\t\tfunc();\n\t\t};\n\t\tvar later = function() {\n\t\t\tvar last = Date.now() - timestamp;\n\n\t\t\tif (last < wait) {\n\t\t\t\tsetTimeout(later, wait - last);\n\t\t\t} else {\n\t\t\t\t(requestIdleCallback || run)(run);\n\t\t\t}\n\t\t};\n\n\t\treturn function() {\n\t\t\ttimestamp = Date.now();\n\n\t\t\tif (!timeout) {\n\t\t\t\ttimeout = setTimeout(later, wait);\n\t\t\t}\n\t\t};\n\t};\n\n\tvar loader = (function(){\n\t\tvar preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;\n\n\t\tvar eLvW, elvH, eLtop, eLleft, eLright, eLbottom, isBodyHidden;\n\n\t\tvar regImg = /^img$/i;\n\t\tvar regIframe = /^iframe$/i;\n\n\t\tvar supportScroll = ('onscroll' in window) && !(/(gle|ing)bot/.test(navigator.userAgent));\n\n\t\tvar shrinkExpand = 0;\n\t\tvar currentExpand = 0;\n\n\t\tvar isLoading = 0;\n\t\tvar lowRuns = -1;\n\n\t\tvar resetPreloading = function(e){\n\t\t\tisLoading--;\n\t\t\tif(!e || isLoading < 0 || !e.target){\n\t\t\t\tisLoading = 0;\n\t\t\t}\n\t\t};\n\n\t\tvar isVisible = function (elem) {\n\t\t\tif (isBodyHidden == null) {\n\t\t\t\tisBodyHidden = getCSS(document.body, 'visibility') == 'hidden';\n\t\t\t}\n\n\t\t\treturn isBodyHidden || !(getCSS(elem.parentNode, 'visibility') == 'hidden' && getCSS(elem, 'visibility') == 'hidden');\n\t\t};\n\n\t\tvar isNestedVisible = function(elem, elemExpand){\n\t\t\tvar outerRect;\n\t\t\tvar parent = elem;\n\t\t\tvar visible = isVisible(elem);\n\n\t\t\teLtop -= elemExpand;\n\t\t\teLbottom += elemExpand;\n\t\t\teLleft -= elemExpand;\n\t\t\teLright += elemExpand;\n\n\t\t\twhile(visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem){\n\t\t\t\tvisible = ((getCSS(parent, 'opacity') || 1) > 0);\n\n\t\t\t\tif(visible && getCSS(parent, 'overflow') != 'visible'){\n\t\t\t\t\touterRect = parent.getBoundingClientRect();\n\t\t\t\t\tvisible = eLright > outerRect.left &&\n\t\t\t\t\t\teLleft < outerRect.right &&\n\t\t\t\t\t\teLbottom > outerRect.top - 1 &&\n\t\t\t\t\t\teLtop < outerRect.bottom + 1\n\t\t\t\t\t;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\treturn visible;\n\t\t};\n\n\t\tvar checkElements = function() {\n\t\t\tvar eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal,\n\t\t\t\tbeforeExpandVal, defaultExpand, preloadExpand, hFac;\n\t\t\tvar lazyloadElems = lazysizes.elements;\n\n\t\t\tif((loadMode = lazySizesCfg.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)){\n\n\t\t\t\ti = 0;\n\n\t\t\t\tlowRuns++;\n\n\t\t\t\tfor(; i < eLlen; i++){\n\n\t\t\t\t\tif(!lazyloadElems[i] || lazyloadElems[i]._lazyRace){continue;}\n\n\t\t\t\t\tif(!supportScroll || (lazysizes.prematureUnveil && lazysizes.prematureUnveil(lazyloadElems[i]))){unveilElement(lazyloadElems[i]);continue;}\n\n\t\t\t\t\tif(!(elemExpandVal = lazyloadElems[i][_getAttribute]('data-expand')) || !(elemExpand = elemExpandVal * 1)){\n\t\t\t\t\t\telemExpand = currentExpand;\n\t\t\t\t\t}\n\n\t\t\t\t\tif (!defaultExpand) {\n\t\t\t\t\t\tdefaultExpand = (!lazySizesCfg.expand || lazySizesCfg.expand < 1) ?\n\t\t\t\t\t\t\tdocElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370 :\n\t\t\t\t\t\t\tlazySizesCfg.expand;\n\n\t\t\t\t\t\tlazysizes._defEx = defaultExpand;\n\n\t\t\t\t\t\tpreloadExpand = defaultExpand * lazySizesCfg.expFactor;\n\t\t\t\t\t\thFac = lazySizesCfg.hFac;\n\t\t\t\t\t\tisBodyHidden = null;\n\n\t\t\t\t\t\tif(currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden){\n\t\t\t\t\t\t\tcurrentExpand = preloadExpand;\n\t\t\t\t\t\t\tlowRuns = 0;\n\t\t\t\t\t\t} else if(loadMode > 1 && lowRuns > 1 && isLoading < 6){\n\t\t\t\t\t\t\tcurrentExpand = defaultExpand;\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tcurrentExpand = shrinkExpand;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\tif(beforeExpandVal !== elemExpand){\n\t\t\t\t\t\teLvW = innerWidth + (elemExpand * hFac);\n\t\t\t\t\t\telvH = innerHeight + elemExpand;\n\t\t\t\t\t\telemNegativeExpand = elemExpand * -1;\n\t\t\t\t\t\tbeforeExpandVal = elemExpand;\n\t\t\t\t\t}\n\n\t\t\t\t\trect = lazyloadElems[i].getBoundingClientRect();\n\n\t\t\t\t\tif ((eLbottom = rect.bottom) >= elemNegativeExpand &&\n\t\t\t\t\t\t(eLtop = rect.top) <= elvH &&\n\t\t\t\t\t\t(eLright = rect.right) >= elemNegativeExpand * hFac &&\n\t\t\t\t\t\t(eLleft = rect.left) <= eLvW &&\n\t\t\t\t\t\t(eLbottom || eLright || eLleft || eLtop) &&\n\t\t\t\t\t\t(lazySizesCfg.loadHidden || isVisible(lazyloadElems[i])) &&\n\t\t\t\t\t\t((isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4)) || isNestedVisible(lazyloadElems[i], elemExpand))){\n\t\t\t\t\t\tunveilElement(lazyloadElems[i]);\n\t\t\t\t\t\tloadedSomething = true;\n\t\t\t\t\t\tif(isLoading > 9){break;}\n\t\t\t\t\t} else if(!loadedSomething && isCompleted && !autoLoadElem &&\n\t\t\t\t\t\tisLoading < 4 && lowRuns < 4 && loadMode > 2 &&\n\t\t\t\t\t\t(preloadElems[0] || lazySizesCfg.preloadAfterLoad) &&\n\t\t\t\t\t\t(preloadElems[0] || (!elemExpandVal && ((eLbottom || eLright || eLleft || eLtop) || lazyloadElems[i][_getAttribute](lazySizesCfg.sizesAttr) != 'auto')))){\n\t\t\t\t\t\tautoLoadElem = preloadElems[0] || lazyloadElems[i];\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tif(autoLoadElem && !loadedSomething){\n\t\t\t\t\tunveilElement(autoLoadElem);\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\n\t\tvar throttledCheckElements = throttle(checkElements);\n\n\t\tvar switchLoadingClass = function(e){\n\t\t\tvar elem = e.target;\n\n\t\t\tif (elem._lazyCache) {\n\t\t\t\tdelete elem._lazyCache;\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tresetPreloading(e);\n\t\t\taddClass(elem, lazySizesCfg.loadedClass);\n\t\t\tremoveClass(elem, lazySizesCfg.loadingClass);\n\t\t\taddRemoveLoadEvents(elem, rafSwitchLoadingClass);\n\t\t\ttriggerEvent(elem, 'lazyloaded');\n\t\t};\n\t\tvar rafedSwitchLoadingClass = rAFIt(switchLoadingClass);\n\t\tvar rafSwitchLoadingClass = function(e){\n\t\t\trafedSwitchLoadingClass({target: e.target});\n\t\t};\n\n\t\tvar changeIframeSrc = function(elem, src){\n\t\t\ttry {\n\t\t\t\telem.contentWindow.location.replace(src);\n\t\t\t} catch(e){\n\t\t\t\telem.src = src;\n\t\t\t}\n\t\t};\n\n\t\tvar handleSources = function(source){\n\t\t\tvar customMedia;\n\n\t\t\tvar sourceSrcset = source[_getAttribute](lazySizesCfg.srcsetAttr);\n\n\t\t\tif( (customMedia = lazySizesCfg.customMedia[source[_getAttribute]('data-media') || source[_getAttribute]('media')]) ){\n\t\t\t\tsource.setAttribute('media', customMedia);\n\t\t\t}\n\n\t\t\tif(sourceSrcset){\n\t\t\t\tsource.setAttribute('srcset', sourceSrcset);\n\t\t\t}\n\t\t};\n\n\t\tvar lazyUnveil = rAFIt(function (elem, detail, isAuto, sizes, isImg){\n\t\t\tvar src, srcset, parent, isPicture, event, firesLoad;\n\n\t\t\tif(!(event = triggerEvent(elem, 'lazybeforeunveil', detail)).defaultPrevented){\n\n\t\t\t\tif(sizes){\n\t\t\t\t\tif(isAuto){\n\t\t\t\t\t\taddClass(elem, lazySizesCfg.autosizesClass);\n\t\t\t\t\t} else {\n\t\t\t\t\t\telem.setAttribute('sizes', sizes);\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tsrcset = elem[_getAttribute](lazySizesCfg.srcsetAttr);\n\t\t\t\tsrc = elem[_getAttribute](lazySizesCfg.srcAttr);\n\n\t\t\t\tif(isImg) {\n\t\t\t\t\tparent = elem.parentNode;\n\t\t\t\t\tisPicture = parent && regPicture.test(parent.nodeName || '');\n\t\t\t\t}\n\n\t\t\t\tfiresLoad = detail.firesLoad || (('src' in elem) && (srcset || src || isPicture));\n\n\t\t\t\tevent = {target: elem};\n\n\t\t\t\taddClass(elem, lazySizesCfg.loadingClass);\n\n\t\t\t\tif(firesLoad){\n\t\t\t\t\tclearTimeout(resetPreloadingTimer);\n\t\t\t\t\tresetPreloadingTimer = setTimeout(resetPreloading, 2500);\n\t\t\t\t\taddRemoveLoadEvents(elem, rafSwitchLoadingClass, true);\n\t\t\t\t}\n\n\t\t\t\tif(isPicture){\n\t\t\t\t\tforEach.call(parent.getElementsByTagName('source'), handleSources);\n\t\t\t\t}\n\n\t\t\t\tif(srcset){\n\t\t\t\t\telem.setAttribute('srcset', srcset);\n\t\t\t\t} else if(src && !isPicture){\n\t\t\t\t\tif(regIframe.test(elem.nodeName)){\n\t\t\t\t\t\tchangeIframeSrc(elem, src);\n\t\t\t\t\t} else {\n\t\t\t\t\t\telem.src = src;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tif(isImg && (srcset || isPicture)){\n\t\t\t\t\tupdatePolyfill(elem, {src: src});\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tif(elem._lazyRace){\n\t\t\t\tdelete elem._lazyRace;\n\t\t\t}\n\t\t\tremoveClass(elem, lazySizesCfg.lazyClass);\n\n\t\t\trAF(function(){\n\t\t\t\t// Part of this can be removed as soon as this fix is older: https://bugs.chromium.org/p/chromium/issues/detail?id=7731 (2015)\n\t\t\t\tvar isLoaded = elem.complete && elem.naturalWidth > 1;\n\n\t\t\t\tif( !firesLoad || isLoaded){\n\t\t\t\t\tif (isLoaded) {\n\t\t\t\t\t\taddClass(elem, 'ls-is-cached');\n\t\t\t\t\t}\n\t\t\t\t\tswitchLoadingClass(event);\n\t\t\t\t\telem._lazyCache = true;\n\t\t\t\t\tsetTimeout(function(){\n\t\t\t\t\t\tif ('_lazyCache' in elem) {\n\t\t\t\t\t\t\tdelete elem._lazyCache;\n\t\t\t\t\t\t}\n\t\t\t\t\t}, 9);\n\t\t\t\t}\n\t\t\t\tif (elem.loading == 'lazy') {\n\t\t\t\t\tisLoading--;\n\t\t\t\t}\n\t\t\t}, true);\n\t\t});\n\n\t\tvar unveilElement = function (elem){\n\t\t\tif (elem._lazyRace) {return;}\n\t\t\tvar detail;\n\n\t\t\tvar isImg = regImg.test(elem.nodeName);\n\n\t\t\t//allow using sizes=\"auto\", but don't use. it's invalid. Use data-sizes=\"auto\" or a valid value for sizes instead (i.e.: sizes=\"80vw\")\n\t\t\tvar sizes = isImg && (elem[_getAttribute](lazySizesCfg.sizesAttr) || elem[_getAttribute]('sizes'));\n\t\t\tvar isAuto = sizes == 'auto';\n\n\t\t\tif( (isAuto || !isCompleted) && isImg && (elem[_getAttribute]('src') || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesCfg.errorClass) && hasClass(elem, lazySizesCfg.lazyClass)){return;}\n\n\t\t\tdetail = triggerEvent(elem, 'lazyunveilread').detail;\n\n\t\t\tif(isAuto){\n\t\t\t\t autoSizer.updateElem(elem, true, elem.offsetWidth);\n\t\t\t}\n\n\t\t\telem._lazyRace = true;\n\t\t\tisLoading++;\n\n\t\t\tlazyUnveil(elem, detail, isAuto, sizes, isImg);\n\t\t};\n\n\t\tvar afterScroll = debounce(function(){\n\t\t\tlazySizesCfg.loadMode = 3;\n\t\t\tthrottledCheckElements();\n\t\t});\n\n\t\tvar altLoadmodeScrollListner = function(){\n\t\t\tif(lazySizesCfg.loadMode == 3){\n\t\t\t\tlazySizesCfg.loadMode = 2;\n\t\t\t}\n\t\t\tafterScroll();\n\t\t};\n\n\t\tvar onload = function(){\n\t\t\tif(isCompleted){return;}\n\t\t\tif(Date.now() - started < 999){\n\t\t\t\tsetTimeout(onload, 999);\n\t\t\t\treturn;\n\t\t\t}\n\n\n\t\t\tisCompleted = true;\n\n\t\t\tlazySizesCfg.loadMode = 3;\n\n\t\t\tthrottledCheckElements();\n\n\t\t\taddEventListener('scroll', altLoadmodeScrollListner, true);\n\t\t};\n\n\t\treturn {\n\t\t\t_: function(){\n\t\t\t\tstarted = Date.now();\n\n\t\t\t\tlazysizes.elements = document.getElementsByClassName(lazySizesCfg.lazyClass);\n\t\t\t\tpreloadElems = document.getElementsByClassName(lazySizesCfg.lazyClass + ' ' + lazySizesCfg.preloadClass);\n\n\t\t\t\taddEventListener('scroll', throttledCheckElements, true);\n\n\t\t\t\taddEventListener('resize', throttledCheckElements, true);\n\n\t\t\t\taddEventListener('pageshow', function (e) {\n\t\t\t\t\tif (e.persisted) {\n\t\t\t\t\t\tvar loadingElements = document.querySelectorAll('.' + lazySizesCfg.loadingClass);\n\n\t\t\t\t\t\tif (loadingElements.length && loadingElements.forEach) {\n\t\t\t\t\t\t\trequestAnimationFrame(function () {\n\t\t\t\t\t\t\t\tloadingElements.forEach( function (img) {\n\t\t\t\t\t\t\t\t\tif (img.complete) {\n\t\t\t\t\t\t\t\t\t\tunveilElement(img);\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t});\n\n\t\t\t\tif(window.MutationObserver){\n\t\t\t\t\tnew MutationObserver( throttledCheckElements ).observe( docElem, {childList: true, subtree: true, attributes: true} );\n\t\t\t\t} else {\n\t\t\t\t\tdocElem[_addEventListener]('DOMNodeInserted', throttledCheckElements, true);\n\t\t\t\t\tdocElem[_addEventListener]('DOMAttrModified', throttledCheckElements, true);\n\t\t\t\t\tsetInterval(throttledCheckElements, 999);\n\t\t\t\t}\n\n\t\t\t\taddEventListener('hashchange', throttledCheckElements, true);\n\n\t\t\t\t//, 'fullscreenchange'\n\t\t\t\t['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend'].forEach(function(name){\n\t\t\t\t\tdocument[_addEventListener](name, throttledCheckElements, true);\n\t\t\t\t});\n\n\t\t\t\tif((/d$|^c/.test(document.readyState))){\n\t\t\t\t\tonload();\n\t\t\t\t} else {\n\t\t\t\t\taddEventListener('load', onload);\n\t\t\t\t\tdocument[_addEventListener]('DOMContentLoaded', throttledCheckElements);\n\t\t\t\t\tsetTimeout(onload, 20000);\n\t\t\t\t}\n\n\t\t\t\tif(lazysizes.elements.length){\n\t\t\t\t\tcheckElements();\n\t\t\t\t\trAF._lsFlush();\n\t\t\t\t} else {\n\t\t\t\t\tthrottledCheckElements();\n\t\t\t\t}\n\t\t\t},\n\t\t\tcheckElems: throttledCheckElements,\n\t\t\tunveil: unveilElement,\n\t\t\t_aLSL: altLoadmodeScrollListner,\n\t\t};\n\t})();\n\n\n\tvar autoSizer = (function(){\n\t\tvar autosizesElems;\n\n\t\tvar sizeElement = rAFIt(function(elem, parent, event, width){\n\t\t\tvar sources, i, len;\n\t\t\telem._lazysizesWidth = width;\n\t\t\twidth += 'px';\n\n\t\t\telem.setAttribute('sizes', width);\n\n\t\t\tif(regPicture.test(parent.nodeName || '')){\n\t\t\t\tsources = parent.getElementsByTagName('source');\n\t\t\t\tfor(i = 0, len = sources.length; i < len; i++){\n\t\t\t\t\tsources[i].setAttribute('sizes', width);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tif(!event.detail.dataAttr){\n\t\t\t\tupdatePolyfill(elem, event.detail);\n\t\t\t}\n\t\t});\n\t\tvar getSizeElement = function (elem, dataAttr, width){\n\t\t\tvar event;\n\t\t\tvar parent = elem.parentNode;\n\n\t\t\tif(parent){\n\t\t\t\twidth = getWidth(elem, parent, width);\n\t\t\t\tevent = triggerEvent(elem, 'lazybeforesizes', {width: width, dataAttr: !!dataAttr});\n\n\t\t\t\tif(!event.defaultPrevented){\n\t\t\t\t\twidth = event.detail.width;\n\n\t\t\t\t\tif(width && width !== elem._lazysizesWidth){\n\t\t\t\t\t\tsizeElement(elem, parent, event, width);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\n\t\tvar updateElementsSizes = function(){\n\t\t\tvar i;\n\t\t\tvar len = autosizesElems.length;\n\t\t\tif(len){\n\t\t\t\ti = 0;\n\n\t\t\t\tfor(; i < len; i++){\n\t\t\t\t\tgetSizeElement(autosizesElems[i]);\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\n\t\tvar debouncedUpdateElementsSizes = debounce(updateElementsSizes);\n\n\t\treturn {\n\t\t\t_: function(){\n\t\t\t\tautosizesElems = document.getElementsByClassName(lazySizesCfg.autosizesClass);\n\t\t\t\taddEventListener('resize', debouncedUpdateElementsSizes);\n\t\t\t},\n\t\t\tcheckElems: debouncedUpdateElementsSizes,\n\t\t\tupdateElem: getSizeElement\n\t\t};\n\t})();\n\n\tvar init = function(){\n\t\tif(!init.i && document.getElementsByClassName){\n\t\t\tinit.i = true;\n\t\t\tautoSizer._();\n\t\t\tloader._();\n\t\t}\n\t};\n\n\tsetTimeout(function(){\n\t\tif(lazySizesCfg.init){\n\t\t\tinit();\n\t\t}\n\t});\n\n\tlazysizes = {\n\t\tcfg: lazySizesCfg,\n\t\tautoSizer: autoSizer,\n\t\tloader: loader,\n\t\tinit: init,\n\t\tuP: updatePolyfill,\n\t\taC: addClass,\n\t\trC: removeClass,\n\t\thC: hasClass,\n\t\tfire: triggerEvent,\n\t\tgW: getWidth,\n\t\trAF: rAF,\n\t};\n\n\treturn lazysizes;\n}\n));\n\n\n//# sourceURL=webpack:///../node_modules/lazysizes/lazysizes.js?");

/***/ }),

/***/ "../node_modules/lazysizes/plugins/parent-fit/ls.parent-fit.js":
/*!*********************************************************************!*\
  !*** ../node_modules/lazysizes/plugins/parent-fit/ls.parent-fit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function(window, factory) {\n\tif(!window) {return;}\n\tvar globalInstall = function(){\n\t\tfactory(window.lazySizes);\n\t\twindow.removeEventListener('lazyunveilread', globalInstall, true);\n\t};\n\n\tfactory = factory.bind(null, window, window.document);\n\n\tif( true && module.exports){\n\t\tfactory(__webpack_require__(/*! lazysizes */ \"../node_modules/lazysizes/lazysizes.js\"));\n\t} else if(window.lazySizes) {\n\t\tglobalInstall();\n\t} else {\n\t\twindow.addEventListener('lazyunveilread', globalInstall, true);\n\t}\n}(typeof window != 'undefined' ?\n\twindow : 0, function(window, document, lazySizes) {\n\t'use strict';\n\n\tif(!window.addEventListener){return;}\n\n\tvar regDescriptors = /\\s+(\\d+)(w|h)\\s+(\\d+)(w|h)/;\n\tvar regCssFit = /parent-fit[\"']*\\s*:\\s*[\"']*(contain|cover|width)/;\n\tvar regCssObject = /parent-container[\"']*\\s*:\\s*[\"']*(.+?)(?=(\\s|$|,|'|\"|;))/;\n\tvar regPicture = /^picture$/i;\n\tvar cfg = lazySizes.cfg;\n\n\tvar getCSS = function (elem){\n\t\treturn (getComputedStyle(elem, null) || {});\n\t};\n\n\tvar parentFit = {\n\n\t\tgetParent: function(element, parentSel){\n\t\t\tvar parent = element;\n\t\t\tvar parentNode = element.parentNode;\n\n\t\t\tif((!parentSel || parentSel == 'prev') && parentNode && regPicture.test(parentNode.nodeName || '')){\n\t\t\t\tparentNode = parentNode.parentNode;\n\t\t\t}\n\n\t\t\tif(parentSel != 'self'){\n\t\t\t\tif(parentSel == 'prev'){\n\t\t\t\t\tparent = element.previousElementSibling;\n\t\t\t\t} else if(parentSel && (parentNode.closest || window.jQuery)){\n\t\t\t\t\tparent = (parentNode.closest ?\n\t\t\t\t\t\t\tparentNode.closest(parentSel) :\n\t\t\t\t\t\t\tjQuery(parentNode).closest(parentSel)[0]) ||\n\t\t\t\t\t\tparentNode\n\t\t\t\t\t;\n\t\t\t\t} else {\n\t\t\t\t\tparent = parentNode;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\treturn parent;\n\t\t},\n\n\t\tgetFit: function(element){\n\t\t\tvar tmpMatch, parentObj;\n\t\t\tvar css = getCSS(element);\n\t\t\tvar content = css.content || css.fontFamily;\n\t\t\tvar obj = {\n\t\t\t\tfit: element._lazysizesParentFit || element.getAttribute('data-parent-fit')\n\t\t\t};\n\n\t\t\tif(!obj.fit && content && (tmpMatch = content.match(regCssFit))){\n\t\t\t\tobj.fit = tmpMatch[1];\n\t\t\t}\n\n\t\t\tif(obj.fit){\n\t\t\t\tparentObj = element._lazysizesParentContainer || element.getAttribute('data-parent-container');\n\n\t\t\t\tif(!parentObj && content && (tmpMatch = content.match(regCssObject))){\n\t\t\t\t\tparentObj = tmpMatch[1];\n\t\t\t\t}\n\n\t\t\t\tobj.parent = parentFit.getParent(element, parentObj);\n\n\n\t\t\t} else {\n\t\t\t\tobj.fit = css.objectFit;\n\t\t\t}\n\n\t\t\treturn obj;\n\t\t},\n\n\t\tgetImageRatio: function(element){\n\t\t\tvar i, srcset, media, ratio, match, width, height;\n\t\t\tvar parent = element.parentNode;\n\t\t\tvar elements = parent && regPicture.test(parent.nodeName || '') ?\n\t\t\t\t\tparent.querySelectorAll('source, img') :\n\t\t\t\t\t[element]\n\t\t\t\t;\n\n\t\t\tfor(i = 0; i < elements.length; i++){\n\t\t\t\telement = elements[i];\n\t\t\t\tsrcset = element.getAttribute(cfg.srcsetAttr) || element.getAttribute('srcset') || element.getAttribute('data-pfsrcset') || element.getAttribute('data-risrcset') || '';\n\t\t\t\tmedia = element._lsMedia || element.getAttribute('media');\n\t\t\t\tmedia = cfg.customMedia[element.getAttribute('data-media') || media] || media;\n\n\t\t\t\tif(srcset && (!media || (window.matchMedia && matchMedia(media) || {}).matches )){\n\t\t\t\t\tratio = parseFloat(element.getAttribute('data-aspectratio'));\n\n\t\t\t\t\tif (!ratio) {\n\t\t\t\t\t\tmatch = srcset.match(regDescriptors);\n\n\t\t\t\t\t\tif (match) {\n\t\t\t\t\t\t\tif(match[2] == 'w'){\n\t\t\t\t\t\t\t\twidth = match[1];\n\t\t\t\t\t\t\t\theight = match[3];\n\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\twidth = match[3];\n\t\t\t\t\t\t\t\theight = match[1];\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\twidth = element.getAttribute('width');\n\t\t\t\t\t\t\theight = element.getAttribute('height');\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tratio = width / height;\n\t\t\t\t\t}\n\n\t\t\t\t\tbreak;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\treturn ratio;\n\t\t},\n\n\t\tcalculateSize: function(element, width){\n\t\t\tvar displayRatio, height, imageRatio, retWidth;\n\t\t\tvar fitObj = this.getFit(element);\n\t\t\tvar fit = fitObj.fit;\n\t\t\tvar fitElem = fitObj.parent;\n\n\t\t\tif(fit != 'width' && ((fit != 'contain' && fit != 'cover') || !(imageRatio = this.getImageRatio(element)))){\n\t\t\t\treturn width;\n\t\t\t}\n\n\t\t\tif(fitElem){\n\t\t\t\twidth = fitElem.clientWidth;\n\t\t\t} else {\n\t\t\t\tfitElem = element;\n\t\t\t}\n\n\t\t\tretWidth = width;\n\n\t\t\tif(fit == 'width'){\n\t\t\t\tretWidth = width;\n\t\t\t} else {\n\t\t\t\theight = fitElem.clientHeight;\n\n\t\t\t\tif((displayRatio =  width / height) && ((fit == 'cover' && displayRatio < imageRatio) || (fit == 'contain' && displayRatio > imageRatio))){\n\t\t\t\t\tretWidth = width * (imageRatio / displayRatio);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\treturn retWidth;\n\t\t}\n\t};\n\n\tlazySizes.parentFit = parentFit;\n\n\tdocument.addEventListener('lazybeforesizes', function(e){\n\t\tif(e.defaultPrevented || e.detail.instance != lazySizes){return;}\n\n\t\tvar element = e.target;\n\t\te.detail.width = parentFit.calculateSize(element, e.detail.width);\n\t});\n}));\n\n\n//# sourceURL=webpack:///../node_modules/lazysizes/plugins/parent-fit/ls.parent-fit.js?");

/***/ }),

/***/ "./js/vendor/index.js":
/*!****************************!*\
  !*** ./js/vendor/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lazysizes */ \"../node_modules/lazysizes/lazysizes.js\");\n/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lazysizes/plugins/parent-fit/ls.parent-fit */ \"../node_modules/lazysizes/plugins/parent-fit/ls.parent-fit.js\");\n/* harmony import */ var lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_1__);\n // import a plugin\n\n\n\n//# sourceURL=webpack:///./js/vendor/index.js?");

/***/ })

/******/ });