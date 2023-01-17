/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/docs/generics.ts":
/*!******************************!*\
  !*** ./src/docs/generics.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenericNumber": () => (/* binding */ GenericNumber),
/* harmony export */   "Mathematique": () => (/* binding */ Mathematique),
/* harmony export */   "getProperty": () => (/* binding */ getProperty),
/* harmony export */   "identity": () => (/* binding */ identity),
/* harmony export */   "identity2": () => (/* binding */ identity2),
/* harmony export */   "identity3": () => (/* binding */ identity3),
/* harmony export */   "identity4": () => (/* binding */ identity4),
/* harmony export */   "loggingI": () => (/* binding */ loggingI)
/* harmony export */ });
/**
 * Partie 5 - Generics
 */
/*
    Fonctions génériques
*/
function identity(arg) {
    return arg;
}
// function idNumber (arg: number) {
//     // ...
//     return arg
// }
// function idString (arg: string) {
//     // ...
//     return arg
// }
// function idBoolean(arg: string) {
//     // ...
//     return arg
// }
// function idAll (arg: any) {
//     if (typeof arg === 'number') // ...
//     if (typeof arg === 'string') // ...
//     if (typeof arg === 'boolean') // ...
//     return arg
// }
// Création d'une fonction généric
function identity2(arg) {
    // Type ...
    return arg;
}
var tab = [1, 2, 3];
function identity3(arg1, arg2) {
    if (typeof arg1 === typeof arg2)
        return arg1;
    else
        return arg2;
}
function identity4(args) {
    console.log(args.length);
    return args;
}
/*
    Classes génériques
*/
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());

// Permet de créer une fonction générique basée sur une interface
// → Filtrer les types avec ceux uniquement qui possèdent les propriétés de l'interface
function loggingI(arg) {
    console.log('Length :>>', arg.length);
    return arg;
}
function getProperty(obj, key) {
    return obj[key];
}
var Mathematique = /** @class */ (function () {
    function Mathematique() {
    }
    return Mathematique;
}());



