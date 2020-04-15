import React from "react";
import logo from "../logo.jpg";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <img src={logo} alt="a nice logo" />
    </header>
  );
};

export default Header;
