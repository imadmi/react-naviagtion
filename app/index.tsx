import { Redirect } from "expo-router";
import { Text, View } from "react-native";

export default function Start() {
  return (
    <Redirect href='/feed'/>
  );
}
