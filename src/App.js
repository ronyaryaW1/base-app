import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardContainer from './modules/Dashboard/DashboardContainer';
import SplashScreenContainer from './modules/SplashScreen/SplashScreenContainer';
import SignInContainer from './modules/SignIn/SignInContainer';
import SignUpContainer from './modules/SignUp/SignUpContainer';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='splash'>
        <Stack.Screen options={{ headerShown: false}} name="signIn" component={SignInContainer} />
        <Stack.Screen options={{ headerShown: false}} name="signUp" component={SignUpContainer} />
        <Stack.Screen options={{ headerShown: false}} name="dashboard" component={DashboardContainer} />
        <Stack.Screen options={{ headerShown: false}} name="splash" component={SplashScreenContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;