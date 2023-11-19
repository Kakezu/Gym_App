import { Image, ImageBackground, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import colors from '../assets/colors/colors'
import aboutUsImage from "../assets/images/about_us_image.png"
import instructedClassesImage from "../assets/images/aboutus_instructedclasses.png"
import { Ionicons } from '@expo/vector-icons'; 
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import MapView, { Marker } from "react-native-maps"

export default function AboutUs({ navigation }) {
  return (
    <>
    <View style={styles.container}>
        <View style={styles.topBarWrapper}>
            <Ionicons 
            name="ios-arrow-back-outline" 
            size={40} color="white" 
            style={styles.backButton} 
            onPress={() => navigation.navigate("HomeScreen")}/>
            <Text style={styles.logoText}>FitZone</Text>
        </View>
        <ScrollView contentContainerStyle={{paddingBottom: 500}}>
            <ImageBackground source={aboutUsImage} resizeMode='cover'
                style={styles.aboutusImageWrapper}>
                <Text style={styles.aboutUsTitle}>About us</Text>
                <Text style={styles.aboutUsText}>We are a gym dedicated to make you feel better!</Text>
            </ImageBackground>

            <View style={styles.horizontalLine}></View>
            <View style={styles.instructedClassesWrapper}>
                <Text style={styles.instructedClassesText}>
                We have many different instructed classes, like yoga, bodycombat and many others!{"\n"}{"\n"}
                <Pressable onPress={() => navigation.navigate("InstructedClasses")}>
                    <Text style={styles.instructedClassesReadMore}>READ MORE</Text>
                </Pressable>
                </Text>
                <Image source={instructedClassesImage}/>
            </View>
            <View style={styles.horizontalLine}></View>

            <Text style={styles.contactInfoTitle}>Contact Info</Text>
            <View style={styles.contactInfoWrapper}>
                <Ionicons name="home" size={32} color={colors.darkestGray}/>
                <View style={styles.contactInfoTextWrapper}>
                    <Text style={styles.contactInfoTopic}>Address</Text>
                    <Text style={styles.contactInfoText}>Fake Address 1, 00100 Helsinki</Text>
                </View>
            </View>

            <View style={styles.contactInfoWrapper}>
                <Ionicons name="time-outline" size={32} color={colors.darkestGray}/>
                <View style={styles.contactInfoTextWrapper}>
                    <Text style={styles.contactInfoTopic}>Opening Hours</Text>
                    <Text style={styles.contactInfoText}>06:00 - 23:00</Text>
                </View>
            </View>

            <View style={styles.contactInfoWrapper}>
                <MaterialCommunityIcons name="phone" size={32} color={colors.darkestGray}/>
                <View style={styles.contactInfoTextWrapper}>
                    <Text style={styles.contactInfoTopic}>Phone</Text>
                    <Text style={styles.contactInfoText}>09555666</Text>
                </View>
            </View>

            <View style={styles.contactInfoWrapper}>
                <MaterialCommunityIcons name="email" size={32} color={colors.darkestGray}/>
                <View style={styles.contactInfoTextWrapper}>
                    <Text style={styles.contactInfoTopic}>Email</Text>
                    <Text style={styles.contactInfoText}>info.fitzone@fitzone.fi</Text>
                </View>
            </View>
            <MapView 
                initialRegion={{
                    //60.168820993251714, 24.936339542559033
                    latitude: 60.16882,
                    longitude: 24.93633,
                    latitudeDelta: 0.001,
                    longitudeDelta: 0.001,
                }}
                style={styles.map}>
                <Marker
                    coordinate={{latitude: 60.16882, longitude: 24.93633}}/>
            </MapView>
            


        </ScrollView>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    topBarWrapper: {
        padding: 15,
        flexDirection: "row",
        backgroundColor: colors.darkBlue,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoText: {
        color: "white",
        fontSize: 40,
        marginRight: 120,
        marginLeft: 89,
        marginTop: 25
    },
    backButton: {
        marginTop: 25
    },
    aboutusImageWrapper: {
        height: 400,
        justifyContent: 'space-between'
    },
    aboutUsTitle: {
        color: colors.orange,
        fontSize: 36,
        marginTop: 65,
        marginLeft: 20,
    },
    aboutUsText: {
        fontSize: 16,
        marginBottom: 30,
        marginLeft: 20,
        width: 320
    },
    horizontalLine: {
        marginVertical: 10,
        borderBottomColor: colors.darkGray,
        borderBottomWidth: 1,
        width: "90%",
        alignSelf: "center"
    },
    instructedClassesWrapper: {
        flexDirection: "row",
        marginHorizontal: 15,
        marginVertical: 20
    },
    instructedClassesText: {
        width: "45%",
        fontSize: 16,
        marginRight: 40
    },
    instructedClassesReadMore: {
        color: colors.lightBlue,
        fontSize: 16,
    },
    contactInfoTitle: {
        fontSize: 36,
        marginLeft: 15,
        marginBottom: 20,
    },
    contactInfoWrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5,
        marginLeft: 15,
        padding: 5,
        borderColor: colors.lightGray,
        borderWidth: 2,
        borderRadius: 5,
        width: "90%"
    },
    contactInfoTextWrapper: {
        flexDirection: 'column'
    },
    contactInfoTopic: {
        fontSize: 20,
    },
    contactInfoText: {
        fontSize: 15,
        
    },
    map: {
        marginTop: 50,
        borderRadius: 10,
        width: "90%",
        height: "40%",
        alignSelf: 'center'
    }
})