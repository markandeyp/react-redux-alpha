import React from "react";
import { useSelector } from "react-redux";

interface HeaderProps {
  text?: string;
}

const Header: React.FC<HeaderProps> = ({ text }) => {
  const food = useSelector((state: any) => state.food);

  return (
    <div className="header">
      <h1>{text}</h1>
      {food && <h4>Current Food - {food.description}</h4>}
    </div>
  );
};

Header.defaultProps = {
  text: "Alpha Foodie Xchange",
};
export default Header;
