import { GestureHandlerRootView } from "react-native-gesture-handler";

interface GestureHandlerProvierProps {
  children: React.ReactNode;
}

export function GestureHandlerProvier({
  children,
}: GestureHandlerProvierProps) {
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}
    >
      {children}
    </GestureHandlerRootView>
  );
}
