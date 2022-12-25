import React, { useContext, useState } from "react";
import { View } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

import tracks from "../mockdata/tracks.json";
import { CarouselCard } from "./CarouselCard";
import { AppContext } from "../context/AppState";

export const TrackCarousel = ({ navigation }) => {
  //size of the carouselcard.
  //The parent of this component has flex -property,
  //so it takes all the available space from the homescreen,
  //the carouselCard is a square and its height is the size of this component.
  const [cardSize, setCardSize] = useState(0);
  //flatlist scroll position
  const scrollX = useSharedValue(0);
  //All the tracks, but we add empty places at the first and the last position
  const [tracksWithPlaceHolders, setTracksWithPlaceHolders] = useState([
    { id: 0 },
    ...tracks,
    { id: tracks.length + 1 },
  ]);
  //when the flatlist gets scrolled, set the scrollingOffset to scrollX -variable
  const handler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  // If a card gets clicked, set the currentTrack to the new one and navigate to the 'playing'-screen
  const { setCurrentTrack } = useContext(AppContext);
  function playTrack(track) {
    setCurrentTrack(track);
    navigation.navigate("playing");
  }
  return (
    <View
      onLayout={(e) => {
        //set the cardSize to the height of the component.
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
