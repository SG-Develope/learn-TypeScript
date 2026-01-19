//object

let user: object = {
  id: 1,
  name : "이승규"
}

//object 에서 타입스크립트에서 객체다 라는 정보 외에는 아무런 정보도 없는 타입이다 
//그래서 속성이 있어도 
user.id



//object (객체 리터럴 타입)

let user2: {id:number, name:string} = {
  id: 1,
  name : "이승규"
}
// 객체 리터럴 타입을 정의하면 접근가능
user2.id


// 구조적 타입 시스템 <-> 명목적 타입 시스템 = 타입스크립트는 구조적 타입 시스템을 주로사용
let dog: {name:string,color:string} = {
  name: "돌돌이",
  color: "brown",
};

user = {
  name : "홍길동",
}

//값이 바뀌면 안되는 프로퍼티 (readonly 속성 사용)
let config: { readonly apikey: string } = {
  apikey: "MY APi Key"
};

//읽기 전용이라 값 안바뀜
// config.apikey = "hacked";