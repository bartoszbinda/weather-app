// function getTempCallback(location, callback){
//   callback(undefined,78);
//   callback('city not found');
// }
//
// getTempCallback('Phialedlphia', function(err, temp){
//   if(err) console.log('error', err);
//   else console.log('success', temp);
// });
//
// function getTempPromise(location){
//   return new Promise(function (resolve, reject){
//     setTimeout(function(){
//       resolve(79);
//       reject('City not found');
//     }, 100);
//
//   });
// }
//
// getTempPromise('Phialedlphia').then(function(temp){
//   console.log('promise success', temp);
// }, function(err){
//   console.log('promise error', err);
// });
function addPromise(a,b){
  return new Promise(function (resolve, reject){
    if(typeof a === 'number' && typeof b === 'number') resolve(a+b);
    reject('Write correct number');
  });
}
addPromise(2,'chuj').then(function(result){
  console.log('promise success', result);
}, function (err) {
  console.log('promise error', err);
});
