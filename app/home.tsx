
import { Link } from "expo-router"
import { View, Text, StyleSheet } from "react-native"
import ImagemTexto from "../components/imagem-texto"

export default function Home() {
    return (
        <View>
            <Text>Login realizado com sucesso!</Text>
            <ImagemTexto
            imagemStyle={{width: 100, height: 100}}
            textoContent="Ben10"/>
            <ImagemTexto
            imagemStyle={{width: 50, height: 50}}
            textoContent="Ben10inho"/>
            <ImagemTexto
            imagemStyle={{width: 200, height: 200}}
            textoContent="Ben10zão"/>
            <Link href='/'> Voltar para Login</Link>
        </View>
    )
}