/**
 * 인터페이스 (type별칭과 다르게 객체의 구조를 정의하는데 특화된 문법, -> 상속 합침 등의 특수한 기능을 제공함)
 */

interface Person {
  readonly name: string;
  age: number;
  sayHi(): void;
  sayHi(a: number, b: number): void;

  // sayHi : () => void;
  // sayHi : (a:number,b:number) => void;
}

type Func = {
  (): void;
};

const person: Person = {
  name: "이승규",
  age: 29,
  sayHi: function () {
    console.log("Hi");
  },
};

// person.name = "홍길동"

// 오버로드 시그니쳐를 사용할때는 꼭 표현식이 호출 시그니쳐로 되어있어야 인식한다 (중요)
person.sayHi();
person.sayHi(1, 2);

//인터페이스는 유니온과 인터섹션 타입을 만들수가 없음 type별칭처럼 ->
type Type1 = number | string | Person;
type Type2 = number & string;


//헝가리안 표기법 I