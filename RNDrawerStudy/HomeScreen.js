import { useDrawerStatus } from "@react-navigation/drawer";
import { Button, SafeAreaView, Text, View } from "react-native";

export default function HomeScreen({navigation}){

    const isDrawerOpen = useDrawerStatus()

    if(isDrawerOpen==="open"){
      console.log(isDrawerOpen)
    }else{
      console.warn(isDrawerOpen)
    }
 return (
    <SafeAreaView>
        <View>
            <Text>Home Screen</Text>
            <Button title="Toggle" onPress={()=>navigation.toggleDrawer()}/>
        </View>
    </SafeAreaView>
 )   
}