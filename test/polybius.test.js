// Write your tests here!
const {polybius} = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {
    describe("encoding", () => {
        it("should encode a message by translating to a number pair based on given square", () => {
            const expected = "44513444";
            const actual = polybius("test");
            expect(actual).to.equal(expected);
        });
        it("should translate both i and j to 42", () => {
            const expected = "424223";
            const actual = polybius("jim");
            expect(actual).to.equal(expected);
        });
        it("should leave spaces as is", () => {
            const expected = "44513444 424223";
            const actual = polybius("test jim");
            expect(actual).to.equal(expected);
        });
        it("ignores capial letters when encoding", () => {
            const expected = "11 23513434112251";
            const actual = polybius("A Message");
            expect(actual).to.equal(expected);
        });
    })
    describe("decoding", () => {
        it("should decode a message by translating to a letter based on numberpair", () => {
            const expected = "test";
            const actual = polybius("44513444", encode = false);
            expect(actual).to.equal(expected);
        });
        it("should translate 42 to both i and j", () => {
            const expected = "i/ji/jm";
            const actual = polybius("424223", encode = false);
            expect(actual).to.equal(expected);
        });
        it("should leave spaces as is", () => {
            const expected = "test i/ji/jm";
            const actual = polybius("44513444 424223", encode = false);
            expect(actual).to.equal(expected);
        });
        it("should return false if length of input numbers is odd", () => {
            const expected = false;
            const actual = polybius("1234567", encode = false);
            expect(actual).to.equal(expected);
        });
    })
})