import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  BorderRadius,
  Colors,
  FontFamily,
  FontSize,
  Spacing,
} from "../../theme/theme";
import CustomIcon from "./CustomIcon";

const CARD_WIDTH = Dimensions.get("window").width * 0.32;

const CoffeeCard = ({
  id,
  index,
  type,
  roasted,
  imagelink_square,
  name,
  special_ingredient,
  average_rating,
  price,
  buttonPressHandler,
}) => {
  return (
    <View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.cardLinearGradientContainer}
        colors={[Colors.primaryGreyHex, Colors.primaryBlackHex]}
      >
        <ImageBackground
          source={imagelink_square}
          style={styles.cardImageBG}
          resizeMode="cover"
        >
          <View style={styles.cardRatingContainer}>
            <CustomIcon
              name={"star"}
              size={FontSize.size_18}
              color={Colors.primaryOrangeHex}
            />
            <Text
              style={{
                color: Colors.primaryWhiteHex,
                fontFamily: FontFamily.poppins_medium,
              }}
            >
              {average_rating}
            </Text>
          </View>
        </ImageBackground>
        <Text>{name}</Text>
        <Text>{special_ingredient}</Text>
        <View>
          <Text>
            $ <Text>{price}</Text>
          </Text>
          <TouchableOpacity>
            <Text>Hello</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default CoffeeCard;

const styles = StyleSheet.create({
  cardLinearGradientContainer: {},
  cardImageBG: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    borderRadius: BorderRadius.radius_20,
    marginBottom: Spacing.space_15,
    overflow: "hidden",
  },
  cardRatingContainer: {},
});
