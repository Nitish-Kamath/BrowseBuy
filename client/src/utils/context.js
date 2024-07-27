import { createContext, useState } from "react";
// createContext is a method provided by React's Context API that facilitates a way
// to pass data through the component tree without having to
// pass props down manually at every level.

// all logics and global state will be here
// for external use
export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();

  return (
    <Context.Provider
      value={{
        categories,
        setCategories,
        products,
        setProducts,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
