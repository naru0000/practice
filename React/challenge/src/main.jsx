import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // 라우팅을 위해 추가
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// BrowserRouter =>
//   1. 브라우저 주소창의 url을 관리해주는 컴포넌트
//   2. 이걸로 감싸야 라우팅이 작동
//   3. 딱 한 번만 최상위에서 감싸면 됨
