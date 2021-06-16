import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Icon } from 'react-native-elements'

import { map } from "lodash";

const generateOptions = () =>{
  return [
    {
      iconName: "account",
      title: "Identificación",
      subtitle: "Cambiar Nombre y Apellidos"
    },
    {
      iconName: "email",
      title: "Email",
      subtitle: "Cambiar Email"
    },
    {
      iconName: "lock",
      title: "Contraseña",
      subtitle: "Cambiar Contraseña"
    }
  ]
}
const AccountOptions = (props) => {
  const { userInfo } = props;
  const menuOptions = generateOptions()
  return (
    <View>
      {
        map(menuOptions, (menu, index) => (
          <ListItem key={index} bottomDivider>
            <Icon type="material-community" name={menu.iconName} size={22} />
            <ListItem.Content>
              <ListItem.Title>{menu.title}</ListItem.Title>
              <ListItem.Subtitle>{menu.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))
      }
    </View>
  )
}

export default AccountOptions
