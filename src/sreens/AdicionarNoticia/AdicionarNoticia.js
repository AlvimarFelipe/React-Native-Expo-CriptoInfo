
import React, { useState,useEffect } from "react";
import { Text, View, ScrollView,TextInput ,Image,TouchableOpacity,Alert} from 'react-native';
import { styles } from "./style";
import { NineMenu } from "../../partials/Menu/Menu";

import { Button, ButtonText} from "../../sreens/Home/style";

export default function AdicionarNoticia(props) {
  const [Titulo, setTitulo] = useState('');
  const [MSGNoticia, setMSGNoticia] = useState('');
  const [Url, setUrl] = useState('');
  const [Type, setType] = useState('');
  


  function addNotice() {
    if (Titulo != '' && MSGNoticia != '' && Url != '' && Type != ''  ){
      fetch('https://Api-Mobile-CriptoInfo.alvimarfelipe.repl.co/addNoticia', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          titulo:Titulo,
          noticia: MSGNoticia,
          urlimg: Url,
          tipo: Type.toUpperCase()      
        }),
      })
      .then((res) => {
        return res;
      })
      .then((res) => {
        props.navigation.navigate('Home');
      })
      .catch((err) => {
    
        Alert.alert('Algo deu errado');
      });
    }else{
        Alert.alert('Preencha todas as informações!');
    }
  } 


  return (
    <View  style={styles.corpo}>
      <View style={styles.inicio}>
              <Image source={require('../../../assets/logo.png')} style={styles.logo} />
              <Text  style={styles.titulo1}>CriptoInfo</Text>
              <View style={styles.linha1}></View>
      </View>
      <NineMenu/>

      <View style={styles.container}>
          <View style={styles.ajuda}>
            <Text style={styles.titulo}>Adicionar Notícia</Text>                         
              <View style={styles.quests}>
              <Text style={styles.quest}>Titulo da Notícia</Text>
              <TextInput style={styles.input} multiline={true} placeholder="Título..." value={Titulo}  onChangeText={setTitulo}/>
              <Text style={styles.quest} >Link de Imagem para a Notícia</Text>
              <TextInput style={styles.input} multiline={true} placeholder="URL..." value={Url} onChangeText={setUrl}/>
              <Text style={styles.quest}>Conteúdo da Notícia</Text>
              <TextInput style={styles.input} multiline={true} placeholder="Conteúdo..." value={MSGNoticia}   onChangeText={setMSGNoticia}/>
              <Text style={styles.quest}>Tipo de noticia : todas || BTC || ETH</Text>
              <TextInput style={styles.input2} placeholder="Tipo..."   value={Type} onChangeText={setType}/>
            </View>            

            <View  style={styles.botaoContainer}>
              <Button onPress={() =>  props.navigation.navigate('Home')} style={styles.button}><ButtonText>Voltar</ButtonText></Button> 
              <Button onPress={() =>  addNotice()} style={styles.button}><ButtonText>Enviar</ButtonText></Button> 
            </View>
          </View>
      </View>
    </View>


  );
}



