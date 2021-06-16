import React, { useState } from 'react';
import validator from 'validator/es'
import firebase from 'firebase'
import { Image, ImageBackground, ScrollView, Text, View } from 'react-native';
import { Button, Divider, Icon, Input } from 'react-native-elements'
import {styles} from './styles'
import ButtonGradient from '../../ui/ButtonGradient'
import { palette } from '../../../styles/theme'
import { useNavigation } from '@react-navigation/native'
import Loading from '../../components/Loading'
import Toast from '../../ui/Toast'

const Register = () => {
  const [formData, setFormData] = useState({})
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showRepeatPassword, setShowRepeatPassword] = useState(false)
  const navigation = useNavigation()
  const validateData = ()=>{
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
    if(!formData.repeatPassword || formData.repeatPassword === ''){
      setErrorMessage('repeatPassword is Required')
      return false
    }
    if(formData.repeatPassword !== formData.password){
      setErrorMessage('Passwords do not match')
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
        .createUserWithEmailAndPassword(email, password)
        .then(response=>{
          console.log(response)
          setLoading(false)
          navigation.navigate("Account")
        })
        .catch(error=>{
          setLoading(false)
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
  return (
    <ScrollView >
       <Loading isVisible={loading}/>
      <ImageBackground source={require("../../../assets/bg.png")} style={styles.ImageBackground}>
        <Image
          style={styles.logo}
          source={require("../../../assets/library/logo1.png")}
          resizeMode="contain"
        />
        <View style={styles.viewContainer}>


          <Input
            placeholder='Email'
            onChangeText={(value)=>setData('email', value)}
            leftIcon={
              <Icon
                type="material-community"
                name="account-outline"
                size={22}
                color={palette.primary.main}
              />
            }
          />


          <Input
            placeholder="Password"
            onChangeText={(value)=>setData('password', value)}
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
                onPress={()=>{
                  setShowPassword(!showPassword)
                }}
                type="material-community"
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                size={22}
                color={palette.primary.main}
              />
            }


          />

          <Input
            onChangeText={(value)=>setData('repeatPassword', value)}
            placeholder="Repeat Password"
            leftIcon={
              <Icon
                type="material-community"
                name="lock-outline"
                size={22}
                color={palette.primary.main}
              />
            }

            secureTextEntry={!showRepeatPassword}
            rightIcon={
              <Icon
                onPress={()=>{
                  setShowRepeatPassword(!showRepeatPassword)
                }}
                type="material-community"
                name={showRepeatPassword ? "eye-off-outline" : "eye-outline"}
                size={22}
                color={palette.primary.main}
              />
            }
          />
          <Toast open={!!errorMessage} message={errorMessage}/>
          <ButtonGradient
            title="Unirse"
            onPress={()=>{sendData()}}
          />


        </View>
      </ImageBackground>

    </ScrollView>
  );
};

export default Register;





