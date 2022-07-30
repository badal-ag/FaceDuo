import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import { Voximplant } from 'react-native-voximplant';
import { ACC_NAME, APP_NAME } from '../../Constants';

export default function LoginScreen() {

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const voximplant = Voximplant.getInstance();

    useEffect(() => {
        const connect = async () => {
            const status = await voximplant.getClientState();
            //console.warn(status);
            if (status === Voximplant.ClientState.DISCONNECTED) {
                await voximplant.connect();
            }
        };

        connect();

    }, []);

    const signIn = async () => {
        const fqUsername = `${username}@${APP_NAME}.${ACC_NAME}.voximplant.com`;
        await voximplant.login(fqUsername, password);

    };

    return (
        <View style={styles.page}>

            <TextInput 
                value={username} 
                onChangeText={setUsername}
                placeholder='Enter Username' 
                style={styles.input}
                autoCapitalize="none"
            />

            <TextInput 
                value={password} 
                onChangeText={setPassword} 
                placeholder='Enter Password' 
                style={styles.input} 
                secureTextEntry
            />

            <Pressable style={styles.button} onPress={signIn}>
                <Text>Sign In</Text>
            </Pressable>

        </View>
    )
};

const styles = StyleSheet.create({

    page: {
        padding: 10,
        alignItems: 'stretch',
        flex: 1,
        justifyContent: 'center',
    },

    input: {
        backgroundColor: 'white',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
    },

    button: {
        backgroundColor: 'dodgerblue',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    
});
