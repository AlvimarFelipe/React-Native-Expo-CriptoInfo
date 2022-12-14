import React, { useState } from 'react';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { Icon } from 'react-native-elements';
import { View, Text } from 'react-native';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';

export const NineMenu = (props) => {
    const [visible, setVisible] = useState(false);
    const hideMenu = () => setVisible(false);
    const showMenu = () => setVisible(true);
    const navigation = useNavigation();
    return (
        <View style={styles.flex}>
            <Menu
                visible={visible}
                anchor={
                    <Text onPress={showMenu}>
                        <Icon name="menu" type="feather" size={30} />
                    </Text>
                }
                onRequestClose={hideMenu}
                style={styles.boxMenu}>
                <MenuItem
                    onPress={() => {
                        hideMenu();
                        navigation.navigate('Home');
                    }}
                    style={styles.menu}>
                    <View style={styles.viewMenu}>
                        <Text style={styles.menuText}>Notícias</Text>
                    </View>
                </MenuItem>
                <MenuDivider color='#fff'/>
                <MenuItem
                    onPress={() => {
                        hideMenu();
                        navigation.navigate('OQueE');
                    }}
                    style={styles.menu}>
                    <View style={styles.viewMenu}>
                        <Text style={styles.menuText}>O que é criptomoeda?</Text>
                    </View>
                </MenuItem>
                <MenuDivider color='#fff'/>
                <MenuItem
                    onPress={() => {
                        hideMenu();
                        navigation.navigate('Investir');
                    }}
                    style={styles.menu}>
                    <View style={styles.viewMenu}>
                        <Text style={styles.menuText}>Como Investir?</Text>
                    </View>
                </MenuItem>
                <MenuDivider color='#fff'/>
                <MenuItem
                    onPress={() => {
                        hideMenu();
                        navigation.navigate('Ajuda');
                    }}
                    style={styles.menu}>
                    <View style={styles.viewMenu}>
                        <Text style={styles.menuText}>Ajuda</Text>
                    </View>
                </MenuItem>              
                <MenuDivider color='#fff'/>
                <MenuItem
                    onPress={() => {
                        hideMenu();
                        navigation.navigate('Adicionar');
                    }}
                    style={styles.menu}>
                    <View style={styles.viewMenu}>
                        <Text style={styles.menuText}>Adicionar Notícia</Text>
                    </View>
                </MenuItem>
            </Menu>
        </View>
    );
};


{/* <MenuDivider />
    <MenuItem
        onPress={() => {
            hideMenu();
            navigation.navigate('ListSquad');
        }}
        style={styles.menu}>
        <View style={styles.viewMenu}>
            <Icon name="people" type="simplelineicons" size={35} />
            <Text style={styles.menuText}>Equipe</Text>
        </View>
    </MenuItem> */}