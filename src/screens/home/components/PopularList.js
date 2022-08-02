import React, { useContext } from "react";
import { FlatList, Image, View, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SharedElement } from "react-navigation-shared-element";
import { useNavigation } from "@react-navigation/native";
import { DataContext } from "../../../services/DataContext";

export const PopularList = () => {
  const renderItem = ({ item }) => <ListItem item={item} />;
  const renderSeparator = () => <View style={{ width: 20, height: 20 }} />;

  const { data } = useContext(DataContext);

  return (
    <FlatList
      contentContainerStyle={{ alignItems: "center" }}
      horizontal={true}
      data={data}
      renderItem={renderItem}
      snapToAlignment='start'
      decelerationRate={"fast"}
      ItemSeparatorComponent={renderSeparator}
      snapToInterval={Dimensions.get("window").width / 1.5}
    ></FlatList>
  );
};

const ListItem = ({ item }) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("detail", { item })}>
      <View
        style={{
          width: windowWidth / 1.5,
          height: windowWidth / 1.5,
        }}
      >
        <SharedElement id={`item.${item.id}.photo`}>
          <Image
            source={item.image}
            style={{ width: undefined, height: undefined, aspectRatio: 1 }}
          />
        </SharedElement>
      </View>
    </TouchableOpacity>
  );
};
