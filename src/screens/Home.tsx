import  React from "react";
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { AppModelNavProps } from "../roots/AppModelNav";
import { CircleAnimation } from "../components/Circles";

type IHomeProps = AppModelNavProps<'Home'>;

export const Home: React.FC<IHomeProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.halfView}>
          <CircleAnimation onPress={() => navigation.navigate("StopWatch")}>
            <Text style={styles.text}>Chronomètre</Text>
          </CircleAnimation>
        </View>
        <View style={{...styles.halfView, borderTopColor: 'white', borderTopWidth: 1}}>
          <CircleAnimation onPress={() => navigation.navigate("Looper")}>
            <Text style={styles.text}>Looper</Text>
          </CircleAnimation>  
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: Constants.statusBarHeight,
  },
  halfView: {
    flex: 1/2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  round: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'white',
    shadowOffset: { width: 4, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 1.2,
    elevation: 5,
  },
  text: {
    fontSize: 20,
    color: 'white',
    textTransform: 'uppercase',
  }
});