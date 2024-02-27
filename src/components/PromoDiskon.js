import { FlatList, Image, Text, TouchableOpacity, View, StyleSheet } from "react-native"

const PromoItemComponent = ({image}) => {
    console.log("image: ". image)
    return (

        <TouchableOpacity style={styles.listPembayaran}>
            <Image source={image}/>
        </TouchableOpacity>
    )
}

const PromoDiskon = () => {
    const list = [
        require('../../assets/Card1.png'),
        require('../../assets/Card2.png'),
    ]
    return (
        <View style={styles.sectionPromoDiskon}>
            <View style={styles.textPromoHead}>
            <Text style={styles.textPromoDiskon}>Promo dan Diskon</Text>
            <Text style={styles.textLihatSemua}>Lihat Semua</Text>
            </View>
            <FlatList 

                horizontal= {true}
                data={list} 
                // numColumns={4}
                renderItem={({item}) => <PromoItemComponent image={item}/>} />
        </View>
    )

    
}

const styles = StyleSheet.create({
    textPromoHead:{
        flexDirection:'row',
    },
    sectionListPembayaran:{
        marginTop: 24,
        marginLeft: 20,
        marginRight: 20,
    },

    listPembayaran:{
        marginHorizontal: 8,
        alignItems: 'center'
    },
    textListPembayaran:{
        marginBottom:12,
        fontSize: 20,
        fontWeight:'600',
        color: '#852884',
    },
}
)



export default PromoDiskon