import React from "react";
import Home from './src/sreens/Home/Home';
import Ajuda from './src/sreens/Ajuda/Ajuda';
import Investir from './src/sreens/ComoInvestir/ComoInvestir';
import OQueE from './src/sreens/OQueE/OQueE';
import Venda from './src/sreens/Venda/Venda';
import Compra from './src/sreens/Compra/Compra';
import Adicionar from './src/sreens/AdicionarNoticia/AdicionarNoticia';
import EditarNoticia from './src/sreens/EditarNoticia/Editar';

import { StyleSheet, View } from 'react-native';



import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light_Italic,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black_Italic,
} from '@expo-google-fonts/montserrat';


const myOptions = {
  title: 'CriptoInfo',
  headerTintColor: 'white',

  headerStyle: {
    backgroundColor: '#FFBD59'
  },
};

const Stack = createStackNavigator();


function App() {
  return (
    <View style={styles.container}>
      <Stack.Navigator screenOptions={{ headerShown: false }} >  
        <Stack.Screen name="Home" component={Home} options={myOptions} />
        <Stack.Screen name="Ajuda" component={Ajuda} options={{ ...myOptions, title: 'Ajuda' }} />
        <Stack.Screen name="Investir" component={Investir} options={{ ...myOptions, title: 'Como Investir' }} />
        <Stack.Screen name="OQueE" component={OQueE} options={{ ...myOptions, title: 'O que é CriptMoeda?' }} />
        <Stack.Screen name="Adicionar" component={Adicionar} options={{ ...myOptions, title: 'Adicionar Noticia' }} />
        <Stack.Screen name="EditarNoticia" component={EditarNoticia} options={{ ...myOptions, title: 'Editar Noticia' }} />
        <Stack.Screen name="Venda" component={Venda} options={{ ...myOptions, title: 'Venda de Cripto' }} />
        <Stack.Screen name="Compra" component={Compra} options={{ ...myOptions, title: 'Compra de Cripto' }} />
      </Stack.Navigator>
    </View>
  );
}



export default () => {

  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light_Italic,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black_Italic,
  });
  if (!fontsLoaded) {
    return <></>;
  } else {
    return (
      <NavigationContainer>
        <App />
      </NavigationContainer>
    );
  }
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
});
