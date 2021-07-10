import React from 'react'
import { TouchableOpacity, Button  } from 'react-native'
import { AuthNavProps } from '../components/AuthParamList'
import { Center  } from '../components/styles'


function Welcome({navigation}: AuthNavProps<'Welcome'>
) {
 
  return (
    <Center>
 <TouchableOpacity >
     <Button onPress={()=>{navigation.navigate('Overview')}} title='to picker'/>
</TouchableOpacity>
    </Center>
  )
}



export default Welcome
