import React from "react";
import { ActivityIndicator, View, StyleSheet, Image} from "react-native";
import {Overlay} from 'react-native-elements'
import {palette} from "../../styles/theme";

const styles = StyleSheet.create({
  overlay: {
    height: '100%',
    width: '100%',

    borderColor: palette.primary.main,
    borderWidth: 2,
  },
  view:{
   // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: palette.primary.main,
    borderWidth: 2,
    width: 200,
    height: 200,
    borderRadius: 200,
    overflow: 'hidden'
  },
  image:{
    height: 300,
    width: 300,
    position: 'relative'
  },
})
const Loading = ({isVisible, text})=>{



  return(
    <Overlay isVisible={isVisible} style={styles.overlay}>
      <View style={styles.view}>
        <Image
          style={styles.image}
          source={require("../../assets/library/loading.gif")}
          resizeMode="contain"
        />
      </View>
    </Overlay>
  )
}

export default Loading