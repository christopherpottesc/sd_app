import React, {Component} from 'react';
import { Button, Linking, ScrollView, StyleSheet, FlatList, View, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class SettingsScreen extends Component {

  state = {
    msg: 'Olá, estamos entrando em contato para agendar uma vistoria solicitada'  
  }

  render() {
    const {state} = this.props.navigation;
    var id = state.params ? state.params.id : "Não consta";
    var number = state.params ? state.params.number : "Não consta";
    var city = state.params ? state.params.city : "Não consta";
    var street = state.params ? state.params.street : "Não consta";
    var contact_phone = state.params ? state.params.contact_phone : "Não consta";
    var contact_name = state.params ? state.params.contact_name : "Não consta";
    var neighborhood = state.params ? state.params.neighborhood : "Não consta";
    var start_date = state.params ? state.params.start_date : "Não consta";
    var deadline = state.params ? state.params.deadline : "Não consta";
    var activity = state.params ? state.params.activity : "Não consta";


    // var d = format(new Date(start_date), 'dd/MM/yyyy')


    return (
      <View>
        <View style={{paddingHorizontal: 5}}>
          <Text style={{marginBottom: 20}}>Informações da Ordem de Serviço: {id} </Text>
          <View>
            <Text>
              <Icon name="barcode" size={18} color="#999" />
              Atividade: {activity}
            </Text>
          </View>
          <View>
            <Text>
              <Icon name="user" size={18} color="#999" />
              Contato: {contact_name}, {contact_phone}
            </Text>
          </View>
          <View>
            <Text>
              <Icon name="home" size={18} color="#999" /> 
              Endereço: {street}, {number} - {neighborhood} - {city}
            </Text>
          </View>
          <View>
            <Text>Prazo: {deadline} dias, Data de Abertura: {start_date}</Text>
          </View>
        </View>

        <Text
            style={{marginTop:30}}
            onPress={() =>
            Linking.canOpenURL("whatsapp://send?text=oi").then(supported => {
            if (supported) {
              return Linking.openURL(
                `whatsapp://send?phone=5553${contact_phone}&text=${this.state.msg}`
              );
            } else {
              return Linking.openURL(
                `https://api.whatsapp.com/send?phone=5553${contact_phone}&text=${this.state.msg}`
              );
            }
          })
        }>
        Agendar
        </Text>
      </View>
    );
  }
}


SettingsScreen.navigationOptions = {
  title: 'Consultar',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
});
