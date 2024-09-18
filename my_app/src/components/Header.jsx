//rafce

import React from "react";
import HeaderLink from "./HeaderLink";

const Header = ({ name, surname, age, hobbies }) => {
  return (
    <div>
      <ul>
        <li>
          <p>
            {/* {name} {age} {surname}  */}
            <HeaderLink
              name={name}
              surname={surname}
              age={age}
              hobbies={hobbies}
            />
          </p>
        </li>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
      </ul>
    </div>
  );
};
/*const Header = (props) => {
    console.log(props);
    return (
      <div>
        <p>{props.name} {props.age} {props.surname}</p>
      </div>
    );
  }; 
*/
export default Header;
