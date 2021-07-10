import React from 'react'
import { StyleSheet, Button, View, TouchableOpacity } from 'react-native'
import { Center } from '../components/styles'

function Overview() {
 
  return (
      <Center>
    <View  style={styles.container}>
 <TouchableOpacity onPress={() => {alert('You tapped the card!')}}>
     <View style={styles.card}></View>
</TouchableOpacity>
<TouchableOpacity onPress={() => {alert('You tapped the card!')}}>
     <View style={styles.card}></View>
</TouchableOpacity>
<TouchableOpacity onPress={() => {alert('You tapped the card!')}}>
     <View style={styles.card}></View>
</TouchableOpacity>
<TouchableOpacity onPress={() => {alert('You tapped the card!')}}>
     <View style={styles.card}></View>
</TouchableOpacity>
<TouchableOpacity onPress={() => {alert('You tapped the card!')}}>
     <View style={styles.card}></View>
</TouchableOpacity>
    </View>
    </Center>
  )
}

const styles = StyleSheet.create({
  container: {
    height:720,
    width:380,
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems:'center',
    justifyContent:'space-around',
    position:'absolute',
    padding:20,
    top:55,
  },
  card:{
      backgroundColor:'blue',
      height:50,
      width:50,
      borderRadius:10,

  },


})

export default Overview
