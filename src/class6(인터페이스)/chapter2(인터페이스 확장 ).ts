/**
 * 인터페이스 확장
 */

interface Animal {
  name: string;
  age: number;
}

//인터페이스 확장 (extends) - 속성을 재정의할 때 규칙은 원본타입의 서브타입이여야만 바꿀수있음 ex)name : "hello"
interface Dog extends Animal {
  // name: "hello"
  // name: number - 서브타입이 아니라 에러남
  isBark: boolean;
}

const dog: Dog = {
  name: "",
  age: 24,
  isBark: true,
};

interface Cat extends Animal {
  name: string;
  age: number;
  isScratch: boolean;
}

interface Chicken extends Animal {
  name: string;
  age: number;
  isFly: boolean;
}

interface Chicken extends Dog, Cat {
  name: string;
  age: number;
  isFly: boolean;
}

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  age: 34,
  isBark: true,
  isScratch: true,
};
