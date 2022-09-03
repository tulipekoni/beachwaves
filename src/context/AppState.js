import { createContext, useState, useEffect } from "react";
import { func } from "../constraints";
export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  // States for playing
  // /////////////////////////////////////////////////////////////////////////////
  const [currentTrack, setCurrentTrack] = useState({
    title: "Evening splash",
    place: "Costa rica",
    image: "eveningSplash",
    duration: 120,
  });
  const [playState, setPlayState] = useState({
    current: 110,
    duration: 120,
  });
  const [paused, setPaused] = useState(true);
  const [intervalId, setIntervalId] = useState(0);

  func.useInterval(
    () => {
      setPlayState({ ...playState, current: playState.current + 1 });
    },
    paused ? null : 1000
  );
  // Searching states
  // /////////////////////////////////////////////////////////////////////////////
  const [lastSearched, setLastSearched] = useState([
    {
      title: "Evening splash",
      place: "Costa rica",
      image: "eveningSplash",
      duration: 120,
    },
  ]);

  function appendToLastSearched(item) {
    setLastSearched([
      item,
      ...lastSearched.filter((track) => track.id != item.id),
    ]);
  }

  // Other functions
  // /////////////////////////////////////////////////////////////////////////////
  function setCurrentTrackFunction(track) {
    setCurrentTrack(track);
    setPlayState({ ...playState, duration: track.duration, current: 0 });
  }

  return (
    <AppContext.Provider
      value={{
        currentTrack,
        setCurrentTrack: setCurrentTrackFunction,
        lastSearched,
        appendToLastSearched,
        playState,
        setPlayState,
        paused,
        setPaused,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
