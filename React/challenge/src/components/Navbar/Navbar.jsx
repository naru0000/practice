import { useState } from "react";
import "./Navbar.scss";

function Navbar({ children }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">{children}</div>
    </nav>
  );
}

function NavbarLogo({ children, href }) {
  return (
    <div className="navbar-logo">
      <a href={href}>{children}</a>
    </div>
  );
}

function NavbarMenu({ children }) {
  return <ul className="navbar-menu">{children}</ul>;
}

function NavbarItem({ children, href }) {
  return (
    <li>
      <a href={href}>{children}</a>
    </li>
  );
}

function DropDown({ title, children }) {
  // 열림/닫힘 상태 useState로 세팅
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="dropdown">
      {/* 클릭시 상태 변경 */}
      <button className="dropdown-btn" onClick={() => setIsOpen(!isOpen)}>
        {title}
      </button>
      {/* 상태에 따라 클래스 변경 */}
      <ul className={`dropdown-menu ${isOpen ? "active" : ""}`}>{children}</ul>
    </li>
  );
}

function DropdownItem({ children, href }) {
  return (
    <li>
      <a href={href}>{children}</a>
    </li>
  );
}

Navbar.Logo = NavbarLogo;
Navbar.Menu = NavbarMenu;
Navbar.Item = NavbarItem;
Navbar.Dropdown = DropDown;
Navbar.DropdownItem = DropdownItem;

export default Navbar;
