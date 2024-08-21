import { View, Text, StyleSheet } from 'react-native';

export default function Texto() {
    const styles = StyleSheet.create({
        texto: {
            width: 100,
            height: 100,
        },
    });

    return (
        <View>
            <Text style={styles.texto}>
                Ben10
            </Text>
        </View>
    );
};