import { Button, Text, View } from "react-native";
import useAuthStore from "@/store/auth_store";
import Protected from "@/components/Protected";
import Mapbox from "@rnmapbox/maps";

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_PUBLIC_KEY);

export default function HomeScreen({ navigation }) {
  const { user, setUser } = useAuthStore();

  return (
    <Protected navigation={navigation}>
      <View className="h-full flex justify-evenly items-center">
        <View className="text-center flex items-center">
          <Text className="font-bold text-4xl">Hello, {user?.username}</Text>
        </View>

        <Mapbox.MapView className="w-full h-96" />

        <Button title="Logout" onPress={() => setUser(null)} />
      </View>
    </Protected>
  );
}
