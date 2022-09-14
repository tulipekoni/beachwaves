import { Image } from "react-native";
import { Asset } from "expo-asset";

import preloadImages from "./preloadImages";
import { useEffect, useRef } from "react";

// cache images
// /////////////////////////////////////////////////////////////////////////////
const cacheImages = (images) =>
  Object.values(images).map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    }

    return Asset.fromModule(image).downloadAsync();
  });

// preload async
// /////////////////////////////////////////////////////////////////////////////
const loadAssetsAsync = async () => {
  // preload assets
  const imageAssets = cacheImages(preloadImages);

  // promise load all
  return Promise.all([...imageAssets]);
};

// format seconds
// /////////////////////////////////////////////////////////////////////////////
const formatTime = (sec) => {
  const padTime = (num, size) => `000${num}`.slice(size * -1);
  const time = parseFloat(sec).toFixed(3);
  const minutes = Math.floor(time / 60) % 60;
  const seconds = Math.floor(time - minutes * 60);

  return `${padTime(minutes, 1)}:${padTime(seconds, 2)}`;
};

// filter tracks with searchPhrase
// /////////////////////////////////////////////////////////////////////////////
const filterTracksWithSearchPhrase = (tracks, searchPrase) => {
  const formattedSearchPhrase = searchPrase.toLowerCase();
  const filteredData = tracks.filter(
    (track) =>
      track.place.toLowerCase().includes(formattedSearchPhrase) ||
      track.title.toLowerCase().includes(formattedSearchPhrase)
  );
  return filteredData;
};

// custom react hook for intervals
// /////////////////////////////////////////////////////////////////////////////
function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
// inverselerp -function
// /////////////////////////////////////////////////////////////////////////////
const InvLerp = (a, b, value) => {
  return (value - a) / (b - a);
};

export default {
  cacheImages,
  loadAssetsAsync,
  formatTime,
  filterTracksWithSearchPhrase,
  useInterval,
  InvLerp,
};
