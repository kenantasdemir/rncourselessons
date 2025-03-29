
import React, { useRef } from 'react';
import { View, Button, SafeAreaView, StyleSheet } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import MyOwnComponent from './MyOwnComponent';
export default function RNRawBottomSheetStudy() {
    const refRBSheet = useRef();
    return (
        <SafeAreaView>



            <View style={{ flex: 1 }}>
                <Button style={styles.button}
                    title="OPEN BOTTOM SHEET"
                    onPress={() => refRBSheet.current.open()}
                />
                <RBSheet
                    ref={refRBSheet}
                    useNativeDriver={false}
                    customStyles={{
                        wrapper: {
                            backgroundColor: 'transparent',
                        },
                        draggableIcon: {
                            backgroundColor: '#000',
                        },
                        container:{
                            
                        }
                        
                    }}
                    customModalProps={{
                        animationType: 'slide',
                        statusBarTranslucent: true,
                    }}
                    customAvoidingViewProps={{
                        enabled: false,
                    }}>

                        <MyOwnComponent/>

                </RBSheet>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    button:{
        marginTop:50,
        color:"red"

    }
})