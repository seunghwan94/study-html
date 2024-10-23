const now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getTime());     // 
console.log(now.getDay());      // 요일정보 

// getDay를 사용 하여 현재의 요일을 한글로 출력
arr = ['일','월','화','수','목','금','토']
console.log(arr[now.getDay()]);

