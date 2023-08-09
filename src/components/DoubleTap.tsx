import { ReactElement, useRef } from 'react';
import {State, TapGestureHandler} from 'react-native-gesture-handler';

type Props = {
  singleTap?: () => void;
  doubleTap?: () => void;
  children: ReactElement;
}

export const DoubleTap = ({children, singleTap, doubleTap}: Props) => {
  const doubleTapRef = useRef(null);

  const onSingleTapEvent = (event: any) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      singleTap!();
    }
  };

  const onDoubleTapEvent = (event: any) => {
    if (event.nativeEvent.state === State.ACTIVE) {
       doubleTap!();
    }
  };

  return (
    <TapGestureHandler
      onHandlerStateChange={singleTap && onSingleTapEvent}
      waitFor={doubleTapRef}>
      <TapGestureHandler
        ref={doubleTapRef}
        onHandlerStateChange={doubleTap && onDoubleTapEvent}
        numberOfTaps={2}>
        {children}
      </TapGestureHandler>
    </TapGestureHandler>
  );
};