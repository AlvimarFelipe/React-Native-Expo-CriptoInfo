import { StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  corpo: {
    flex:1,
    backgroundColor:'rgb(32, 36, 39)',
  },
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

  titulo:{
    fontSize:22 ,
    fontWeight:'bold',
    color:'#ddd'
  },
  container: {
    flex:0,
    padding:20,
  },
  conteudo:{
    fontSize:15 ,
    color:'#ddd',
    paddingBottom:30
  },
  linha:{
    backgroundColor:'#fff',
    width:364,
    height:3,
    marginTop:-20,
    marginBottom:20
  }
});