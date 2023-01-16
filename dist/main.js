/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/docs/types.ts":
/*!***************************!*\
  !*** ./src/docs/types.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mesTypes": () => (/* binding */ mesTypes)
/* harmony export */ });
/**
 * Partie 1 - Types
 */
var a = 'Hello les fullstack JS.';
var b = 42;
var c = true;
var d = null;
var e = ['a', 'b', 'c'];
var f = ['d', 'e', 'f'];
var g = [1, 2, 3, 4];
var h = ['Hello', true, 21, [], {}, function () { }];
var i = {};
var j = { firstname: 'Quentin', lastname: 'Geerts' };
var k = { coucou: 'Hello' };
var l = new Date();
var m = function () { };
var n = function () { };
var o = function (i, s, b) { return ['a', 'b']; };
var p = function () { throw new Error('Not implemented'); };
var q = 'a';
q = 1;
q = true;
// const r: HTMLSpanElement = new HTMLSpanElement();
// const s: Element = new Element();
var mesTypes = { a: a, b: b, c: c, d: d, e: e, f: f, g: g, h: h, i: i, j: j, k: k, l: l, m: m, n: n, o: o, p: p, q: q };
// Export grâce à export, un objet lambda qui contiendra toutes les variables
// Ce qui par la suite nous évitera des erreurs de nommages de variables déjà existantes
// Attention à l'indexation
var ob = { 0: 'Quentin', 1: 42, 2: true }; // Tableau classique (clef: number)
console.log(ob[0]); // output : 'Quentin'
// L'indexation transforme fictivement mon objet en tableau associatif
var obj = { firstname: 'Quentin', lastname: 'Geerts', age: 26 };
console.log(obj.firstname);
console.log(obj['firstname']);
// Attention que la dernière version est la moins propre
// → dangereux en cas de undefined ou unknown
// ✏ Exercice 01


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
/************************************************************************/
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _docs_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docs/types */ "./src/docs/types.ts");
/**
 * Partie 1 - Types
 */
console.warn("Partie 1 - Types");

