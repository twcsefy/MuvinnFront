import React from "react";
import { ImageBackground, ScrollView, StatusBar, StyleSheet, Text, View, } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigation } from "@react-navigation/native";
import { Button, Card } from "react-native-paper";

function Home() {
  const navigation = useNavigation();

  return (
    <ImageBackground source={require("../assets/images/background2.png")} style={styles.image}>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Header />
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
          <StatusBar hidden/>
          <View style={styles.container}>
            <View style={styles.welcomeContainer}>
              <Text style={styles.textWelcome}>A casa que você quer está aqui.</Text>
            </View>
            <Card style={{ backgroundColor: '#66666e', width: 360, justifyContent: 'center'}} >

              <Card.Cover source={ require("../assets/images/cardImage.png")}/>
              <Card.Actions>
                <Button style={styles.buttonColor} onPress={() => navigation.navigate('Listagem')}>
                  <Text style={styles.buttonText}>Ver mais</Text>
                </Button>
              </Card.Actions>
            </Card>
          </View>
        </ScrollView>
        <Footer />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    padding: 20,
  },
  welcomeContainer: {
    height: 60,
    justifyContent: "center"
  },
  textWelcome: {
    fontWeight: 'bold',
    color: '#f4f4f6',
    fontSize: 24,
    textAlign: "center",
  },
  buttonColor: {
    backgroundColor: '#9999a1'
  },
  buttonText: {
    color: '#f4f4f6',
  },
  titleColor: {
    color: '#f4f4f6',
    fontWeight: 'bold'
  },
  subtitleColor: {
    color: '#f4f4f6'
  }
});

export default Home;
