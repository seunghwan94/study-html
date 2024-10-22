const arr = [10, 20, 3, 40, 5];
arr.sort((a,b) =>a-b);
console.log(arr);


// for of문 : 리터럴한 애들만 사용
for (let i of arr){
  console.log(i);
}

const multi = [
  [1,2,3,4,5],
  [3,4,5],
  [2,3,4]
]
console.log("");
// for (let i in multi){
//   for(let j in multi[i]){
//     console.log(multi[i][j]);
//   }
// }

// for (let i of multi){
//   for(let val of i){
//     console.log(val);
//   }
// }


// foreach()
console.log("====");
const arr1 = [10,20,30,40,50];
// 10,30,50 만 출력 filter랑 foreach 사용해서
arr1.filter(i => i % 20 == 10)
    .map(j => j * j / 10)
    .forEach((k) => console.log(k));

arr1.filter(function(i) {
  return i % 20 == 10;
}).map(function(i){
  return i ** 2 /10;
}).forEach(function(i){
  console.log(i);
})

// reduce : 줄이다
// accumulator : 누적
const arr2 = [1,2,3,4,5];
const result = arr2.reduce(function(acc,cur){
  console.log(acc);
  return acc+cur;
},0)
console.log(result);