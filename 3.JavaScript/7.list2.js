// 자바스크립트의 모든 변수는 객체로 관리 됨 => 순수 객체 지향 언어이다.
// 자바에 배열 소유 멤버는 : length 만 있다. 
// 자바에 조인 사용법은 String.join(배열, 구분자);

// slice : 자르기 (cf : substring) => 원본 변화 없는 걸 확인
var arr = ["ABC", true, 1234];
var arr1 = arr.slice(1,2);
console.log(arr);  
console.log(arr1);

// split : 문자열 => 배열로 (seperator)
var str = "a-b-c-d-e";
arr1 = str.split("-");
console.log(arr1);
// join : 배열 => 문자열 
str = arr1.join("/")
console.log(str);

// 배열 + 배열
arr2 = arr.concat(arr1);
arr2 = [arr, arr1];
arr2 = [...arr, 10, ...arr1];
console.log(arr2);

// toString : 문자열로 
console.log(arr2.toString());
