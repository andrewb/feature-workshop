const { multiply } = require("./nullish-coalescing.js");

describe("nullish-coalescing", () => {
  describe("multiply", () => {
    it("multiplies by the multipler", () => {
      expect(multiply(10, 10)).toEqual(100);
    });
    it("multiplies by 1 if a multipler is not set", () => {
      expect(multiply(10)).toEqual(10);
    });
    it("multiplies by 1 if the multipler is null", () => {
      expect(multiply(10, null)).toEqual(10);
    });
    it("can multiply by 0", () => {
      expect(multiply(10, 0)).toEqual(0);
    });
  });
});
