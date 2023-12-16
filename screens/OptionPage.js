import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React, { useState, useContext } from 'react'
import FooterList from "../components/footer/FooterList";
import { LinearGradient } from 'expo-linear-gradient';

const OptionPage = ({ navigation }) => {

  const handleGoals = async () => {
    navigation.navigate("GoalManagement");
  };
  const handelSavings = async () => {
    navigation.navigate("Links");
  };
  const handleInvestment = async () => {
    navigation.navigate("InvestmentPage");
  };
  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.containerr}>
        <LinearGradient
          colors={['#C9F0DB', '#A0E6C3']}
          style={styles.background}
          start={[0, 0]}
          end={[1, 1]}
        />
        <View style={styles.container}>
          <View style={styles.content}>
            <View style={styles.circle2} />
            <View style={styles.circle1} />
            <Text style={styles.title}>Spend</Text>
            <Text style={styles.subtitle}>Smart</Text>

          </View>
          <View style={styles.buttonContainerStyle}>
            <Text style={styles.selectOptionText}>Select An Option</Text>

            <TouchableOpacity onPress={handelSavings} style={styles.buttonStyle}>
              <Text style={styles.buttonText}>View Saving's</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleGoals} style={styles.buttonStyle}>
              <Text style={styles.buttonText}>Manage Goals</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleInvestment} style={styles.buttonStyle}>
              <Text style={styles.buttonText}>Manage Investment</Text>
            </TouchableOpacity>

          </View>
        </View>

      </View>
      <FooterList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: { flex: 1, justifyContent: 'space-between' },
  containerr: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },

  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: 40,
    color: 'black',
    top: 98,
    right: 12,
  },
  subtitle: {
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: 64,
    color: 'black',
    top: 78,
    right: 185,
  },
  selectOptionText: {
    fontSize: 24,
    fontWeight: 'bold',
   
    color: 'black',
    marginBottom: 40,
  },
  circle1: {
    position: 'absolute',
    top: -135,
    right: 170,
    width: 436,
    height: 429,
    borderRadius: 430 / 2,
    backgroundColor: "#8FE388",
  },
  circle2: {
    position: 'absolute',
    top: -112,
    right: -60,
    width: 310,
    height: 310,
    borderRadius: 310 / 2,
    backgroundColor: "#67C28D",
  },
  buttonContainerStyle: {
    alignItems: 'center',
    top: -112,
    marginBottom: -30,

  },
  buttonStyle: {
    marginBottom: 15,
    backgroundColor: "#E4F2F0",
    height: 50,
    width: 300,
    justifyContent: "center",
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

});

export default OptionPage;
