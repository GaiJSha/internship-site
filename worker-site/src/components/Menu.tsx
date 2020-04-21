import * as React from "react";
import { Link, useLocation } from "react-router-dom";

export interface menuOption {
  name: string;
  route: string;
}

export interface MenuProps {
  options: menuOption[];
}

const Menu: React.FC<MenuProps> = ({ options }) => {
  let location = useLocation();

  return (
    <nav>
      {options.map((option) => (
        <Link
          key={option.name}
          className={
            location.pathname !== option.route
              ? "menu-button"
              : "menu-button clicked"
          }
          to={option.route}
        >
          {option.name}
        </Link>
      ))}
    </nav>
  );
};

export default Menu;
