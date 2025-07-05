import { StyleSheet } from 'react-native';

export const pickerStyles = StyleSheet.create({
  bg: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#E8F5E9', // forestTheme background
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(20,40,20,0.10)',
  },
  content: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 20, // Less bottom padding to move content up
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 23, // Allow content to start higher
    justifyContent: 'unset', // Center vertically
  },
  title: {
    color: '#1B5E20', // forestTheme text
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 40,
    letterSpacing: 0.5,
  },
  buttonRow: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 24,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2E7D32', // forestTheme primary
    borderRadius: 32,
    paddingVertical: 20,
    paddingHorizontal: 36,
    marginVertical: 8,
    width: 280,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 16,
    elevation: 6,
  },
  icon: {
    marginRight: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});
