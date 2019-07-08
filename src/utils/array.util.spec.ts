import {ArrayUtil} from "./array.util";

describe('ArrayUtil', () => {
    describe('isArray', () => {
        it('can detect arrays', () => {
            expect(ArrayUtil.isArray([])).toBeTruthy();
            expect(ArrayUtil.isArray(['Bubblegum'])).toBeTruthy();
        });

        it('objects are not arrays(kinda)', () => {
            expect(ArrayUtil.isArray({length: 10})).toBeFalsy();
            expect(ArrayUtil.isArray({})).toBeFalsy();
        });
    });

    describe('isPopulatedArray', () => {
        it('Empty array is false', () => {
            expect(ArrayUtil.isPopulatedArray([])).toBeFalsy();
        });

        it('Non-empty array is true', () => {
            expect(ArrayUtil.isPopulatedArray(['a'])).toBeTruthy();
        });
    });

    describe('clone', () => {
        it('Can not clone null', () => {
            expect(ArrayUtil.clone(null)).toBeNull();
        });

        it('Can clone an array of numbers', () => {
            const array = [1, 2, 3, 4, 5];
            expect(ArrayUtil.clone(array)).toEqual(array);
        });

        it('Can clone an array of strings', () => {
            const array = ['1', '2', '3', '4', '5'];
            expect(ArrayUtil.clone(array)).toEqual(array);
        });

        it('Can clone an array of booleans', () => {
            const array = [false, false, false, false, false];
            expect(ArrayUtil.clone(array)).toEqual(array);
        });

        it('Can clone an array of objects and arrays', () => {
            const array = [{isTrue: true}, {isFalse: false}, ['Non']];
            expect(ArrayUtil.clone(array)).toEqual(array);
        });
    });

    describe('cloneField', () => {
        it('can clone an object from within an array field', () => {
            const list = [
                {vava: 'vavava'},
                {val: 'v'}
            ];
            const list2 = [];

            ArrayUtil['cloneField'](list[0], list2);

            expect(list2[0]).toEqual(list[0]);
            expect(list2[0] === list[0]).toBeFalsy();
        });

        it('can clone an array from within an array field', () => {
            const list = [
                [1, 2],
                [3, 4]
            ];
            const list2 = [];

            ArrayUtil['cloneField'](list[0], list2);

            expect(list2[0]).toEqual(list[0]);
            expect(list2[0] === list[0]).toBeFalsy();
        });

        it('can clone an value from within an array field', () => {
            const list = [1, 2];
            const list2 = [];

            ArrayUtil['cloneField'](list[0], list2);

            expect(list2[0]).toEqual(list[0]);
        });
    });

    describe('getDifference && isEqual', () => {
        it('Identical arrays', () => {
            expect(ArrayUtil.getDifference(['1', 2], ['1', 2]).length).toBeFalsy();
            expect(ArrayUtil.isEqual(['1', 2], ['1', 2])).toBeTruthy();
        });

        it('Non-identical arrays ar not equal', () => {
            expect(ArrayUtil.getDifference(['1', 2, 3], ['1', 2]).length).toBeTruthy();
            expect(ArrayUtil.isEqual(['1', 2, 3], ['1', 2])).toBeFalsy();
        });
    })
});