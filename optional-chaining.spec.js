const { baz, bronze } = require("./optional-chaining.js");

describe("optional-chaining", () => {
  describe("baz", () => {
    it("returns a message if foo.bar.baz is not set", () => {
      expect(baz()).toEqual("whomp-whomp");
    });
    it("returns the value of foo.bar.baz if it is set", () => {
      expect(baz({ bar: { baz: 100 } })).toEqual(100);
      expect(baz({ bar: { baz: 0 } })).toEqual(0);
    });
  });
  describe("bronze", () => {
    it("returns the athlete in third place", () => {
      expect(
        bronze([{ name: "Jane" }, { name: "Jim" }, { name: "Jerry" }])
      ).toEqual("Jerry");
    });
    it("returns `undefined` if there are less than three athletes", () => {
      expect(bronze([{ name: "John" }])).toBe(undefined);
    });
  });
});
