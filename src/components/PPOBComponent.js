import { FlatList, Image, Text, TouchableOpacity, View, StyleSheet } from "react-native"
import { useState,useEffect } from 'react';
import axios from 'axios';

const PPOBItemComponent = (image) => {
    console.log("image: ", image)
    return (

        <TouchableOpacity style={styles.listPembayaran}>
            <Image style={styles.listPembayaranImage} source={{
          uri:image,
        }}/>
        </TouchableOpacity>
    )
}

const PPOBComponent = () => {
    const [PPOB, setPPOB] = useState()

    useEffect(() => {
    
        getPPOB();
      
      }, []); 

    const getPPOB = () => {
      axios.get('https://private-anon-75f39ba77b-itodpbni.apiary-mock.com/menu/ppob')
      .then(response => {
        console.log("Respons ppob", response.data)
        setPPOB(response.data)  
      })
      .catch(error => console.error("Error", error))
    }

    
    return (
        <View style={styles.sectionListPembayaran}>
            <Text style={styles.textListPembayaran}>List Pembayaran</Text>
            <FlatList 
                data={PPOB && PPOB.list} 
                numColumns={4}
                renderItem={(data) => PPOBItemComponent(data.item.image)} />

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
    listPembayaranImage: {
        width: 79,
        height: 83
    }
}
)



export default PPOBComponent