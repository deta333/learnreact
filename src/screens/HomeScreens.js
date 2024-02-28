import { Button, Text, View, Image, StyleSheet, ScrollView } from "react-native"
import PaymentComponent from "../components/PaymentComponent";
import PromoDiskon from "../components/PromoDiskon";
import PPOBComponent from "../components/ppob";
import GetAccount from "../components/GetAccount";




const HomeScreen = ({navigation}) => {


    return (
        <ScrollView>
        <View>
            <Image style={styles.background} source={require('../../assets/Background.png')}/>
            <GetAccount />
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

});

export default HomeScreen