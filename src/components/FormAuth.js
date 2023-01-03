import {View, Text} from 'react-native';
import React from 'react';
import Form from './smallComponent/Form';
import {COLORS} from '../config/styles/Colors';
import Button from './smallComponent/Button';

const FormAuth = ({type, navigation}) => {
  // form state
  const [fullName, onChangeFullName] = React.useState(null);
  const [email, onChangeEmail] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);
  const [confPassword, onChangeConfPass] = React.useState(null);


  // border color error 
  const [nameErr, setNameErr] = React.useState(false);
  const [emailErr, setEmailErr] = React.useState(false);
  const [passErr, setPassErr] = React.useState(false);
  const [confPasErr, setConfPassErr] = React.useState(false);

  const defEmail = 'bangwijay11@gmail.com';
  const defPassword = 'ronyAryaWijaya11';

  const signIn = () => {
    if (email !== defEmail) {
      setEmailErr(true);
    } else if (email === defEmail) {
      setEmailErr(false);
    }

    if (password !== defPassword) {
      setPassErr(true);
    } else if (password === defPassword) {
      setPassErr(false);
    }

    if(email === defEmail && password === defPassword){
      navigation.navigate('dashboard')
    }
  };

  return (
    <View>
    {type === 'SignIn' && (
      <>
      <Form
        iconName="email-outline"
        title="Your Email"
        typeIcon="MaterialCommunityIcons"
        value={email}
        keyboardType="email-address"
        onChangeValue={onChangeEmail}
        isErrorValue={emailErr}
        errMsg={emailErr === false ? '' : 'Oops! Your Email Is Not Correct '}
      />
      <Form
        iconName="lock"
        title="Password"
        typeIcon="SimpleLineIcons"
        value={password}
        secureTextEntry={true}
        onChangeValue={onChangePassword}
        isErrorValue={passErr}
        errMsg={passErr === false ? '' : 'Oops! Your Password Is Not Correct '}
      />
      <Button title="Sign In" onPress={() => signIn()} />
      </>
    )}
    {type === 'SignUp' && (
      <>
      <Form
        iconName="user"
        title="Full Name"
        typeIcon="Feather"
        value={fullName}
        onChangeValue={onChangeFullName}
      />
       <Form
        iconName="email-outline"
        title="Your Email"
        typeIcon="MaterialCommunityIcons"
        value={email}
        keyboardType="email-address"
        onChangeValue={onChangeEmail}
      />
      <Form
        iconName="lock"
        title="Password"
        typeIcon="SimpleLineIcons"
        value={password}
        secureTextEntry={true}
        onChangeValue={onChangePassword}
      />
      <Form
        iconName="lock"
        title="Password Again"
        typeIcon="SimpleLineIcons"
        value={confPassword}
        secureTextEntry={true}
        onChangeValue={onChangeConfPass}
      />
       <Button title="Sign Up" onPress={() => signIn()} />
      </>
    )}
    </View>
  );
};

export default FormAuth;
