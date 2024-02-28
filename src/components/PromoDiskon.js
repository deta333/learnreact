import { FlatList, Image, Text, TouchableOpacity, View, StyleSheet } from "react-native"
import { useEffect, useState } from 'react';
import axios from 'axios';

const PromoItemComponent = (image) => {
    console.log("image: ", image)
    return (

        <TouchableOpacity style={styles.listPembayaran}>
            <Image style={styles.listPembayaranImage} source={{
          uri:image,
        }}/>
        </TouchableOpacity>
    )
}

const PromoDiskon = () => {
    const [Promo, setPromo] = useState()

    useEffect(() => {
    
        getPromo();
      
      }, []); 

      const getPromo = () => {
        axios.get('https://private-anon-75f39ba77b-itodpbni.apiary-mock.com/menu/promo')
        .then(response => {
          console.log("Respons Promo", response.data)
          setPromo(response.data)  
        })
        .catch(error => console.error("Error", error))
      }


    return (
        <View style={styles.sectionPromoDiskon}>
            <View style={styles.textPromoHead}>
                <Text style={styles.textPromoDiskon}>Promo dan Diskon</Text>
                <Text style={styles.textLihatSemua}>Lihat Semua</Text>
            </View>

            <FlatList 
                horizontal= {true}
                data={Promo && Promo.promos} 
                // numColumns={4}
                renderItem={(data) => PromoItemComponent(data.item.image)} />
        </View>
    )

    
}

const styles = StyleSheet.create({
    sectionPromoDiskon:{
        margin:20
    },
    textPromoDiskon:{

        fontSize: 20,
        fontWeight:'600',
        color: '#852884',
        flex:1,
    },
    textPromoHead:{
        flexDirection:'row',
        alignItems: 'center',
        // backgroundColor:'yellow',
        marginBottom:8,
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
    listPembayaranImage: {
        width: 330,
        height: 176
    }
}
)



export default PromoDiskon