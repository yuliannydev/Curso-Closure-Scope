/**
 * Ambito lexico en closures
 */

const buildCount = (i) => {
    let count = i;
    const displayCount = () => {
        console.log(count++);
    }

    return displayCount;
}

const myFirtsCount = buildCount(1);

myFirtsCount();
myFirtsCount();
myFirtsCount();


/**
 * Acá se crea un nuevo alcance, closure o alcance
 * y es una nueva forma de manejar la variable
 */

const mySecondCount = buildCount(10);

mySecondCount();
mySecondCount();
mySecondCount();
