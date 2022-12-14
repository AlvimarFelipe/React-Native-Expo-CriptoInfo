import { StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  // Geral
  corpo: {
    flex:1,
    backgroundColor:'rgb(32, 36, 39)',
  },
  // Cabeca
  inicio:{
    paddingTop:34,
    paddingBottom:10,
    backgroundColor: 'rgb(39, 44, 49)',
    alignItems:'center',
  },
  titulo1:{
    fontSize:25 ,
    fontWeight:'bold',
    color:'#ddd'
  },
  linha1:{
    backgroundColor:'#F56A6A',
    width:330,
    height:4,
    margin:15,
    borderRadius:3
  }, 
  logo:{
    width:40,
    height:40,
  },
  //Menu
  menu:{
    position:'absolute',
    top:60,
    left:15,
    backgroundColor:'#F56A6A',
    width:46,
    height:46,
    justifyContent:'space-around',
    borderRadius:7
  },
  linhamenu:{
    backgroundColor:'#fff',
    width:32,
    height:6,
    marginLeft:7,
    borderRadius:3
  },
  //Menu aberto
  menuopen:{
    position:'absolute',
    backgroundColor:'#303539',
    left:-200,
    width:200,
    height:'100%',
    zIndex:1,
    transition: '0.5s',
    borderRadius:10,
    borderRightWidth:2,
    borderColor:'#797979',
  },
  tMenu:{
    marginTop:50,
    marginLeft:20,
    marginBottom:10,
    fontSize:25 ,
    fontWeight:'bold',
    color:'#ddd',

  },
  botaoM:{
    paddingLeft:20,
    paddingRight:20,
    color:'#fff',
  },
  linhaM:{
    backgroundColor:'#fff',
    width:200,
    height:2,
    marginBottom:20,
    marginTop:20,
  },
 
  // Corpo
  titulo:{
    marginTop:20,
    fontSize:25 ,
    fontWeight:'bold',
    color:'#ddd'
  },
  ajuda:{
    alignItems:'center',
  },
  meio:{
    textAlign:'center',
    fontSize:25 ,
    fontWeight:'bold',
    color:'#ddd'
  },
  inputtext:{    
    marginBottom:40,
    borderRadius:8,
  },
  quests:{
    marginBottom:20,    
  },
  quest:{
    color:'#ddd',
    fontWeight:'bold',
    marginTop:10,
    fontSize:18 ,
  },
  input:{
    backgroundColor:'#5f6a72',
    fontFamily:"Montserrat_600SemiBold",
    color:'#ddd',
    paddingLeft:10,
    borderRadius:8,
    minHeight:60,
    fontSize:15 ,
  },
  input2:{
    backgroundColor:'#5f6a72',
    fontFamily:"Montserrat_600SemiBold",
    color:'#ddd',
    paddingLeft:10,
    paddingVertical:7,
    borderRadius:8,
      fontSize:15 ,
  },
  botaoContainer:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-around",
    flexWrap:"wrap",
    marginBottom:10,
    width:400

  },
  button:{
    width:190,
    minHeight:53

  }
});