import {View, Text, StyleSheet, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icons from '../Icons';
import {COLORS} from '../../config/styles/Colors';
import {FONTS} from '../../config/styles/Fonts';

const Form = props => {
  const {
    title, // placeholder
    iconName, // icon name
    typeIcon, // icon type
    value, // value 
    onChangeValue, // onchnage value
    customIconColor, // color for icon
    keyboardType,
    isErrorValue = false, // triger value dosn't match
    errMsg = '', // error message if value dosn't match
    secureTextEntry,
  } = props;

  const [borderColor, setBorderColor] = useState(COLORS.NEUTRAL_GREY)

  useEffect(() => {
    if(isErrorValue === true){
      setBorderColor(COLORS.PRIMARY_RED)
    }else if(value?.length > 0){
      setBorderColor(COLORS.PRIMARY_BLUE)
    }else{
      setBorderColor(COLORS.NEUTRAL_GREY)
    }
  }, [value, isErrorValue])
  
  return (
    <View>
      <View style={styles.form(borderColor)}>
        <Icons
          name={iconName}
          type={typeIcon}
          color={borderColor || COLORS.NEUTRAL_GREY}
          size={25}
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
  form: borderColor => ({
    width: '100%',
    borderWidth: 1,
    borderColor: borderColor,
    alignItems: 'center',
    paddingHorizontal: 18,
    flexDirection: 'row',
    marginBottom: 8,
    borderRadius: 5,
  }),
  formTitlte: {
    marginLeft: 8,
    color: COLORS.NEUTRAL_GREY,
    paddingVertical: 15,
    width: '100%'
  },
  textError: {
    color: COLORS.PRIMARY_RED,
    fontSize: 12,
    fontFamily: FONTS.POPPINS_BOLD,
    marginBottom: 8,
  },
});

export default Form;
