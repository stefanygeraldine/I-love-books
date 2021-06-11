import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import Favorites from "../screens/Favorites";
import {styles} from "./styles";

const Stack = createStackNavigator()
const FavoriteStack = ()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={Favorites}
        options={
          {
            title:'Restaurantes favoritos',
            headerStyle: styles.header,
            headerTitleStyle: styles.title
          }
        }
      />
</Stack.Navigator>
)
}

export default FavoriteStack