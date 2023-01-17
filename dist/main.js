/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/docs/classes.ts":
/*!*****************************!*\
  !*** ./src/docs/classes.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyUser": () => (/* binding */ MyUser)
/* harmony export */ });
/**
 * Partie 6 - Classes
 */
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Person__password;
class Human {
    constructor() {
        this.gender = '';
        this.height = 0;
        this.weight = 0;
        this._etnic = '';
        this.__colorEyes = 'blue';
    }
}
// Encapsulation 
// → Le niveau de portée des propriétés dans le classe
// public       → disponible partout
// protected    → disponible uniquement dans la classe parent et dans les classes enfants (TypeScript !)
// private      → disponible uniquement dans la classe (TypeScript !)
// #            -> cfr. private - rendre invisible en dehors de la classe (JS)
// Héritage
// Transmettre les membres d'une classe parent à ses classes enfants
// Pour faire de l'héritage, on utilise extends
// 🪧 Un parent ne peut pas accéder à une propriété d'un enfant, par contre l'inverse oui !
// 🪧 Le constructeur du parent devra toujours être appelé dans celui de l'enfant
// Intialisation des propriétés
// prop: type = valeur  → Initialisation par défaut des valeurs
// prop!: type          → Pas besoin d'initialiser lors de la déclaration mais doit être initialiser dans le constructeur (sauf abstract)
// prop?: type          → Peut prendre la valeur du type associé ou undefined
class Person extends Human {
    constructor(id, name, firstname, password) {
        super(); // Permet de créer le parent
        _Person__password.set(this, void 0);
        this._upperPassword = (password) => {
            return password.toUpperCase();
        };
        if (!password)
            password = 'Coucou';
        __classPrivateFieldSet(this, _Person__password, this._upperPassword(password), "f");
        this.id = id;
        this.name = name;
        this.__colorEyes = 'red';
    }
}
_Person__password = new WeakMap();
class MyUser extends Person {
    constructor(id, name, firstname, password) {
        super(id, name, firstname, password);
        this.login = '';
        this.__colorEyes = 'yellow';
    }
}


/***/ }),

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
const tab = [1, 2, 3];
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
class GenericNumber {
}
// Permet de créer une fonction générique basée sur une interface
// → Filtrer les types avec ceux uniquement qui possèdent les propriétés de l'interface
function loggingI(arg) {
    console.log('Length :>>', arg.length);
    return arg;
}
function getProperty(obj, key) {
    return obj[key];
}
class Mathematique {
}


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
let btn1 = document.querySelector('#increment'); // Element | null
let btn2 = document.querySelector('#increment'); // Element
let btn3 = document.querySelector('#increment'); // HTMLButtonElement
// Attention pour la version 2 et 3, vous empêchez le querySelector de 
// fonctionner correctement en cas de null
// Le mieux sera d'utiliser des conditions au lieu du narrowing '!' ou 'as'
// Autre exemple
let btn_dec = (event) => {
    event.preventDefault();
    const input = document.querySelector('#res');
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
            let tmpId = parseInt(id);
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
class TUser {
    constructor(name) { this.name = name; }
}
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
const a = 'Hello les fullstack JS.';
const b = 42;
const c = true;
const d = null;
const e = ['a', 'b', 'c'];
const f = ['d', 'e', 'f'];
const g = [1, 2, 3, 4];
const h = ['Hello', true, 21, [], {}, () => { }];
const i = {};
const j = { firstname: 'Quentin', lastname: 'Geerts' };
const k = { coucou: 'Hello' };
const l = new Date();
const m = () => { };
const n = () => { };
const o = (i, s, b) => ['a', 'b'];
const p = () => { throw new Error('Not implemented'); };
let q = 'a';
q = 1;
q = true;
// const r: HTMLSpanElement = new HTMLSpanElement();
// const s: Element = new Element();
let mesTypes = { a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q };
// Export grâce à export, un objet lambda qui contiendra toutes les variables
// Ce qui par la suite nous évitera des erreurs de nommages de variables déjà existantes
// Attention à l'indexation
const ob = { 0: 'Quentin', 1: 42, 2: true }; // Tableau classique (clef: number)
// console.log(ob.0); // pas possible
console.log(ob[0]); // output : 'Quentin'
// L'indexation transforme fictivement mon objet en tableau associatif
const obj = { firstname: 'Quentin', lastname: 'Geerts', age: 26 };
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
/* harmony import */ var _docs_classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./docs/classes */ "./src/docs/classes.ts");
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
let birthDate = new Date('03/04/1996');
console.log('Date [03/04/1996]:>> ', (0,_docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.isDate)(birthDate));
console.log('String [03/03/1001]:>> ', (0,_docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.isDate)('03/03/1001'));
let user = new _docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.TUser('Quentin');
console.log('isUser(user) :>> ', (0,_docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.isUser)(user));
/**
 * Partie 4 - Custom Types
 */
console.warn("Partie 4 - Custom Types");
let admin = {
    roleId: 0,
    lastName: "Geerts",
    firstName: "Quentin"
};
let ad = {
    roleId: 5,
    lastName: "",
    firstName: ""
};
let admin2 = {
    roleId: "",
    lastName: "",
    firstName: ""
};
console.log('admin :>> ', admin);
let idInt = 45;
let idString = "a";
// let idBooleen: Id = true;
console.log('idInt :>> ', idInt);
console.log('typeof idInt :>> ', typeof idInt);
console.log('idString :>> ', idString);
// console.log('idBooleen :>> ', idBooleen);
let date = "03/04/1996";
let date2 = new Date().toString();
console.log('date :>> ', date);
console.log('date :>> ', date2);
/**
 * Partie 5 - Generics
 */
console.warn("Partie 5 - Generics");

