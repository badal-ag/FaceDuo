import { StyleSheet, StatusBar } from 'react-native';
import Navigation from './src/navigation';

const App = () => {

  return (
    <>
      <StatusBar barStyle={'dark-content'} />

      <Navigation /> 
    </>
  );
};

const styles = StyleSheet.create({
  

});

export default App;
