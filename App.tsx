import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { SettingsView } from "./src/views/SettingsView";
import { TopView } from "./src/views/TopView";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Top">
        <Stack.Screen component={TopView} name="Top" />
        <Stack.Screen component={SettingsView} name="Settings" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
