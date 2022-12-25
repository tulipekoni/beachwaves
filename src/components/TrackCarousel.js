import React, { useContext, useState } from "react";
import { View } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { AppContext } from "../context/AppState";
import tracks from "../mockdata/tracks.json";
import { CarouselCard } from "./CarouselCard";

export const TrackCarousel = ({ navigation }) => {
  const [cardSize, setCardSize] = useState(0);
  const scrollX = useSharedValue(0);
  const { setCurrentTrack } = useContext(AppContext);
  //All the tracks, but we add empty places at the first and the last position
  const [tracksWithPlaceHolders, setTracksWithPlaceHolders] = useState([
    { id: 0 },
    ...tracks,
    { id: tracks.length + 1 },
  ]);
  const handler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  function playTrack(track) {
    setCurrentTrack(track);
    navigation.navigate("playing");
  }
  return (
    <View
      onLayout={(e) => {
        setCardSize(e.nativeEvent.layout.height);
      }}
    >
      <Animated.FlatList
        horizontal
        bounces={false}
        onScroll={handler}
        snapToInterval={cardSize}
        decelerationRate={0}
        snapToAlignment='start'
        scrollEventThrottle={16}
        data={tracksWithPlaceHolders}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <CarouselCard
            item={item}
            index={index}
            cardSize={cardSize}
            scrollX={scrollX}
            playTrack={playTrack}
          />
        )}
      />
    </View>
  );
};
