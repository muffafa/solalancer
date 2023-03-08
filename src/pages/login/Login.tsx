import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import styles from './Login.style';
import auth from '@react-native-firebase/auth';

const Login = () => {
  const register = () => {
    auth()
      .createUserWithEmailAndPassword('mm.savar@gmail.com', '123456')
      .then(userCredential => {
        console.log(userCredential);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const login = () => {
    auth()
      .signInWithEmailAndPassword('mm.savar@gmail.com', '123456')
      .then(userCredential => {
        console.log(userCredential);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>Login</Text>
      <Button title={'register'} color="#841584" onPress={register} />
      <Button title={'login'} color="#5ea6ee" onPress={login} />
    </SafeAreaView>
  );
};

export default Login;
