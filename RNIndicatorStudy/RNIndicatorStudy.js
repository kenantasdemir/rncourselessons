import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { BallIndicator, BarIndicator,MaterialIndicator,PacmanIndicator,DotIndicator,SkypeIndicator } from "react-native-indicators";

export default class RNIndicatorStudy extends React.Component{
    constructor(){
        super()
        this.state = {
            loading:true
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({loading:false})
        },3000)
    }

    render(){
        return (
            <SafeAreaView style={{flex:1}}>
                {this.state.loading ? 
               
                <View>
                     <BarIndicator color={"red"}/>
                    <Text>Sayfa yükleniyor .....</Text>
                </View>
                :
                <View>
                    <Text>Sayfa yüklendi </Text>
                </View>
            }
            </SafeAreaView>
        );
    }
}