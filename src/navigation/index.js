import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import CallingScreen from '../screens/CallingScreen';
import CallScreen from '../screens/CallScreen';
import ContactsScreen from '../screens/ContactsScreen';
import IncomingCallScreen from '../screens/IncomingCallScreen';
import LoginScreen from '../screens/LoginScreen';

export default function Navigation() {

    const Stack = createNativeStackNavigator();

    return (

        <NavigationContainer>
            <Stack.Navigator>
                
                <Stack.Screen name="Login" component={LoginScreen} />

                <Stack.Group screenOptions={{headerShown: false}}>                  
                    <Stack.Screen name="Calling" component={CallingScreen} />
                    <Stack.Screen name="IncomingCall" component={IncomingCallScreen} /> 
                    <Stack.Screen name="Contacts" component={ContactsScreen} />
                    <Stack.Screen name="OnGoingCall" component={CallScreen} />
                </Stack.Group>

            </Stack.Navigator>
        </NavigationContainer>
    
    );
};