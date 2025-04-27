import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

export default function CategoryGridTile({ title, color }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.gridText}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  pressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    shadowRadius: 4,
    shadowOpacity: 0.75,
    shadowOffset: { width: 0, height: 2 },
    borderRadius: 8,
  },
  gridText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
