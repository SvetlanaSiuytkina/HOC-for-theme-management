import type { ThemePalette, ThemeType } from "../types";

export interface ThemedButtonProps {
  theme: ThemeType;
  palette: ThemePalette;
  label: string;
  onClick?: () => void;
}

function ThemedButton ({ theme, palette, label, onClick }: ThemedButtonProps) {
  const colors = palette[theme];

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: colors.buttonBackground,
        color: colors.buttonText,
        border: `2px solid ${colors.buttonBorder}`,
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
      }}
    >
      {label}
    </button>
  );
}

export default ThemedButton;