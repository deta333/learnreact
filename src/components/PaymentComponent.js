import { FlatList, Image, Text, TouchableOpacity, View, StyleSheet } from "react-native"

const PaymentItemComponent = ({image}) => {
    console.log("image: ". image)
    return (

        <TouchableOpacity style={styles.listPembayaran}>
            <Image source={image}/>
        </TouchableOpacity>
    )
}

const PaymentComponent = () => {
    const list = [
        require('../../assets/Telco.png'),
        require('../../assets/Pln.png'),
        require('../../assets/Pdam.png'),
        require('../../assets/School.png'),
    ]
    return (
        <View style={styles.sectionListPembayaran}>
            <Text style={styles.textListPembayaran}>List Pembayaran</Text>
            <FlatList 
                data={list} 
                numColumns={4}
                renderItem={({item}) => <PaymentItemComponent image={item}/>} />
        </View>
    )

    
}

const styles = StyleSheet.create({
    sectionListPembayaran:{
        marginTop: 24,
        marginLeft: 20,
        marginRight: 20,
    },

    listPembayaran:{
        width: '25%',
        alignItems: 'center',
    },
    textListPembayaran:{
        marginBottom:8,
        fontSize: 20,
        fontWeight:'600',
        color: '#852884',
    },
}
)



export default PaymentComponent