// VideoPickerScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { pickerStyles } from '../assets/styles/picker.styles';

export default function VideoPickerScreen({ navigation }) {
  const [isPicking, setIsPicking] = useState(false);
  const [galleryAnim] = useState(new Animated.Value(1));
  const [cameraAnim] = useState(new Animated.Value(1));

  const animateIn = (anim) => {
    Animated.sequence([
      Animated.timing(anim, {
        toValue: 0.95,
        duration: 80,
        useNativeDriver: true,
        easing: Easing.out(Easing.quad),
      }),
      Animated.timing(anim, {
        toValue: 1,
        duration: 120,
        useNativeDriver: true,
        easing: Easing.out(Easing.quad),
      }),
    ]).start();
  };

  const pickVideoFromLibrary = async () => {
    if (isPicking) return;
    setIsPicking(true);
    animateIn(galleryAnim);
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission required', 'Gallery access is needed.');
      setIsPicking(false);
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      quality: 1,
    });
    if (!result.canceled && result.assets?.length > 0) {
      navigation.navigate('Trim', { uri: result.assets[0].uri });
    }
    setIsPicking(false);
  };

  const recordVideo = async () => {
    if (isPicking) return;
    setIsPicking(true);
    animateIn(cameraAnim);
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission required', 'Camera access is needed.');
      setIsPicking(false);
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      quality: 1,
    });
    if (!result.canceled && result.assets?.length > 0) {
      navigation.navigate('Trim', { uri: result.assets[0].uri });
    }
    setIsPicking(false);
  };

  return (
    <View style={pickerStyles.bg}>
      <View style={pickerStyles.overlay} />
      <View style={pickerStyles.content}>
        <Text style={pickerStyles.title}>Select a Video</Text>
        <View style={pickerStyles.buttonRow}>
          <Animated.View style={{ transform: [{ scale: galleryAnim }] }}>
            <TouchableOpacity
              style={pickerStyles.button}
              onPress={pickVideoFromLibrary}
              activeOpacity={0.85}
              disabled={isPicking}
            >
              <Ionicons name="image" size={32} color="#fff" style={pickerStyles.icon} />
              <Text style={pickerStyles.buttonText}>From Gallery</Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View style={{ transform: [{ scale: cameraAnim }] }}>
            <TouchableOpacity
              style={pickerStyles.button}
              onPress={recordVideo}
              activeOpacity={0.85}
              disabled={isPicking}
            >
              <Ionicons name="camera" size={32} color="#fff" style={pickerStyles.icon} />
              <Text style={pickerStyles.buttonText}>Record Video</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}
