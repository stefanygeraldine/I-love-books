import React from 'react'
import {View, Text} from 'react-native'
import firebase from 'firebase'
import ButtonGradient from '../../ui/ButtonGradient'

const UserLogged = ()=>{
  return(
    <View>
      <ButtonGradient
        title="Sign Out"
        onPress={()=>{firebase.auth().signOut()}}
      />
      <Text>Sign Out</Text>
    </View>
  )
}

export default UserLogged