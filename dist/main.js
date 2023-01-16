/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/docs/narrowing.ts":
/*!*******************************!*\
  !*** ./src/docs/narrowing.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TUser": () => (/* binding */ TUser),
/* harmony export */   "exempleN": () => (/* binding */ exempleN),
/* harmony export */   "isDate": () => (/* binding */ isDate),
/* harmony export */   "isUser": () => (/* binding */ isUser),
/* harmony export */   "printId": () => (/* binding */ printId)
/* harmony export */ });
/**
 * Partie 3 - Narrowing
 * Permettre de réduire la liste des types disponibles
 */
var btn1 = document.querySelector('#increment'); // Element | null
var btn2 = document.querySelector('#increment'); // Element
var btn3 = document.querySelector('#increment'); // HTMLButtonElement
// Attention pour la version 2 et 3, vous empêchez le querySelector de 
// fonctionner correctement en cas de null
// Le mieux sera d'utiliser des conditions au lieu du narrowing '!' ou 'as'
// Autre exemple
var btn_dec = function (event) {
    event.preventDefault();
    var input = document.querySelector('#res');
    if (input) {
        // HTMLInputElement
        // Premier élément du narrowing
    }
    else {
        // null
    }
};
// Autre exemple
function printId(id) {
    if (id) {
        // string | number
        if (typeof id === "number") {
            // number
            console.log('id NUMBER :>> ', id);
        }
        else {
            // string
            var tmpId = parseInt(id);
            console.log('id STRING :>> ', id);
        }
    }
    else {
        // null
        id = 42;
        console.log('id NULL :>> ', id);
    }
}
// Autre exemple (double variables locales)
function exempleN(a, b) {
    if (a === b) {
        console.log('a DOUBLE:>> ', a); // Ici il sera d'office en string
        // Le seul point commun entre a et b est string
    }
}
// Autre exemple ()
function exempleOperateur(a) {
    // Exemple si a était un MouseEvent
    // MouseEvent étant un type TypeScript, il n'est pas reconnu par le typeof natif de js
    // if (typeof a === "MouseEvent")
    if ("value" in a) {
        // value est une propriété de HTMLInputElement
        console.log('a VALUE :>> ', a);
    }
    else if ("toto" in a) {
        console.log('a TOTO :>> ', a); // NE rentrera jamais
    }
    else {
        // MouseEvent
        console.log('a MOUSEEVENT :>> ', a);
    }
}
// Autre cas
// Je veux définir obligatoirement un retour Date sur a
function isDate(a) {
    return a instanceof Date;
}
// Cas plus concret
var TUser = /** @class */ (function () {
    function TUser(name) {
        this.name = name;
    }
    return TUser;
}());

function isUser(a) {
    return a instanceof TUser;
}
// On aurait très bien pu mettre un booléen en retour de la fonction
// mais dans la lecture de la documentation au survol de la fonction
// Il est plus intéressant de savoir que le retour d'un booléen sera 
// sur un TUSer et non d'un booléen


/***/ }),

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
/* harmony import */ var _docs_narrowing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./docs/narrowing */ "./src/docs/narrowing.ts");
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
console.warn("Partie 2 - Assertion de types");
// Voir src/docs/assertionTypes.ts
/**
 * Partie 3 - Narrowing
 */
console.warn("Partie 3 - Narrowing");

(0,_docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.printId)(12);
(0,_docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.printId)('a');
(0,_docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.printId)(null);
(0,_docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.exempleN)('a', 'a');
(0,_docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.exempleN)('a', true);
(0,_docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.exempleN)(12, true);
var birthDate = new Date('03/04/1996');
console.log('Date [03/04/1996]:>> ', (0,_docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.isDate)(birthDate));
console.log('String [03/03/1001]:>> ', (0,_docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.isDate)('03/03/1001'));
var user = new _docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.TUser('Quentin');
console.log('isUser(user) :>> ', (0,_docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.isUser)(user));
/**
 * Partie 4 - Custom Types
 */
