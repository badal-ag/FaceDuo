import { useState } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';

export default function CallActionBox() {

    const [ isCameraOn, setIsCameraOn ] = useState(true); 
    const [ isMicOn, setIsMicOn ] = useState(true); 

    const onReverseCamera = () => {
        console.warn('onReverseCamera')
    }

    const onToggleCamera = () => {
        setIsCameraOn(currentValue => !currentValue);
    }

    const onToggleMicrophone = () => {
        setIsMicOn(currentValue => !currentValue);
    }

    const onHangup = () => {
        console.warn('onHangup')      
    }



    return (
        <View style={styles.buttonsContainer}>

            <Pressable onPress={onReverseCamera} style={styles.iconButton}>
                <Ionicons name="ios-camera-reverse" size={30} color="white" />
            </Pressable>

            <Pressable onPress={onToggleCamera} style={styles.iconButton}>
                <Feather name={  isCameraOn ? "video-off" : "video" } size={30} color="white" />
            </Pressable>

            <Pressable onPress={onToggleMicrophone} style={styles.iconButton}>
                <Feather name={ isMicOn ? "mic-off" : "mic" } size={30} color="white" />
            </Pressable>

            <Pressable onPress={onHangup} style={[styles.iconButton, {backgroundColor: 'red'}]}>
                <MaterialIcons name="call-end" size={30} color="white" />
            </Pressable>

        </View>
    );
};


const styles = StyleSheet.create({

    buttonsContainer: {
        backgroundColor: '#333333',
        padding: 20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingBottom: 40,
        marginTop: 'auto',
    },

    iconButton: {
        backgroundColor: '#4a4a4a',
        padding: 15,
        borderRadius: 50,
    },

});