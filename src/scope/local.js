const HelloWorld = () => {
    const hello = 'Hello World';

    console.log(hello);
}

HelloWorld();
console.log(hello);

/**
 * No se puede acceder a la variable hello 
 * porque pertenece al scope local
 */

/** LEXIAL SCOPE */

var scope = 'Im global';

const functionScope = () => {
    var scope = 'Im just a local';

    const func = () => {
        return scope
    }

    console.log(func());
}

functionScope();

/**Lo que
 * sucede es que el return sccope tiene acceso a la variable
 * llamada scope local y esa es al que usa, y si se hace un console
 * log afuera de scope, muestra la variable del global que no ha sido reasignada
 */
console.log(scope);

/**
 * Local tiene dos variantes particulares
 * SCOPE LOCAL en bloque
 * SCOPE LOCAL en funciones
 */