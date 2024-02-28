import { Text, View, StyleSheet, Image } from "react-native"
import { useEffect, useState } from 'react';
import axios from 'axios';

const GetAccount = () => {
const [user, setUser] = useState()

useEffect(() => {

  getAccountAxios();

}, []); 

const getAccountAxios = () => {
  axios.get('https://private-anon-75f39ba77b-itodpbni.apiary-mock.com/account')
  .then(response => {
    console.log("Respons", response.data)
    setUser(response.data)  
  })
  .catch(error => console.error("Error", error))
}


return (
<View style={styles.header}>
<View style={styles.assalamualaikum}>
    <Text style={styles.textAssalamualaikum}>Assalamualaikum</Text>
    <Text style={styles.textNama}>{user && user.user.name}</Text>
</View>
<Image style={styles.iconLonceng} source={require('../../assets/Notification.png')}/>
</View>
)
}


const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        // backgroundColor: 'red',
        padding: 20,
        marginTop:45,
        
      },
      assalamualaikum:{
        flex:1,
        // backgroundColor:'yellow'
    
      },
      textAssalamualaikum:{
        fontSize: 16,
        color: 'white',
        
      },
      textNama:{
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
        marginTop: 4,
      },
    
      iconLonceng:{
        alignItems: 'center',
      }

    });

export default GetAccount

