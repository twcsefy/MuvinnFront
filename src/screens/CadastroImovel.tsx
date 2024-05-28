import axios from "axios";
import React, { useState } from "react";
import { ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import {} from "react-native-paper"
import Footer from "../components/Footer";
import Header from "../components/Header";

function CadastroImovel(): React.JSX.Element{

    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    const [endereco, setEndereco] = useState("");
    const [tipos_imoveis, setTipos_imoveis] = useState("");
    const [preco, setPreco] = useState("");
    const [banheiros, setBanheiros] = useState("");
    const [quartos, setQuartos] = useState("");
    const [vagas, setVagas] = useState("");
    const [area_do_imovel, setArea_do_imovel] = useState("");


    const CadastroScreen = async () => {
        try {
            const formData = new FormData();
            formData.append('estado', estado);
            formData.append('cidade', cidade);
            formData.append('endereco', endereco);
            formData.append('tipos_imoveis', tipos_imoveis);
            formData.append('preco', preco);
            formData.append('banheiros', banheiros);
            formData.append('quartos', quartos);
            formData.append('vagas', vagas);
            formData.append('area_do_imovel', area_do_imovel);
            

            console.log(formData)
            const response = await axios.post('http://10.137.11.212:8000/api/imovel/criar', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <View style={styles.container}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
            <StatusBar hidden />

            <View>
                
                <TextInput
                style={styles.input} 
                placeholder="Estado" 
                placeholderTextColor={"#f4f4f6"} 
                onChangeText={(texteEstado) => setEstado(texteEstado)}
                />
                
                <TextInput
                style={styles.input} 
                placeholder="Cidade" 
                placeholderTextColor={"#f4f4f6"} 
                onChangeText={(texteCidade) => setCidade(texteCidade)}
                />
                <TextInput
                style={styles.input} 
                placeholder="Endereço" 
                placeholderTextColor={"#f4f4f6"} 
                onChangeText={(texteEndereco) => setEndereco(texteEndereco)}
                />
                <TextInput
                style={styles.input} 
                placeholder="Tipo do Imóvel" 
                placeholderTextColor={"#f4f4f6"} 
                onChangeText={(texteTipos_imoveis) => setTipos_imoveis(texteTipos_imoveis)}
                />
                <TextInput
                style={styles.input} 
                placeholder="Preço" 
                placeholderTextColor={"#f4f4f6"} 
                onChangeText={(textePreco) => setPreco(textePreco)}
                />
                <TextInput
                style={styles.input} 
                placeholder="Banheiros" 
                placeholderTextColor={"#f4f4f6"} 
                onChangeText={(texteBanheiros) => setBanheiros(texteBanheiros)}
                />
                <TextInput
                style={styles.input} 
                placeholder="Quartos" 
                placeholderTextColor={"#f4f4f6"} 
                onChangeText={(texteQuartos) => setQuartos(texteQuartos)}
                />
                <TextInput
                style={styles.input} 
                placeholder="Vagas" 
                placeholderTextColor={"#f4f4f6"} 
                onChangeText={(texteVagas) => setVagas(texteVagas)}
                />
                <TextInput
                style={styles.input} 
                placeholder="Área do Imóvel" 
                placeholderTextColor={"#f4f4f6"} 
                onChangeText={(texteArea_do_Imovel) => setArea_do_imovel(texteArea_do_Imovel)}
                />
                </View>
                <View>
                    
                <TouchableOpacity style={styles.button} 
                onPress={()=>{CadastroScreen()}}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
                </View>
            
            </ScrollView>
            <Footer />
            
        </View>
        
    );
}

const styles =StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#66666e'
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e9',
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 180,
        paddingLeft: 1
    },
    button: {
        backgroundColor: '#9999a1',
        borderRadius: 8,
        height: 40,

    },
    buttonText: {
        color: '#f4f4f6',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 40,
       

    },

});

export default CadastroImovel;