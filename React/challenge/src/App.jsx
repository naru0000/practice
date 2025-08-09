import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  return (
    <>
      <header>
        <Navbar>
          <Navbar.Logo href="/">Logo</Navbar.Logo>
          <Navbar.Menu>
            <Navbar.Item href="/">Home</Navbar.Item>
            <Navbar.Dropdown title="About Me">
              <Navbar.DropdownItem href="/">Test</Navbar.DropdownItem>
              <Navbar.DropdownItem href="/">Test</Navbar.DropdownItem>
            </Navbar.Dropdown>
            <Navbar.Item href="/">Experience</Navbar.Item>
            <Navbar.Item href="/">Project</Navbar.Item>
          </Navbar.Menu>
        </Navbar>
      </header>

      <main>메인</main>
      <footer>푸터</footer>
    </>
  );
}

export default App;
