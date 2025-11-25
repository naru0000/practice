// props의 기본값 설정시 구조분해할당으로 가져옴

const Button = ({ children, text, color = "black" }) => {
  // 합성 이벤트 객체 - 크로스 브라우징 이슈 해결
  // 이벤트 객체
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };
  return (
    <button onClick={onClickButton} style={{ color: color }}>
      {text} - {color}
      {children}
    </button>
  );

  // return (
  //   <button
  //     onClick={() => {
  //       console.log(text);
  //     }}
  //     onMouseEnter={() => {
  //       console.log(text);
  //     }}
  //     style={{ color: color }}
  //   >
  //     {text} - {color}
  //     {children}
  //   </button>
  // );
};

export default Button;