/***/ }),

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
        console.log('a VALUE :>> ', a.value);
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
// ✏ Exercice 01


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
// console.log(ob.0); // pas possible
console.log(ob[0]); // output : 'Quentin'
// L'indexation transforme fictivement mon objet en tableau associatif
var obj = { firstname: 'Quentin', lastname: 'Geerts', age: 26 };
console.log(obj.firstname);
console.log(obj['firstname']);
// Attention que la dernière version est la moins propre
// → dangereux en cas de undefined ou unknown


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
/* harmony import */ var _docs_generics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./docs/generics */ "./src/docs/generics.ts");
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
var ad = {
    roleId: 5,
    lastName: "",
    firstName: ""
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
console.log('typeof idInt :>> ', typeof idInt);
console.log('idString :>> ', idString);
// console.log('idBooleen :>> ', idBooleen);
var date = "03/04/1996";
var date2 = new Date().toString();
console.log('date :>> ', date);
console.log('date :>> ', date2);
/**
 * Partie 5 - Generics
 */
console.warn("Partie 5 - Generics");

// On perd le type dynamique passé en paramètre à cause du any
var id1_1 = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.identity)(3);
var id1_2 = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.identity)('toto');
var id1_3 = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.identity)(true);
console.log('id1_1 :>> ', id1_1);
console.log('typeof id1_1 :>> ', typeof id1_1);
console.log('id1_2 :>> ', id1_2);
console.log('typeof id1_2 :>> ', typeof id1_2);
console.log('id1_3 :>> ', id1_3);
console.log('typeof id1_3 :>> ', typeof id1_3);
var id2 = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.identity2)('e');
console.log('id2 :>> ', id2);
console.log('typeof id2 :>> ', typeof id2);
var id3 = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.identity2)(5);
console.log('id3 :>> ', id3);
console.log('typeof id3 :>> ', typeof id3);
var id4 = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.identity2)('a');
console.log('id4 :>> ', id4);
console.log('typeof id4 :>> ', typeof id4);
// identity2<Admin>(3); Pas possible car c'est un number et non un admin
var id5 = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.identity3)("Coucou", 42);
console.log('id5 :>> ', id5);
var id6 = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.identity3)('Hello', 'TypeScript');
console.log('id6 :>> ', id6);
var id7 = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.identity4)([1, 2, 3, 4]);
console.log('id7 :>> ', id7);
var nb = new _docs_generics__WEBPACK_IMPORTED_MODULE_2__.GenericNumber();
nb.zeroValue;
nb.add = function (x, y) {
    return x + y;
};
console.log(nb.add(3, 5));
var lg = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.loggingI)([5, 5, 6, 3, 4, 8]);
console.log('lg :>> ', lg);
//  Ne fonctionne pas
// const lg0 = loggingI<number>(5)
// const lg0 = loggingI(5)
// console.log('lg0 :>> ', lg0);
var x = {
    roleId: 0,
    lastName: "Geerts",
    firstName: "Quentin"
};
console.log('x :>> ', (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.getProperty)(x, 'lastName'));
// console.log('x :>> ', getProperty(x, 'hello')); // Ne fonctionne pas car pas une clef de Type de l'objet (Admin)
// console.log('x :>> ', getProperty(x, 3));
var myTotal = new _docs_generics__WEBPACK_IMPORTED_MODULE_2__.Mathematique();
myTotal.add = function (x, y) { return x + y; };
myTotal.sub = function (x, y) { return x - y; };
console.log(myTotal.add(5, 6));
console.log(myTotal.sub(5, 6));
// let myTotal2 = new Mathematique<string, string>();

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
// const decrement: Function = (event: MouseEvent) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvZG9jcy9nZW5lcmljcy50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvZG9jcy9uYXJyb3dpbmcudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2RvY3MvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9leGVyY2ljZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFBhcnRpZSA1IC0gR2VuZXJpY3NcclxuICovXHJcbi8qXHJcbiAgICBGb25jdGlvbnMgZ8OpbsOpcmlxdWVzXHJcbiovXHJcbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eShhcmcpIHtcclxuICAgIHJldHVybiBhcmc7XHJcbn1cclxuLy8gZnVuY3Rpb24gaWROdW1iZXIgKGFyZzogbnVtYmVyKSB7XHJcbi8vICAgICAvLyAuLi5cclxuLy8gICAgIHJldHVybiBhcmdcclxuLy8gfVxyXG4vLyBmdW5jdGlvbiBpZFN0cmluZyAoYXJnOiBzdHJpbmcpIHtcclxuLy8gICAgIC8vIC4uLlxyXG4vLyAgICAgcmV0dXJuIGFyZ1xyXG4vLyB9XHJcbi8vIGZ1bmN0aW9uIGlkQm9vbGVhbihhcmc6IHN0cmluZykge1xyXG4vLyAgICAgLy8gLi4uXHJcbi8vICAgICByZXR1cm4gYXJnXHJcbi8vIH1cclxuLy8gZnVuY3Rpb24gaWRBbGwgKGFyZzogYW55KSB7XHJcbi8vICAgICBpZiAodHlwZW9mIGFyZyA9PT0gJ251bWJlcicpIC8vIC4uLlxyXG4vLyAgICAgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnKSAvLyAuLi5cclxuLy8gICAgIGlmICh0eXBlb2YgYXJnID09PSAnYm9vbGVhbicpIC8vIC4uLlxyXG4vLyAgICAgcmV0dXJuIGFyZ1xyXG4vLyB9XHJcbi8vIENyw6lhdGlvbiBkJ3VuZSBmb25jdGlvbiBnw6luw6lyaWNcclxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5MihhcmcpIHtcclxuICAgIC8vIFR5cGUgLi4uXHJcbiAgICByZXR1cm4gYXJnO1xyXG59XHJcbnZhciB0YWIgPSBbMSwgMiwgM107XHJcbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eTMoYXJnMSwgYXJnMikge1xyXG4gICAgaWYgKHR5cGVvZiBhcmcxID09PSB0eXBlb2YgYXJnMilcclxuICAgICAgICByZXR1cm4gYXJnMTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gYXJnMjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHk0KGFyZ3MpIHtcclxuICAgIGNvbnNvbGUubG9nKGFyZ3MubGVuZ3RoKTtcclxuICAgIHJldHVybiBhcmdzO1xyXG59XHJcbi8qXHJcbiAgICBDbGFzc2VzIGfDqW7DqXJpcXVlc1xyXG4qL1xyXG52YXIgR2VuZXJpY051bWJlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEdlbmVyaWNOdW1iZXIoKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gR2VuZXJpY051bWJlcjtcclxufSgpKTtcclxuZXhwb3J0IHsgR2VuZXJpY051bWJlciB9O1xyXG4vLyBQZXJtZXQgZGUgY3LDqWVyIHVuZSBmb25jdGlvbiBnw6luw6lyaXF1ZSBiYXPDqWUgc3VyIHVuZSBpbnRlcmZhY2VcclxuLy8g4oaSIEZpbHRyZXIgbGVzIHR5cGVzIGF2ZWMgY2V1eCB1bmlxdWVtZW50IHF1aSBwb3Nzw6hkZW50IGxlcyBwcm9wcmnDqXTDqXMgZGUgbCdpbnRlcmZhY2VcclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2dpbmdJKGFyZykge1xyXG4gICAgY29uc29sZS5sb2coJ0xlbmd0aCA6Pj4nLCBhcmcubGVuZ3RoKTtcclxuICAgIHJldHVybiBhcmc7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb3BlcnR5KG9iaiwga2V5KSB7XHJcbiAgICByZXR1cm4gb2JqW2tleV07XHJcbn1cclxudmFyIE1hdGhlbWF0aXF1ZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1hdGhlbWF0aXF1ZSgpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBNYXRoZW1hdGlxdWU7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IE1hdGhlbWF0aXF1ZSB9O1xyXG4iLCIvKipcclxuICogUGFydGllIDMgLSBOYXJyb3dpbmdcclxuICogUGVybWV0dHJlIGRlIHLDqWR1aXJlIGxhIGxpc3RlIGRlcyB0eXBlcyBkaXNwb25pYmxlc1xyXG4gKi9cclxudmFyIGJ0bjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5jcmVtZW50Jyk7IC8vIEVsZW1lbnQgfCBudWxsXHJcbnZhciBidG4yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luY3JlbWVudCcpOyAvLyBFbGVtZW50XHJcbnZhciBidG4zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luY3JlbWVudCcpOyAvLyBIVE1MQnV0dG9uRWxlbWVudFxyXG4vLyBBdHRlbnRpb24gcG91ciBsYSB2ZXJzaW9uIDIgZXQgMywgdm91cyBlbXDDqmNoZXogbGUgcXVlcnlTZWxlY3RvciBkZSBcclxuLy8gZm9uY3Rpb25uZXIgY29ycmVjdGVtZW50IGVuIGNhcyBkZSBudWxsXHJcbi8vIExlIG1pZXV4IHNlcmEgZCd1dGlsaXNlciBkZXMgY29uZGl0aW9ucyBhdSBsaWV1IGR1IG5hcnJvd2luZyAnIScgb3UgJ2FzJ1xyXG4vLyBBdXRyZSBleGVtcGxlXHJcbnZhciBidG5fZGVjID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyIGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlcycpO1xyXG4gICAgaWYgKGlucHV0KSB7XHJcbiAgICAgICAgLy8gSFRNTElucHV0RWxlbWVudFxyXG4gICAgICAgIC8vIFByZW1pZXIgw6lsw6ltZW50IGR1IG5hcnJvd2luZ1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgLy8gbnVsbFxyXG4gICAgfVxyXG59O1xyXG4vLyBBdXRyZSBleGVtcGxlXHJcbmV4cG9ydCBmdW5jdGlvbiBwcmludElkKGlkKSB7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgICAvLyBzdHJpbmcgfCBudW1iZXJcclxuICAgICAgICBpZiAodHlwZW9mIGlkID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIC8vIG51bWJlclxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaWQgTlVNQkVSIDo+PiAnLCBpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBzdHJpbmdcclxuICAgICAgICAgICAgdmFyIHRtcElkID0gcGFyc2VJbnQoaWQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaWQgU1RSSU5HIDo+PiAnLCBpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgLy8gbnVsbFxyXG4gICAgICAgIGlkID0gNDI7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2lkIE5VTEwgOj4+ICcsIGlkKTtcclxuICAgIH1cclxufVxyXG4vLyBBdXRyZSBleGVtcGxlIChkb3VibGUgdmFyaWFibGVzIGxvY2FsZXMpXHJcbmV4cG9ydCBmdW5jdGlvbiBleGVtcGxlTihhLCBiKSB7XHJcbiAgICBpZiAoYSA9PT0gYikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhIERPVUJMRTo+PiAnLCBhKTsgLy8gSWNpIGlsIHNlcmEgZCdvZmZpY2UgZW4gc3RyaW5nXHJcbiAgICAgICAgLy8gTGUgc2V1bCBwb2ludCBjb21tdW4gZW50cmUgYSBldCBiIGVzdCBzdHJpbmdcclxuICAgIH1cclxufVxyXG4vLyBBdXRyZSBleGVtcGxlICgpXHJcbmZ1bmN0aW9uIGV4ZW1wbGVPcGVyYXRldXIoYSkge1xyXG4gICAgLy8gRXhlbXBsZSBzaSBhIMOpdGFpdCB1biBNb3VzZUV2ZW50XHJcbiAgICAvLyBNb3VzZUV2ZW50IMOpdGFudCB1biB0eXBlIFR5cGVTY3JpcHQsIGlsIG4nZXN0IHBhcyByZWNvbm51IHBhciBsZSB0eXBlb2YgbmF0aWYgZGUganNcclxuICAgIC8vIGlmICh0eXBlb2YgYSA9PT0gXCJNb3VzZUV2ZW50XCIpXHJcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGEpIHtcclxuICAgICAgICAvLyB2YWx1ZSBlc3QgdW5lIHByb3ByacOpdMOpIGRlIEhUTUxJbnB1dEVsZW1lbnRcclxuICAgICAgICBjb25zb2xlLmxvZygnYSBWQUxVRSA6Pj4gJywgYS52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChcInRvdG9cIiBpbiBhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2EgVE9UTyA6Pj4gJywgYSk7IC8vIE5FIHJlbnRyZXJhIGphbWFpc1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgLy8gTW91c2VFdmVudFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhIE1PVVNFRVZFTlQgOj4+ICcsIGEpO1xyXG4gICAgfVxyXG59XHJcbi8vIEF1dHJlIGNhc1xyXG4vLyBKZSB2ZXV4IGTDqWZpbmlyIG9ibGlnYXRvaXJlbWVudCB1biByZXRvdXIgRGF0ZSBzdXIgYVxyXG5leHBvcnQgZnVuY3Rpb24gaXNEYXRlKGEpIHtcclxuICAgIHJldHVybiBhIGluc3RhbmNlb2YgRGF0ZTtcclxufVxyXG4vLyBDYXMgcGx1cyBjb25jcmV0XHJcbnZhciBUVXNlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFRVc2VyKG5hbWUpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFRVc2VyO1xyXG59KCkpO1xyXG5leHBvcnQgeyBUVXNlciB9O1xyXG5leHBvcnQgZnVuY3Rpb24gaXNVc2VyKGEpIHtcclxuICAgIHJldHVybiBhIGluc3RhbmNlb2YgVFVzZXI7XHJcbn1cclxuLy8gT24gYXVyYWl0IHRyw6hzIGJpZW4gcHUgbWV0dHJlIHVuIGJvb2zDqWVuIGVuIHJldG91ciBkZSBsYSBmb25jdGlvblxyXG4vLyBtYWlzIGRhbnMgbGEgbGVjdHVyZSBkZSBsYSBkb2N1bWVudGF0aW9uIGF1IHN1cnZvbCBkZSBsYSBmb25jdGlvblxyXG4vLyBJbCBlc3QgcGx1cyBpbnTDqXJlc3NhbnQgZGUgc2F2b2lyIHF1ZSBsZSByZXRvdXIgZCd1biBib29sw6llbiBzZXJhIFxyXG4vLyBzdXIgdW4gVFVTZXIgZXQgbm9uIGQndW4gYm9vbMOpZW5cclxuLy8g4pyPIEV4ZXJjaWNlIDAxXHJcbiIsIi8qKlxyXG4gKiBQYXJ0aWUgMSAtIFR5cGVzXHJcbiAqL1xyXG52YXIgYSA9ICdIZWxsbyBsZXMgZnVsbHN0YWNrIEpTLic7XHJcbnZhciBiID0gNDI7XHJcbnZhciBjID0gdHJ1ZTtcclxudmFyIGQgPSBudWxsO1xyXG52YXIgZSA9IFsnYScsICdiJywgJ2MnXTtcclxudmFyIGYgPSBbJ2QnLCAnZScsICdmJ107XHJcbnZhciBnID0gWzEsIDIsIDMsIDRdO1xyXG52YXIgaCA9IFsnSGVsbG8nLCB0cnVlLCAyMSwgW10sIHt9LCBmdW5jdGlvbiAoKSB7IH1dO1xyXG52YXIgaSA9IHt9O1xyXG52YXIgaiA9IHsgZmlyc3RuYW1lOiAnUXVlbnRpbicsIGxhc3RuYW1lOiAnR2VlcnRzJyB9O1xyXG52YXIgayA9IHsgY291Y291OiAnSGVsbG8nIH07XHJcbnZhciBsID0gbmV3IERhdGUoKTtcclxudmFyIG0gPSBmdW5jdGlvbiAoKSB7IH07XHJcbnZhciBuID0gZnVuY3Rpb24gKCkgeyB9O1xyXG52YXIgbyA9IGZ1bmN0aW9uIChpLCBzLCBiKSB7IHJldHVybiBbJ2EnLCAnYiddOyB9O1xyXG52YXIgcCA9IGZ1bmN0aW9uICgpIHsgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW1wbGVtZW50ZWQnKTsgfTtcclxudmFyIHEgPSAnYSc7XHJcbnEgPSAxO1xyXG5xID0gdHJ1ZTtcclxuLy8gY29uc3QgcjogSFRNTFNwYW5FbGVtZW50ID0gbmV3IEhUTUxTcGFuRWxlbWVudCgpO1xyXG4vLyBjb25zdCBzOiBFbGVtZW50ID0gbmV3IEVsZW1lbnQoKTtcclxuZXhwb3J0IHZhciBtZXNUeXBlcyA9IHsgYTogYSwgYjogYiwgYzogYywgZDogZCwgZTogZSwgZjogZiwgZzogZywgaDogaCwgaTogaSwgajogaiwgazogaywgbDogbCwgbTogbSwgbjogbiwgbzogbywgcDogcCwgcTogcSB9O1xyXG4vLyBFeHBvcnQgZ3LDomNlIMOgIGV4cG9ydCwgdW4gb2JqZXQgbGFtYmRhIHF1aSBjb250aWVuZHJhIHRvdXRlcyBsZXMgdmFyaWFibGVzXHJcbi8vIENlIHF1aSBwYXIgbGEgc3VpdGUgbm91cyDDqXZpdGVyYSBkZXMgZXJyZXVycyBkZSBub21tYWdlcyBkZSB2YXJpYWJsZXMgZMOpasOgIGV4aXN0YW50ZXNcclxuLy8gQXR0ZW50aW9uIMOgIGwnaW5kZXhhdGlvblxyXG52YXIgb2IgPSB7IDA6ICdRdWVudGluJywgMTogNDIsIDI6IHRydWUgfTsgLy8gVGFibGVhdSBjbGFzc2lxdWUgKGNsZWY6IG51bWJlcilcclxuLy8gY29uc29sZS5sb2cob2IuMCk7IC8vIHBhcyBwb3NzaWJsZVxyXG5jb25zb2xlLmxvZyhvYlswXSk7IC8vIG91dHB1dCA6ICdRdWVudGluJ1xyXG4vLyBMJ2luZGV4YXRpb24gdHJhbnNmb3JtZSBmaWN0aXZlbWVudCBtb24gb2JqZXQgZW4gdGFibGVhdSBhc3NvY2lhdGlmXHJcbnZhciBvYmogPSB7IGZpcnN0bmFtZTogJ1F1ZW50aW4nLCBsYXN0bmFtZTogJ0dlZXJ0cycsIGFnZTogMjYgfTtcclxuY29uc29sZS5sb2cob2JqLmZpcnN0bmFtZSk7XHJcbmNvbnNvbGUubG9nKG9ialsnZmlyc3RuYW1lJ10pO1xyXG4vLyBBdHRlbnRpb24gcXVlIGxhIGRlcm5pw6hyZSB2ZXJzaW9uIGVzdCBsYSBtb2lucyBwcm9wcmVcclxuLy8g4oaSIGRhbmdlcmV1eCBlbiBjYXMgZGUgdW5kZWZpbmVkIG91IHVua25vd25cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKipcclxuICogUGFydGllIDEgLSBUeXBlc1xyXG4gKi9cclxuY29uc29sZS53YXJuKFwiUGFydGllIDEgLSBUeXBlc1wiKTtcclxuaW1wb3J0IHsgbWVzVHlwZXMgfSBmcm9tIFwiLi9kb2NzL3R5cGVzXCI7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5hIDo+PiAnLCBtZXNUeXBlcy5hKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmIgOj4+ICcsIG1lc1R5cGVzLmIpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuYyA6Pj4gJywgbWVzVHlwZXMuYyk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5kIDo+PiAnLCBtZXNUeXBlcy5kKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmUgOj4+ICcsIG1lc1R5cGVzLmUpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuZiA6Pj4gJywgbWVzVHlwZXMuZik7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5nIDo+PiAnLCBtZXNUeXBlcy5nKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmggOj4+ICcsIG1lc1R5cGVzLmgpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuaSA6Pj4gJywgbWVzVHlwZXMuaSk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5qIDo+PiAnLCBtZXNUeXBlcy5qKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmsgOj4+ICcsIG1lc1R5cGVzLmspO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMubCA6Pj4gJywgbWVzVHlwZXMubCk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5tIDo+PiAnLCBtZXNUeXBlcy5tKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLm4gOj4+ICcsIG1lc1R5cGVzLm4pO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMubyA6Pj4gJywgbWVzVHlwZXMubyk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5wIDo+PiAnLCBtZXNUeXBlcy5wKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLnEgOj4+ICcsIG1lc1R5cGVzLnEpO1xyXG4vKipcclxuICogUGFydGllIDIgLSBBc3NlcnRpb24gZGUgdHlwZXNcclxuICovXHJcbmNvbnNvbGUud2FybihcIlBhcnRpZSAyIC0gQXNzZXJ0aW9uIGRlIHR5cGVzXCIpO1xyXG4vLyBWb2lyIHNyYy9kb2NzL2Fzc2VydGlvblR5cGVzLnRzXHJcbi8qKlxyXG4gKiBQYXJ0aWUgMyAtIE5hcnJvd2luZ1xyXG4gKi9cclxuY29uc29sZS53YXJuKFwiUGFydGllIDMgLSBOYXJyb3dpbmdcIik7XHJcbmltcG9ydCB7IHByaW50SWQsIGV4ZW1wbGVOLCBpc0RhdGUsIGlzVXNlciwgVFVzZXIgfSBmcm9tIFwiLi9kb2NzL25hcnJvd2luZ1wiO1xyXG5wcmludElkKDEyKTtcclxucHJpbnRJZCgnYScpO1xyXG5wcmludElkKG51bGwpO1xyXG5leGVtcGxlTignYScsICdhJyk7XHJcbmV4ZW1wbGVOKCdhJywgdHJ1ZSk7XHJcbmV4ZW1wbGVOKDEyLCB0cnVlKTtcclxudmFyIGJpcnRoRGF0ZSA9IG5ldyBEYXRlKCcwMy8wNC8xOTk2Jyk7XHJcbmNvbnNvbGUubG9nKCdEYXRlIFswMy8wNC8xOTk2XTo+PiAnLCBpc0RhdGUoYmlydGhEYXRlKSk7XHJcbmNvbnNvbGUubG9nKCdTdHJpbmcgWzAzLzAzLzEwMDFdOj4+ICcsIGlzRGF0ZSgnMDMvMDMvMTAwMScpKTtcclxudmFyIHVzZXIgPSBuZXcgVFVzZXIoJ1F1ZW50aW4nKTtcclxuY29uc29sZS5sb2coJ2lzVXNlcih1c2VyKSA6Pj4gJywgaXNVc2VyKHVzZXIpKTtcclxuLyoqXHJcbiAqIFBhcnRpZSA0IC0gQ3VzdG9tIFR5cGVzXHJcbiAqL1xyXG5jb25zb2xlLndhcm4oXCJQYXJ0aWUgNCAtIEN1c3RvbSBUeXBlc1wiKTtcclxudmFyIGFkbWluID0ge1xyXG4gICAgcm9sZUlkOiAwLFxyXG4gICAgbGFzdE5hbWU6IFwiR2VlcnRzXCIsXHJcbiAgICBmaXJzdE5hbWU6IFwiUXVlbnRpblwiXHJcbn07XHJcbnZhciBhZCA9IHtcclxuICAgIHJvbGVJZDogNSxcclxuICAgIGxhc3ROYW1lOiBcIlwiLFxyXG4gICAgZmlyc3ROYW1lOiBcIlwiXHJcbn07XHJcbnZhciBhZG1pbjIgPSB7XHJcbiAgICByb2xlSWQ6IFwiXCIsXHJcbiAgICBsYXN0TmFtZTogXCJcIixcclxuICAgIGZpcnN0TmFtZTogXCJcIlxyXG59O1xyXG5jb25zb2xlLmxvZygnYWRtaW4gOj4+ICcsIGFkbWluKTtcclxudmFyIGlkSW50ID0gNDU7XHJcbnZhciBpZFN0cmluZyA9IFwiYVwiO1xyXG4vLyBsZXQgaWRCb29sZWVuOiBJZCA9IHRydWU7XHJcbmNvbnNvbGUubG9nKCdpZEludCA6Pj4gJywgaWRJbnQpO1xyXG5jb25zb2xlLmxvZygndHlwZW9mIGlkSW50IDo+PiAnLCB0eXBlb2YgaWRJbnQpO1xyXG5jb25zb2xlLmxvZygnaWRTdHJpbmcgOj4+ICcsIGlkU3RyaW5nKTtcclxuLy8gY29uc29sZS5sb2coJ2lkQm9vbGVlbiA6Pj4gJywgaWRCb29sZWVuKTtcclxudmFyIGRhdGUgPSBcIjAzLzA0LzE5OTZcIjtcclxudmFyIGRhdGUyID0gbmV3IERhdGUoKS50b1N0cmluZygpO1xyXG5jb25zb2xlLmxvZygnZGF0ZSA6Pj4gJywgZGF0ZSk7XHJcbmNvbnNvbGUubG9nKCdkYXRlIDo+PiAnLCBkYXRlMik7XHJcbi8qKlxyXG4gKiBQYXJ0aWUgNSAtIEdlbmVyaWNzXHJcbiAqL1xyXG5jb25zb2xlLndhcm4oXCJQYXJ0aWUgNSAtIEdlbmVyaWNzXCIpO1xyXG5pbXBvcnQgeyBHZW5lcmljTnVtYmVyLCBnZXRQcm9wZXJ0eSwgaWRlbnRpdHksIGlkZW50aXR5MiwgaWRlbnRpdHkzLCBpZGVudGl0eTQsIGxvZ2dpbmdJLCBNYXRoZW1hdGlxdWUgfSBmcm9tICcuL2RvY3MvZ2VuZXJpY3MnO1xyXG4vLyBPbiBwZXJkIGxlIHR5cGUgZHluYW1pcXVlIHBhc3PDqSBlbiBwYXJhbcOodHJlIMOgIGNhdXNlIGR1IGFueVxyXG52YXIgaWQxXzEgPSBpZGVudGl0eSgzKTtcclxudmFyIGlkMV8yID0gaWRlbnRpdHkoJ3RvdG8nKTtcclxudmFyIGlkMV8zID0gaWRlbnRpdHkodHJ1ZSk7XHJcbmNvbnNvbGUubG9nKCdpZDFfMSA6Pj4gJywgaWQxXzEpO1xyXG5jb25zb2xlLmxvZygndHlwZW9mIGlkMV8xIDo+PiAnLCB0eXBlb2YgaWQxXzEpO1xyXG5jb25zb2xlLmxvZygnaWQxXzIgOj4+ICcsIGlkMV8yKTtcclxuY29uc29sZS5sb2coJ3R5cGVvZiBpZDFfMiA6Pj4gJywgdHlwZW9mIGlkMV8yKTtcclxuY29uc29sZS5sb2coJ2lkMV8zIDo+PiAnLCBpZDFfMyk7XHJcbmNvbnNvbGUubG9nKCd0eXBlb2YgaWQxXzMgOj4+ICcsIHR5cGVvZiBpZDFfMyk7XHJcbnZhciBpZDIgPSBpZGVudGl0eTIoJ2UnKTtcclxuY29uc29sZS5sb2coJ2lkMiA6Pj4gJywgaWQyKTtcclxuY29uc29sZS5sb2coJ3R5cGVvZiBpZDIgOj4+ICcsIHR5cGVvZiBpZDIpO1xyXG52YXIgaWQzID0gaWRlbnRpdHkyKDUpO1xyXG5jb25zb2xlLmxvZygnaWQzIDo+PiAnLCBpZDMpO1xyXG5jb25zb2xlLmxvZygndHlwZW9mIGlkMyA6Pj4gJywgdHlwZW9mIGlkMyk7XHJcbnZhciBpZDQgPSBpZGVudGl0eTIoJ2EnKTtcclxuY29uc29sZS5sb2coJ2lkNCA6Pj4gJywgaWQ0KTtcclxuY29uc29sZS5sb2coJ3R5cGVvZiBpZDQgOj4+ICcsIHR5cGVvZiBpZDQpO1xyXG4vLyBpZGVudGl0eTI8QWRtaW4+KDMpOyBQYXMgcG9zc2libGUgY2FyIGMnZXN0IHVuIG51bWJlciBldCBub24gdW4gYWRtaW5cclxudmFyIGlkNSA9IGlkZW50aXR5MyhcIkNvdWNvdVwiLCA0Mik7XHJcbmNvbnNvbGUubG9nKCdpZDUgOj4+ICcsIGlkNSk7XHJcbnZhciBpZDYgPSBpZGVudGl0eTMoJ0hlbGxvJywgJ1R5cGVTY3JpcHQnKTtcclxuY29uc29sZS5sb2coJ2lkNiA6Pj4gJywgaWQ2KTtcclxudmFyIGlkNyA9IGlkZW50aXR5NChbMSwgMiwgMywgNF0pO1xyXG5jb25zb2xlLmxvZygnaWQ3IDo+PiAnLCBpZDcpO1xyXG52YXIgbmIgPSBuZXcgR2VuZXJpY051bWJlcigpO1xyXG5uYi56ZXJvVmFsdWU7XHJcbm5iLmFkZCA9IGZ1bmN0aW9uICh4LCB5KSB7XHJcbiAgICByZXR1cm4geCArIHk7XHJcbn07XHJcbmNvbnNvbGUubG9nKG5iLmFkZCgzLCA1KSk7XHJcbnZhciBsZyA9IGxvZ2dpbmdJKFs1LCA1LCA2LCAzLCA0LCA4XSk7XHJcbmNvbnNvbGUubG9nKCdsZyA6Pj4gJywgbGcpO1xyXG4vLyAgTmUgZm9uY3Rpb25uZSBwYXNcclxuLy8gY29uc3QgbGcwID0gbG9nZ2luZ0k8bnVtYmVyPig1KVxyXG4vLyBjb25zdCBsZzAgPSBsb2dnaW5nSSg1KVxyXG4vLyBjb25zb2xlLmxvZygnbGcwIDo+PiAnLCBsZzApO1xyXG52YXIgeCA9IHtcclxuICAgIHJvbGVJZDogMCxcclxuICAgIGxhc3ROYW1lOiBcIkdlZXJ0c1wiLFxyXG4gICAgZmlyc3ROYW1lOiBcIlF1ZW50aW5cIlxyXG59O1xyXG5jb25zb2xlLmxvZygneCA6Pj4gJywgZ2V0UHJvcGVydHkoeCwgJ2xhc3ROYW1lJykpO1xyXG4vLyBjb25zb2xlLmxvZygneCA6Pj4gJywgZ2V0UHJvcGVydHkoeCwgJ2hlbGxvJykpOyAvLyBOZSBmb25jdGlvbm5lIHBhcyBjYXIgcGFzIHVuZSBjbGVmIGRlIFR5cGUgZGUgbCdvYmpldCAoQWRtaW4pXHJcbi8vIGNvbnNvbGUubG9nKCd4IDo+PiAnLCBnZXRQcm9wZXJ0eSh4LCAzKSk7XHJcbnZhciBteVRvdGFsID0gbmV3IE1hdGhlbWF0aXF1ZSgpO1xyXG5teVRvdGFsLmFkZCA9IGZ1bmN0aW9uICh4LCB5KSB7IHJldHVybiB4ICsgeTsgfTtcclxubXlUb3RhbC5zdWIgPSBmdW5jdGlvbiAoeCwgeSkgeyByZXR1cm4geCAtIHk7IH07XHJcbmNvbnNvbGUubG9nKG15VG90YWwuYWRkKDUsIDYpKTtcclxuY29uc29sZS5sb2cobXlUb3RhbC5zdWIoNSwgNikpO1xyXG4vLyBsZXQgbXlUb3RhbDIgPSBuZXcgTWF0aGVtYXRpcXVlPHN0cmluZywgc3RyaW5nPigpO1xyXG4iLCIvKipcclxuICogUGFydGllIDEgLSDinI/vuI8gRXhlcmNpY2UgMDFcclxuICovXHJcbi8qKlxyXG4gKiBDcsOpZXIgdW4gY29kZSBwZXJtZXR0YW50IGRlIGNyw6llciB1biBjb21wdGV1ciBjbGFzc2lxdWUsIGF2ZWMgKyAxLCAtMSBldCA9Li4uLFxyXG4gKiBpbCBmYXVkcmEgdHlww6kgbGUgdG91dCBhdSBtYXhpbXVtLCBwcsOpcGFyZXIgMiBmb25jdGlvbnMgcG91ciDDp2FcclxuICovXHJcbmNvbnNvbGUud2FybignRXhlcmNpY2UgMDEnKTtcclxudmFyIGJ0bk1vaW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bk1vaW5zJyk7XHJcbnZhciBidG5QbHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0blBsdXMnKTtcclxudmFyIHRvdGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvdGFsJyk7XHJcbnZhciB2YWxldXI7XHJcbmlmICh0b3RhbClcclxuICAgIHZhbGV1ciA9IHBhcnNlSW50KHRvdGFsLmlubmVyVGV4dCk7XHJcbnZhciBpbmNyZW1lbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAodG90YWwpXHJcbiAgICAgICAgdG90YWwuaW5uZXJUZXh0ID0gKCsrdmFsZXVyKS50b1N0cmluZygpO1xyXG59O1xyXG4vLyBjb25zdCBkZWNyZW1lbnQ6IEZ1bmN0aW9uID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbnZhciBkZWNyZW1lbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAodG90YWwpXHJcbiAgICAgICAgdG90YWwuaW5uZXJUZXh0ID0gKC0tdmFsZXVyKS50b1N0cmluZygpO1xyXG59O1xyXG5pZiAoYnRuUGx1cylcclxuICAgIGJ0blBsdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpbmNyZW1lbnQpO1xyXG5pZiAoYnRuTW9pbnMpXHJcbiAgICBidG5Nb2lucy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlY3JlbWVudCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==