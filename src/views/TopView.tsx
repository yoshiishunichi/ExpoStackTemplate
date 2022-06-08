import { FC } from "react";
import { View, Text, Button } from "react-native";

import { CustomNavigationProps } from "../types";

export const TopView: FC<CustomNavigationProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Top</Text>
      <Button onPress={() => navigation.navigate("Settings")} title="to Settings" />
    </View>
  );
};
