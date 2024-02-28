import { Button, Text, View, Image, StyleSheet, ScrollView } from "react-native"
import { useEffect, useState } from 'react';
import axios from 'axios';

const PaymentComponent = () => {
    const [user, setUser] = useState()
    const [payment, setPayment] = useState()

    useEffect(() => {
    
      getAccountAxios();
      getPayment();
    
    }, []); 
    

    const getPayment = () => {
        axios.get('https://private-anon-75f39ba77b-itodpbni.apiary-mock.com/menu/transfer')
        .then(response => {
          console.log("Respons Transfer", response.data)
          setPayment(response.data)  
        })
        .catch(error => console.error("Error", error))
      }

    const getAccountAxios = () => {
      axios.get('https://private-anon-75f39ba77b-itodpbni.apiary-mock.com/account')
      .then(response => {
        console.log("Respons", response.data)
        setUser(response.data)  
      })
      .catch(error => console.error("Error", error))
    }

    
    
return(
<View style={styles.frameppob}>
<View style={styles.saldo}>
        <Text style={styles.textSaldo}>Saldo</Text>
        <Text style={styles.textNominal}>{user && user.user.balance}</Text>
</View>
<View style={styles.separator}></View>
<View style={styles.ppobtransaksi}>
    <View style={styles.templatetransaksi}>
        <Image style={styles.iconTransaksi} source={{uri: payment && payment.menu && payment.menu[0].image, height:48, width: 48}}/>
        <Text style={styles.textTransaksi}>{payment && payment.menu && payment.menu[0].title}</Text>
    </View>
    <View style={styles.templatetransaksi}>
        <Image style={styles.iconTransaksi} source={{uri: payment && payment.menu && payment.menu[1].image, height:48, width: 48}}/>
        <Text style={styles.textTransaksi}>{payment && payment.menu && payment.menu[1].title}</Text>
    </View>
    <View style={styles.templatetransaksi}>
        <Image style={styles.iconTransaksi} source={{uri: payment && payment.menu && payment.menu[2].image, height:48, width: 48}}/>
        <Text style={styles.textTransaksi}>{payment && payment.menu && payment.menu[2].title}</Text>
    </View>
</View>
</View>
)
}

const styles = StyleSheet.create({
    frameppob:{
        width: 348,
        height: 180,
        backgroundColor: 'white',
        marginTop: 8,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
    },

    saldo:{
        flexDirection: 'row',
        padding: 20,
    },

    textSaldo:{
        fontSize: 16,
        color: '#852884',
        flex:1
    },

    textNominal:{
        fontSize: 18,
        color: '#852884',
        fontWeight:'800'
    },

    separator:{
        height:1,
        backgroundColor: '#f2f2f2',
    },

    textListPembayaran:{
        fontSize: 20,
        fontWeight:'600',
        color: '#852884',
    },
    textTransaksi:{
        marginTop:12,
        color: '#852884',
        fontWeight: '500'
    },
    templatetransaksi:{
        alignItems: 'center',
        flex:1,
        // backgroundColor:'red'
    },
    ppobtransaksi:{
        flexDirection:'row',
        marginHorizontal:24,
        marginTop:16,
        justifyContent: 'space-around',
        // backgroundColor:'yellow'
    },
});
export default PaymentComponent