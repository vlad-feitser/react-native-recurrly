import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SingIn = () => {
  return (
    <View>
      <Text>SingIn</Text>
      <Link href="/(auth)/sing-up">Create Account</Link>
    </View>
  );
};

export default SingIn;
