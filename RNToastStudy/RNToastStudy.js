import { Button, SafeAreaView,ToastAndroid, View,StyleSheet } from "react-native";

export default function RNToastAndroid(){

    function showToast(){
        ToastAndroid.show("MERHABA",5)
    }

    function showToastWithGravity(){
        ToastAndroid.showWithGravity("GRAVITY TOAST",10,ToastAndroid.LONG)
    }

    function showToastWithGravityAndOffset(){
        ToastAndroid.showWithGravityAndOffset("Gravity And Offset",ToastAndroid.LONG,5,1,2)
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Button title="Show Basic Toast" onPress={showToast}/>

                <Button title="Show Toast With Gravity" onPress={showToastWithGravity}/>

                <Button title="Show Toast With Gravity And Offset" onPress={showToastWithGravityAndOffset}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"space-evenly",
        alignItems:"center",

    }
})