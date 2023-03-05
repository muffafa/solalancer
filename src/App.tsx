import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import Card from './components/card';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* eslint-disable-next-line react-native/no-inline-styles */}
        <View style={{marginTop: 30, marginBottom: 20}}>
          <Card
            title="Yılmaz"
            description="Saat daha sabah 8. Büyücüler açılmamıştır. Gidelim şurada bir yerde çay kahve bir şeyler içelim."
          />
          <Card
            title="İlkan"
            description="Yahşı günde yar yahşıdır yaman günde yetiş gardaş."
          />
          <Card
            title="Yılmaz"
            description={"Sen IBAN'a 'ayben' mi diyorsun İlkkan?"}
          />
          <Card
            title="İlkan"
            description="Amcacım zaten o tanıyınca normal misafir oluyor. Tanrı misafiri bu konsept yani."
          />
          <Card
            title="Yılmaz"
            description="Sadece 10 liramın olması, 0 liramın olmasından daha çok canımı yakıyor, anladın mı? Beni bu 10 liradan kurtar ya kurbanın olayım."
          />
          <Card
            title="İlkan"
            description="Avcı ne kadar hile bilirse ayı o kadar yol bilir."
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
});

export default App;
