import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSaveAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSaveAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>

      <Link
        href="/onboarding"
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Go to Onboarding
      </Link>

      <Link
        href="/(auth)/sing-in"
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Go to Sing In
      </Link>

      <Link
        href="/(auth)/sing-up"
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Go to Sing Up
      </Link>

      <Link
        href="/subscriptions/spotify"
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Spotify Subscription
      </Link>

      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "claude" },
        }}
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Claude Max Subscription
      </Link>
    </SafeAreaView>
  );
}
