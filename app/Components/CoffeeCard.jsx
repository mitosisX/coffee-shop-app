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
import BGIcon from "./BGIcon";

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
              size={FontSize.size_16}
              color={Colors.primaryOrangeHex}
            />
            <Text style={styles.cardRatingText}>{average_rating}</Text>
          </View>
        </ImageBackground>
        <Text style={styles.cardTitle}>{name}</Text>
        <Text style={styles.cardSubTitle}>{special_ingredient}</Text>
        <View style={styles.cardFooterRow}>
          <Text style={styles.cardPriceCurrency}>
            $ <Text style={styles.cardPrice}>{price}</Text>
          </Text>
          <TouchableOpacity>
            <BGIcon
              color={Colors.primaryWhiteHex}
              name={"plus"}
              BGColor={Colors.primaryOrangeHex}
              size={FontSize.size_10}
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default CoffeeCard;

const styles = StyleSheet.create({
  cardLinearGradientContainer: {
    padding: Spacing.space_10,
    borderRadius: BorderRadius.radius_20,
  },
  cardImageBG: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    borderRadius: BorderRadius.radius_20,
    marginBottom: Spacing.space_15,
    overflow: "hidden",
  },
  cardRatingContainer: {
    flexDirection: "row",
    backgroundColor: Colors.primaryBlackRGBA,
    alignItems: "center",
    justifyContent: "center",
    glap: Spacing.space_10,
    paddingHorizontal: Spacing.space_15,
    position: "absolute",
    top: 0,
    right: 0,
    borderBottomLeftRadius: BorderRadius.radius_20,
  },
  cardRatingText: {
    marginLeft: 5,
    color: Colors.primaryWhiteHex,
    fontFamily: FontFamily.poppins_medium,
    fontSize: FontSize.size_14,
    lineHeight: 22,
  },
  cardFooterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: Spacing.space_15,
  },
  cardTitle: {
    color: Colors.primaryWhiteHex,
    fontFamily: FontFamily.poppins_medium,
    fontSize: FontSize.size_16,
  },
  cardSubTitle: {
    color: Colors.primaryWhiteHex,
    fontFamily: FontFamily.poppins_light,
    fontSize: FontSize.size_10,
  },
  cardPrice: {
    color: Colors.primaryWhiteHex,
  },
  cardPriceCurrency: {
    color: Colors.primaryOrangeHex,
    fontFamily: FontFamily.poppins_semibold,
    fontSize: FontSize.size_18,
  },
});
