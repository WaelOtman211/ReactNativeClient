import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, SafeAreaView, FlatList,ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ExpensesInsert from './ExpensesInsert';

const ExpensesDetails = ({ route, navigation }) => {
    const { expensesData } = route.params;
    const totalTracked = expensesData.expenses.reduce((acc, item) => acc + parseFloat(item.tracked), 0);
    const totalBudget = expensesData.expenses.reduce((acc, item) => acc + parseFloat(item.budget), 0);

    const renderItem = ({ item }) => (
        <View style={styles.row}>
            <Text style={styles.cell}>{item.budget}</Text>
            <Text style={styles.cell}>{item.tracked}</Text>
            <Text style={styles.cell}>{item.name}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <LinearGradient
                colors={['#C9F0DB', '#A0E6C3']}
                style={styles.gradientBackground}
                start={[0, 0]}
                end={[1, 1]}
            />
            <View style={styles.container}>
                <Text style={styles.header}>Expenses Details</Text>
                <View style={[styles.row, styles.headerRow]}>
                    <Text style={styles.headerCell}>Budget</Text>
                    <Text style={styles.headerCell}>Tracked</Text>
                    <Text style={styles.headerCell}>Expenses</Text>
                </View>
                <ScrollView>
                    <FlatList
                        data={expensesData.expenses}
                        keyExtractor={(item) => item._id}
                        renderItem={renderItem}
                        ListFooterComponent={() => (
                            <>
                                <View style={styles.line} />
                                <View style={styles.totalRow}>
                                    <Text style={[styles.cell, styles.totalCell]}>
                                        {totalBudget.toFixed(2)}
                                    </Text>
                                    <Text style={[styles.cell, styles.totalCell]}>
                                        {totalTracked.toFixed(2)}
                                    </Text>
                                    <Text style={[styles.cell, styles.totalCell]}>Total</Text>
                                </View>
                            </>
                        )}
                        style={{ height: 5 * 80 }} // Set height based on the number of items you want to display without scrolling
                    />
                </ScrollView>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => {
                        // Add navigation logic to navigate to the Expenses Report screen
                        // Example: navigation.navigate('ExpensesReport');
                    }}
                >
                    <Text style={styles.buttonText}>View Expenses Report</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,
        width: '100%',
    },
    gradientBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    container: {
        flex: 1,
        width: '90%',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#333333',
        textAlign: 'center',
    },
    headerRow: {
        backgroundColor: 'pink',
        borderBottomWidth: 2,
        borderBottomColor: '#CCCCCC',
        paddingVertical: 8,
    },
    headerCell: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
        alignSelf: 'center',
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
        paddingVertical: 12,
    },
    cell: {
        flex: 1,
        fontSize: 16,
        color: '#333333',
        alignSelf: 'center',
        textAlign: 'center',
    },
    line: {
        borderBottomWidth: 2,
        borderBottomColor: '#CCCCCC',
    }, 
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 2,
        borderBottomColor: '#CCCCCC',
        paddingVertical: 12,
        paddingHorizontal: 20,
    },
    totalCell: {
        fontWeight: 'bold',
    },
    buttonContainer: {
        marginBottom: 60,
    backgroundColor: "#E4F2F0",
    height: 50,
    width: '60%', // Adjust the width as needed
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
});

export default ExpensesDetails;
