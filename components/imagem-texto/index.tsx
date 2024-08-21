import { View, StyleSheet, StyleProp, ImageStyle } from "react-native"
import Imagem from "../imagem"
import Texto from "../texto"

export default function ImagemTexto({imagemStyle}: { imagemStyle?: StyleProp<ImageStyle>}) {
    return (
        <View style={styles.card}>
            <Imagem style={imagemStyle}/><Texto/>
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