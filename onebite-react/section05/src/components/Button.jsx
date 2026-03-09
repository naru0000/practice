// props의 기본값 설정시 구조분해할당으로 가져옴

const Button = ({ text, color = "black", children }) => {
  return (
    <button
      onClick={() => {
        console.log("버튼 클릭됨");
      }}
      type="button"
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
