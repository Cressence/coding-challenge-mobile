import React from 'react';
import {Text, View} from 'react-native';

import styles from './item.style';

const Item = (props) => {
  const event = props.data;
  return (
    <View style={styles.container}>
      <Text style={styles.date}>
        {event.day} {event.month}
      </Text>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{event.title}</Text>
      </View>
      <View style={[styles.titleContainer, styles.timeContainer]}>
        <Text style={styles.title}>{event.time}</Text>
      </View>
      <Text style={styles.location}>{event.location}</Text>
      <Text style={styles.eventDetails}>+ Event Details</Text>
    </View>
  );
};

export default Item;
