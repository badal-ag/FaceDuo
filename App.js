import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import CallingScreen from './src/screens/CallingScreen';
import CallScreen from './src/screens/CallScreen';
import ContactsScreen from './src/screens/ContactsScreen';
import IncomingCallScreen from './src/screens/IncomingCallScreen';

const App = () => {

  return (
    <SafeAreaView>
      <CallingScreen />
      <StatusBar barStyle={'dark-content'} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  

});

export default App;
