function split(wholeArray) {
    let firstHalf = [];
    let secondHalf = [];
    let mitad;

    if (wholeArray.length % 2 == 0) {
        mitad = wholeArray.length / 2;
        for (let i = 0; i < mitad; i++) {
            firstHalf.push(wholeArray[i]);
        }
        for (let j = mitad; j < wholeArray.length; j++) {
            secondHalf.push(wholeArray[j]);
        }
    } else if (wholeArray.length % 2 != 0) {
        mitad = Math.ceil(wholeArray.length / 2);
        for (let i = 0; i < mitad; i++) {
            firstHalf.push(wholeArray[i]);
        }
        for (let j = mitad; j < wholeArray.length; j++) {
            secondHalf.push(wholeArray[j]);
        }
    }
    return [firstHalf, secondHalf];
}

function merge(firstHalf, secondHalf) {
    let newArr = []
    let i = 0
    let j = 0

    while (i < firstHalf.length && j < secondHalf.length) {
        if (firstHalf[i] < secondHalf[j]) {
            newArr.push(firstHalf[i])
            i++
        } else {
            newArr.push(secondHalf[j])
            j++
        }
    }
    while (j < secondHalf.length) {
        newArr.push(secondHalf[j])
        j++
    }
    while (i < firstHalf.length) {
        newArr.push(firstHalf[i])
        i++
    }
    console.log(newArr);
    return newArr
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr
    }

    let [primeraMitad, segundaMitad] = split(arr)
    let primeraMitadOrdenada = mergeSort(primeraMitad)
    let segundaMitadOrdenada = mergeSort(segundaMitad)
    console.log(primeraMitadOrdenada, segundaMitadOrdenada);
    return merge(primeraMitadOrdenada, segundaMitadOrdenada)
}