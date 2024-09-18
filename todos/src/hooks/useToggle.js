import { useState } from "react";

function useToggle(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);
  const changeStatus = () => {
    setIsOpen(!isOpen);
  };
  return [isOpen, changeStatus];
}

export default useToggle;
