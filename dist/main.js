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
/* harmony export */   "AGeometry": () => (/* binding */ AGeometry),
/* harmony export */   "Carre": () => (/* binding */ Carre),
/* harmony export */   "Femme": () => (/* binding */ Femme),
/* harmony export */   "Geometry": () => (/* binding */ Geometry),
/* harmony export */   "Homme": () => (/* binding */ Homme),
/* harmony export */   "MyUser": () => (/* binding */ MyUser),
/* harmony export */   "Personne": () => (/* binding */ Personne),
/* harmony export */   "Point": () => (/* binding */ Point),
/* harmony export */   "Points": () => (/* binding */ Points),
/* harmony export */   "Triangle": () => (/* binding */ Triangle),
/* harmony export */   "getX": () => (/* binding */ getX),
/* harmony export */   "getY": () => (/* binding */ getY)
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
// Duck Typing (y faire attention)
// Si je vois un oiseau qui vole comme un canard, cancane comme un canard, et nage comme un canard
// alors j'appelle cet oiseau un canard
class Point {
    constructor() {
        this.x = 5;
        this.y = 7;
    }
}
class Geometry {
    constructor() {
        this.x = 10;
        this.y = 100;
        this.other1 = "OK";
        this.other2 = true;
    }
}
// Geometry possède les mêmes propriétés que Point (x, y)
// Alors Geometry est un point
function getX(p) {
    return p.x * p.y;
}
function getY(p) {
    if (p instanceof Geometry)
        return p.other1;
    return p.x * p.y;
}
// Introduction à l'abstract
// Une classe abstraite est une classe qui ne peut pas être  car elle possède des méthodes abstraites (sans corps)
// Quand une classe possède des méthodes abstraites, cette classe devient elle-même abstraite.
// Obligation de redéfinir les méthodes non implémentées de la classe parent au plus tard dans les classes enfants qui héritent
// Une classe est d'office abstraite si elle possède des méthodes abstraite
// Une classe peut être abstraite MÊME si elle ne possède aucune méthode abstraite
// Le mot-clef 'abstract' peut se mettre sur : une classe, une propriété, un accesseur/mutateur, une fonction
class AGeometry {
    logMe() { return "Me"; }
}
class Triangle extends AGeometry {
    constructor() {
        super();
    }
    perimetre() {
        throw new Error("Method not implemented.");
    }
    air() {
        throw new Error("Method not implemented.");
    }
}
class Points extends AGeometry {
    constructor() {
        super();
    }
    perimetre() {
        return this.x * this.y;
    }
    air() {
        return this.x * this.y;
    }
}
class Carre extends AGeometry {
    constructor() {
        super();
    }
    logMe() {
        return "Ceci est un carré";
    }
    perimetre() {
        return this.x * 4;
    }
    air() {
        return this.x * this.x;
    }
}
// Exemple plus concret
class Personne {
    constructor(nom, prenom, date) {
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = date;
    }
    parler(message) {
        console.log(this.prenom + ' dit ' + message);
    }
}
class Femme extends Personne {
    constructor(nom, prenom, date, estEnceinte) {
        super(nom, prenom, date);
        this.genre = 'f';
        this.estEnceinte = false;
        this.estEnceinte = estEnceinte;
    }
    faireMenage() {
        console.log(`${this.prenom} fait le ménage`);
    }
    get nomComplet() {
        return "Mme. " + this.nom + ' ' + this.prenom;
    }
}
class Homme extends Personne {
    constructor(nom, prenom, date, longueurBarbe) {
        super(nom, prenom, date);
        this.genre = 'h';
        this.longueurBarbe = 0;
        this.longueurBarbe = longueurBarbe;
    }
    // Redéfinition de méthodes => garder la même signature mais changer le corps
    parler(message) {
        console.log(this.prenom + ' hurle ' + message);
    }
    faireMenage() {
        console.log(`${this.prenom} s'enfuit jouer`);
    }
    get nomComplet() {
        return "M. " + this.nom + ' ' + this.prenom;
    }
}
// Mot-clefs : Static
// Mot-clefs : Interface (implements)


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
// Duck Typing

console.log('getX(new Point):>> ', (0,_docs_classes__WEBPACK_IMPORTED_MODULE_3__.getX)(new _docs_classes__WEBPACK_IMPORTED_MODULE_3__.Point));
console.log('getX(new Geometry):>> ', (0,_docs_classes__WEBPACK_IMPORTED_MODULE_3__.getX)(new _docs_classes__WEBPACK_IMPORTED_MODULE_3__.Geometry));
console.log('getY(new Point):>> ', (0,_docs_classes__WEBPACK_IMPORTED_MODULE_3__.getY)(new _docs_classes__WEBPACK_IMPORTED_MODULE_3__.Point));
console.log('getY(new Geometry):>> ', (0,_docs_classes__WEBPACK_IMPORTED_MODULE_3__.getY)(new _docs_classes__WEBPACK_IMPORTED_MODULE_3__.Geometry));

// const ag = new AGeometry(); // Impossible d'instancier une classe abstraite! 
const p = new _docs_classes__WEBPACK_IMPORTED_MODULE_3__.Points();
p.x = 2;
p.y = 5;
const c = new _docs_classes__WEBPACK_IMPORTED_MODULE_3__.Carre();
c.x = 5;
console.log('object :>> ', p.logMe());
console.log('object :>> ', c.logMe());
console.log('object :>> ', p.perimetre());
console.log('object :>> ', p.air());
console.log('object :>> ', c.perimetre());
console.log('object :>> ', c.air());

