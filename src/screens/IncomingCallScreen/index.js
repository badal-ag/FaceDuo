import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native';
import bg from '../../../assets/images/ios_bg.png';
import { Ionicons, Entypo, Feather } from '@expo/vector-icons';

export default function IncomingCallScreen() {

    const onDecline = () => {
        console.warn("Decline Button Pressed")
    } 

    const onAccept = () => {
        console.warn("Accept Button Pressed")
    } 


    return (

        <View style={styles.root}>
            <ImageBackground source={bg} style={styles.bg}  resizeMode="cover">  
                <Text style={styles.name}>Alex</Text>
                <Text style={styles.phoneNumber}>Incoming Video.....</Text>

                <View style={[styles.row, {marginTop: 'auto'}]}>
                    <View style={styles.iconContainer}>
                        <Ionicons name="alarm" size={30} color="white" />
                        <Text style={styles.iconText}>Remind Me</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Entypo name="message" size={30} color="white" />
                        <Text style={styles.iconText}>Message</Text>
                    </View>
                </View>

                <View style={styles.row}>


                    <Pressable onPress={onDecline} style={styles.iconContainer}>
                        <View style={styles.iconButtonContainer}>
                            <Feather name="x" size={40} color="white" />
                        </View>
                        <Text style={styles.iconText}>Decline</Text>
                    </Pressable>


                    <Pressable onPress={onAccept} style={styles.iconContainer}>
                        <View style={[styles.iconButtonContainer, {backgroundColor: '#2e7bff'}]}>
                            <Feather name="check" size={40} color="white" />
                        </View>
                        <Text style={styles.iconText}>Accept</Text>
                    </Pressable>


                </View>

            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({

    root: {
        height: '100%',
    },
    
    bg: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        paddingBottom: 50,
    },

    name: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 100,
        marginBottom: 15,
    },

    phoneNumber: {
        fontSize: 20,
        color: 'white',
    },

    row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    iconContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },

    iconText: {
        color: 'white',
        marginTop: 10,
    },

    iconButtonContainer: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 50,
        margin: 10,
    },

});