import React from "react";
import { Text, View, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import { styles } from "./style";
import { NineMenu } from "../../partials/Menu/Menu";
import { Button, ButtonText} from "../../sreens/Home/style";

export default function Ajuda() {
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
          <Text style={styles.titulo}>Como podemos ajudar?{'\n'}</Text>
          <View style={styles.quests}>
            <Text style={styles.tquests}>Escreva Sua Mensagem</Text>
            <Text style={styles.quest}>Digite seu Nome</Text>
            <TextInput style={styles.input} placeholder="Nome..." />
            <Text style={styles.quest}>Digite seu Email</Text>
            <TextInput style={styles.input} placeholder="E-mail..." keyboardType="email-address" />
            <Text style={styles.quest}>Digite um título para a mesagem</Text>
            <TextInput style={styles.input} placeholder="Título..." />
            <Text style={styles.quest}>Esceva a mensagem</Text>
            <TextInput style={styles.mensagem} multiline={true} placeholder="Mensagem..." />
            <Button>
            <ButtonText>Enviar</ButtonText>
          </Button>
          </View>
      
        </View>

        <View style={styles.flex}>
          <View style={styles.linha}></View>
          <Text style={styles.meio}>Perguntas frequentes{'\n'}</Text>
          <Text style={styles.subtitulo}>Como comprar criptomoedas?{'\n'}</Text>
          <Text style={styles.conteudo}>
            Basta selecionar a moeda desejada, na parte superior da página, e clicar na opção de compra, no canto inferior direito, você sera direcionado para outra pagina dai é so seguir os passos da compra.{'\n'}
          </Text>
          <View style={styles.linha}></View>
        </View>
      </ScrollView>
    </View>
  );
}