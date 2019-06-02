import React from "react";
import { Container, Item, Input, Button, Text, H3 } from "native-base";
import { StyleSheet, Image, Alert } from "react-native";
import axios from 'axios';
import Loading from '../../core/components/Loading';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: require("../../assets/logo.png"),
      userName: '',
      password: '',
    };
  }

  render() {
    return (
      <Container style={style.container}>

        <Image style={style.image} source={this.state.image} />
        <Container style={style.form}>
          <H3 style={style.title}>BEM-VINDO AO OKR COACH</H3>

          <Item rounded style={style.input}>
            <Input onChangeText={(userName) => this.setState({userName})}
              value={this.state.userName} 
              placeholder="Usuário" />
          </Item>

          <Item rounded style={style.input}>
            <Input onChangeText={(password) => this.setState({password})}
              value={this.state.password}  
              secureTextEntry={true} 
              placeholder="Senha" />
          </Item>

          <Button
            block
            rounded
            style={style.button}
            onPress={() => this.login()}>
            <Text> Entrar </Text>
          </Button>
        </Container>
      </Container>
    );
  }

  login() {
    axios
      .post('https://app.okrcoach.stefanini.io/api/okr/login', 
        {userName: this.state.userName, password: this.state.password})
      .then(response => {
          if(response.data.success){
            this.props.navigation.navigate('Home');
          }
      })
      .catch(error => {
        if(error.response.status == 401){
          Alert.alert('Usuário ou senha inválidos.');
        }
      });
  }

}

const style = StyleSheet.create({
  button: {
    marginTop: 20
  },
  container: {
    padding: 10,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  input: {
    marginTop: 10,
    backgroundColor: "#ffff"
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain"
  },
  form: {
    flex: 2
  },
  title: {
    textAlign: "center"
  }
});
