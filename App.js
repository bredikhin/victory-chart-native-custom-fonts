import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppLoading from 'expo-app-loading';
import {useFonts, Inter_600SemiBold} from '@expo-google-fonts/inter';
import {VictoryBar, VictoryChart, VictoryAxis} from 'victory-native';

const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000},
];

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <VictoryChart width={350}>
        <VictoryAxis
          style={{
            /* this works: `tickLabels: {fontFamily: 'AcademyEngravedLetPlain'},` */
            tickLabels: {fontFamily: 'Inter_600SemiBold'},
          }}
        />
        <VictoryBar data={data} x="quarter" y="earnings" />
      </VictoryChart>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
