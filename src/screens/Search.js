import React, { useContext, useState } from "react";
import { Image, View } from "react-native";
import {
  FlatList,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

import ScreenArea from "../components/ScreenArea";
import colors from "../constraints/colors";
import {
  Heading,
  SubHeading,
  Subtitle,
  Title,
} from "../constraints/typography";
import SvgCross from "../icons/Svg.cross";
import tracks from "../mockdata/tracks.json";
import { AppContext } from "../context/AppState";
import { func, images } from "../constraints";
import SvgPlay from "../icons/Svg.Play";
import SearchBar from "../components/SearchBar";

export const Search = ({ navigation }) => {
  const { lastSearched, setCurrentTrack, appendToLastSearched } =
    useContext(AppContext);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [listData, setListData] = useState(lastSearched);

  function playTrack(track) {
    setCurrentTrack(track);
    appendToLastSearched(track);
    navigation.navigate("playing");
  }

  function onSearchPhraseChange(newSearchPhrase) {
    setSearchPhrase(searchPhrase);

    if (newSearchPhrase.length == 0) {
      setListData(lastSearched);
      return;
    }
    const filteredTracks = func.filterTracksWithSearchPhrase(
      tracks,
      newSearchPhrase
    );
    setListData(filteredTracks);
  }

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
        }}
      >
        <Heading>Discover places</Heading>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("home")}
          style={{ padding: 16 }}
        >
          <SvgCross />
        </TouchableWithoutFeedback>
      </View>
      <View style={{ marginLeft: 30, marginRight: 75 }}></View>
      <View style={{ marginTop: 30, marginHorizontal: 30 }}>
        <SearchBar setSearchPhrase={onSearchPhraseChange} />
      </View>
      <SubHeading
        style={{ margin: 30, height: searchPhrase.length == 0 ? "auto" : 0 }}
      >
        Last Searched
      </SubHeading>
      <FlatList
        data={listData}
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
