import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

//import {StyleSheet} from 'react-native'
import {palette} from "../../styles/theme";

const styles = StyleSheet.create({
  tab: {
    backgroundColor: palette.secondary.light,
  }
})

const Books = ()=>{
  return(
    <View style={styles.tab}>
      <Text>Libros</Text>
    </View>
  )
}

export default Books