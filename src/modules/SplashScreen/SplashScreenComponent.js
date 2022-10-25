import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'

const SplashScreenComponent = () => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems:'center', backgroundColor: '#ffffff'}}>
      <Text style={{fontSize: 30, fontWeight: 'bold', color: '#20315f'}}>GAMEON</Text>
      <TouchableOpacity style={{backgroundColor: '#AD40AF', padding: 20, width: '90%', borderRadius: 5, flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontWeight: 'bold', fontSize: 18, color: '#FFFF'}}>Let's Begin</Text>
        <Text style={{fontWeight: 'bold', fontSize: 18, color: '#FFFF'}}>></Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default SplashScreenComponent