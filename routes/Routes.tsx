import React from 'react'
import { createStackNavigator} from  '@react-navigation/stack'
import { NavigationContainer } from  '@react-navigation/native'
import { AuthParamList} from '../components/AuthParamList'
import Welcome from './Welcome'
import Overview from './Overview'
import EmoPicker from './EmoPicker'
import Login from './Login'



const Stack = createStackNavigator <AuthParamList>()


export const Routes: React.FC<RoutesProps> =({}) =>{
        return (
            <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='Welcome' component={Welcome}/>
                <Stack.Screen name='Overview' component={Overview}/>
                <Stack.Screen options={{ headerTitle:"Pick One"}} name='EmoPicker' component={EmoPicker}/>
            </Stack.Navigator>
            </NavigationContainer>
        );
}