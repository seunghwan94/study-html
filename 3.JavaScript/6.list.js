// 배열

// 배열 리터럴
var arr = [];

// 배열 길이로 선언 (생성자)
var arr = new Array(10);

// 10 과 20을 값으로 가지는 2칸의 배열
var arr = new Array(10,20,"str",[1,2,3],{x:2,y:3});

console.log(arr);
// 특정 값 가져오는 방법
console.log(arr[3][2]);
console.log(arr[4].y);
console.log(arr[4]['x']);

// 2개 남기고 날리기
arr.length=2 
console.log(arr);


var arr = [];
// 10을 추가, 30을 추가, 5를 추가, 20을 추가
arr.push(10);
arr.push(30,5,20);
// 40을 0번 인덱스에 추가
arr.unshift(40)
// 정렬
arr.reverse();
console.log(arr);
arr.sort();
console.log(arr);


