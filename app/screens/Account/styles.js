import { StyleSheet } from 'react-native'
import { palette } from '../../../styles/theme'


export const styles = StyleSheet.create({

  ImageBackground:{
    padding: 0,
    width: '100%',
    height: 800
  },
  image:{
    height: 190,
    width: "100%",
    marginTop: 20,
    marginBottom: 30
  },
  image2:{
    height: 255,
    width: "100%",
    marginBottom: 0,
    marginTop: 30,
  },
  title:{
    fontSize: 20,
    textAlign:'center',
    color: '#000'
  },
  text:{
    fontSize: 17,
    textAlign:'center',
    color: palette.secondary.dark,
    marginBottom: 0,
    marginTop: 0,
  },
  btnStyle:{
  },
  titleStyle:{
    color: palette.primary.main,
    fontWeight: 'bold'
  },
  btnContainer:{
    textAlign:'center'
  },
  container:{
    paddingTop: 40,
    paddingBottom: 60,
    paddingLeft: 30,
    paddingRight: 30,
    height: '100%'
  },
  logo:{
    width: "100%",
    height:190,
    marginTop: 20
  },
  divider:{
    backgroundColor: palette.primary.light,
    margin: 40
  },
  viewContainer:{
    margin: 40
  },
  registerText:{
    color:'#000',
    textAlign: 'center',
    marginTop: 20
  },
  registerTextLink:{
    textAlign:'center',
    fontSize:17,
    margin: 0,
    color: palette.primary.main,
    fontWeight:'bold'
  }
})
