export type ThemeType = 'light' | 'dark';

export interface ThemeColors {
  background: string;
  text: string;
  buttonBackground: string;
  buttonText: string;
  buttonBorder: string;
}

export interface ThemePalette {
  light: ThemeColors;
  dark: ThemeColors;
}