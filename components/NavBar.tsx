import React from 'react'
import { StyleSheet, View, Button, TouchableOpacity } from 'react-native'

function NavBar() {
  return (
    <View style={styles.container}>
 <TouchableOpacity >
     <Button onPress={() => {alert('You tapped the button!')}} title='Home'/>
</TouchableOpacity>
<TouchableOpacity >
     <Button onPress={() => {alert('You tapped the button!')}} title='Overview'/>
</TouchableOpacity>
<TouchableOpacity >
     <Button onPress={() => {alert('You tapped the button!')}} title='Login'/>
</TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 400,
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 0,
    left: 0,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly',
  },
  text:{
      color:'white',
  },
})

export default NavBar
