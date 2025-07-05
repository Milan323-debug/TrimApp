import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import VideoTrimmerUI from 'react-native-video-trimmer-ui';
import { trimStyles } from '../assets/styles/trim.styles';
import * as FileSystem from 'expo-file-system';
import { FFmpegKit, ReturnCode } from 'ffmpeg-kit-react-native';

export default function VideoTrimScreen({ route, navigation }) {
  const { uri } = route.params;
  const trimmerRef = useRef(null);
  const [range, setRange] = useState([0, 0]);
  const [isTrimming, setIsTrimming] = useState(false);

  const handleTrim = async (start, end) => {
    setIsTrimming(true);
    const output = `${FileSystem.cacheDirectory}trimmed_${Date.now()}.mp4`;
    // Use -y to force overwrite, and mpeg4/aac for FFmpegKit min package compatibility
    const cmd = `-y -i "${uri}" -ss ${start} -to ${end} -c:v mpeg4 -c:a aac "${output}"`;
    await FFmpegKit.executeAsync(cmd, async session => {
      const rc = await session.getReturnCode();
      const failStackTrace = await session.getFailStackTrace();
      const outputLog = await session.getOutput();
      const logs = await session.getAllLogs();
      setIsTrimming(false);
      if (ReturnCode.isSuccess(rc)) {
        navigation.navigate('Preview', { trimmedUri: output });
      } else {
        console.error('Trim error:', failStackTrace, outputLog, logs);
        // Optionally, show a user-friendly error message here
      }
    });
  };

  return (
    <SafeAreaView style={trimStyles.container}>
      <VideoTrimmerUI
        source={{ uri }}
        onSelected={(start, end) => setRange([start, end])}
        loop
        containerStyle={trimStyles.trimmer}
        tintColor="#1E90FF"
        minDuration={1}
        sliderContainerStyle={trimStyles.slider}
        ref={trimmerRef}
      />
      <TouchableOpacity
        style={trimStyles.nextButton}
        onPress={() => handleTrim(range[0], range[1])}
        disabled={range[1] - range[0] < 0.5 || isTrimming}
      >
        <Text style={trimStyles.nextButtonText}>{isTrimming ? 'Trimming...' : 'Next'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
