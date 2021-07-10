import { StackNavigationProp } from  '@react-navigation/stack'
import { RouteProp } from  '@react-navigation/native'
export type AuthParamList = {
  Login: undefined
  Welcome: undefined
  Overview: undefined
  EmoPicker: undefined
}
export type AuthNavProps<T extends keyof AuthParamList > = {
  navigation: StackNavigationProp<AuthParamList, T>
  route: RouteProp<AuthParamList, T>
}
