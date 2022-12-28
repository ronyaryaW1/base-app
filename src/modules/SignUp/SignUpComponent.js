import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Logo from '../../components/Logo';
import {COLORS} from '../../config/styles/Colors';
import {FONTS} from '../../config/styles/Fonts';
import FormAuth from '../../components/FormAuth';

const SignUpComponent = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Let’s Get Started</Text>
        <Text>Create an new account</Text>
      </View>
      <View style={styles.formContainer}>
        <FormAuth type="SignUp" />
      </View>
      <View style={styles.txtAccountContainer}>
        <Text style={styles.txtAccount}>Don’t have a account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('signIn')}>
          <Text style={styles.txtSignIn}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: COLORS.BACKGROUND_COLOR,
  },
  formContainer: {width: '100%', marginTop: 28},
  titleContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  title: {
    color: COLORS.NEUTRAL_DARK,
    fontFamily: FONTS.POPPINS_BOLD,
    fontSize: 16,
  },
  txtSignIn: {
    fontSize: 12,
    color: COLORS.PRIMARY_BLUE,
    fontFamily: FONTS.POPPINS_BOLD,
    marginLeft: 5,
  },
  txtAccountContainer: {
    flexDirection: 'row',
    marginTop: 28,
  },
});

export default SignUpComponent;
