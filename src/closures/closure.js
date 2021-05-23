/**
 * Un closure es la combinacion de una funcion
 * y el ambito lexico en la cual ha sido declarada dicha funcion
 */

/**
 * El closure recuerda el ambito en el cual ha sido creado
 */

const moneyBox = () => {
    var saveCoins = 0;

    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox $${saveCoins}`);
    }
    return countCoins;
}

let myMoneyBox = moneyBox();

myMoneyBox(2);
myMoneyBox(8);
myMoneyBox(20);

const HaceFrio = () => {
    var preparacion = 0;

    const HacerCafe = (cafe) => {
        preparacion += cafe;
        console.log(`Preparo ${preparacion} cafe`);
    }
    return HacerCafe;
}

let enLasNoches = HaceFrio();

enLasNoches(1);
enLasNoches(1);
enLasNoches(1);
