// Number 객체
// toFixed : 
let num = 10.1234;         // typeof number
console.log(num.toFixed(2)); // 10
num = new Number(20.1234); // typeof object
console.log(num.toFixed(2));

// toString, parseInt : 진법 변환 (계산 오차가 발생할수 있음)
let number =20;
let binaryNumber = number.toString(2); //  2진법
let hexNumber = number.toString(16);   // 16진법

console.log(binaryNumber, hexNumber);

let result = parseInt(binaryNumber, 2);
console.log(result); // 20

// String객체
const str = "가나다라가나다라가나다라가나다라";
// charAt() : 문자열 뽑기
console.log(str.charAt(2), str[2]);
// includes('str') : 문자열 str이 포함되어 있는지 확인
// substring() == slice() : 자르기
console.log(str.substring(1,3), str.slice(1,3), str.substr(1,3))
// split() : 분할
// replace() : 교환
console.log(str.replace("가","마"));
console.log(str.replaceAll("가","마"));
// concat() : 합치기
// trim() : 공백 제거

// charCodeAt(idx) : 특정 인덱스에 대해 code 값
let s = "";
for( let i = 0 ; i < 26 ; i++){
  s += String.fromCharCode(65+i);
}
console.log(s.charCodeAt(0));