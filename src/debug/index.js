var a = 'Hello';

function hello() {
    let b = 'Hello World';
    const c = 'Hello Wordl!';
    if (true) {
        let d = 'Hello World!!';
        debugger
    }
}

hello();

const moneyBox = () => {
    debugger
    var saveCoins = 0;

    const countCoins = (coins) => {
        debugger
        saveCoins += coins;
        console.log(`MoneyBox $${saveCoins}`);
    }
    return countCoins;
};

let myMoneyBox = moneyBox();

myMoneyBox(2);
myMoneyBox(8);
myMoneyBox(20);