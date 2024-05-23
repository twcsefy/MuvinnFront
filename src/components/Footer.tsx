import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

function Footer(): React.JSX.Element {
    return(
        <View style={styles.footer}>
            <TouchableOpacity>
                <Image source={require('../assets/images/homes.png')}
                style={styles.footerIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../assets/images/lupe.png')}
                style={styles.footerIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../assets/images/orders.png')}
                style={styles.footerIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../assets/images/plus.png')}
                style={styles.footerIcon} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    menuList: {
        flexGrow: 1
    },
    footer: {
        borderTopWidth: 0.2,
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
    footerIcon: {
        width: 35,
        height: 35
    }
});

export default Footer;