import React from 'react'
import {AuthNavProps} from '../components/AuthParamList'
import { Center, InputField,SecondInput, LoginField, LoginTitle,NavButton } from '../components/styles'
import { Button } from 'react-native'

function Login ({navigation, route}: AuthNavProps<'Login'>
) {
return(
    <Center>
        <LoginField>
     <LoginTitle> {route.name}</LoginTitle>
     <InputField/>
     <SecondInput/>
     <NavButton><Button title="Submit" onPress={()=>{navigation.navigate('Welcome')}}></Button></NavButton>
     </LoginField>
    </Center>
)
}

export default Login