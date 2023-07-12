declare module '@hurshore/react-native-mathjax-html-to-svg' {
  import { TextProps, TextStyle, ViewStyle } from 'react-native';
  import { ReactNode } from 'react';

  type Props = {
    fontSize?: number;
    color?: string;
    fontCache?: boolean;
    style?: ViewStyle;
    textStyle?: TextStyle;
    textProps?: TextProps;
    children?: ReactNode;
  };

  export function MathJaxSvg(props: Props);
}
