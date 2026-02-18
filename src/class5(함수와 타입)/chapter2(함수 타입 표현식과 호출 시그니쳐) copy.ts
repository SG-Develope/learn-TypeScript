/**
 * 함수 타입 표현식
 */

//더하기 빼기 곱하기 처럼 함수가 여러개 만들어야될때 공통으로 함수타입을 쓰면 유용함
type Operation = (a: number, b: number) => number;

// const add: Operation = (a, b) => a + b;
//또는 직접 넣는것도 가능
const add: (a: number, b: number) => number = (a, b) => a + b;

const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

/**
 * 호출 시그니쳐
 * (콜 시그니쳐)
*/

type Operation2 = {
  (a: number, b: number): number;
}


const add2: (a: number, b: number) => number = (a, b) => a + b;

const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;
