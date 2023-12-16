import { TouchableOpacity, SafeAreaView, StyleSheet, View, handleSearch, Text } from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/auth";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Modal from "react-native-modal";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoanDetails from "../../screens/LoanDetails";

const Stack = createNativeStackNavigator();


const HeaderTabs = () => {
   
    const handlePageSelection = (page) => {
        // Implement navigation or logic for the selected page here
        if(page==="Loan Details")
        navigation.navigate("GoalManagement");
        toggleModal(); // Close the modal
    };
    const [isModalVisible, setModalVisible] = useState(false); // State for modal visibility

///navigation.navigate("LoanDetails");
    // Function to toggle the modal visibility
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    // Function to handle selecting a suggested page

    const Search = async () => {
        setState({ token: "", user: null });
        await AsyncStorage.removeItem("auth-rm");
    };
 
    return (
        <View style={styles.container}>

 

            {/* <Stack.Navigator>
            <Stack.Screen name="LoanDetails" component={LoanDetails}/> 
             </Stack.Navigator> */}
            <TouchableOpacity onPress={toggleModal}>
                <FontAwesome5 name="list" style={styles.iconText} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSearch}>
                <FontAwesome5 name="search" style={styles.iconText} />
            </TouchableOpacity>

            {/* Suggested Pages Modal */}
            <Modal isVisible={isModalVisible}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Suggested Pages:</Text>
                    <TouchableOpacity onPress={() => handlePageSelection("Loan Details")}>
                        <Text style={styles.modalItem}>Loan Details</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePageSelection("Expenses")}>
                        <Text style={styles.modalItem}>Expenses</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePageSelection("Incomes")}>
                        <Text style={styles.modalItem}>Incomes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={toggleModal}>
                        <Text style={styles.modalItem}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    iconText: {
      color: "#A0E6C3",
      fontSize: 25,
      textAlign: "center",
      marginHorizontal: 5,
      textTransform: "uppercase",
    },
    modalContainer: {
      backgroundColor: "white",
      borderRadius: 10,
      padding: 20,
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
    },
    modalItem: {
      fontSize: 16,
      marginBottom: 10,
      color: "#333",
    },
  });
export default HeaderTabs;