import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import Icons from '../Icons';
import {COLORS} from '../../config/styles/Colors';
import {FONTS} from '../../config/styles/Fonts';

const Form = props => {
  const {
    title,
    iconName,
    typeIcon,
    value,
    onChangeValue,
    customIconColor,
    customBorderColor,
    keyboardType,
    errMsg = '',
    secureTextEntry,
  } = props;
  console.log('props', props);
  return (
    <View>
      <View style={styles.form(customBorderColor)}>
        <Icons
          name={iconName}
          type={typeIcon}
          color={customIconColor || COLORS.NEUTRAL_GREY}
          size={30}
        />
        <TextInput
          style={styles.formTitlte}
          onChangeText={onChangeValue}
          value={value}
          placeholder={title}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
        />
      </View>
      {errMsg !== '' && <Text style={styles.textError}>{errMsg}</Text>}
    </View>
  );
};
const styles = StyleSheet.create({
  form: customBorderColor => ({
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: customBorderColor || COLORS.NEUTRAL_GREY,
    alignItems: 'center',
    paddingHorizontal: 18,
    flexDirection: 'row',
    marginBottom: 8,
    borderRadius: 5,
  }),
  formTitlte: {
    marginLeft: 8,
    color: COLORS.NEUTRAL_GREY,
  },
  textError: {
    color: COLORS.PRIMARY_RED,
    fontSize: 12,
    fontFamily: FONTS.POPPINS_BOLD,
    marginBottom: 8,
  },
});

export default Form;
