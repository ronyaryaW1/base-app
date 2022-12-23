import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Logo from '../../assets/images/White.svg';
import React from 'react';
import {FONTS} from '../../config/styles/Fonts';
import {COLORS} from '../../config/styles/Colors';
import { windowWidth } from '../../utils/Dimensions';

const SplashScreenComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
    {/* <StatusBar translucent backgroundColor={COLORS.PRIMARY_BLUE} /> */}
      <Logo width={windowWidth * 0.3} height={windowWidth * 0.3} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.PRIMARY_BLUE,
  },
});

export default SplashScreenComponent;
