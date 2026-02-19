/**
 * 선언 합침
 */

// 인터페이스는 별칭과 달리 동일한 이름으로 두 개의 인터페이스를 선언해도 문제안됌
// type Person = {
//   name: string;
// }

// type Person = {
//   name: string;
// };

//동일한 이름은 다 합쳐진다 - 에러 안나는이유
interface Person {
  name: string;
}

interface Person {
  // name: number; // 인터페이스에 선언 충돌은 허용안됨 -> 합침일때는 서브타입이라고 허용되지않은 확장처럼
  age: number;
}

const person: Person = {
  name: "",
  age: 27,
};

/**
 * 모듈 보강
 */

interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

// 라이브러리 같은 이미 다 정해져있는 타입에 뭔가 내가 추가를 해야할경우 보강기법을 사용한다 -합침
const lib: Lib = {
  a: 1,
  b: 2,
  c: "module",
};
