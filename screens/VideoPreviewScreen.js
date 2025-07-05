// VideoPreviewScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';
import { COLORS } from '../constants/colors';
import { previewStyles } from '../assets/styles/preview.styles';

export default function VideoPreviewScreen({ route }) {
  const { trimmedUri } = route.params;
  const player = useVideoPlayer({ uri: trimmedUri }, (pl) => {
    pl.play();
    pl.loop = true;
  });

  return (
    <View style={previewStyles.container}>
      <View style={previewStyles.frame}>
        <VideoView style={previewStyles.video} player={player} allowsFullscreen />
      </View>
    </View>
  );
}
