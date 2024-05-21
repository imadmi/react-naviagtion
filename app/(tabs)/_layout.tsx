import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "./feed";
import Settings from "./settings";
import TweetDetailScreen from "./TweetDetailScreen";
import Notifications from "./notifications";
import { Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

// Drawer

const Drawer = createDrawerNavigator();

function DrawerGroup() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Feed" component={Tabs} />
      <Drawer.Screen name="Payment" component={Notifications} options={{ headerShown: true }}/>
    </Drawer.Navigator>
  );
}

// a state to save the current route name
let currentRouteName: string | undefined;

// Stack
const HomeStack = createNativeStackNavigator();

function StackScreens({ route }: { route: any }) {
  const navigation : any = useNavigation();

  currentRouteName = getFocusedRouteNameFromRoute(route);
  // console.log("currentRouteName: ", currentRouteName);
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen
        name="FeedScreen"
        component={Feed}
        options={{
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()}>
              <Image
                source={{
                  uri: "https://cdn.intra.42.fr/users/b88ad373d678b8eadcda9d36ea25f350/imimouni.jpg",
                }}
                className="w-8 h-8 rounded-full ml-2 mr-6"
              />
            </Pressable>
          ),
          presentation: "card",
          headerTitle: "Feed",
          headerShown: true,
          headerBackTitleVisible: false,
          headerRight: () => (
            <Pressable>
              <Ionicons name="ellipsis-horizontal" size={24} color="black" />
            </Pressable>
          ),
          animation: "ios",
        }}
      />
      <HomeStack.Screen
        name="TweetDetailScreen"
        component={TweetDetailScreen}
        options={{
          presentation: "card",
          headerTitle: "Tweet",
          headerShown: true,
          headerBackTitleVisible: false,
          headerRight: () => (
            <Pressable>
              <Ionicons name="ellipsis-horizontal" size={24} color="black" />
            </Pressable>
          ),
          headerLeft: () => (
            <Pressable onPress={() => navigation.navigate("FeedScreen")}>
              <Ionicons
                name="arrow-back"
                size={24}
                color="black"
                className="mr-6"
              />
            </Pressable>
          ),
          animation: "ios",
        }}
      />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;
          if (route.name === "Feed") {
            iconName = "home";
          } else if (route.name === "Settings") {
            iconName = "settings";
          } else if (route.name === "Notifications") {
            iconName = "notifications";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#1FA1F2",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Feed"
        component={StackScreens}
        options={{
          // headerShown: (currentRouteName === "TweetDetailScreen" || currentRouteName === undefined )  ? true : false,
          headerShown: false,
        }}
      />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export default function RootLayout() {
  return <DrawerGroup />;
}
