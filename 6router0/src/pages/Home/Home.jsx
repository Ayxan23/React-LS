import React, { useRef } from "react";

const Home = () => {
  const screenRef = useRef();
  const styles = {
    width: "100px",
    height: "100px",
    border: "1px solid black",
  };
  return (
    <div>
      <button
        onClick={() => {
          console.log(screenRef.current);
          screenRef.current.style.background = "red";
          // SEARCH inputRef.current.value includes == dataName , sort 
        }}
      >
        change background
      </button>
      <div ref={screenRef} style={styles}></div>
    </div>
  );
};

export default Home;
