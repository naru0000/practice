import { Routes, Route } from "react-router-dom"; // 추가
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home.jsx"; // 추가
import About from "./pages/About.jsx"; // 추가
import Experience from "./pages/Experience.jsx"; // 추가
import Project from "./pages/Project.jsx"; // 추가

function App() {
  return (
    <>
      <header>
        <Navbar>
          <Navbar.Logo href="/">Logo</Navbar.Logo>
          <Navbar.Menu>
            <Navbar.Item href="/">Home</Navbar.Item>
            <Navbar.Dropdown title="About Me">
              <Navbar.DropdownItem href="/about">About</Navbar.DropdownItem>
              <Navbar.DropdownItem href="/">Test</Navbar.DropdownItem>
            </Navbar.Dropdown>
            <Navbar.Item href="/Experience">Experience</Navbar.Item>
            <Navbar.Item href="/Project">Project</Navbar.Item>
          </Navbar.Menu>
        </Navbar>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Project" element={<Project />} />
      </Routes>
      <footer>푸터</footer>
    </>
  );
}

export default App;
