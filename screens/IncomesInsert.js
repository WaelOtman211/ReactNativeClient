import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import FooterList from "../components/footer/FooterList";
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome

const IncomesInsert = ({navigation}) => {
     
      const handleGoals = async () => {
        navigation.navigate("GoalManagement");
      };
      
      const handelSavings = async () => {
        navigation.navigate("Links");
      };
    
      return (
        <SafeAreaView style={styles.container}>
        <View style={styles.background}>
          <LinearGradient
            colors={['#C9F0DB', '#A0E6C3']}
            style={styles.gradientBackground}
            start={[0, 0]}
            end={[1, 1]}
          />
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Insert Your Incomes</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.label}>Income Name: </Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
            />
    
            <Text style={styles.label}>ِAmount:</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
            />
    
            <Text style={styles.label}>What percentage of your income do you want to use?:</Text>
            <View style={[styles.contentPrecntage, { alignSelf: 'flex-end' }]}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
            />
    </View>
            <TouchableOpacity onPress={handelSavings} style={styles.buttonStyle}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
    
            <TouchableOpacity onPress={handleGoals} style={styles.buttonStyle}>
              <Text style={styles.buttonText}>View Incomes</Text>
            </TouchableOpacity>
          </View>
    
          {/* "+" icon with circle background */}
          <TouchableOpacity style={styles.addButton}>
            <FontAwesome name="plus" style={styles.addIcon} />
          </TouchableOpacity>
        </View>
        <FooterList />
      </SafeAreaView>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,
      },
      gradientBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
      headerContainer: {
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 30,
      },
      header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
      },
      contentPrecntage: {
        width: '100%',
        maxWidth: 100, // Adjust the maximum width as needed
         
      },
      content: {
        width: '100%',
        maxWidth: 400, // Adjust the maximum width as needed
        paddingHorizontal: 20,
        

      },
      label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333333',
      },
      input: {
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
        fontSize: 16,
        color: '#333333',
        borderWidth: 1,
        borderColor: '#CCCCCC',
      },
      buttonStyle: {
        marginBottom: 15,
        backgroundColor: "#E4F2F0",
        height: 50,
        width: '50%', // Adjust the width as needed
        justifyContent: "center",
        alignSelf: 'center', // Center the button horizontally
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
      },
      buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
      },
      addButton: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        backgroundColor: 'green',
        borderRadius: 50,
        padding: 10,
      },
      addIcon: {
        color: 'white',
        fontSize: 20,
      },
    });
 
    
export default IncomesInsert;



