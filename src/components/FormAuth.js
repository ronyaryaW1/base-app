import {View, Text} from 'react-native';
import React from 'react';
import Form from './smallComponent/Form';
import {COLORS} from '../config/styles/Colors';
import Button from './smallComponent/Button';

const FormAuth = () => {
  const [email, onChangeEmail] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);
  const [customEmailColor, setEmailCustomColor] = React.useState(
    COLORS.NEUTRAL_GREY,
  );
  const [customPassColor, setPassCustomColor] = React.useState(
    COLORS.NEUTRAL_GREY,
  );

  const [emailErr, setEmailErr] = React.useState(false);
  const [passErr, setPassErr] = React.useState(false);

  const defEmail = 'bangwijay11@gmail.com';
  const defPassword = 'ronyAryaWijaya11';

  React.useEffect(() => {
    if (email?.length > 0) {
      setEmailCustomColor(COLORS.PRIMARY_BLUE);
    } else {
      setEmailCustomColor(COLORS.NEUTRAL_GREY);
    }
    if (password?.length > 0) {
      setPassCustomColor(COLORS.PRIMARY_BLUE);
    } else {
      setPassCustomColor(COLORS.NEUTRAL_GREY);
    }
  }, [email, password]);

  const signIn = () => {
    if (email !== defEmail) {
      setEmailErr(true);
      setEmailCustomColor(COLORS.PRIMARY_RED);
    } else if (email === defEmail) {
      setEmailErr(false);
      setEmailCustomColor(COLORS.PRIMARY_BLUE);
    }

    if (password !== defPassword) {
      setPassErr(true);
      setPassCustomColor(COLORS.PRIMARY_RED);
    } else if (password === defPassword) {
      setPassErr(false);
      setPassCustomColor(COLORS.PRIMARY_BLUE);
    }
  };

  return (
    <View>
      <Form
        iconName="email-outline"
        title="Your Email"
        typeIcon="MaterialCommunityIcons"
        value={email}
        keyboardType="email-address"
        onChangeValue={onChangeEmail}
        customBorderColor={customEmailColor}
        customIconColor={customEmailColor}
        errMsg={emailErr === false ? '' : 'Oops! Your Email Is Not Correct '}
      />
      <Form
        iconName="lock"
        title="Password"
        typeIcon="SimpleLineIcons"
        value={password}
        secureTextEntry={true}
        onChangeValue={onChangePassword}
        customBorderColor={customPassColor}
        customIconColor={customPassColor}
        errMsg={passErr === false ? '' : 'Oops! Your Password Is Not Correct '}
      />
      <Button title="Sign In" onPress={() => signIn()} />
    </View>
  );
};

export default FormAuth;
