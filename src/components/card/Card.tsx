import React from 'react';
import {Button, Text, View} from 'react-native';
import styles from './Card.style';

export type Props = {
  title: string;
  description: string;
};

const Card: React.FC<Props> = ({title, description}) => {
  const helloHandler = () => {
    console.log('Hello');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <Button title="GIBI" onPress={helloHandler} color="lightcoral" />
    </View>
  );
};

export default Card;
