const { convert } = require("./map.js");

describe("map", () => {
  describe("convert", () => {
    it("converts US need sizes into mm", () => {
      expect(convert(0)).toEqual("2mm");
    });
    it("handles invalid inputs", () => {
      expect(convert("ha")).toEqual("Unknown size");
    });
  });
});
