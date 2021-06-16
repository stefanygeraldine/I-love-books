import React, { useState } from 'react';
import {Avatar} from 'react-native-elements'
import { ScrollView, StyleSheet, Text, View, Platform } from 'react-native';
import { palette } from '../../../styles/theme'
import firebase from 'firebase'
import * as ImagePicker from 'expo-image-picker'
import * as MediaLibrary from 'expo-media-library'
import Toast from '../../ui/Toast'
import Loading from '../Loading'
import ButtonGradient from '../../ui/ButtonGradient'
import AccountOptions from './AccountOptions'

export const styles = StyleSheet.create({
  container:{
    margin:40
  },
  viewInforUser:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    margin:40
  },
  avatar: {
    marginRight: 20,
    backgroundColor: palette.primary.main,
  },
  info: {
    fontWeight:'bold'
  }
})

const InfoUser = ({user}) => {
  const {photoURL, email, displayName, uid} = user
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });


    if (!result.cancelled) {

      uploadImage(result.uri)
    }else {
      setErrorMessage('cancelled')
      setTimeout(()=>{
        setErrorMessage(null)
      },3000)
    }
  };

  const uploadImage = async (uri)=>{
    setLoading(true)
    const response = await fetch(uri)
    const blob = await response.blob()
    const ref = firebase.storage().ref().child(`avatar/${uid}`)

    ref.put(blob)
      .then(()=>{
        updatePhotoUrl()
      })
      .catch(error=>{
        setLoading(false)
        setErrorMessage('Upload error')
        setTimeout(()=>{
          setErrorMessage(null)
        },3000)
      })
  }

  const changeAvatar = async ()=>{
    if (Platform.OS !== 'web') {
      const { status } = await MediaLibrary.requestPermissionsAsync()
      if(status !== 'granted'){
        setErrorMessage('Permissions denied')
      }else {
        setErrorMessage(null)
        await pickImage()
      }
    }
  }

  const updatePhotoUrl =  ()=>{

    firebase
      .storage()
      .ref(`avatar/${uid}`)
      .getDownloadURL()
      .then(async(response)=>{
        const update = {
          photoURL: response
        }
        await  firebase.auth().currentUser.updateProfile(update)
        setLoading(false)
        setErrorMessage('Upload success')
        setTimeout(()=>{
          setErrorMessage(null)
        },3000)
      })
      .catch(()=>{
        setLoading(false)
      })
  }



  return (
    <ScrollView>
      <Loading isVisible={loading}/>
      <View style={styles.viewInforUser}>
        <Avatar
          rounded
          size="large"
          showEditButton={true}
          containerStyle={styles.avatar}
          source={
            photoURL
              ? { uri: photoURL }
              : require('../../../assets/library/userDeafult.png')

          }
        >
          <Avatar.Accessory
            onPress={changeAvatar}
            name="pencil-alt"
            type="font-awesome-5"
            size={16}
          />
        </Avatar>
        <View style={styles.info}>
          <Text>{displayName ? displayName : 'Anonymous'}</Text>
          <Text>{email ? email : 'Social Login'}</Text>
        </View>

      </View>
      <Toast open={!!errorMessage} message={errorMessage}/>
      <AccountOptions/>
      <View style={styles.container}>
        <ButtonGradient
          title="Sign Out"
          onPress={()=>{firebase.auth().signOut()}}
        />
      </View>

    </ScrollView>
  );
};

export default InfoUser;
