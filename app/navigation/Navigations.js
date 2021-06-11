import React from 'react'
import {StyleSheet} from 'react-native'
import { NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Icon} from 'react-native-elements'
import BooksStack from "./BooksStack";
import FavoriteStack from "./FavoriteStack";
import TopBooksStack from "./TopBooksStack";
import SearchStack from "./SearchStack";
import AccountStack from "./AccountStack";
import {palette} from "../../styles/theme";

const styles = StyleSheet.create({
  top: {
    backgroundColor: palette.tertiary.main,
    position: 'absolute'
  }
})

const Tab = createBottomTabNavigator()


const Navigation = ()=>{
  return(
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Library"
        tabBarOptions={{
          /*
          style: {},
          tabStyle: {},
          */
          style: {
           // backgroundColor: palette.primary.light
          },


          inactiveTintColor: palette.secondary.main,
          activeTintColor: palette.primary.main
        }}
        screenOptions={({route})=>{
          return(
            {
              tabBarIcon: ({color}) =>{
                return screenOptions(route, color)
              }
            }
          )
        }}
      >
        <Tab.Screen style={styles.tab} name="Libros" component={BooksStack} options={{title:'Libros'}}/>

        <Tab.Screen name="Favorites" component={FavoriteStack} options={{title:'Favoritos'}}/>
        <Tab.Screen name="TopRestaurants" component={TopBooksStack} options={{title:'Top 5'}}/>


        <Tab.Screen name="Search" component={SearchStack} options={{title:'Buscar'}}/>

        <Tab.Screen name="Account" component={AccountStack} options={{title:'Cuenta'}}/>

      </Tab.Navigator>
    </NavigationContainer>
  )
}

function screenOptions (route, color){
  let iconName
  switch (route.name){
    case "Libros":
      iconName = "book-open-variant";
      break;
    case "Favorites":
      iconName = "heart-outline";
      break;
    case "TopRestaurants":
      iconName = "octagram-outline";
      break;
    case "Search":
      iconName = "magnify";
      break;
    case "Account":
      iconName = "account-outline";
      break;
    default:
      break;
  }

  return <Icon type="material-community" name={iconName} size={22} color={color}/>
}
export default Navigation