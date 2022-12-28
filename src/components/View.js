import {View as RNView, Text, StyleSheet} from 'react-native';
import React from 'react';
import { COLORS } from '../config/styles/Colors';

const View = ({children}) => {
  return (
    <RNView style={styles.container}>
     {children}
    </RNView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: COLORS.BACKGROUND_COLOR,
    width: '100%'
  },
});

export default View;
