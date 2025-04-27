import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const renderCategoryItem = (itemData) => {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
};

export default function CategoriesScreen() {
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={CATEGORIES}
        key={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#24180f",
    paddingTop: 50,
  },
  listContainer: {},
});
