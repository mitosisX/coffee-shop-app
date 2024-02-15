import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors, Spacing } from "../../theme/theme";
import { Image } from "react-native";

const ProfilePic = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={require("../../assets/app_images/avatar.png")}
      />
    </View>
  );
};

export default ProfilePic;

const styles = StyleSheet.create({
  imageContainer: {
    height: Spacing.space_36,
    width: Spacing.space_36,
    borderRadius: Spacing.space_12,
    borderWidth: 2,
    alignContent: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderColor: Colors.secondaryDarkGreyHex,
  },
  image: {
    height: Spacing.space_36,
    width: Spacing.space_36,
  },
});
