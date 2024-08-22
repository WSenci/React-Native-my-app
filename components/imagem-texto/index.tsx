import { View, StyleSheet, StyleProp, ImageStyle, ImageSourcePropType } from "react-native"
import Imagem from "../imagem"
import Texto from "../texto"

interface ImagemTextoProps {
    imagemStyle?: StyleProp<ImageStyle>;
    textoContent: string;
    source: ImageSourcePropType
}

export default function ImagemTexto({ imagemStyle, textoContent, source }: ImagemTextoProps) {
    return (
        <View style={styles.card}>
            <Imagem source={source} style={imagemStyle}/><Texto content={textoContent}/>
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