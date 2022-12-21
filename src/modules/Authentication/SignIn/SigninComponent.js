import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {COLORS} from '../../../config/styles/Colors';
import {Formik, useFormik} from 'formik';
import * as Yup from 'yup';

const SigninComponent = (props) => {
  const {navigation} = props;
  const SignInSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, 'username minimal 3 character')
      .required('Harus diisi !'),
    password: Yup.string()
      .min(8)
      .required('password minimal 8 character')
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        'Must contain minimum 8 characters, at least one uppercase letter, one number and one special character  ',
      ),
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Futsal Kigs</Text>
      <Text style={styles.subtitle}>Ayo Main Bareng !</Text>
      <Formik
        initialValues={{username: '', password: ''}}
        validationSchema={SignInSchema}
        onSubmit={values => console.log(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <View style={styles.formContainer}>
              <View style={styles.form}>
                <TextInput
                  style={styles.inputStyle}
                  placeholder="username"
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                />
                {errors.username && (
                  <Text style={styles.errorText}>{errors.username}</Text>
                )}
              </View>
              <View style={{marginBottom: 15}}>
                <TextInput
                  style={styles.inputStyle}
                  placeholder="password"
                  onBlur={handleBlur('password')}
                  value={values.password}
                  onChangeText={handleChange('password')}
                />
                {errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}
              </View>
            </View>
            <View style={styles.btnContainer}>
              <TouchableOpacity
                onPress={handleSubmit}
                disabled={!isValid}
                style={styles.btn(isValid)}>
                <Text style={styles.txtBtn(isValid)}>Masuk</Text>
              </TouchableOpacity>
              <View style={{marginTop: 20}}>
                <TouchableOpacity onPress={() => navigation.navigate('signUp') }>
                  <Text style={styles.txtBtn(false)}>Daftar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default SigninComponent;
