import React from 'react'
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native'
import {useNavigation}from '@react-navigation/native'
import {Button} from "react-native-elements";
import {palette} from "../../../styles/theme";

const styles = StyleSheet.create({
  viewBody:{
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor:'#fff'
  },
  image:{
    height: 300,
    width: "100%",
    marginBottom: 40
  },
  title:{
    fontSize: 25,
    fontWeight: 'bold',
    textAlign:'center',
    color: '#000'
  },
  text:{
    fontSize: 19,
    textAlign:'center',
    color: palette.secondary.dark,
    marginBottom: 25,
    marginTop: 25,
  },
  btnStyle:{
  },
  titleStyle:{
    color: palette.primary.main,
    fontWeight: 'bold'
  },
  btnContainer:{
    textAlign:'center'
  }
})

const UserGuest = ()=>{
  const navigation = useNavigation()
  return(
    <ScrollView centerContent={true} style={styles.viewBody}>
      <Image
        style={styles.image}
        source={require("../../../assets/library/woman-reader.jpg")}
        resizeMode="contain"
      />
      <Text style={styles.title}>Create un perfil en</Text>
      <Text style={styles.title}>"I love Books"</Text>
      <Text style={styles.text}>
        Cuales son tus libros favoritos? Encuentra los mejores
        libros  de una forma sencilla, vota por los que te han gustado más
        y comenta cual ha sido tu impresión sobre la lectura.
      </Text>
      <View style={styles.btnContainer}>
        <Button
          title="Registrate"
          onPress={()=>{
            return(
              navigation.navigate("Login")
            )
          }}
        />
      </View>
    </ScrollView>
  )
}


export default UserGuest