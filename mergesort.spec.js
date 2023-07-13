describe('Split Array function', function () {
    it('es capaz de dividir el arreglo en dos partes', function () {
        // tu código acá
        expect(split([6,5,3,1,8,7,2,4])).toEqual([[6,5,3,1], [8,7,2,4]])
    });
});

describe('Merge', function () {
    it('es capaz de combinar dos Arreglos ordenados en uno solo ordenado', function () {
        // testeá el algoritmo
        expect(merge([1, 3, 5, 6], [2, 4, 7, 8])).toEqual([1,2,3,4,5,6,7,8])
    });
});

describe('Merge Sort', function () {
    it('une y ordena dos arreglos ', function () {
        expect(mergeSort([6, 5, 3, 1, 8, 7, 2, 4])).toEqual([1,2,3,4,5,6,7,8])
    })
})
