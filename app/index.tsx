import { Text, View } from "react-native";
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import AnimatedIntro from "@/components/AnimatedIntro";
import BottomLoginSheet from "@/components/BottomloginSheet";

export default function Index() {
  const handleGestureEvent = () => {
    // Prevent swipe gesture
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PanGestureHandler onGestureEvent={handleGestureEvent}>
        <View
          style={{
            flex: 1,
          }}
        >
          <AnimatedIntro />
          <BottomLoginSheet />
        </View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
}