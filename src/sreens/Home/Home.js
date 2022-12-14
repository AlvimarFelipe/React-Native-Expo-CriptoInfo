import React, { useState,useEffect } from "react";
import { Text, View, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import { NineMenu } from "../../partials/Menu/Menu";
import { CardNoticia } from "../../partials/CardNoticias/CardNoticia";
import { useIsFocused } from '@react-navigation/native';
import { BText,SellButton, BuyButton, styles } from "./style";





export default function Home(props) {

  const [noticias, setNoticias] = useState(false);
  const [tipo, setTipo] = useState("todas");

  const isFocused = useIsFocused();

  const fetchData = (tipo) => {
  
    fetch('https://Api-Mobile-CriptoInfo.alvimarfelipe.repl.co/getNoticia?tipo=' + tipo)
    .then((res) => res.json())
    .then((results) => {
      setNoticias(results)
    })
    .catch((err) => {
      Alert.alert('Algo deu errado!');
    });
  
};

  useEffect(() => {
    fetchData(tipo);
  }, [tipo,isFocused]);


  return (
    <>
      <View style={styles.corpo} >
        <View style={styles.inicio}>
          <Image source={require('../../../assets/logo.png')} style={styles.logo} />
          <Text style={styles.titulo1} >CriptoInfo</Text>
          <View style={styles.linha1}></View>
          <View style={styles.btns}>
            <TouchableOpacity  style={styles.botaoMenu}>
              <Text style={styles.btn} onPress={() => setTipo('todas')}>Todos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoMenu}>
              <Text style={styles.btn} onPress={() =>
                setTipo('BTC')
             }>Biticoin</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoMenu}>
              <Text style={styles.btn} onPress={() => setTipo('ETH')}>Ethereum</Text>
            </TouchableOpacity>
          </View>
        </View>
        <NineMenu />
        <ScrollView style={styles.container}>
            {noticias.length  > 0 ? (
               noticias.map((noticia) => (
      
                  <CardNoticia url={noticia.urlimg}
                  titulo={noticia.titulo}
                  noticia={noticia.noticia}
                  id={noticia.id}
                  key={noticia.id}
                />
              ))
            ): (
              <Text style={styles.desc} >Atualmente estamos sem notícias sobre este assunto!</Text>
      
            )}
          <View style={styles.footerbox}><Text style={styles.footer}>Por: Alvimar Felipe && GG</Text></View>
        </ScrollView>
      </View>
        <BuyButton onPress={() => props.navigation.navigate('Venda')}><BText>Vender -</BText></BuyButton>
        <SellButton onPress={() => props.navigation.navigate('Compra')}><BText>Comprar +</BText></SellButton>
    </>
  );
}





