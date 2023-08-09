import  React from "react";
import { StyleSheet, View } from "react-native";
import Animated, { interpolate, useAnimatedStyle } from "react-native-reanimated";

const CIRCLE_RADIUS = 100;
const CIRCLE_BORDER_WITH = 2;

interface CircleProps {
  borderColor: string,
  additionalRadius?: number,
  rotation?: Animated.SharedValue<number>,
}

export const Circle: React.FC<CircleProps> = (props) => {
  const additionalRadius = props.additionalRadius ? props.additionalRadius : 0;
  const radius = CIRCLE_RADIUS + additionalRadius;
  const additionalOffset = props.additionalRadius ? CIRCLE_BORDER_WITH : 0;

  const animatedStyle = useAnimatedStyle(() => {
    const rotationDegree = interpolate(
        props.rotation ? props.rotation.value : 0,
        [0, 1],
        [0, 2]
    );
  
    return {
      transform: [
          { rotate: `${rotationDegree}deg` },
          { translateX: -additionalRadius + additionalOffset },
      ]
    };
  });

  return (
    // <Animated.View style={[
    //   styles.circle,
    //   {
    //       height: radius * 2,
    //       width: radius * 2,
    //       borderRadius: radius,
    //       borderColor: props.borderColor
    //   },
    //   animatedStyle
    // ]}></Animated.View>
    <View style={[
        styles.circle,
        {
            height: radius * 2,
            width: radius * 2,
            borderRadius: radius,
            borderColor: props.borderColor
        },
      ]}
      ></View>
    );
};

const styles = StyleSheet.create({
    circle: {
        position: 'absolute',
        width: CIRCLE_RADIUS * 2,
        height: CIRCLE_RADIUS * 2,
        borderRadius: CIRCLE_RADIUS,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderWidth: CIRCLE_BORDER_WITH,
        borderColor: '#F00',
    }
});