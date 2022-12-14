import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    flex: {
        flex: 1,
        flexDirection: 'row',
        alignContent: "center",
        position: "absolute",
        top: 60,
        left: 15,
        paddingVertical: 3,
        paddingHorizontal: 5,
        backgroundColor: '#F56A6A',
        borderRadius: 10,
        zIndex: 99     
    },
    boxMenu: {
        width: 230,
        backgroundColor: '#303539', 
        borderRadius:10,
    
    },
    menu: {
        backgroundColor: '#303539',
        height: 65,
    
        borderRadius:10,
       
    },
    menuText: {
        fontSize: 20,
        color:'#fff',
    },
    viewMenu: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
});
