import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreens';
import RegisterScreen from './src/screens/RegisterScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './src/screens/LoginScreen';


const Stack = createStackNavigator();




export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer >
        <Tab.Navigator>
          
          <Tab.Screen name="Home"  options={{ headerShown: false, tabBarIcon: () => (
              <Image
                source={require("./assets/Icon Pack/house-duotone.png")} 
                style={{
                  width: 26,
                  height: 26,
                }}
              />
            )
           }} 
          component={HomeScreen} />
          
          <Tab.Screen name="Register" options={{ headerShown: false, tabBarIcon: () => (
              <Image
                source={require("./assets/Icon Pack/house-duotone.png")} 
                style={{
                  width: 26,
                  height: 26,
                }}
              />
            )
           }} 
          component={RegisterScreen} />

          <Tab.Screen name="Login"options={{ headerShown: false, tabBarIcon: () => (
              <Image
                source={require("./assets/Icon Pack/house-duotone.png")} 
                style={{
                  width: 26,
                  height: 26,
                }}
              />
            )
           }} 
           component={LoginScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   background:{
//     width: '100%',
//   }
// });
