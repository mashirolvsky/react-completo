import React from "react";

const useLocalStorage = (key, initial) => {
  const [state, setState] = React.useState(() => {
    const local = window.localStorage.getItem(key);
    return local ? local : initial;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorage;
