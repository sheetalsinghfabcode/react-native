import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ActivityIndicator } from 'react-native';
import {TwitterPost} from "../components/TwitterPost"
 
// Simulated static data for tweets
const initialTweetsData = [
  {
    id: 1,
    username: "Saini",
    handle: "@shiti_saini",
    avatar: require("../assets/virat.jpg"),
    tweetText: "Hai Koi Hor?",
    retweets: 20,
    likes: 30,
  },
  {
    id: 1,
    username: "JohnDoe",
    handle: "@john_doe",
    avatar: require("../assets/virat.jpg"),
    tweetText: "Hai Koi Hor?",
    retweets: 20,
    likes: 30,
  },
  // Add more tweet objects here as needed
];

const TwitterComponent = () => {
  const [loading, setLoading] = useState(false);
  const [tweetsData, setTweetsData] = useState(initialTweetsData);
  const [page, setPage] = useState(1); // Track the current page of data

  // Simulated data fetching function with delay
  const fetchData = () => {
    setLoading(true);
    setTimeout(() => {
      const newTweets = Array.from({ length: 1 }, (_, index) => ({
        id: tweetsData.length + index + 1,
        username: `User${tweetsData.length + index + 1}`,
        handle: `@user${tweetsData.length + index + 1}`,
        avatar: require("../assets/virat.jpg"),
        tweetText: `Tweet number ${tweetsData.length + index + 1}`,
        retweets: Math.floor(Math.random() * 50),
        likes: Math.floor(Math.random() * 50),
      }));
      setTweetsData(prevData => [...prevData, ...newTweets]);
      setLoading(false);
    }, 900); // Simulated delay
  };

  // Function to fetch more data when reaching the end of the list
  const handleLoadMore = () => {
    if (!loading) {
      setPage(prevPage => prevPage + 1); // Increment page number
    }
  };

  useEffect(() => {
    fetchData(); // Initial data fetching
  }, []);

  useEffect(() => {
    if (page > 1) {
      fetchData(); // Fetch data when page changes
    }
  }, [page]);

  // Render item for FlatList
  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={item.avatar}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.username}>{item.username}</Text>
          <Text style={styles.handle}>{item.handle}</Text>
        </View>
      </View>
      <Text style={styles.tweetText}>{item.tweetText}</Text>
      <View style={styles.footer}>
        <Text style={styles.stats}>{item.retweets} Retweets</Text>
        <Text style={styles.stats}>{item.likes} Likes</Text>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={tweetsData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={loading ? <TwitterPost /> : null}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
  },
  handle: {
    color: '#555',
  },
  tweetText: {
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stats: {
    color: '#555',
  },
});

export default TwitterComponent;
