/**
 * Partie 6 - Classes
 */

class Human {
    public gender: string = '';
    public height: number = 0;
    public weight: number = 0;

    private _etnic: string = '';
    protected __colorEyes: string = 'blue';
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

    public id: number;
    public name?: string;
    private firstname: string;
    #_password?: string;

    private _upperPassword: Function = (password: string): string => {
        return password.toUpperCase();
    };

    constructor (id: number, name: string, firstname?: string, password?: string) {
        super(); // Permet de créer le parent

        if (!password) password = 'Coucou';
        this.#_password = this._upperPassword(password);
        this.id = id;
        this.name = name;

        this.__colorEyes = 'red';
    }

}

export class MyUser extends Person {

    public login: string = '';

    constructor (id: number, name: string, firstname?: string, password?: string) {
        super(id, name, firstname, password);
        this.__colorEyes = 'yellow';
    }

}