import React from "react";
import { SafeAreaView } from "react-native";
import QRCode from "react-native-qrcode-svg";

export default class RNQRCode extends React.Component{
    componentDidMount(){

    }

    render(){
        return (
                <SafeAreaView style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                    <QRCode
                    enableLinearGradient={true}
                    linearGradient={["#000","red","green"]}
                    size={150} value={"merhaba dünya"} />
                </SafeAreaView>
        )
    }
}