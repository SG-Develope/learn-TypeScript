//타입 별칭
let user = {
    id: 1,
    name: "이승규",
    nickname: "하마",
    birth: "1998",
    bio: "안녕하세요",
    location: "서울",
    extra: "기타",
};
let countryCodes = {
    korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk"
};
// 주의할점 : 인덱스 시그니처는 규칙만 위반하지않으면 모든객체를 허용한다 
//때문에 텅빈 객체라도 에러가 안남
let countryNumberCodes = {
    korea: 410
};
export {};
