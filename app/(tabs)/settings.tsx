import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-red-50">
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href="/home">home index</Link>
    </View>
  );
}
