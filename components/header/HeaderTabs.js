import { TouchableOpacity, SafeAreaView, StyleSheet, View, handleSearch, Text } from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/auth";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Modal from "react-native-modal";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoanDetails from "../../screens/LoanDetails";
 
import { useNavigation } from '@react-navigation/native';
const Stack = createNativeStackNavigator();


const HeaderTabs = () => {
    
    const navigation = useNavigation();

    const handlePageSelection = (page) => {
        // Implement navigation or logic for the selected page here
        if(page==="Expenses")
        navigation.navigate("ExpensesInsert");

        if(page==="Loan Details")
        navigation.navigate("LoanDetails");
    
        if(page==="Incomes")
        navigation.navigate("IncomesInsert");
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

 

          
            <TouchableOpacity onPress={toggleModal}>
                <FontAwesome5 name="list" style={styles.iconText} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSearch}>
                <FontAwesome5 name="search" style={styles.iconText} />
            </TouchableOpacity>

            {/* Suggested Pages Modal */}
            <Modal isVisible={isModalVisible} animationIn="slideInLeft" animationOut="slideOutLeft" style={styles.modal}>
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      <View style={styles.modalTitleContainer}>
        <Text style={styles.modalTitle}>Suggested Pages</Text>
      </View>
      <TouchableOpacity onPress={() => handlePageSelection("Loan Details")} style={styles.pageItem}>
        <FontAwesome5 name="file-invoice" style={styles.pageIcon} />
        <View style={styles.pageTextContainer}>
          <Text style={styles.pageText}>Loan Details</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePageSelection("Expenses")} style={styles.pageItem}>
        <FontAwesome5 name="dollar-sign" style={styles.pageIcon} />
        <View style={styles.pageTextContainer}>
          <Text style={styles.pageText}>Expenses</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePageSelection("Incomes")} style={styles.pageItem}>
        <FontAwesome5 name="money-bill" style={styles.pageIcon} />
        <View style={styles.pageTextContainer}>
          <Text style={styles.pageText}>Incomes</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleModal} style={styles.cancelItem}>
        <Text style={styles.cancelText}>Cancel</Text>
      </TouchableOpacity>
    </View>
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
        flex: 1,
        justifyContent: 'flex-end',
        margin: 0,
      },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    modalItem: {
      fontSize: 16,
      marginBottom: 10,
      color: "#333",
    },
    modal: {
        margin: 0,
      },
    modalContent: {
        backgroundColor: 'white',
    height: '100%',
    width: '80%', // Adjust the width as needed
    alignSelf: 'center', // Center the modal horizontally
    justifyContent: 'center', // Center the content vertically
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 20,
    alignItems: 'flex-start', // Align content to the left
      },
      modalTitleContainer: {
        width: '100%', // Set the width to take the entire space
      },
      pageTextContainer: {
        flex: 1,
      },
      pageItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
      },
      pageIcon: {
        color: '#3498db',
    fontSize: 20,
    marginRight: 10,
      },
      pageText: {
        fontSize: 18,
    color: '#333',
      },
      cancelItem: {
        marginTop: 'auto', // Push Cancel to the bottom
      },
      cancelText: {
        fontSize: 18,
        color: 'red',
      },
  });
  export default HeaderTabs;
