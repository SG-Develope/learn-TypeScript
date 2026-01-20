//타입 별칭

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
  extra: string;
};

let user: User = {
  id: 1,
  name: "이승규",
  nickname: "하마",
  birth: "1998",
  bio: "안녕하세요",
  location: "서울",
  extra: "기타",
};


// 인덱스 시그니처 (객체 key 와 value 의 규칙을 찾는것)

type CountryCodes = {
  [key: string]: string;
};

let countryCodes = {
  korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk"
}

type countryNumberCodes = {
  korea: number;
  [key: string]: number;
};

// 주의할점 : 인덱스 시그니처는 규칙만 위반하지않으면 모든객체를 허용한다 
//때문에 텅빈 객체라도 에러가 안남
let countryNumberCodes: countryNumberCodes = {
  korea: 410
}