// On perd le type dynamique passé en paramètre à cause du any
const id1_1 = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.identity)(3);
const id1_2 = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.identity)('toto');
const id1_3 = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.identity)(true);
console.log('id1_1 :>> ', id1_1);
console.log('typeof id1_1 :>> ', typeof id1_1);
console.log('id1_2 :>> ', id1_2);
console.log('typeof id1_2 :>> ', typeof id1_2);
console.log('id1_3 :>> ', id1_3);
console.log('typeof id1_3 :>> ', typeof id1_3);
const id2 = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.identity2)('e');
console.log('id2 :>> ', id2);
console.log('typeof id2 :>> ', typeof id2);
const id3 = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.identity2)(5);
console.log('id3 :>> ', id3);
console.log('typeof id3 :>> ', typeof id3);
const id4 = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.identity2)('a');
console.log('id4 :>> ', id4);
console.log('typeof id4 :>> ', typeof id4);
// identity2<Admin>(3); Pas possible car c'est un number et non un admin
const id5 = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.identity3)("Coucou", 42);
console.log('id5 :>> ', id5);
const id6 = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.identity3)('Hello', 'TypeScript');
console.log('id6 :>> ', id6);
const id7 = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.identity4)([1, 2, 3, 4]);
console.log('id7 :>> ', id7);
let nb = new _docs_generics__WEBPACK_IMPORTED_MODULE_2__.GenericNumber();
nb.zeroValue;
nb.add = function (x, y) {
    return x + y;
};
console.log(nb.add(3, 5));
const lg = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.loggingI)([5, 5, 6, 3, 4, 8]);
console.log('lg :>> ', lg);
//  Ne fonctionne pas
// const lg0 = loggingI<number>(5)
// const lg0 = loggingI(5)
// console.log('lg0 :>> ', lg0);
let x = {
    roleId: 0,
    lastName: "Geerts",
    firstName: "Quentin"
};
console.log('x :>> ', (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.getProperty)(x, 'lastName'));
// console.log('x :>> ', getProperty(x, 'hello')); // Ne fonctionne pas car pas une clef de Type de l'objet (Admin)
// console.log('x :>> ', getProperty(x, 3));
let myTotal = new _docs_generics__WEBPACK_IMPORTED_MODULE_2__.Mathematique();
myTotal.add = (x, y) => x + y;
myTotal.sub = (x, y) => x - y;
console.log(myTotal.add(5, 6));
console.log(myTotal.sub(5, 6));
// let myTotal2 = new Mathematique<string, string>();
/**
 * Partie 6 - Classes
 */
console.warn("Partie 6 - Classes");

let myUser = new _docs_classes__WEBPACK_IMPORTED_MODULE_3__.MyUser(1, 'Geerts');
console.log('myUser :>> ', myUser);

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
const btnMoins = document.querySelector('#btnMoins');
const btnPlus = document.querySelector('#btnPlus');
const total = document.querySelector('#total');
let valeur;
if (total)
    valeur = parseInt(total.innerText);
