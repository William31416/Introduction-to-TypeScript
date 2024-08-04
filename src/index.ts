// Punto 1: Define un tipo personalizado para un objeto Artículo con propiedades codigo, descripcion, y costo.
type Articulo = {
    codigo: number,
    descripcion: string,
    costo: number
}
/* ¿Cómo contribuye el tipado estático a la prevención de errores en el manejo de variables y constantes?
El tipado estático permite que el compilador identifique todas las partes del código afectadas por cambios cuando se refactoriza. Esto ayuda a evitar errores sutiles y asegura que los cambios no introduzcan inconsistencias.
*/

// Implementa una función que determine si un número es par o impar utilizando operadores aritméticos y booleanos.
function esParOImpar(numero: number) {
    const residuo: number = numero % 2;
    const esPar: boolean = residuo === 0;
    switch (esPar) {
        case true:
            console.log("El número es par");
            break;
        case false:
            console.log("El número es impar");
            break;
    }
}
esParOImpar(8);

/* ¿Qué ventajas ofrece el uso de operadores en un lenguaje tipado como TypeScript?
- Detección temprana de errores en tiempo de compilación.
- Mejor autocompletado y navegación en el editor.
- Tipado fuerte y explicativo.
*/

// Implementa una función que clasifique un número en positivo, negativo o cero usando if y switch.
function clasificarNumero(num: number) {
    const esPositivoONegativo: boolean = num > 0 || num < 0;
    const esPositivo: boolean = num > 0;
    if (num !== undefined) {
        if (esPositivoONegativo) {
            switch (esPositivo) {
                case true:
                    console.log("El número es positivo");
                    break;
                default:
                    console.log("El número es negativo");
                    break;
            }
        } else {
            console.log("El número es cero");
        }
    }
}
clasificarNumero(0);

/* ¿Cuándo es preferible usar un operador ternario en lugar de una estructura if?
- Asignaciones en línea.
- Condiciones simples y expresiones cortas.
- Retorno condicional en funciones cortas.

Ejemplo:
function obtenerSaludo(hora: number): string {
    return hora < 12 ? "Buenos días" : "Buenas tardes";
}
*/

// Implementa una función que recorra un array de nombres y los imprima en consola.
function imprimirNombres() {
    const nombres: string[] = ['Luis', 'Ana', 'Carlos', 'Gabriela', 'Manuel', 'Camila'];
    nombres.forEach(nombre => {
        console.log(nombre);
    });
}
imprimirNombres();

/*
- Inmutabilidad:
Método map: Crea un nuevo arreglo con los resultados de aplicar la función, dejando el arreglo original inalterado. Esto fomenta la inmutabilidad, un principio importante en la programación funcional.

Ejemplo con map:
let numeros: number[] = [1, 2, 3];
let cuadrados = numeros.map(x => x * x);
// numeros: [1, 2, 3]
// cuadrados: [1, 4, 9]
*/

// Crea un array de números y calcula la suma de todos sus elementos utilizando un método reduce.
let numeros: number[] = [1, 2, 3, 4, 5];
let sumaTotal: number = numeros.reduce((acumulador, valorActual) => {
    return acumulador + valorActual;
}, 0); // 0 es el valor inicial del acumulador

console.log(sumaTotal);

// Implementa una función que reciba un array de strings y retorne la concatenación de todos los elementos.
function concatenarElementos(array: string[]) {
    let concatenacion: string = "";
    for (let i = 0; i < array.length; i++) {
        concatenacion += array[i];
    }
    console.log(concatenacion);
}
concatenarElementos(['h', 'o', 'l', 'a']);

// Define un array de objetos Usuario con propiedades id y nombre, e imprime el nombre de cada usuario en consola.
type Usuario = {
    id: number;
    nombre: string;
}

const usuarios: Usuario[] = [
    { id: 1, nombre: 'Alicia' },
    { id: 2, nombre: 'Roberto' },
    { id: 3, nombre: 'Carlos' }
];
usuarios.forEach(usuario => {
    console.log(usuario.nombre);
});

// Implementa una función que encuentre el valor máximo en un array de números.
function encontrarMaximo(numeros: number[]): number | undefined {
    if (numeros.length === 0) {
        return undefined; // Retorna undefined si el arreglo está vacío
    }

    let valorMaximo: number = numeros[0]; // Inicializa valorMaximo con el primer elemento del arreglo

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > valorMaximo) {
            valorMaximo = numeros[i]; // Actualiza valorMaximo si se encuentra un valor mayor
        }
    }

    return valorMaximo;
}
let listaNumeros = [3, 2, 1, 9, 5];
console.log(encontrarMaximo(listaNumeros));

/* Tareas:
1. Define un objeto Vehiculo con propiedades marca, modelo y año. Crea una instancia de Vehiculo e imprime sus propiedades en consola.
2. Basado en el objeto Vehiculo, crea una clase que posea un método estático que reciba un objeto Vehiculo y retorne un string con la información del vehículo.
3. Implementa una función que reciba un objeto Vehiculo y retorne un nuevo objeto con las mismas propiedades, pero con el año incrementado en 1.
*/

interface Vehiculo {
    marca: string,
    modelo: string,
    año: number
}

let vehiculo: Vehiculo = {
    marca: 'Toyota',
    modelo: 'Corolla',
    año: 2022
}
console.log(`${vehiculo.modelo}`);

class InformacionVehiculo {
    static obtenerInfo(vehiculo: Vehiculo): string {
        return `Marca: ${vehiculo.marca}, Modelo: ${vehiculo.modelo}, Año: ${vehiculo.año}`;
    }
}

const infoVehiculo = InformacionVehiculo.obtenerInfo(vehiculo);
console.log(infoVehiculo);

function incrementarAño(vehiculo: Vehiculo): Vehiculo {
    return {
        ...vehiculo,          // Copia todas las propiedades del objeto original
        año: vehiculo.año + 1 // Incrementa el año en 1
    };
}
console.log(incrementarAño(vehiculo));

/* ¿Qué ventajas ofrece el uso de tipos personalizados en objetos?
- Definición clara de estructuras.
- Validación de tipos en tiempo de compilación.
- Reusabilidad y composición.
*/

// Implementa una función que reciba parámetros rest y retorne error si al menos uno de los parámetros pasados no es del tipo de los dos primeros parámetros. Asegúrate de que los dos primeros parámetros sean del mismo tipo.
function verificarTipos(...valores: (number | string | boolean)[]): string {
    let mensaje: string = "";
    if (valores.length < 2) {
        mensaje = "Se necesitan más parámetros";
        return mensaje;
    } else {
        for (let i = 0; i < valores.length; i++) {
            if ((typeof valores[i]) === (typeof valores[0] && typeof valores[1])) {
                mensaje = `Todos los tipos son iguales`;
            } else {
                mensaje = `Al menos un tipo no es igual. Error: ${valores[i]} no es igual`;
            }
        }
    }
    return mensaje;
}
console.log(verificarTipos("l", "n", 4));