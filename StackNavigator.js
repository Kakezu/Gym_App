import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "@expo/vector-icons/Ionicons"
import colors from './assets/colors/colors';
import GymEquipment from './screens/GymEquipment';
import InstructedClasses from './screens/InstructedClasses';
import { StyleSheet } from 'react-native';
import AboutUs from './screens/AboutUs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: colors.white,
        tabBarinactiveTintColor: colors.white,
        tabBarShowLabel: false
      }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        headerShown: false,
        tabBarIcon: ({color}) => <Ionicons name="home" size={32} color={color} />
      }} />
      <Tab.Screen name="GymEquipment" component={GymEquipment} options={{
        headerShown: false,
        tabBarIcon: ({color}) => <Ionicons name="barbell" size={32} color={color} />
      }}/>
      <Tab.Screen name="InstructedClasses" component={InstructedClasses} options={{
        headerShown: false,
        tabBarIcon: ({color}) => <MaterialCommunityIcons name="run" size={32} color={color} />
      }}/>
    </Tab.Navigator>
  )
}


export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}} />
      <Stack.Screen name="HomeScreen" component={TabNavigator} options={{headerShown: false, gestureEnabled: false}} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerShown: false}} />
      <Stack.Screen name="AboutUs" component={AboutUs} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.darkBlue,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  }
});