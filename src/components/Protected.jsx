import { useEffect } from "react";
import useAuthStore from "@/store/auth_store";

export default function Protected({ navigation, children }) {
  const { user } = useAuthStore();

  useEffect(() => {
    if (user) return;
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  }, [user]);

  if (!user) return <></>;

  return children;
}
