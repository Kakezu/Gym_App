import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native'
import colors from '../assets/colors/colors'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import * as Progress from 'react-native-progress';
import CalendarPicker from 'react-native-calendar-picker';

export default function InstructedClasses() {
  const [exerciseSlots, setExerciseSlots] = useState({
    bodycombat: 5,
    zumba: 10,
    yoga: 15,
    groupExerciseA: 20,
  });
  const [reserved, setReserved] = useState({
    bodycombat: false,
    zumba: false,
    yoga: false,
    groupExerciseA: false,
  });
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const startDate = selectedStartDate ? selectedStartDate.format('YYYY-MM-DD').toString() : '';

  const handleDateChange = (date) => {
    setSelectedStartDate(date);
    setIsCalendarVisible(false);
  };
  

  useEffect(() => {
    // This code will run whenever `exerciseSlots` changes
    console.log(exerciseSlots);
  }, [exerciseSlots]);


  const handleReserve = (exerciseName) => {
    if (!reserved[exerciseName]) {
      setExerciseSlots((prevSlots) => ({
        ...prevSlots,
        [exerciseName]: prevSlots[exerciseName] + 1
      }));
      setReserved((prevReserved) => ({
        ...prevReserved,
        [exerciseName]: true
      }));
    }
  };

  return (
    <>
    <View style={styles.topBarWrapper}>
        <Text style={styles.logoText}>FitZone</Text>
      </View>
    <ScrollView style={styles.container}>
      <View style={styles.titleCalendarWrapper}>
        <Text style={styles.instructedClassesTitle}>Book A Class</Text>
        <Pressable style={styles.button} onPress={() => setIsCalendarVisible(!isCalendarVisible)}>
          <Text style={{color: "white"}}>{startDate}</Text>
        </Pressable>
      </View>
      {isCalendarVisible && <CalendarPicker onDateChange={handleDateChange}/>}


      <View style={styles.cardWrapper}>
        <Text style={styles.exerciseTime}>08.00 - 08.45</Text>
        <View style={styles.exerciseWrapper}>
          <View style={styles.exerciseLeftSideWrapper}>
            <MaterialCommunityIcons name="run" size={32} color={colors.darkestGray}/>
            <Text style={styles.exerciseTitle}>Bodycombat</Text>
          </View>
          <View style={styles.exerciseRightSideWrapper}>
            <Text style={styles.exerciseSlots}>{exerciseSlots.bodycombat} / 25</Text>
            <Progress.Bar progress={exerciseSlots.bodycombat / 25} width={50} style={styles.progressBar} />
            <Pressable style={styles.reserveButton} onPress={() => handleReserve("bodycombat")}>
              <Text style={styles.reserveButtonText}>Reserve</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View style={styles.cardWrapper}>
        <Text style={styles.exerciseTime}>12.00 - 13.00</Text>
        <View style={styles.exerciseWrapper}>
          <View style={styles.exerciseLeftSideWrapper}>
            <MaterialCommunityIcons name="human-female-dance" size={32} color={colors.darkestGray}/>
            <Text style={styles.exerciseTitle}>Zumba</Text>
          </View>
          <View style={styles.exerciseRightSideWrapper}>
            <Text style={styles.exerciseSlots}>{exerciseSlots.zumba} / 25</Text>
            <Progress.Bar progress={exerciseSlots.zumba / 25} width={50} style={styles.progressBar} />
            <Pressable style={styles.reserveButton} onPress={() => handleReserve("zumba")}>
              <Text style={styles.reserveButtonText}>Reserve</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View style={styles.cardWrapper}>
        <Text style={styles.exerciseTime}>15.00 - 15.30</Text>
        <View style={styles.exerciseWrapper}>
          <View style={styles.exerciseLeftSideWrapper}>
            <MaterialCommunityIcons name="yoga" size={32} color={colors.darkestGray}/>
            <Text style={styles.exerciseTitle}>Yoga</Text>
          </View>
          <View style={styles.exerciseRightSideWrapper}>
            <Text style={styles.exerciseSlots}>{exerciseSlots.yoga} / 25</Text>
            <Progress.Bar progress={exerciseSlots.yoga / 25} width={50} style={styles.progressBar} />
            <Pressable style={styles.reserveButton} onPress={() => handleReserve("yoga")}>
              <Text style={styles.reserveButtonText}>Reserve</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View style={styles.cardWrapper}>
        <Text style={styles.exerciseTime}>17.00 - 18.30</Text>
        <View style={styles.exerciseWrapper}>
          <View style={styles.exerciseLeftSideWrapper}>
            <MaterialCommunityIcons name="run" size={32} color={colors.darkestGray}/>
            <Text style={styles.exerciseTitle}>Group Exercise A</Text>
          </View>
          <View style={styles.exerciseRightSideWrapper}>
            <Text style={styles.exerciseSlots}>{exerciseSlots.groupExerciseA} / 25</Text>
            <Progress.Bar progress={exerciseSlots.groupExerciseA / 25} width={50} style={styles.progressBar} />
            <Pressable style={styles.reserveButton} onPress={() => handleReserve("groupExerciseA")}>
              <Text style={styles.reserveButtonText}>Reserve</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View style={styles.cardWrapper}>
        <Text style={styles.exerciseTime}>20.00 - 20.45</Text>
        <View style={styles.exerciseWrapper}>
          <View style={styles.exerciseLeftSideWrapper}>
            <MaterialCommunityIcons name="run" size={32} color={colors.darkestGray}/>
            <Text style={styles.exerciseTitle}>Group Exercise B</Text>
          </View>
          <View style={styles.exerciseRightSideWrapper}>
            <Text style={styles.exerciseSlots}>25 / 25</Text>
            <Progress.Bar progress={1} width={50} style={styles.progressBar} />
            <Pressable style={styles.reserveButtonFull} >
              <Text style={styles.reserveButtonText}>FULL</Text>
            </Pressable>
          </View>
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
  titleCalendarWrapper: {
    marginHorizontal: 20,
    marginVertical: 40,

  },
  instructedClassesTitle: {
    fontSize: 36,
    marginBottom: 40,
  },
  button: {
    backgroundColor: colors.lightBlue,
    width: "45%",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center"
  },
  cardWrapper: {
    marginHorizontal: "5%",
    borderColor: colors.lightGray,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderWidth: 2,
    borderRadius: 5,

  },
  exerciseWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",

  },
  exerciseTime: {
    marginHorizontal: 10,

  },
  exerciseLeftSideWrapper: {
    flexDirection: "row",
    alignItems: "center"
  },
  exerciseTitle: {
    fontSize: 20,

  },
  exerciseRightSideWrapper: {
    alignItems: "flex-end",
  },
  exerciseSlots: {
    fontSize: 20

  },
  progressBar: {
    marginVertical: 10
  },
  reserveButton: {
    backgroundColor: colors.paleBlue,
    paddingVertical: 5,
    paddingHorizontal: 3,
    borderRadius: 5,
    alignItems: "center"

  },
  reserveButtonFull: {
    backgroundColor: colors.darkGray,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignItems: "center"

  },
  reserveButtonText: {
    color: "white",
    fontSize: 13,

  },
})