import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import Books from "../screens/Books";
import {styles} from "./styles";

const Stack = createStackNavigator()
const BooksStack = ()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Libros" component={Books}
        options={
          {
            title:'Libros title',
            headerStyle: styles.header,
            headerTitleStyle: styles.title
          }
        }
      />
    </Stack.Navigator>
  )
}

export default BooksStack