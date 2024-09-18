import React from "react";
import propTypes from "prop-types";

const HeaderLink = ({ name, surname, age = 20, hobbies }) => {
  return (
    <p>
      {name} {age} {surname} {hobbies}
    </p>
  );
};

HeaderLink.propTypes = {
  name: propTypes.string.isRequired,
  surname: propTypes.string,
  age: propTypes.oneOfType([propTypes.string, propTypes.number]),
  hobbies: propTypes.array,
};

export default HeaderLink;
