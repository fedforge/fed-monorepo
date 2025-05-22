export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;    // used in web
  onPress?: () => void;    // used in native
}
