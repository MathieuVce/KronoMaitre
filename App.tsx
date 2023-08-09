import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { AppModelNav } from './src/roots/AppModelNav';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <AppModelNav />
      </NavigationContainer>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
});