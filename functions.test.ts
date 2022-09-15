import { createTrue } from "typescript"

const {shuffleArray} = require('./utils')

const testArr1 = [1,2,3,4]
const testArr2 = []
const testArr3 = ['this', 'should', 'shuffle', 'well']

describe('shuffleArray should', () => {
    test('return an array', ()=> {
        expect(Array.isArray(shuffleArray(testArr1))).toBe(true)
        expect(Array.isArray(shuffleArray(testArr2))).toBe(true)
        expect(Array.isArray(shuffleArray(testArr3))).toBe(true)
    } )
})