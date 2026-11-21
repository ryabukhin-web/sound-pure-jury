import { createContext, useState, useEffect, useContext } from "react";

const IndexContext = createContext({
  loading: false,
});

export function IndexContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  });
  return (
    <IndexContext.Provider value={{ loading }}>
      {children}
    </IndexContext.Provider>
  );
}

export default IndexContext;
