import  React, { useState, useRef, useCallback } from "react";
import { StyleSheet, SafeAreaView, Text, View, Platform, Alert } from "react-native";
import Constants from "expo-constants";
import Result from "../components/Result";
import { displayTime } from "../util";
import { DoubleTap } from "../components/DoubleTap";
import { LongPress } from "../components/LongPress";
import { AppModelNavProps } from "../roots/AppModelNav";

type ILooperProps = AppModelNavProps<'Looper'>;

export const Looper: React.FC<ILooperProps> = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setRunning] = useState(false);
  const [results, setResults] = useState<number[]>([]);
  const timer = useRef<NodeJS.Timer>();
  
  const handleReset = useCallback(() => {
      if (!isRunning) {
        Alert.alert("Recommencer", "Êtes-vous sûr de vouloir recommencer ?", [
          {
            text: "Oui",
            onPress: () => {
              setTime(0);
              setResults([]);
            },
          },
          {
            text: "Non",
          },
        ]);
      }
  }, [isRunning, time]);

  const handleLaps = useCallback(() => {
    if (isRunning) {
      setResults((previousResults) => [time, ...(previousResults as [])]);
    }
  }, [isRunning, time]);

  const handleStart = useCallback(() => {
    if (!isRunning) {
      const interval = setInterval(() => {
        setTime((previousTime) => previousTime + 1);
      }, 10);
      timer.current = interval;
    } else {
      clearInterval(timer.current);
    }
    setRunning((previousState) => !previousState);
  }, [isRunning]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // console.log('This will run every second!');
  //     alert('This will run every 5 seconds!')
  //     setResults((previousResults) => [time, ...(previousResults as [])]);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

return (
    <SafeAreaView style={styles.container}>
      <Text>Looper</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: Constants.statusBarHeight,
  },
  display: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'red' 
  },
  displayText: {
    color: "white",
    fontSize: 70,
    fontWeight: "200",
    fontFamily: Platform.OS === "ios" ? "Helvetica Neue" : undefined,
  }
});