import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../config/styles/Colors';
import {FONTS} from '../../config/styles/Fonts';

const Circle = props => {
  const {title, Image} = props;
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.circle}>
        <Image width="100%" height="100%" />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {width: 70, minHeight: 108, marginRight: 12},
  circle: {
    width: '100%',
    height: 70,
    borderRadius: 66,
    borderWidth: 1,
    borderColor: COLORS.NEUTRAL_LIGHT,
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    textAlign: 'center',
    color: COLORS.NEUTRAL_GREY,
    fontFamily: FONTS.POPPINS_REGULAR,
    fontSize: 10,
  },
});

export default Circle;
