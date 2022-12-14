import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Image = styled.Image`
  width: 364px;
  height: 200px;
 
`;
export const Titulo = styled.Text`
  font-family: Montserrat_400Regular; 
  font-size:26px;
  color:#ddd;
  font-weight:bold;
 
`;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems:"center",
    justifyContent: "center",
    

  },
  notice:{
    maxWidth:350
  },
  conteudo:{
    fontSize:16,
    color:'#ddd',
    textAlign:'left'
  },
  linha:{
    backgroundColor:'#fff',
    height:2,
    width:'100%',
    margin:15
  },
  btn:{  
    backgroundColor:'#F56A6A',   
    marginHorizontal:20,
    marginTop:15,
    borderRadius:5
  },
  btnText:{
    fontSize:18,
    color:'#ddd',
    fontWeight:'bold',
    padding:8,
  },
  btns:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around'
  }
});
