// screens/SettingsScreen.js
import React, { useContext } from "react";
import { View, Text, StyleSheet, Switch, StatusBar } from "react-native";
import ThemeContext from "../Theme/ThemeContext";

export default function SettingsScreen() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const backgroundColor = theme === "night" ? "#15202B" : "#ffffff";
  const textColor = theme === "night" ? "#ffffff" : "#15202B";
  const statusBarStyle = theme === "night" ? "light-content" : "dark-content";

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <StatusBar barStyle={statusBarStyle} backgroundColor={backgroundColor} />
      {[
        "Language",
        "My Profile",
        "Contact Us",
        "Change Password",
        "Privacy Policy",
      ].map((setting, index) => (
        <View key={index} style={styles.settingContainer}>
          <Text style={[styles.setting, { color: textColor }]}>{setting}</Text>
          <View style={styles.line} />
        </View>
      ))}
      <View style={styles.themeContainer}>
        <Text style={[styles.theme, { color: textColor }]}>Theme</Text>
        <Switch
          value={theme === "night"}
          onValueChange={toggleTheme}
          trackColor={{ true: "lemongreen", false: "#81b0ff" }}
          thumbColor={theme === "night" ? "lemongreen" : "#f7f7f7"}
          style={{ transform: [{ scale: 1.2 }] }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  settingContainer: {
    marginBottom: 20,
  },
  setting: {
    fontSize: 18,
    marginBottom: 10,
  },
  line: {
    height: 1,
    backgroundColor: "#ccc",
  },
  themeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  theme: {
    fontSize: 21,
    fontWeight: "bold",
  },
});
