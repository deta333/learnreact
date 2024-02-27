import { Button, Text, View, Image, StyleSheet, ScrollView } from "react-native"
import PaymentComponent from "../components/PaymentComponent";
import PromoDiskon from "../components/PromoDiskon";
import PPOBComponent from "../components/ppob";




const HomeScreen = ({navigation}) => {


    return (
        <ScrollView>
        <View>
            <Image style={styles.background} source={require('../../assets/Background.png')}/>
            <View style={styles.header}>
                <View style={styles.assalamualaikum}>
                    <Text style={styles.textAssalamualaikum}>Assalamualaikum</Text>
                    <Text style={styles.textNama}>Deta Pratama</Text>
                </View>
            <Image style={styles.iconLonceng} source={require('../../assets/Notification.png')}/>
            </View>

            <View>
            <PPOBComponent/>
            <PaymentComponent />
            <PromoDiskon />
            <PromoDiskon />
            <PromoDiskon />
               
            </View>
            {/* <Button title="Go to Register"
                onPress={() => navigation.navigate('Register')}/>         */}
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
background:{
    width: '100%',
    position: 'absolute',
    height: 900,
  },
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

export default HomeScreen