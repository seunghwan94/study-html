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

for (let i in s1){
  if(i == 'name'){
    console.log(i, s1[i]);
  }  
}

const arr = [1,2,3,4,5];

for (let i in arr){
  console.log(i, arr[i]);
}

console.log('name' in s1);