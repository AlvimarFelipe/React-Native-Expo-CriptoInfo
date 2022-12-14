import React from "react";
import { Text, View, ScrollView,TouchableOpacity,Image} from 'react-native';
import { styles } from "./style";
import { NineMenu } from "../../partials/Menu/Menu";

export default function OQueE() {
    return (
        
        
      <View  style={styles.corpo}> 
        <View style={styles.inicio}>
          <Image source={require('../../../assets/logo.png')} style={styles.logo} />      
          <Text  style={styles.titulo1}>CriptoInfo</Text>
          <View style={styles.linha1}></View>
        </View>
        <NineMenu/>


        <ScrollView style={styles.container}>
                
            <Text style={styles.titulo}>O que é criptomoeda?{'\n'}</Text>
            <Text style={styles.conteudo}>
                As criptomoedas são moedas digitais descentralizadas, ou seja, que não são controladas por algum órgão ou país em específico.{'\n'}{'\n'}
                Elas são criadas em uma rede blockchain que é responsável por armazenar com segurança os mais diversos tipos de informações.{'\n'}{'\n'}
                Como, por exemplo, transações financeiras, registros e os dados de pessoas que participam dessas transações.{'\n'}{'\n'}

                Essas criptomoedas geradas no blockchain possuem um valor que, em alguns casos, pode ser convertido para outras moedas, como o dólar ou real, e, por isso, elas podem ser utilizadas como moeda de troca para compra de produtos e consumo de serviços.{'\n'}{'\n'}

                Com o crescimento da sua relevância, cada vez mais as empresas têm se interessado por receber criptomoedas como forma de pagamento. Mas a volatilidade é um ponto contra esse tipo de uso.{'\n'}
            </Text>
            <View style={styles.linha}></View>
            <Text style={styles.titulo}>Como funcionam as criptomoedas?{'\n'}</Text>
            <Text style={styles.conteudo}>
                Em primeiro lugar, é preciso entender que as criptomoedas são moedas virtuais, então não é possível fazer uma troca física.{'\n'}{'\n'}
                Essas criptomoedas surgem por meio de mineração feita no blockchain.{'\n'}{'\n'}
                E quem contribui para a criação dessa blockchain, acaba recebendo o pagamento em criptomoedas que passam a estar disponíveis para circulação. Elas são negociadas diretamente nas Exchanges e também via fundos de investimentos ou ETFs a partir de corretoras de investimentos, como Rico.{'\n'}
            </Text>

        </ScrollView>     
      </View>
 

    );
}