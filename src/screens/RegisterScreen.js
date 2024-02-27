import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PhoneNumberInput from '../components/PhoneNumberInput';

const RegisterScreen = ({ navigation }) => {
  const handlePhoneNumberSubmit = (phoneNumber) => {
    // Handle submission of phone number, e.g., send it to backend or perform validation
    console.log('Submitted phone number:', phoneNumber);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Ini REGISTER yaw</Text>
      </View>
      <View style={styles.phoneNumberContainer}>
        <Text style={styles.phoneNumberLabel}>Masukkan Nomor Telepon:</Text>
        <PhoneNumberInput onSubmit={handlePhoneNumberSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginTop: 90,
  },
  phoneNumberContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  phoneNumberLabel: {
    marginBottom: 10,
    fontSize: 16,
  },
});

export default RegisterScreen;