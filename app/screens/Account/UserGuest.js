import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet, ImageBackground } from 'react-native'
import {useNavigation}from '@react-navigation/native'
import ButtonGradient from '../../ui/ButtonGradient'
import {styles} from './styles'
import Loading from '../../components/Loading'


const UserGuest = ()=>{
  const navigation = useNavigation()
  /*return <Loading/>*/
  return(

    <ScrollView centerContent={true} >

      <ImageBackground source={require("../../../assets/bg.png")} style={styles.ImageBackground}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require("../../../assets/library/logo1.png")}
            resizeMode="contain"
          />

          <Text style={styles.title}>Create un perfil en</Text>
          <Text style={styles.registerTextLink}>"I love Books"</Text>

          <Image
            style={styles.image2}
            source={require("../../../assets/library/illustration4.png")}
            resizeMode="contain"
          />
          <View style={styles.btnContainer}>
            <ButtonGradient title="Acceder" onPress={()=>navigation.navigate("Login")}/>
          </View>

        </View>
      </ImageBackground>
    </ScrollView>

  )
}


export default UserGuest