import { StackScreenProps } from "@react-navigation/stack";

export type StackParamList = {
  Settings: undefined;
  Top: undefined;
};

export type CustomNavigationProps = StackScreenProps<StackParamList, "Top" | "Settings">;
