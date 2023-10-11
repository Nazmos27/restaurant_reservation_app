import React from 'react'
import { Text, View, Image, Button, TextInput, SafeAreaView, StyleSheet } from 'react-native'

const Onboarding = () => {
  return (
    <SafeAreaView style={styles.container} >
        <View style={{backgroundColor: "#DEE3E9", margin:40, height:80}} >
        <Image style={styles.header} source={require('../assets/littleLemonLogo.png')} resizeMode='contain'/>
        </View>
       
   
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
    },
    header:{
        width:300,
        height:60,
        
        
    },
    
})

export default Onboarding