import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState({
    title: "Evening splash",
    place: "Costa rica",
    image: "eveningSplash",
    length: 120,
    current: 110,
  });

  return (
    <AppContext.Provider value={{ currentSong, setCurrentSong }}>
      {children}
    </AppContext.Provider>
  );
};
