// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get

function person(name = "foo") {
  let _id = "abc123";
  let _age = 0;

  return {
    name,
    type: "person",
  };
}

module.exports = person;
