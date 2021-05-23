/**
 * Hoisting: Levantamiendo de las declaraciones
 * 
 */

/* a = 2;

var a;

console.log(a); //2 */

//LO que sucede aca es que la declaracion se eleva en el codigo, es decir, se coloca al inicio
//Esto paso en el momento que se compila el codigo antes de ser interpretado por el navegador

/**
 * Esto lo que nos permite es acceeder a un valor que todavia no está declarado
 */
nameOfAnime('Kimetsu No Yaiba');

function nameOfAnime(name) {
    console.log(name);
}

/**
 * Lo mismo sucede con las funciones
 */

