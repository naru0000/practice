const Button = ({ children, text, color = "black" }) => {
  // console.log(props);

  const onClickButton = () => {
    console.log(text);
  };

  //합성 이벤트
  // 모든 웹 브라우저의 이벤트 객체를 하나로 통일한 형태

  return (
    <button
      // onClick={() => {
      //   console.log(text);
      // }}
      onClick={onClickButton} // 콜백함수를 전달하듯이
      // onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
