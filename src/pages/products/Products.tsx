import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, FlatList, View} from 'react-native';
import Config from 'react-native-config';
import axios from 'axios';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL: string = Config.API_URL!;

  const getProducts = async () => {
    const response = await axios.get(API_URL);
    setProducts(response.data);
    setLoading(false);
    console.log('data loaded');
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItem = ({item}: {item: any}) => {
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  };

  if (loading) {
    return (
      <LottieView
        source={require('../../../97930-loading.json')}
        autoPlay
        loop
      />
    );
  }

  return (
    <SafeAreaView>
      <Icon name={'store-check-outline'} size={90} color={'#600'} />
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Products;
