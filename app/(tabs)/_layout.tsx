import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "./feed";
import Index from "./settings";
import Notifications from "./notifications";
import { Image, Pressable } from "react-native";

const Tab = createBottomTabNavigator();

export default function RootLayout() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          headerLeft: () => (
            <>
              <Image
                source={require("../../assets/images/imad.jpeg")}
                className="w-8 h-8 rounded-full ml-5"
              />
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Index}
        // options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        // options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