const increment = (event) => {
    // event.preventDefault();
    if (total)
        total.innerText = (++valeur).toString();
};
// const decrement: Function = (event: MouseEvent) => {
const decrement = (event) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixTQUFJLElBQUksU0FBSTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pELGlEQUFpRDtBQUNqRCxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQLHdCQUF3QjtBQUN4QjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsV0FBVztBQUMvQztBQUNBLFlBQVk7QUFDWixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLGlCQUFpQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxhQUFhLGdDQUFnQztBQUM3QyxzQkFBc0I7QUFDdEIsb0JBQW9CO0FBQ3BCO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDcENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ3dDO0FBQ3hDLCtCQUErQixtREFBVTtBQUN6QywrQkFBK0IsbURBQVU7QUFDekMsK0JBQStCLG1EQUFVO0FBQ3pDLCtCQUErQixtREFBVTtBQUN6QywrQkFBK0IsbURBQVU7QUFDekMsK0JBQStCLG1EQUFVO0FBQ3pDLCtCQUErQixtREFBVTtBQUN6QywrQkFBK0IsbURBQVU7QUFDekMsK0JBQStCLG1EQUFVO0FBQ3pDLCtCQUErQixtREFBVTtBQUN6QywrQkFBK0IsbURBQVU7QUFDekMsK0JBQStCLG1EQUFVO0FBQ3pDLCtCQUErQixtREFBVTtBQUN6QywrQkFBK0IsbURBQVU7QUFDekMsK0JBQStCLG1EQUFVO0FBQ3pDLCtCQUErQixtREFBVTtBQUN6QywrQkFBK0IsbURBQVU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzRFO0FBQzVFLHdEQUFPO0FBQ1Asd0RBQU87QUFDUCx3REFBTztBQUNQLHlEQUFRO0FBQ1IseURBQVE7QUFDUix5REFBUTtBQUNSO0FBQ0EscUNBQXFDLHVEQUFNO0FBQzNDLHVDQUF1Qyx1REFBTTtBQUM3QyxlQUFlLGtEQUFLO0FBQ3BCLGlDQUFpQyx1REFBTTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2dJO0FBQ2hJO0FBQ0EsY0FBYyx3REFBUTtBQUN0QixjQUFjLHdEQUFRO0FBQ3RCLGNBQWMsd0RBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx5REFBUztBQUNyQjtBQUNBO0FBQ0EsWUFBWSx5REFBUztBQUNyQjtBQUNBO0FBQ0EsWUFBWSx5REFBUztBQUNyQjtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLFlBQVkseURBQVM7QUFDckI7QUFDQSxZQUFZLHlEQUFTO0FBQ3JCO0FBQ0EsWUFBWSx5REFBUztBQUNyQjtBQUNBLGFBQWEseURBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsd0RBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMkRBQVc7QUFDakMsbURBQW1EO0FBQ25EO0FBQ0Esa0JBQWtCLHdEQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN3QztBQUN4QyxpQkFBaUIsaURBQU07QUFDdkI7Ozs7Ozs7OztBQ3pJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2RvY3MvY2xhc3Nlcy50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvZG9jcy9nZW5lcmljcy50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvZG9jcy9uYXJyb3dpbmcudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2RvY3MvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9leGVyY2ljZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFBhcnRpZSA2IC0gQ2xhc3Nlc1xyXG4gKi9cclxudmFyIF9fY2xhc3NQcml2YXRlRmllbGRTZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRTZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XHJcbn07XHJcbnZhciBfUGVyc29uX19wYXNzd29yZDtcclxuY2xhc3MgSHVtYW4ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5nZW5kZXIgPSAnJztcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDA7XHJcbiAgICAgICAgdGhpcy53ZWlnaHQgPSAwO1xyXG4gICAgICAgIHRoaXMuX2V0bmljID0gJyc7XHJcbiAgICAgICAgdGhpcy5fX2NvbG9yRXllcyA9ICdibHVlJztcclxuICAgIH1cclxufVxyXG4vLyBFbmNhcHN1bGF0aW9uIFxyXG4vLyDihpIgTGUgbml2ZWF1IGRlIHBvcnTDqWUgZGVzIHByb3ByacOpdMOpcyBkYW5zIGxlIGNsYXNzZVxyXG4vLyBwdWJsaWMgICAgICAg4oaSIGRpc3BvbmlibGUgcGFydG91dFxyXG4vLyBwcm90ZWN0ZWQgICAg4oaSIGRpc3BvbmlibGUgdW5pcXVlbWVudCBkYW5zIGxhIGNsYXNzZSBwYXJlbnQgZXQgZGFucyBsZXMgY2xhc3NlcyBlbmZhbnRzIChUeXBlU2NyaXB0ICEpXHJcbi8vIHByaXZhdGUgICAgICDihpIgZGlzcG9uaWJsZSB1bmlxdWVtZW50IGRhbnMgbGEgY2xhc3NlIChUeXBlU2NyaXB0ICEpXHJcbi8vICMgICAgICAgICAgICAtPiBjZnIuIHByaXZhdGUgLSByZW5kcmUgaW52aXNpYmxlIGVuIGRlaG9ycyBkZSBsYSBjbGFzc2UgKEpTKVxyXG4vLyBIw6lyaXRhZ2VcclxuLy8gVHJhbnNtZXR0cmUgbGVzIG1lbWJyZXMgZCd1bmUgY2xhc3NlIHBhcmVudCDDoCBzZXMgY2xhc3NlcyBlbmZhbnRzXHJcbi8vIFBvdXIgZmFpcmUgZGUgbCdow6lyaXRhZ2UsIG9uIHV0aWxpc2UgZXh0ZW5kc1xyXG4vLyDwn6qnIFVuIHBhcmVudCBuZSBwZXV0IHBhcyBhY2PDqWRlciDDoCB1bmUgcHJvcHJpw6l0w6kgZCd1biBlbmZhbnQsIHBhciBjb250cmUgbCdpbnZlcnNlIG91aSAhXHJcbi8vIPCfqqcgTGUgY29uc3RydWN0ZXVyIGR1IHBhcmVudCBkZXZyYSB0b3Vqb3VycyDDqnRyZSBhcHBlbMOpIGRhbnMgY2VsdWkgZGUgbCdlbmZhbnRcclxuLy8gSW50aWFsaXNhdGlvbiBkZXMgcHJvcHJpw6l0w6lzXHJcbi8vIHByb3A6IHR5cGUgPSB2YWxldXIgIOKGkiBJbml0aWFsaXNhdGlvbiBwYXIgZMOpZmF1dCBkZXMgdmFsZXVyc1xyXG4vLyBwcm9wITogdHlwZSAgICAgICAgICDihpIgUGFzIGJlc29pbiBkJ2luaXRpYWxpc2VyIGxvcnMgZGUgbGEgZMOpY2xhcmF0aW9uIG1haXMgZG9pdCDDqnRyZSBpbml0aWFsaXNlciBkYW5zIGxlIGNvbnN0cnVjdGV1ciAoc2F1ZiBhYnN0cmFjdClcclxuLy8gcHJvcD86IHR5cGUgICAgICAgICAg4oaSIFBldXQgcHJlbmRyZSBsYSB2YWxldXIgZHUgdHlwZSBhc3NvY2nDqSBvdSB1bmRlZmluZWRcclxuY2xhc3MgUGVyc29uIGV4dGVuZHMgSHVtYW4ge1xyXG4gICAgY29uc3RydWN0b3IoaWQsIG5hbWUsIGZpcnN0bmFtZSwgcGFzc3dvcmQpIHtcclxuICAgICAgICBzdXBlcigpOyAvLyBQZXJtZXQgZGUgY3LDqWVyIGxlIHBhcmVudFxyXG4gICAgICAgIF9QZXJzb25fX3Bhc3N3b3JkLnNldCh0aGlzLCB2b2lkIDApO1xyXG4gICAgICAgIHRoaXMuX3VwcGVyUGFzc3dvcmQgPSAocGFzc3dvcmQpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhc3N3b3JkLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoIXBhc3N3b3JkKVxyXG4gICAgICAgICAgICBwYXNzd29yZCA9ICdDb3Vjb3UnO1xyXG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1BlcnNvbl9fcGFzc3dvcmQsIHRoaXMuX3VwcGVyUGFzc3dvcmQocGFzc3dvcmQpLCBcImZcIik7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5fX2NvbG9yRXllcyA9ICdyZWQnO1xyXG4gICAgfVxyXG59XHJcbl9QZXJzb25fX3Bhc3N3b3JkID0gbmV3IFdlYWtNYXAoKTtcclxuZXhwb3J0IGNsYXNzIE15VXNlciBleHRlbmRzIFBlcnNvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgbmFtZSwgZmlyc3RuYW1lLCBwYXNzd29yZCkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBuYW1lLCBmaXJzdG5hbWUsIHBhc3N3b3JkKTtcclxuICAgICAgICB0aGlzLmxvZ2luID0gJyc7XHJcbiAgICAgICAgdGhpcy5fX2NvbG9yRXllcyA9ICd5ZWxsb3cnO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBQYXJ0aWUgNSAtIEdlbmVyaWNzXHJcbiAqL1xyXG4vKlxyXG4gICAgRm9uY3Rpb25zIGfDqW7DqXJpcXVlc1xyXG4qL1xyXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkoYXJnKSB7XHJcbiAgICByZXR1cm4gYXJnO1xyXG59XHJcbi8vIGZ1bmN0aW9uIGlkTnVtYmVyIChhcmc6IG51bWJlcikge1xyXG4vLyAgICAgLy8gLi4uXHJcbi8vICAgICByZXR1cm4gYXJnXHJcbi8vIH1cclxuLy8gZnVuY3Rpb24gaWRTdHJpbmcgKGFyZzogc3RyaW5nKSB7XHJcbi8vICAgICAvLyAuLi5cclxuLy8gICAgIHJldHVybiBhcmdcclxuLy8gfVxyXG4vLyBmdW5jdGlvbiBpZEJvb2xlYW4oYXJnOiBzdHJpbmcpIHtcclxuLy8gICAgIC8vIC4uLlxyXG4vLyAgICAgcmV0dXJuIGFyZ1xyXG4vLyB9XHJcbi8vIGZ1bmN0aW9uIGlkQWxsIChhcmc6IGFueSkge1xyXG4vLyAgICAgaWYgKHR5cGVvZiBhcmcgPT09ICdudW1iZXInKSAvLyAuLi5cclxuLy8gICAgIGlmICh0eXBlb2YgYXJnID09PSAnc3RyaW5nJykgLy8gLi4uXHJcbi8vICAgICBpZiAodHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nKSAvLyAuLi5cclxuLy8gICAgIHJldHVybiBhcmdcclxuLy8gfVxyXG4vLyBDcsOpYXRpb24gZCd1bmUgZm9uY3Rpb24gZ8OpbsOpcmljXHJcbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eTIoYXJnKSB7XHJcbiAgICAvLyBUeXBlIC4uLlxyXG4gICAgcmV0dXJuIGFyZztcclxufVxyXG5jb25zdCB0YWIgPSBbMSwgMiwgM107XHJcbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eTMoYXJnMSwgYXJnMikge1xyXG4gICAgaWYgKHR5cGVvZiBhcmcxID09PSB0eXBlb2YgYXJnMilcclxuICAgICAgICByZXR1cm4gYXJnMTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gYXJnMjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHk0KGFyZ3MpIHtcclxuICAgIGNvbnNvbGUubG9nKGFyZ3MubGVuZ3RoKTtcclxuICAgIHJldHVybiBhcmdzO1xyXG59XHJcbi8qXHJcbiAgICBDbGFzc2VzIGfDqW7DqXJpcXVlc1xyXG4qL1xyXG5leHBvcnQgY2xhc3MgR2VuZXJpY051bWJlciB7XHJcbn1cclxuLy8gUGVybWV0IGRlIGNyw6llciB1bmUgZm9uY3Rpb24gZ8OpbsOpcmlxdWUgYmFzw6llIHN1ciB1bmUgaW50ZXJmYWNlXHJcbi8vIOKGkiBGaWx0cmVyIGxlcyB0eXBlcyBhdmVjIGNldXggdW5pcXVlbWVudCBxdWkgcG9zc8OoZGVudCBsZXMgcHJvcHJpw6l0w6lzIGRlIGwnaW50ZXJmYWNlXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2dnaW5nSShhcmcpIHtcclxuICAgIGNvbnNvbGUubG9nKCdMZW5ndGggOj4+JywgYXJnLmxlbmd0aCk7XHJcbiAgICByZXR1cm4gYXJnO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9wZXJ0eShvYmosIGtleSkge1xyXG4gICAgcmV0dXJuIG9ialtrZXldO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBNYXRoZW1hdGlxdWUge1xyXG59XHJcbiIsIi8qKlxyXG4gKiBQYXJ0aWUgMyAtIE5hcnJvd2luZ1xyXG4gKiBQZXJtZXR0cmUgZGUgcsOpZHVpcmUgbGEgbGlzdGUgZGVzIHR5cGVzIGRpc3BvbmlibGVzXHJcbiAqL1xyXG5sZXQgYnRuMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmNyZW1lbnQnKTsgLy8gRWxlbWVudCB8IG51bGxcclxubGV0IGJ0bjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5jcmVtZW50Jyk7IC8vIEVsZW1lbnRcclxubGV0IGJ0bjMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5jcmVtZW50Jyk7IC8vIEhUTUxCdXR0b25FbGVtZW50XHJcbi8vIEF0dGVudGlvbiBwb3VyIGxhIHZlcnNpb24gMiBldCAzLCB2b3VzIGVtcMOqY2hleiBsZSBxdWVyeVNlbGVjdG9yIGRlIFxyXG4vLyBmb25jdGlvbm5lciBjb3JyZWN0ZW1lbnQgZW4gY2FzIGRlIG51bGxcclxuLy8gTGUgbWlldXggc2VyYSBkJ3V0aWxpc2VyIGRlcyBjb25kaXRpb25zIGF1IGxpZXUgZHUgbmFycm93aW5nICchJyBvdSAnYXMnXHJcbi8vIEF1dHJlIGV4ZW1wbGVcclxubGV0IGJ0bl9kZWMgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXMnKTtcclxuICAgIGlmIChpbnB1dCkge1xyXG4gICAgICAgIC8vIEhUTUxJbnB1dEVsZW1lbnRcclxuICAgICAgICAvLyBQcmVtaWVyIMOpbMOpbWVudCBkdSBuYXJyb3dpbmdcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIC8vIG51bGxcclxuICAgIH1cclxufTtcclxuLy8gQXV0cmUgZXhlbXBsZVxyXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRJZChpZCkge1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgICAgLy8gc3RyaW5nIHwgbnVtYmVyXHJcbiAgICAgICAgaWYgKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAvLyBudW1iZXJcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2lkIE5VTUJFUiA6Pj4gJywgaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gc3RyaW5nXHJcbiAgICAgICAgICAgIGxldCB0bXBJZCA9IHBhcnNlSW50KGlkKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2lkIFNUUklORyA6Pj4gJywgaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIC8vIG51bGxcclxuICAgICAgICBpZCA9IDQyO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpZCBOVUxMIDo+PiAnLCBpZCk7XHJcbiAgICB9XHJcbn1cclxuLy8gQXV0cmUgZXhlbXBsZSAoZG91YmxlIHZhcmlhYmxlcyBsb2NhbGVzKVxyXG5leHBvcnQgZnVuY3Rpb24gZXhlbXBsZU4oYSwgYikge1xyXG4gICAgaWYgKGEgPT09IGIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnYSBET1VCTEU6Pj4gJywgYSk7IC8vIEljaSBpbCBzZXJhIGQnb2ZmaWNlIGVuIHN0cmluZ1xyXG4gICAgICAgIC8vIExlIHNldWwgcG9pbnQgY29tbXVuIGVudHJlIGEgZXQgYiBlc3Qgc3RyaW5nXHJcbiAgICB9XHJcbn1cclxuLy8gQXV0cmUgZXhlbXBsZSAoKVxyXG5mdW5jdGlvbiBleGVtcGxlT3BlcmF0ZXVyKGEpIHtcclxuICAgIC8vIEV4ZW1wbGUgc2kgYSDDqXRhaXQgdW4gTW91c2VFdmVudFxyXG4gICAgLy8gTW91c2VFdmVudCDDqXRhbnQgdW4gdHlwZSBUeXBlU2NyaXB0LCBpbCBuJ2VzdCBwYXMgcmVjb25udSBwYXIgbGUgdHlwZW9mIG5hdGlmIGRlIGpzXHJcbiAgICAvLyBpZiAodHlwZW9mIGEgPT09IFwiTW91c2VFdmVudFwiKVxyXG4gICAgaWYgKFwidmFsdWVcIiBpbiBhKSB7XHJcbiAgICAgICAgLy8gdmFsdWUgZXN0IHVuZSBwcm9wcmnDqXTDqSBkZSBIVE1MSW5wdXRFbGVtZW50XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2EgVkFMVUUgOj4+ICcsIGEudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoXCJ0b3RvXCIgaW4gYSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhIFRPVE8gOj4+ICcsIGEpOyAvLyBORSByZW50cmVyYSBqYW1haXNcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIC8vIE1vdXNlRXZlbnRcclxuICAgICAgICBjb25zb2xlLmxvZygnYSBNT1VTRUVWRU5UIDo+PiAnLCBhKTtcclxuICAgIH1cclxufVxyXG4vLyBBdXRyZSBjYXNcclxuLy8gSmUgdmV1eCBkw6lmaW5pciBvYmxpZ2F0b2lyZW1lbnQgdW4gcmV0b3VyIERhdGUgc3VyIGFcclxuZXhwb3J0IGZ1bmN0aW9uIGlzRGF0ZShhKSB7XHJcbiAgICByZXR1cm4gYSBpbnN0YW5jZW9mIERhdGU7XHJcbn1cclxuLy8gQ2FzIHBsdXMgY29uY3JldFxyXG5leHBvcnQgY2xhc3MgVFVzZXIge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSkgeyB0aGlzLm5hbWUgPSBuYW1lOyB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVXNlcihhKSB7XHJcbiAgICByZXR1cm4gYSBpbnN0YW5jZW9mIFRVc2VyO1xyXG59XHJcbi8vIE9uIGF1cmFpdCB0csOocyBiaWVuIHB1IG1ldHRyZSB1biBib29sw6llbiBlbiByZXRvdXIgZGUgbGEgZm9uY3Rpb25cclxuLy8gbWFpcyBkYW5zIGxhIGxlY3R1cmUgZGUgbGEgZG9jdW1lbnRhdGlvbiBhdSBzdXJ2b2wgZGUgbGEgZm9uY3Rpb25cclxuLy8gSWwgZXN0IHBsdXMgaW50w6lyZXNzYW50IGRlIHNhdm9pciBxdWUgbGUgcmV0b3VyIGQndW4gYm9vbMOpZW4gc2VyYSBcclxuLy8gc3VyIHVuIFRVU2VyIGV0IG5vbiBkJ3VuIGJvb2zDqWVuXHJcbi8vIOKcjyBFeGVyY2ljZSAwMVxyXG4iLCIvKipcclxuICogUGFydGllIDEgLSBUeXBlc1xyXG4gKi9cclxuY29uc3QgYSA9ICdIZWxsbyBsZXMgZnVsbHN0YWNrIEpTLic7XHJcbmNvbnN0IGIgPSA0MjtcclxuY29uc3QgYyA9IHRydWU7XHJcbmNvbnN0IGQgPSBudWxsO1xyXG5jb25zdCBlID0gWydhJywgJ2InLCAnYyddO1xyXG5jb25zdCBmID0gWydkJywgJ2UnLCAnZiddO1xyXG5jb25zdCBnID0gWzEsIDIsIDMsIDRdO1xyXG5jb25zdCBoID0gWydIZWxsbycsIHRydWUsIDIxLCBbXSwge30sICgpID0+IHsgfV07XHJcbmNvbnN0IGkgPSB7fTtcclxuY29uc3QgaiA9IHsgZmlyc3RuYW1lOiAnUXVlbnRpbicsIGxhc3RuYW1lOiAnR2VlcnRzJyB9O1xyXG5jb25zdCBrID0geyBjb3Vjb3U6ICdIZWxsbycgfTtcclxuY29uc3QgbCA9IG5ldyBEYXRlKCk7XHJcbmNvbnN0IG0gPSAoKSA9PiB7IH07XHJcbmNvbnN0IG4gPSAoKSA9PiB7IH07XHJcbmNvbnN0IG8gPSAoaSwgcywgYikgPT4gWydhJywgJ2InXTtcclxuY29uc3QgcCA9ICgpID0+IHsgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW1wbGVtZW50ZWQnKTsgfTtcclxubGV0IHEgPSAnYSc7XHJcbnEgPSAxO1xyXG5xID0gdHJ1ZTtcclxuLy8gY29uc3QgcjogSFRNTFNwYW5FbGVtZW50ID0gbmV3IEhUTUxTcGFuRWxlbWVudCgpO1xyXG4vLyBjb25zdCBzOiBFbGVtZW50ID0gbmV3IEVsZW1lbnQoKTtcclxuZXhwb3J0IGxldCBtZXNUeXBlcyA9IHsgYSwgYiwgYywgZCwgZSwgZiwgZywgaCwgaSwgaiwgaywgbCwgbSwgbiwgbywgcCwgcSB9O1xyXG4vLyBFeHBvcnQgZ3LDomNlIMOgIGV4cG9ydCwgdW4gb2JqZXQgbGFtYmRhIHF1aSBjb250aWVuZHJhIHRvdXRlcyBsZXMgdmFyaWFibGVzXHJcbi8vIENlIHF1aSBwYXIgbGEgc3VpdGUgbm91cyDDqXZpdGVyYSBkZXMgZXJyZXVycyBkZSBub21tYWdlcyBkZSB2YXJpYWJsZXMgZMOpasOgIGV4aXN0YW50ZXNcclxuLy8gQXR0ZW50aW9uIMOgIGwnaW5kZXhhdGlvblxyXG5jb25zdCBvYiA9IHsgMDogJ1F1ZW50aW4nLCAxOiA0MiwgMjogdHJ1ZSB9OyAvLyBUYWJsZWF1IGNsYXNzaXF1ZSAoY2xlZjogbnVtYmVyKVxyXG4vLyBjb25zb2xlLmxvZyhvYi4wKTsgLy8gcGFzIHBvc3NpYmxlXHJcbmNvbnNvbGUubG9nKG9iWzBdKTsgLy8gb3V0cHV0IDogJ1F1ZW50aW4nXHJcbi8vIEwnaW5kZXhhdGlvbiB0cmFuc2Zvcm1lIGZpY3RpdmVtZW50IG1vbiBvYmpldCBlbiB0YWJsZWF1IGFzc29jaWF0aWZcclxuY29uc3Qgb2JqID0geyBmaXJzdG5hbWU6ICdRdWVudGluJywgbGFzdG5hbWU6ICdHZWVydHMnLCBhZ2U6IDI2IH07XHJcbmNvbnNvbGUubG9nKG9iai5maXJzdG5hbWUpO1xyXG5jb25zb2xlLmxvZyhvYmpbJ2ZpcnN0bmFtZSddKTtcclxuLy8gQXR0ZW50aW9uIHF1ZSBsYSBkZXJuacOocmUgdmVyc2lvbiBlc3QgbGEgbW9pbnMgcHJvcHJlXHJcbi8vIOKGkiBkYW5nZXJldXggZW4gY2FzIGRlIHVuZGVmaW5lZCBvdSB1bmtub3duXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqXHJcbiAqIFBhcnRpZSAxIC0gVHlwZXNcclxuICovXHJcbmNvbnNvbGUud2FybihcIlBhcnRpZSAxIC0gVHlwZXNcIik7XHJcbmltcG9ydCB7IG1lc1R5cGVzIH0gZnJvbSBcIi4vZG9jcy90eXBlc1wiO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuYSA6Pj4gJywgbWVzVHlwZXMuYSk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5iIDo+PiAnLCBtZXNUeXBlcy5iKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmMgOj4+ICcsIG1lc1R5cGVzLmMpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuZCA6Pj4gJywgbWVzVHlwZXMuZCk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5lIDo+PiAnLCBtZXNUeXBlcy5lKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmYgOj4+ICcsIG1lc1R5cGVzLmYpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuZyA6Pj4gJywgbWVzVHlwZXMuZyk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5oIDo+PiAnLCBtZXNUeXBlcy5oKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmkgOj4+ICcsIG1lc1R5cGVzLmkpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuaiA6Pj4gJywgbWVzVHlwZXMuaik7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5rIDo+PiAnLCBtZXNUeXBlcy5rKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmwgOj4+ICcsIG1lc1R5cGVzLmwpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMubSA6Pj4gJywgbWVzVHlwZXMubSk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5uIDo+PiAnLCBtZXNUeXBlcy5uKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLm8gOj4+ICcsIG1lc1R5cGVzLm8pO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMucCA6Pj4gJywgbWVzVHlwZXMucCk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5xIDo+PiAnLCBtZXNUeXBlcy5xKTtcclxuLyoqXHJcbiAqIFBhcnRpZSAyIC0gQXNzZXJ0aW9uIGRlIHR5cGVzXHJcbiAqL1xyXG5jb25zb2xlLndhcm4oXCJQYXJ0aWUgMiAtIEFzc2VydGlvbiBkZSB0eXBlc1wiKTtcclxuLy8gVm9pciBzcmMvZG9jcy9hc3NlcnRpb25UeXBlcy50c1xyXG4vKipcclxuICogUGFydGllIDMgLSBOYXJyb3dpbmdcclxuICovXHJcbmNvbnNvbGUud2FybihcIlBhcnRpZSAzIC0gTmFycm93aW5nXCIpO1xyXG5pbXBvcnQgeyBwcmludElkLCBleGVtcGxlTiwgaXNEYXRlLCBpc1VzZXIsIFRVc2VyIH0gZnJvbSBcIi4vZG9jcy9uYXJyb3dpbmdcIjtcclxucHJpbnRJZCgxMik7XHJcbnByaW50SWQoJ2EnKTtcclxucHJpbnRJZChudWxsKTtcclxuZXhlbXBsZU4oJ2EnLCAnYScpO1xyXG5leGVtcGxlTignYScsIHRydWUpO1xyXG5leGVtcGxlTigxMiwgdHJ1ZSk7XHJcbmxldCBiaXJ0aERhdGUgPSBuZXcgRGF0ZSgnMDMvMDQvMTk5NicpO1xyXG5jb25zb2xlLmxvZygnRGF0ZSBbMDMvMDQvMTk5Nl06Pj4gJywgaXNEYXRlKGJpcnRoRGF0ZSkpO1xyXG5jb25zb2xlLmxvZygnU3RyaW5nIFswMy8wMy8xMDAxXTo+PiAnLCBpc0RhdGUoJzAzLzAzLzEwMDEnKSk7XHJcbmxldCB1c2VyID0gbmV3IFRVc2VyKCdRdWVudGluJyk7XHJcbmNvbnNvbGUubG9nKCdpc1VzZXIodXNlcikgOj4+ICcsIGlzVXNlcih1c2VyKSk7XHJcbi8qKlxyXG4gKiBQYXJ0aWUgNCAtIEN1c3RvbSBUeXBlc1xyXG4gKi9cclxuY29uc29sZS53YXJuKFwiUGFydGllIDQgLSBDdXN0b20gVHlwZXNcIik7XHJcbmxldCBhZG1pbiA9IHtcclxuICAgIHJvbGVJZDogMCxcclxuICAgIGxhc3ROYW1lOiBcIkdlZXJ0c1wiLFxyXG4gICAgZmlyc3ROYW1lOiBcIlF1ZW50aW5cIlxyXG59O1xyXG5sZXQgYWQgPSB7XHJcbiAgICByb2xlSWQ6IDUsXHJcbiAgICBsYXN0TmFtZTogXCJcIixcclxuICAgIGZpcnN0TmFtZTogXCJcIlxyXG59O1xyXG5sZXQgYWRtaW4yID0ge1xyXG4gICAgcm9sZUlkOiBcIlwiLFxyXG4gICAgbGFzdE5hbWU6IFwiXCIsXHJcbiAgICBmaXJzdE5hbWU6IFwiXCJcclxufTtcclxuY29uc29sZS5sb2coJ2FkbWluIDo+PiAnLCBhZG1pbik7XHJcbmxldCBpZEludCA9IDQ1O1xyXG5sZXQgaWRTdHJpbmcgPSBcImFcIjtcclxuLy8gbGV0IGlkQm9vbGVlbjogSWQgPSB0cnVlO1xyXG5jb25zb2xlLmxvZygnaWRJbnQgOj4+ICcsIGlkSW50KTtcclxuY29uc29sZS5sb2coJ3R5cGVvZiBpZEludCA6Pj4gJywgdHlwZW9mIGlkSW50KTtcclxuY29uc29sZS5sb2coJ2lkU3RyaW5nIDo+PiAnLCBpZFN0cmluZyk7XHJcbi8vIGNvbnNvbGUubG9nKCdpZEJvb2xlZW4gOj4+ICcsIGlkQm9vbGVlbik7XHJcbmxldCBkYXRlID0gXCIwMy8wNC8xOTk2XCI7XHJcbmxldCBkYXRlMiA9IG5ldyBEYXRlKCkudG9TdHJpbmcoKTtcclxuY29uc29sZS5sb2coJ2RhdGUgOj4+ICcsIGRhdGUpO1xyXG5jb25zb2xlLmxvZygnZGF0ZSA6Pj4gJywgZGF0ZTIpO1xyXG4vKipcclxuICogUGFydGllIDUgLSBHZW5lcmljc1xyXG4gKi9cclxuY29uc29sZS53YXJuKFwiUGFydGllIDUgLSBHZW5lcmljc1wiKTtcclxuaW1wb3J0IHsgR2VuZXJpY051bWJlciwgZ2V0UHJvcGVydHksIGlkZW50aXR5LCBpZGVudGl0eTIsIGlkZW50aXR5MywgaWRlbnRpdHk0LCBsb2dnaW5nSSwgTWF0aGVtYXRpcXVlIH0gZnJvbSAnLi9kb2NzL2dlbmVyaWNzJztcclxuLy8gT24gcGVyZCBsZSB0eXBlIGR5bmFtaXF1ZSBwYXNzw6kgZW4gcGFyYW3DqHRyZSDDoCBjYXVzZSBkdSBhbnlcclxuY29uc3QgaWQxXzEgPSBpZGVudGl0eSgzKTtcclxuY29uc3QgaWQxXzIgPSBpZGVudGl0eSgndG90bycpO1xyXG5jb25zdCBpZDFfMyA9IGlkZW50aXR5KHRydWUpO1xyXG5jb25zb2xlLmxvZygnaWQxXzEgOj4+ICcsIGlkMV8xKTtcclxuY29uc29sZS5sb2coJ3R5cGVvZiBpZDFfMSA6Pj4gJywgdHlwZW9mIGlkMV8xKTtcclxuY29uc29sZS5sb2coJ2lkMV8yIDo+PiAnLCBpZDFfMik7XHJcbmNvbnNvbGUubG9nKCd0eXBlb2YgaWQxXzIgOj4+ICcsIHR5cGVvZiBpZDFfMik7XHJcbmNvbnNvbGUubG9nKCdpZDFfMyA6Pj4gJywgaWQxXzMpO1xyXG5jb25zb2xlLmxvZygndHlwZW9mIGlkMV8zIDo+PiAnLCB0eXBlb2YgaWQxXzMpO1xyXG5jb25zdCBpZDIgPSBpZGVudGl0eTIoJ2UnKTtcclxuY29uc29sZS5sb2coJ2lkMiA6Pj4gJywgaWQyKTtcclxuY29uc29sZS5sb2coJ3R5cGVvZiBpZDIgOj4+ICcsIHR5cGVvZiBpZDIpO1xyXG5jb25zdCBpZDMgPSBpZGVudGl0eTIoNSk7XHJcbmNvbnNvbGUubG9nKCdpZDMgOj4+ICcsIGlkMyk7XHJcbmNvbnNvbGUubG9nKCd0eXBlb2YgaWQzIDo+PiAnLCB0eXBlb2YgaWQzKTtcclxuY29uc3QgaWQ0ID0gaWRlbnRpdHkyKCdhJyk7XHJcbmNvbnNvbGUubG9nKCdpZDQgOj4+ICcsIGlkNCk7XHJcbmNvbnNvbGUubG9nKCd0eXBlb2YgaWQ0IDo+PiAnLCB0eXBlb2YgaWQ0KTtcclxuLy8gaWRlbnRpdHkyPEFkbWluPigzKTsgUGFzIHBvc3NpYmxlIGNhciBjJ2VzdCB1biBudW1iZXIgZXQgbm9uIHVuIGFkbWluXHJcbmNvbnN0IGlkNSA9IGlkZW50aXR5MyhcIkNvdWNvdVwiLCA0Mik7XHJcbmNvbnNvbGUubG9nKCdpZDUgOj4+ICcsIGlkNSk7XHJcbmNvbnN0IGlkNiA9IGlkZW50aXR5MygnSGVsbG8nLCAnVHlwZVNjcmlwdCcpO1xyXG5jb25zb2xlLmxvZygnaWQ2IDo+PiAnLCBpZDYpO1xyXG5jb25zdCBpZDcgPSBpZGVudGl0eTQoWzEsIDIsIDMsIDRdKTtcclxuY29uc29sZS5sb2coJ2lkNyA6Pj4gJywgaWQ3KTtcclxubGV0IG5iID0gbmV3IEdlbmVyaWNOdW1iZXIoKTtcclxubmIuemVyb1ZhbHVlO1xyXG5uYi5hZGQgPSBmdW5jdGlvbiAoeCwgeSkge1xyXG4gICAgcmV0dXJuIHggKyB5O1xyXG59O1xyXG5jb25zb2xlLmxvZyhuYi5hZGQoMywgNSkpO1xyXG5jb25zdCBsZyA9IGxvZ2dpbmdJKFs1LCA1LCA2LCAzLCA0LCA4XSk7XHJcbmNvbnNvbGUubG9nKCdsZyA6Pj4gJywgbGcpO1xyXG4vLyAgTmUgZm9uY3Rpb25uZSBwYXNcclxuLy8gY29uc3QgbGcwID0gbG9nZ2luZ0k8bnVtYmVyPig1KVxyXG4vLyBjb25zdCBsZzAgPSBsb2dnaW5nSSg1KVxyXG4vLyBjb25zb2xlLmxvZygnbGcwIDo+PiAnLCBsZzApO1xyXG5sZXQgeCA9IHtcclxuICAgIHJvbGVJZDogMCxcclxuICAgIGxhc3ROYW1lOiBcIkdlZXJ0c1wiLFxyXG4gICAgZmlyc3ROYW1lOiBcIlF1ZW50aW5cIlxyXG59O1xyXG5jb25zb2xlLmxvZygneCA6Pj4gJywgZ2V0UHJvcGVydHkoeCwgJ2xhc3ROYW1lJykpO1xyXG4vLyBjb25zb2xlLmxvZygneCA6Pj4gJywgZ2V0UHJvcGVydHkoeCwgJ2hlbGxvJykpOyAvLyBOZSBmb25jdGlvbm5lIHBhcyBjYXIgcGFzIHVuZSBjbGVmIGRlIFR5cGUgZGUgbCdvYmpldCAoQWRtaW4pXHJcbi8vIGNvbnNvbGUubG9nKCd4IDo+PiAnLCBnZXRQcm9wZXJ0eSh4LCAzKSk7XHJcbmxldCBteVRvdGFsID0gbmV3IE1hdGhlbWF0aXF1ZSgpO1xyXG5teVRvdGFsLmFkZCA9ICh4LCB5KSA9PiB4ICsgeTtcclxubXlUb3RhbC5zdWIgPSAoeCwgeSkgPT4geCAtIHk7XHJcbmNvbnNvbGUubG9nKG15VG90YWwuYWRkKDUsIDYpKTtcclxuY29uc29sZS5sb2cobXlUb3RhbC5zdWIoNSwgNikpO1xyXG4vLyBsZXQgbXlUb3RhbDIgPSBuZXcgTWF0aGVtYXRpcXVlPHN0cmluZywgc3RyaW5nPigpO1xyXG4vKipcclxuICogUGFydGllIDYgLSBDbGFzc2VzXHJcbiAqL1xyXG5jb25zb2xlLndhcm4oXCJQYXJ0aWUgNiAtIENsYXNzZXNcIik7XHJcbmltcG9ydCB7IE15VXNlciB9IGZyb20gJy4vZG9jcy9jbGFzc2VzJztcclxubGV0IG15VXNlciA9IG5ldyBNeVVzZXIoMSwgJ0dlZXJ0cycpO1xyXG5jb25zb2xlLmxvZygnbXlVc2VyIDo+PiAnLCBteVVzZXIpO1xyXG4iLCIvKipcclxuICogUGFydGllIDEgLSDinI/vuI8gRXhlcmNpY2UgMDFcclxuICovXHJcbi8qKlxyXG4gKiBDcsOpZXIgdW4gY29kZSBwZXJtZXR0YW50IGRlIGNyw6llciB1biBjb21wdGV1ciBjbGFzc2lxdWUsIGF2ZWMgKyAxLCAtMSBldCA9Li4uLFxyXG4gKiBpbCBmYXVkcmEgdHlww6kgbGUgdG91dCBhdSBtYXhpbXVtLCBwcsOpcGFyZXIgMiBmb25jdGlvbnMgcG91ciDDp2FcclxuICovXHJcbmNvbnNvbGUud2FybignRXhlcmNpY2UgMDEnKTtcclxuY29uc3QgYnRuTW9pbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuTW9pbnMnKTtcclxuY29uc3QgYnRuUGx1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5QbHVzJyk7XHJcbmNvbnN0IHRvdGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvdGFsJyk7XHJcbmxldCB2YWxldXI7XHJcbmlmICh0b3RhbClcclxuICAgIHZhbGV1ciA9IHBhcnNlSW50KHRvdGFsLmlubmVyVGV4dCk7XHJcbmNvbnN0IGluY3JlbWVudCA9IChldmVudCkgPT4ge1xyXG4gICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh0b3RhbClcclxuICAgICAgICB0b3RhbC5pbm5lclRleHQgPSAoKyt2YWxldXIpLnRvU3RyaW5nKCk7XHJcbn07XHJcbi8vIGNvbnN0IGRlY3JlbWVudDogRnVuY3Rpb24gPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuY29uc3QgZGVjcmVtZW50ID0gKGV2ZW50KSA9PiB7XHJcbiAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHRvdGFsKVxyXG4gICAgICAgIHRvdGFsLmlubmVyVGV4dCA9ICgtLXZhbGV1cikudG9TdHJpbmcoKTtcclxufTtcclxuaWYgKGJ0blBsdXMpXHJcbiAgICBidG5QbHVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaW5jcmVtZW50KTtcclxuaWYgKGJ0bk1vaW5zKVxyXG4gICAgYnRuTW9pbnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWNyZW1lbnQpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=