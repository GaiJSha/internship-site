import * as React from "react";
import { Link } from "react-router-dom";

export interface menuOption {
  name: string;
  route: string;
}

export interface MenuProps {
  options: menuOption[];
}

const Menu: React.FC<MenuProps> = ({ options }) => {
  return (
    <nav>
      {options.map((optoin) => (
        <Link className="menu-button" to={optoin.route}>
          {optoin.name}
        </Link>
      ))}
    </nav>
  );
};

export default Menu;
