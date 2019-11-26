import React, {Component } from 'react';
import { Button, Linking, ScrollView, StyleSheet, FlatList, View, Text, TouchableHighlight } from 'react-native';

export default class LinksScreen extends Component {

  state = {
    data: '',
    id: '',
    street: '',
    contact_phone: '',
    contact_name: '',
    city: '',
    number: '',
    neighborhood: '',
    deadline: '',
    start_date: '',
    activity: ''
 }

//  componentDidMount = () => {
//    console.log("entrou aqui?")
//     fetch('http://localhost:3000/api/v1/calls')
//     .then((response) => response.json())
//     .then((responseJson) => {
//        this.setState({
//         data: responseJson,
//        })
//        console.log("data")
//        console.log(this.state.data)
//     })
//     .catch((error) => {
//        console.error(error);
//     });
//  }

componentDidMount() {
  fetch("https://damp-peak-50996.herokuapp.com/api/calls")
    // fetch("http://10.0.2.2/api/v1/customers")
    .then(response => response.json())
    .then((responseJson) => {
      this.setState({
        data: responseJson
      })
    })
    .catch(error => console.log(error)) //to catch the errors if any
    console.log(this.data)
    console.log("Teste")

}

//  onPress(item){
//   this.props.navigation.navigate(
//     'SettingsScreen',
//     { item },
//   );
// }

  render() {
  const {navigate} = this.props.navigation;

  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
       <View style={{flex: 1, paddingTop:20}}>
        <Text>Total de OS's: {this.state.data.length}</Text>
        <FlatList
          data={this.state.data}
          renderItem={({item, index, separators}) => (
          <TouchableHighlight
          // onPress={(item) =>navigate('Settings', {item})}
          onPress={() => navigate("Settings", 
          { id: item.id, activity: item.activity, street: item.street, contact_phone: item.contact_phone, 
            contact_name: item.contact_name, city: item.city, 
            number: item.number, neighborhood: item.neighborhood,
            deadline: item.deadline, start_date: item.start_date
          })}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}>
            <View style={{backgroundColor: 'white'}}>
              <Text>
              Id: {item.id},
              Descrição: {item.activity}, 
              Nome: {item.contact_name}, 
              Telefone: {item.contact_phone}
              Cidade: {item.city},
              Bairro: {item.neighborhood},
              Rua: {item.street},
              Número: {item.number},
              Prazo: {item.deadline},
              Data de abertura: {item.start_date}
              </Text>
            </View>
          </TouchableHighlight>
          )}
          />
      </View>
    </ScrollView>
  )}
}

LinksScreen.navigationOptions = {
  title: 'Lista de Ordens de Serviço',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
});
