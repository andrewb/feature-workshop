const person = require("./setters-getters.js");

describe("setters-getters", () => {
  it("exposes an immutable `id` value", () => {
    const obj = person();
    expect(obj.id).toEqual("abc123");
    obj.id = "xyz456";
    expect(obj.id).toEqual("abc123");
  });
  it("converts `age` to an integer", () => {
    const obj = person();
    obj.age = 10.5;
    expect(obj.age).toEqual(10);
    obj.age = "100";
    expect(obj.age).toEqual(100);
    // BONUS
    // obj.age = null;
    // expect(obj.age).toEqual(0);
  });
  it("returns a greeting", () => {
    const obj = person("Ms Foo");
    expect(obj.greeting).toEqual("Hello Ms Foo!");
  });
});
