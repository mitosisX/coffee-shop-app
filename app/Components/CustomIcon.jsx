import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Colors, FontSize } from "../../theme/theme";

const CustomIcon = ({ style, name, size, color }) => {
  return (
    <View>
      <FontAwesome name={name} size={size} color={color} style={style} />
    </View>
  );
};

export default CustomIcon;
