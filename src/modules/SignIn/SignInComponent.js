import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Logo from '../../assets/images/Blue.svg';
import FB from '../../assets/images/fb.svg';
import {windowWidth} from '../../utils/Dimensions';
import {COLORS} from '../../config/styles/Colors';
import {FONTS} from '../../config/styles/Fonts';
import FormAuth from '../../components/FormAuth';
import Button from '../../components/smallComponent/Button';

const SignInComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Logo
        style={{marginTop: windowWidth * 0.25}}
        width={windowWidth * 0.2}
        height={windowWidth * 0.2}
      />
      <Text style={styles.welcomeText}>Welcome to Lafyuu</Text>
      <Text style={styles.subtitle}>Sign in to continue</Text>
      {/* form */}
      <View style={styles.formContainer}>
        <FormAuth />
        <View style={styles.strokeContainer}>
          <View style={styles.stroke} />
          <Text style={styles.txtOr}>OR</Text>
          <View style={styles.stroke} />
        </View>
        <Button
          type="outlinedWithIcon"
          IconButton={FB}
          width={windowWidth * 0.05}
          height={windowWidth * 0.09}
          title="Facebook"
        />
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
    marginTop: 40,
  },
  stroke: {
    width: '45%',
    borderWidth: 1,
    borderColor: COLORS.NEUTRAL_LIGHT,
  },
  txtOr: {
    paddingHorizontal: 10,
    color: COLORS.NEUTRAL_GREY,
    fontSize: 14,
    fontFamily: FONTS.POPPINS_BOLD,
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
