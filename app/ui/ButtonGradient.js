import React from 'react'
import {TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  absoluteView: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    zIndex: 2,
    display: 'flex',
    width: '100%',
    height: '100%',
    textAlign:'center',
    marginTop:10,
    fontSize:20,
    fontWeight:'bold',
    color:'#FFF'
  },
  img: {
    width:'100%',
    height:50,
    borderRadius: 25,
  },
  btn: {
    width:'100%',
    height:50,
    marginTop:20,
    marginBottom:20,
  }
});

const ButtonGradient = ({title, onPress}) =>
  <TouchableOpacity style={styles.btn} onPress={()=>{
    onPress && onPress()
  }}>
    <Text style={styles.absoluteView}>{title}</Text>
    <Image source={require('../../assets/colorFullgradient.png')}  style={styles.img}/>
  </TouchableOpacity>;



export default ButtonGradient