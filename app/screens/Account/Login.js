import React from 'react'
import { Image, ScrollView, Text, View, StyleSheet, ImageBackground } from 'react-native';
import {Icon} from 'react-native-elements'
import { Button, Divider, Input } from 'react-native-elements'
import { palette } from '../../../styles/theme'
import { useNavigation } from '@react-navigation/native'
import ButtonGradient from '../../ui/ButtonGradient'
import {styles} from './styles'


const CreateAccount = ()=>{
  const navigation = useNavigation()
  return(

  <View >
    <Text style={styles.registerText}>
      ¿Aún no tienes una cuenta?{" "}
    </Text>
    <Text
      style={styles.registerTextLink}
      onPress={()=>navigation.navigate("Register")}
    >
      Registrate
    </Text>

  </View>
  )
}
const Login = ()=>{
  const navigation = useNavigation()
  return(
    <ScrollView>
      <ImageBackground source={require("../../../assets/bg.png")} style={styles.ImageBackground}>
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


        <ButtonGradient
          title="Login"
          onPress={()=>navigation.navigate("Login")}
        />

        <CreateAccount/>
      </View>
      <Divider style={styles.divider}/>
      </ImageBackground>
    </ScrollView>
  )
}

export default Login