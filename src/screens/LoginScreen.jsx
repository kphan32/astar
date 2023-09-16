import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import useAuthStore from "@/store/auth_store";

export default function LoginScreen({ navigation }) {
  const { setUser } = useAuthStore();

  const [username, handleUsernameChange] = useState("");
  const [password, handlePasswordChange] = useState("");

  const handleSubmit = () => {
    setUser({ username });

    handleUsernameChange("");
    handlePasswordChange("");

    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  };

  return (
    <View className="h-full flex justify-center">
      <View className="mx-auto w-48 flex justify-center items-center space-y-4">
        <Text className="text-6xl font-bold">A*</Text>

        <TextInput
          value={username}
          onChangeText={handleUsernameChange}
          placeholder="Username"
          className="w-full px-4 py-2 border-2 rounded-lg"
        />

        <TextInput
          value={password}
          onChangeText={handlePasswordChange}
          placeholder="Password"
          className="w-full px-4 py-2 border-2 rounded-lg"
        />

        <View className="w-full">
          <Button title="Login" onPress={handleSubmit} />
        </View>
      </View>
    </View>
  );
}
