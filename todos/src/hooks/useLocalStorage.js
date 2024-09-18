
function useLocalStorage() {
  const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  return [setLocalStorage];
}

export default useLocalStorage;
