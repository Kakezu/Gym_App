import React from 'react'
import { Pressable, StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import colors from '../assets/colors/colors'
import { SimpleLineIcons } from '@expo/vector-icons';
import { getAuth } from 'firebase/auth';
import homeImage from "../assets/images/home_image.png"
import instructedClassesPhoto from "../assets/images/instructedclasses_photo.png"
import InstructedClasses from './InstructedClasses';



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

        <ScrollView>
          <View style={styles.HomeImage}>
            <Image source={homeImage} style={{width: "100%", height: 260}}/>
          </View>
            <Text style={styles.instructedClassesText}>
              New instructed classes
            </Text>

          <View style={styles.instructedClassesWrapper}>
            <Image source={instructedClassesPhoto} style={{width: "100%", height: 140}}/>
            <Text style={styles.instructedClassesInsideText}>Check out our diverse selection of instructed classes!</Text>
            <Pressable onPress={() => navigation.navigate("InstructedClasses")} style={styles.button}>
              <Text style={{color: "white"}}>BOOK A CLASS</Text>
            </Pressable>
          </View>
          
          <Pressable onPress={() => navigation.navigate("AboutUs")}style={[styles.button, styles.buttonDark]}>
            <Text style={{color: "white"}}>CONTACT INFO</Text>
          </Pressable>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBarWrapper: {
    flex: 8,
    flexDirection: "row",
    backgroundColor: colors.darkBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: "white",
    fontSize: 40,
    marginRight: 122,
    marginLeft: 89,
    marginTop: 26

  },
  logoutIcon: {
    marginTop: 25
  },
  HomeImage: {
    alignItems: 'center'
  },
  instructedClassesWrapper: {
    alignSelf: 'center',
    borderColor: colors.lightGray,
    borderWidth: 2,
    borderRadius: 5,
    width: "94%",
    height: "38%"
  },
  instructedClassesText: {
    color: colors.lightBlue,
    fontSize: 24,
    marginTop: 50,
    marginLeft: 15,
    
  },
  button: {
    backgroundColor: colors.lightBlue,
    width: "70%",
    paddingVertical: 15,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: "center",
    marginTop: 20
  },
  buttonDark: {
    backgroundColor: colors.darkBlue,
    marginTop: 80
  },
  instructedClassesInsideText: {
    fontSize: 16,
    marginHorizontal: 20,
    marginTop: 20,
    color: "#92949C"
  }
})
