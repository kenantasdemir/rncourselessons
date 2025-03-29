import { SafeAreaView, Text,StyleSheet, View } from "react-native";

export default function MyOwnComponent(){
    return (
        <SafeAreaView>
           <View style={styles.container}>
           <Text style={styles.text}> My Own Component </Text>
           </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "red",
        width: "100%", 
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    text:{
        color:"white",
        fontSize:40
    }
})