import React from 'react';
import { ScrollView, Text } from 'react-native';
import PlatoCard from './components/PlatoCard';

const App = () => {
  const platos = [
    {
      nombre: 'Pupusas',
      calorias: 210,
      imagen: require('./pupusas.jpg'),
    },
    {
      nombre: 'Yuca frita con chicharrón',
      calorias: 320,
      imagen: require('./pupusas.jpg'),
    },
    {
      nombre: 'Pan con pollo',
      calorias: 400,
      imagen: require('./pan.jpg'),
    },
    {
      nombre: 'Tamales de elote',
      calorias: 250,
      imagen: require('./tamales.jpg'),
    },
    {
      nombre: 'Enchiladas Salvadoreñas',
      calorias: 350,
      imagen: require('./enchiladas.jpg'),
    },
  ];

  return (
    <>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', margin:5 }}>Platos Típicos</Text>
      <ScrollView>
        {platos.map((plato, index) => (
          <PlatoCard
            key={index}
            nombre={plato.nombre}
            calorias={plato.calorias}
            imagen={plato.imagen}
          />
        ))}
      </ScrollView>
    </>
  );
};

export default App;
