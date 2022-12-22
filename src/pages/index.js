import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { auth } from "../../src/services/firebaseConection";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function createUser() {
    await createUserWithEmailAndPassword(auth, email, password)
    .then(value => {
      console.log("Cadastrado com sucesso!\n" + value.user.uid);
    })
    .catch(error => console.log(error))
  }
  
  async function Login() {
    await signInWithEmailAndPassword(auth, email, password)
    .then(value => {
      console.log("Logado com sucesso!");
    })
    .catch(error => console.log(error))
  }

  async function logOut() {
    await signOut(auth)
    .then(value => {
      console.log("Saiu com sucesso!");
    })
    .catch(error => console.log(error))
  }

  return (
    <View style={estilos.container}>
      <View style={estilos.formulario}>
        <TextInput
          placeholder="E-mail"
          style={estilos.input}
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <TextInput
          placeholder="Senha"
          style={estilos.input}
          value={password}
          onChangeText={value => setPassword(value)}
        />
        <View style={estilos.botoes}>
          <Button
            title="Cadastrar"
            color="green"
            onPress={() =>createUser()}
          />
        </View>
        <View style={estilos.botoes}>
          <Button title="Entrar" color="green" onPress={() =>Login()} />
        </View>
        <View style={estilos.botoes}>
          <Button title="Sair" color="green" onPress={() =>logOut()}/>
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
  },
  formulario: {
    marginBottom: 32,
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    marginVertical: 8,
    padding: 8,
    borderRadius: 4,
  },
  botoes: {
    marginVertical: 10,
    width: "100%",
    justifyContent: "center",
  },
});
