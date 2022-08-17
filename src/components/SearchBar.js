// SearchBar.js
import React, { useRef, useState } from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import SvgSearch from "../icons/Svg.Search";
import { colors } from "../constraints";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const SearchBar = ({ setSearchPhrase }) => {
  const textInputRef = useRef(null);
  const [focused, setFocused] = useState(false);
  return (
    <TouchableWithoutFeedback
      onPress={() => textInputRef.current.focus()}
      style={{
        backgroundColor: colors.primary,
        width: "100%",
        paddingTop: 24,
        paddingBottom: 21,
        paddingHorizontal: 20,
        borderRadius: 15,
        flexDirection: "row",
        shadowOffset: {
          width: 0,
          height: 16,
        },
        shadowRadius: 40,
        shadowColor: "rgba(202, 202, 224, 0.3)",
        shadowOpacity: 1,
      }}
    >
      <SvgSearch />
      <TextInput
        ref={textInputRef}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          fontFamily: "Poppins_500Medium",
          fontSize: 16,
          lineHeight: 21,
          color: colors.white00,
          marginLeft: 10,
        }}
        onChangeText={setSearchPhrase}
        selectionColor={colors.white00}
        placeholder='Search place'
        placeholderTextColor={focused ? "#779EBE" : colors.white00}
      ></TextInput>
    </TouchableWithoutFeedback>
  );
};
export default SearchBar;
