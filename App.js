/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import * as Font from 'expo-font';

// screens
import { Home, ItemDetail } from "./screens/";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};

const Stack = createStackNavigator();

const App = () => {

    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        // Load the custom font asynchronously
        const loadFont = async () => {
          await Font.loadAsync({
            'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
            'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
            'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
            // Add more custom fonts here if needed
          });
          setFontLoaded(true);
        };
    
        loadFont();
      }, []);

      if (!fontLoaded) {
        // Return a loading screen or null while the font is loading
        return null;
      }

    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Home'}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="ItemDetail" component={ItemDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default () => {
    return <App />;
};
