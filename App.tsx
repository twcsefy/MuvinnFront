import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Muvinn from "./src/screens/Muvinn";
import CadastroImovel from "./src/screens/CadastroImovel";
import Listagem from "./src/screens/Listagem";

const Stack = createStackNavigator();

function App(): React.JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Muvinn' component={Muvinn}
                options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;