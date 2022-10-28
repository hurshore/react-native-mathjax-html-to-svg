declare module 'react-native-mathjax-html-to-svg' {
  import { StyleProp, ViewStyle } from 'react-native';

  type Props = {
    children: React.ReactNode;
    fontSize?: number;
    color?: string;
    fontCache?: boolean;
    style?: StyleProp<ViewStyle>;
  };

  export function MathJaxSvg(props: Props);
}
