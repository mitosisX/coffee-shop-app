import { View, Text, StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import OrderHistoryScreen from "../Screens/OrderHistoryScreen";
import FavouritesScreen from "../Screens/FavouritesScreen";
import CartScreen from "../Screens/CartScreen";
import { Colors } from "../../theme/theme";

const Tab = createMaterialBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator
      activeColor="#307DE1"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: (color, size) => (
            <FontAwesome name="home" size={24} color={"black"} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: (color, size) => (
            <FontAwesome name="shopping-cart" size={24} color={"black"} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          tabBarIcon: (color, size) => (
            <FontAwesome name="bookmark" size={24} color={"black"} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="History"
        component={OrderHistoryScreen}
        options={{
          tabBarIcon: (color, size) => (
            <FontAwesome name="bell" size={24} color={"black"} />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: "absolute",
    backgroundColor: Colors.primaryBlackRGBA,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: "transparent",
  },
  BlurViewStyles: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
