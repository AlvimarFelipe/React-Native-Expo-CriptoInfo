import React, { useState,useEffect } from "react";
import { Text, View, TouchableOpacity,Alert  } from 'react-native';
import { styles,Image,Titulo } from "./style";
import { Button, ButtonText} from "../../sreens/Home/style";

import { useNavigation } from '@react-navigation/native';
// useEffect(() => {
//     setPets(false);
//     fetchData(userid);
//   }, [isFocused, userid]);





export const CardNoticia = ({id,url,titulo,noticia}) => {
    const navigation = useNavigation();
        return (
            <View style={styles.container} >   
                <Image source={{uri: url}}/>
                <View style={styles.notice}>
                    <Titulo>{titulo}</Titulo>
                    <Text style={styles.conteudo}>{noticia}</Text>
                </View>
                <View style={styles.btns}>
                    <Button onPress={() =>  navigation.navigate('EditarNoticia',{id})}>
                        <ButtonText>Editar Notícia</ButtonText>
                    </Button>
                
                    </View>
                <View style={styles.linha}></View>

            </View>
    
    
        );
    
}
// var tipo="todos"

// const [infonot,setinfoNot] = useState({});
//     const fetchData = (id) => {
//     fetch( 'https://api-mobile-criptoinfo.alvimarfelipe.repl.co/getNoticia?tipo=todos')
//     .then(res => res.json())
//     .then((results)=>{
//         noticias;
//         for (let i = 0; i < results.length; i++) {
//             noticias.push(results[i]);
//         }
//         setinfoNot(noticias);
//         console.log(noticias);} )
//     .catch((error)=> console.log(error))
// };