// const p = new Personne()
const h = new _docs_classes__WEBPACK_IMPORTED_MODULE_3__.Homme('Geerts', 'Quentin', new Date('1996-04-03'), 0.5);
const f = new _docs_classes__WEBPACK_IMPORTED_MODULE_3__.Femme('Geerts', 'Mélanie', new Date(), false);
h.parler('Bonjour les JS !');
f.parler('Bonjour les JS !');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2pELHNDQUFzQyxtREFBSSxLQUFLLG1EQUFRO0FBQ3ZELG1DQUFtQyxtREFBSSxLQUFLLGdEQUFLO0FBQ2pELHNDQUFzQyxtREFBSSxLQUFLLG1EQUFRO0FBQ1I7QUFDL0MsK0JBQStCO0FBQy9CLGNBQWMsaURBQU07QUFDcEI7QUFDQTtBQUNBLGNBQWMsZ0RBQUs7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDOEM7QUFDOUM7QUFDQSxjQUFjLGdEQUFLO0FBQ25CLGNBQWMsZ0RBQUs7QUFDbkI7QUFDQTs7Ozs7Ozs7O0FDbEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvZG9jcy9jbGFzc2VzLnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9kb2NzL2dlbmVyaWNzLnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9kb2NzL25hcnJvd2luZy50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvZG9jcy90eXBlcy50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2V4ZXJjaWNlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogUGFydGllIDYgLSBDbGFzc2VzXHJcbiAqL1xyXG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZFNldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZFNldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcclxufTtcclxudmFyIF9QZXJzb25fX3Bhc3N3b3JkO1xyXG5jbGFzcyBIdW1hbiB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmdlbmRlciA9ICcnO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMDtcclxuICAgICAgICB0aGlzLndlaWdodCA9IDA7XHJcbiAgICAgICAgdGhpcy5fZXRuaWMgPSAnJztcclxuICAgICAgICB0aGlzLl9fY29sb3JFeWVzID0gJ2JsdWUnO1xyXG4gICAgfVxyXG59XHJcbi8vIEVuY2Fwc3VsYXRpb24gXHJcbi8vIOKGkiBMZSBuaXZlYXUgZGUgcG9ydMOpZSBkZXMgcHJvcHJpw6l0w6lzIGRhbnMgbGUgY2xhc3NlXHJcbi8vIHB1YmxpYyAgICAgICDihpIgZGlzcG9uaWJsZSBwYXJ0b3V0XHJcbi8vIHByb3RlY3RlZCAgICDihpIgZGlzcG9uaWJsZSB1bmlxdWVtZW50IGRhbnMgbGEgY2xhc3NlIHBhcmVudCBldCBkYW5zIGxlcyBjbGFzc2VzIGVuZmFudHMgKFR5cGVTY3JpcHQgISlcclxuLy8gcHJpdmF0ZSAgICAgIOKGkiBkaXNwb25pYmxlIHVuaXF1ZW1lbnQgZGFucyBsYSBjbGFzc2UgKFR5cGVTY3JpcHQgISlcclxuLy8gIyAgICAgICAgICAgIC0+IGNmci4gcHJpdmF0ZSAtIHJlbmRyZSBpbnZpc2libGUgZW4gZGVob3JzIGRlIGxhIGNsYXNzZSAoSlMpXHJcbi8vIEjDqXJpdGFnZVxyXG4vLyBUcmFuc21ldHRyZSBsZXMgbWVtYnJlcyBkJ3VuZSBjbGFzc2UgcGFyZW50IMOgIHNlcyBjbGFzc2VzIGVuZmFudHNcclxuLy8gUG91ciBmYWlyZSBkZSBsJ2jDqXJpdGFnZSwgb24gdXRpbGlzZSBleHRlbmRzXHJcbi8vIPCfqqcgVW4gcGFyZW50IG5lIHBldXQgcGFzIGFjY8OpZGVyIMOgIHVuZSBwcm9wcmnDqXTDqSBkJ3VuIGVuZmFudCwgcGFyIGNvbnRyZSBsJ2ludmVyc2Ugb3VpICFcclxuLy8g8J+qpyBMZSBjb25zdHJ1Y3RldXIgZHUgcGFyZW50IGRldnJhIHRvdWpvdXJzIMOqdHJlIGFwcGVsw6kgZGFucyBjZWx1aSBkZSBsJ2VuZmFudFxyXG4vLyBJbnRpYWxpc2F0aW9uIGRlcyBwcm9wcmnDqXTDqXNcclxuLy8gcHJvcDogdHlwZSA9IHZhbGV1ciAg4oaSIEluaXRpYWxpc2F0aW9uIHBhciBkw6lmYXV0IGRlcyB2YWxldXJzXHJcbi8vIHByb3AhOiB0eXBlICAgICAgICAgIOKGkiBQYXMgYmVzb2luIGQnaW5pdGlhbGlzZXIgbG9ycyBkZSBsYSBkw6ljbGFyYXRpb24gbWFpcyBkb2l0IMOqdHJlIGluaXRpYWxpc2VyIGRhbnMgbGUgY29uc3RydWN0ZXVyIChzYXVmIGFic3RyYWN0KVxyXG4vLyBwcm9wPzogdHlwZSAgICAgICAgICDihpIgUGV1dCBwcmVuZHJlIGxhIHZhbGV1ciBkdSB0eXBlIGFzc29jacOpIG91IHVuZGVmaW5lZFxyXG5jbGFzcyBQZXJzb24gZXh0ZW5kcyBIdW1hbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgbmFtZSwgZmlyc3RuYW1lLCBwYXNzd29yZCkge1xyXG4gICAgICAgIHN1cGVyKCk7IC8vIFBlcm1ldCBkZSBjcsOpZXIgbGUgcGFyZW50XHJcbiAgICAgICAgX1BlcnNvbl9fcGFzc3dvcmQuc2V0KHRoaXMsIHZvaWQgMCk7XHJcbiAgICAgICAgdGhpcy5fdXBwZXJQYXNzd29yZCA9IChwYXNzd29yZCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFzc3dvcmQudG9VcHBlckNhc2UoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICghcGFzc3dvcmQpXHJcbiAgICAgICAgICAgIHBhc3N3b3JkID0gJ0NvdWNvdSc7XHJcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfUGVyc29uX19wYXNzd29yZCwgdGhpcy5fdXBwZXJQYXNzd29yZChwYXNzd29yZCksIFwiZlwiKTtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLl9fY29sb3JFeWVzID0gJ3JlZCc7XHJcbiAgICB9XHJcbn1cclxuX1BlcnNvbl9fcGFzc3dvcmQgPSBuZXcgV2Vha01hcCgpO1xyXG5leHBvcnQgY2xhc3MgTXlVc2VyIGV4dGVuZHMgUGVyc29uIHtcclxuICAgIGNvbnN0cnVjdG9yKGlkLCBuYW1lLCBmaXJzdG5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIG5hbWUsIGZpcnN0bmFtZSwgcGFzc3dvcmQpO1xyXG4gICAgICAgIHRoaXMubG9naW4gPSAnJztcclxuICAgICAgICB0aGlzLl9fY29sb3JFeWVzID0gJ3llbGxvdyc7XHJcbiAgICB9XHJcbn1cclxuLy8gRHVjayBUeXBpbmcgKHkgZmFpcmUgYXR0ZW50aW9uKVxyXG4vLyBTaSBqZSB2b2lzIHVuIG9pc2VhdSBxdWkgdm9sZSBjb21tZSB1biBjYW5hcmQsIGNhbmNhbmUgY29tbWUgdW4gY2FuYXJkLCBldCBuYWdlIGNvbW1lIHVuIGNhbmFyZFxyXG4vLyBhbG9ycyBqJ2FwcGVsbGUgY2V0IG9pc2VhdSB1biBjYW5hcmRcclxuZXhwb3J0IGNsYXNzIFBvaW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMueCA9IDU7XHJcbiAgICAgICAgdGhpcy55ID0gNztcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgR2VvbWV0cnkge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy54ID0gMTA7XHJcbiAgICAgICAgdGhpcy55ID0gMTAwO1xyXG4gICAgICAgIHRoaXMub3RoZXIxID0gXCJPS1wiO1xyXG4gICAgICAgIHRoaXMub3RoZXIyID0gdHJ1ZTtcclxuICAgIH1cclxufVxyXG4vLyBHZW9tZXRyeSBwb3Nzw6hkZSBsZXMgbcOqbWVzIHByb3ByacOpdMOpcyBxdWUgUG9pbnQgKHgsIHkpXHJcbi8vIEFsb3JzIEdlb21ldHJ5IGVzdCB1biBwb2ludFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0WChwKSB7XHJcbiAgICByZXR1cm4gcC54ICogcC55O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRZKHApIHtcclxuICAgIGlmIChwIGluc3RhbmNlb2YgR2VvbWV0cnkpXHJcbiAgICAgICAgcmV0dXJuIHAub3RoZXIxO1xyXG4gICAgcmV0dXJuIHAueCAqIHAueTtcclxufVxyXG4vLyBJbnRyb2R1Y3Rpb24gw6AgbCdhYnN0cmFjdFxyXG4vLyBVbmUgY2xhc3NlIGFic3RyYWl0ZSBlc3QgdW5lIGNsYXNzZSBxdWkgbmUgcGV1dCBwYXMgw6p0cmUgIGNhciBlbGxlIHBvc3PDqGRlIGRlcyBtw6l0aG9kZXMgYWJzdHJhaXRlcyAoc2FucyBjb3JwcylcclxuLy8gUXVhbmQgdW5lIGNsYXNzZSBwb3Nzw6hkZSBkZXMgbcOpdGhvZGVzIGFic3RyYWl0ZXMsIGNldHRlIGNsYXNzZSBkZXZpZW50IGVsbGUtbcOqbWUgYWJzdHJhaXRlLlxyXG4vLyBPYmxpZ2F0aW9uIGRlIHJlZMOpZmluaXIgbGVzIG3DqXRob2RlcyBub24gaW1wbMOpbWVudMOpZXMgZGUgbGEgY2xhc3NlIHBhcmVudCBhdSBwbHVzIHRhcmQgZGFucyBsZXMgY2xhc3NlcyBlbmZhbnRzIHF1aSBow6lyaXRlbnRcclxuLy8gVW5lIGNsYXNzZSBlc3QgZCdvZmZpY2UgYWJzdHJhaXRlIHNpIGVsbGUgcG9zc8OoZGUgZGVzIG3DqXRob2RlcyBhYnN0cmFpdGVcclxuLy8gVW5lIGNsYXNzZSBwZXV0IMOqdHJlIGFic3RyYWl0ZSBNw4pNRSBzaSBlbGxlIG5lIHBvc3PDqGRlIGF1Y3VuZSBtw6l0aG9kZSBhYnN0cmFpdGVcclxuLy8gTGUgbW90LWNsZWYgJ2Fic3RyYWN0JyBwZXV0IHNlIG1ldHRyZSBzdXIgOiB1bmUgY2xhc3NlLCB1bmUgcHJvcHJpw6l0w6ksIHVuIGFjY2Vzc2V1ci9tdXRhdGV1ciwgdW5lIGZvbmN0aW9uXHJcbmV4cG9ydCBjbGFzcyBBR2VvbWV0cnkge1xyXG4gICAgbG9nTWUoKSB7IHJldHVybiBcIk1lXCI7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgVHJpYW5nbGUgZXh0ZW5kcyBBR2VvbWV0cnkge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuICAgIHBlcmltZXRyZSgpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuICAgIGFpcigpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgUG9pbnRzIGV4dGVuZHMgQUdlb21ldHJ5IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbiAgICBwZXJpbWV0cmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIHRoaXMueTtcclxuICAgIH1cclxuICAgIGFpcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy54ICogdGhpcy55O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBDYXJyZSBleHRlbmRzIEFHZW9tZXRyeSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG4gICAgbG9nTWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiQ2VjaSBlc3QgdW4gY2FycsOpXCI7XHJcbiAgICB9XHJcbiAgICBwZXJpbWV0cmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIDQ7XHJcbiAgICB9XHJcbiAgICBhaXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIHRoaXMueDtcclxuICAgIH1cclxufVxyXG4vLyBFeGVtcGxlIHBsdXMgY29uY3JldFxyXG5leHBvcnQgY2xhc3MgUGVyc29ubmUge1xyXG4gICAgY29uc3RydWN0b3Iobm9tLCBwcmVub20sIGRhdGUpIHtcclxuICAgICAgICB0aGlzLm5vbSA9IG5vbTtcclxuICAgICAgICB0aGlzLnByZW5vbSA9IHByZW5vbTtcclxuICAgICAgICB0aGlzLmRhdGVOYWlzc2FuY2UgPSBkYXRlO1xyXG4gICAgfVxyXG4gICAgcGFybGVyKG1lc3NhZ2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByZW5vbSArICcgZGl0ICcgKyBtZXNzYWdlKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgRmVtbWUgZXh0ZW5kcyBQZXJzb25uZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihub20sIHByZW5vbSwgZGF0ZSwgZXN0RW5jZWludGUpIHtcclxuICAgICAgICBzdXBlcihub20sIHByZW5vbSwgZGF0ZSk7XHJcbiAgICAgICAgdGhpcy5nZW5yZSA9ICdmJztcclxuICAgICAgICB0aGlzLmVzdEVuY2VpbnRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lc3RFbmNlaW50ZSA9IGVzdEVuY2VpbnRlO1xyXG4gICAgfVxyXG4gICAgZmFpcmVNZW5hZ2UoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5wcmVub219IGZhaXQgbGUgbcOpbmFnZWApO1xyXG4gICAgfVxyXG4gICAgZ2V0IG5vbUNvbXBsZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiTW1lLiBcIiArIHRoaXMubm9tICsgJyAnICsgdGhpcy5wcmVub207XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEhvbW1lIGV4dGVuZHMgUGVyc29ubmUge1xyXG4gICAgY29uc3RydWN0b3Iobm9tLCBwcmVub20sIGRhdGUsIGxvbmd1ZXVyQmFyYmUpIHtcclxuICAgICAgICBzdXBlcihub20sIHByZW5vbSwgZGF0ZSk7XHJcbiAgICAgICAgdGhpcy5nZW5yZSA9ICdoJztcclxuICAgICAgICB0aGlzLmxvbmd1ZXVyQmFyYmUgPSAwO1xyXG4gICAgICAgIHRoaXMubG9uZ3VldXJCYXJiZSA9IGxvbmd1ZXVyQmFyYmU7XHJcbiAgICB9XHJcbiAgICAvLyBSZWTDqWZpbml0aW9uIGRlIG3DqXRob2RlcyA9PiBnYXJkZXIgbGEgbcOqbWUgc2lnbmF0dXJlIG1haXMgY2hhbmdlciBsZSBjb3Jwc1xyXG4gICAgcGFybGVyKG1lc3NhZ2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByZW5vbSArICcgaHVybGUgJyArIG1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgZmFpcmVNZW5hZ2UoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5wcmVub219IHMnZW5mdWl0IGpvdWVyYCk7XHJcbiAgICB9XHJcbiAgICBnZXQgbm9tQ29tcGxldCgpIHtcclxuICAgICAgICByZXR1cm4gXCJNLiBcIiArIHRoaXMubm9tICsgJyAnICsgdGhpcy5wcmVub207XHJcbiAgICB9XHJcbn1cclxuLy8gTW90LWNsZWZzIDogU3RhdGljXHJcbi8vIE1vdC1jbGVmcyA6IEludGVyZmFjZSAoaW1wbGVtZW50cylcclxuIiwiLyoqXHJcbiAqIFBhcnRpZSA1IC0gR2VuZXJpY3NcclxuICovXHJcbi8qXHJcbiAgICBGb25jdGlvbnMgZ8OpbsOpcmlxdWVzXHJcbiovXHJcbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eShhcmcpIHtcclxuICAgIHJldHVybiBhcmc7XHJcbn1cclxuLy8gZnVuY3Rpb24gaWROdW1iZXIgKGFyZzogbnVtYmVyKSB7XHJcbi8vICAgICAvLyAuLi5cclxuLy8gICAgIHJldHVybiBhcmdcclxuLy8gfVxyXG4vLyBmdW5jdGlvbiBpZFN0cmluZyAoYXJnOiBzdHJpbmcpIHtcclxuLy8gICAgIC8vIC4uLlxyXG4vLyAgICAgcmV0dXJuIGFyZ1xyXG4vLyB9XHJcbi8vIGZ1bmN0aW9uIGlkQm9vbGVhbihhcmc6IHN0cmluZykge1xyXG4vLyAgICAgLy8gLi4uXHJcbi8vICAgICByZXR1cm4gYXJnXHJcbi8vIH1cclxuLy8gZnVuY3Rpb24gaWRBbGwgKGFyZzogYW55KSB7XHJcbi8vICAgICBpZiAodHlwZW9mIGFyZyA9PT0gJ251bWJlcicpIC8vIC4uLlxyXG4vLyAgICAgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnKSAvLyAuLi5cclxuLy8gICAgIGlmICh0eXBlb2YgYXJnID09PSAnYm9vbGVhbicpIC8vIC4uLlxyXG4vLyAgICAgcmV0dXJuIGFyZ1xyXG4vLyB9XHJcbi8vIENyw6lhdGlvbiBkJ3VuZSBmb25jdGlvbiBnw6luw6lyaWNcclxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5MihhcmcpIHtcclxuICAgIC8vIFR5cGUgLi4uXHJcbiAgICByZXR1cm4gYXJnO1xyXG59XHJcbmNvbnN0IHRhYiA9IFsxLCAyLCAzXTtcclxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5MyhhcmcxLCBhcmcyKSB7XHJcbiAgICBpZiAodHlwZW9mIGFyZzEgPT09IHR5cGVvZiBhcmcyKVxyXG4gICAgICAgIHJldHVybiBhcmcxO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBhcmcyO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eTQoYXJncykge1xyXG4gICAgY29uc29sZS5sb2coYXJncy5sZW5ndGgpO1xyXG4gICAgcmV0dXJuIGFyZ3M7XHJcbn1cclxuLypcclxuICAgIENsYXNzZXMgZ8OpbsOpcmlxdWVzXHJcbiovXHJcbmV4cG9ydCBjbGFzcyBHZW5lcmljTnVtYmVyIHtcclxufVxyXG4vLyBQZXJtZXQgZGUgY3LDqWVyIHVuZSBmb25jdGlvbiBnw6luw6lyaXF1ZSBiYXPDqWUgc3VyIHVuZSBpbnRlcmZhY2VcclxuLy8g4oaSIEZpbHRyZXIgbGVzIHR5cGVzIGF2ZWMgY2V1eCB1bmlxdWVtZW50IHF1aSBwb3Nzw6hkZW50IGxlcyBwcm9wcmnDqXTDqXMgZGUgbCdpbnRlcmZhY2VcclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2dpbmdJKGFyZykge1xyXG4gICAgY29uc29sZS5sb2coJ0xlbmd0aCA6Pj4nLCBhcmcubGVuZ3RoKTtcclxuICAgIHJldHVybiBhcmc7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb3BlcnR5KG9iaiwga2V5KSB7XHJcbiAgICByZXR1cm4gb2JqW2tleV07XHJcbn1cclxuZXhwb3J0IGNsYXNzIE1hdGhlbWF0aXF1ZSB7XHJcbn1cclxuIiwiLyoqXHJcbiAqIFBhcnRpZSAzIC0gTmFycm93aW5nXHJcbiAqIFBlcm1ldHRyZSBkZSByw6lkdWlyZSBsYSBsaXN0ZSBkZXMgdHlwZXMgZGlzcG9uaWJsZXNcclxuICovXHJcbmxldCBidG4xID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luY3JlbWVudCcpOyAvLyBFbGVtZW50IHwgbnVsbFxyXG5sZXQgYnRuMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmNyZW1lbnQnKTsgLy8gRWxlbWVudFxyXG5sZXQgYnRuMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmNyZW1lbnQnKTsgLy8gSFRNTEJ1dHRvbkVsZW1lbnRcclxuLy8gQXR0ZW50aW9uIHBvdXIgbGEgdmVyc2lvbiAyIGV0IDMsIHZvdXMgZW1ww6pjaGV6IGxlIHF1ZXJ5U2VsZWN0b3IgZGUgXHJcbi8vIGZvbmN0aW9ubmVyIGNvcnJlY3RlbWVudCBlbiBjYXMgZGUgbnVsbFxyXG4vLyBMZSBtaWV1eCBzZXJhIGQndXRpbGlzZXIgZGVzIGNvbmRpdGlvbnMgYXUgbGlldSBkdSBuYXJyb3dpbmcgJyEnIG91ICdhcydcclxuLy8gQXV0cmUgZXhlbXBsZVxyXG5sZXQgYnRuX2RlYyA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlcycpO1xyXG4gICAgaWYgKGlucHV0KSB7XHJcbiAgICAgICAgLy8gSFRNTElucHV0RWxlbWVudFxyXG4gICAgICAgIC8vIFByZW1pZXIgw6lsw6ltZW50IGR1IG5hcnJvd2luZ1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgLy8gbnVsbFxyXG4gICAgfVxyXG59O1xyXG4vLyBBdXRyZSBleGVtcGxlXHJcbmV4cG9ydCBmdW5jdGlvbiBwcmludElkKGlkKSB7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgICAvLyBzdHJpbmcgfCBudW1iZXJcclxuICAgICAgICBpZiAodHlwZW9mIGlkID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIC8vIG51bWJlclxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaWQgTlVNQkVSIDo+PiAnLCBpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBzdHJpbmdcclxuICAgICAgICAgICAgbGV0IHRtcElkID0gcGFyc2VJbnQoaWQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaWQgU1RSSU5HIDo+PiAnLCBpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgLy8gbnVsbFxyXG4gICAgICAgIGlkID0gNDI7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2lkIE5VTEwgOj4+ICcsIGlkKTtcclxuICAgIH1cclxufVxyXG4vLyBBdXRyZSBleGVtcGxlIChkb3VibGUgdmFyaWFibGVzIGxvY2FsZXMpXHJcbmV4cG9ydCBmdW5jdGlvbiBleGVtcGxlTihhLCBiKSB7XHJcbiAgICBpZiAoYSA9PT0gYikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhIERPVUJMRTo+PiAnLCBhKTsgLy8gSWNpIGlsIHNlcmEgZCdvZmZpY2UgZW4gc3RyaW5nXHJcbiAgICAgICAgLy8gTGUgc2V1bCBwb2ludCBjb21tdW4gZW50cmUgYSBldCBiIGVzdCBzdHJpbmdcclxuICAgIH1cclxufVxyXG4vLyBBdXRyZSBleGVtcGxlICgpXHJcbmZ1bmN0aW9uIGV4ZW1wbGVPcGVyYXRldXIoYSkge1xyXG4gICAgLy8gRXhlbXBsZSBzaSBhIMOpdGFpdCB1biBNb3VzZUV2ZW50XHJcbiAgICAvLyBNb3VzZUV2ZW50IMOpdGFudCB1biB0eXBlIFR5cGVTY3JpcHQsIGlsIG4nZXN0IHBhcyByZWNvbm51IHBhciBsZSB0eXBlb2YgbmF0aWYgZGUganNcclxuICAgIC8vIGlmICh0eXBlb2YgYSA9PT0gXCJNb3VzZUV2ZW50XCIpXHJcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGEpIHtcclxuICAgICAgICAvLyB2YWx1ZSBlc3QgdW5lIHByb3ByacOpdMOpIGRlIEhUTUxJbnB1dEVsZW1lbnRcclxuICAgICAgICBjb25zb2xlLmxvZygnYSBWQUxVRSA6Pj4gJywgYS52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChcInRvdG9cIiBpbiBhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2EgVE9UTyA6Pj4gJywgYSk7IC8vIE5FIHJlbnRyZXJhIGphbWFpc1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgLy8gTW91c2VFdmVudFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhIE1PVVNFRVZFTlQgOj4+ICcsIGEpO1xyXG4gICAgfVxyXG59XHJcbi8vIEF1dHJlIGNhc1xyXG4vLyBKZSB2ZXV4IGTDqWZpbmlyIG9ibGlnYXRvaXJlbWVudCB1biByZXRvdXIgRGF0ZSBzdXIgYVxyXG5leHBvcnQgZnVuY3Rpb24gaXNEYXRlKGEpIHtcclxuICAgIHJldHVybiBhIGluc3RhbmNlb2YgRGF0ZTtcclxufVxyXG4vLyBDYXMgcGx1cyBjb25jcmV0XHJcbmV4cG9ydCBjbGFzcyBUVXNlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7IHRoaXMubmFtZSA9IG5hbWU7IH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaXNVc2VyKGEpIHtcclxuICAgIHJldHVybiBhIGluc3RhbmNlb2YgVFVzZXI7XHJcbn1cclxuLy8gT24gYXVyYWl0IHRyw6hzIGJpZW4gcHUgbWV0dHJlIHVuIGJvb2zDqWVuIGVuIHJldG91ciBkZSBsYSBmb25jdGlvblxyXG4vLyBtYWlzIGRhbnMgbGEgbGVjdHVyZSBkZSBsYSBkb2N1bWVudGF0aW9uIGF1IHN1cnZvbCBkZSBsYSBmb25jdGlvblxyXG4vLyBJbCBlc3QgcGx1cyBpbnTDqXJlc3NhbnQgZGUgc2F2b2lyIHF1ZSBsZSByZXRvdXIgZCd1biBib29sw6llbiBzZXJhIFxyXG4vLyBzdXIgdW4gVFVTZXIgZXQgbm9uIGQndW4gYm9vbMOpZW5cclxuLy8g4pyPIEV4ZXJjaWNlIDAxXHJcbiIsIi8qKlxyXG4gKiBQYXJ0aWUgMSAtIFR5cGVzXHJcbiAqL1xyXG5jb25zdCBhID0gJ0hlbGxvIGxlcyBmdWxsc3RhY2sgSlMuJztcclxuY29uc3QgYiA9IDQyO1xyXG5jb25zdCBjID0gdHJ1ZTtcclxuY29uc3QgZCA9IG51bGw7XHJcbmNvbnN0IGUgPSBbJ2EnLCAnYicsICdjJ107XHJcbmNvbnN0IGYgPSBbJ2QnLCAnZScsICdmJ107XHJcbmNvbnN0IGcgPSBbMSwgMiwgMywgNF07XHJcbmNvbnN0IGggPSBbJ0hlbGxvJywgdHJ1ZSwgMjEsIFtdLCB7fSwgKCkgPT4geyB9XTtcclxuY29uc3QgaSA9IHt9O1xyXG5jb25zdCBqID0geyBmaXJzdG5hbWU6ICdRdWVudGluJywgbGFzdG5hbWU6ICdHZWVydHMnIH07XHJcbmNvbnN0IGsgPSB7IGNvdWNvdTogJ0hlbGxvJyB9O1xyXG5jb25zdCBsID0gbmV3IERhdGUoKTtcclxuY29uc3QgbSA9ICgpID0+IHsgfTtcclxuY29uc3QgbiA9ICgpID0+IHsgfTtcclxuY29uc3QgbyA9IChpLCBzLCBiKSA9PiBbJ2EnLCAnYiddO1xyXG5jb25zdCBwID0gKCkgPT4geyB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbXBsZW1lbnRlZCcpOyB9O1xyXG5sZXQgcSA9ICdhJztcclxucSA9IDE7XHJcbnEgPSB0cnVlO1xyXG4vLyBjb25zdCByOiBIVE1MU3BhbkVsZW1lbnQgPSBuZXcgSFRNTFNwYW5FbGVtZW50KCk7XHJcbi8vIGNvbnN0IHM6IEVsZW1lbnQgPSBuZXcgRWxlbWVudCgpO1xyXG5leHBvcnQgbGV0IG1lc1R5cGVzID0geyBhLCBiLCBjLCBkLCBlLCBmLCBnLCBoLCBpLCBqLCBrLCBsLCBtLCBuLCBvLCBwLCBxIH07XHJcbi8vIEV4cG9ydCBncsOiY2Ugw6AgZXhwb3J0LCB1biBvYmpldCBsYW1iZGEgcXVpIGNvbnRpZW5kcmEgdG91dGVzIGxlcyB2YXJpYWJsZXNcclxuLy8gQ2UgcXVpIHBhciBsYSBzdWl0ZSBub3VzIMOpdml0ZXJhIGRlcyBlcnJldXJzIGRlIG5vbW1hZ2VzIGRlIHZhcmlhYmxlcyBkw6lqw6AgZXhpc3RhbnRlc1xyXG4vLyBBdHRlbnRpb24gw6AgbCdpbmRleGF0aW9uXHJcbmNvbnN0IG9iID0geyAwOiAnUXVlbnRpbicsIDE6IDQyLCAyOiB0cnVlIH07IC8vIFRhYmxlYXUgY2xhc3NpcXVlIChjbGVmOiBudW1iZXIpXHJcbi8vIGNvbnNvbGUubG9nKG9iLjApOyAvLyBwYXMgcG9zc2libGVcclxuY29uc29sZS5sb2cob2JbMF0pOyAvLyBvdXRwdXQgOiAnUXVlbnRpbidcclxuLy8gTCdpbmRleGF0aW9uIHRyYW5zZm9ybWUgZmljdGl2ZW1lbnQgbW9uIG9iamV0IGVuIHRhYmxlYXUgYXNzb2NpYXRpZlxyXG5jb25zdCBvYmogPSB7IGZpcnN0bmFtZTogJ1F1ZW50aW4nLCBsYXN0bmFtZTogJ0dlZXJ0cycsIGFnZTogMjYgfTtcclxuY29uc29sZS5sb2cob2JqLmZpcnN0bmFtZSk7XHJcbmNvbnNvbGUubG9nKG9ialsnZmlyc3RuYW1lJ10pO1xyXG4vLyBBdHRlbnRpb24gcXVlIGxhIGRlcm5pw6hyZSB2ZXJzaW9uIGVzdCBsYSBtb2lucyBwcm9wcmVcclxuLy8g4oaSIGRhbmdlcmV1eCBlbiBjYXMgZGUgdW5kZWZpbmVkIG91IHVua25vd25cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKipcclxuICogUGFydGllIDEgLSBUeXBlc1xyXG4gKi9cclxuY29uc29sZS53YXJuKFwiUGFydGllIDEgLSBUeXBlc1wiKTtcclxuaW1wb3J0IHsgbWVzVHlwZXMgfSBmcm9tIFwiLi9kb2NzL3R5cGVzXCI7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5hIDo+PiAnLCBtZXNUeXBlcy5hKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmIgOj4+ICcsIG1lc1R5cGVzLmIpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuYyA6Pj4gJywgbWVzVHlwZXMuYyk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5kIDo+PiAnLCBtZXNUeXBlcy5kKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmUgOj4+ICcsIG1lc1R5cGVzLmUpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuZiA6Pj4gJywgbWVzVHlwZXMuZik7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5nIDo+PiAnLCBtZXNUeXBlcy5nKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmggOj4+ICcsIG1lc1R5cGVzLmgpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuaSA6Pj4gJywgbWVzVHlwZXMuaSk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5qIDo+PiAnLCBtZXNUeXBlcy5qKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmsgOj4+ICcsIG1lc1R5cGVzLmspO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMubCA6Pj4gJywgbWVzVHlwZXMubCk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5tIDo+PiAnLCBtZXNUeXBlcy5tKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLm4gOj4+ICcsIG1lc1R5cGVzLm4pO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMubyA6Pj4gJywgbWVzVHlwZXMubyk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5wIDo+PiAnLCBtZXNUeXBlcy5wKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLnEgOj4+ICcsIG1lc1R5cGVzLnEpO1xyXG4vKipcclxuICogUGFydGllIDIgLSBBc3NlcnRpb24gZGUgdHlwZXNcclxuICovXHJcbmNvbnNvbGUud2FybihcIlBhcnRpZSAyIC0gQXNzZXJ0aW9uIGRlIHR5cGVzXCIpO1xyXG4vLyBWb2lyIHNyYy9kb2NzL2Fzc2VydGlvblR5cGVzLnRzXHJcbi8qKlxyXG4gKiBQYXJ0aWUgMyAtIE5hcnJvd2luZ1xyXG4gKi9cclxuY29uc29sZS53YXJuKFwiUGFydGllIDMgLSBOYXJyb3dpbmdcIik7XHJcbmltcG9ydCB7IHByaW50SWQsIGV4ZW1wbGVOLCBpc0RhdGUsIGlzVXNlciwgVFVzZXIgfSBmcm9tIFwiLi9kb2NzL25hcnJvd2luZ1wiO1xyXG5wcmludElkKDEyKTtcclxucHJpbnRJZCgnYScpO1xyXG5wcmludElkKG51bGwpO1xyXG5leGVtcGxlTignYScsICdhJyk7XHJcbmV4ZW1wbGVOKCdhJywgdHJ1ZSk7XHJcbmV4ZW1wbGVOKDEyLCB0cnVlKTtcclxubGV0IGJpcnRoRGF0ZSA9IG5ldyBEYXRlKCcwMy8wNC8xOTk2Jyk7XHJcbmNvbnNvbGUubG9nKCdEYXRlIFswMy8wNC8xOTk2XTo+PiAnLCBpc0RhdGUoYmlydGhEYXRlKSk7XHJcbmNvbnNvbGUubG9nKCdTdHJpbmcgWzAzLzAzLzEwMDFdOj4+ICcsIGlzRGF0ZSgnMDMvMDMvMTAwMScpKTtcclxubGV0IHVzZXIgPSBuZXcgVFVzZXIoJ1F1ZW50aW4nKTtcclxuY29uc29sZS5sb2coJ2lzVXNlcih1c2VyKSA6Pj4gJywgaXNVc2VyKHVzZXIpKTtcclxuLyoqXHJcbiAqIFBhcnRpZSA0IC0gQ3VzdG9tIFR5cGVzXHJcbiAqL1xyXG5jb25zb2xlLndhcm4oXCJQYXJ0aWUgNCAtIEN1c3RvbSBUeXBlc1wiKTtcclxubGV0IGFkbWluID0ge1xyXG4gICAgcm9sZUlkOiAwLFxyXG4gICAgbGFzdE5hbWU6IFwiR2VlcnRzXCIsXHJcbiAgICBmaXJzdE5hbWU6IFwiUXVlbnRpblwiXHJcbn07XHJcbmxldCBhZCA9IHtcclxuICAgIHJvbGVJZDogNSxcclxuICAgIGxhc3ROYW1lOiBcIlwiLFxyXG4gICAgZmlyc3ROYW1lOiBcIlwiXHJcbn07XHJcbmxldCBhZG1pbjIgPSB7XHJcbiAgICByb2xlSWQ6IFwiXCIsXHJcbiAgICBsYXN0TmFtZTogXCJcIixcclxuICAgIGZpcnN0TmFtZTogXCJcIlxyXG59O1xyXG5jb25zb2xlLmxvZygnYWRtaW4gOj4+ICcsIGFkbWluKTtcclxubGV0IGlkSW50ID0gNDU7XHJcbmxldCBpZFN0cmluZyA9IFwiYVwiO1xyXG4vLyBsZXQgaWRCb29sZWVuOiBJZCA9IHRydWU7XHJcbmNvbnNvbGUubG9nKCdpZEludCA6Pj4gJywgaWRJbnQpO1xyXG5jb25zb2xlLmxvZygndHlwZW9mIGlkSW50IDo+PiAnLCB0eXBlb2YgaWRJbnQpO1xyXG5jb25zb2xlLmxvZygnaWRTdHJpbmcgOj4+ICcsIGlkU3RyaW5nKTtcclxuLy8gY29uc29sZS5sb2coJ2lkQm9vbGVlbiA6Pj4gJywgaWRCb29sZWVuKTtcclxubGV0IGRhdGUgPSBcIjAzLzA0LzE5OTZcIjtcclxubGV0IGRhdGUyID0gbmV3IERhdGUoKS50b1N0cmluZygpO1xyXG5jb25zb2xlLmxvZygnZGF0ZSA6Pj4gJywgZGF0ZSk7XHJcbmNvbnNvbGUubG9nKCdkYXRlIDo+PiAnLCBkYXRlMik7XHJcbi8qKlxyXG4gKiBQYXJ0aWUgNSAtIEdlbmVyaWNzXHJcbiAqL1xyXG5jb25zb2xlLndhcm4oXCJQYXJ0aWUgNSAtIEdlbmVyaWNzXCIpO1xyXG5pbXBvcnQgeyBHZW5lcmljTnVtYmVyLCBnZXRQcm9wZXJ0eSwgaWRlbnRpdHksIGlkZW50aXR5MiwgaWRlbnRpdHkzLCBpZGVudGl0eTQsIGxvZ2dpbmdJLCBNYXRoZW1hdGlxdWUgfSBmcm9tICcuL2RvY3MvZ2VuZXJpY3MnO1xyXG4vLyBPbiBwZXJkIGxlIHR5cGUgZHluYW1pcXVlIHBhc3PDqSBlbiBwYXJhbcOodHJlIMOgIGNhdXNlIGR1IGFueVxyXG5jb25zdCBpZDFfMSA9IGlkZW50aXR5KDMpO1xyXG5jb25zdCBpZDFfMiA9IGlkZW50aXR5KCd0b3RvJyk7XHJcbmNvbnN0IGlkMV8zID0gaWRlbnRpdHkodHJ1ZSk7XHJcbmNvbnNvbGUubG9nKCdpZDFfMSA6Pj4gJywgaWQxXzEpO1xyXG5jb25zb2xlLmxvZygndHlwZW9mIGlkMV8xIDo+PiAnLCB0eXBlb2YgaWQxXzEpO1xyXG5jb25zb2xlLmxvZygnaWQxXzIgOj4+ICcsIGlkMV8yKTtcclxuY29uc29sZS5sb2coJ3R5cGVvZiBpZDFfMiA6Pj4gJywgdHlwZW9mIGlkMV8yKTtcclxuY29uc29sZS5sb2coJ2lkMV8zIDo+PiAnLCBpZDFfMyk7XHJcbmNvbnNvbGUubG9nKCd0eXBlb2YgaWQxXzMgOj4+ICcsIHR5cGVvZiBpZDFfMyk7XHJcbmNvbnN0IGlkMiA9IGlkZW50aXR5MignZScpO1xyXG5jb25zb2xlLmxvZygnaWQyIDo+PiAnLCBpZDIpO1xyXG5jb25zb2xlLmxvZygndHlwZW9mIGlkMiA6Pj4gJywgdHlwZW9mIGlkMik7XHJcbmNvbnN0IGlkMyA9IGlkZW50aXR5Mig1KTtcclxuY29uc29sZS5sb2coJ2lkMyA6Pj4gJywgaWQzKTtcclxuY29uc29sZS5sb2coJ3R5cGVvZiBpZDMgOj4+ICcsIHR5cGVvZiBpZDMpO1xyXG5jb25zdCBpZDQgPSBpZGVudGl0eTIoJ2EnKTtcclxuY29uc29sZS5sb2coJ2lkNCA6Pj4gJywgaWQ0KTtcclxuY29uc29sZS5sb2coJ3R5cGVvZiBpZDQgOj4+ICcsIHR5cGVvZiBpZDQpO1xyXG4vLyBpZGVudGl0eTI8QWRtaW4+KDMpOyBQYXMgcG9zc2libGUgY2FyIGMnZXN0IHVuIG51bWJlciBldCBub24gdW4gYWRtaW5cclxuY29uc3QgaWQ1ID0gaWRlbnRpdHkzKFwiQ291Y291XCIsIDQyKTtcclxuY29uc29sZS5sb2coJ2lkNSA6Pj4gJywgaWQ1KTtcclxuY29uc3QgaWQ2ID0gaWRlbnRpdHkzKCdIZWxsbycsICdUeXBlU2NyaXB0Jyk7XHJcbmNvbnNvbGUubG9nKCdpZDYgOj4+ICcsIGlkNik7XHJcbmNvbnN0IGlkNyA9IGlkZW50aXR5NChbMSwgMiwgMywgNF0pO1xyXG5jb25zb2xlLmxvZygnaWQ3IDo+PiAnLCBpZDcpO1xyXG5sZXQgbmIgPSBuZXcgR2VuZXJpY051bWJlcigpO1xyXG5uYi56ZXJvVmFsdWU7XHJcbm5iLmFkZCA9IGZ1bmN0aW9uICh4LCB5KSB7XHJcbiAgICByZXR1cm4geCArIHk7XHJcbn07XHJcbmNvbnNvbGUubG9nKG5iLmFkZCgzLCA1KSk7XHJcbmNvbnN0IGxnID0gbG9nZ2luZ0koWzUsIDUsIDYsIDMsIDQsIDhdKTtcclxuY29uc29sZS5sb2coJ2xnIDo+PiAnLCBsZyk7XHJcbi8vICBOZSBmb25jdGlvbm5lIHBhc1xyXG4vLyBjb25zdCBsZzAgPSBsb2dnaW5nSTxudW1iZXI+KDUpXHJcbi8vIGNvbnN0IGxnMCA9IGxvZ2dpbmdJKDUpXHJcbi8vIGNvbnNvbGUubG9nKCdsZzAgOj4+ICcsIGxnMCk7XHJcbmxldCB4ID0ge1xyXG4gICAgcm9sZUlkOiAwLFxyXG4gICAgbGFzdE5hbWU6IFwiR2VlcnRzXCIsXHJcbiAgICBmaXJzdE5hbWU6IFwiUXVlbnRpblwiXHJcbn07XHJcbmNvbnNvbGUubG9nKCd4IDo+PiAnLCBnZXRQcm9wZXJ0eSh4LCAnbGFzdE5hbWUnKSk7XHJcbi8vIGNvbnNvbGUubG9nKCd4IDo+PiAnLCBnZXRQcm9wZXJ0eSh4LCAnaGVsbG8nKSk7IC8vIE5lIGZvbmN0aW9ubmUgcGFzIGNhciBwYXMgdW5lIGNsZWYgZGUgVHlwZSBkZSBsJ29iamV0IChBZG1pbilcclxuLy8gY29uc29sZS5sb2coJ3ggOj4+ICcsIGdldFByb3BlcnR5KHgsIDMpKTtcclxubGV0IG15VG90YWwgPSBuZXcgTWF0aGVtYXRpcXVlKCk7XHJcbm15VG90YWwuYWRkID0gKHgsIHkpID0+IHggKyB5O1xyXG5teVRvdGFsLnN1YiA9ICh4LCB5KSA9PiB4IC0geTtcclxuY29uc29sZS5sb2cobXlUb3RhbC5hZGQoNSwgNikpO1xyXG5jb25zb2xlLmxvZyhteVRvdGFsLnN1Yig1LCA2KSk7XHJcbi8vIGxldCBteVRvdGFsMiA9IG5ldyBNYXRoZW1hdGlxdWU8c3RyaW5nLCBzdHJpbmc+KCk7XHJcbi8qKlxyXG4gKiBQYXJ0aWUgNiAtIENsYXNzZXNcclxuICovXHJcbmNvbnNvbGUud2FybihcIlBhcnRpZSA2IC0gQ2xhc3Nlc1wiKTtcclxuaW1wb3J0IHsgTXlVc2VyIH0gZnJvbSAnLi9kb2NzL2NsYXNzZXMnO1xyXG5sZXQgbXlVc2VyID0gbmV3IE15VXNlcigxLCAnR2VlcnRzJyk7XHJcbmNvbnNvbGUubG9nKCdteVVzZXIgOj4+ICcsIG15VXNlcik7XHJcbi8vIER1Y2sgVHlwaW5nXHJcbmltcG9ydCB7IFBvaW50LCBHZW9tZXRyeSwgZ2V0WCwgZ2V0WSB9IGZyb20gXCIuL2RvY3MvY2xhc3Nlc1wiO1xyXG5jb25zb2xlLmxvZygnZ2V0WChuZXcgUG9pbnQpOj4+ICcsIGdldFgobmV3IFBvaW50KSk7XHJcbmNvbnNvbGUubG9nKCdnZXRYKG5ldyBHZW9tZXRyeSk6Pj4gJywgZ2V0WChuZXcgR2VvbWV0cnkpKTtcclxuY29uc29sZS5sb2coJ2dldFkobmV3IFBvaW50KTo+PiAnLCBnZXRZKG5ldyBQb2ludCkpO1xyXG5jb25zb2xlLmxvZygnZ2V0WShuZXcgR2VvbWV0cnkpOj4+ICcsIGdldFkobmV3IEdlb21ldHJ5KSk7XHJcbmltcG9ydCB7IFBvaW50cywgQ2FycmUgfSBmcm9tICcuL2RvY3MvY2xhc3Nlcyc7XHJcbi8vIGNvbnN0IGFnID0gbmV3IEFHZW9tZXRyeSgpOyAvLyBJbXBvc3NpYmxlIGQnaW5zdGFuY2llciB1bmUgY2xhc3NlIGFic3RyYWl0ZSEgXHJcbmNvbnN0IHAgPSBuZXcgUG9pbnRzKCk7XHJcbnAueCA9IDI7XHJcbnAueSA9IDU7XHJcbmNvbnN0IGMgPSBuZXcgQ2FycmUoKTtcclxuYy54ID0gNTtcclxuY29uc29sZS5sb2coJ29iamVjdCA6Pj4gJywgcC5sb2dNZSgpKTtcclxuY29uc29sZS5sb2coJ29iamVjdCA6Pj4gJywgYy5sb2dNZSgpKTtcclxuY29uc29sZS5sb2coJ29iamVjdCA6Pj4gJywgcC5wZXJpbWV0cmUoKSk7XHJcbmNvbnNvbGUubG9nKCdvYmplY3QgOj4+ICcsIHAuYWlyKCkpO1xyXG5jb25zb2xlLmxvZygnb2JqZWN0IDo+PiAnLCBjLnBlcmltZXRyZSgpKTtcclxuY29uc29sZS5sb2coJ29iamVjdCA6Pj4gJywgYy5haXIoKSk7XHJcbmltcG9ydCB7IEZlbW1lLCBIb21tZSB9IGZyb20gXCIuL2RvY3MvY2xhc3Nlc1wiO1xyXG4vLyBjb25zdCBwID0gbmV3IFBlcnNvbm5lKClcclxuY29uc3QgaCA9IG5ldyBIb21tZSgnR2VlcnRzJywgJ1F1ZW50aW4nLCBuZXcgRGF0ZSgnMTk5Ni0wNC0wMycpLCAwLjUpO1xyXG5jb25zdCBmID0gbmV3IEZlbW1lKCdHZWVydHMnLCAnTcOpbGFuaWUnLCBuZXcgRGF0ZSgpLCBmYWxzZSk7XHJcbmgucGFybGVyKCdCb25qb3VyIGxlcyBKUyAhJyk7XHJcbmYucGFybGVyKCdCb25qb3VyIGxlcyBKUyAhJyk7XHJcbiIsIi8qKlxyXG4gKiBQYXJ0aWUgMSAtIOKcj++4jyBFeGVyY2ljZSAwMVxyXG4gKi9cclxuLyoqXHJcbiAqIENyw6llciB1biBjb2RlIHBlcm1ldHRhbnQgZGUgY3LDqWVyIHVuIGNvbXB0ZXVyIGNsYXNzaXF1ZSwgYXZlYyArIDEsIC0xIGV0ID0uLi4sXHJcbiAqIGlsIGZhdWRyYSB0eXDDqSBsZSB0b3V0IGF1IG1heGltdW0sIHByw6lwYXJlciAyIGZvbmN0aW9ucyBwb3VyIMOnYVxyXG4gKi9cclxuY29uc29sZS53YXJuKCdFeGVyY2ljZSAwMScpO1xyXG5jb25zdCBidG5Nb2lucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5Nb2lucycpO1xyXG5jb25zdCBidG5QbHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0blBsdXMnKTtcclxuY29uc3QgdG90YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG90YWwnKTtcclxubGV0IHZhbGV1cjtcclxuaWYgKHRvdGFsKVxyXG4gICAgdmFsZXVyID0gcGFyc2VJbnQodG90YWwuaW5uZXJUZXh0KTtcclxuY29uc3QgaW5jcmVtZW50ID0gKGV2ZW50KSA9PiB7XHJcbiAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHRvdGFsKVxyXG4gICAgICAgIHRvdGFsLmlubmVyVGV4dCA9ICgrK3ZhbGV1cikudG9TdHJpbmcoKTtcclxufTtcclxuLy8gY29uc3QgZGVjcmVtZW50OiBGdW5jdGlvbiA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG5jb25zdCBkZWNyZW1lbnQgPSAoZXZlbnQpID0+IHtcclxuICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAodG90YWwpXHJcbiAgICAgICAgdG90YWwuaW5uZXJUZXh0ID0gKC0tdmFsZXVyKS50b1N0cmluZygpO1xyXG59O1xyXG5pZiAoYnRuUGx1cylcclxuICAgIGJ0blBsdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpbmNyZW1lbnQpO1xyXG5pZiAoYnRuTW9pbnMpXHJcbiAgICBidG5Nb2lucy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlY3JlbWVudCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==