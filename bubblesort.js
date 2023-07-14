/* function bubbleSort(arr) {
    return swap(arr)
}

function swap(arr) {
    // el primer loop itera sobre el largo del arreglo
    for (let i = 0; i < arr.length; i++) {
        // en este comparamos los elementos
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // le decimos que si el valor del elemento actual es mayor al que le sigue, lo guardamos en una variable
                let num = arr[j]
                // cambiamos las posiciones
                arr[j] = arr[j + 1]
                arr[j + 1] = num
            }
        }
        // el proceso se repite hasta que el valor mas grande quede al final
    }
    return arr
} */

// function bubbleSort(array = []) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length - 1; j++) {
//             if (array[j] > array[j+1]) {
//                 swap(array, j, j+1)
//             }
//         }
//     }
//     return array
// }

function swap(arr,i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

// REFACTORIZACION, VIDEO REVIEW

function bubbleSort(arr) {
    // al ir disminuyendo, una vez que ciertos elementos ya esten ordenados, no va a recorrerlo de nuevo. ahorramos iteraciones
    for (let j = arr.length; j >= 0; j--) {
        let swapped = false
        for (let i = 0; i < j - 1; i++) {
            if (arr[i] > arr[i+1]) {
                swap(arr, i, i + 1)
                swapped = true
            }
        }
        // va a salir del for, una vez que el arreglo ya este ordenado, sin tener que recorrerlo de nuevo
        if (!swapped) break;
    }
    console.log(arr);
    return arr
}