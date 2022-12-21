import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../../config/styles/Colors";
import { FONTS } from "../../../config/styles/Fonts";
const {width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingHorizontal: 24,
      backgroundColor: '#FFFFFF'
    },
    title: {
        marginTop: width * 0.4,
        fontSize: 22,
        fontWeight: "bold",
        color: COLORS.PRIMARY
    },
    subtitle: {
        marginTop: 5,
        fontSize: 16,
        color: COLORS.PRIMARY
    },
    formContainer: {
      width: '80%',
      marginTop: 35
    },
    form: {
      marginVertical: 15
    },
    inputStyle: {borderWidth: 1, borderRadius: 10, padding: 10},
    btnContainer: {
      width: width * 0.7,
      marginTop: 10
    },
    btn: (isValid) =>  ({
      backgroundColor: !isValid ? 'white' : COLORS.PRIMARY_BLUE,
      paddingVertical: 15,
      borderWidth: !isValid ? 1 : 0,
      borderColor: COLORS.NEUTRAL_LIGHT,
      borderRadius: 5,
      alignItems: 'center'
    }),
    txtBtn:(isValid) => ( {
      fontSize: 14,
      color: !isValid ? COLORS.NEUTRAL_GREY : 'white',
      fontFamily: FONTS.POPPINS_BOLD,
      textAlign: 'center'
    }),
    errorText: {
      color: COLORS.PRIMARY_RED,
      fontSize: 12
    }
    
  });
  