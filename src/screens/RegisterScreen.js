import { Text, View, StyleSheet } from "react-native"


const RegisterScreen = ({navigation}) => {
    return (
        <View style={styles.header}>
        <Text>Ini REGISTER yaw</Text>
        </View>
    )
}
const styles = StyleSheet.create({
      header: {
        marginTop:90,    
    },
    
      background:{
        width: '100%',
      }
    });

export default RegisterScreen