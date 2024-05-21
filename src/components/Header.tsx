import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function Header(): React.JSX.Element {
    return (
        <View >
           <Image source={require('../assets/images/logo.png')}
                style={styles.logo} />
        </View>
    );
}

const styles = StyleSheet.create({

    logo: {
        height: 50,
        width: 300,
        marginTop: 30,
        marginLeft: 'auto',
        marginRight: 'auto'
        
        
    },
});

export default Header;