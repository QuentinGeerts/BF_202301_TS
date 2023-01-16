/**
 * Partie 5 - Generics
 */

export function identity (arg: any): any {
    return arg;
}

export function identity2<Type>(arg: Type): Type {
    return arg;
}

export function identity3<T, E>(arg1: T, arg2: E): E {
    return arg2
}