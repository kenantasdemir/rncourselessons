import React from "react";
import { Button, SafeAreaView, Text, View } from "react-native";
import NetInfo from "@react-native-community/netinfo";

export default class RNNetworkInfoStudy extends React.Component {

    constructor(){
        super()
    }
     showNetInfos = () => {
        NetInfo.fetch().then((state) => {
          console.log("Connection type", state.type);
          console.log("Is connected?", state.isConnected);
        });
      };
      

  render() {
    return (
      <SafeAreaView>
        <View>
            <Text>Open terminal to inspect network status</Text>
            <Button title="Show" onPress={this.showNetInfos}/>
        </View>
      </SafeAreaView>
    );
  }
}
