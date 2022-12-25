import { useContext } from "react";
import { View, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { images } from "../constraints";
import { Subtitle, Title } from "../constraints/typography";
import { AppContext } from "../context/AppState";
import { useNavigation } from "@react-navigation/native";
import Donut from "./Donut";

export const PlayingCard = () => {
  const { currentTrack } = useContext(AppContext);
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate("playing")}>
      <View
        style={{
          backgroundColor: colors.white00,
          padding: 10,
          flexDirection: "row",
          borderRadius: 25,
          backdropFilter: "blur(30px)",
        }}
      >
        <Image
          source={images[currentTrack.image]}
          style={{ width: 75, height: 75, borderRadius: 25 }}
        ></Image>
        <View
          style={{
            paddingHorizontal: 10,
            justifyContent: "center",
          }}
        >
          <Title color={colors.black}>{currentTrack.title}</Title>
          <Subtitle color={colors.black}>{currentTrack.place}</Subtitle>
        </View>
        <View
          style={{
            justifyContent: "center",
            paddingRight: 10,
            marginLeft: "auto",
          }}
        >
          <Donut />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
