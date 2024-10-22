let obj = {
  x: 10,
  y: '1234',
  z: function(){}
};
console.log(obj);
obj.x = 20;
console.log(obj);
obj.x = function(){
  console.log("hello world");
}
console.log(obj);
obj.x();

// 객체에 프로퍼티 추가 하는 방법
obj.a = undefined;
console.log(obj);
// 객체에 프로퍼티 제거하는 방법
delete obj.y;
console.log(obj);

// 객체의 프로퍼티에 접근하는 방법
obj.x;
obj['x'];
// 함수라서 호출 가능하다.
obj['x']();


// 심볼 타입
// 
let subName = Symbol();
let info = {
  [subName] : '자바스크립트',
  subName : '제이쿼리'
}
console.log(info.subName);
console.log(info[subName]);

