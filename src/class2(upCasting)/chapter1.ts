/**
 * unknown 타입
 */

function unKnownExam() {

  //업케스팅
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;
 

  //다운캐스팅(에러남)
  let unknownVar: unknown
  // let num:number = unknownVar

}

/**
 * Never 타입 (공집합)
 */

function neverExam() {

  function neverFunc(): never {
    while (true) {
      
    }
  }
  // 다운케스팅
  let num: number = neverFunc();
}


/**
 * void 타입
 */

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined
  }
}


/**
 * any 타입 (any타입은 모든타입의 슈퍼타입 즉 계층구조로들 무시하는 치트키)
 * //타입계층도를 아예 무시해버려서 업캐스팅 다운 케스팅 다 가능 (비추)
 * // 단 never 타입만 허용이 안됌 (never는 공집합 그 자체라 어떤값도 변경 불가능)
 */

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar;

  undefinedVar = anyVar;

  // 단 never 타입만 허용이 안됌 (never는 순수한 공집합 그 자체라 어떤값도 변경 불가능)
  // neverVar = anyVar;
}


