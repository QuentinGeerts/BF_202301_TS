/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/docs/types.ts":
/*!***************************!*\
  !*** ./src/docs/types.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var __webpack_exports__ = {};
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
/**
 * Partie 2 - Assertion de types
 */

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**************************!*\
  !*** ./src/exercices.ts ***!
  \**************************/
/**
 * Partie 1 - ✏️ Exercice 01
 */
/**
 * Créer un code permettant de créer un compteur classique, avec + 1, -1 et =...,
 * il faudra typé le tout au maximum, préparer 2 fonctions pour ça
 */
console.warn('Exercice 01');
var btnMoins = document.querySelector('#btnMoins');
var btnPlus = document.querySelector('#btnPlus');
var total = document.querySelector('#total');
var valeur;
if (total)
    valeur = parseInt(total.innerText);
var increment = function (event) {
    // event.preventDefault();
    if (total)
        total.innerText = (++valeur).toString();
};
var decrement = function (event) {
    // event.preventDefault();
    if (total)
        total.innerText = (--valeur).toString();
};
if (btnPlus)
    btnPlus.addEventListener('click', increment);
if (btnMoins)
    btnMoins.addEventListener('click', decrement);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGlCQUFpQjtBQUNuRDtBQUNBLFVBQVU7QUFDVixVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08saUJBQWlCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0NBQWdDO0FBQzNDLG9CQUFvQjtBQUNwQjtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDcENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ3dDO0FBQ3hDLCtCQUErQixtREFBVTtBQUN6QywrQkFBK0IsbURBQVU7QUFDekMsK0JBQStCLG1EQUFVO0FBQ3pDLCtCQUErQixtREFBVTtBQUN6QywrQkFBK0IsbURBQVU7QUFDekMsK0JBQStCLG1EQUFVO0FBQ3pDLCtCQUErQixtREFBVTtBQUN6QywrQkFBK0IsbURBQVU7QUFDekMsK0JBQStCLG1EQUFVO0FBQ3pDLCtCQUErQixtREFBVTtBQUN6QywrQkFBK0IsbURBQVU7QUFDekMsK0JBQStCLG1EQUFVO0FBQ3pDLCtCQUErQixtREFBVTtBQUN6QywrQkFBK0IsbURBQVU7QUFDekMsK0JBQStCLG1EQUFVO0FBQ3pDLCtCQUErQixtREFBVTtBQUN6QywrQkFBK0IsbURBQVU7QUFDekM7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvZG9jcy90eXBlcy50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2V4ZXJjaWNlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogUGFydGllIDEgLSBUeXBlc1xyXG4gKi9cclxudmFyIGEgPSAnSGVsbG8gbGVzIGZ1bGxzdGFjayBKUy4nO1xyXG52YXIgYiA9IDQyO1xyXG52YXIgYyA9IHRydWU7XHJcbnZhciBkID0gbnVsbDtcclxudmFyIGUgPSBbJ2EnLCAnYicsICdjJ107XHJcbnZhciBmID0gWydkJywgJ2UnLCAnZiddO1xyXG52YXIgZyA9IFsxLCAyLCAzLCA0XTtcclxudmFyIGggPSBbJ0hlbGxvJywgdHJ1ZSwgMjEsIFtdLCB7fSwgZnVuY3Rpb24gKCkgeyB9XTtcclxudmFyIGkgPSB7fTtcclxudmFyIGogPSB7IGZpcnN0bmFtZTogJ1F1ZW50aW4nLCBsYXN0bmFtZTogJ0dlZXJ0cycgfTtcclxudmFyIGsgPSB7IGNvdWNvdTogJ0hlbGxvJyB9O1xyXG52YXIgbCA9IG5ldyBEYXRlKCk7XHJcbnZhciBtID0gZnVuY3Rpb24gKCkgeyB9O1xyXG52YXIgbiA9IGZ1bmN0aW9uICgpIHsgfTtcclxudmFyIG8gPSBmdW5jdGlvbiAoaSwgcywgYikgeyByZXR1cm4gWydhJywgJ2InXTsgfTtcclxudmFyIHAgPSBmdW5jdGlvbiAoKSB7IHRocm93IG5ldyBFcnJvcignTm90IGltcGxlbWVudGVkJyk7IH07XHJcbnZhciBxID0gJ2EnO1xyXG5xID0gMTtcclxucSA9IHRydWU7XHJcbi8vIGNvbnN0IHI6IEhUTUxTcGFuRWxlbWVudCA9IG5ldyBIVE1MU3BhbkVsZW1lbnQoKTtcclxuLy8gY29uc3QgczogRWxlbWVudCA9IG5ldyBFbGVtZW50KCk7XHJcbmV4cG9ydCB2YXIgbWVzVHlwZXMgPSB7IGE6IGEsIGI6IGIsIGM6IGMsIGQ6IGQsIGU6IGUsIGY6IGYsIGc6IGcsIGg6IGgsIGk6IGksIGo6IGosIGs6IGssIGw6IGwsIG06IG0sIG46IG4sIG86IG8sIHA6IHAsIHE6IHEgfTtcclxuLy8gRXhwb3J0IGdyw6JjZSDDoCBleHBvcnQsIHVuIG9iamV0IGxhbWJkYSBxdWkgY29udGllbmRyYSB0b3V0ZXMgbGVzIHZhcmlhYmxlc1xyXG4vLyBDZSBxdWkgcGFyIGxhIHN1aXRlIG5vdXMgw6l2aXRlcmEgZGVzIGVycmV1cnMgZGUgbm9tbWFnZXMgZGUgdmFyaWFibGVzIGTDqWrDoCBleGlzdGFudGVzXHJcbi8vIEF0dGVudGlvbiDDoCBsJ2luZGV4YXRpb25cclxudmFyIG9iID0geyAwOiAnUXVlbnRpbicsIDE6IDQyLCAyOiB0cnVlIH07IC8vIFRhYmxlYXUgY2xhc3NpcXVlIChjbGVmOiBudW1iZXIpXHJcbmNvbnNvbGUubG9nKG9iWzBdKTsgLy8gb3V0cHV0IDogJ1F1ZW50aW4nXHJcbi8vIEwnaW5kZXhhdGlvbiB0cmFuc2Zvcm1lIGZpY3RpdmVtZW50IG1vbiBvYmpldCBlbiB0YWJsZWF1IGFzc29jaWF0aWZcclxudmFyIG9iaiA9IHsgZmlyc3RuYW1lOiAnUXVlbnRpbicsIGxhc3RuYW1lOiAnR2VlcnRzJywgYWdlOiAyNiB9O1xyXG5jb25zb2xlLmxvZyhvYmouZmlyc3RuYW1lKTtcclxuY29uc29sZS5sb2cob2JqWydmaXJzdG5hbWUnXSk7XHJcbi8vIEF0dGVudGlvbiBxdWUgbGEgZGVybmnDqHJlIHZlcnNpb24gZXN0IGxhIG1vaW5zIHByb3ByZVxyXG4vLyDihpIgZGFuZ2VyZXV4IGVuIGNhcyBkZSB1bmRlZmluZWQgb3UgdW5rbm93blxyXG4vLyDinI8gRXhlcmNpY2UgMDFcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKipcclxuICogUGFydGllIDEgLSBUeXBlc1xyXG4gKi9cclxuY29uc29sZS53YXJuKFwiUGFydGllIDEgLSBUeXBlc1wiKTtcclxuaW1wb3J0IHsgbWVzVHlwZXMgfSBmcm9tIFwiLi9kb2NzL3R5cGVzXCI7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5hIDo+PiAnLCBtZXNUeXBlcy5hKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmIgOj4+ICcsIG1lc1R5cGVzLmIpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuYyA6Pj4gJywgbWVzVHlwZXMuYyk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5kIDo+PiAnLCBtZXNUeXBlcy5kKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmUgOj4+ICcsIG1lc1R5cGVzLmUpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuZiA6Pj4gJywgbWVzVHlwZXMuZik7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5nIDo+PiAnLCBtZXNUeXBlcy5nKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmggOj4+ICcsIG1lc1R5cGVzLmgpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuaSA6Pj4gJywgbWVzVHlwZXMuaSk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5qIDo+PiAnLCBtZXNUeXBlcy5qKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmsgOj4+ICcsIG1lc1R5cGVzLmspO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMubCA6Pj4gJywgbWVzVHlwZXMubCk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5tIDo+PiAnLCBtZXNUeXBlcy5tKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLm4gOj4+ICcsIG1lc1R5cGVzLm4pO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMubyA6Pj4gJywgbWVzVHlwZXMubyk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5wIDo+PiAnLCBtZXNUeXBlcy5wKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLnEgOj4+ICcsIG1lc1R5cGVzLnEpO1xyXG4vKipcclxuICogUGFydGllIDIgLSBBc3NlcnRpb24gZGUgdHlwZXNcclxuICovXHJcbiIsIi8qKlxyXG4gKiBQYXJ0aWUgMSAtIOKcj++4jyBFeGVyY2ljZSAwMVxyXG4gKi9cclxuLyoqXHJcbiAqIENyw6llciB1biBjb2RlIHBlcm1ldHRhbnQgZGUgY3LDqWVyIHVuIGNvbXB0ZXVyIGNsYXNzaXF1ZSwgYXZlYyArIDEsIC0xIGV0ID0uLi4sXHJcbiAqIGlsIGZhdWRyYSB0eXDDqSBsZSB0b3V0IGF1IG1heGltdW0sIHByw6lwYXJlciAyIGZvbmN0aW9ucyBwb3VyIMOnYVxyXG4gKi9cclxuY29uc29sZS53YXJuKCdFeGVyY2ljZSAwMScpO1xyXG52YXIgYnRuTW9pbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuTW9pbnMnKTtcclxudmFyIGJ0blBsdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuUGx1cycpO1xyXG52YXIgdG90YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG90YWwnKTtcclxudmFyIHZhbGV1cjtcclxuaWYgKHRvdGFsKVxyXG4gICAgdmFsZXVyID0gcGFyc2VJbnQodG90YWwuaW5uZXJUZXh0KTtcclxudmFyIGluY3JlbWVudCA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh0b3RhbClcclxuICAgICAgICB0b3RhbC5pbm5lclRleHQgPSAoKyt2YWxldXIpLnRvU3RyaW5nKCk7XHJcbn07XHJcbnZhciBkZWNyZW1lbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAodG90YWwpXHJcbiAgICAgICAgdG90YWwuaW5uZXJUZXh0ID0gKC0tdmFsZXVyKS50b1N0cmluZygpO1xyXG59O1xyXG5pZiAoYnRuUGx1cylcclxuICAgIGJ0blBsdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpbmNyZW1lbnQpO1xyXG5pZiAoYnRuTW9pbnMpXHJcbiAgICBidG5Nb2lucy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlY3JlbWVudCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==