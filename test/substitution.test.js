// Write your tests here!
const expect = require("chai").expect;
const {substitution} = require("../src/substitution.js");

describe("substitution", () => {
    describe("error handling alphabet input", () => {
        it("should return false if alphaet input is empty", () => {
            const actual = substitution("input");
            expect(actual).to.be.false;
        });
        it("should return false if alphabet does not equal exactly 26 characters", () => {
            const actual = substitution("input", "abcdefghijklmnopqrstuvwxyz*&");
            expect(actual).to.be.false;
        });
        it("should return false if the alphabet does not contain 26 unqiue characters aka no duplicates", () => {
            const actual = substitution("input", "zxcvbnm<asdfghjklqwertyuiop");
            expect(actual).to.be.false;
        });
    })
    describe("encoding", () => {
        it("should encode an input message using the substitution alphabet", () => {
            const expected = "ykrrpik";
            const actual = substitution("message", "plmoknijbuhvygctfxrdzeswaq");
            expect(actual).to.equal(expected);
        });
        it("should work with any kind of unique characters", () => {
            const expected = "y&ii$r&";
            const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
            expect(actual).to.equal(expected);
        });
        it("should keep spaces", () => {
            const expected = "elp xhm xf mbymwwmfj dne";
            const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
            expect(actual).to.equal(expected);
        });
        it("should ignore capital letters", () => {
            const expected = "elp xhm xf mbymwwmfj dne";
            const actual = substitution("YoU ArE An EXcELLeNT SpY", "xoyqmcgrukswaflnthdjpzibev");
            expect(actual).to.equal(expected);
        });
    })
    describe("decoding", () => {
        it("should decode an input message when given the substitution alphabet", () => {
            const expected = "you are an excellent spy";
            const actual = substitution("elp xhm xf mbymwwmfj dne", "xoyqmcgrukswaflnthdjpzibev", encode = false);
            expect(actual).to.equal(expected);
        });
        it("should work with any kinds of unique characters", () => {
            const expected = "message";
            const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", encode = false);
            expect(actual).to.equal(expected);
        });
        it("should keep spaces", () => {
            const expected = "you are an excellent spy";
            const actual = substitution("elp xhm xf mbymwwmfj dne", "xoyqmcgrukswaflnthdjpzibev", encode = false);
            expect(actual).to.equal(expected);
        });
    });

});