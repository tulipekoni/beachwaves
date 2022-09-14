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
    current: 30,
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

  // Liked states
  // /////////////////////////////////////////////////////////////////////////////
  const [likedTracks, setLikedTracks] = useState([1]);

  function ManipulateLikedTracks(id) {
    if (likedTracks.includes(id)) {
      setLikedTracks(likedTracks.filter((trackID) => trackID != id));
    } else {
      setLikedTracks([...likedTracks, id]);
    }
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

        likedTracks,
        ManipulateLikedTracks,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
