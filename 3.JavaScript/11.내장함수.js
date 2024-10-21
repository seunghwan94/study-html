// finish 무한 <-> finity 유한 (infinity 무한)

// NaN
let nan = NaN;
// infinity
let posiInfi = Number.POSITIVE_INFINITY;
let negaInfi = Number.NEGATIVE_INFINITY;

console.log(nan);
console.log(posiInfi);
console.log(negaInfi);

console.log(typeof nan);
console.log(typeof posiInfi);
console.log(typeof negaInfi);

console.log(nan === nan); // false
console.log(!!nan);       // false
console.log(isNaN(nan));  // true

console.log(posiInfi === Infinity); // true
console.log(negaInfi === Infinity); // false
console.log(isFinite(posiInfi));    // false
console.log(isFinite(negaInfi));    // false

// eval()
eval("let str = 'hello'; console.log(str);");


// URI, URL
// https://www.magolee.com/post/view?no=123
// https://www.magolee.com/post/view/123
let str = "https://www.magolee.com/search/query=http://www.naver.com";

console.log(encodeURI(str)); //https%3A%2F%2Fwww.magolee.com%2Fsearch%2Fquery%3Dhttp%3A%2F%2Fwww.naver.co

console.log(encodeURIComponent(str));

console.log(decodeURIComponent("https%3A%2F%2Fwww.magolee.com%2Fsearch%2Fquery%3Dhttp%3A%2F%2Fwww.naver.com"));

let obj = {x: 10, y: "abcd", z:function(){}};



// class 
class student {

}

let student = new student();