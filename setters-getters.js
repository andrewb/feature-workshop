function person(name = "foo") {
  let _id = "abc123";
  let _age = 0;

  return {
    name,
    type: "person",
  };
}

module.exports = person;
