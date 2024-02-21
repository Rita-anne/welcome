import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{display:'flex', flexDirection:'row', backgroundColor:'black',paddingLeft:150,paddingRight:160, }}  >
      <Text style={{color:'black', fontSize:40, backgroundColor:'#e6b800', color:'black', borderRadius:10, paddingRight:10,paddingLeft:10,paddingTop:0,paddingBottom:0}} >M</Text>
      <Text style={{color:'white', fontSize:30}}>Movi</Text>
      <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
