import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Center } from '../components/styles'

function EmoPicker() {
 
  return (
    <Center>
     
        <Text style={styles.title}>What are you feeling</Text>
    
      <ScrollView style={styles.emoPicker}>
        <TouchableOpacity onPress={() => {alert('You tapped the button!')}}><Image style={styles.imgEmo} source={require('../assets/happy.png')} /></TouchableOpacity>
        <TouchableOpacity onPress={() => {alert('You tapped the button!')}}><Image style={styles.imgEmo} source={require('../assets/anxious.png')} /></TouchableOpacity>
        <TouchableOpacity onPress={() => {alert('You tapped the button!')}}><Image style={styles.imgEmo} source={require('../assets/angry.png')} /></TouchableOpacity>
        <TouchableOpacity onPress={() => {alert('You tapped the button!')}}><Image style={styles.imgEmo} source={require('../assets/sad.png')} /></TouchableOpacity>
      </ScrollView>
    </Center>
  )
}

const styles = StyleSheet.create({
  container: {
    height:720,
    display:'flex',
    alignItems:'center',
    justifyContent:'space-around',
    position:'absolute',
    top:55,

  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  emoPicker: {
    marginTop: 50,
  },
  imgEmo: {
    height: 250,
    width: 290,
    margin: 30,
  },
})

export default EmoPicker
