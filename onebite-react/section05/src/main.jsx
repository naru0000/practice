import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// 루트 컴포넌트(최상위 부모 - App 컴포넌트를 대부분 루트 컴포넌트로 쓴다.)
createRoot(document.getElementById("root")).render(<App />);
