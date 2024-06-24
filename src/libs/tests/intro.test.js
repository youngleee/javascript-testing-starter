import {describe, test, it, expect} from "vitest";
import {max} from './src/intro'
import {fizzBuzz} from './src/intro'

describe('max', () => {
    it('should return the first argument if it is greater', () => {
        /// AAA -> arrange, act, assert pattern for test organisation
        // Arrange
        const a = 2;
        const b = 1;

        // Act
        const result = max(a,b);

        // Assert
        expect(result).toBe(2);

        //OR
    }) 
    it('should return the first argument if it is greater', () => {
        expect(max(3,5)).toBe(5);
    })
    it('should return the first argument if it is greater', () => {
        expect(max(3,7)).toBe(7);
    })
    it('should return the first argument if it is greater', () => {
        expect(max(3,44)).toBe(44);
    })
})

describe('fizzBuzz', () => {
    it('should return FizzBuzz if n is divisible by 3 AND 5)', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    })

    it('should return Fizz if n is divisible only by 3)', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
    })
    it('should return Buzz if n is divisible only by 5)', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
    })
    it('should return string if not divisible by both 3 and 5)', () => {
        expect(fizzBuzz(4)).toBe('4');
    })
})