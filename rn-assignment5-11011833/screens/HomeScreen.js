import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import ThemeContext from "../Theme/ThemeContext";

const transactions = [
  {
    id: "3",
    amount: "- $5.99",
    description: "Apple Store",
    subDescription: "Entertainment",
    icon: require("../assets/apple.png"),
  },
  {
    id: "4",
    amount: "- $12.99",
    description: "Spotify",
    subDescription: "Music",
    icon: require("../assets/spotify.png"),
  },
  {
    id: "1",
    amount: "$300",
    description: "Money Transfer",
    subDescription: "Transaction",
    icon: require("../assets/moneyTransfer.png"),
  },
  {
    id: "2",
    amount: "- $88",
    description: "Grocery Shopping",
    subDescription: "Shopping",
    icon: require("../assets/grocery.png"),
  },
];

export default function HomeScreen() {
  const { theme } = useContext(ThemeContext);

  const backgroundColor = theme === "night" ? "#15202B" : "#ffffff";
  const textColor = theme === "night" ? "#ffffff" : "#15202B";
  const statusBarStyle = theme === "night" ? "light-content" : "dark-content";

  return (
    <ScrollView style={[styles.container, { backgroundColor }]}>
      <StatusBar barStyle={statusBarStyle} backgroundColor={backgroundColor} />
      <View style={styles.header}>
        <Image
          source={require("../assets/profile.png")}
          style={styles.profileImage}
        />
        <View style={styles.welcomeContainer}>
          <View>
            <Text style={[styles.welcome, { color: textColor }]}>
              Welcome back,
            </Text>
            <Text style={[styles.username, { color: textColor }]}>
              Eric Atsu
            </Text>
          </View>
        </View>
        <Image
          source={require("../assets/search.png")}
          style={styles.searchIcon}
        />
      </View>
      <Image source={require("../assets/Card.png")} style={styles.cardImage} />
      <View style={styles.iconContainer}>
        <View style={styles.iconItem}>
          <View style={styles.iconCircle}>
            <Image source={require("../assets/send.png")} style={styles.icon} />
          </View>
          <Text style={[styles.iconText, { color: textColor }]}>Sent</Text>
        </View>
        <View style={styles.iconItem}>
          <View style={styles.iconCircle}>
            <Image
              source={require("../assets/recieve.png")}
              style={styles.icon}
            />
          </View>
          <Text style={[styles.iconText, { color: textColor }]}>Receive</Text>
        </View>
        <View style={styles.iconItem}>
          <View style={styles.iconCircle}>
            <Image source={require("../assets/loan.png")} style={styles.icon} />
          </View>
          <Text style={[styles.iconText, { color: textColor }]}>Loan</Text>
        </View>
        <View style={styles.iconItem}>
          <View style={styles.iconCircle}>
            <Image
              source={require("../assets/topUp.png")}
              style={styles.icon}
            />
          </View>
          <Text style={[styles.iconText, { color: textColor }]}>Topup</Text>
        </View>
      </View>
      <View style={styles.transactionsContainer}>
        <View style={styles.transactionsHeader}>
          <Text style={[styles.transactionsTitle, { color: textColor }]}>
            Transaction
          </Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
  data={transactions}
  renderItem={({ item }) => (
    <View key={item.id} style={styles.transactionItem}>
      <Image source={item.icon} style={styles.transactionIcon} />
      <View style={styles.transactionDetails}>
        <Text style={[styles.transactionDescription, { color: textColor }]}>
          {item.description}
        </Text>
        <Text style={[styles.transactionSubDescription, { color: textColor }]}>
          {item.subDescription}
        </Text>
      </View>
      <Text style={[
        styles.transactionAmount,
        { color: item.amount === "$300" && theme === "night" ? "#1E90FF" : "#ffffff" }
      ]}>
        {item.amount}
      </Text>
    </View>
  )}
  keyExtractor={(item) => item.id}
/>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  welcomeContainer: {
    flex: 1,
    marginLeft: 10,
  },
  welcome: {
    fontSize: 16,
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
  },
  searchIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    width: "100%",
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  iconItem: {
    alignItems: "center",
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  icon: {
    width: 30,
    height: 30,
  },
  iconText: {
    fontSize: 12,
  },
  transactionsContainer: {
    marginTop: 20,
  },
  transactionsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  transactionsTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  seeAll: {
    fontSize: 14,
    color: "#1E90FF",
  },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 1.1,
    borderBottomColor: "#ccc",
  },
  transactionIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionDescription: {
    fontSize: 16,
    fontWeight: "bold",
  },
  transactionSubDescription: {
    fontSize: 14,
    color: "#888",
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
