import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors, Spacing } from "../../theme/theme";
import { FontAwesome } from "@expo/vector-icons";

const GradientBGIcon = ({ name, size, color }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[Colors.primaryGreyHex, Colors.primaryBlackHex]}
        style={styles.lienarGradientBG}
      >
        <FontAwesome name={name} size={size} color={color} />
      </LinearGradient>
    </View>
  );
};

export default GradientBGIcon;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.secondaryDarkGreyHex,
    borderRadius: Spacing.space_12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primaryDarkGreyHex,
    overflow: "hidden",
  },
  lienarGradientBG: {
    height: Spacing.space_36,
    width: Spacing.space_36,
    alignItems: "center",
    justifyContent: "center",
  },
});
