import { StatusBar } from "expo-status-bar";
import { Button, Platform, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { FIREBASE_AUTH } from '@/firebaseConfig';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Button title="Sign Out" onPress={() => FIREBASE_AUTH.signOut()} />
      {/* Account deletion required in IOS store */}
      <Button
        title="Delete Account"
        onPress={() => FIREBASE_AUTH.currentUser?.delete()}
      />
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
