import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {windowWidth} from '../../utils/Dimensions';
import {COLORS} from '../../config/styles/Colors';
import {FONTS} from '../../config/styles/Fonts';

const Button = ({title, onPress, type = 'default', IconButton, width, height}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container(type)}>
    {type === 'outlinedWithIcon' && (
        <IconButton width={width} height={height} />
    )}
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: type => ({
    flexDirection: type !== 'default' ? 'row' : 'column',
    alignItems: 'center',
    paddingHorizontal: type !== 'default' ? 16 : 0,
    marginTop: 8,
    width: '100%',
    borderRadius: 5,
    backgroundColor:
      type !== 'default' ? COLORS.NEUTRAL_LIGHT : COLORS.PRIMARY_BLUE,
    shadowColor: COLORS.PRIMARY_BLUE,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: type !== 'default' ? 0 : 24,
  }),
  text: type => ({
    paddingVertical: 18,
    textAlign: 'center',
    color: type !== 'default' ? COLORS.NEUTRAL_GREY : COLORS.BACKGROUND_COLOR,
    fontSize: 16,
    fontFamily: FONTS.POPPINS_REGULAR,
  }),
});

export default Button;
