// App.js
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import MyCardsScreen from "./screens/MyCardsScreen";
import StatisticsScreen from "./screens/StatisticsScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { ThemeProvider } from "./Theme/ThemeContext";

const Tab = createBottomTabNavigator();

const getTabBarIcon = (route, focused) => {
  let iconSource;
  if (route.name === "Home") {
    iconSource = require("./assets/home.png");
  } else if (route.name === "My Cards") {
    iconSource = require("./assets/myCards.png");
  } else if (route.name === "Statistics") {
    iconSource = require("./assets/statictics.png");
  } else if (route.name === "Settings") {
    iconSource = require("./assets/settings.png");
  }
  return <Image source={iconSource} style={{ width: 25, height: 25 }} />;
};

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => getTabBarIcon(route, focused),
          })}
          tabBarOptions={{
            activeTintColor: "lightblue",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="My Cards" component={MyCardsScreen} />
          <Tab.Screen name="Statistics" component={StatisticsScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
