import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../../config/styles/colors";
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
      width: width * 0.5,
      marginTop: 10
    },
    btn: (isValid) =>  ({
      backgroundColor: !isValid ? 'white' : COLORS.PRIMARY,
      paddingVertical: 10,
      borderWidth: !isValid ? 1 : 0,
      borderColor: COLORS.PRIMARY,
      borderRadius: 10,
      alignItems: 'center'
    }),
    txtBtn:(isValid) => ( {
      fontSize: 14,
      color: !isValid ? COLORS.PRIMARY : 'white',
      fontWeight: 'bold',
      textAlign: 'center'
    }),
    errorText: {
      color: COLORS.ERROR,
      fontSize: 12
    }
    
  });
  