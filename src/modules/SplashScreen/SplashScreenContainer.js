import { View, Text } from 'react-native'
import React from 'react'
import SplashScreenComponent from './SplashScreenComponent'

const SplashScreenContainer = (props) => {
  React.useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('signIn')
    }, 3000);
  }, [])
  return (
    <SplashScreenComponent {...props}/>
  )
}

export default SplashScreenContainer