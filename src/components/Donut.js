import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Animated, {
  cancelAnimation,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Svg, { G, Circle, Path } from "react-native-svg";
import { func } from "../constraints";
import colors from "../constraints/colors";
import { AppContext } from "../context/AppState";
import SvgPlay from "../icons/Svg.Play";
import SvgPause from "../icons/Svg.Pause";

const STROKE = 6;
const RADIUS = 28;
const CIRCLE_LENGHT = 2 * Math.PI * RADIUS;

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function Donut() {
  const { currentTrack, paused, playState, setPaused } = useContext(AppContext);
  const [firstRender, setFirstRender] = useState(true);

  const progress = useSharedValue(
    func.InvLerp(0, playState.duration, playState.current)
  );

  useEffect(() => {
    if (paused) {
      cancelAnimation(progress);
      return;
    }
    progress.value = withTiming(1, {
      duration: (playState.duration - playState.current) * 1000,
    });
  }, [paused]);

  //Every time the trackId changes we know that the user selected a new track, let's run it
  useEffect(() => {
    //This gets run on the first render. The current track is always paused at start so lets ignore this function on the first render
    if (firstRender) return;

    progress.value = 0;
    progress.value = withTiming(1, {
      duration: playState.duration * 1000,
    });
  }, [currentTrack.id]);

  useEffect(() => {
    setFirstRender(false);
  }, []);

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: CIRCLE_LENGHT * (1 - progress.value),
  }));
  return (
    <TouchableWithoutFeedback
      onPress={() => setPaused(!paused)}
      style={{
        width: RADIUS * 2 + STROKE,
        height: RADIUS * 2 + STROKE,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Svg>
        <G
          rotation='-90'
          origin={`${RADIUS + STROKE / 2}, ${RADIUS + STROKE / 2}`}
        >
          <Circle
            cx={"50%"}
            cy={"50%"}
            r={RADIUS}
            strokeWidth={STROKE}
            stroke={colors.white20}
          />
          <AnimatedCircle
            cx={"50%"}
            cy={"50%"}
            r={RADIUS}
            strokeWidth={STROKE}
            stroke={colors.primary}
            strokeDasharray={CIRCLE_LENGHT}
            animatedProps={animatedProps}
            strokeLinecap='round'
          />
        </G>
      </Svg>
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: paused ? 3 : 0,
        }}
      >
        {paused ? <SvgPlay /> : <SvgPause fill={colors.primary} size={50} />}
      </View>
    </TouchableWithoutFeedback>
  );
}
