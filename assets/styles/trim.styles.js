import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const trimStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: COLORS.background,
  },
  trimmer: {
    height: 300,
  },
  slider: {
    marginHorizontal: 10,
  },
  nextButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    marginTop: 24,
    marginBottom: 32, // Move button upward
    paddingVertical: 12,
    alignItems: 'center',
  },
  nextButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
