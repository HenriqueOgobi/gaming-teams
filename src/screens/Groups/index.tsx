import { StyleSheet, Text, View } from 'react-native';

export  function Groups() {
  return (
      <Text style={styles.container}> Groups! Hello React-Native</Text>
  );
}

const styles = StyleSheet.create({
  container: {
   marginTop: 100,
   justifyContent:'center',
    color: 'black',
   
  },
});
