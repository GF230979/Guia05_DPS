import React from 'react';
import { Card, ListItem } from 'react-native-elements';
import { View, Text, StyleSheet, Image } from 'react-native';

const PlatoCard = ({ nombre, calorias, imagen }) => {
  return (
    <Card containerStyle={styles.cardContainer}>
      <View style={styles.cardContent}>
        <View style={styles.imageContainer}>
          <Image source={imagen} style={styles.image} />
        </View>
        <View style={styles.infoContainer}>
          <Card.Title>{nombre}</Card.Title>
          <Card.Divider />
          <Text>Calorias: {calorias}</Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  infoContainer: {
    marginLeft: 20,
  },
});

export default PlatoCard;
