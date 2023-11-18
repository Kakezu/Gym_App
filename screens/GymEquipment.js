import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import colors from '../assets/colors/colors'
import treadmills from "../assets/images/treadmills.png"
import stairsteppers from "../assets/images/stairsteppers.png"
import exercisebikes from "../assets/images/exercisebikes.png"
import dumbbells from "../assets/images/dumbbells.png"
import barbells from "../assets/images/barbells.png"

export default function GymEquipment() {
  return (
    <>
    <View style={styles.topBarWrapper}>
        <Text style={styles.logoText}>FitZone</Text>
      </View>
    <ScrollView style={styles.container}>

      <View style={styles.gymEquipmentInfoWrapper}>
        <Text style={styles.gymEquipmentInfoTitle}>Gym & Equipments</Text>
        <Text style={styles.gymEquipmentInfoText}>FitZone offers a wide variety of gym equipment 
          and can cater to different fitness goals and preferences. 
          Check out some of our equipment below!</Text>
      </View>

      <Text style={styles.exerciseTitle}>Cardio</Text>
      <View style={{flexDirection: "row", flexWrap: "wrap"}}>
        <View style={styles.exerciseCard}>
          <Image source={treadmills} style={{height: 150}} />
          <Text style={styles.exerciseText}>Treadmills</Text>

        </View>
        <View style={styles.exerciseCard}>
          <Image source={exercisebikes} style={{height: 150, width: 170}} />
          <Text style={styles.exerciseText}>Exercise Bikes</Text>

        </View>
        <View style={styles.exerciseCard}>
          <Image source={stairsteppers} style={{height: 150}} />
          <Text style={styles.exerciseText}>Stair Steppers</Text>
        </View>
      </View>

      <Text style={styles.exerciseTitle}>Strength Training</Text>
      <View style={{flexDirection: "row", flexWrap: "wrap"}}>
        <View style={styles.exerciseCard}>
          <Image source={dumbbells} style={{height: 150}} />
          <Text style={styles.exerciseText}>Dumbbells</Text>
        </View>
        <View style={styles.exerciseCard}>
          <Image source={barbells} style={{height: 150}} />
          <Text style={styles.exerciseText}>Barbells</Text>

        </View>
      </View>

    </ScrollView>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBarWrapper: {
    flex: 0.135,
    backgroundColor: colors.darkBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: "white",
    fontSize: 40,
    marginTop: 25
  },
  gymEquipmentInfoWrapper: {
    marginHorizontal: 20,
    marginVertical: 60,

  },
  gymEquipmentInfoTitle: {
    fontSize: 36,
    
  },
  gymEquipmentInfoText: {
    fontSize: 16,
    marginTop: 10,
    
  },
  exerciseTitle: {
    color: colors.lightBlue,
    fontSize: 24,
    marginLeft: 20,
    marginVertical: 10
    
  },
  exerciseCard: {
    borderColor: colors.lightGray,
    borderWidth: 2,
    borderRadius: 5,
    marginLeft: 20,
    marginVertical: 10,
    width: "40.5%"
  },
  exerciseText: {
    fontSize: 20,
    marginVertical: 15,
  },
})