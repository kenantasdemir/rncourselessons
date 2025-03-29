import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RNGestureFlipCardStudy from "./RNGestureFlipCardStudy";

export default function App() {
  return (
    <View style={styles.container}>
      <RNGestureFlipCardStudy/>
    </View>
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
