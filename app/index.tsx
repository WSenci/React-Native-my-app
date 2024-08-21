import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import StyledInput from '../components/styled-input';
import StyledButton from '../components/styled-button';
import { Link, router } from 'expo-router';
import Imagem from '../components/imagem';

export default function Login() {

    const handleLogin = () => {
        router.replace('home')
    }

    return (
        <View style={styles.container}>
            {/* <Image source={require('./1.jpg')}/> */}
            <Imagem/>
            <Text>Hello World!</Text>
            <StyledInput placeholder='Digite seu login' onChangeText={(texto) => console.log(texto)}
            />
            <StyledInput placeholder='Digite sua senha' onChangeText={(texto) => console.log(texto)}
            />
            <StyledButton text='Entrar' color='green' onClick={handleLogin}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
