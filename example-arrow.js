dvar names = ['bartosz', 'binda', 'Julie', 'Kotek', 'tomczakowy'];
// names.forEach(function (name){
//   console.log('forEach', name);
// });
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));
//
// var person = {
//   name: 'Andrew',
//   greet: function() {
//     names.forEach(function(name){
//       console.log(this.name )
//     })
//   }
// }
var add = (a,b) => {
  return a+b;
}
console.log(add(2,3));
console.log(add(9,0));
