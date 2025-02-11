// context/GlobalContext.tsx
import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    Dispatch,
    SetStateAction
  } from 'react';
  
  interface GlobalState {
    isDarkMode: boolean;
    setIsDarkMode: Dispatch<SetStateAction<boolean>>;
    activeSection: string;
    setActiveSection: Dispatch<SetStateAction<string>>;
  }
  
  const GlobalContext = createContext<GlobalState>({
    isDarkMode: false,
    setIsDarkMode: () => {},
    activeSection: 'home',
    setActiveSection: () => {}
  });
  
  export function GlobalProvider({ children }: { children: ReactNode }) {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    const [activeSection, setActiveSection] = useState<string>('home');
  
    return (
      <GlobalContext.Provider
        value={{ isDarkMode, setIsDarkMode, activeSection, setActiveSection }}
      >
        {children}
      </GlobalContext.Provider>
    );
  }
  
  export function useGlobalContext() {
    return useContext(GlobalContext);
  }
  