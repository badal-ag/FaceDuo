import { View, Text, StyleSheet, Pressable, PermissionsAndroid, Alert, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CallActionBox from '../../components/CallActionBox';
import { useNavigation, useRoute } from '@react-navigation/core';
import { useEffect, useState } from 'react';
import { Voximplant } from 'react-native-voximplant';

const permissions = [
    PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
    PermissionsAndroid.PERMISSIONS.CAMERA,
]

export default function CallingScreen() {

    const [ permissionGranted, setPermissionsGranted ] = useState(false);
    
    const navigation = useNavigation();
    const route = useRoute();

    const user = route?.params?.user;

    const voximplant = Voximplant.getInstance();

    const goBack = () => {
        navigation.pop();
    }

    useEffect(() => {

        const getPermissions = async () => {
            const granted = await PermissionsAndroid.requestMultiple(permissions);
            const recordAudioGranted = granted[PermissionsAndroid.PERMISSIONS.RECORD_AUDIO] === 'granted';
            const cameraGranted = granted[PermissionsAndroid.PERMISSIONS.CAMERA] === 'granted';
            if(!cameraGranted || !recordAudioGranted) {
                Alert.alert('Permissions not granted');
            } else {
                setPermissionsGranted(true);
            }
        } 

        if(Platform.OS === 'android') {
            getPermissions(); 
        } else {
            setPermissionsGranted(true);
        }

    }, []);

    useEffect(() => {

        if(!permissionGranted) {
            return;
        }

        const callSettings = {
            video: {
                sendVideo: true,
                receiveVideo: true,
            },
        };

        const makeCall = async () => {
            const call = await voximplant.call(user.user_name, callSettings);

            console.warn(call)
        };

    }, [permissionGranted] );

    return (
        <View style={styles.page}>

            <Pressable onPress={goBack} style={styles.backButton} >
                <Ionicons name="chevron-back" color="white" size={25} />
            </Pressable>

            <View style={styles.cameraPreview}>
                <Text style={styles.name}>{user?.user_display_name}</Text>
                <Text style={styles.phoneNumber}>ringing +91 98765 43210</Text>
            </View>

            <CallActionBox />

        </View>
    );
};

const styles = StyleSheet.create({

    page: {
        height: '100%',
        backgroundColor: '#7b4e80'
    },

    cameraPreview: {
        backgroundColor: '#7b4e80',
        flex: 1,
        alignItems: 'center',
        paddingTop: 10,
        paddingHorizontal: 10,
    },

    name: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 50,
        marginBottom: 15,
    },

    phoneNumber: {
        fontSize: 20,
        color: 'white',
    },

    buttonsContainer: {
        backgroundColor: '#333333',
        padding: 20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    iconButton: {
        backgroundColor: '#4a4a4a',
        padding: 15,
        borderRadius: 50,
    },

    backButton: {
        position: 'absolute',
        top: 50,
        left: 10,
        zIndex: 10,
    },

});