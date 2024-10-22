// 배열에 자바에는 있는 list.remove(index) 가 없다.
const arr = [1,2,3,4,5];
arr.splice(1, 3, 10, 20); // splice 1~3번까지 지우고 10,20 을 그 사이에 넣는다.
Array.prototype.remove = function (index){
  this.splice(index, 1);
}
arr.remove(2);
console.log(arr);







function Student(no, name, kor, eng, mat){
  this.no = no;
  this.name = name;
  this.kor = kor;
  this.eng = eng;
  this.mat = mat;
}

Student.prototype.total = function(){
  return this.kor + this.eng + this.mat;
}

const s1 = new Student(1,'새똥이', 100, 100, 100);
console.log(s1.total());

