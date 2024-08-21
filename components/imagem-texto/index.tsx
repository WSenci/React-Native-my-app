import { View, StyleSheet, StyleProp, ImageStyle } from "react-native"
import Imagem from "../imagem"
import Texto from "../texto"

interface ImagemTextoProps {
    imagemStyle?: StyleProp<ImageStyle>;
    textoContent: string;
}

export default function ImagemTexto({ imagemStyle, textoContent }: ImagemTextoProps) {
    return (
        <View style={styles.card}>
            <Imagem style={imagemStyle}/><Texto content={textoContent}/>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row', 
        alignItems: 'center',
        padding: 20,
        width: '100%',
        justifyContent: 'space-around',
        
    },
});