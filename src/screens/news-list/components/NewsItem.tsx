import React from 'react';
import {Linking, Text, TouchableOpacity, View} from 'react-native';

import {HackerNewsStory} from '../../../store/types/news';
import {styles} from '../styles';
import DomainDisplay from '../../../components/DomainText';
import {convertUnixTimestampToTimeAgo} from '../../../utils/time';

interface NewsItemProps {
  item: HackerNewsStory;
}

export const NewsItem = (props: NewsItemProps) => {
  const {item} = props;
  return (
    <View style={styles.newsContainer}>
      <View style={styles.newsDetailsContainer}>
        <Text style={styles.newsTitle} numberOfLines={2} ellipsizeMode={'tail'}>
          {item.title}
        </Text>
        {item.url ? (
          <TouchableOpacity
            onPress={() => Linking.openURL(item.url)}
            style={styles.newsLink}>
            <DomainDisplay url={item.url} />
          </TouchableOpacity>
        ) : (
          <Text style={styles.newsLink}>No link</Text>
        )}
        <View style={styles.flexRow}>
          <Text style={styles.newsScore}>{`${item.score}`}</Text>
          <Text>
            {' by'} <Text style={styles.fontBold}>{item.by}</Text>{' '}
            {convertUnixTimestampToTimeAgo(item.time)}
          </Text>
        </View>
      </View>
      {item.kids?.length > 0 && (
        <View style={styles.newsThreadCountContainer}>
          <Text style={styles.newsThreadCount}>{item.kids?.length}</Text>
        </View>
      )}
    </View>
  );
};
