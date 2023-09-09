// HeaderContext.js
import { createContext, useContext, useState } from 'react';

const HeaderContext = createContext();

export function HeaderProvider({ children }) {
  const [headers, setHeaders] = useState({});

  return (
    <HeaderContext.Provider value={{ headers, setHeaders }}>
      {children}
    </HeaderContext.Provider>
  );
}

export function useHeaders() {
  return useContext(HeaderContext);
}
