import React, {useEffect} from 'react';
import {FlatList, ListRenderItemInfo, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {
  useGetStoryItemMutation,
  useGetTopStoriesMutation,
} from '../../store/apis/newsApi';
import {setNews, setTopNewsItem} from '../../store/reducers/news';
import {RootState} from '../../store';
import {Header} from '../../components/Header';
import {HackerNewsStory} from '../../store/types/news';
import {styles} from './styles';
import {NewsItem} from './components/NewsItem';

export const NewsListScreen = () => {
  const dispatch = useDispatch();
  const [getTopStories] = useGetTopStoriesMutation();
  const [getStoryItem] = useGetStoryItemMutation();
  const {topNews, topNewsItems} = useSelector((state: RootState) => state.news);

  useEffect(() => {
    fetchTopStories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchStoryDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topNews]);

  const fetchStoryDetails = async () => {
    try {
      let tempTopNewsItem: HackerNewsStory[] = [];
      for (const id of topNews) {
        const result = await getStoryItem({storyId: id}).unwrap();
        if (result) {
          tempTopNewsItem.push(result);
        }
      }
      dispatch(setTopNewsItem(tempTopNewsItem));
    } catch (error) {
      console.warn(error);
    }
  };

  const fetchTopStories = async () => {
    const result = await getTopStories({}).unwrap();
    dispatch(setNews(result));
  };

  const renderListSeparatorComponent = () => {
    return <View style={styles.listSeparator} />;
  };

  const renderItem = ({item}: ListRenderItemInfo<HackerNewsStory>) => {
    return <NewsItem item={item} />;
  };

  return (
    <View style={styles.flexOne}>
      <Header centerComponent={{title: 'Hacker News'}} />
      <FlatList
        data={topNewsItems}
        renderItem={renderItem}
        ItemSeparatorComponent={renderListSeparatorComponent}
      />
    </View>
  );
};
