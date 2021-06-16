import React from 'react';

import { Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable'

import { StyleSheet } from 'react-native'
import { palette } from '../../styles/theme'


export const styles = StyleSheet.create({
  error:{
    fontSize:17,
    margin: 10,
    textAlign:'center',
    padding: 10,
    borderRadius:4,
    backgroundColor: palette.common.error,
    color: '#fff',
    fontWeight:'bold'
  },
  warning:{

  },
  success:{

  }
})


const Toast = ({status, message, open, animation, iterationCount, direction}) => {
  return (
    <View>
      {open &&
      <Animatable.View animation={animation} iterationCount={iterationCount} direction={direction}>
        <Text style={styles[status]}>{message}</Text>
      </Animatable.View>
      }
    </View>
  );
};

Toast.defaultProps = {
  status: 'error',
  animation: 'bounceInLeft',
  iterationCount: 1,
  direction: 'alternate'
}

export default Toast;
