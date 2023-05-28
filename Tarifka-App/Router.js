import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Categories from "./pages/Categories";
import Meals from "./pages/Meals";
import Detail from "./pages/Detail";

const Stack = createNativeStackNavigator();


const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="CategoriesPage" 
                    component={Categories} 
                    options={{
                        title: 'Categories' , 
                        headerStyle: {backgroundColor: '#E07445'},
                        headerTitleStyle: {color: 'white'},
                     }} 
                />
                <Stack.Screen 
                    name="MealsPage" 
                    component={Meals} 
                    options={{
                        title: 'Meals' , 
                        headerStyle: {backgroundColor: '#E07445'},
                        headerTitleStyle: {color: 'white'},
                        headerTitleAlign: 'center', 
                        headerTintColor: 'white' ,                
                     }} 
                />
                <Stack.Screen 
                    name="DetailPage" 
                    component={Detail}
                    options={{
                        title: 'Detail' , 
                        headerStyle: {backgroundColor: '#E07445'},
                        headerTitleStyle: {color: 'white'},
                        headerTitleAlign: 'center', 
                        headerTintColor: 'white' ,  
                     }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;
