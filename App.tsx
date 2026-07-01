import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from '@react-native-vector-icons/ionicons';
import ScreenA from './screens/ScreenA';
import AddMeals from './screens/AddMeals';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
          }}
        >
          <Tab.Screen
            name="home"
            component={ScreenA}
            options={{
              title: 'Home',
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="add-meals"
            component={AddMeals}
            options={{
              title: 'Add',
              tabBarIcon: ({ color, size }) => (
                <Icon name="add-circle" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
