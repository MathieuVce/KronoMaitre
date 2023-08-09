import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { StopWatch } from '../screens/Stopwatch';
import { Looper } from '../screens/Looper';
import { Home } from '../screens/Home';


interface IAppModelNavProps {}

type AppModelNavParamList = {
  StopWatch: undefined;
  Looper: undefined;
  Home: undefined;
};

export type AppModelNavProps<T extends keyof AppModelNavParamList> = {
  navigation: StackNavigationProp<AppModelNavParamList, T>;
  route: RouteProp<AppModelNavParamList, T>;
};

const RootStack = createStackNavigator<AppModelNavParamList>();

export const AppModelNav: React.FC<IAppModelNavProps> = () => (
  <RootStack.Navigator
    initialRouteName="Home"
    screenOptions={{
      header: () => null,
    }}
  >
    <RootStack.Screen name="Home" component={Home} />
    <RootStack.Screen name="StopWatch" component={StopWatch} />
    <RootStack.Screen name="Looper" component={Looper} />
  </RootStack.Navigator>
);
