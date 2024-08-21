
import { Link } from "expo-router"
import { View, Text, StyleSheet } from "react-native"
import ImagemTexto from "../components/imagem-texto"

export default function Home() {
    return (
        <View>
            <Text>Login realizado com sucesso!</Text>
            <ImagemTexto imagemStyle={{width: 100, height: 100}}/>
            <ImagemTexto imagemStyle={{width: 50, height: 50}}/>
            <ImagemTexto imagemStyle={{width: 200, height: 200}}/>
            <Link href='/'> Voltar para Login</Link>
        </View>
    )
}