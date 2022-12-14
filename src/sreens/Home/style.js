import { StyleSheet} from 'react-native';

import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
    width: 297px;
    padding: 10px;
    background-color: #F56A6A;
    border-radius: 16px;
    border: none;
    margin:10px auto;
    transition: 0.5s;
}
`;
export const ButtonText = styled.Text`
    color: #FFFFFF;
    text-align:center;
    font-size: 20px;
    font-weight: bold;
    font-family: Montserrat_700Bold;    
   
`;

export const BuyButton = styled.TouchableOpacity`
    width: 100px;
    padding: 10px;
    background-color: #F56A6A;
    border-radius: 16px;
    border: none;
    margin:10px auto;
    transition: 0.5s;
    position:absolute;
    bottom:20px;
    left:20px;
}
`;
export const SellButton = styled.TouchableOpacity`
    width: 110px;
    padding: 10px;
    background-color: #F56A6A;
    border-radius: 16px;
    border: none;
    margin:10px auto;
    transition: 0.5s;
    position:absolute;
    bottom:20px;
    right:20px;
}
`;
export const BText = styled.Text`
    color: #FFFFFF;
    text-align:center;
    font-size: 16px;
    font-weight: bold;
    font-family: Montserrat_700Bold;    
   
`;

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
    desc:{
        fontSize:25 ,
        fontWeight:'bold',
        textAlign:"center",
        color:'#ddd'
    },
    linha1:{
        backgroundColor:'#F56A6A',
        width:330,
        height:4,
        margin:15,
        borderRadius:3
    },

    btns:{
        flex:0,
        flexDirection:'row',
        justifyContent:'space-around',
        width:200,
    },
    btn:{
        backgroundColor:'#F56A6A',
        padding:5,
        borderRadius:3,
        color:'#ddd',
        fontWeight:'bold'
        
    },



    // CONTEUDO

    logo:{
        width:40,
        height:40,
    },
    container: {
        flex:0,
        padding:20,
    },
    footerbox:{
        alignItems:'center'
    },
    footer:{
        color:'#ddd',
        fontWeight:'bold',
        fontSize:15    }



});