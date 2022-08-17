import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState({
    title: "Evening splash",
    place: "Costa rica",
    image: "eveningSplash",
    length: 120,
    current: 110,
  });

  const [lastSearched, setLastSearched] = useState([
    {
      title: "Evening splash",
      place: "Costa rica",
      image: "eveningSplash",
      length: 120,
      current: 110,
    },
  ]);

  function appendToLastSearched(item) {
    setLastSearched([
      item,
      ...lastSearched.filter((track) => track.id != item.id),
    ]);
  }

  function setCurrentTrackFunction(track) {
    setCurrentTrack(track);
    track.current = 0;
  }

  return (
    <AppContext.Provider
      value={{
        currentTrack,
        setCurrentTrack: setCurrentTrackFunction,
        lastSearched,
        appendToLastSearched,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
