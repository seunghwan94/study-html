// 객체 예제
let student1 = {
  no : 1,
  name : '머스크',
  kor : 90,
  eng : 80,
  mat : 100,
  total : function() {
    return this.kor + this.eng + this.mat;
  },
  avg : function() {
    return this.total() / 3;
  },
  toString : function(){
    return `이름 : ${this.name}\n 총점: ${this.total()}\n 평균: ${this.avg()}`;
  }
}

let student2 = {
  no : 2,
  name : '주커버그',
  kor : 60,
  eng : 50,
  mat : 80,
  total : function() {
    return this.kor + this.eng + this.mat;
  },
  avg : function() {
    return this.total() / 3;
  },
  toString : function(){
    return `이름 : ${this.name}\n 총점: ${this.total()}\n 평균: ${this.avg()}`;
  }
}
// `이름 : ${this.name}\n 총점: ${this.total()}\n 평균: ${this.avg()}`
console.log(student1.toString());
console.log(student1.total());
console.log(student1.avg());


const students = [];
students.push(student1);
students.push(student2);
students.push(
  {
    no : 3,
    name : '빌게이츠',
    kor : 70,
    eng : 80,
    mat : 90,
    total : function() {
      return this.kor + this.eng + this.mat;
    },
    avg : function() {
      return this.total() / 3;
    },
    toString : function(){
      return `이름 : ${this.name}\n 총점: ${this.total()}\n 평균: ${this.avg()}`;
    }    
  }
)



// 자바에 캡슐화처럼 사용가능하지만 자바스크립상 의미에 맞지 않음
// 생성자로서의 호출을 하기 때문에 class 처럼 만든다.
// 의미상 쓰지말라할때는 앞에 _를 사용한다.
// function Student(no, name, kor, eng, mat){
//   let _no = no;

//   this.setNo = function(no){
//     _no = no;
//   }
//   this.getNo = function(){
//     return _no;
//   }
// }

// console.log(students);
// const student3 = new Student(4, '이재용', 100, 30, 40);
// console.log(student3.getNo());
// student3.setNo(10);
// console.log(student3.getNo());
// console.log(student3.no);
// console.log(student3._no);


// 이런식으로 사용하면 된다.
// this를 사용하면 지역으로 된다.
function Student(no, name, kor, eng, mat){
  this.no = no;
  this.name = name;
  this.kor = kor;
  this.eng = eng;
  this.mat = mat;

  this.total = function() {
    return this.kor + this.eng + this.mat;
  }
  this.avg = function() {
    return this.total() / 3;
  }
  this.toString = function(){
    return `이름 : ${this.name}\n 총점: ${this.total()}\n 평균: ${this.avg()}`;
  }  
}

const student3 = new Student(4, '이재용', 100, 30, 40);
students.push(new Student(5,'발머',100,100,70));
console.log(students);



for (let i = 0; i < students.length; i++){
  console.log(students[i].total());
}

// 프로토타입 : 객체의 공간
// console.log.prototype;
Student.prototype.area = 20;
const student4 = new Student(6, '워즈니악', 90, 20, 30);
console.log(student4.area);
