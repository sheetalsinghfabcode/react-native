import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TwitterPost = () => {
  const username = "JohnDoe";
  const tweet = "This is a sample tweet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  const likes = 20;
  const retweets = 10;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.username}>{username}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.tweet}>{tweet}</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.likes}>{likes} Likes</Text>
        <Text style={styles.retweets}>{retweets} Retweets</Text>
      </View>
    </View>
  );
};
const TwitterPostSkeleton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={[styles.profilePic, styles.skeleton]} />
        <Text style={[styles.username, styles.skeletonText]} />
      </View>
      <View style={[styles.content, styles.skeleton]} />
      <View style={styles.footer}>
        <Text style={[styles.likes, styles.skeletonText]} />
        <Text style={[styles.retweets, styles.skeletonText]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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
  content: {
    marginBottom: 10,
    backgroundColor: '#ddd',
    height: 100, // Adjust height according to your content
    borderRadius: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  likes: {
    color: 'blue',
  },
  retweets: {
    color: 'green',
  },
  skeleton: {
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  skeletonText: {
    backgroundColor: '#ddd',
    borderRadius: 5,
    width: '50%', // Adjust width according to your content
  },
});

export default TwitterPostSkeleton;
export { TwitterPost, TwitterPostSkeleton };
