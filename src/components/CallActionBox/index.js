import { View, StyleSheet } from 'react-native';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';

export default function CallActionBox() {
    return (
        <View style={styles.buttonsContainer}>

            <View style={styles.iconButton}>
                <Ionicons name="ios-camera-reverse" size={30} color="white" />
            </View>

            <View style={styles.iconButton}>
                <Feather name="video-off" size={30} color="white" />
            </View>

            <View style={styles.iconButton}>
                <Feather name="mic-off" size={30} color="white" />
            </View>

            <View style={[styles.iconButton, {backgroundColor: 'red'}]}>
                <MaterialIcons name="call-end" size={30} color="white" />
            </View>

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
        marginTop: 'auto',
    },

    iconButton: {
        backgroundColor: '#4a4a4a',
        padding: 15,
        borderRadius: 50,
    },

});