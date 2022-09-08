import React, { useContext, useState } from "react";
import { Image, View } from "react-native";
import {
  FlatList,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import ScreenArea from "../components/ScreenArea";
import colors from "../constraints/colors";
import { Heading, Subtitle, Title } from "../constraints/typography";
import SvgCross from "../icons/Svg.cross";
import { images } from "../constraints";
import SvgPlay from "../icons/Svg.Play";
import { AppContext } from "../context/AppState";
import tracks from "../mockdata/tracks.json";
import { useEffect } from "react";
export const Liked = ({ navigation }) => {
  const { likedTracks, setCurrentTrack } = useContext(AppContext);
  const [listData, setListData] = useState(null);
  function playTrack(track) {
    setCurrentTrack(track);
    navigation.navigate("playing");
  }

  useEffect(() => {
    setListData(tracks.filter((track) => likedTracks.includes(track.id)));
  }, [navigation]);

  return (
    <ScreenArea style={{ paddingTop: 30 }}>
      <View
        style={{
          marginHorizontal: 30,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          opacity: 0.5,
          marginBottom: 32,
        }}
      >
        <Heading>Liked Waves</Heading>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("home")}
          style={{ padding: 16 }}
        >
          <SvgCross />
        </TouchableWithoutFeedback>
      </View>
      <FlatList
        data={listData}
        ListEmptyComponent={<Subtitle>List Empty</Subtitle>}
        renderItem={({ item, index }) => (
          <TrackItem item={item} onPress={() => playTrack(item)} />
        )}
      />
    </ScreenArea>
  );
};

const TrackItem = ({ item, onPress }) => {
  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      style={{
        width: "100%",
        paddingHorizontal: 30,
        paddingBottom: 16,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Image
        style={{ width: 70, height: 70, borderRadius: 30 }}
        source={images[item.image]}
      ></Image>
      <View
        style={{
          paddingLeft: 20,
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Title color={colors.black}>{item.title}</Title>
        <Subtitle color={colors.black}>{item.place}</Subtitle>
      </View>
      <View>
        <SvgPlay />
      </View>
    </TouchableWithoutFeedback>
  );
};
