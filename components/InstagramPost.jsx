import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ActivityIndicator } from 'react-native';
import InstagramPostSkeleton from './InstagramPostSkeleton';

// Simulated static data for posts
const initialPostsData = [
    {
      id: 1,
      username: "Shiti Saini",
      imageUrl: require("../assets/virat.jpg"),
      likes: 59,
      comments: 10,
      caption: "No caption needed...",
    },
    {
      id: 2,
      username: "Shiti Saini",
      imageUrl: require("../assets/virat.jpg"),
      likes: 59,
      comments: 10,
      caption: "No caption needed...",
    },

   
    // Add more post objects here as needed
  ];

const InstagramPost = () => {
  const [loading, setLoading] = useState(false);
  const [postsData, setPostsData] = useState(initialPostsData);
  const [page, setPage] = useState(1); // Track the current page of data

  // Simulated data fetching function with delay
  const fetchData = () => {
    setLoading(true);
    setTimeout(() => {
      const newPosts = Array.from({ length: 1}, (_, index) => ({
        id: postsData.length + index + 1,
        username: `User ${postsData.length + index + 1}`,
        imageUrl: require("../assets/virat.jpg"),
        likes: Math.floor(Math.random() * 100),
        comments: Math.floor(Math.random() * 20),
        caption: `Caption ${postsData.length + index + 1}`,
      }));
      setPostsData(prevData => [...prevData, ...newPosts]);
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
          source={item.imageUrl}
          style={styles.profilePic}
        />
        <Text style={styles.username}>{item.username}</Text>
      </View>
      <Image
        source={item.imageUrl}
        style={styles.postImage}
      />
      <View style={styles.footer}>
        <Text style={styles.caption}>{item.caption}</Text>
        <View style={styles.footerStats}>
          <Text style={styles.likes}>{item.likes} likes</Text>
          <Text style={styles.comments}>{item.comments} comments</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={postsData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.2}
        ListFooterComponent={loading ? <InstagramPostSkeleton/> : null}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 10,
    width: 300,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden', // Prevents content overflow
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 400,
  },
  footer: {
    padding: 10,
  },
  caption: {
    marginBottom: 5,
  },
  footerStats: {
    flexDirection: 'row',
  },
  likes: {
    marginRight: 10,
  },
  comments: {},
});

export default InstagramPost;
