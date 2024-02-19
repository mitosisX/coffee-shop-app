import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BorderRadius, Spacing } from "../../theme/theme";
import CustomIcon from "./CustomIcon";

const BGIcon = ({ name, color, size, BGColor }) => {
  return (
    <View style={[styles.iconBG, { backgroundColor: BGColor }]}>
      <CustomIcon name={name} color={color} size={size} />
    </View>
  );
};

export default BGIcon;

const styles = StyleSheet.create({
  iconBG: {
    height: Spacing.space_30,
    width: Spacing.space_30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: BorderRadius.radius_10,
  },
});