console.log('mesTypes.a :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.a);
console.log('mesTypes.b :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.b);
console.log('mesTypes.c :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.c);
console.log('mesTypes.d :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.d);
console.log('mesTypes.e :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.e);
console.log('mesTypes.f :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.f);
console.log('mesTypes.g :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.g);
console.log('mesTypes.h :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.h);
console.log('mesTypes.i :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.i);
console.log('mesTypes.j :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.j);
console.log('mesTypes.k :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.k);
console.log('mesTypes.l :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.l);
console.log('mesTypes.m :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.m);
console.log('mesTypes.n :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.n);
console.log('mesTypes.o :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.o);
console.log('mesTypes.p :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.p);
console.log('mesTypes.q :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.q);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGlCQUFpQjtBQUNuRDtBQUNBLFVBQVU7QUFDVixVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08saUJBQWlCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0NBQWdDO0FBQzNDLG9CQUFvQjtBQUNwQjtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDcENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUN3QztBQUN4QywrQkFBK0IsbURBQVU7QUFDekMsK0JBQStCLG1EQUFVO0FBQ3pDLCtCQUErQixtREFBVTtBQUN6QywrQkFBK0IsbURBQVU7QUFDekMsK0JBQStCLG1EQUFVO0FBQ3pDLCtCQUErQixtREFBVTtBQUN6QywrQkFBK0IsbURBQVU7QUFDekMsK0JBQStCLG1EQUFVO0FBQ3pDLCtCQUErQixtREFBVTtBQUN6QywrQkFBK0IsbURBQVU7QUFDekMsK0JBQStCLG1EQUFVO0FBQ3pDLCtCQUErQixtREFBVTtBQUN6QywrQkFBK0IsbURBQVU7QUFDekMsK0JBQStCLG1EQUFVO0FBQ3pDLCtCQUErQixtREFBVTtBQUN6QywrQkFBK0IsbURBQVU7QUFDekMsK0JBQStCLG1EQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2RvY3MvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBQYXJ0aWUgMSAtIFR5cGVzXHJcbiAqL1xyXG52YXIgYSA9ICdIZWxsbyBsZXMgZnVsbHN0YWNrIEpTLic7XHJcbnZhciBiID0gNDI7XHJcbnZhciBjID0gdHJ1ZTtcclxudmFyIGQgPSBudWxsO1xyXG52YXIgZSA9IFsnYScsICdiJywgJ2MnXTtcclxudmFyIGYgPSBbJ2QnLCAnZScsICdmJ107XHJcbnZhciBnID0gWzEsIDIsIDMsIDRdO1xyXG52YXIgaCA9IFsnSGVsbG8nLCB0cnVlLCAyMSwgW10sIHt9LCBmdW5jdGlvbiAoKSB7IH1dO1xyXG52YXIgaSA9IHt9O1xyXG52YXIgaiA9IHsgZmlyc3RuYW1lOiAnUXVlbnRpbicsIGxhc3RuYW1lOiAnR2VlcnRzJyB9O1xyXG52YXIgayA9IHsgY291Y291OiAnSGVsbG8nIH07XHJcbnZhciBsID0gbmV3IERhdGUoKTtcclxudmFyIG0gPSBmdW5jdGlvbiAoKSB7IH07XHJcbnZhciBuID0gZnVuY3Rpb24gKCkgeyB9O1xyXG52YXIgbyA9IGZ1bmN0aW9uIChpLCBzLCBiKSB7IHJldHVybiBbJ2EnLCAnYiddOyB9O1xyXG52YXIgcCA9IGZ1bmN0aW9uICgpIHsgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW1wbGVtZW50ZWQnKTsgfTtcclxudmFyIHEgPSAnYSc7XHJcbnEgPSAxO1xyXG5xID0gdHJ1ZTtcclxuLy8gY29uc3QgcjogSFRNTFNwYW5FbGVtZW50ID0gbmV3IEhUTUxTcGFuRWxlbWVudCgpO1xyXG4vLyBjb25zdCBzOiBFbGVtZW50ID0gbmV3IEVsZW1lbnQoKTtcclxuZXhwb3J0IHZhciBtZXNUeXBlcyA9IHsgYTogYSwgYjogYiwgYzogYywgZDogZCwgZTogZSwgZjogZiwgZzogZywgaDogaCwgaTogaSwgajogaiwgazogaywgbDogbCwgbTogbSwgbjogbiwgbzogbywgcDogcCwgcTogcSB9O1xyXG4vLyBFeHBvcnQgZ3LDomNlIMOgIGV4cG9ydCwgdW4gb2JqZXQgbGFtYmRhIHF1aSBjb250aWVuZHJhIHRvdXRlcyBsZXMgdmFyaWFibGVzXHJcbi8vIENlIHF1aSBwYXIgbGEgc3VpdGUgbm91cyDDqXZpdGVyYSBkZXMgZXJyZXVycyBkZSBub21tYWdlcyBkZSB2YXJpYWJsZXMgZMOpasOgIGV4aXN0YW50ZXNcclxuLy8gQXR0ZW50aW9uIMOgIGwnaW5kZXhhdGlvblxyXG52YXIgb2IgPSB7IDA6ICdRdWVudGluJywgMTogNDIsIDI6IHRydWUgfTsgLy8gVGFibGVhdSBjbGFzc2lxdWUgKGNsZWY6IG51bWJlcilcclxuY29uc29sZS5sb2cob2JbMF0pOyAvLyBvdXRwdXQgOiAnUXVlbnRpbidcclxuLy8gTCdpbmRleGF0aW9uIHRyYW5zZm9ybWUgZmljdGl2ZW1lbnQgbW9uIG9iamV0IGVuIHRhYmxlYXUgYXNzb2NpYXRpZlxyXG52YXIgb2JqID0geyBmaXJzdG5hbWU6ICdRdWVudGluJywgbGFzdG5hbWU6ICdHZWVydHMnLCBhZ2U6IDI2IH07XHJcbmNvbnNvbGUubG9nKG9iai5maXJzdG5hbWUpO1xyXG5jb25zb2xlLmxvZyhvYmpbJ2ZpcnN0bmFtZSddKTtcclxuLy8gQXR0ZW50aW9uIHF1ZSBsYSBkZXJuacOocmUgdmVyc2lvbiBlc3QgbGEgbW9pbnMgcHJvcHJlXHJcbi8vIOKGkiBkYW5nZXJldXggZW4gY2FzIGRlIHVuZGVmaW5lZCBvdSB1bmtub3duXHJcbi8vIOKcjyBFeGVyY2ljZSAwMVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKlxyXG4gKiBQYXJ0aWUgMSAtIFR5cGVzXHJcbiAqL1xyXG5jb25zb2xlLndhcm4oXCJQYXJ0aWUgMSAtIFR5cGVzXCIpO1xyXG5pbXBvcnQgeyBtZXNUeXBlcyB9IGZyb20gXCIuL2RvY3MvdHlwZXNcIjtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmEgOj4+ICcsIG1lc1R5cGVzLmEpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuYiA6Pj4gJywgbWVzVHlwZXMuYik7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5jIDo+PiAnLCBtZXNUeXBlcy5jKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmQgOj4+ICcsIG1lc1R5cGVzLmQpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuZSA6Pj4gJywgbWVzVHlwZXMuZSk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5mIDo+PiAnLCBtZXNUeXBlcy5mKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmcgOj4+ICcsIG1lc1R5cGVzLmcpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuaCA6Pj4gJywgbWVzVHlwZXMuaCk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5pIDo+PiAnLCBtZXNUeXBlcy5pKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmogOj4+ICcsIG1lc1R5cGVzLmopO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuayA6Pj4gJywgbWVzVHlwZXMuayk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5sIDo+PiAnLCBtZXNUeXBlcy5sKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLm0gOj4+ICcsIG1lc1R5cGVzLm0pO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMubiA6Pj4gJywgbWVzVHlwZXMubik7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5vIDo+PiAnLCBtZXNUeXBlcy5vKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLnAgOj4+ICcsIG1lc1R5cGVzLnApO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMucSA6Pj4gJywgbWVzVHlwZXMucSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==