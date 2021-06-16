import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import firebase from 'firebase'
import ButtonGradient from '../../ui/ButtonGradient'
import InfoUser from '../../components/account/InfoUser'

const UserLogged = ()=>{
  const [userInfo, setUserInfo] = useState(null)
  useEffect(()=>{
    (async ()=>{
      const user = await firebase.auth().currentUser
      setUserInfo(user)
    })()
  }, [])
  return(
    <ScrollView>
      {userInfo &&
        <InfoUser user={userInfo}/>
      }

    </ScrollView>
  )
}

export default UserLogged