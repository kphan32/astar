import { Button, Text, View } from "react-native";
import useAuthStore from "@/store/auth_store";
import Protected from "@/components/Protected";

export default function HomeScreen({ navigation }) {
  const { user, setUser } = useAuthStore();

  return (
    <Protected navigation={navigation}>
      <View className="h-full flex justify-evenly items-center">
        <View className="text-center flex items-center">
          <Text className="font-bold text-4xl">Hello, {user?.username}</Text>
        </View>

        <Button title="Logout" onPress={() => setUser(null)} />
      </View>
    </Protected>
  );
}
