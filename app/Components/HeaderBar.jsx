import { StyleSheet, Text, View } from "react-native";
import { Colors, FontFamily, FontSize, Spacing } from "../../theme/theme";
import GradientBGIcon from "./GradientBGIcon";
import ProfilePic from "./ProfilePic";

const HeaderBar = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <GradientBGIcon
        name="bars"
        color={Colors.primaryLightGreyHex}
        size={FontSize.size_16}
      />
      <Text style={styles.headerText}>{title}</Text>
      <ProfilePic />
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  headerContainer: {
    padding: Spacing.space_30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    fontFamily: FontFamily.poppins_semibold,
    fontSize: FontSize.size_20,
    color: Colors.primaryWhiteHex,
  },
});
