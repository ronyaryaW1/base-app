import { View, Text } from 'react-native'
import React from 'react'
import SignUpComponent from './SignUpComponent'

const SignUpContainer = (props) => {
  return (
    <View>
     <SignUpComponent {...props}/>
    </View>
  )
}

export default SignUpContainer