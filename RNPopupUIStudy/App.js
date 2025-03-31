import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { Root, Popup,Toast } from 'popup-ui';


export default function App() {
  return (
    <Root>
    <View style={styles.container}>
        <TouchableOpacity
            onPress={() =>
              Popup.show({
                type: 'Success',
                title: 'Upload complete',
                button: false,
                textBody: 'Congrats! Your upload successfully done',
                buttonText: 'Ok',
                callback: () => Popup.hide()
              })
            }
        >
            <Text>Open Popup</Text>
        </TouchableOpacity>

        <TouchableOpacity
                onPress={() => 
                    Toast.show({
                        title: 'User created',
                        text: 'Your user was successfully created, use the app now.',
                        color: '#2ecc71'
                    })
                }
            >
                <Text>Call Toast</Text>
            </TouchableOpacity>
    </View>
</Root>
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
