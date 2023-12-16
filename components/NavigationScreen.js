import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import GoalManagement from "../screens/GoalManagement";
import { AuthContext } from "../context/auth";
import HeaderTabs from "./header/HeaderTabs.js";
import Account from "../screens/Account";
import Links from "../screens/Links";
import LoanDetails from "../screens/LoanDetails";
import OptionPage from "../screens/OptionPage";
import InvestmentPage from "../screens/InvestmentPage";
import ExpensesInsert from "../screens/ExpensesInsert";
import IncomesInsert from "../screens/IncomesInsert";
import ExpensesDetailsPage from "../screens/ExpensesDetailsPage.js";

const Stack = createNativeStackNavigator();

const NavigationScreen = () => {
    const [state, setState] = useContext(AuthContext);
    const authenticated = state && state.token !== "" && state.user !== null;

    return (
        <Stack.Navigator initialRouteName="OptionPage">
            {authenticated ?
            (
                <>
              
                <Stack.Screen name="GoalManagement" component={GoalManagement}/>
                <Stack.Screen name="InvestmentPage" component={InvestmentPage}/>
                <Stack.Screen name="ExpensesDetailsPage" component={ExpensesDetailsPage}/>
                <Stack.Screen name="LoanDetails" component={LoanDetails}/>
                <Stack.Screen name="Links" component={Links}/>
                <Stack.Screen name="IncomesInsert" component={IncomesInsert}/>
                <Stack.Screen name="Account" component={Account}/>
                <Stack.Screen name="HeaderTabs" component={HeaderTabs}/>
                <Stack.Screen name="ExpensesInsert" component={ExpensesInsert}/>
                <Stack.Screen name="OptionPage" component={OptionPage} options={{ headerRight: () => <HeaderTabs /> }} /> 

                </>
                ):(
                    <>
                        <Stack.Screen name="SignUp" component={SignUp} />
                        <Stack.Screen name="SignIn" component={SignIn} />
                    </>
                )

            }
        </Stack.Navigator>
    )
}

export default NavigationScreen;