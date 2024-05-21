import { useRoute } from "@react-navigation/native";
import React from "react";
import { StatusBar, View } from "react-native";

import TweetContent from "../../components/TweetContent";

const TweetDetailScreen = () => {
  const {
    params: { tweet }
  } = useRoute();
  return (
    <View testID="TweetDetailScreen" className="flex-1">
      <StatusBar barStyle={"light-content"} />
      <TweetContent tweet={tweet} />
    </View>
  );
};

export default TweetDetailScreen;
