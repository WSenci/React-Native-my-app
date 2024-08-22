
import { Link } from "expo-router"
import { View, Text, StyleSheet } from "react-native"
import { StatusBar } from 'expo-status-bar';
import ImagemTexto from "../components/imagem-texto"

export default function Home() {
    return (
        <View>
            <Text>Login realizado com sucesso!</Text>
            <ImagemTexto source={require('../assets/miniMage.jpg')}
            imagemStyle={{width: 150, height: 150}}
            textoContent="Mago:Especialista em magia e feitiços, Dano à distância e controle de área, 
            Frágil em combate corpo a corpo, Conhecimento arcano e inteligência elevada"/>
            <ImagemTexto source={require('../assets/miniWarrior.jpg')}
            imagemStyle={{width: 150, height: 150}}
            textoContent="Guerreiro:

Combatente corpo a corpo
Alta resistência e dano físico
Proteção da equipe na linha de frente
Habilidade com diversas armas e armaduras"/>
            <ImagemTexto source={require('../assets/miniBardo.jpg')}
            imagemStyle={{width: 150, height: 150}}
            textoContent="Bardo:

Suporte e buff para a equipe
Habilidades sociais e carisma
Conhecimento variado e versatilidade
Algumas magias e combate moderado"/>
            <Link href='/'> Voltar para Login</Link>
            <StatusBar style="auto" />
        </View>
    )
}