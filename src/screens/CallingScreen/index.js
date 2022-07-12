import { View, Text, StyleSheet } from 'react-native';


export default function CallingScreen() {
    return (
        <View style={styles.page}>

            <View style={styles.cameraPreview}>
                <Text style={styles.name}>Alex</Text>
                <Text style={styles.phoneNumber}>ringing +91 98765 43210</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <Text>Icons</Text>
            </View>

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
        padding: 10,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        width: '100%',
    },

});