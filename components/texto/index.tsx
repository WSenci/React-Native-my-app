import { View, Text, StyleSheet } from 'react-native';

interface TextoProps {
    content: string;
}

export default function Texto(props: TextoProps) {
    const styles = StyleSheet.create({
        texto: {
            fontSize: 16,
            color: '#000',
        },
    });

    return (
        <View>
            <Text style={styles.texto}>
                {props.content}
            </Text>
        </View>
    );
};