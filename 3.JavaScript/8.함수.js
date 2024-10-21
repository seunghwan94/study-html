// 함수
// hoist : 낚는다.
console.log(f(10));

function f(x){
  return x * x;
}

// 오류가 안난다. 왜? 
// js 실행할때 전체스캔 => 함수, 변수 정리 => 선언을 맨위로 끌어올린다. ( hoist 현상 )
console.log(abc); // undefined
var abc = "1234";
console.log(abc); // 1234

// 익명함수
// 변수 선언 후 타입이 함수인 대상을 할당
var f2 = function (x) {
  return x * x;
}
console.log(f2(20));
console.log(function (x) {
  return x * x;
}(20));

// 익명함수 사용법 (1회용 목적으로 사용)
(function (str){
  console.log("hello "+str);
})("javascript");

((str)=>{
  console.log("hello "+str);
})("js");


// 두수를 입력 받아 그중 큰 수를 반환하는 함수
function max(num1, num2){
  return num1 > num2 ? num1 : num2;
}
console.log(max(10,5));
// 여러 수를 입력 받아 그중 큰 수를 반환하는 함수
//  arguments => 배열 비슷한 문법 (인덱스, 배열, 등 있음)
function max2(){

  var max = -Number.MAX_VALUE; 

  for(var i = 0; i < arguments.length; i++){
    
    if(typeof arguments[i] !== "number") return undefined;

    if(arguments[i] > max ){
      max = arguments[i];
    }
  }

  return max == -Number.MAX_VALUE ? undefined : max;
}
console.log(max2(10,20,30));

// typ
var f = function(x){
  return x;
}
console.log(typeof f);          // function
console.log(typeof f(1));       // number
console.log(typeof f("n"));     // String
console.log(typeof f([1,2,3])); // object
console.log(typeof f({}));      // object
console.log(typeof f());        // undefined

function myFunc(){
  console.log("함수 안에 함수 타입");
}
console.log(typeof f(myFunc));
f(myFunc)();
