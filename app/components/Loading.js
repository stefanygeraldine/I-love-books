import React from "react";
import { ActivityIndicator, View, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import {Overlay} from 'react-native-elements'
import {palette} from "../../styles/theme";

const styles = StyleSheet.create({

  view:{
    display:'flex',
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0,
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    backgroundColor:'transparent'
  },
  image:{
    height: 100,
    width: 100,
    position: 'relative',
    backgroundColor:'transparent',
    zIndex: 4
  },
  ImageBackground:{
    padding: 0,
    width: '100%',
    height: '100%',
    position: 'absolute',
    top:0,
    opacity: 0.5,
  },
  overlay:{
    position: 'absolute',
    top:0,
    left:0,
    width: '100%',
    height: '100%',
    zIndex:2
  }
})
const Loading = ({isVisible, text})=>{



  return(
    isVisible ?
      <View style={styles.overlay}>
        <ImageBackground source={require("../../assets/bg.png")} style={styles.ImageBackground}/>
        <View style={styles.view}>
          <Image
            style={styles.image}
            source={require("../../assets/library/loading.gif")}
            resizeMode="contain"
          />
        </View>

      </View>
      : null
  )

}

export default Loading