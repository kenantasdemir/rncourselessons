import React from 'react';
import { StyleSheet, View } from 'react-native';
import RNStarRatingStudy from './RNStarRatingStudy';

export default function App() {
  return (
    <View style={styles.container}>
      <RNStarRatingStudy/>
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
