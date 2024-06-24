import {describe, test, it, expect} from "vitest";

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
    })
})