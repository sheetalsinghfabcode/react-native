import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const InstagramPostSkeleton = () => {
  const shimmerAnimation = new Animated.Value(0);

  React.useEffect(() => {
    shimmer();

    return () => shimmerAnimation.stopAnimation();
  }, []);

  const shimmer = () => {
    Animated.loop(
      Animated.timing(shimmerAnimation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      })
    ).start();
  };

  const shimmerOpacity = shimmerAnimation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0.5, 1, 0.5],
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profilePic} />
        <View style={styles.username} />
      </View>
      <View style={styles.postImage} />
      <View style={styles.footer}>
        <View style={styles.caption} />
        <View style={styles.footerStats}>
          <View style={styles.likes} />
          <View style={styles.comments} />
        </View>
      </View>
      <Animated.View style={[styles.shimmer, { opacity: shimmerOpacity }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width:300,
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
    backgroundColor: '#ddd', // placeholder color
  },
  username: {
    width: 100,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#ddd', // placeholder color
  },
  postImage: {
    width: '100%',
    height: 400,
    backgroundColor: '#ddd', // placeholder color
  },
  footer: {
    padding: 10,
  },
  caption: {
    marginBottom: 5,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#ddd', // placeholder color
  },
  footerStats: {
    flexDirection: 'row',
  },
  likes: {
    marginRight: 10,
    width: 80,
    height: 15,
    borderRadius: 10,
    backgroundColor: '#ddd', // placeholder color
  },
  comments: {
    width: 100,
    height: 15,
    borderRadius: 10,
    backgroundColor: '#ddd', // placeholder color
  },
  shimmer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 10,
    backgroundColor: '#333', // Initial color
  },
});

export default InstagramPostSkeleton;
