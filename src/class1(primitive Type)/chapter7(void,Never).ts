// void
// void -> 공허 - >아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

//오직  undefinded 만 담을수있음
// (단 config stric 엄격 모드를 풀면 null까지는 가능)
let a: void;
// a = 1;
// a = "hello"
// a = {};
a = undefined;

//never
//never -> 존재하지않는 // 함수구문이 끝까지 안갈경우 사용 주로 while이나 throw
//불가능한 타입

function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}

// 네버타입은 어떤 값도 못담음 (null과 undefinded포함)
// let a: never;
// a = 1;
