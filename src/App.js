import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardContainer from './modules/Dashboard/DashboardContainer';
import SplashScreenContainer from './modules/SplashScreen/SplashScreenContainer';
import SignInContainer from './modules/SignIn/SignInContainer';
import SignUpContainer from './modules/SignUp/SignUpContainer';
import { COLORS } from './config/styles/Colors';
import DashboardNavigation from './config/routes/tabNavigation';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer independent={true}>
    <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <Stack.Navigator initialRouteName='dashboard'>
        <Stack.Screen options={{ headerShown: false}} name="signIn" component={SignInContainer} />
        <Stack.Screen options={{ headerShown: false}} name="signUp" component={SignUpContainer} />
        <Stack.Screen options={{ headerShown: false}} name="dashboard" component={DashboardNavigation} />
        <Stack.Screen options={{ headerShown: false}} name="splash" component={SplashScreenContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;