import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreens';
import RegisterScreen from './src/screens/RegisterScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './src/screens/LoginScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import InboxScreen from './src/screens/InboxScreen';
import ProfileScreen from './src/screens/ProfileScreen';


const Stack = createStackNavigator();




export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer >
        <Tab.Navigator>
          
          <Tab.Screen name="Home"  options={{ headerShown: false, tabBarIcon: () => (
              <Image
                source={require("./assets/home icon.png")} style={{
                  width: 26,
                  height: 26,
                }}
              />
            )
           }} 
          component={HomeScreen} />
          
          <Tab.Screen name="History" options={{ headerShown: false, tabBarIcon: () => (
              <Image
                source={require("./assets/riwayat icon.png")} 
                style={{
                  width: 26,
                  height: 26,
                }}
              />
            )
           }} 
          component={HistoryScreen} />

          <Tab.Screen name="Inbox" options={{ headerShown: false, 
          tabBarIcon: () => (
              <Image source={require("./assets/inbox icon.png")} style={{
                  width: 26,
                  height: 26,
                }}/>
            )
           }} 
           component={InboxScreen} />

           <Tab.Screen name="Profile" options={{ headerShown: false, 
          tabBarIcon: () => (
              <Image source={require("./assets/profil icon.png")} style={{
                  width: 26,
                  height: 26,
                }}/>
            )
           }} 
           component={ProfileScreen} />
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
