import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import CallingScreen from './src/screens/CallingScreen';
import ContactsScreen from './src/screens/ContactsScreen';

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
