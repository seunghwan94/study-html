// typeof
var num = 10; // number


// 숫자,boolean -> 문자
num = String(num);
num += "1";
// 문자열,boolean -> 숫자
num -= 0;
num /= 1;
num *= 1;
// boolean
num = "";   // false
num = "0";  // true
num = 12;   // true
num = 0;    // false
num = !!num;

// NaN
num = "ABCD" / 1; 
console.log(0/0, 3/0);

// 다른 데이터 타입이 논리 연산중 false가 오는 경우
// 문자열 >> 빈문자열
// 숫자 >> 0
// 객체 >> null
console.log(num, typeof num);