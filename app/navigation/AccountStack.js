import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import Account from "../screens/Account/Account";
import Login from '../screens/Account/Login'
import {styles} from "./styles";
import Register from '../screens/Account/Register'
const Stack = createStackNavigator()

const style = {
  headerStyle: styles.header,
  headerTitleStyle: styles.title
}
const AccountStack = ()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="Account" component={Account} options={{ ...style, title:'Account'}}/>
      <Stack.Screen name="Login" component={Login} options={{ ...style, title:'Login'}}/>
      <Stack.Screen name="Register" component={Register} options={{ ...style, title:'Login'}}/>
    </Stack.Navigator>
  )
}

export default AccountStack