//any
// 특정 변수의 타입을 우리가 확실히 모를때

let anyVar: any = 10;
anyVar = "hello"

anyVar = true;
anyVar = {};
anyVar = () => {};

//컴파일(tsc) 돌릴시 any type 은 type 검사를 어찌되든 다 통과하는 치트키 같은 타입
//이기 때문에 사실상 타입검사를 안하는거랑 똑같다 
// 밑에구문은 컴파일하면 anyVar는 함수이기 때문에 에러남
// anyVar.toUppercase();
// anyVar.toFixed();

let num: number = 10;
num = anyVar;

//unknown
let unknownVar: unknown
unknownVar = "";
unknownVar = 1;
unknownVar = {};

//unjnown은 모든타입의 값으로 집어 넣을수가 없음
// num = unknownVar/


//any 타입고 unknown 타입은 변수의 타입으로 지정하면 이 변수는 모든타입의
// 값을 다 할당받을 수 있지만 any 타입은 반대로도 모두 다 가능한 반면
// unknown 타입은 반대로는 다 안된다라고 이해하면 된다

//unknown 타입 추천 - > 타입정제로 런타임 에러 방지