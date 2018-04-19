function Stack() {
    var elements = [];
 
    this.add = add;
    this.pop = pop;
    this.getTopElement = getTopElement;
    this.hasElements = hasElements;
    this.removeAll = removeAll;
    this.size = size;
 
    function add(element) {
        elements.push(element);
    }
 
    function pop() {
        return elements.pop();
    }
 
    function getTopElement() {
        return elements[elements.length - 1];
    }
 
    function hasElements() {
        return elements.length > 0;
    }
 
    function removeAll() {
        elements = [];
    }
 
    function size() {
        return elements.length;
    }
}
 

function convert(number, base) {
    var resStack = new Stack(); // Creamos nuestro objecto de pila para guardar los REStos (o residuos).
    var res; // Resto o residuo.
    var str = ''; // Será la cadena que regresaremos
    var characters = '0123456789ABCDEF'; // Lista de caracteres que usaremos para la conversión a binario, octal y hexadecimal.
 
    // Mientras que el numero dado sea mayor a 0...
    while (number > 0) {
        res = Math.floor(number % base); // Sacamos el módulo del número (su resto o residuo).
        resStack.add(res); // Agregamos el resto a la pila
        number = Math.floor(number / base); //Dividimos entre la base el numero y así continuamos hasta llegar a 0 y salir del ciclo.
    }
 
    // Mientras la pila tenga elementos...
    while (resStack.hasElements()) {
        //Concatenamos cada numero o letra que salga del array de caracteres y en cada vuelta se saca un elemento de la pila.
        str += characters[resStack.pop()]; 
    }
 
    // Retornamos la cadena final.
    return str;
}
 
console.log(convert(16777215, 16)); // Regresará FFFFFF
console.log(convert(100, 8)); // Regresará 144
console.log(convert(4, 2)); // Regresará 100
