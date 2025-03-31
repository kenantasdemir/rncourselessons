import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator,  useDrawerStatus } from "@react-navigation/drawer";
import React from 'react';
import { StyleSheet } from 'react-native';
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";

const Drawer = createDrawerNavigator();





export default function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen 
        options={{
          drawerLabel:"CustomHome",
          title:"Overview Home",
          drawerActiveTintColor:"white",
          drawerActiveBackgroundColor:"#003cb3",
          drawerLabelStyle:{
            color:"white"
          },
          drawerItemStyle:{
            backgroundColor:"#9dd3c8",
            borderColor:"black",
            borderWidth:3,
            opacity:0.6
          },
          drawerStyle:{
            backgroundColor:"#c6cbef",
            width:240
          },
          drawerPosition:"right",
          drawerType:"back",
          drawerStatusBarAnimation:"fade"
        }} name="HomeScreen" component={HomeScreen}/>
        <Drawer.Screen name="ProfileScreen" component={ProfileScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
