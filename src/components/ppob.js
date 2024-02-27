import { Button, Text, View, Image, StyleSheet, ScrollView } from "react-native"

const PPOBComponent = () => {
return(
<View style={styles.frameppob}>
<View style={styles.saldo}>
        <Text style={styles.textSaldo}>Saldo</Text>
        <Text style={styles.textNominal}>Rp. 2.000.000</Text>
</View>
<View style={styles.separator}></View>
<View style={styles.ppobtransaksi}>
    <View style={styles.templatetransaksi}>
        <Image style={styles.iconTransaksi} source={require('../../assets/Qris Icon.png')}/>
        <Text style={styles.textTransaksi}>QRIS</Text>
    </View>
    <View style={styles.templatetransaksi}>
        <Image style={styles.iconTransaksi} source={require('../../assets/Kirim Dana Icon.png')}/>
        <Text style={styles.textTransaksi}>Kirim Dana</Text>
    </View>
    <View style={styles.templatetransaksi}>
        <Image style={styles.iconTransaksi} source={require('../../assets/Topup Icon.png')}/>
        <Text style={styles.textTransaksi}>Top Up</Text>
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
export default PPOBComponent