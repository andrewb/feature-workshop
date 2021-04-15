function baz(foo) {
  // Should return "whomp-whomp" if baz is not set
  return foo.bar.baz;
}

function bronze(athletes) {
  return athletes[2].name;
}

module.exports = {
  baz,
  bronze,
};
