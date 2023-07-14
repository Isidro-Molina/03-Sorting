describe('Bubble Sort', function () {
    it('handles an empty array', function () {
        expect(bubbleSort([])).toEqual([]);
    });

    it('returns a sorted array', function () {
        expect(bubbleSort([5,3,1,4,7,8,9])).toEqual([1,3,4,5,7,8,9])
    })

    it('return reversed array', function () {
        expect(bubbleSort([3,2,1])).toEqual([1,2,3])
    })

    it('cuantas veces fue invocado swap en bubbleSort', function () {
        spyOn(window, 'swap').and.callThrough();
        bubbleSort([5, 3, 1, 4, 7, 9, 2, 8, 6]);
        expect(window.swap.calls.count()).toEqual(13);
        // bubbleSort([1,2,3,5,4]);
        // expect(window.swap.calls.count()).toEqual(1);
    });
});
