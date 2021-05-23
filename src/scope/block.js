/** SCOPE LOCAL EN BLOQUE 
 * BLOCK SCOPE
 */

const fruits = () => {
    if (true) {
        var fruits1 = 'apple';
        let fruits2 = 'banana';
        const fruits3 = 'kiwi';
        
    }
    console.log(fruits1);
    console.log(fruits2);
    console.log(fruits3);
} 

fruits();

/**
 * Let y const se establecen dentro del bloque de if
 */

/**
 * Para acceder a const y let tiene que ser desde adentro
 * de su mismo bloque
 */

