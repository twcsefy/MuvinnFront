import React, { useEffect, useState } from 'react';
import { Anuncio } from '../components/interface/AnuncioInterface';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Button, Card } from 'react-native-paper';
import Footer from '../components/Footer';

const renderItem = ({ item, handleEdit, handleDelete }: { item: Anuncio, handleEdit: (item: Anuncio) => void, handleDelete: (id: string) => void }) => (
  <View style={styles.item}>
    <Card style={{ backgroundColor: '#9999a1' }}>
      <Card.Title title="Casa rustica " subtitle="Mais informações abaixo" titleStyle={styles.titleColor} subtitleStyle={styles.subtitleColor} />
      <Card.Content>
        <Text style={styles.textTitle}>Estado: {item.estado}</Text>
        <Text style={styles.textTitle}>Cidade: {item.cidade}</Text>
        <Text style={styles.textTitle}>Endereço: {item.endereco}</Text>
        <Text style={styles.textTitle}>Tipo de imovel: {item.tipos_imoveis}</Text>
        <Text style={styles.textItem}>R${item.preco}</Text>
        <Text style={styles.textTitle}>Qtd. Banheiros: {item.banheiros}</Text>
        <Text style={styles.textTitle}>Quartos: {item.quartos}</Text>
        <Text style={styles.textTitle}>Vagas: {item.vagas}</Text>
        <Text style={styles.textTitle}>Área do imovel: {item.area_do_imovel}m²</Text>
        <Image source={item.image? { uri: item.image } : require('../assets/images/house.png')} style={styles.image} />
      </Card.Content>
      <Card.Actions>
        <Button buttonColor='darkblue' onPress={() => handleEdit(item)}>
          <Text style={styles.textButton}>Editar</Text>
        </Button>
        <Button buttonColor='darkred' onPress={() => handleDelete(item.id)}>
          <Text style={styles.textButton}>Deletar</Text>
        </Button>
      </Card.Actions>
    </Card>
  </View>
);

function Listagem(): React.JSX.Element {
  const [anuncio, setAnuncio] = useState<Anuncio[]>([]);
  const [erro, setErro] = useState<string>('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://10.137.11.212:8000/api/imovel/retornarTodos');
        setAnuncio(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        setErro('Ocorreu um erro');
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const navigation = useNavigation();

  const handleDelete = async (id: string) => {
    Alert.alert(
      "Deletar Anúncio",
      "Você tem certeza que deseja deletar este anúncio?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Deletar",
          onPress: async () => {
            try {
              await axios.delete(`http://10.137.11.211:8000/api/imovel/delete/${id}`);
              const newAnuncio = anuncio.filter((item) => item.id!== id);
              setAnuncio(newAnuncio);
              Alert.alert("Anúncio deletado com sucesso.");
            } catch (error) {
              console.error(error);
              Alert.alert("Ocorreu um erro ao deletar o anúncio.");
            }
          }
        }
      ]
    );
  };

  const handleEdit = (item: Anuncio) => {
    navigation.navigate('EditarAnuncio', { item });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.header}>
        <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      </View>
      <FlatList
        ListHeaderComponent={() => (
          <Text style={styles.textEspeciais}>Propriedade disponiveis</Text>
        )}
        showsVerticalScrollIndicator={false}
        data={anuncio}
        renderItem={({ item }) => renderItem({ item, handleEdit, handleDelete })}
        keyExtractor={(item) => item.id.toString()}
      />
      <Footer/>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#66666e',
  },
  item: {
    opacity: 1,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 15,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#e6e6e9',
  },
  header: {
    opacity: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },

  footerIcon: {
    width: 30,
    height: 30,
  },
  textItem: {
    color: '#f4f4f6',
    fontSize: 15,
    fontWeight: 'bold',
  },
  textItem2: {
    color: '#f4f4f6',
    fontSize: 20,
    fontWeight: 'bold',
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: -120,
    marginTop: -69,

  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: 'white',
    alignItems: 'flex-end',
  },
  textEspeciais: {
    color: '#f4f4f6',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',

  },
  image2: {
    width: 150,
    height: 350,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  image3: {
    width: 260,
    height: 210,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: 'white',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
    textTitle: {
        color: '#f4f4f6',
        fontSize: 15,
        fontWeight: 'bold'
    },
    sacola: {
        width: 60,
        height: 60,
        borderRadius: 50,
        borderWidth: 1.5,
        borderColor: 'white',
        marginLeft: 'auto'
    },
    button: {
        borderRadius: 5,
        width: 160,
        height: 40,
        backgroundColor: '#9999a1'
    },
    textButton: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 6,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#f4f4f6'
    },
    buttonColor: {
        color: '#5c6b73'
    },
    titleColor: {
      color: '#f4f4f6'
    },
    subtitleColor: {
      color: '#f4f4f6'
    }
})
export default Listagem;