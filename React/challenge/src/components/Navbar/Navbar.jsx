import { useState } from "react";
import { NavLink } from "react-router-dom"; // 라우팅 목적으로 추가
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
      <NavLink to={href}>{children}</NavLink>
    </div>
  );
}

function NavbarMenu({ children }) {
  return <ul className="navbar-menu">{children}</ul>;
}

function NavbarItem({ children, href }) {
  return (
    <li>
      <NavLink to={href} className={({ isActive }) => (isActive ? "active" : "")}>
        {children}
      </NavLink>
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
      <NavLink to={href} className={({ isActive }) => (isActive ? "active" : "")}>
        {children}
      </NavLink>
    </li>
  );
}

Navbar.Logo = NavbarLogo;
Navbar.Menu = NavbarMenu;
Navbar.Item = NavbarItem;
Navbar.Dropdown = DropDown;
Navbar.DropdownItem = DropdownItem;

export default Navbar;
