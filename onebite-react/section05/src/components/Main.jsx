import "./Main.css";

// jsx 문법 주의사항

// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.(중괄호 안에 if문을 넣는다던가 for문을 넣는다는가 X)
// 2. 숫자,문자열,배열값만 렌더링된다.
// 3. 모든 태그는 갇혀 있어야 한다.
// 4. 최상위 태그는 반드시 하나여야 한다.
// 객체는 랜더링할 수 없다.(객체의 문자나 숫자를 선택해야함)

const Main = () => {
  const user = {
    name: "고우리",
    isLogin: true,
  };

  if (user.isLogin) {
    return <div>로그아웃</div>;
  } else {
    return <div>로그인</div>;
  }

  // return <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;
};

export default Main;
