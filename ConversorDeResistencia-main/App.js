import Menu from "./screens/Menu.js";
import ValorParaCor from "./screens/ValorParaCor.js";
import CorParaValor from "./screens/CorParaValor.js";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {

  const Pilha = createStackNavigator();

  return (
    <NavigationContainer>
      <Pilha.Navigator>
        <Pilha.Screen component={Menu} name="Menu"/>
        <Pilha.Screen component={CorParaValor} name="Cor Para Valor"/>
        <Pilha.Screen component={ValorParaCor} name="Valor Para Cor"/>
      </Pilha.Navigator>
    </NavigationContainer>
  );
}