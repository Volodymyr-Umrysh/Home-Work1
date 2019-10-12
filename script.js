//===== Task1 ===========


// function sequence(startNumber, step) {
//     startNumber
//    step
//    return function generator() {
//        console.log(startNumber += step)
//    }
// }
// let generator = sequence(10, 3);
// let generatorTwo = sequence(7, 1)
// generatorTwo()
// generator()
// generator()
// generatorTwo()
// generatorTwo()
// generatorTwo()
// generatorTwo()
// generator()
// generator()



//===== Task2 ===========


function sequence(startNumber, step) {
    let count=0;
   return function generator() {
       if(count==0){
        count++;
        return startNumber;
        }
       else{ return startNumber += step}
   }
}
let generator = sequence(0, 2);
var arr = [];
function take(generator, x) {
   for (let i = 0; i < x; i++) {
       arr.push(generator())
   }
   return arr;
}
console.log(take(generator, 5))
