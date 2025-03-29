import { Button, SafeAreaView, View, Alert } from "react-native";

export default function RNAlertStudy(){
    const openAlertDialog = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
    return (
       <SafeAreaView>
        <View>
            <Button title="Open Alert" onPress={openAlertDialog}/>
        </View>
       </SafeAreaView>
    )
}