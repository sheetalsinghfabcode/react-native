import * as React from "react";
import { View, StyleSheet, Button } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { Icon } from "react-native-elements"; // Import Icon from React Native Elements

export default function VideoComponents() {
  const video = React.useRef(null);
  const [isMuted, setIsMuted] = React.useState(false);

  return (
    <View>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        isMuted={isMuted}
      />
        <Icon
          name={isMuted ? 'volume-off' : 'volume-up'}
          type='font-awesome'
          color='white'
          onPress={() => setIsMuted(prev => !prev)}
          containerStyle={styles.iconContainer}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
    position: 'relative'
  },
  iconContainer: {
    padding: 10,
    borderRadius: 20,
    position: 'absolute',
    right: 2,
    bottom: 22
  },
});
