import { View, Image, StyleSheet, StyleProp, ImageStyle, ImageSourcePropType } from 'react-native';

interface ImagemProps {
  style?: StyleProp<ImageStyle>;
  source: ImageSourcePropType
}

export default function Imagem(props: ImagemProps) {
  const styles = StyleSheet.create({
    logo: {
      width: 100,
      height: 100,
    },
  });

  return (
      <Image
        style={[styles.logo, props.style]}
        
        source={props.source}
      />
  );
};