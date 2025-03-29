import React, { useRef } from 'react';
import GestureFlipView from 'react-native-gesture-flip-card';
import { Text, View, StyleSheet, Button, SafeAreaView } from 'react-native';

export default function RNGestureFlipCardStudy() {
    const flipViewRef = useRef(null);

    const renderFront = () => (
        <View style={styles.frontStyle}>
            <Text style={{ fontSize: 25, color: '#fff' }}>{'Front'}</Text>
        </View>
    );

    const renderBack = () => (
        <View style={styles.backStyle}>
            <Text style={{ fontSize: 25, color: '#fff' }}>{'Back'}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Button style={styles.button} title="Çevir" onPress={() => flipViewRef.current?.flipLeft()} />
            
            <View style={styles.flipContainer}>
                <GestureFlipView
                    ref={flipViewRef}
                    width={600}  // ✅ Genişlik 600 piksel
                    height={600} // ✅ Yükseklik 600 piksel
                    renderBack={renderBack}
                    renderFront={renderFront}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        //backgroundColor: "red", // ✅ Arka plan kırmızı yapıldı
    },
    button: {
        marginBottom: 20, // Buton ile kart arasında boşluk bırak
    },
    flipContainer: {
        width: 600,  // ✅ Genişlik sabitlendi
        height: 600, // ✅ Yükseklik sabitlendi
    },
    frontStyle: {
        borderRadius: 15,  // ✅ borderRadius artık string değil
        borderWidth: 2,    // ✅ borderColor için borderWidth ekledik
        borderColor: "yellow",
        width: 600,  // ✅ Genişlik 600 piksel
        height: 600, // ✅ Yükseklik 600 piksel
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
    },
    backStyle: {
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "yellow",
        borderRadius:40,
        width: 600,
        height: 600,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
    },
});
