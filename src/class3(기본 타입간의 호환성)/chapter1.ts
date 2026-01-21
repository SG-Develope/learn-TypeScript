/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

/**
 * 객체 타입간의 호환성
 * ->어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 * 
 * 
 */

type Animal = {
  name: string;
  color: string;
}


type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도"
}

animal = dog;

//다운 캐스팅이라 에러
// dog = animal

type Book = {
  name: string;
  price: number;
}

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
}

let book: Book;
let ProgrammingBook: ProgrammingBook = {
  name: "더미 테스트 ",
  price: 33000,
  skill : "reactJsasd",
}

book = ProgrammingBook;
// ProgrammingBook = book;

/**
 * 초과 프로퍼티 검사
 */

let book2: Book = {
  name: "더미 테스트 2",
  price: 33000,
  // skill: "reactJs"
}




let book3: Book = ProgrammingBook;

console.log(book3);

// // ❌ 객체 리터럴 직접 할당 
// // → 구조적 타이핑 + 초과 프로퍼티 검사 (둘 다 적용)
// let book: Book = {
//   name: "책",
//   price: 1000,
//   skill: "React" // 에러!
// }

// // ✅ 변수를 통한 할당
// // → 구조적 타이핑만 적용 (초과 프로퍼티 검사 안 함)
// let programmingBook: ProgrammingBook = {
//   name: "책",
//   price: 1000,
//   skill: "React"
// }
// let book: Book = programmingBook; // OK!