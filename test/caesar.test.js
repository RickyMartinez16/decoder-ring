// Write your tests here!
const expect = require("chai").expect;
const {caesar} = require("../src/caesar");


describe("caesar", () => {
    describe("error with shift value", () => {
        it("should return false if shift is not present", () => {
            const expected = false;
            const actual = caesar("thinkful");
            expect(actual).to.equal(expected);
        });
        it("should return false if shift is is equal to 0", () => {
            const expected = false;
            const actual = caesar("thinkful", 0);
            expect(actual).to.equal(expected);
        });
        it("should return false if shift is less than -25", () => {
            const expected = false;
            const actual = caesar("thinkful", -26);
            expect(actual).to.equal(expected);
        });
        it("should return false if shift is greater than 25", () => {
            const expected = false; 
            const actual = caesar("thinkful", 26);
            expect(actual).to.equal(expected);
        });
    });
    describe("encoding a message", () => {
        it("should encode a message by shifting through the alphabet", () => {
            const expected = "xjhwjy";
            const actual = caesar("secret", 5);
        });

        it("should convert input to lower case", () => {
            const expected = "xjhwjy";
            const actual = caesar("Secret", 5);
            expect(actual).to.equal(expected);
        });
        it("should maintain spaces and leave other symbols", () => {
            const expected = "ymnx nx f rjxxflj ktw rd fwrd!";
            const actual = caesar("this is a message for my army!", 5);
            expect(actual).to.equal(expected);
        });
        it("should account for negative shift by shifting left through the alphabet", () => {
            const expected = "nzxmzo"
            const actual = caesar("secret", -5);
            expect(actual).to.equal(expected);
        });
        it("should wrap around the end of the alphabet", () => {
            const expected = "ejgwf xywnujx"
            const actual = caesar("zebra stripes", 5);
            expect(actual).to.equal(expected);
        });
    });
    describe("decoding a message", () => {
        it("should decode input by shifting the letters in opposite direction", () => {
            const expected = "secret";
            const actual = caesar("xjhwjy", 5, false);
            expect(actual).to.equal(expected);
        });
        it("should convert input to lowere case", () => {
            const expected = "secret";
            const actual = caesar("Xjhwjy", 5, false);
            expect(actual).to.equal(expected);
        });
        it("should maintain spaces and other symbols", () => {
            const expected = "this is a message for my army!";
            const actual = caesar("ymnx nx f rjxxflj ktw rd fwrd!", 5, false);
            expect(actual).to.equal(expected);
        });
        it("should account for negative shift by shifting left through the alphabet", () => {
            const expected = "secret";
            const actual = caesar("nzxmzo", -5, false);
            expect(actual).to.equal(expected);
        });
        it("should wrap around the end of the alphabet", () => {
            const expected = "zebra stripes";
            const actual = caesar("ejgwf xywnujx", 5, false);
            expect(actual).to.equal(expected);
        });
    });
})