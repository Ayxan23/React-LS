import React from "react";
import styled from "styled-components";

const About = () => {
  const DefaultButton = styled.button`
    background: green;
    padding: 10px 15px;
    border: none;
    font-size: 24px;
    border-radius: 5px;
  `;
  return (
    <div>
      <DefaultButton>About</DefaultButton>
    </div>
  );
};

export default About;
