let add = function(num1, num2){
	return num1 + num2
}

let add (num1, num2) => {
	return num1 + num2
}

const superman = {
	name : ‘clark’,
	age : 33,
}

접근
superman.name
superman[‘age’]
추가
superman.gender = ‘male’;
superman[‘hairColor’] = ‘black’



if (priorities.some((value, index) => value > first)) {
            priorities.push(first);          => 
some은 배열의 요소중 하나라도 트루면 트루 리턴	

every 함수는 배열의 모든 요소가 callbackFunction 에서 true를 리턴해야 true를 리턴,
하나라도 false가 떨어지면 false를 리턴합니다.
 
some 함수는 배열의 요소 중 하나라도 callbackFunction에서 true를 리턴하면 true를 리턴 합니다.

et bridge = Array.from({ length: bridge_length }, () => 0);   => 배열 초기화

const arr1 = Array.from(Array(5), () => new Array(2)  2차원 배열 초기화

var arr = new Array(5);

for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(2);
}                                                             2차원 배열 초기화

arr = [1, 2, 3, 4, 5]
console.log( Math.max(arr) );    // 결과값: NaN (원하지 않은 결과!!!)
console.log( Math.max(...arr) ); // 결과값: 5

priorities.shift() => 배열의 제일 앞에 있는 원소 빼내기

if(priorities.filter((e) => e > c).length > 0){     => filter 함수는 배열의 원소를 바꿔주는 역할을 합니다.
            priorities.push(c)
        }

push => 배열의 맨 뒤에 넣음

if (numbers.reduce((a, b) => a + b) === 0).   하나로 합칠때 reduce를 씁니다.

for in 기본적인
for of 문자열 돌릴때 자주씀

String(숫자) , parseInt(문자)
substring(,)
const str1 = ['Hello', 'world'].join();    => 출력 Hello,world.  join 은 배열의 원소들 합치기 입니다.

=============================
onst str = "apple banana orange";

const arr = str.split(" ");      //split(“”) 은 “” 띄어쓰기 기준으로 쪼개서 배열을 만들어 하나씩 넣어주는 역할을 합니다.

document.writeln(arr.length); // 3
document.writeln(arr[0]); // apple
document.writeln(arr[1]); // banana
document.writeln(arr[2]); // orange
=============================

자바스크립트 Boolean() 함수 자료형 변환 표

자료형	변환시 Boolean 값	
	true	false
Boolean	true	false
String	공을 제외한 모든 스트링 값	스트링이 "" 처럼 공일때
Number	0 보다 큰 모든 수들	0 or NaN
Object	null 을 제외한 모든 object 들	null
Undefined	해당 사항 없음	undefined
Null	해당 사항 없음	null
 


arr.sort(function (a,b){ return a-b; });      오름차순 정렬

arr.sort(function (a,b){ return b-a; });      내림차순 정렬

let strings = numbers.map(num => num + ""); => 배열의 숫자를 문자형으로 만들 수 있다…

unction ensure(value){
	if(value === undefined){
		throw new Error('value must be provided')
		}
	return value;
}

querySelector 는 특정 name 이나 id 를 제한하지않고 css선택자를 사용하여 요소를 찾습니다.

(#sections) -> sections 아이디를 가진 요소를 찾습니다
(.section) -> section 클래스명을 가진 요소를 찾습니다

nstr = parseInt(membershipId.charAt(i));

toString()

delete도 쓸 수 있음
const obj = { a: 1 }; obj.hasOwnProperty("a"); // true 
obj.hasOwnProperty("b"); // false
객체에 특정 프로퍼티가 존재하면 true, 그렇지 않으면 false 를 반환