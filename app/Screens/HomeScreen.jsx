import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  BorderRadius,
  Colors,
  FontFamily,
  FontSize,
  Spacing,
} from "../../theme/theme";
import HeaderBar from "../Components/HeaderBar";
import { TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import CoffeeData from "../../data/CoffeeData";
import CoffeeCard from "../Components/CoffeeCard";
import CustomIcon from "../Components/CustomIcon";

const HomeScreen = () => {
  let [searchText, setSearchText] = useState("");
  let [coffeeList, setCoffeeList] = useState([]);

  useEffect(() => {
    setCoffeeList(CoffeeData);
  }, []);

  return (
    <View style={styles.screenContainer}>
      <StatusBar backgroundColor={Colors.primaryBlackHex} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}
      >
        {/* App Header */}
        <HeaderBar />
        <Text style={styles.screenTitle}>
          Find the best{"\n"}coffee for you
        </Text>

        {/* Search Input */}
        <View style={styles.textInputContainerComponent}>
          <TouchableOpacity>
            <CustomIcon
              name="search"
              size={FontSize.size_18}
              color={
                setSearchText.length > 0
                  ? Colors.primaryWhiteHex
                  : Colors.primaryLightGreyHex
              }
              style={styles.inputIcon}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Find your coffee"
            value="Find your coffee"
            // onChangeText={(text) => setSearchText(text)}
            color={Colors.primaryLightGreyHex}
            style={styles.textInputContainer}
          />
        </View>
        <ScrollView
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryScrollView}
        >
          <FlatList
            data={[
              "All",
              "Black Coffee",
              "Cappuccino",
              "Expresso",
              "Latte",
              "Macchiato",
            ]}
            horizontal={true}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={styles.categoryScrollViewContainer}
                  key={index.toString()}
                >
                  <TouchableOpacity style={styles.categoryScrollViewItem}>
                    <Text
                      style={{
                        color: Colors.primaryWhiteHex,
                        fontFamily: FontFamily.poppins_bold,
                      }}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />

          {/* Coffee list */}
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={coffeeList}
            contentContainerStyle={styles.coffeeFlatListContainer}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity>
                  <CoffeeCard
                    id={item.id}
                    index={index}
                    type={item.type}
                    roasted={item.roasted}
                    imagelink_square={item.imagelink_square}
                    name={item.name}
                    special_ingredient={item.special_ingredient}
                    average_rating={item.average_rating}
                    price={item.prices[2].price}
                    buttonPressHandler={() => console.log(2)}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.primaryBlackHex,
  },
  scrollViewFlex: {
    flexGrow: 1,
  },
  screenTitle: {
    fontFamily: FontFamily.poppins_semibold,
    fontSize: FontSize.size_28,
    color: Colors.primaryWhiteHex,
    paddingLeft: Spacing.space_30,
  },
  textInputContainerComponent: {
    margin: Spacing.space_30,
    borderRadius: BorderRadius.radius_20,
    backgroundColor: Colors.primaryGreyHex,
    flexDirection: "row",
    alignItems: "center",
  },
  textInputContainer: {
    height: Spacing.space_20 * 3,
    fontFamily: FontFamily.poppins_medium,
    fontSize: FontSize.size_14,
    color: Colors.primaryWhiteHex,
    flex: 1,
  },
  inputIcon: {
    marginHorizontal: Spacing.space_20,
  },
  categoryScrollView: {
    paddingHorizontal: Spacing.space_20,
    marginBottom: Spacing.space_20,
  },
  categoryScrollViewContainer: {
    paddingHorizontal: Spacing.space_15,
  },
  categoryScrollViewItem: {
    alignItems: "center",
  },
  coffeeFlatListContainer: {
    gap: Spacing.space_20,
    paddingVertical: Spacing.space_20,
    paddingHorizontal: Spacing.space_30,
  },
});

export default HomeScreen;
