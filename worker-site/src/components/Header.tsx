import React from "react";
import logo from "../logo.jpg";
import Menu, { menuOption } from "./Menu";

export interface HeaderProps {}

const menuOptions: menuOption[] = [
  { name: "בית", route: "/home" },
  { name: "הזמנות", route: "/orders" },
  { name: "מלאי", route: "/stock" },
  { name: "הזמן", route: "/order" }
];

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <img src={logo} alt="a nice logo" />
      <Menu options={menuOptions} />
    </header>
  );
};

export default Header;
