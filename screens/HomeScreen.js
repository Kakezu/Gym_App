import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import colors from '../assets/colors/colors'
import { SimpleLineIcons } from '@expo/vector-icons';
import { getAuth } from 'firebase/auth';

export default function HomeScreen({ navigation }) {

  const handleSignOut = () => {
    getAuth()
    .signOut()
    .then(() => {
      navigation.navigate("LoginScreen")
    })
  }
  return (
    <View style={styles.container}>
        <View style={styles.topBarWrapper}>
          <Pressable onPress={handleSignOut}>
          <SimpleLineIcons name="logout" size={32} color="white" style={styles.logoutIcon}/>
          </Pressable>
          <Text style={styles.logoText}>FitZone</Text>
        </View>
        <View style={styles.HomeImage}>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBarWrapper: {
    flex: 0.13,
    flexDirection: "row",
    backgroundColor: colors.darkBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: "white",
    fontSize: 40,
    marginHorizontal: 120,
    marginTop: 20

  },
  logoutIcon: {
    marginTop: 20
  },
  HomeImage: {

  },
})
