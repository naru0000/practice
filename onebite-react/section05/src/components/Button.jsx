// props를 구조분해할당으로 가져옴

const Button = ({ children, text, color = "black" }) => {
  return (
    <button
      onClick={() => {
        console.log(text);
      }}
      onMouseEnter={() => {
        console.log(text);
      }}
      style={{ color: color }}
    >
      {text} - {color}
      {children}
    </button>
  );
};

export default Button;
