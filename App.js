import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Button } from "react-native";
import InstagramPostSkeleton from "./components/InstagramPostSkeleton";
import InstagramPost from "./components/InstagramPost";
import TwitterComponent from "./components/TwitterComponent";
import { TwitterPost, TwitterPostSkeleton } from "./components/TwitterPost";

const App = () => {
  const [loading, setLoading] = useState(true);

  const video = useRef(null);
  const [statusVideo, setStatusVideo] = useState();

  useEffect(() => {
    // Simulating loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      
      <TwitterPost />
      {/* {loading ? (
        <>
          <InstagramPostSkeleton />
        </>
      ) : ( */}
      <InstagramPost />
      {/* )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  video: {
    flex: 1,
    alignSelf: "stretch",
  },
  button: {
    margin: 16,
  },
});

export default App;
