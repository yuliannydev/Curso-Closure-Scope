const person = () => {
    var saveName = "Betancourt";
    return {

        //metodo 
        getName: () => {
            return saveName;
        },

        //metodo
        setName: (name) => {
            saveName = name;
        }
    };
};

newPerson = person();

console.log(newPerson.getName());

newPerson.setName('Yulianny');
console.log(newPerson.getName());

/**
 * saveName es una propiedad privada y no se le puede reasognar un valor
 */