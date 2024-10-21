// scope
// 지역변수 : 함수내에서 선언한 변수
// 전역변수 : 지역변수가 아닌 변수



function test(){
  console.log(a); // undefined
  var a = 10; // 지역변수
  console.log(a); // 10
  console.log(b); // undefined
  c = 30;
}

test();
var b = 20; // 전역변수
console.log(c);

for (var i = 0 ; i < 10 ; i ++){

}
console.log(i);

function f1 (){
  var local = 30
  function f2 () {
    console.log(local);
  }
  f2();
}
f1();


// let 
let num = 20;
for(let k = 0; k < 10 ; k++){
  console.log(k);
}
// console.log(k);

// closure : 지역변수가 함수 종료 후에도 남아 있는 현상 => 전역에 있는 변수를 사용안하기 때문에
// 최소 조건 : 함수를 리턴
function increaseCount(){
  let n = 0;
  function inner(){
    return ++n;
  }
  return inner;
}
let tmp = increaseCount();

console.log(tmp());
console.log(tmp());
console.log(tmp());


