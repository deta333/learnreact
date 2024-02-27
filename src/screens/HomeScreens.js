import { Button, Text, View, Image, StyleSheet } from "react-native"


const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Image style={styles.background} source={require('../../assets/Background.png')}/>
            <View style={styles.header}>
                <View style={styles.assalamualaikum}>
                    <Text style={styles.textAssalamualaikum}>Assalamualaikum</Text>
                    <Text style={styles.textNama}>Deta Pratama</Text>
                </View>
            <Image style={styles.iconLonceng} source={require('../../assets/Notification.png')}/>
            </View>

            <View style={styles.frameppob}>
                <View style={styles.saldo}>
                        <Text style={styles.textSaldo}>Saldo</Text>
                        <Text style={styles.textNominal}>Rp. 2.000.000</Text>
                </View>
                <View style={styles.separator}></View>
                <View style={styles.saldo}>
                        <Text style={styles.textSaldo}>Saldo</Text>
                        <Text style={styles.textNominal}>Rp. 2.000.000</Text>
                </View>

            </View>
            <Button title="Go to Register"
                onPress={() => navigation.navigate('Register')}/>        
        </View>
    )
}

const styles = StyleSheet.create({
    separator:{
        height:10,
        color: '#F2F2F2',

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
    
    saldo:{
        flexDirection: 'row',
        padding: 24,
    },

    frameppob:{
        width: 348,
        height: 200,
        backgroundColor: 'white',
        marginTop: 8,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
    },

background:{
    width: '100%',
    position: 'absolute',
  },
  header:{
    flexDirection: 'row',
    // backgroundColor: 'red',
    padding: 20,
    
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

export default HomeScreen