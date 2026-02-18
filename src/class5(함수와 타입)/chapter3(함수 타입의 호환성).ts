/**
 * 함수 타입의 호환성
 * 특정 함수타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 기준 1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

// 업케스팅이라 가능
a = b;

//다운케스팅이라 아래는안됌
// b = a;

// 기준 2. 매개변수가 호환되는가
// 2-1 매개변수의 개수가 같을 떄

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => 10;
let d: D = (value) => 10;

// 매개변수로 할때는 업케스팅이안된다!
// c = d;
d = c;

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let aniamlFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

//똑같이 업케스팅일 떄 에러가 발생
// aniamlFunc = dogFunc;

dogFunc = aniamlFunc;

let testFunc = (animal: Animal) => {
  console.log(animal.name);
  // console.log(animal.color);
};

let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// 2-2 매개변수의 개수가 다를 때

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => 10;
let func2: Func2 = (a) => 10;

func1 = func2;
// func2 = func1;

/**
 * 호출 시그니쳐
 * (콜 시그니쳐)
 */
