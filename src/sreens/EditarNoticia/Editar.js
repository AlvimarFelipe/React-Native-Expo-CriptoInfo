
import React, { useState,useEffect } from "react";
import { Text, View, ScrollView,TextInput ,Image,TouchableOpacity,Alert} from 'react-native';
import { styles,ButtonDelete } from "./style";
import { NineMenu } from "../../partials/Menu/Menu";
import { Button, ButtonText} from "../../sreens/Home/style";


export default function EditarNoticia(props) {

  console.log(props)
  const id = props.route.params.id;

  const [Noticia, setNoticia] = useState(false);
  const [Titulo, setTitulo] = useState('');
  const [MSGNoticia, setMSGNoticia] = useState('');
  const [Url, setUrl] = useState('');
  const [Type, setType] = useState('');


  const fetchEditNoticia = (id) => {
  fetch('https://Api-Mobile-CriptoInfo.alvimarfelipe.repl.co/oneNoticia?id=' + id)
    .then((res) => res.json())
    .then((results) => {     
      setNoticia(results[0])
      setTitulo(results[0].titulo)
      setMSGNoticia(results[0].noticia)
      setUrl(results[0].urlimg)
      setType(results[0].tipo)        

    })
    .catch((err) => {
      Alert.alert('Algo deu errado!');
    });
  };


 
  function UpdateInfo() {
    if (Titulo != '' && MSGNoticia != '' && Url != '' && Type != ''  ){
      fetch('https://Api-Mobile-CriptoInfo.alvimarfelipe.repl.co/updateNoticia', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'PUT',
        body: JSON.stringify({
          id: id,
          titulo:Titulo,
          noticia: MSGNoticia,
          urlimg: Url,
          tipo: Type

      
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

  function deleteNoticia(id) {

    fetch('https://Api-Mobile-CriptoInfo.alvimarfelipe.repl.co/deletNoticia?id=' + id, {
    
        method: 'DELETE', 
          
    })
      .then((res) => res.text())
      .then((results) => {
        console.log(results)
        props.navigation.navigate('Home');
     
       
      })
      .catch((err) => {
        console.log(err)
        Alert.alert('Algo deu errado!');
      });
  };



  useEffect(() => {
    fetchEditNoticia(id);
  }, [id]);

    return (
      <View  style={styles.corpo}>
        <View style={styles.inicio}>
                <Image source={require('../../../assets/logo.png')} style={styles.logo} />
                <Text  style={styles.titulo1}>CriptoInfo</Text>
                <View style={styles.linha1}></View>
        </View>
        <NineMenu/>

        <ScrollView style={styles.container}>
            <View style={styles.ajuda}>
              <Text style={styles.titulo}>Editar Notícia</Text>              
    
              {Noticia && 
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
              }

              <View  style={styles.botaoContainer}>
                <Button onPress={() =>  props.navigation.navigate('Home')} style={styles.button}><ButtonText>Voltar</ButtonText></Button>
                <Button onPress={() =>  UpdateInfo()} style={styles.button}><ButtonText>Enviar</ButtonText></Button>
              </View>
              <ButtonDelete  onPress={() => deleteNoticia(id)} ><ButtonText>Excluir Notícia</ButtonText></ButtonDelete>
            </View>
        </ScrollView>
      </View>


    );
}