console.warn("Partie 4 - Custom Types");
var admin = {
    roleId: 0,
    lastName: "Geerts",
    firstName: "Quentin"
};
var admin2 = {
    roleId: "",
    lastName: "",
    firstName: ""
};
console.log('admin :>> ', admin);
var idInt = 45;
var idString = "a";
// let idBooleen: Id = true;
console.log('idInt :>> ', idInt);
console.log('idString :>> ', idString);
// console.log('idBooleen :>> ', idBooleen);
var date = "03/04/1996";
var date2 = new Date().toString();
console.log('date :>> ', date);
console.log('date :>> ', date2);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvZG9jcy9uYXJyb3dpbmcudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2RvY3MvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9leGVyY2ljZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFBhcnRpZSAzIC0gTmFycm93aW5nXHJcbiAqIFBlcm1ldHRyZSBkZSByw6lkdWlyZSBsYSBsaXN0ZSBkZXMgdHlwZXMgZGlzcG9uaWJsZXNcclxuICovXHJcbnZhciBidG4xID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luY3JlbWVudCcpOyAvLyBFbGVtZW50IHwgbnVsbFxyXG52YXIgYnRuMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmNyZW1lbnQnKTsgLy8gRWxlbWVudFxyXG52YXIgYnRuMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmNyZW1lbnQnKTsgLy8gSFRNTEJ1dHRvbkVsZW1lbnRcclxuLy8gQXR0ZW50aW9uIHBvdXIgbGEgdmVyc2lvbiAyIGV0IDMsIHZvdXMgZW1ww6pjaGV6IGxlIHF1ZXJ5U2VsZWN0b3IgZGUgXHJcbi8vIGZvbmN0aW9ubmVyIGNvcnJlY3RlbWVudCBlbiBjYXMgZGUgbnVsbFxyXG4vLyBMZSBtaWV1eCBzZXJhIGQndXRpbGlzZXIgZGVzIGNvbmRpdGlvbnMgYXUgbGlldSBkdSBuYXJyb3dpbmcgJyEnIG91ICdhcydcclxuLy8gQXV0cmUgZXhlbXBsZVxyXG52YXIgYnRuX2RlYyA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXMnKTtcclxuICAgIGlmIChpbnB1dCkge1xyXG4gICAgICAgIC8vIEhUTUxJbnB1dEVsZW1lbnRcclxuICAgICAgICAvLyBQcmVtaWVyIMOpbMOpbWVudCBkdSBuYXJyb3dpbmdcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIC8vIG51bGxcclxuICAgIH1cclxufTtcclxuLy8gQXV0cmUgZXhlbXBsZVxyXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRJZChpZCkge1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgICAgLy8gc3RyaW5nIHwgbnVtYmVyXHJcbiAgICAgICAgaWYgKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAvLyBudW1iZXJcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2lkIE5VTUJFUiA6Pj4gJywgaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gc3RyaW5nXHJcbiAgICAgICAgICAgIHZhciB0bXBJZCA9IHBhcnNlSW50KGlkKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2lkIFNUUklORyA6Pj4gJywgaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIC8vIG51bGxcclxuICAgICAgICBpZCA9IDQyO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpZCBOVUxMIDo+PiAnLCBpZCk7XHJcbiAgICB9XHJcbn1cclxuLy8gQXV0cmUgZXhlbXBsZSAoZG91YmxlIHZhcmlhYmxlcyBsb2NhbGVzKVxyXG5leHBvcnQgZnVuY3Rpb24gZXhlbXBsZU4oYSwgYikge1xyXG4gICAgaWYgKGEgPT09IGIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnYSBET1VCTEU6Pj4gJywgYSk7IC8vIEljaSBpbCBzZXJhIGQnb2ZmaWNlIGVuIHN0cmluZ1xyXG4gICAgICAgIC8vIExlIHNldWwgcG9pbnQgY29tbXVuIGVudHJlIGEgZXQgYiBlc3Qgc3RyaW5nXHJcbiAgICB9XHJcbn1cclxuLy8gQXV0cmUgZXhlbXBsZSAoKVxyXG5mdW5jdGlvbiBleGVtcGxlT3BlcmF0ZXVyKGEpIHtcclxuICAgIC8vIEV4ZW1wbGUgc2kgYSDDqXRhaXQgdW4gTW91c2VFdmVudFxyXG4gICAgLy8gTW91c2VFdmVudCDDqXRhbnQgdW4gdHlwZSBUeXBlU2NyaXB0LCBpbCBuJ2VzdCBwYXMgcmVjb25udSBwYXIgbGUgdHlwZW9mIG5hdGlmIGRlIGpzXHJcbiAgICAvLyBpZiAodHlwZW9mIGEgPT09IFwiTW91c2VFdmVudFwiKVxyXG4gICAgaWYgKFwidmFsdWVcIiBpbiBhKSB7XHJcbiAgICAgICAgLy8gdmFsdWUgZXN0IHVuZSBwcm9wcmnDqXTDqSBkZSBIVE1MSW5wdXRFbGVtZW50XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2EgVkFMVUUgOj4+ICcsIGEpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoXCJ0b3RvXCIgaW4gYSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhIFRPVE8gOj4+ICcsIGEpOyAvLyBORSByZW50cmVyYSBqYW1haXNcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIC8vIE1vdXNlRXZlbnRcclxuICAgICAgICBjb25zb2xlLmxvZygnYSBNT1VTRUVWRU5UIDo+PiAnLCBhKTtcclxuICAgIH1cclxufVxyXG4vLyBBdXRyZSBjYXNcclxuLy8gSmUgdmV1eCBkw6lmaW5pciBvYmxpZ2F0b2lyZW1lbnQgdW4gcmV0b3VyIERhdGUgc3VyIGFcclxuZXhwb3J0IGZ1bmN0aW9uIGlzRGF0ZShhKSB7XHJcbiAgICByZXR1cm4gYSBpbnN0YW5jZW9mIERhdGU7XHJcbn1cclxuLy8gQ2FzIHBsdXMgY29uY3JldFxyXG52YXIgVFVzZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBUVXNlcihuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxuICAgIHJldHVybiBUVXNlcjtcclxufSgpKTtcclxuZXhwb3J0IHsgVFVzZXIgfTtcclxuZXhwb3J0IGZ1bmN0aW9uIGlzVXNlcihhKSB7XHJcbiAgICByZXR1cm4gYSBpbnN0YW5jZW9mIFRVc2VyO1xyXG59XHJcbi8vIE9uIGF1cmFpdCB0csOocyBiaWVuIHB1IG1ldHRyZSB1biBib29sw6llbiBlbiByZXRvdXIgZGUgbGEgZm9uY3Rpb25cclxuLy8gbWFpcyBkYW5zIGxhIGxlY3R1cmUgZGUgbGEgZG9jdW1lbnRhdGlvbiBhdSBzdXJ2b2wgZGUgbGEgZm9uY3Rpb25cclxuLy8gSWwgZXN0IHBsdXMgaW50w6lyZXNzYW50IGRlIHNhdm9pciBxdWUgbGUgcmV0b3VyIGQndW4gYm9vbMOpZW4gc2VyYSBcclxuLy8gc3VyIHVuIFRVU2VyIGV0IG5vbiBkJ3VuIGJvb2zDqWVuXHJcbiIsIi8qKlxyXG4gKiBQYXJ0aWUgMSAtIFR5cGVzXHJcbiAqL1xyXG52YXIgYSA9ICdIZWxsbyBsZXMgZnVsbHN0YWNrIEpTLic7XHJcbnZhciBiID0gNDI7XHJcbnZhciBjID0gdHJ1ZTtcclxudmFyIGQgPSBudWxsO1xyXG52YXIgZSA9IFsnYScsICdiJywgJ2MnXTtcclxudmFyIGYgPSBbJ2QnLCAnZScsICdmJ107XHJcbnZhciBnID0gWzEsIDIsIDMsIDRdO1xyXG52YXIgaCA9IFsnSGVsbG8nLCB0cnVlLCAyMSwgW10sIHt9LCBmdW5jdGlvbiAoKSB7IH1dO1xyXG52YXIgaSA9IHt9O1xyXG52YXIgaiA9IHsgZmlyc3RuYW1lOiAnUXVlbnRpbicsIGxhc3RuYW1lOiAnR2VlcnRzJyB9O1xyXG52YXIgayA9IHsgY291Y291OiAnSGVsbG8nIH07XHJcbnZhciBsID0gbmV3IERhdGUoKTtcclxudmFyIG0gPSBmdW5jdGlvbiAoKSB7IH07XHJcbnZhciBuID0gZnVuY3Rpb24gKCkgeyB9O1xyXG52YXIgbyA9IGZ1bmN0aW9uIChpLCBzLCBiKSB7IHJldHVybiBbJ2EnLCAnYiddOyB9O1xyXG52YXIgcCA9IGZ1bmN0aW9uICgpIHsgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW1wbGVtZW50ZWQnKTsgfTtcclxudmFyIHEgPSAnYSc7XHJcbnEgPSAxO1xyXG5xID0gdHJ1ZTtcclxuLy8gY29uc3QgcjogSFRNTFNwYW5FbGVtZW50ID0gbmV3IEhUTUxTcGFuRWxlbWVudCgpO1xyXG4vLyBjb25zdCBzOiBFbGVtZW50ID0gbmV3IEVsZW1lbnQoKTtcclxuZXhwb3J0IHZhciBtZXNUeXBlcyA9IHsgYTogYSwgYjogYiwgYzogYywgZDogZCwgZTogZSwgZjogZiwgZzogZywgaDogaCwgaTogaSwgajogaiwgazogaywgbDogbCwgbTogbSwgbjogbiwgbzogbywgcDogcCwgcTogcSB9O1xyXG4vLyBFeHBvcnQgZ3LDomNlIMOgIGV4cG9ydCwgdW4gb2JqZXQgbGFtYmRhIHF1aSBjb250aWVuZHJhIHRvdXRlcyBsZXMgdmFyaWFibGVzXHJcbi8vIENlIHF1aSBwYXIgbGEgc3VpdGUgbm91cyDDqXZpdGVyYSBkZXMgZXJyZXVycyBkZSBub21tYWdlcyBkZSB2YXJpYWJsZXMgZMOpasOgIGV4aXN0YW50ZXNcclxuLy8gQXR0ZW50aW9uIMOgIGwnaW5kZXhhdGlvblxyXG52YXIgb2IgPSB7IDA6ICdRdWVudGluJywgMTogNDIsIDI6IHRydWUgfTsgLy8gVGFibGVhdSBjbGFzc2lxdWUgKGNsZWY6IG51bWJlcilcclxuY29uc29sZS5sb2cob2JbMF0pOyAvLyBvdXRwdXQgOiAnUXVlbnRpbidcclxuLy8gTCdpbmRleGF0aW9uIHRyYW5zZm9ybWUgZmljdGl2ZW1lbnQgbW9uIG9iamV0IGVuIHRhYmxlYXUgYXNzb2NpYXRpZlxyXG52YXIgb2JqID0geyBmaXJzdG5hbWU6ICdRdWVudGluJywgbGFzdG5hbWU6ICdHZWVydHMnLCBhZ2U6IDI2IH07XHJcbmNvbnNvbGUubG9nKG9iai5maXJzdG5hbWUpO1xyXG5jb25zb2xlLmxvZyhvYmpbJ2ZpcnN0bmFtZSddKTtcclxuLy8gQXR0ZW50aW9uIHF1ZSBsYSBkZXJuacOocmUgdmVyc2lvbiBlc3QgbGEgbW9pbnMgcHJvcHJlXHJcbi8vIOKGkiBkYW5nZXJldXggZW4gY2FzIGRlIHVuZGVmaW5lZCBvdSB1bmtub3duXHJcbi8vIOKcjyBFeGVyY2ljZSAwMVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKlxyXG4gKiBQYXJ0aWUgMSAtIFR5cGVzXHJcbiAqL1xyXG5jb25zb2xlLndhcm4oXCJQYXJ0aWUgMSAtIFR5cGVzXCIpO1xyXG5pbXBvcnQgeyBtZXNUeXBlcyB9IGZyb20gXCIuL2RvY3MvdHlwZXNcIjtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmEgOj4+ICcsIG1lc1R5cGVzLmEpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuYiA6Pj4gJywgbWVzVHlwZXMuYik7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5jIDo+PiAnLCBtZXNUeXBlcy5jKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmQgOj4+ICcsIG1lc1R5cGVzLmQpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuZSA6Pj4gJywgbWVzVHlwZXMuZSk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5mIDo+PiAnLCBtZXNUeXBlcy5mKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmcgOj4+ICcsIG1lc1R5cGVzLmcpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuaCA6Pj4gJywgbWVzVHlwZXMuaCk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5pIDo+PiAnLCBtZXNUeXBlcy5pKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmogOj4+ICcsIG1lc1R5cGVzLmopO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuayA6Pj4gJywgbWVzVHlwZXMuayk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5sIDo+PiAnLCBtZXNUeXBlcy5sKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLm0gOj4+ICcsIG1lc1R5cGVzLm0pO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMubiA6Pj4gJywgbWVzVHlwZXMubik7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5vIDo+PiAnLCBtZXNUeXBlcy5vKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLnAgOj4+ICcsIG1lc1R5cGVzLnApO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMucSA6Pj4gJywgbWVzVHlwZXMucSk7XHJcbi8qKlxyXG4gKiBQYXJ0aWUgMiAtIEFzc2VydGlvbiBkZSB0eXBlc1xyXG4gKi9cclxuY29uc29sZS53YXJuKFwiUGFydGllIDIgLSBBc3NlcnRpb24gZGUgdHlwZXNcIik7XHJcbi8vIFZvaXIgc3JjL2RvY3MvYXNzZXJ0aW9uVHlwZXMudHNcclxuLyoqXHJcbiAqIFBhcnRpZSAzIC0gTmFycm93aW5nXHJcbiAqL1xyXG5jb25zb2xlLndhcm4oXCJQYXJ0aWUgMyAtIE5hcnJvd2luZ1wiKTtcclxuaW1wb3J0IHsgcHJpbnRJZCwgZXhlbXBsZU4sIGlzRGF0ZSwgaXNVc2VyLCBUVXNlciB9IGZyb20gXCIuL2RvY3MvbmFycm93aW5nXCI7XHJcbnByaW50SWQoMTIpO1xyXG5wcmludElkKCdhJyk7XHJcbnByaW50SWQobnVsbCk7XHJcbmV4ZW1wbGVOKCdhJywgJ2EnKTtcclxuZXhlbXBsZU4oJ2EnLCB0cnVlKTtcclxuZXhlbXBsZU4oMTIsIHRydWUpO1xyXG52YXIgYmlydGhEYXRlID0gbmV3IERhdGUoJzAzLzA0LzE5OTYnKTtcclxuY29uc29sZS5sb2coJ0RhdGUgWzAzLzA0LzE5OTZdOj4+ICcsIGlzRGF0ZShiaXJ0aERhdGUpKTtcclxuY29uc29sZS5sb2coJ1N0cmluZyBbMDMvMDMvMTAwMV06Pj4gJywgaXNEYXRlKCcwMy8wMy8xMDAxJykpO1xyXG52YXIgdXNlciA9IG5ldyBUVXNlcignUXVlbnRpbicpO1xyXG5jb25zb2xlLmxvZygnaXNVc2VyKHVzZXIpIDo+PiAnLCBpc1VzZXIodXNlcikpO1xyXG4vKipcclxuICogUGFydGllIDQgLSBDdXN0b20gVHlwZXNcclxuICovXHJcbmNvbnNvbGUud2FybihcIlBhcnRpZSA0IC0gQ3VzdG9tIFR5cGVzXCIpO1xyXG52YXIgYWRtaW4gPSB7XHJcbiAgICByb2xlSWQ6IDAsXHJcbiAgICBsYXN0TmFtZTogXCJHZWVydHNcIixcclxuICAgIGZpcnN0TmFtZTogXCJRdWVudGluXCJcclxufTtcclxudmFyIGFkbWluMiA9IHtcclxuICAgIHJvbGVJZDogXCJcIixcclxuICAgIGxhc3ROYW1lOiBcIlwiLFxyXG4gICAgZmlyc3ROYW1lOiBcIlwiXHJcbn07XHJcbmNvbnNvbGUubG9nKCdhZG1pbiA6Pj4gJywgYWRtaW4pO1xyXG52YXIgaWRJbnQgPSA0NTtcclxudmFyIGlkU3RyaW5nID0gXCJhXCI7XHJcbi8vIGxldCBpZEJvb2xlZW46IElkID0gdHJ1ZTtcclxuY29uc29sZS5sb2coJ2lkSW50IDo+PiAnLCBpZEludCk7XHJcbmNvbnNvbGUubG9nKCdpZFN0cmluZyA6Pj4gJywgaWRTdHJpbmcpO1xyXG4vLyBjb25zb2xlLmxvZygnaWRCb29sZWVuIDo+PiAnLCBpZEJvb2xlZW4pO1xyXG52YXIgZGF0ZSA9IFwiMDMvMDQvMTk5NlwiO1xyXG52YXIgZGF0ZTIgPSBuZXcgRGF0ZSgpLnRvU3RyaW5nKCk7XHJcbmNvbnNvbGUubG9nKCdkYXRlIDo+PiAnLCBkYXRlKTtcclxuY29uc29sZS5sb2coJ2RhdGUgOj4+ICcsIGRhdGUyKTtcclxuIiwiLyoqXHJcbiAqIFBhcnRpZSAxIC0g4pyP77iPIEV4ZXJjaWNlIDAxXHJcbiAqL1xyXG4vKipcclxuICogQ3LDqWVyIHVuIGNvZGUgcGVybWV0dGFudCBkZSBjcsOpZXIgdW4gY29tcHRldXIgY2xhc3NpcXVlLCBhdmVjICsgMSwgLTEgZXQgPS4uLixcclxuICogaWwgZmF1ZHJhIHR5cMOpIGxlIHRvdXQgYXUgbWF4aW11bSwgcHLDqXBhcmVyIDIgZm9uY3Rpb25zIHBvdXIgw6dhXHJcbiAqL1xyXG5jb25zb2xlLndhcm4oJ0V4ZXJjaWNlIDAxJyk7XHJcbnZhciBidG5Nb2lucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5Nb2lucycpO1xyXG52YXIgYnRuUGx1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5QbHVzJyk7XHJcbnZhciB0b3RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3RhbCcpO1xyXG52YXIgdmFsZXVyO1xyXG5pZiAodG90YWwpXHJcbiAgICB2YWxldXIgPSBwYXJzZUludCh0b3RhbC5pbm5lclRleHQpO1xyXG52YXIgaW5jcmVtZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHRvdGFsKVxyXG4gICAgICAgIHRvdGFsLmlubmVyVGV4dCA9ICgrK3ZhbGV1cikudG9TdHJpbmcoKTtcclxufTtcclxudmFyIGRlY3JlbWVudCA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh0b3RhbClcclxuICAgICAgICB0b3RhbC5pbm5lclRleHQgPSAoLS12YWxldXIpLnRvU3RyaW5nKCk7XHJcbn07XHJcbmlmIChidG5QbHVzKVxyXG4gICAgYnRuUGx1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGluY3JlbWVudCk7XHJcbmlmIChidG5Nb2lucylcclxuICAgIGJ0bk1vaW5zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVjcmVtZW50KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9