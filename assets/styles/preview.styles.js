import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const previewStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24, // padding on all sides for the frame effect
  },
  frame: {
    flex: 1,
    width: '100%',
    borderRadius: 24,
    borderWidth: 2,
    borderColor: COLORS.border,
    backgroundColor: COLORS.card,
    overflow: 'hidden',
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.10,
    shadowRadius: 16,
    elevation: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    aspectRatio: 9/16, // portrait video aspect
    backgroundColor: COLORS.background,
  },
});
