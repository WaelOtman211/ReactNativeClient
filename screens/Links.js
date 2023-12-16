import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import FooterList from "../components/footer/FooterList";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SavingsPage = () => {
  const [savingsAmount, setSavingsAmount] = useState(200000);
  const [goals, setGoals] = useState([
    { id: '1', title: 'Buy a Car', amount: 10000, transferAmount: '' },
    { id: '2', title: 'Travel the World', amount: 20000, transferAmount: '' },
    { id: '3', title: 'Save for Retirement', amount: 30000, transferAmount: '' },
  ]);
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const transferFunds = (goalId) => {
    // Find the selected goal
    const selectedGoal = goals.find(goal => goal.id === goalId);

    // Validate transfer amount
    if (!selectedGoal.transferAmount || isNaN(selectedGoal.transferAmount)) {
      setErrorMessage('Please enter a valid transfer amount.');
      return;
    }

    // Convert transfer amount to number
    const transferAmountNumber = parseFloat(selectedGoal.transferAmount);

    // Validate if transfer amount is greater than available savings
    if (transferAmountNumber > savingsAmount) {
      setErrorMessage('Insufficient savings amount for transfer.');
      return;
    }

    // Update the savings amount and goal amount
    setSavingsAmount(prevAmount => prevAmount - transferAmountNumber);
    
    setGoals(prevGoals => {
      return prevGoals.map(goal => {
        if (goal.id === goalId) {
          goal.amount += transferAmountNumber;
          goal.transferAmount = '';
        }
        return goal;
      });
    });

    // Reset error message
    setErrorMessage('');
  };

  const renderGoalItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.goalItem, selectedGoal === item.id && styles.selectedGoalItem]}
      onPress={() => setSelectedGoal(item.id)}
    >
      <Text style={styles.goalTitle}>{item.title}</Text>
      <Text style={styles.goalAmount}>Goal Amount: ${item.amount}</Text>
      <TextInput
        style={styles.transferInput}
        placeholder="Enter Transfer Amount"
        placeholderTextColor="#999999"
        value={item.transferAmount}
        onChangeText={text => {
          setGoals(prevGoals => {
            const updatedGoals = prevGoals.map(goal => {
              if (goal.id === item.id) {
                return { ...goal, transferAmount: text };
              }
              return goal;
            });
            return updatedGoals;
          });
        }}
        keyboardType="numeric"
      />
    </TouchableOpacity>
  );

  return (
   
      <SafeAreaView style={styles.container}>
        <View style={styles.containerr}>
          <LinearGradient
            colors={['#C9F0DB', '#A0E6C3']}
            style={styles.background}
            start={[0, 0]}
            end={[1, 1]}
          />
 <KeyboardAwareScrollView>
          <Text style={styles.header}>Savings Management</Text>

          <Text style={styles.savingsAmount}>Savings Amount: ${savingsAmount}</Text>

          <Text style={styles.goalsTitle}>Goals List:</Text>

        
            <View style={styles.goalList}>
              <FlatList
                data={goals}
                renderItem={renderGoalItem}
                keyExtractor={item => item.id}
              />
            </View>
       

          {errorMessage ? (
            <Text style={styles.errorMessage}>{errorMessage}</Text>
          ) : null}

          <TouchableOpacity
            style={styles.transferButton}
            onPress={() => transferFunds(selectedGoal)}
          >
            <Text style={styles.transferButtonText}>Transfer</Text>
          </TouchableOpacity>
          </KeyboardAwareScrollView>
        </View>
        <FooterList />
      </SafeAreaView>
   
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'space-between' },
  containerr: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF',
  },
  savingsAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF',
  },
  goalsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFFFFF',
  },
  goalList: {
    paddingBottom: 20,
  },
  goalItem: {
    backgroundColor: '#D3F1E1',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  selectedGoalItem: {
    backgroundColor: '#A0D9BB',
  },
  goalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  goalAmount: {
    fontSize: 16,
    color: '#666666',
    marginTop: 5,
  },
  transferInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 10,
    fontSize: 16,
    color: '#333333',
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },
  transferButton: {
    backgroundColor: '#A0D9BB',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  transferButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorMessage: {
    color: 'red',
    marginBottom: 10,
  },
});

export default SavingsPage;



