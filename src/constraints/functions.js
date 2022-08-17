import { Image } from "react-native";
import { Asset } from "expo-asset";

import preloadImages from "./preloadImages";

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

export default {
  cacheImages,
  loadAssetsAsync,
  formatTime,
  filterTracksWithSearchPhrase,
};
