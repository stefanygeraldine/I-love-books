import React, { useState } from 'react'
import { Image, ScrollView, Text, View, StyleSheet, ImageBackground } from 'react-native';
import {Icon} from 'react-native-elements'
import { Button, Divider, Input } from 'react-native-elements'
import { palette } from '../../../styles/theme'
import { useNavigation } from '@react-navigation/native'
import ButtonGradient from '../../ui/ButtonGradient'
import {styles} from './styles'
import validator from 'validator/es'
import firebase from 'firebase'
import Loading from '../../components/Loading'
import Toast from '../../ui/Toast'


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
  const [formData, setFormData] = useState({})
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const validateData = ()=>{
    console.log(formData)
    if(!formData.email || formData.email === ''){
      setErrorMessage('Email is Required')
      return false
    }
    if(!validator.isEmail(formData.email)){
      setErrorMessage('Incorrect format')
      return false
    }
    if(!formData.password || formData.password === ''){
      setErrorMessage('password is Required')
      return false
    }

    setErrorMessage(null)
    return true
  }
  const sendData= ()=>{
    const isValidData = validateData()
    const {email, password} = formData

    if(isValidData){
      setLoading(true)
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(response=>{
          setLoading(false)
          navigation.navigate("Account")
        })
        .catch(error=>{
          setLoading(false)
          setErrorMessage('Invalid password or email')
          console.log(error)
        })
    }
  }
  const setData = (field, value)=>{
    setErrorMessage(null)
    setFormData((oldValues)=>{
      return(
        {
          ...oldValues,
          [field]:value
        }
      )
    })
  }
  return(
    <ScrollView>
      <Loading isVisible={loading}/>
      <ImageBackground source={require("../../../assets/bg.png")} style={styles.ImageBackground}>
        <Image
          source={require("../../../assets/library/logo1.png")}
          resizeMode="contain"
          style={styles.logo}
        />
        <View style={styles.viewContainer}>


          <Input
            placeholder='Email'
            onChangeText={(value) => setData('email', value)}
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
            onChangeText={(value) => setData('password', value)}
            leftIcon={
              <Icon
                type="material-community"
                name="lock-outline"
                size={22}
                color={palette.primary.main}
              />
            }
            secureTextEntry={!showPassword}
            rightIcon={
              <Icon
                onPress={() => {
                  setShowPassword(!showPassword)
                }}
                type="material-community"
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                size={22}
                color={palette.primary.main}
              />
            }
          />
          <Toast open={!!errorMessage} message={errorMessage}/>
          <ButtonGradient
            title="Login"
            onPress={() => sendData()}
          />

          <CreateAccount/>
        </View>
        <Divider style={styles.divider}/>
      </ImageBackground>
    </ScrollView>
  )
}

export default Login