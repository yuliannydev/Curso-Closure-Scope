const anotherFunction = () => {
    for (let index = 0; index < 10; index++) {
        
        setTimeout( () => {
            console.log(index);
        }, 1000)
    }
};

anotherFunction();

/**
 * Siempre usar let
 */