import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';

const PhoneNumberInput = ({ onSubmit }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handlePhoneNumberChange = (text) => {
    setPhoneNumber(text);
  };

//   const handleSubmit = async () => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       // Simulate network call or validation with timeout
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       // Perform validation
//       if (phoneNumber.length !== 13) {
//         throw new Error('Nomor telepon harus terdiri dari 13 karakter');
//       }

//       // Simulate success
//       resolve('Nomor telepon berhasil dikirim');
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

  const handleSubmit = (phoneNumber) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (phoneNumber === '0812345678') {
                //success condition
                resolve(true)
            } else { 
                //failed condition
                reject('')
            }
        }, 2000)
    })
};

//   const handlePressSubmit = async () => {
//     if (!isLoading) {
//       await handleSubmit();
//       if (error) {
//         Alert.alert('Error', error);
//       } else {
//         Alert.alert('Sukses', 'Nomor telepon berhasil dikirim');
//         onSubmit && onSubmit(phoneNumber); // Call the provided onSubmit prop if successful
//       }
//     }
//   };

const handlePressSubmit = async () => {
    try {
        setIsLoading(true)
        setResult(await validation(phoneNumber))
        Alert.alert('Sukses', 'Nomor telepon berhasil dikirim');
    } 
    catch (error) {
        Alert.alert('Gagal', 'Nomor telepon salah dikirim');

        setResult(null)
    } finally {
        setIsLoading(false)
    }
}


const handleDonePress = () => {
    Keyboard.dismiss();
  };

  useEffect(() => {
    if (error) {
      Alert.alert('Error', error);
    }
  }, [error]);

  return (
    <TouchableWithoutFeedback onPress={handleDonePress}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={handlePhoneNumberChange}
          value={phoneNumber}
          placeholder="Masukkan nomor telepon"
          keyboardType="phone-pad"
          returnKeyType="done"
          onSubmitEditing={handleDonePress}
          // Add aria-label for accessibility
          aria-label="Phone number input"
        />
        {isLoading && (
          <View style={styles.loading}>
            {/* Add your loading indicator here, e.g., ActivityIndicator */}
          </View>
        )}
        <Button title="Submit" onPress={handlePressSubmit} disabled={isLoading} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  loading: {
    marginBottom: 10,
  },
});

export default PhoneNumberInput;
