var s = {x:10, y:true}

s.no = 10;
s.name = "이재용";
s.kor = 80;
s.eng = 90;
s.mat = 60;
s.total = function(){
  return s.kor + s.eng + s.mat;
}


console.log(s.no);
console.log(s);
delete s.no;
console.log(s);
console.log(s.no);
console.log(s.total());