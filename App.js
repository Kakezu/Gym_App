import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './StackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}


