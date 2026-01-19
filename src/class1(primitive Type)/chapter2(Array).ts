//배열

let numArr: number[] = [1, 2, 3];

let strArr = ["hello", "im", "winterlood"]

let boolArr: Array<boolean> = [true, false, true];

//배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];

//다차원 배열의 타입을 정의하는 방법
let doubleArr: ( number | string)[][] = [
  [1, 2, 3],
  [4, 5, 6],
  ["stirng","test"],
];


//튜플
//길이와 타입이 고정된 배열 
let tup1: [number,number] = [1,2]
let tup2: [number, string, boolean] = [1, '2', true];


tup1.push(1); // 이거는 자바스크립배열이라고생각하기때문에 에러가 안난다.
tup1.pop();
tup1.pop();
tup1.pop();

//튜플 쓰는 이유 (인덱스 순서오류 방지)
const users: [string, number][]= [
  ["이승규",1],
  ["이아우",2],
  ["김아우",3],
  ["박아우",4],
  // [5,"최아무개"],//에러남
]