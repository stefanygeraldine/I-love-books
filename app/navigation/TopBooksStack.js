import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import TopBooks from "../screens/TopBooks";

const Stack = createStackNavigator()
const TopBooksStack = ()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="Best Sellers" component={TopBooks} options={{title:'Best Sellers'}}/>
    </Stack.Navigator>
  )
}

export default TopBooksStack