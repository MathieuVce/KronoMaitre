import  React, { ReactElement, useEffect } from "react";
import { Easing, StyleSheet, TouchableOpacity } from "react-native";
import { useSharedValue, withRepeat, withTiming, cancelAnimation } from "react-native-reanimated";
import { Circle } from "./Circle";

const CIRCLE_RADIUS = 100;
const CIRCLE_BORDER_WITH = 2;
const ADDITIONAL_RADIUS = 6;

interface CircleAnimationProps {
  onPress: () => void,
  children: ReactElement
}

export const CircleAnimation: React.FC<CircleAnimationProps> = ({ onPress, children }) => {
  const rotation = useSharedValue(0);

  const startAnimation = () => {
      rotation.value = 0;
      rotation.value = withRepeat(
          withTiming(1,
            { duration: 1500, easing: Easing.linear }
          ),
          -1,
          false);
  };

  // useEffect(() => {
  //     startAnimation();
  //     return () => {
  //         cancelAnimation(rotation);
  //     };
  // }, []);

  return (
    <TouchableOpacity style={styles.circleContainer} onPress={onPress}>
      <Circle borderColor={'rgb(50, 150, 110)'} />
      <Circle borderColor={'rgb(50, 150, 200)'} additionalRadius={ADDITIONAL_RADIUS} rotation={rotation} />
      <Circle borderColor={'rgb(220, 0, 90)'} additionalRadius={ADDITIONAL_RADIUS} rotation={rotation} />
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  circleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: ((CIRCLE_RADIUS + ADDITIONAL_RADIUS) * 2) + (ADDITIONAL_RADIUS * 2) - (CIRCLE_BORDER_WITH * 2),
    width: '100%',
  }
});