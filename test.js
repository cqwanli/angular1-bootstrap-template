var a = {
  a: 1,
  b: 2
}
function b(obj) {
  console.log(obj)
}
b(a);
a.call(b)