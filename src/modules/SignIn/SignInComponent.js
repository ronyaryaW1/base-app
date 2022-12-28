import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import FB from '../../assets/images/fb.svg';
import Google from '../../assets/images/Google.svg';
import {windowWidth} from '../../utils/Dimensions';
import {COLORS} from '../../config/styles/Colors';
import {FONTS} from '../../config/styles/Fonts';
import FormAuth from '../../components/FormAuth';
import Button from '../../components/smallComponent/Button';
import Logo from '../../components/Logo';

const SignInComponent = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Logo/>
      <Text style={styles.welcomeText}>Welcome to Lafyuu</Text>
      <Text style={styles.subtitle}>Sign in to continue</Text>
      <View style={styles.formContainer}>
        {/* form */}
        <FormAuth type="SignIn" />
        {/* Login Options */}
        <View style={styles.strokeContainer}>
          <View style={styles.stroke} />
          <Text style={styles.txtOr}>OR</Text>
          <View style={styles.stroke} />
        </View>
        <Button
          type="outlinedWithIcon"
          IconButton={Google}
          width={windowWidth * 0.05}
          height={windowWidth * 0.05}
          title="Google"
        />
        <Button
          type="outlinedWithIcon"
          IconButton={FB}
          width={windowWidth * 0.05}
          height={windowWidth * 0.05}
          title="Facebook"
        />
        <View style={styles.subtitleRegister}>
          <TouchableOpacity>
            <Text style={styles.txtForgot}>Forgot Password?</Text>
          </TouchableOpacity>
          <View style={styles.txtAccountContainer}>
            <Text style={styles.txtAccount}>Don’t have a account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('signUp')} >
              <Text style={styles.txtRegister}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: COLORS.BACKGROUND_COLOR,
  },
  formContainer: {
    width: '100%',
    marginTop: 28,
  },
  subtitle: {
    color: COLORS.NEUTRAL_GREY,
    fontSize: 12,
    fontFamily: FONTS.POPPINS_REGULAR,
  },
  strokeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  subtitleRegister: {
    marginTop: 16,
    alignItems: 'center',
  },
  stroke: {
    width: '45%',
    borderWidth: 1,
    borderColor: COLORS.NEUTRAL_LIGHT,
  },
  txtAccount: {
    fontSize: 12,
    fontFamily: FONTS.POPPINS_REGULAR,
    color: COLORS.NEUTRAL_GREY,
  },
  txtAccountContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  txtForgot: {
    fontSize: 12,
    color: COLORS.PRIMARY_BLUE,
    fontFamily: FONTS.POPPINS_BOLD,
  },
  txtOr: {
    paddingHorizontal: 10,
    color: COLORS.NEUTRAL_GREY,
    fontSize: 14,
    fontFamily: FONTS.POPPINS_BOLD,
  },
  txtRegister: {
    fontSize: 12,
    color: COLORS.PRIMARY_BLUE,
    fontFamily: FONTS.POPPINS_BOLD,
    marginLeft: 5,
  },
  welcomeText: {
    color: COLORS.NEUTRAL_DARK,
    fontSize: 16,
    fontFamily: FONTS.POPPINS_BOLD,
    paddingTop: 16,
    paddingBottom: 8,
  },
});

export default SignInComponent;
