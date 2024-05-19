import { Stack } from "expo-router";
import { View } from "react-native-reanimated/lib/typescript/Animated";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
