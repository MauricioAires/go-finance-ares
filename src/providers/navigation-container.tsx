import { NavigationContainer } from "@react-navigation/native";

interface NavigationContainerProvierProps {
  children: React.ReactNode;
}

export function NavigationContainerProvier({
  children,
}: NavigationContainerProvierProps) {
  return <NavigationContainer>{children}</NavigationContainer>;
}
