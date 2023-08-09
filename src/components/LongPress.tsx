import { ReactElement, useRef } from 'react';
import {Gesture, GestureDetector, State, TapGestureHandler} from 'react-native-gesture-handler';

type Props = {
  longPress: () => void;
  children: ReactElement;
}

export const LongPress = ({children, longPress}: Props) => {
  const longPressGesture = Gesture.LongPress().onEnd((e, success) => {
    if (success) {
      longPress();
    }
  });

  return (
    <GestureDetector gesture={longPressGesture}>
      {children}
    </GestureDetector>
    );
};