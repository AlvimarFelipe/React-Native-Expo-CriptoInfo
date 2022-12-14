import React from "react";
import { Text, View, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import { styles } from "./style";
import { NineMenu } from "../../partials/Menu/Menu";
import { Button, ButtonText} from "../Home/style";

export default function Compra() {
  return (
    <View style={styles.corpo}>
      <View style={styles.inicio}>
        <Image source={require('../../../assets/logo.png')} style={styles.logo} />     
        <Text style={styles.titulo1}>CriptoInfo</Text>
        <View style={styles.linha1}></View>
      </View>
      <NineMenu />
      <ScrollView style={styles.container}>
        <View style={styles.ajuda}>
          <Text style={styles.titulo}>Compre aqui a sua criptomoeda{'\n'}</Text>
          <View style={styles.quests}>
            <Text style={styles.quest}>Qual moeda você gostaria de comprar?</Text>
            <TextInput style={styles.input} placeholder="Moeda" />

            <Text style={styles.quest}>Quanto você quer comprar?</Text>
            <TextInput style={styles.input} placeholder="Valor" keyboardType="numeric" />
            <Text style={styles.quest}>Selecione a forma de pagamento</Text>
            <TextInput style={styles.input} placeholder="Forma de Pagamento"  />


            <Text style={styles.quest}>Você vai pagar:</Text>
            <View style={styles.center}>
              <Text style={styles.output} >R$ 500,00</Text>
            </View>
      
            <Button>
            <ButtonText>Comprar</ButtonText>
          </Button>
          </View>
      
        </View>

       
      </ScrollView>
    </View>
  );
}