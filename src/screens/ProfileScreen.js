import { Text, View, StyleSheet } from "react-native"


const ProfileScreen = ({navigation}) => {
    return (
        <View style={styles.header}>
        <Text>Ini Profile yaw</Text>
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

export default ProfileScreen