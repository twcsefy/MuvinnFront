import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

function Footer(): React.JSX.Element {

    const navigation = useNavigation();

    return (
        <View style={styles.footer}>
            <TouchableOpacity onPress={() => navigation.navigate('Muvinn')}>
                <Image source={require('../assets/images/muvinn.png')}
                style={styles.footerIcone} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('CadastrarImovel')}>
                <Image source={require('../assets/images/cadastro.png')}
                style={styles.footerIcone} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('List')}>
                <Image source={require('../assets/images/list.png')}
                style={styles.footerIcone} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Pesquisar')}>
                <Image source={require('../assets/images/lupe.png')}
                style={styles.footerIcone} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#9999a1',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        padding: 10,
        width: 390,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        marginTop: 40
    },
    footerIcone: {
        width: 30,
        height: 30
    }
});

export default Footer;