import React from 'react'
import { Image, ScrollView, Text, View, StyleSheet } from 'react-native';
import {Icon} from 'react-native-elements'
import { Button, Divider, Input } from 'react-native-elements'
import { palette } from '../../../styles/theme'

const styles  = StyleSheet.create({
  logo:{
    width: "100%",
    height:150,
    marginTop: 20
  },
  divider:{
    backgroundColor: palette.primary.light,
    margin: 40
  },
  viewContainer:{
    margin: 40
  },
  registerText:{
    textAlign: 'center',
    margin: '40px 0'
  }
})
const CreateAccount = ()=>{
  return(

  <View style={styles.registerText}>
    <Text>
      ¿Aún no tienes una cuenta?{" "}
    </Text>
    <Text>
      Registrate
    </Text>

  </View>
  )
}
const Login = ()=>{
  return(
    <ScrollView>
      <Image
      source={require("../../../assets/library/logo1.png")}
      resizeMode="contain"
      style={styles.logo}
      />
      <View style={styles.viewContainer}>


        <Input
          placeholder='Email'
          leftIcon={
            <Icon
              type="material-community"
              name="account-outline"
              size={22}

            />
          }
        />


        <Input
          placeholder="Password"
          leftIcon={
            <Icon
              type="material-community"
              name="lock-outline"
              size={22}

            />
          }
          style={styles}
          onChangeText={value => this.setState({ comment: value })}
        />


        <Button
          title="Login"
          onPress={()=>{
            return(
              navigation.navigate("Login")
            )
          }}
        />

        <CreateAccount/>
      </View>
      <Divider style={styles.divider}/>
    </ScrollView>
  )
}

export default Login