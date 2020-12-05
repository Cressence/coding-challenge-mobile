import React from 'react';
import {
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Item from './../../components/Item/item';
import styles from './app.style';
import {theme} from './../../assets/styles/theme';

import {events} from './../../data/data';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.titleContainer}>
            <Text style={styles.title}>EVENTS</Text>
          </View>
          {events.map((item, index) => {
            return <Item data={item} key={index} />;
          })}
        </ScrollView>
        <TouchableOpacity style={styles.messageBtn}>
          <Icon
            name="message"
            size={25}
            color={theme.darkColor}
            style={styles.messageIcon}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;
