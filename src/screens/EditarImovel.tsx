import React, { useState, useEffect } from 'react';
import { Anuncio } from '../components/interface/AnuncioInterface';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button, Card } from 'react-native-paper';

interface EditItemProps {}

const EditarImovel: React.FC<EditItemProps> = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [item, setItem] = useState<Anuncio>({} as Anuncio);

  useEffect(() => {
    const { params } = route;
    if (params && params.item) {
      setItem(params.item);
    }
  }, [route]);

  const handleSave = async () => {
    try {
      await axios.put(`http://10.137.11.212:8000/api/imovel/update/${item.id}`, item);
      Alert.alert('Anúncio atualizado com sucesso');
      navigation.goBack();
    } catch (error) {
      console.error(error);
      Alert.alert('Ocorreu um erro ao atualizar o anúncio');
    }
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Editar anúncio" />
        <Card.Content>
          <TextInput
            style={styles.input}
            aria-label="Estado"
            value={item.estado? item.estado : ''}
            onChangeText={(text: string) => setItem({...item, estado: text })}
          />
          <TextInput
            style={styles.input}
            aria-label="Cidade"
            value={item.cidade? item.cidade : ''}
            onChangeText={(text: string) => setItem({...item, cidade: text })}
          />
          <TextInput
            style={styles.input}
            aria-label="Endereço"
            value={item.endereco? item.endereco : ''}
            onChangeText={(text: string) => setItem({...item, endereco: text })}
          />
          <TextInput
            style={styles.input}
            aria-label="Tipo de imóvel"
            value={item.tipos_imoveis? item.tipos_imoveis : ''}
            onChangeText={(text: string) => setItem({...item, tipos_imoveis: text })}
          />
          <TextInput
            style={styles.input}
            aria-label="Preço"
            value={item.preco? item.preco.toString() : ''}
            onChangeText={(text: number) => setItem({...item, preco: text })}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            aria-label="Qtd. Banheiros"
            value={item.banheiros? item.banheiros.toString() : ''}
            onChangeText={(text: number) => setItem({...item, banheiros: text })}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            aria-label="Quartos"
            value={item.quartos? item.quartos.toString() : ''}
            onChangeText={(text: number) => setItem({...item, quartos: text })}
            keyboardType="numeric"
          />
          <Button mode="contained" onPress={handleSave}>
            Salvar
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
  },
});

export default EditarImovel;