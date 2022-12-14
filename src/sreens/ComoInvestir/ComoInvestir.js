import React from "react";
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { styles } from "./style";
import { NineMenu } from "../../partials/Menu/Menu";

export default function ComoInvestir() {
  return (

    <View style={styles.corpo}>
      <View style={styles.inicio}>
        <Image source={require('../../../assets/logo.png')} style={styles.logo} />  
        <Text style={styles.titulo1}>CriptoInfo</Text>
        <View style={styles.linha1}></View>
      </View>
      <NineMenu />
      <ScrollView style={styles.container}>
        <Text style={styles.titulo}>Como investir?{'\n'}</Text>
        <Text style={styles.conteudo}>
          De acordo com a Consumer Reports, todos os investimentos representam risco, mas alguns especialistas consideram a criptomoeda uma das escolhas mais arriscadas do mercado. Se estiver planejando investir em criptomoeda, estas dicas poderão ajudar você a fazer escolhas mais criteriosas.{'\n'}
        </Text>
        <View style={styles.linha}></View>
        <Text style={styles.subtitulo}>Pesquise as moedas:{'\n'}</Text>
        <Text style={styles.conteudo}>
          Antes de investir qualquer centavo, saiba mais sobre as cotações de criptomoeda. Estima-se que haja mais de 500 moedas à escolha. Faça uma pesquisa, leia as avaliações e fale com investidores mais experientes, antes de prosseguir.{'\n'}
        </Text>
        <View style={styles.linha}></View>
        <Text style={styles.subtitulo}>Saiba como armazenar suas moedas digitais:{'\n'}</Text>
        <Text style={styles.conteudo}>
          Se você comprar criptomoeda, precisará armazená-la. Você pode mantê-la em uma casa de câmbio ou em uma carteira digital. Embora existam muitos tipos diferentes de carteiras, cada uma tem suas próprias vantagens, requisitos técnicos e segurança. Assim como as bolsas de valores, você deve investigar suas opções de armazenamento antes de investir.{'\n'}
        </Text>
        <View style={styles.linha}></View>
        <Text style={styles.subtitulo}>Diversifique os investimentos:{'\n'}</Text>
        <Text style={styles.conteudo}>
          A diversificação é o segredo para qualquer boa estratégia de investimento, e isso vale também para quem quer investir em criptomoeda. Não coloque todo o seu dinheiro em bitcoins, por exemplo, só porque já ouviu falar nesse nome. Há milhares de opções, e o melhor é distribuir seus investimentos em várias moedas.{'\n'}
        </Text>
        <View style={styles.linha}></View>
        <Text style={styles.subtitulo}>Prepare-se para a volatilidade:{'\n'}</Text>
        <Text style={styles.conteudo}>
          O mercado de criptomoedas é volátil, então, prepare-se para enfrentar altos e baixos. Você verá alterações drásticas nos preços. Se a sua carteira de investimentos ou seu bem-estar mental não suportam bem esse estilo de transação, as criptomoedas podem não ser uma boa opção para você.{'\n'}{'\n'}
          A criptomoeda está em alta, mas lembre-se: esse é um modelo que ainda está engatinhando e é considerado altamente especulativo. Investir em algo novo traz muitos desafios, por isso, prepare-se. Se você pretende entrar nessa, comece fazendo uma pesquisa e invista de maneira conservadora.{'\n'}{'\n'}
          Uma das melhores maneiras de manter a proteção online é usar um antivírus de alta qualidade. Recomendamos o Kaspersky Internet Security, que protege você contra todas as infecções de malware, spyware e roubo de identidades, além de proteger suas transações online, graças ao uso de criptografia de nível bancário.{'\n'}{'\n'}
        </Text>
      </ScrollView>
    </View>


  );
}